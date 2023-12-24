---
id: midi
title: Chapter 40. MIDI
sidebar_position: 40
---

<p>
    Consoles can use MIDI via the rear input and output DIN sockets. MagicQ PC (Windows, Mac and Linux) can use 3rd party USB or virtual
    MIDI interfaces.
</p>
<p>
    MagicQ can
    <span class="emphasis"><em>send and receive</em></span>
    MIDI Timecode (MTC), Notes on/off and Control Change (CC) messages.
</p>
<p>
    MagicQ can
    <span class="emphasis"><em>receive</em></span>
    Beat Clock and MIDI Show Control (MSC) messages.
</p>
<p>
    On MagicQ PC Systems MIDI is only supported when out of demo mode. Note that for MIDI Notes on PC, the MagicQ Rack Mount dongle must
    also be connected to the PC System, other ChamSys hardware does not enable the use of MIDI Notes on PC.
</p>
<div class="table">
    <a id="idm12165"></a>
    <p class="title"><strong>Table&nbsp;40.1.&nbsp;Supported MIDI messages</strong></p>
    <div class="table-contents">
        <table class="table" summary="Supported MIDI messages" cellpadding="4px">
            <colgroup>
                <col class="col_1" />
                <col class="col_2" />
            </colgroup>
            <thead>
                <tr>
                    <th align="left" valign="top">Product</th>
                    <th align="left" valign="top">MIDI messages</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td align="left" valign="top"><p>MagicQ PC (demo mode)</p></td>
                    <td align="left" valign="top"><p>None</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>MagicQ PC (with blue wing or interface attached)</p></td>
                    <td align="left" valign="top"><p>MTC, Beat clock</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>MagicQ PC (with blue Rackmount Dongle)</p></td>
                    <td align="left" valign="top"><p>MTC, Beat clock, Notes, CC, MSC</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top">
                        <p>
                            MQ50 (2019)
                            <sup>1</sup>
                        </p>
                    </td>
                    <td align="left" valign="top"><p>Notes, CC, MSC</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top">
                        <p>
                            MQ70, MQ80, Stadium Connect, MQ250M, MQ500(M)
                            <sup>1</sup>
                        </p>
                    </td>
                    <td align="left" valign="top"><p>MTC, Beat clock, Notes, CC, MSC</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>MQ60, MQ70 (old), MQ100 Pro 2014</p></td>
                    <td align="left" valign="top"><p>Beat clock, Notes, MSC</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top">
                        <p>
                            MagicQ blue USB MIDI/Timecode box
                            <sup>2</sup>
                        </p>
                    </td>
                    <td style="" align="left" valign="top"><p>MTC, Beat clock, Notes, MSC</p></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<br class="table-break" />
<p>
    <sup>1</sup>
    Minimum firmware version of V1.25 is recommended.
</p>
<p>
    <sup>2</sup>
    Use of the MagicQ USB MIDI/Timecode box with MagicQ PC additionally unlocks all MIDI functions via a 3rd party USB or virtual device.
</p>
<p>
    A minimum MagicQ version of 1.8.6.5 is recommended (for consoles and PCs), due to the various MIDI fixes and enhancements in this
    release.
</p>
<p>
    MIDI is configured in the
    <span class="emphasis"><em>SETUP</em></span>
    window,
    <span class="emphasis"><em>VIEW SETTINGS → MIDI Timecode</em></span>
    tab. On MagicQ PC, you must also select the MIDI device in the
    <span class="emphasis"><em>Tools → Virtual (USB) MIDI Setup…</em></span>
    menu at the top.
</p>
<p>
    <span class="inlinemediaobject">
        <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/midioptions.png" alt="image" />
    </span>
</p>
<div class="section">
    <div class="titlepage">
        <div>
            <div>
                <h2 class="title">
                    <a id="_midi_notes_and_cc_receive"></a>
                    40.1.&nbsp;MIDI Notes and CC Receive
                </h2>
            </div>
        </div>
    </div>
    <p>
        To receive MIDI notes, set the MIDI In Type in the SETUP window. You can choose between "None", "Any chan" and "Requested Chan".
        When set to "Requested Chan" the requested channel is configured in the MIDI IN Chan field.
    </p>
    <p>
        When using MIDI notes, the Timecode options can be set to none and then the last received MIDI command will be shown in the Status
        Display.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/midinotesstatus.png" alt="image" />
        </span>
    </p>
    <div class="section">
        <div class="titlepage">
            <div>
                <div>
                    <h3 class="title">
                        <a id="_midi_autom_events"></a>
                        40.1.1.&nbsp;MIDI Autom events
                    </h3>
                </div>
            </div>
        </div>
        <p>MagicQ supports triggering of automated events via MIDI in the Macro Window, View Autom.</p>
        <p>Autom events can be set to trigger Playbacks, Cue Stacks, Cues and other events when MIDI Notes and CC messages are received.</p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/autommidi.png" alt="image" />
            </span>
        </p>
    </div>
    <div class="section">
        <div class="titlepage">
            <div>
                <div>
                    <h3 class="title">
                        <a id="_midi_learn"></a>
                        40.1.2.&nbsp;MIDI Learn
                    </h3>
                </div>
            </div>
        </div>
        <p>
            In the
            <span class="emphasis"><em>EXECUTE</em></span>
            window, pressing encoder D enables and disables MIDI Learn mode.
        </p>
        <p>
            When this mode is enabled, any MIDI Note or CC message received will be assigned to trigger the currently selected execute box
            (use the cursor keys to change the selected box). This adds or replaces entries in the
            <span class="emphasis"><em>MACRO → VIEW AUTOM</em></span>
            window.
        </p>
        <p>
            In the
            <span class="emphasis"><em>MACRO → VIEW AUTOM</em></span>
            window, pressing encoder X enables and disables MIDI Learn mode. When enabled, the currently selected automation row will be
            changed whenever a MIDI Note or CC messages is received.
        </p>
    </div>
    <div class="section">
        <div class="titlepage">
            <div>
                <div>
                    <h3 class="title">
                        <a id="_midi_mapping_file"></a>
                        40.1.3.&nbsp;MIDI mapping file
                    </h3>
                </div>
            </div>
        </div>
        <p>
            MagicQ supports a custom MIDI mapping file for use instead of the Autom events - this enables greater flexibility and control.
            If any Autom events are set to respond to MIDI then the MIDI mapping file is ignored.
        </p>
        <p>
            MagicQ uses the text mapping file miditable.txt stored in the MagicQ folder to convert from MIDI commands to MagicQ serial
            commands.
        </p>
        <p>
            An example file
            <code class="literal">miditable.txt</code>
            is included which maps MIDI notes to the playbacks PB1 to PB34. Each line in the file specifies a received MIDI command and then
            the mapping to the serial command in inverted comments "".
        </p>
        <p>For example, the first to lines in the default file are:</p>
        <pre class="literallayout">
144,36"1t"
128,36"1u"
        </pre>
        <p>
            MagicQ checks the received MIDI note byes to see whether they match the values. So if the MIDI message matches 144 36 then it
            executes the remote command 1t (Test Playback 1). Similarly if it matches 128 36 then executes the remote command 1u (UnTest
            Playback 1).
        </p>
        <p>Note that Test and Untest are like Activate and Release except they force the Playback level to be 100% and 0% respectively.</p>
        <p>
            Note that for security reasons MagicQ limits the number of playbacks that can be controlled using MIDI and the remote protocols.
            On MagicQ consoles PB1 to PB34 can be controlled. On MagicQ PC, playbacks PB1 to PB10 can be controlled.
        </p>
        <p>
            Users may use their own MIDI conversion file
            <code class="literal">usermidimap.txt</code>
            rather than the in-built
            <code class="literal">miditable.txt</code>
            . This avoids user midi tables being overwritten when new software versions are loaded, since only the
            <code class="literal">miditable.txt</code>
            is updated on software updates.
        </p>
    </div>
    <div class="section">
        <div class="titlepage">
            <div>
                <div>
                    <h3 class="title">
                        <a id="_advanced_midi_mapping"></a>
                        40.1.4.&nbsp;Advanced MIDI mapping
                    </h3>
                </div>
            </div>
        </div>
        <p>It is possible to match all 3 MIDI message bytes including the velocity. So for example:</p>
        <p><code class="literal">144,36,100"1t"</code></p>
        <p><code class="literal">144,36,101"1u"</code></p>
        <p>
            This would execute the Test Playback 1 when Note On for note 36 at velocity 100 was received and Untest Playback 1 when Note On
            for note 36 at velocity 101 was received.
        </p>
        <p>To jump within a Cue Stack instead of testing / untesting a Playback just change the remote command in the inverted comments.</p>
        <p>
            <code class="literal">144,36"1,10j"</code>
            (Jump to Cue Id 10 on Playback 1)
        </p>
        <p>
            It is also possible to map the note or velocity directly into the remote command using the %01 for the note and %02 for the
            velocity.
        </p>
        <p>
            So the following command would look for Note On, Note 36 and then use the Velocity to jump to a specific step on the Playback.
        </p>
        <p><code class="literal">144,36"1,%02j"</code></p>
        <p><code class="literal">144,36"82,%02H"</code></p>
        <p>
            The %02 is replaced with the velocity received, so that if MagicQ receives
            <span class="strong"><strong>144 36 50</strong></span>
            then it will execute the remote command
            <span class="strong"><strong>1,50j</strong></span>
            , which jumps to Cue Id 50 on Playback 1
        </p>
        <p>For the latest list of remote commands check the section on ChamSys Remote Protocol Commands.</p>
    </div>
    <div class="section">
        <div class="titlepage">
            <div>
                <div>
                    <h3 class="title">
                        <a id="_default_miditable_txt_file"></a>
                        40.1.5.&nbsp;Default miditable.txt file
                    </h3>
                </div>
            </div>
        </div>
        <pre class="literallayout">
144,36"1t"
128,36"1u"
144,38"2t"
128,38"2u"
144,40"3t"
128,40"3u"
144,41"4t"
128,41"4u"
144,43"5t"
128,43"5u"
144,45"6t"
128,45"6u"
144,47"7t"
128,47"7u"
144,48"8t"
128,48"8u"
144,50"9t"
128,50"9u"
144,52"10t"
128,52"10u"
144,53"11t"
128,53"11u"
144,54"12t"
128,54"12u"
144,55"13t"
128,55"13u"
144,56"14"
128,56"14u"
144,57"15t"
128,57"15u"
144,58"16t"
128,58"16u"
144,59"17t"
128,59"17u"
144,60"18t"
128,60"18u"
144,61"19t"
128,61"19u"
144,62"20t"
128,62"20u"
144,63"21t"
128,63"21u"
144,64"22t"
128,64"22u"
144,65"23t"
128,65"23u"
144,66"24t"
128,66"24u"
144,67"25t"
128,67"25u"
144,68"26t"
128,68"26u"
144,69"27t"
128,69"27u"
144,70"28t"
128,70"28u"
144,71"29t"
128,71"29u"
144,72"30t"
128,72"30u"
144,73"31t"
128,73"31u"
144,74"32t"
128,74"32u"
144,75"33t"
128,75"33u"
144,76"34t"
128,76"34u"
</pre>
        <p>
            It is possible to test how MagicQ responds to Midi commands by typing in the Midi message on the keyboard. This is only
            supported when connected to a MagicQ Wing or Interface. For example to test the command
        </p>
        <p>144,36,127 Note On, note 36, velocity 127</p>
        <p>
            Type
            <span class="strong"><strong>testmidi</strong></span>
            followed by the message on the keyboard with no spaces between the MIDI values.
        </p>
        <p><code class="literal">testmidi 144,36,127</code></p>
    </div>
</div>
<div class="section">
    <div class="titlepage">
        <div>
            <div>
                <h2 class="title">
                    <a id="_midi_notes_and_cc_transmit"></a>
                    40.2.&nbsp;MIDI Notes and CC Transmit
                </h2>
            </div>
        </div>
    </div>
    <p>
        To transmit a MIDI Note command, first set the MIDI Out Type in the Setup Window. You can choose between "None", "Any chan" and
        "Requested Chan". When set to "Requested Chan" the requested channel is configured in the MIDI Out Chan field.
    </p>
    <p>
        When set to "Any chan" MagicQ will send out any MIDI commands specified in the Cue Stack macro field regardless of the channel
        specified using the channel specified in the Cue Stack macro. When set to "Requested Chan" MagicQ will always change the MIDI
        commands before transmission to be sent on the requested MIDI channel
    </p>
    <p>
        MIDI commands are entered in decimal in the Macro field of the Cue Stack Window (page right) using the ‘N’ macro command. It is
        possible to over-ride the channel specified in the MIDI commands using the MIDI Out Channel in the Setup Window.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/miditx.png" alt="image" />
        </span>
    </p>
    <p>
        MIDI note commands are 3 bytes long, consisting of the command (note on / note off) byte, followed by the note and then the velocity
    </p>
    <p><code class="literal">&lt;command&gt; &lt;note&gt; &lt;velocity&gt;</code></p>
    <p>MIDI notes, Control Change, Program Change and Aftertouch messages are supported.</p>
    <p>the &lt;command&gt; denotes the MIDI message type, see table below for the command values</p>
    <div class="informaltable">
        <table class="informaltable" cellpadding="4px">
            <colgroup>
                <col class="col_1" />
                <col class="col_2" />
            </colgroup>
            <tbody>
                <tr>
                    <td align="left" valign="top"><p>144</p></td>
                    <td align="left" valign="top"><p>Note On</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>128</p></td>
                    <td align="left" valign="top"><p>Note Off</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>160</p></td>
                    <td align="left" valign="top"><p>Polyphonic Key Pressure (aftertouch)</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>176</p></td>
                    <td align="left" valign="top"><p>Control Change</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>192</p></td>
                    <td align="left" valign="top"><p>Program Change</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>208</p></td>
                    <td align="left" valign="top"><p>Channel Pressure (aftertouch)</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>224</p></td>
                    <td style="" align="left" valign="top"><p>Pitch Bend Change</p></td>
                </tr>
            </tbody>
        </table>
    </div>
    <p>For example, to send a note for middle C set the macro field to the following:</p>
    <p>
        <code class="literal">N144,60,127</code>
        (Note 60 on velocity 127)
    </p>
    <p>
        <code class="literal">N128,60,0</code>
        (Note 60 off)
    </p>
    <p>MagicQ accepts both ‘N’ and ‘n’ to specify MIDI commands.</p>
    <p>
        The &lt;command&gt; consists of top 4 bits for the command - 144 for note on, 128 for note off, added to the bottom four bits for
        the channel - 0 for channel 1, to 15 for channel 16.
    </p>
    <p>So N144 is note on channel 1. N145 is note on channel 2. N128 is note off channel 1. N129 is note off channel 2.</p>
    <div class="section">
        <div class="titlepage">
            <div>
                <div>
                    <h3 class="title">
                        <a id="_patching_midi_channels"></a>
                        40.2.1.&nbsp;Patching MIDI channels
                    </h3>
                </div>
            </div>
        </div>
        <p>A special MIDI head can be patched that transmits MIDI data whenever the value of its channels change.</p>
        <p>
            You can find the personality the PATCH - CHOOSE HEAD window under
            <span class="emphasis"><em>Generic</em></span>
            -
            <span class="emphasis"><em>mqmidi</em></span>
            . MIDI heads contain three channels: Status, Data 1, Data 2, allowing you to send any MIDI command. These channels can be found
            on encoders A B C on page 5 of the beam window.
        </p>
        <p>The value of the status channel determines which data channels are sent.</p>
        <p>
            No data will be sent if the status channel is lower than 128 or the data channels are larger than 127, in accordance with the
            MIDI specification. For more information on the values you can transmit, see
            <a class="ulink" href="https://www.midi.org/specifications/item/table-1-summary-of-midi-message" target="_top">
                https://www.midi.org/specifications/item/table-1-summary-of-midi-message
            </a>
        </p>
        <p>
            MIDI will only be sent when the channels
            <span class="emphasis"><em>change</em></span>
            , therefore setting the status to 0 and back can be done for retransmission. Alternatively you can record a playback with the
            status channel set to 0 and keep it activated permenantly.
        </p>
        <p>
            If you need to send multiple messages in one cue, you can patch multiple
            <span class="emphasis"><em>mqmidi</em></span>
            heads; heads with lower head numbers will always be processed first. This way, for example, you can set one to a Note On command
            and another to a Note Off command.
        </p>
        <div class="note">
            <table border="0" summary="Note">
                <tbody>
                    <tr>
                        <td rowspan="2" align="center" valign="top" width="25">
                            <img alt="[Note]" src="https://secure.chamsys.co.uk/help/documentation/magicq/images/icons/note.png" />
                        </td>
                        <th align="left"></th>
                    </tr>
                    <tr>
                        <td align="left" valign="top">
                            <p>
                                Sending MIDI messages with more than 2 data bytes is not supported via this method. Consider using the cue
                                stack macro column.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
<div class="section">
    <div class="titlepage">
        <div>
            <div>
                <h2 class="title">
                    <a id="_midi_problems"></a>
                    40.3.&nbsp;MIDI problems
                </h2>
            </div>
        </div>
    </div>
    <p>
        MIDI interfaces can be tested using the test show
        <span class="strong"><strong>midilooptest.shw</strong></span>
        . This show simply runs a 2 step chase on Playback 1 which sends out MIDI commands corresponding to activation and release of
        Playback 2.
    </p>
    <div class="itemizedlist">
        <ul class="itemizedlist">
            <li class="listitem">If on a PC, connect and setup a MIDI interface</li>
            <li class="listitem">Connect a MIDI cable from the Out to the In on the Interface</li>
            <li class="listitem">Set MIDI In Type to "Any chan"</li>
            <li class="listitem">Set MIDI Out Type to "Any chan"</li>
            <li class="listitem">
                Load
                <span class="strong"><strong>midilooptest.shw</strong></span>
            </li>
            <li class="listitem">Raise Playback 1</li>
            <li class="listitem">If MIDI is working then Playback 2 should activate and release every 1 second.</li>
        </ul>
    </div>
</div>
<div class="section">
    <div class="titlepage">
        <div>
            <div>
                <h2 class="title">
                    <a id="_midi_show_control_msc"></a>
                    40.4.&nbsp;MIDI Show Control (MSC)
                </h2>
            </div>
        </div>
    </div>
    <p>MagicQ responds to the GO, STOP, RESUME and TIMED GO commands.</p>
    <p>
        The effect of the MSC commands is determined by the MSC type. This is configured in
        <span class="emphasis"><em>SETUP</em></span>
        Window,
        <span class="emphasis"><em>VIEW SETTINGS → MIDI Timecode → Show Control Type</em></span>
        . The options are Normal, Cue Stack 1 and Playback 1. This is useful for integration with (e.g.) Strand consoles which only have 1
        Cue Stack and which do not allow the show Control commands to be configured.
    </p>
    <p>
        When set to Normal then MSC commands trigger Cues in the Cue Store or Cue Stacks in the Cue Stack Store. MSC commands with two
        parameters (Q number, Q list) will trigger Cue Stacks in the Cue Stack Store. MSC commands with one parameter (Q number) will
        trigger Cues in the Cue Store.
    </p>
    <p>
        When set to Cue Stack 1 or Playback 1 then the commands will affect Cue Stack 1 or the Cue Stack stored on Playback 1 respectively.
    </p>
    <p>MagicQ ignores the times in the TIMED GO command and uses the programmed times. GO and RESUME have the same effect.</p>
    <p>
        MagicQ MIDI/Timecode interfaces manufactured prior to October 2009 must be upgraded to latest firmware by ChamSys to support MIDI
        show control messages. Please contact your dealer/distributor for more info.
    </p>
    <div class="section">
        <div class="titlepage">
            <div>
                <div>
                    <h3 class="title">
                        <a id="_midi_show_control_command_format"></a>
                        40.4.1.&nbsp;MIDI Show Control Command Format
                    </h3>
                </div>
            </div>
        </div>
        <p>
            For more details on MSC protocols see
            <a class="ulink" href="http://en.wikipedia.org/wiki/MIDI_Show_Control" target="_top">
                http://en.wikipedia.org/wiki/MIDI_Show_Control
            </a>
        </p>
        <p>MSC Commands are of the format</p>
        <p><code class="literal">F0 7F &lt;device_ID&gt; 02 &lt;command_format&gt; &lt;command&gt; &lt;data&gt; F7</code></p>
        <p>&lt;device_ID&gt; is 7F for "all call" ID for system wide broadcasts</p>
        <p>&lt;command_format&gt; is 01 for "Lighting"</p>
        <p>MagicQ supports the following commands in the &lt;command&gt;</p>
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">01 GO</li>
                <li class="listitem">02 STOP</li>
                <li class="listitem">03 RESUME</li>
                <li class="listitem">04 TIMED_GO</li>
            </ul>
        </div>
        <p>For example:</p>
        <p>
            <code class="literal">F0 7F 7F 02 01 01 31 F7</code>
            (Go Cue 1 in the Cue Store)
        </p>
        <p>
            <code class="literal">F0 7F 7F 02 01 01 32 30 F7</code>
            (Go Cue 20 in the Cue Store)
        </p>
        <p>
            <code class="literal">F0 7F 7F 02 01 02 31 F7</code>
            (Stop Cue 1 in the Cue Store)
        </p>
        <p>
            <code class="literal">F0 7F 7F 02 01 01 00 31 30 F7</code>
            (Go Cue Stack 10 in the Stack Store)
        </p>
        <p>
            <code class="literal">F0 7F 7F 02 01 01 32 00 31 30 F7</code>
            (Go Cue 2 on Cue Stack 10 in the Stack Store)
        </p>
        <p>
            It is possible to test how MagicQ responds to MSC messages by typing in the MIDI message on the keyboard (this is only supported
            on consoles and MagicQ PC when out of demo mode). For example to test the command
        </p>
        <p><code class="literal">F0 7F 7F 02 01 01 31 F7</code></p>
        <p>
            Type
            <span class="strong"><strong>testsysex</strong></span>
            followed by the message on the keyboard without the initial F0 and with no spaces between the MIDI values
        </p>
        <p><code class="literal">testsysex 7F7F02010137F7</code></p>
    </div>
</div>
<div class="section">
    <div class="titlepage">
        <div>
            <div>
                <h2 class="title">
                    <a id="midi_beat_clock"></a>
                    40.5.&nbsp;MIDI Beat Clock
                </h2>
            </div>
        </div>
    </div>
    <p>
        MagicQ Supports MIDI Beat clock messages in addition to supporting MIDI Notes &amp; Timecode. In order to use MIDI Beat clock, first
        Midi devices must be setup under SETUP_ Window,
        <span class="emphasis"><em>VIEW SETTINGS → MIDI Timecode → Timecode Decode</em></span>
        . This is set to either MIDI or Virtual (USB) MIDI depending if you are using direct ports on a console or a virtual/USB device on a
        PC system. The MIDI in type setting should also be set to
        <span class="emphasis"><em>Any Chan</em></span>
        .
    </p>
    <p>
        When MagicQ receives a MIDI Beat Clock message it toggles the remote trigger input as if the remote trigger input had been pressed
        or released. This option is set under SETUP_ Window,
        <span class="emphasis"><em>VIEW SETTINGS →PORTS → REMOTE TRIGGER TYPE</em></span>
        .
    </p>
    <p>
        Set Remote Trigger Type to "MIDI Beat" to get a remote trigger every MIDI beat or "MIDI Beat Half" or "MIDI Beat Qtr" to get
        triggers for half and quarter notes. Then set the Remote Trigger action as required.
    </p>
    <p>
        Remote input can be used in multiple ways by setting Setup, View Settings, Ports, Remote Trigger Action including "Audio Bump" and
        "Tap to Time Sel PB".
    </p>
</div>
<div class="section">
    <div class="titlepage">
        <div>
            <div>
                <h2 class="title">
                    <a id="_magicq_usb_midi_timecode_box_firmware_versions"></a>
                    40.6.&nbsp;MagicQ USB MIDI/Timecode box firmware versions
                </h2>
            </div>
        </div>
    </div>
    <div class="informaltable">
        <table class="informaltable" cellpadding="4px">
            <colgroup>
                <col class="col_1" />
                <col class="col_2" />
            </colgroup>
            <tbody>
                <tr>
                    <td align="left" valign="top"><p>3</p></td>
                    <td align="left" valign="top"><p>Fixed SMPTE drop frames</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>4</p></td>
                    <td align="left" valign="top"><p>Added MIDI beat clock support</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>5</p></td>
                    <td align="left" valign="top"><p>Fixed incorrect timecode config</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>6</p></td>
                    <td align="left" valign="top"><p>Fixed MIDI notes input channel filtering</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>7</p></td>
                    <td align="left" valign="top"><p>Fixed MIDI timecode generate flags</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>8</p></td>
                    <td style="" align="left" valign="top"><p>Fixed LTC decode after LTC generate</p></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
