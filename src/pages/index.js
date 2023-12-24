import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <img src="img/chamsys.svg" className="hero-image" />
                <Heading as="h1" className="hero--title">
                    {siteConfig.title}
                </Heading>
                <p className="hero--subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link className="button button--secondary button--lg" to="/docs/intro">
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
            <HomepageHeader />
            <main>
                <HomepageFeatures />

                {/* TO-DO: this has to be generated from the configuration */}
                <div class="toc">
                    <p>
                        <strong>Table of Contents</strong>
                    </p>
                    <dt>
                        <span class="preface">
                            <a href="docs/pr01.html"></a>
                        </span>
                    </dt>
                    <dt>
                        <span class="chapter">
                            <a href="docs/intro.html">1. Introduction</a>
                        </span>
                    </dt>
                    <dl class="toc">
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/intro.html#11-magicq-software-and-consoles">1.1. MagicQ software and consoles</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/intro.html#12-magicq-mq500-stadium-console">1.2. MagicQ MQ500 Stadium Console</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/intro.html#13-magicq-compact-series">1.3. MagicQ Compact Series</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/intro.html#14-magicq-wings-for-use-with-pc-mac">
                                            1.4. MagicQ Wings for use with PC/Mac
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/intro.html#15-plugging-up">1.5. Plugging Up</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/intro.html#16-dmx-connections">1.6. DMX Connections</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/intro.html#17-powering-up">1.7. Powering Up</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/intro.html#18-powering-down">1.8. Powering Down</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/intro.html#19-resetting-the-console">1.9. Resetting the Console</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/intro.html#110-hard-reset">1.10. Hard Reset</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/intro.html#111-power-supply-protection">1.11. Power Supply Protection</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/intro.html#112-care-of-your-magicq-console">1.12. Care of your MagicQ console</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/intro.html#113-safety-information">1.13. Safety Information</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/intro.html#114-security-information">1.14. Security Information</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/intro.html#115-disposal-information">1.15. Disposal Information</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/installing..Installing-html">2. Installing MagicQ Software &amp; Drivers</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/installing.html#21-magicq-software">2.1. MagicQ software</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/installing.html#22-magicdmx">2.2. MagicDMX</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/installing.html#23-magicq-wings-amp-interfaces">2.3. MagicQ Wings &amp; Interfaces</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/installing.html#2-install-windows">2.4. MagicQ on Windows</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/installing.html#2-install-mac">2.5. MagicQ on Mac</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/installing.html#2-install-linux">2.6. MagicQ on Linux</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/pc..Using-html">3. Using MagicQ on PCs and Macs</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/pc.html#31-simple-generic-console">3.1. Simple Generic Console</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/pc.html#32-technician-test-head">3.2. Technician Test Head</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/pc.html#33-demo-shows">3.3. Demo Shows</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/pc.html#34-touch-view">3.4. Touch View</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/pc.html#35-playback-mode">3.5. Playback mode</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/pc.html#36-copy-and-paste-to-external-applications-via-the-clipboard">
                                            3.6. Copy and paste to external applications via the clipboard
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/pc.html#37-magicq-pc-mac-restrictions-demo-mode">
                                            3.7. MagicQ PC / Mac Restrictions (Demo mode)
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/pc.html#38-magichd-stand-alone-restriction">3.8. MagicHD Stand Alone Restriction</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/concepts..MagicQ-html">4. MagicQ Concepts</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/concepts.html#41-show-storage">4.1. Show Storage</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/concepts.html#42-output-channels">4.2. Output channels</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/concepts.html#43-concepts-cues">4.3. Cues</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/concepts.html#44-concepts-cue-stacks">4.4. Cue Stacks</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/concepts.html#45-playbacks">4.5. Playbacks</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/concepts.html#46-pages">4.6. Pages</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/concepts.html#47-fx">4.7. FX</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/concepts.html#48-window-layouts">4.8. Window Layouts</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/concepts.html#49-shift-functions">4.9. Shift Functions</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/concepts.html#410-the-programmer">4.10. The Programmer</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/concepts.html#411-help">4.11. Help</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/layout..MagicQ-html">5. MagicQ Layout</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/layout.html#51-physical-layout">5.1. Physical layout</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/layout.html#52-keyboard-keypad-select-amp-confirm-windows">
                                            5.2. Keyboard, Keypad, Select &amp; Confirm Windows
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/layout.html#53-common-actions">5.3. Common Actions</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/layout.html#54-icons">5.4. Icons</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/start..Quick-html">6. Quick Start</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/start.html#61-starting-up-magicq">6.1. Starting up MagicQ</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/start.html#62-calibrating-the-touch-screen">6.2. Calibrating the Touch Screen</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/start.html#63-starting-a-new-show">6.3. Starting a New Show</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/start.html#64-enabling-outputs">6.4. Enabling Outputs</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/start.html#65-connecting-a-magicq-playback-wing">
                                            6.5. Connecting a MagicQ Playback Wing
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/start.html#66-connecting-external-monitors">6.6. Connecting External Monitors</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/start.html#67-patching">6.7. Patching</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/start.html#68-controlling-heads">6.8. Controlling Heads</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/start.html#69-naming-a-group">6.9. Naming a Group</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/start.html#610-recalling-a-group">6.10. Recalling a Group</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/start.html#611-setting-levels-for-dimmers">6.11. Setting Levels for Dimmers</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/start.html#612-quick-locating-heads">6.12. Locating Heads</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/start.html#613-quick-modifying-attributes">6.13. Modifying Attributes</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/start.html#614-recording-a-palette">6.14. Recording a Palette</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/start.html#615-adding-in-fx">6.15. Adding in FX</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/start.html#616-recording-a-cue">6.16. Recording a Cue</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/start.html#617-recording-a-cue-stack-chase-or-theatre-stack">
                                            6.17. Recording a Cue Stack (Chase or Theatre Stack)
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/start.html#618-selecting-and-recording-complete-window-layouts">
                                            6.18. Selecting and recording complete window layouts
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/start.html#619-saving-the-show">6.19. Saving the Show</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/start.html#620-playback-2">6.20. Playback</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/patching..Patching-html">7. Patching</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#71-patching-on-magicq">7.1. Patching on MagicQ</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#72-getting-started-with-patching">7.2. Getting started with patching</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#73-patching-a-head-or-dimmer">7.3. Patching a Head or Dimmer</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#74-head-names-and-head-numbers">7.4. Head Names and Head Numbers</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#75-gel-name-and-number">7.5. Gel name and number</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#76-col-tags">7.6. Col Tags</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#77-generating-auto-groups">7.7. Generating auto groups</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#78-auto-palettes">7.8. Auto Palettes</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#79-heads-with-multiple-elements">7.9. Heads with multiple elements</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#710-inverting-and-swapping">7.10. Inverting and Swapping</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#711-pan-and-tilt-offsets">7.11. Pan and Tilt Offsets</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#712-applying-offsets-using-update">
                                            7.12. Applying Offsets using Update
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#713-minimum-and-maximum-levels">7.13. Minimum and Maximum levels</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#714-dimmer-curves">7.14. Dimmer curves</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#715-testing-channels">7.15. Testing channels</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#716-changing-the-dmx-address-of-heads">
                                            7.16. Changing the DMX address of heads
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#717-patching-a-head-to-multiple-dmx-addresses">
                                            7.17. Patching a Head to multiple DMX addresses
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#718-unpatching-a-head-from-a-dmx-address">
                                            7.18. Unpatching a Head from a DMX address
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#719-patching-scrollers">7.19. Patching scrollers</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#720-editing-heads">7.20. Editing Heads</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#721-cloning-adding-extra-heads-dimmers-to-a-programmed-show">
                                            7.21. Cloning (Adding extra heads / dimmers to a programmed show)
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#722-morphing-heads-changing-head-type">
                                            7.22. Morphing Heads (Changing Head type)
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#723-importing-heads">7.23. Importing Heads</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#724-exporting-heads">7.24. Exporting Heads</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#725-vl5-type-channels-split-personalities">
                                            7.25. VL5 type channels (split personalities)
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#726-merging-with-dmx-input">7.26. Merging with DMX input</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#727-customising-locate-default-highlight-and-lowlight-values">
                                            7.27. Customising Locate, Default, Highlight and Lowlight values
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#728-theatre-patch-syntax">7.28. Theatre Patch syntax</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#729-virtual-dimmers">7.29. Virtual Dimmers</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/patching.html#730-patch-head-filtering">7.30. Patch Head Filtering</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/intensity-.-levels.html">8. Setting Intensity levels</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/intensity-levels.8-html#using-the-on-screen-faders">
                                            8.1. Using the on screen faders
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/intensity-levels.8-html#using-the-encoders">8.2. Using the encoders</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/intensity-levels.8-html#using-the-keypad">8.3. Using the keypad</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/intensity-levels.8-html#setting-intensity-fx-from-the-keypad">
                                            8.4. Setting intensity FX from the keypad
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/intensity-levels.8-html#multi-element-heads-2">8.5. Multi Element Heads</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/intensity-levels.8-html#setting-intensity-levels-for-dmx-channels">
                                            8.6. Setting intensity levels for DMX channels
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/intensity-levels.8-html#using-selected-heads">8.7. Using Selected Heads</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/intensity-levels.8-html#using-gel-colours-in-the-intensity-window">
                                            8.8. Using gel colours in the Intensity Window
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/intensity-levels.8-html#setting-levels-whilst-running-a-show">
                                            8.9. Setting levels whilst running a show
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/intensity-levels.8-html#viewing-intensities-in-the-outputs-window">
                                            8.10. Viewing Intensities in the Outputs Window
                                        </a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/controlling-.-attributes.html">9. Controlling Attributes</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/controlling-attributes.9-html#selecting-heads-2">9.1. Selecting Heads</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/controlling-attributes.9-html#using-groups">9.2. Using Groups</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/controlling-attributes.9-html#selecting-heads-using-the-keypad">
                                            9.3. Selecting Heads using the keypad
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/controlling-attributes.9-html#selecting-heads-using-the-rig-plan-view">
                                            9.4. Selecting heads using the rig plan view
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/controlling-attributes.9-html#head-macros">9.5. Head Macros</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/controlling-attributes.9-html#locating-heads">9.6. Locating Heads</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/controlling-attributes.9-html#modifying-attributes">9.7. Modifying Attributes</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/controlling-attributes.9-html#colour-attributes">9.8. Colour Attributes</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/controlling-attributes.html#99-flip-mirror">9.9. Flip / Mirror</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/controlling-attributes.9-html#setting-attribute-values-using-the-keypad">
                                            9.10. Setting attribute values using the keypad
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/controlling-attributes.9-html#reversing-rotations">9.11. Reversing rotations</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/controlling-attributes.9-html#snap-colour">9.12. Snap colour</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/controlling-attributes.9-html#default-colour">9.13. Default colour</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/controlling-attributes.9-html#selecting-individual-heads">
                                            9.14. Selecting individual Heads
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/controlling-attributes.9-html#sub-selection-of-elements">
                                            9.15. Sub selection of elements
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/controlling-attributes.9-html#sub-groups">9.16. Sub Groups</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/controlling-attributes.9-html#group-type">9.17. Group Type</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/controlling-attributes.html#918-highlight-mode">9.18. Highlight Mode</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/controlling-attributes.9-html#lowlight-function">9.19. Lowlight function</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/controlling-attributes.9-html#reselecting-heads-using-palettes-and-intensities-active-palette-and-intensity">
                                            9.20. Reselecting heads using Palettes and Intensities (Active Palette and Intensity)
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/controlling-attributes.html#921-fan-mode">9.21. Fan Mode</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/controlling-attributes.9-html#and-only">9.22. And Only</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/controlling-attributes.9-html#group-window">9.23. Group Window</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/palettes..Palettes-html">10. Palettes</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/palettes.html#01-using-palettes">10.1. Using Palettes</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/palettes.html#02-recording-palettes">10.2. Recording Palettes</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/palettes.html#03-intensity-palettes">10.3. Intensity Palettes</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/palettes.html#04-duplicate-elements-in-palettes">
                                            10.4. Duplicate elements in Palettes
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/palettes.html#05-naming-palettes">10.5. Naming Palettes</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/palettes.html#06-updating-palettes">10.6. Updating Palettes</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/palettes.html#07-copying-and-moving-palettes">10.7. Copying and moving Palettes</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/palettes.html#08-removing-attributes-from-palettes">
                                            10.8. Removing attributes from Palettes
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/palettes.html#09-viewing-editing-palette-contents">
                                            10.9. Viewing / Editing Palette contents
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/palettes.html#010-linked-palettes">10.10. Linked Palettes</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/palettes.html#htimes-using-palettes-with-times">10.11. Using Palettes with times</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/palettes.html#012-making-palettes-into-cue-stacks">
                                            10.12. Making Palettes into Cue Stacks
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/palettes.html#013-selecting-palettes-from-the-keypad-2">
                                            10.13. Selecting Palettes from the keypad
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/palettes.html#014-merging-of-palettes-from-another-show">
                                            10.14. Merging of Palettes from another show
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/palettes.html#015-modifying-palettes-in-the-personality">
                                            10.15. Modifying Palettes in the personality
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/palettes.html#016-capturing-palettes-from-dmx-input">
                                            10.16. Capturing Palettes from DMX input
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/palettes.html#017-expanding-palettes">10.17. Expanding Palettes</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/palettes.html#018-replacing-palettes-in-cues">10.18. Replacing Palettes in Cues</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/palettes.html#019-tracker-palettes">10.19. Tracker Palettes</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/fx-.-engine.html">11. FX Engine</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/fx-engine.11-html#adding-in-fx-2">11.1. Adding in FX</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/fx-engine.11-html#generating-user-fx">11.2. Generating user FX</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/fx-engine.11-html#editing-user-fx">11.3. Editing user FX</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/fx-engine.11-html#palette-fx">11.4. Palette FX</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/fx-engine.11-html#fx-colour-flicks">11.5. FX colour flicks</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/fx-engine.11-html#fx-using-base-colour">11.6. FX using base colour</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/fx-engine.11-html#group-based-fx">11.7. Group based FX</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/fx-engine.11-html#fx-on-heads-with-duplicated-elements">
                                            11.8. FX on Heads with Duplicated Elements
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/fx-engine.html#119-fx-window">11.9. FX Window</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/fx-engine.11-html#importing-and-exporting-the-fx-library">
                                            11.10. Importing and Exporting the FX Library
                                        </a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/programmer..Programmer-html">12. Programmer</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/programmer.html#21-what-is-in-the-programmer">12.1. What is in the programmer?</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/programmer.html#22-clearing-the-programmer">12.2. Clearing the programmer</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/programmer.html#23-activation-by-channel-or-by-head">
                                            12.3. Activation by Channel or by Head?
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/programmer.html#24-recording-a-cue-2">12.4. Recording a Cue</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/programmer.html#25-split-cue-times">12.5. Split Cue Times</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/programmer.html#26-recording-to-a-specific-cue-id">
                                            12.6. Recording to a specific Cue Id
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/programmer.html#27-snapshot-icons">12.7. Snapshot Icons</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/programmer.html#28-record-options">12.8. Record Options</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/programmer.html#29-active">12.9. Active</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/programmer.html#210-removing-channels-from-the-programmer">
                                            12.10. Removing channels from the Programmer
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/programmer.html#211-making-channels-hard-values">
                                            12.11. Making channels hard values
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/programmer.html#212-copy-between-heads">12.12. Copy between heads</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/programmer.html#213-blind-programming">12.13. Blind programming</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/programmer.html#214-parking-freezing-channels">12.14. Parking (freezing) channels</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/outputs-.-windows.html">13. Outputs Windows</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/outputs-windows.13-html#heads-view">13.1. Heads View</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/outputs-windows.13-html#intensity-view">13.2. Intensity View</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/outputs-windows.13-html#dmx-channels-view">13.3. DMX Channels View</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/outputs-windows.13-html#movement-view">13.4. Movement View</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/outputs-windows.13-html#chart-view">13.5. Chart View</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/outputs-windows.13-html#plan-view">13.6. Plan View</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/editing-.-cues.html">14. Editing Cues</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/editing-cues.14-html#including-cues-into-the-programmer">
                                            14.1. Including Cues into the Programmer
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/editing-cues.14-html#editing-using-include-and-update-method">
                                            14.2. Editing using Include and Update method
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/editing-cues.14-html#record-merge-updating-a-cue-with-the-contents-of-the-programmer">
                                            14.3. Record Merge (Updating a Cue with the contents of the programmer)
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/editing-cues.14-html#making-changes-to-multiple-cues">
                                            14.4. Making changes to multiple Cues
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/editing-cues.14-html#editing-using-update">14.5. Editing using Update</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/editing-cues.14-html#direct-modification-of-intensities-in-cues">
                                            14.6. Direct Modification of Intensities in Cues
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/editing-cues.14-html#copy-heads-in-cues">14.7. Copy heads in Cues</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/cue-.-stacks.html">15. Cue Stacks</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stacks.15-html#cue-stack-window">15.1. Cue Stack Window</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stacks.15-html#chase-timing">15.2. Chase Timing</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stacks.15-html#cue-timing">15.3. Cue Timing</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stacks.15-html#tracking">15.4. Tracking</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stacks.15-html#cue-only">15.5. Cue Only</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stacks.15-html#mark-cues">15.6. Mark Cues</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stacks.dstack-html#cue-and-stack-stores">
                                            15.7. The Cue Store and Cue Stack Store
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stacks.15-html#assigning-cues-and-cue-stacks">
                                            15.8. Assigning Cues and Cue Stacks
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stacks.15-html#copying-and-moving-cues">15.9. Copying and Moving Cues</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stacks.15-html#linked-cues">15.10. Linked Cues</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stacks.15-html#copying-cue-stacks">15.11. Copying Cue Stacks</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stacks.15-html#removing-cues-and-cue-stacks">
                                            15.12. Removing Cues and Cue Stacks
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stacks.15-html#cue-stack-defaults">15.13. Cue Stack Defaults</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stacks.15-html#col-tags-2">15.14. Col Tags</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stacks.15-html#cue-stack-favourites">15.15. Cue Stack Favourites</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stacks.ncue-html#audio-in-cue-stacks">15.16. Audio in Cue Stacks</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stacks.15-html#cue-stack-macros">15.17. Cue Stack Macros</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stacks.15-html#timecode-cue-stacks">15.18. Timecode Cue Stacks</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stacks.15-html#cue-stack-timecode-tracks">15.19. Cue Stack timecode tracks</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stacks.15-html#importing-timecode-timings">15.20. Importing timecode timings</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stacks.15-html#timeline">15.21. Timeline</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stacks.15-html#view-editor">15.22. View Editor</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stacks.15-html#view-cue-stack">15.23. View Cue Stack</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stacks.15-html#view-marker-options">15.24. View Marker Options</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stacks.15-html#choose-cue-stack">15.25. Choose Cue Stack</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/playback..Playback-html">16. Playback</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/playback.html#61-playback-display">16.1. Playback Display</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/playback.html#62-activating-and-releasing-playbacks">
                                            16.2. Activating and Releasing Playbacks
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/playback.html#63-fader-control">16.3. Fader control</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/playback.html#64-playback-buttons">16.4. Playback Buttons</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/playback.html#16-playbacks-window">16.5. Playbacks Window</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/playback.html#66-bank-pages">16.6. Bank Pages</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/playback.html#67-default-cue-stacks">16.7. Default Cue Stacks</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/playback.html#68-synchronising-playbacks">16.8. Synchronising Playbacks</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/playback.html#69-set-lists">16.9. Set lists</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/cue-stack-17-options.html">17. Cue Stack Options</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stack-options.html#171-faders">17.1. Faders</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stack-options.html#172-buttons">17.2. Buttons</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stack-options.html#173-function">17.3. Function</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stack-options.html#174-activate-release">17.4. Activate/Release</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stack-options.html#175-advanced">17.5. Advanced</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stack-options.html#176-chase-options">17.6. Chase Options</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stack-options.html#177-audio">17.7. Audio</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stack-options.html#178-step-view-defaults-only">
                                            17.8. Step (View Defaults only)
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stack-options.html#179-step-times-view-defaults-only">
                                            17.9. Step Times (View Defaults only)
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/cue-stack-options.html#1710-fx-view-defaults-only">17.10. FX (View Defaults Only)</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/advanced-cue-stack-options.html">18. Advanced Playback / Cue Stack Options</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/advanced-cue-linteraction-of-htp-and-ltp-channels-between-playbacks-stack-options.html#interaction-of-htp-and-ltp-channels-between-playbacks">
                                            18.1. Interaction of HTP and LTP channels between Playbacks
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/advanced-cue-lhtp-handling-stack-options.html#htp-handling">18.2. HTP handling</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/advanced-cue-lltp-handling-stack-options.html#ltp-handling">18.3. LTP handling</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/advanced-cue-lall-chans-controlled-ltp-2-stack-options.html#all-chans-controlled-ltp-2">
                                            18.4. All chans controlled LTP
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/advanced-cue-lhtp-always-active-use-htp-option-stack-options.html#htp-always-active-use-htp-option">
                                            18.5. HTP always active (Use HTP) option
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/advanced-cue-linteraction-of-fx-between-playbacks-stack-options.html#interaction-of-fx-between-playbacks">
                                            18.6. Interaction of FX between Playbacks
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/advanced-cue-lplayback-priority-2-stack-options.html#playback-priority-2">
                                            18.7. Playback Priority
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/advanced-cue-lplaybacks-ignore-masters-levels-stack-options.html#playbacks-ignore-masters-levels">
                                            18.8. Playbacks ignore masters levels
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/advanced-cue-lplayback-stomping-stack-options.html#playback-stomping">
                                            18.9. Playback Stomping
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/advanced-cue-lgroup-masters-inhibit-masters-stack-options.html#group-masters-inhibit-masters">
                                            18.10. Group Masters (Inhibit Masters)
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/advanced-cue-lcue-stack-options.html#cue-stack-speed-masters">18.11. Speed Masters</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/advanced-cue-ladvanced-activate-and-release-options-stack-options.html#advanced-activate-and-release-options">
                                            18.12. Advanced activate and release options
                                        </a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/busking..Live-html">19. Live Programming (Busking)</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/busking.html#91-adding-individual-channels-using-preset-faders">
                                            19.1. Adding individual channels using preset faders
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/busking.html#92-over-ride-take-over">19.2. Over-ride / take-over</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/busking.html#93-viewing-cues-and-cue-stacks">19.3. Viewing Cues and Cue Stacks</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/busking.html#94-modifying-chase-speed-crossfade">
                                            19.4. Modifying chase speed / crossfade
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/busking.html#95-modifying-fx-parameters">19.5. Modifying FX parameters</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/busking.html#96-stop-starting-cue-stacks">19.6. Stop / Starting Cue Stacks</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/busking.html#97-jumping-to-a-cue-in-a-cue-stack">
                                            19.7. Jumping to a Cue in a Cue Stack
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/busking.html#98-over-riding-using-the-programmer">
                                            19.8. Over-riding using the programmer
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/busking.html#99-adding-in-new-fx">19.9. Adding in new FX</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/busking.html#910-applying-palettes-with-time">19.10. Applying palettes with time</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/busking.html#911-releasing-clearing-with-time">
                                            19.11. Releasing / Clearing with time
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/busking.html#912-speed-control">19.12. Speed control</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/busking.html#913-busking-master">19.13. Busking Master</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/busking.html#914-programmer-master">19.14. Programmer Master</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/busking.html#915-live-macro">19.15. Live Macro</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/busking.html#916-prog-store">19.16. Prog Store</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/Group-.-Cues.html">20. Group Cues</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/Group-Cues.20-html#group-levels">20.1. Group Levels</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/Group-Cues.20-html#fanning">20.2. Fanning</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/Group-Cues.20-html#group-elements">20.3. Group Elements</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/Group-Cues.20-html#fade-times">20.4. Fade Times</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/Group-Cues.20-html#recording">20.5. Recording</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/Group-Cues.20-html#including-update">20.6. Including / Update</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/Group-Cues.20-html#active-snapshot">20.7. Active / Snapshot</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/Group-Cues.20-html#copying-head-values">20.8. Copying Head values</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/Group-Cues.20-html#file-saving-exporting-merging">
                                            20.9. File Saving / Exporting / Merging
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/Group-Cues.20-html#updating-groups">20.10. Updating Groups</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/Group-Cues.20-html#updating-cues">20.11. Updating Cues</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/execute..Execute-html">21. Execute Window</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/execute.html#11-design-view">21.1. Design View</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/execute.html#12-full-screen-view">21.2. Full Screen View</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/execute.html#13-password-protection">21.3. Password Protection</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/execute.html#14-automated-start">21.4. Automated Start</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/execute.html#15-sizing-of-items">21.5. Sizing of items</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/execute.html#16-faders-2">21.6. Faders</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/execute.html#17-buttons-2">21.7. Buttons</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/execute.html#18-regions">21.8. Regions</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/execute.html#19-timing-3">21.9. Timing</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/execute.html#110-rate-and-parameters">21.10. Rate and parameters</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/execute.html#111-execute-window-fx">21.11. Execute Window FX</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/execute.html#112-execute-window-soft-palettes">21.12. Execute Window Soft Palettes</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/execute.html#113-execute-window-sequencing">21.13. Execute Window sequencing</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/execute.html#114-execute-window-group">21.14. Execute Window Group</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/execute.html#115-button-appearance">21.15. Button appearance</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/execute.html#116-speed-encoders">21.16. Speed Encoders</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/execute.html#117-attribute-encoders">21.17. Attribute Encoders</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/execute.html#118-preload">21.18. Preload</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/execute.html#119-background">21.19. Background</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/execute.html#120-special-options">21.20. Special Options</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/execute.html#121-execute-window-on-ios-android-remote">
                                            21.21. Execute Window on iOS/Android remote
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/execute.html#122-execute-buttons-on-go-pause-buttons">
                                            21.22. Execute Buttons on Go/Pause buttons
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/execute.html#123-multiple-execute-windows">21.23. Multiple Execute windows</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/automation..Automation-html">22. Automation</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/automation.html#21-magicq-automation-window">22.1. MagicQ Automation Window</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/automation.html#22-scheduled-events">22.2. Scheduled Events</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/automation.html#23-automated-start-of-playbacks-executes">
                                            22.3. Automated Start of Playbacks / Executes
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/automation.html#24-keyboard-macros">22.4. Keyboard macros</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/motor..Motorisation-html">23. Motorisation and Customisation</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/motor.html#23-motor-banking">23.1. Stadium Playback banking</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/motor.html#23-fader-modes">23.2. Fader modes</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/motor.html#33-playback-encoders">23.3. Playback Encoders</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/pixel-.-mapping.html">24. LED &amp; Pixel Mapping</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/pixel-mapping.24-html#patching-led-on-magicq">24.1. Patching LED on MagicQ</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/pixel-mapping.24-html#using-the-grid-view-in-the-outputs-window">
                                            24.2. Using the Grid view in the Outputs Window
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/pixel-mapping.24-html#pixel-mapper">24.3. Pixel Mapper</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/pixel-mapping.24-html#3d-pixel-mapping">24.4. 3D Pixel Mapping</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/pixel-mapping.24-html#simple-pixel-map-fx">24.5. Simple Pixel Map FX</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/pixel-mapping.24-html#multi-element-heads-3">24.6. Multi Element Heads</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/pixel-mapping.24-html#making-grids-of-groups">24.7. Making Grids of Groups</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/pixel-mapping.24-html#programming-led-using-standard-fx">
                                            24.8. Programming LED using standard FX
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/pixel-mapping.24-html#making-groups-out-of-led-pixels">
                                            24.9. Making groups out of LED pixels
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/pixel-mapping.24-html#making-new-led-personalities-on-magicq">
                                            24.10. Making new LED personalities on MagicQ
                                        </a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/colour-.-picker.html">25. Colour Picker</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/colour-picker.25-html#concepts">25.1. Concepts</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/colour-picker.25-html#views">25.2. Views</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/colour-picker.25-html#selection-modes">25.3. Selection modes</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/colour-picker.25-html#other-functions">25.4. Other functions</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/media..Controlling-html">26. Controlling Media Servers</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/media.html#61-patching-media-servers-on-magicq">
                                            26.1. Patching Media Servers on MagicQ
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/media.html#62-connecting-via-network">26.2. Connecting via network</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/media.html#63-configuring-the-media-window">26.3. Configuring the Media Window</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/media.html#64-thumbnail-view">26.4. Thumbnail view</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/media.html#65-live-previews">26.5. Live Previews</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/media.html#66-media-window-view">26.6. Media Window View</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/media.html#67-using-magicq-and-media-server-software-on-the-same-pc">
                                            26.7. Using MagicQ and Media Server software on the same PC
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/media.html#68-citp-msex-live-feeds-and-magiccap">
                                            26.8. CITP (MSEX) live feeds and MagicCap
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/media.html#69-troubleshooting">26.9. Troubleshooting</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/head-.-editor.html">27. Head Editor</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/head-editor.27-html#how-heads-are-stored-in-magicq">
                                            27.1. How Heads are stored in MagicQ
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/head-editor.27-html#expanding-library-head-files">
                                            27.2. Expanding Library head files
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/head-editor.27-html#loading-new-heads-into-magicq">
                                            27.3. Loading new heads into MagicQ
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/head-editor.27-html#copying-head-files-created-on-pc-macs-to-magicq-consoles">
                                            27.4. Copying head files created on PC/Macs to MagicQ consoles
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/head-editor.27-html#modifying-existing-heads">27.5. Modifying existing heads</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/head-editor.27-html#removing-old-heads">27.6. Removing old heads</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/head-editor.27-html#general-view">27.7. General View</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/head-editor.27-html#channels-view">27.8. Channels View</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/head-editor.27-html#ranges-view">27.9. Ranges View</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/head-editor.27-html#palettes-view">27.10. Palettes View</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/head-editor.27-html#macros-view">27.11. Macros View</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/head-editor.27-html#user-icons">27.12. User Icons</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/head-editor.27-html#heads-with-multiple-elements-2">
                                            27.13. Heads with multiple elements
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/head-editor.27-html#custom-gel-libraries">27.14. Custom gel libraries</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/head-editor.html#2715-gdtf-import">27.15. Importing GDTF files</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/curve-.-editor.html">28. Curve Editor</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/curve-editor.28-html#creating-a-curve">28.1. Creating a curve</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/curve-editor.28-html#editing-a-curve">28.2. Editing a curve</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/curve-editor.28-html#setting-a-dimmer-curve">28.3. Setting a dimmer curve</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/fx-.-editor.html">29. FX Editor</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/fx-editor.29-html#view-general">29.1. View General</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/fx-editor.29-html#view-chans">29.2. View Chans</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/fx-editor.29-html#palette-fx-2">29.3. Palette FX</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/network-.-manager.html">30. Network Manager (SnakeSys)</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/network-manager.30-html#view-chamnet">30.1. VIEW CHAMNET</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/network-manager.30-html#view-art-net">30.2. VIEW ART-NET</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/network-manager.30-html#view-sacn">30.3. VIEW SACN</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/network-manager.30-html#view-rdm">30.4. VIEW RDM</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/network-manager.30-html#view-pids">30.5. VIEW PIDS</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/rdm..Remote-html">31. Remote Device Management (RDM)</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/rdm.html#11-introduction">31.1. Introduction</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/networking..Networking-html">32. Networking of MagicQ systems</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/networking.html#21-network-addresses-and-host-names">
                                            32.1. Network addresses and host names
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/networking.html#22-checking-ip-addresses-ping-test">
                                            32.2. Checking IP addresses - Ping Test
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/networking.html#23-checking-consoles-on-the-network">
                                            32.3. Checking consoles on the network
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/networking.html#24-grabbing-shows-from-other-consoles">
                                            32.4. Grabbing shows from other consoles
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/networking.html#25-setting-up-network-sessions">32.5. Setting up Network Sessions</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/networking.html#26-multi-console-programming">32.6. Multi Console Programming</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/networking.html#27-selective-channel-control">32.7. Selective Channel Control</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/networking.html#28-restricted-features-on-slave-consoles">
                                            32.8. Restricted Features on Slave consoles
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/networking.html#29-playback-sync-modes">32.9. Playback Sync modes</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/networking.html#210-programmer-sync-modes">32.10. Programmer Sync Modes</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/networking.html#211-universe-zoning">32.11. Universe Zoning</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/networking.html#212-inter-console-messaging">32.12. Inter Console Messaging</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/networking.html#32-control-network">32.13. Control network</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/manual-multi-33-console.html">33. Manual configuration of Multi Console operation</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/manual-multi-console.html#331-manual-configuration-of-hot-take-over">
                                            33.1. Manual configuration of Hot take-over
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/manual-multi-console.html#332-manual-configuration-of-playback-synchronisation">
                                            33.2. Manual configuration of Playback synchronisation
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/manual-multi-console.html#333-manual-configuration-of-show-data-synchronisation">
                                            33.3. Manual configuration of Show Data Synchronisation
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/manual-multi-console.html#334-manual-configuration-of-selective-channel-control">
                                            33.4. Manual configuration of Selective Channel Control
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/manual-multi-console.html#335-automatic-backing-up-of-shows-from-other-consoles">
                                            33.5. Automatic backing up of shows from other consoles
                                        </a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/remote..Remote-html">34. Remote control of MagicQ</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/remote.html#41-magicq-remote-control-windows-mac-linux">
                                            34.1. MagicQ Remote Control (Windows/Mac/Linux)
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/remote.html#42-remote-control-from-magicq">34.2. Remote control from MagicQ</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/remote.html#34-remote-app">34.3. iOS / Android Remote App</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/remote.html#44-remote-control-via-web-server">34.4. Remote control via web server</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/remote.html#45-remote-control-using-magic-wand-simulator">
                                            34.5. Remote control using Magic Wand simulator
                                        </a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/rpc..ChamSys-html">35. ChamSys Remote Protocol Commands</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/rpc.html#51-remote-playback-commands">35.1. Remote playback commands</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/rpc.html#52-remote-programming-commands">35.2. Remote programming commands</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/udp..Controlling-html">36. Controlling MagicQ using UDP/IP</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/udp.html#61-chamsys-remote-ethernet-protocol">
                                            36.1. ChamSys Remote Ethernet Protocol
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/udp.html#62-writing-to-the-network-port">36.2. Writing to the network port</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/udp.html#63-reading-from-the-network">36.3. Reading from the network</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/udp.html#64-sample-code-fragments">36.4. Sample code fragments</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/serial..Controlling-html">37. Controlling MagicQ using the serial port</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/serial.html#71-connecting-the-serial-port">37.1. Connecting the serial port</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/serial.html#72-enabling-the-serial-port">37.2. Enabling the serial port</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/serial.html#73-writing-to-the-serial-port">37.3. Writing to the serial port</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/serial.html#74-reading-from-the-serial-port">37.4. Reading from the serial port</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/serial.html#75-testing-receiving-serial-commands">
                                            37.5. Testing receiving serial commands
                                        </a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/audio..Audio-html">38. Audio</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/audio.html#81-audio-input">38.1. Audio Input</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/audio.html#82-audio-playback">38.2. Audio playback</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/audio.html#83-usb-sound-cards">38.3. USB sound cards</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/audio.html#84-control-of-winamp">38.4. Control of Winamp</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/-dj..DJ-html">39. DJ</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/-dj.html#91-supported-systems">39.1. Supported Systems</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/-dj.html#92-deck-configuration">39.2. Deck Configuration</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/-dj.html#93-audio-window">39.3. Audio Window</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/-dj.html#94-timecode-and-level-synchronisation">
                                            39.4. Timecode and Level Synchronisation
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/-dj.html#95-beat-tracking">39.5. Beat tracking</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/-dj.html#96-diagnostics">39.6. Diagnostics</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/midi..MIDI-html">40. MIDI</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/midi.html#01-midi-notes-and-cc-receive">40.1. MIDI Notes and CC Receive</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/midi.html#02-midi-notes-and-cc-transmit">40.2. MIDI Notes and CC Transmit</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/midi.html#03-midi-problems">40.3. MIDI problems</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/midi.html#04-midi-show-control-msc">40.4. MIDI Show Control (MSC)</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/midi.html#05-midi-beat-clock">40.5. MIDI Beat Clock</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/midi.html#06-magicq-usb-midi-timecode-box-firmware-versions">
                                            40.6. MagicQ USB MIDI/Timecode box firmware versions
                                        </a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/timecode..Timecode-html">41. Timecode Support</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/timecode.html#11-timecode-decode">41.1. Timecode Decode</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/timecode.html#12-timecode-from-winamp">41.2. Timecode from Winamp</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/timecode.html#13-timecode-from-magichd">41.3. Timecode from MagicHD</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/timecode.html#14-timecode-simulator">41.4. Timecode Simulator</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/timecode.html#15-timecode-generation">41.5. Timecode Generation</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/timecode.html#16-timecode-re-transmit">41.6. Timecode Re-transmit</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/remote-.-input.html">42. Remote Input port</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/remote-input.42-html#connection-magicq-consoles-magicq-pc-wing-compact-and-magicq-maxiwing">
                                            42.1. Connection (MagicQ Consoles, MagicQ PC Wing Compact and MagicQ MaxiWing)
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/remote-input.42-html#connection-original-pc-wing">
                                            42.2. Connection (Original PC Wing)
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/remote-input.42-html#enabling-the-remote-input-in-magicq">
                                            42.3. Enabling the remote input in MagicQ
                                        </a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/-10scene..10Scene-html">43. 10Scene</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/-10scene.html#31-10scene-gateways">43.1. 10Scene Gateways</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/-10scene.html#32-10scene-wall-plates">43.2. 10Scene Wall Plates</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/-10scene.html#33-10scene-enable">43.3. 10Scene enable</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/-10scene.html#34-10scene-action">43.4. 10Scene action</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/-10scene.html#35-manual-zone-configuration">43.5. Manual Zone Configuration</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/-10scene.html#36-passwords">43.6. Passwords</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/-10scene.html#37-passcodes">43.7. Passcodes</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/-10scene.html#38-joining-zones">43.8. Joining Zones</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/-10scene.html#39-10scene-remote-triggers">43.9. 10Scene remote triggers</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/-10scene.html#310-10scene-remote-app">43.10. 10Scene Remote app</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/-10scene.html#311-testing-an-installation">43.11. Testing an installation</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/scene-.-setter.html">44. Scene Setter</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/scene-setter.44-html#powering-the-scene-setter">44.1. Powering the Scene Setter</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/scene-setter.44-html#configuration-3">44.2. Configuration</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/scene-setter.44-html#using-the-scene-setter">44.3. Using the Scene Setter</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/scene-setter.44-html#changing-the-ip-address">44.4. Changing the IP Address</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/scene-setter.44-html#setting-up-the-serial-port">44.5. Setting up the Serial Port</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/osc..Open-html">45. Open Sound Control (OSC)</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/osc.html#51-setup">45.1. Setup</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/osc.html#52-receiving-messages">45.2. Receiving messages</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/osc.html#53-sending-messages">45.3. Sending messages</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/osc.html#54-touchosc">45.4. TouchOSC</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/osc.html#55-troubleshooting-2">45.5. Troubleshooting</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/osc.html#56-notes">45.6. Notes</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/vis..MagicQ-html">46. MagicQ Visualiser</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/vis.html#61-magicvis">46.1. MagicVis</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/vis.html#62-using-magicvis">46.2. Using MagicVis</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/vis.html#63-plot-window">46.3. Plot Window</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/blind-.-visualisation.html">47. Blind Visualisation</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/blind-visualisation.47-html#split-visualisation-in-magicvis">
                                            47.1. Split Visualisation in MagicVis
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/blind-visualisation.47-html#automatic-source-selection">
                                            47.2. Automatic Source Selection
                                        </a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/visualisers..Using-html">48. Using MagicQ with other Visualisers</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/visualisers.html#81-connecting-to-a-visualiser">48.1. Connecting to a Visualiser</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/visualisers.html#82-capture">48.2. Capture</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/visualisers.html#83-wysiwyg-2">48.3. WYSIWYG</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/visualisers.html#84-vision-depence-l8">48.4. Vision, Depence, L8</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/trackers..Trackers-html">49. Trackers</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/trackers.html#91-mq-track-protocol">49.1. MQ Track protocol</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/trackers.html#92-object-transform-protocol">49.2. Object Transform Protocol</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/trackers.html#93-psn-spotme">49.3. PSN/SpotMe</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/trackers.html#94-scaling-offsets-and-swaps">49.4. Scaling, Offsets and Swaps</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/trackers.html#95-tracker-palettes-2">49.5. Tracker Palettes</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/trackers.html#96-using-automations-with-trackers">
                                            49.6. Using automations with Trackers
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/trackers.html#97-tracking-a-fixed-xyz-when-lighting-trusses-moving">
                                            49.7. Tracking a fixed XYZ when lighting trusses moving
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/trackers.html#98-tracking-a-moving-magicvis-object">
                                            49.8. Tracking a moving MagicVis object
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/trackers.html#99-tracker-simulator">49.9. Tracker Simulator</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/trackers.html#910-generic-tracker-personality">49.10. Generic Tracker personality</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/trackers.html#911-moving-vis-objects">49.11. Moving Vis Objects</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/trackers.html#912-transmit-tracker-1-tracker-2-from-focus-hold">
                                            49.12. Transmit Tracker 1 / Tracker 2 from Focus Hold
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/trackers.html#913-dmx-input-tracking">49.13. DMX Input tracking</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/trackers.html#914-tracker-demo-show">49.14. Tracker Demo show</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/settings..Settings-html">50. Settings</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#01-programming-mode">50.1. Programming Mode</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#02-playback-mode-2">50.2. Playback Mode</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#03-advanced-settings-option">50.3. Advanced Settings Option</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#04-output-settings">50.4. Output Settings</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#05-wing-settings">50.5. Wing Settings</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#06-monitor-settings">50.6. Monitor Settings</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#07-touch-screen-settings">50.7. Touch Screen Settings</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#08-mode-amp-security-settings">50.8. Mode &amp; Security Settings</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#09-programming-settings">50.9. Programming Settings</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#010-keypad-encoder-settings">50.10. Keypad / Encoder Settings</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#011-windows-settings">50.11. Windows Settings</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#012-cue-storage-settings">50.12. Cue Storage Settings</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#013-playback-settings">50.13. Playback Settings</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#014-crossfade-button-function">50.14. Crossfade button function</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#015-network-settings">50.15. Network Settings</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#016-wifi-settings">50.16. WIFI Settings</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#017-port-settings">50.17. Port Settings</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#018-midi-timecode-settings">50.18. MIDI / Timecode Settings</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#019-multiple-console-settings">50.19. Multiple Console Settings</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#020-hardware-settings">50.20. Hardware Settings</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#021-general-settings">50.21. General Settings</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#022-individual-playback-settings">
                                            50.22. Individual Playback Settings
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#023-calibrating-the-touch-screen-2">
                                            50.23. Calibrating the touch screen
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#024-displays-brightness-and-contrast">
                                            50.24. Displays brightness and contrast
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#025-console-lamp-brightness">50.25. Console lamp brightness</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#026-button-led-brightness">50.26. Button LED brightness</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#027-controlling-console-lamp-from-the-programmed-show">
                                            50.27. Controlling console lamp from the programmed show
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#028-locking-the-console">50.28. Locking the console</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/settings.html#029-button-test-mode">50.29. Button test mode</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/system-.-management.html">51. System Management</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/system-management.51-html#starting-up">51.1. Starting Up</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/system-management.51-html#shutting-down">51.2. Shutting Down</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/system-management.51-html#saving-shows">51.3. Saving Shows</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/system-management.51-html#backing-up-to-an-external-system">
                                            51.4. Backing up to an external system
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/system-management.51-html#loading-shows">51.5. Loading Shows</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/system-management.51-html#erasing">51.6. Erasing</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/system-management.51-html#show-extras-file">51.7. Show extras file</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/system-management.51-html#import-and-export-of-show-data-and-show-merging">
                                            51.8. Import and Export of Show Data and Show Merging
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/system-management.51-html#saving-and-loading-settings">
                                            51.9. Saving and Loading Settings
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/system-management.html#5110-file-manager">51.10. File Manager</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/system-management.51-html#transferring-files-over-network">
                                            51.11. Transferring files over network
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/system-management.51-html#storage-of-magicq-user-files-on-pc-mac">
                                            51.12. Storage of MagicQ user files on PC/Mac
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/system-management.51-html#reports">51.13. Reports</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/system-management.51-html#status-window">51.14. Status Window</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/system-management.html#5115-backup-archives">51.15. Backup Archives</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/system-management.51-html#using-shows-on-different-magicq-products-and-show-versions">
                                            51.16. Using shows on different MagicQ products and show versions
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/system-management.51-html#magicq-profiles">51.17. MagicQ Profiles</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/system-management.51-html#user-management">51.18. User management</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/system-management.html#5119-restricting-remote">
                                            51.19. Restricting Remote App Access
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/system-management.51-html#security">51.20. Security</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/system-management.51-html#saving-support-files">51.21. Saving Support files</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/system-management.51-html#commands-and-logs">51.22. Commands and Logs</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/upgrading..Software-html">52. Software &amp; Firmware Upgrade</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/upgrading.html#21-changing-magicq-console-software">
                                            52.1. Changing MagicQ Console Software
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/upgrading.html#22-console-kernel-update">52.2. Console Kernel Update</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/upgrading.html#523-mq80-kernel-v2">52.3. MQ80 Kernel v2 upgrade</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/upgrading.html#24-resetting-a-magicq-console-to-factory-defaults">
                                            52.4. Resetting a MagicQ console to factory defaults
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/upgrading.html#25-firmware">52.5. Firmware</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/upgrading.html#26-mq50-mq70-and-mq80-front-panel-firmware">
                                            52.6. MQ50, MQ70 and MQ80 front panel firmware
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/upgrading.html#27-mq250m-stadium-firmware">52.7. MQ250M Stadium firmware</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/upgrading.html#28-mq500-stadium-firmware">52.8. MQ500 Stadium firmware</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/upgrading.html#29-mq500m-stadium-firmware">52.9. MQ500M Stadium firmware</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/upgrading.html#210-mq500m-wing-firmware">52.10. MQ500M Wing firmware</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/upgrading.html#211-compact-amp-mini-connect-firmware">
                                            52.11. Compact &amp; Mini Connect firmware
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/upgrading.html#212-firmware-change-log">52.12. Firmware Change Log</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/upgrading.html#213-updating-firmware">52.13. Updating Firmware</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/upgrading.html#214-upgrading-legacy-product-firmware">
                                            52.14. Upgrading Legacy product firmware
                                        </a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/hints..Handy-html">53. Handy Hints</a>
                            </span>
                        </dt>
                        <dt>
                            <span class="chapter">
                                <a href="docs/shortcuts..MagicQ-html">54. MagicQ Shortcuts</a>
                            </span>
                        </dt>
                        <dt>
                            <span class="chapter">
                                <a href="docs/troubleshooting..Troubleshooting-html">55. Troubleshooting</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/troubleshooting.html#51-no-outputs">55.1. No outputs</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/troubleshooting.html#52-magicq-not-responding">55.2. MagicQ not responding</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/troubleshooting.html#53-magicq-responding-slowly">55.3. MagicQ responding slowly</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/troubleshooting.html#54-strange-key-presses-unexpected-window-changes">
                                            55.4. Strange key presses, unexpected window changes
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/troubleshooting.html#55-magicq-console-not-booting">
                                            55.5. MagicQ console not booting
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/troubleshooting.html#56-magicq-console-blank-screen">
                                            55.6. MagicQ console blank screen
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/troubleshooting.html#57-magicq-console-white-screen">
                                            55.7. MagicQ console white screen
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/troubleshooting.html#58-magicq-console-distorted-screen">
                                            55.8. MagicQ console distorted screen
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/troubleshooting.html#59-magicq-console-internal-touch-screen-not-working">
                                            55.9. MagicQ console internal touch screen not working
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/troubleshooting.html#510-all-10-s-buttons-flashing-blue">
                                            55.10. All 10 S buttons flashing blue
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/troubleshooting.html#511-fader-encoder-or-button-not-working-correctly">
                                            55.11. Fader, Encoder or Button not working correctly
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/troubleshooting.html#512-unable-to-save-shows-or-patch-heads-after-performing-a-777-erase-all-on-the-console">
                                            55.12. Unable to save shows or patch heads after performing a *777 erase all on the console
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/troubleshooting.html#513-mac-permissions">
                                            55.13. "MagicQ needs to write to the install folder…" message on Mac
                                        </a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/troubleshooting.html#514-linux-magicq-fails-to-start-libgl-error">
                                            55.14. Linux: MagicQ fails to start / libGL error
                                        </a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="chapter">
                                <a href="docs/buttons..Button-html">56. Button Functions</a>
                            </span>
                        </dt>
                        <dt>
                            <span class="chapter">
                                <a href="docs/licensing..Licensing-html">57. Licensing</a>
                            </span>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <span class="section">
                                        <a href="docs/licensing.html#71-qt">57.1. Qt</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/licensing.html#72-libpng">57.2. LibPNG</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/licensing.html#73-libjpeg">57.3. LibJPEG</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/licensing.html#74-libjpeg-turbo">57.4. LibJPEG-Turbo</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/licensing.html#75-libicu">57.5. LibICU</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/licensing.html#76-ffmpeg-binary">57.6. FFmpeg Binary</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/licensing.html#77-ffmpeg-library">57.7. FFmpeg Library</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/licensing.html#78-libarchive">57.8. LibArchive</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/licensing.html#79-zlib">57.9. Zlib</a>
                                    </span>
                                </dt>
                                <dt>
                                    <span class="section">
                                        <a href="docs/licensing.html#710-portaudio">57.10. PortAudio</a>
                                    </span>
                                </dt>
                            </dl>
                        </dd>
                        <dt>
                            <span class="glossary">
                                <a href="docs/glossary.html">Glossary</a>
                            </span>
                        </dt>
                    </dl>
                </div>
            </main>
        </Layout>
    );
}
