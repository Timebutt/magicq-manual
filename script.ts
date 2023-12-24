import { writeFileSync } from 'fs';
import { JSDOM } from 'jsdom';
import { parse } from 'node-html-parser';
import { Options, format } from 'prettier';
import { stringify } from 'yaml';

const prettierConfig = {
    parser: 'html',
    singleQuote: true,
    tabWidth: 4,
    printWidth: 140,
    bracketSameLine: true,
    htmlWhitespaceSensitivity: 'ignore',
} satisfies Options;
const startUrl = 'https://secure.chamsys.co.uk/help/documentation/magicq/index.html';

const onlyUnique = <T>(value: T, index: number, self: T[]) => self.indexOf(value) === index;

const formatStringToCamelCase = (str: string) => {
    const splitted = str.split('-');
    if (splitted.length === 1) return splitted[0];
    return (
        splitted[0] +
        splitted
            .slice(1)
            .map((word) => word[0].toUpperCase() + word.slice(1))
            .join('')
    );
};

export const getStyleObjectFromString = (str: string) => {
    const style: Record<string, string> = {};
    str.split(';').forEach((el) => {
        if (!el) return;

        const [property, value] = el.split(':');
        if (!property || property === ' ' || !value) return;

        const formattedProperty = formatStringToCamelCase(property.trim());
        style[formattedProperty] = value.trim();
    });

    return style;
};

async function run() {
    const htmlContent = await fetch(startUrl).then((response) => response.text());
    const root = parse(htmlContent);

    const htmlFiles = root
        .querySelectorAll('a')
        .filter((element) => element.getAttribute('href'))
        .map((element) => element.getAttribute('href')?.split('#')[0])
        .filter(onlyUnique);
    htmlFiles.push('index.html');

    await Promise.all(
        htmlFiles.map(async (htmlFile) => {
            if (!htmlFile) {
                return;
            }

            if (htmlFile === 'installing.html') {
                console.log('running it now!');
            }

            // TO-DO: remove
            // if (htmlFile !== 'midi.html') {
            //     return;
            // }

            const content = await fetch(`https://secure.chamsys.co.uk/help/documentation/magicq/${htmlFile}`).then((response) =>
                response.text(),
            );

            if (!content) {
                return;
            }

            const processedContent = content.replaceAll('style=""', '');
            const document = new JSDOM(processedContent).window.document;

            const title = document.querySelector<HTMLDivElement>('.titlepage .title')?.textContent?.trim();
            const index = parseInt((title ?? '').match(/\d+/)?.[0] ?? '', 10);
            const articleHeader = stringify({
                id: htmlFile.split('.html')[0],
                title,
                ...(typeof index === 'number' && index >= 0 ? { sidebar_position: index } : {}),
            });

            const titlePageNodes = document.querySelectorAll('.titlepage');
            for (const titlePageNode of titlePageNodes) {
                const titleNode = titlePageNode.querySelector('.title');
                if (!titleNode) {
                    return;
                }

                const tagName = titleNode.tagName;
                const tagTitle = titleNode.textContent;

                console.log(tagTitle);

                if (tagName === 'H1') {
                    titlePageNode.replaceWith(`# ${tagTitle}`);
                } else if (tagName === 'H2') {
                    titlePageNode.replaceWith(`## ${tagTitle}`);
                } else if (tagName === 'H3') {
                    titlePageNode.replaceWith(`### ${tagTitle}`);
                } else if (tagName === 'H4') {
                    titlePageNode.replaceWith(`#### ${tagTitle}`);
                } else if (tagName === 'H5') {
                    titlePageNode.replaceWith(`##### ${tagTitle}`);
                }
            }

            const articleContent = document.querySelector('.chapter');
            if (!articleContent) {
                console.log(htmlFile);
                console.log('hmm');
                return;
            }

            // TO-DO: this doesn't work right yet!
            articleContent.querySelectorAll('*').forEach((node) => {
                const style = node.getAttribute('style');

                if (style) {
                    const jo = JSON.stringify(getStyleObjectFromString(style));
                    node.removeAttribute('style');
                }
            });

            // Fix image URLs
            articleContent.querySelectorAll('img').forEach((node) => {
                const currentSrc = node.getAttribute('src');

                if (currentSrc && !currentSrc.startsWith('http')) {
                    node.setAttribute('src', `https://secure.chamsys.co.uk/help/documentation/magicq/${currentSrc}`);
                }
            });

            let formattedContent = await format(articleContent.innerHTML, prettierConfig);
            formattedContent = formattedContent.replaceAll(/<\/pre\n.*\>/gm, `\n</pre>`);
            // .replaceAll('&nbsp;', ' ')

            writeFileSync(`./docs/${htmlFile.split('.html')[0]}.md`, `---\n${articleHeader}---\n\n${formattedContent}`);
        }),
    );

    console.log('done');
}

run();
