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
            if (htmlFile !== 'midi.html') {
                return;
            }

            const content = await fetch(`https://secure.chamsys.co.uk/help/documentation/magicq/${htmlFile}`).then((response) =>
                response.text(),
            );
            // const parsedHtml = parse(await format(content?.toString() ?? '', prettierConfig));
            // If you don't run Prettier the results are better it seems

            if (!content) {
                return;
            }

            const document = new JSDOM(content.toString()).window.document;

            const title = document.querySelector<HTMLDivElement>('.titlepage .title')?.textContent?.trim();
            const index = parseInt((title ?? '').match(/\d+/)?.[0] ?? '', 10);
            const articleHeader = stringify({
                id: htmlFile.split('.html')[0],
                title,
                ...(typeof index === 'number' && index >= 0 ? { sidebar_position: index } : {}),
            });
            const titleNode = document.querySelector('.titlepage');
            if (titleNode) {
                titleNode.remove();
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
                    JSON.stringify(getStyleObjectFromString(style));
                    node.removeAttribute('style');
                }
                // TO-DO: remove style="" tags as well - they cause crashes!
            });

            // Fix image URLs
            articleContent.querySelectorAll('img').forEach((node) => {
                const currentSrc = node.getAttribute('src');

                if (currentSrc && !currentSrc.startsWith('http')) {
                    node.setAttribute('src', `https://secure.chamsys.co.uk/help/documentation/magicq/${currentSrc}`);
                }
            });

            // TO-DO: er is nog iets raar met die Prettier parsing dawe moeten fixen
            // Mogelijks moeten we eerst Prettier runnen over hun files vooraleer we ze binnentrekken ofzo kweenie
            // const formattedContent = await format(articleContent?.toString() ?? '', prettierConfig);
            const formattedContent = await format(articleContent.innerHTML, prettierConfig);

            writeFileSync(`./docs/${htmlFile.split('.html')[0]}.md`, `---\n${articleHeader}---\n\n${formattedContent}`);
        }),
    );

    console.log('done');
}

run();
