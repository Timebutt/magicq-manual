---
id: rpc
title: Chapter 35. ChamSys Remote Protocol Commands
sidebar_position: 35
---

# Chapter 35. ChamSys Remote Protocol Commands
<p>
    ChamSys remote protocol consists of simple commands consisting of a list parameter values separated by commas ‘,’ and ending in a
    character A to Z (or a to z). Commands can contain spaces, tabs, and carriage returns; they are all ignored.
</p>
<p>The remote protocol is split into remote playback commands and remote programming commands.</p>
<div class="section">
    ## 35.1. Remote playback commands
    <p>The commands are:</p>
    <div class="informaltable">
        <table class="informaltable" cellpadding="4px">
            <colgroup>
                <col class="col_1" />
                <col class="col_2" />
            </colgroup>
            <tbody>
                <tr>
                    <td align="left" valign="top"><p>&lt;playback number&gt; A</p></td>
                    <td align="left" valign="top"><p>Activate playback</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;playback number&gt; R</p></td>
                    <td align="left" valign="top"><p>Release playback</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;playback number&gt; T</p></td>
                    <td align="left" valign="top"><p>Test playback (activate with level 100%)</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;playback number&gt; U</p></td>
                    <td align="left" valign="top"><p>Un-test playback (release with level 0%)</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;playback number&gt; G</p></td>
                    <td align="left" valign="top"><p>Go on playback</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;playback number&gt; S</p></td>
                    <td align="left" valign="top"><p>Stop (go back) on playback</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;playback number&gt; B</p></td>
                    <td align="left" valign="top"><p>Fast back on playback (no fade)</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;playback number&gt; F</p></td>
                    <td align="left" valign="top"><p>Fast forward on playback (no fade)</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;playback number&gt; , &lt;level&gt; L</p></td>
                    <td align="left" valign="top"><p>Set playback fader level</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;playback number&gt; , &lt;cue id&gt; , &lt;cue id dec&gt;J</p></td>
                    <td align="left" valign="top"><p>Jump to Cue Id on playback</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;page number&gt; P</p></td>
                    <td align="left" valign="top"><p>Change page</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;channel number&gt; , &lt;level&gt; I</p></td>
                    <td align="left" valign="top"><p>Set intensity channel to level</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;program command number&gt; H</p></td>
                    <td align="left" valign="top"><p>Remote programming command</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;button id&gt; X</p></td>
                    <td align="left" valign="top"><p>10Scene zone 1 button</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;button id&gt; , &lt;state&gt; X</p></td>
                    <td align="left" valign="top"><p>10Scene zone 1 button press or release</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;zone id&gt; , &lt;button id&gt; , &lt;state&gt; X</p></td>
                    <td align="left" valign="top"><p>10Scene zone button press or release</p></td>
                </tr>
            </tbody>
        </table>
    </div>
    <p>The following parameter values are supported</p>
    <div class="informaltable">
        <table class="informaltable" cellpadding="4px">
            <colgroup>
                <col class="col_1" />
                <col class="col_2" />
            </colgroup>
            <tbody>
                <tr>
                    <td align="left" valign="top"><p>&lt;playback number&gt;</p></td>
                    <td align="left" valign="top"><p>a number between 1 and 10 (202 on MagicQ consoles)</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;level&gt;</p></td>
                    <td align="left" valign="top"><p>an integer between 0 and 100.</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;page number&gt;</p></td>
                    <td align="left" valign="top"><p>an integer between 0 and 100</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;channel number&gt;</p></td>
                    <td align="left" valign="top"><p>an integer between 1 and 32769 DMX channel number</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;cue id&gt;</p></td>
                    <td align="left" valign="top"><p>an integer between 1 and 65536</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;cue id dec&gt;</p></td>
                    <td align="left" valign="top"><p>an integer between 0 and 99. Note that for Cue ID 1.5 use 50</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;button id&gt;</p></td>
                    <td align="left" valign="top"><p>an integer between 1 and 10</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;zone id&gt;</p></td>
                    <td align="left" valign="top"><p>an integer between 1 and 20</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;state&gt;</p></td>
                    <td align="left" valign="top"><p>1 for button pressed, 0 for button released, 2 for activate, 3 for release</p></td>
                </tr>
            </tbody>
        </table>
    </div>
    <p>So for example, to set dimmer channel 4 to 50% you would use:</p>
    <p>4,50I</p>
    <p>To jump to Cue id 2.5 on playback 8 you would use:</p>
    <p>8,2,50J</p>
    <p>Commands can be sent back to back – e.g.</p>
    <p>1A2A1S2G3,4I</p>
    <p>
        MagicQ on PC and Mac only supports control of the first 10 playbacks (PB1 to PB10). On MagicQ consoles all 202 playbacks can be
        controlled.
    </p>
</div>
<div class="section">
    ## 35.2. Remote programming commands
    <p>
        Remote programming commands enable simple programming actions to be carried out from a remote terminal. Remote programming commands
        consist of the program command number followed by parameters and completed with an "H".
    </p>
    <p>The commands are:</p>
    <div class="informaltable">
        <table class="informaltable" cellpadding="4px">
            <colgroup>
                <col class="col_1" />
                <col class="col_2" />
            </colgroup>
            <tbody>
                <tr>
                    <td align="left" valign="top"><p>\&lt;01&gt; , &lt;start head&gt; , [&lt;end head&gt;] H</p></td>
                    <td align="left" valign="top"><p>Select one or more heads</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;02&gt; , &lt;start head&gt; , [&lt;end head&gt;] H</p></td>
                    <td align="left" valign="top"><p>Deselect one or more heads</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;03&gt; H</p></td>
                    <td align="left" valign="top"><p>Deselect all heads</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;04&gt; , &lt;group number&gt; H</p></td>
                    <td align="left" valign="top"><p>Select group</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;05&gt; , &lt;level&gt; , [&lt;time&gt;] H</p></td>
                    <td align="left" valign="top"><p>Set intensity of selected heads</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;06&gt; , &lt;attribute number&gt; , &lt;value&gt; , [&lt;time&gt;] H</p></td>
                    <td align="left" valign="top"><p>Set attribute value of selected heads</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;07&gt; , &lt;attribute number&gt; , &lt;value&gt; , [&lt;16bit&gt;] H</p></td>
                    <td align="left" valign="top"><p>Increase attribute of selected heads</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;08&gt; , &lt;attribute number&gt; , &lt;value&gt; , [&lt;16bit&gt;] H</p></td>
                    <td align="left" valign="top"><p>Decrease attribute of selected heads</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;09&gt; H</p></td>
                    <td align="left" valign="top"><p>Clear programmer</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;10&gt; , &lt;palette id&gt; H</p></td>
                    <td align="left" valign="top"><p>Include position palette</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;11&gt; , &lt;palette id&gt; H</p></td>
                    <td align="left" valign="top"><p>Include colour palette</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;12&gt; , &lt;palette id&gt; H</p></td>
                    <td align="left" valign="top"><p>Include beam palette</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;13&gt; , &lt;cue id&gt; H</p></td>
                    <td align="left" valign="top"><p>Include cue</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;19&gt; H</p></td>
                    <td align="left" valign="top"><p>Update</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;20&gt;, &lt;palette id&gt; H</p></td>
                    <td align="left" valign="top"><p>Record position palette</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;21&gt; , &lt;palette id&gt; H</p></td>
                    <td align="left" valign="top"><p>Record colour palette</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;22&gt; , &lt;palette id&gt; H</p></td>
                    <td align="left" valign="top"><p>Record beam palette</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;23&gt; , &lt;cue id&gt; H</p></td>
                    <td align="left" valign="top"><p>Record cue</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;30&gt; H</p></td>
                    <td align="left" valign="top"><p>Next head</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;31&gt; H</p></td>
                    <td align="left" valign="top"><p>Previous head</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;32&gt; H</p></td>
                    <td align="left" valign="top"><p>All heads</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;40&gt; H</p></td>
                    <td align="left" valign="top"><p>Locate</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;41&gt; H</p></td>
                    <td align="left" valign="top"><p>Lamp on</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;42&gt; H</p></td>
                    <td align="left" valign="top"><p>Lamp off</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;43&gt; H</p></td>
                    <td align="left" valign="top"><p>Reset</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;71&gt;, &lt;state&gt; H</p></td>
                    <td align="left" valign="top"><p>Remote trigger</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;80&gt; , &lt;Q id&gt; H</p></td>
                    <td align="left" valign="top"><p>Test Cue</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;81&gt; , &lt;Q id&gt; H</p></td>
                    <td align="left" valign="top"><p>Untest Cue</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;82&gt; , &lt;cue stack id&gt; , &lt;level&gt; , &lt;cue id&gt; H</p></td>
                    <td align="left" valign="top"><p>Test Cue Stack, level and cue id are optional (default to 100% and first cue)</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;83&gt; , &lt;cue stack id&gt; H</p></td>
                    <td align="left" valign="top"><p>Untest Cue Stack</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;90&gt; , &lt;show file id&gt; H</p></td>
                    <td align="left" valign="top"><p>Save show showXXXX.shw</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;91&gt; , &lt;show file id&gt; H</p></td>
                    <td align="left" valign="top"><p>Load show showXXXX.shw</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;92&gt; , &lt;import file id&gt; H</p></td>
                    <td align="left" valign="top"><p>Load show importXXXX.csv</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;93&gt; , &lt;import grid id&gt; H</p></td>
                    <td align="left" valign="top"><p>Load grid gridXXXX.csv</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;112&gt; , &lt;state&gt; H</p></td>
                    <td align="left" valign="top"><p>Emergency Hot takeover - &lt;state&gt; is 1 for On, 0 for Off.</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;911&gt; , &lt;state&gt; H</p></td>
                    <td align="left" valign="top"><p>Emergency Hot takeover - &lt;state&gt; is 1 for On, 0 for Off.</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>\&lt;999&gt; , &lt;state&gt; H</p></td>
                    <td align="left" valign="top"><p>Emergency Hot takeover - &lt;state&gt; is 1 for On, 0 for Off.</p></td>
                </tr>
            </tbody>
        </table>
    </div>
    <pre class="literallayout">[] indicates an optional parameter</pre>
    <pre class="literallayout">The parameter values are:</pre>
    <div class="informaltable">
        <table class="informaltable" cellpadding="4px">
            <colgroup>
                <col class="col_1" />
                <col class="col_2" />
            </colgroup>
            <tbody>
                <tr>
                    <td align="left" valign="top"><p>&lt;level&gt;</p></td>
                    <td align="left" valign="top"><p>an integer between 0 and 100</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;palette id&gt;</p></td>
                    <td align="left" valign="top"><p>an integer between 1 and 1024</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;Q id&gt;</p></td>
                    <td align="left" valign="top"><p>an integer between 1 and 5000 representing Q in the Cue Store</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;16 bit&gt;</p></td>
                    <td align="left" valign="top"><p>0 for change in 8 bit resolution, 1 for change in 16 bit resolution</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;time&gt;</p></td>
                    <td align="left" valign="top"><p>an integer time in seconds</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;group number&gt;</p></td>
                    <td align="left" valign="top"><p>is an integer between 1 and 200</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;start head&gt; and &lt;end head&gt;</p></td>
                    <td align="left" valign="top"><p>integers between 1 and 6145</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;show file id&gt;</p></td>
                    <td align="left" valign="top"><p>four digit decimal number between 0000 and 9999.</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>&lt;state&gt;</p></td>
                    <td align="left" valign="top"><p>is 0 or 1 to set state on/off, or 2 is toggle current state.</p></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="section">
        ### 35.2.1. Attribute numbers
        <p>Intensity (0) Intensity Mode (1)</p>
        <p>Pan (4) Tilt (5) Pos1 (46) Pos2 (47) Pos3 (48) Pos4 (49) Pos5 (50) Pos6 (51)</p>
        <p>Cyan (16) Magenta (17) Yellow (18) Col mix (19) Col1 (6) Col3 (26) Col2 (7) Col4 (27)</p>
        <p>
            Shutter (2) Iris (3) Gobo1 (8) Gobo2 (9) Gobo3 (28) Gobo4 (29) Rotate1 (10) Rotate2 (11) Rotate3 (30) Rotate4 (31) Focus (12)
            Zoom (13) Frost1 (32) Frost2 (33) FX1 (14) FX2 (15) FX3 (34) FX4 (35) FX5 (36) FX6 (37) FX7 (38) FX8 (39) Macro1 (22) Macro2
            (23) Cont1 (20) Cont2 (21) Cont3 (40) Cont4 (41) Cont5 (42) Cont6 (43) Cont7 (44) Cont8 (45)
        </p>
    </div>
</div>
