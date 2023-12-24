---
id: automation
title: Chapter 22. Automation
sidebar_position: 22
---

# Chapter&nbsp;22.&nbsp;Automation
<div class="section">
    ## 22.1.&nbsp;MagicQ Automation Window
    <p>
        MagicQ supports an automation system to enable it to automatically respond to both external, internal and timed events. MagicQ can
        trigger on external events such as MIDI notes, DMX input, serial input, timecode, and the remote contact input. MagicQ can also
        trigger on internal events such as system startup, system shutdown and system powerfail. In addition MagicQ can trigger on timed
        (scheduled) events.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/automwindow.png" alt="image" />
        </span>
    </p>
    <p>
        The Automation Window (Macro, View Autom) is used to manage all of the automated events. The Automation Window supports multiple
        events with each event being subject to specified parameters.
    </p>
    <p>
        Each event then triggers a particular MagicQ function – this can be a function on a Playback, a Cue Stack, a Cue, a Page, a Macro or
        a Layout.
    </p>
    <p>
        MagicQ can take a parameter from the event trigger and pass it to the function – for example, it could take the velocity from a MIDI
        note event and tigger a Playback, Cue Stack, Cue or Execute level using that velocity.
    </p>
    <p>Automation is only supported on MagicQ PC/Mac when connected to a MagicQ USB Wing, MagicQ USB Interface or SnakeSys product.</p>
    <p>Automations can be globally enabled or disabled from the Autom setting in Setup, Vierw Settings, Mode.</p>
    <p>From MagicQ v1.9.0.0 onwards Automations were expanded, so that MagicQ now supports up to 1000 Automations.</p>
    <div class="section">
        ### 22.1.1.&nbsp;Autom Events
        <p>Each event can have up to 3 parameters (P1,P2,P3) to filter the event further.</p>
        <div class="informaltable">
            <table class="informaltable" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                    <col class="col_3" />
                    <col class="col_4" />
                </colgroup>
                <thead>
                    <tr>
                        <th align="left" valign="top">Event</th>
                        <th align="left" valign="top">P1</th>
                        <th align="left" valign="top">P2</th>
                        <th align="left" valign="top">P3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>Scheduled</p></td>
                        <td align="left" valign="top"><p>Time</p></td>
                        <td align="left" valign="top"><p>Date mask</p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>MIDI note</p></td>
                        <td align="left" valign="top"><p>Mode - on, off or both</p></td>
                        <td align="left" valign="top"><p>Note</p></td>
                        <td align="left" valign="top"><p>Channel – 0 for all</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>MIDI sysex</p></td>
                        <td align="left" valign="top"><p>number of bytes to match</p></td>
                        <td align="left" valign="top"><p>P2 is byte string</p></td>
                        <td align="left" valign="top"><p>P3 is the byte to pass to the function</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>MIDI clock</p></td>
                        <td align="left" valign="top"><p>Divisor</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Timecode</p></td>
                        <td align="left" valign="top"><p>Start timecode range</p></td>
                        <td align="left" valign="top"><p>End timecode range</p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Remote</p></td>
                        <td align="left" valign="top"><p>Mode - on, off or both</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>DMX</p></td>
                        <td align="left" valign="top"><p>Level</p></td>
                        <td align="left" valign="top"><p>Channel</p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Serial port</p></td>
                        <td align="left" valign="top"><p>number of characters to match</p></td>
                        <td align="left" valign="top"><p>P2 is character string</p></td>
                        <td align="left" valign="top"><p>P3 is the character to pass to the function</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Tracker</p></td>
                        <td align="left" valign="top"><p>Type - inside, outside, enter, exit</p></td>
                        <td align="left" valign="top"><p>Tracker ID</p></td>
                        <td align="left" valign="top"><p>MagicVis object</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Scene Setter Button</p></td>
                        <td align="left" valign="top"><p>Button number 1 to 16</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>OSC</p></td>
                        <td align="left" valign="top"><p>OSC Command maximum 15 characters</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Startup</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Shutdown</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Power fail</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Emergency</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>External Autom events can be simulated within MagicQ using the keyboard.</p>
        <p>
            For MIDI note events type testmidi followed by the 3 MIDI bytes - e.g. to test note on for note 10 at velocity 127 enter
            testmidi 144,1,127
        </p>
        <p>
            For MIDI system exclusive events type testsysex followed by the required MIDI bytes in hexadecimal representation, e.g.
            testsysex BABE to match 0xBA for the first byte and 0xBE for the second byte
        </p>
        <p>For OSC events type testosc followed by the OSC string, e.g. to go PB1 enter testosc /pb/1/go</p>
        <p>For serial events type testser followed by the serial bytes, e.g. to simulate the bytes 1,2,3 enter testser 1,2,3</p>
        <p>
            For remote remote input event, type testinput followed by polarity and option input number, e.g. to simulate remote input closed
            enter testinput 1
        </p>
        <p>For emergency hot takeover, use SHIFT and SET EMERGENCY ON and SET EMERGENCY OFF suft buttons in Setup, View DMX I/O.</p>
    </div>
    <div class="section">
        ### 22.1.2.&nbsp;Autom Functions
        <p>The following functions are supported with each function having up to 3 function parameters F1, F2, F3.</p>
        <div class="informaltable">
            <table class="informaltable" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                    <col class="col_3" />
                    <col class="col_4" />
                </colgroup>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>Function</p></td>
                        <td align="left" valign="top"><p>F1</p></td>
                        <td align="left" valign="top"><p>F2</p></td>
                        <td align="left" valign="top"><p>F3</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>PB a,r,level</p></td>
                        <td align="left" valign="top"><p>Playback num</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>PB level</p></td>
                        <td align="left" valign="top"><p>Playback num</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>PB activate</p></td>
                        <td align="left" valign="top"><p>Playback num</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>PB release</p></td>
                        <td align="left" valign="top"><p>Playback num</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>PB act full</p></td>
                        <td align="left" valign="top"><p>Playback num</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>PB go</p></td>
                        <td align="left" valign="top"><p>Playback num</p></td>
                        <td align="left" valign="top"><p>Cue ID</p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>PB go cue ID = level</p></td>
                        <td align="left" valign="top"><p>Playback num</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>PB back</p></td>
                        <td align="left" valign="top"><p>Playback num</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>PB ffwd</p></td>
                        <td align="left" valign="top"><p>Playback num</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>PB fbck</p></td>
                        <td align="left" valign="top"><p>Playback num</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>PB jump</p></td>
                        <td align="left" valign="top"><p>Playback num</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Stack toggle</p></td>
                        <td align="left" valign="top"><p>Cue Stack ID</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Stack activate</p></td>
                        <td align="left" valign="top"><p>Cue Stack ID</p></td>
                        <td align="left" valign="top"><p>Cue ID</p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Stack release</p></td>
                        <td align="left" valign="top"><p>Cue Stack ID</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Stack a,r,level</p></td>
                        <td align="left" valign="top"><p>Cue Stack ID</p></td>
                        <td align="left" valign="top"><p>Cue ID</p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Stack random</p></td>
                        <td align="left" valign="top"><p>Start Cue Stack ID</p></td>
                        <td align="left" valign="top"><p>End Cue Stack ID</p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Cue toggle</p></td>
                        <td align="left" valign="top"><p>QID in Cue Store</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Cue activate</p></td>
                        <td align="left" valign="top"><p>QID in Cue Store</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Cue release</p></td>
                        <td align="left" valign="top"><p>QID in Cue Store</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Cue a,r,level</p></td>
                        <td align="left" valign="top"><p>QID in Cue Store</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Exec toggle</p></td>
                        <td align="left" valign="top"><p>Exec Grid ID</p></td>
                        <td align="left" valign="top"><p>Item ID</p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Exec activate</p></td>
                        <td align="left" valign="top"><p>Exec Grid ID</p></td>
                        <td align="left" valign="top"><p>Item ID</p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Exec release</p></td>
                        <td align="left" valign="top"><p>Exec Grid ID</p></td>
                        <td align="left" valign="top"><p>Item ID</p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Exec level</p></td>
                        <td align="left" valign="top"><p>Exec Grid ID</p></td>
                        <td align="left" valign="top"><p>Item ID</p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Run macro</p></td>
                        <td align="left" valign="top"><p>Macro ID</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Change layout</p></td>
                        <td align="left" valign="top"><p>Layout num</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Display message</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Change page</p></td>
                        <td align="left" valign="top"><p>Page num</p></td>
                        <td align="left" valign="top"><p>PB to activate</p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Change page release main</p></td>
                        <td align="left" valign="top"><p>Page num</p></td>
                        <td align="left" valign="top"><p>PB to activate</p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Change page release all</p></td>
                        <td align="left" valign="top"><p>Page num</p></td>
                        <td align="left" valign="top"><p>PB to activate</p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Speed Master Tap</p></td>
                        <td align="left" valign="top"><p>Speed Master ID</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Speed Master Step</p></td>
                        <td align="left" valign="top"><p>Speed Master ID</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>
            For Playback (PB) functions, F1 is the Playback number. MagicQ consoles support control of all 202 playbacks. MagicQ PC supports
            control of the first 10 playbacks (PB1 to PB10).
        </p>
        <p>For Stack functions, F1 is the Stack number. F2 is a Cue ID for Stack activate, and Stack a,r,level only.</p>
        <p>For Cue functions F1 is the Cue number (Qid) within the Cue Store.</p>
        <p>
            Stack random enables the activation of one Cue Stack in the Cue Stack range F1 to F2. Each time the automation triggers all Cue
            Stacks in the range are deactivated, and one Cue Stack in the range is selected by random and activated.
        </p>
        <p>For Macros F1 is the keyboard macro ID. 0 means stop all playing keyboard macros.</p>
        <p>
            For Page functions F1 is the Page Number and F2 specifies a Playback to be activated on the Page Change (0 = none) and a Cue Id
            to jump to on PB go and PB jump.
        </p>
        <p>For Display Message, the Description field is used to specify the message.</p>
        <p>For Speed Master Tap and Speed Master Step the Speed Master ID is SP1 to SP100.</p>
        <p>The current state of the function is shown in the Status field.</p>
    </div>
    <div class="section">
        ### 22.1.3.&nbsp;MIDI events
        <p>If you add MIDI events then these override the miditable.txt file – the file is completely ignored.</p>
        <p>
            The MIDI Clock enables triggering from the MIDI clock. The divisor can be specified to trigger on half note, full note or
            higher.
        </p>
    </div>
    <div class="section">
        ### 22.1.4.&nbsp;Serial Port events
        <p>
            If you add serial port events then these override the normal ChamSys serial remote protocol functions. The serial port settings
            in Setup, View Settings, Ports must be set up with Serial Remote Protocol set to ChamSys RX.
        </p>
        <p>
            MagicQ matches the serial data received to the string you specify in the P2 field using the same format as in the Cue Stack
            Macros but without the X. So if you set the P2 field in the Autom to
        </p>
        <p>1,2,3 it will match the serial data received 1,2,3</p>
        <p>
            If there is a
            <span class="emphasis"><em>x</em></span>
            preceding the number then all following numbers are considered as hexadecimal (e.g. xBABE will consist of the byte 0xBA followed
            by 0xBE)
        </p>
        <p>
            Note that the string entered in the P2 field must be encased with "". For example "1,2,3" MagicQ will display " as an '. You
            must use " when encasing the string.
        </p>
        <p>P1 is the number of characters to match and P3 determines which character is passed onto the Autom function.</p>
        <p>
            So if you want to set up MagicQ to respond to serial commands to set the level of Playback 1 using the serial commands "L1" to
            "L100" you would set up the Autom as:
        </p>
        <p>Type Serial Port</p>
        <p>P1 1 // Match 1 character</p>
        <p>P2 "L" // Character to match</p>
        <p>
            P3 2 // 2
            <sup>nd</sup>
            character of received string
        </p>
        <p>Function PB Level</p>
        <p>F1 1</p>
    </div>
    <div class="section">
        ### 22.1.5.&nbsp;MIDI Sysex events
        <p>MagicQ matches MIDI Sysex messages in a similar way to serial messages above</p>
        <p>
            MagicQ matches the MIDI Sysex messages to the string you specify in the P2 field using the same format as in the Cue Stack
            Macros but without the X. So if you set the P2 field in the Autom to
        </p>
        <p>1,2,3 it will match the serial data received 1,2,3</p>
        <p>
            If there is a
            <span class="emphasis"><em>x</em></span>
            preceding the number then all following numbers are considered as hexadecimal (e.g. xBABE will consist of the byte 0xBA followed
            by 0xBE)
        </p>
        <p>
            Note that the string entered in the P2 field must be encased with "". For example "1,2,3" MagicQ will display " as an '. You
            must use " when encasing the string.
        </p>
        <p>
            P1 is the number of characters to match and P3 determines which character is passed onto the Autom function. As MIDI is 7 bit
            data the character passed is doubled before it is passed onto the Autom function - enabling a MIDI Sysex value of 127 to set a
            playback to full level.
        </p>
        <p>
            Note that MIDI Show Control messages will always be handled internally by MagicQ to trigger Cues and Cue Stacks unless the MIDI
            Show Control type is set to "None" - in which case MIDI Show Control messages can be handled by automs.
        </p>
    </div>
</div>
<div class="section">
    ## 22.2.&nbsp;Scheduled Events
    <p>
        MagicQ supports timed events for trigger Cues at specific times of the day or days of the week. Any Cue in a Cue Stack can be set to
        trigger based on a scheduled event rather than following on from the previous Cue. This enables time of day and date based events to
        be run automatically.
    </p>
    <p>Scheduled events are supported on MagicQ consoles and on MagicQ PC when connected to a MagicQ Wing.</p>
    <p>
        <code class="literal">19/30/5</code>
        for 19 hours 30 minutes and 5 seconds
    </p>
    <p>or</p>
    <p>
        <code class="literal">*/10/0</code>
        to have the event occur every hour at 10 minutes past the hour
    </p>
    <p>or</p>
    <p>
        <code class="literal">*/*/0</code>
        for every minute
    </p>
    <p>
        From v1.9.2.1 software, when MagicQ starts up it checks for any scheduled Automs and sets the state according to the current time
        and date. For example if there is an Automation that runs at 7.00am each day and the system restarts at 9.00am then it will
        automatically trigger the 7.00am automation. The Automs are triggered in the order of oldest to newest as they would have been done
        if the system had been running at that time.
    </p>
    <p>
        Automations, including scheduled events can be disabled (for example when Programming) on an individual basis or from the global
        Macro enable option in Setup.
    </p>
    <div class="section">
        ### 22.2.1.&nbsp;Dates and days of the week
        <p>It is also possible to set dates in P2 using the following format:</p>
        <p><code class="literal">day/month/year</code></p>
        <p>
            Asterisks (
            <code class="literal">*</code>
            ) can be used. Examples:
        </p>
        <p>
            <code class="literal">24/12/2005</code>
            - specific date (24 December 2005)
        </p>
        <p>
            <code class="literal">1/*/*</code>
            - 1st day of every month
        </p>
        <p>
            <code class="literal">*/6/*</code>
            - everyday in June
        </p>
        <p>
            Alternatively you can specify days of the week using the characters A to G where A is Monday, B is Tuesday, C is Wednesday etc.
        </p>
        <p>So for an event every Monday and Tuesday enter:</p>
        <p><code class="literal">AB</code></p>
    </div>
    <div class="section">
        ### 22.2.2.&nbsp;Sunrise + Sunset (astronomical)
        <p>MagicQ has the capability to trigger events based on the sunrise and sunset at the particular location.</p>
        <p>
            In order for sunrise and sunset events to occur correctly MagicQ must be configured with the correct longitude, latitude and
            time zones. These parameters are configured in Setup, View Settings, Mode. The sunrise and sunset times for the current location
            can be checked in Setup, View System, View Status.
        </p>
        <p>To set a scheduled event based on sunrise or sunset first set the time starting with R for sunrise or S for sunset.</p>
        <p>
            It is possible to set offsets on the sunrise and sunset times so the event is triggered a certain time before or after the
            sunrise or sunset.
        </p>
        <p>For example to trigger 20 minutes after sunrise enter</p>
        <p>R+0/20/0</p>
        <p>To trigger 30 minutes before sunset enter</p>
        <p>S-0/30/0</p>
    </div>
    <div class="section">
        ### 22.2.3.&nbsp;Tracker
        <p>
            MagicQ can trigger events based on a XYZ Tracker position related to a MagicVis object. This enables receive XYZ position from
            an external system and using that position information to control other attributes - e.g. ramping up intensity of a fixed
            luminaire when performer moves into an area on the stage. We tie it into areas of the stage that we can define in our MagicVis
            visualisation so we can control attributes - intensity, colour, zoom etc… based on how close the performer is to a point or to a
            line.
        </p>
        <p>
            When the trigger type is set to Inside then as the XYZ tracker moves inside the MagicVis object the trigger event level goes
            from 0 at the edge to to 255 at the centre of the object.
        </p>
        <p>
            When the trigger type is set to Outside then when the XYZ tracker is outside the MagicVis object the trigger event level is at
            255. When it moves inside it goes from 255 at the edge to 0 at the centre of the object.
        </p>
        <p>When the trigger type is set to Enter then as the XYZ tracker moves inside the MagicVis object the event is triggered.</p>
        <p>When the trigger type is set to Exit then as the XYZ tracker moves outside the MagicVis object the event is triggered.</p>
    </div>
</div>
<div class="section">
    ## 22.3.&nbsp;Automated Start of Playbacks / Executes
    <p>
        MagicQ includes several options for automated start of Playbacks and Executes. These options are available on MagicQ consoles and on
        MagicQ PC systems when connected to a MagicQ USB Wing or Interface. See Setup, View Settings, Playback, Activate Playbacks On Start.
    </p>
</div>
<div class="section">
    ## 22.4.&nbsp;Keyboard macros
    <p>
        Keyboard macros enable you to record sequences of key presses and to replay the sequence at the press of a single button. Keyboard
        macros can be assigned to any button on the console (including to a SHIFT+button and CTRL+button) or to buttons on an external
        keyboard. The first 10 keyboard macros are available on the Quick Macro Tool Bar.
    </p>
    <p>Macros can be inhibited from the Setup Window using the "Inhibit Macros" option.</p>
    <div class="section">
        ### 22.4.1.&nbsp;Recording keyboard macros
        <p>
            To record a keyboard macro, go to the Macro Window, press RECORD and select a macro to record. Alternatively moe the cursor to a
            free item in the window and press the START MACRO soft button.
        </p>
        <p>
            The console then records all of the following key sequences until you press the Macro Window button and the END MACRO soft
            button.
        </p>
        <p>
            The title bar shows "Recording" whilst recording is in progress. MagicQ automatically removes the MACRO and END MACRO soft
            button press from the end of the recording.
        </p>
        <p>
            In software prior to v1.7.1.3 MagicQ stored raw key presses. From v1.7.1.3 MagicQ supports several different formats for storing
            the keys - by default it now uses the internal MQ keys. The internal MQ keys have the advantage that they are the same across
            all MagicQ consoles - therefore a keyboard macro that is recorded on a MQ80 will always run correctly on a Pro 2014 and vice
            versa.
        </p>
        <p>Choose the Record Options by pressing soft button A in the Macro window. The options are "Keys", "MQ Keys" and "Functions".</p>
    </div>
    <div class="section">
        ### 22.4.2.&nbsp;Playing keyboard macros
        <p>Macros can be played by simply pressing the item in the Macro Window.</p>
        <p>
            To stop a macro that is playing open the Macro Window, View Macros, put the cursor on the macro and press the STOP MACRO soft
            button. To stop all macros that are playing press SHIFT + STOP ALL MACROS.
        </p>
        <p>Keyboard macros can be triggered from Cue Stacks using the Cue Stack Macro B, e.g. B1 plays macro B1. B0 stops all macros.</p>
    </div>
    <div class="section">
        ### 22.4.3.&nbsp;Keyboard macro timing
        <p>
            Playback of keyboard macros can use the times that the macro was recorded with or using external time code sources. By default
            macros are played back using "Step per tick" timing. Use the SET TIMING soft button to change the timing. The options are:
        </p>
        <div class="informaltable">
            <table class="informaltable" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                </colgroup>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>Immediate</p></td>
                        <td align="left" valign="top">
                            <p>
                                All steps are executed immediately. The fastest play back, but in some cases where windows are opened/closed
                                the macro may not play back as expected
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Step per tick</p></td>
                        <td align="left" valign="top"><p>Executes the macro one step per tick. Ensures macro plays back as expected</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Ext Time Code</p></td>
                        <td align="left" valign="top"><p>Executes according to external time code</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Int Time Code</p></td>
                        <td align="left" valign="top"><p>Executes with the internal timing it was recorded at</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Old macros</p></td>
                        <td align="left" valign="top"><p>Executed with old system timing - do not use for new macros</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>
            The timing type can be changed after the macro has been recorded – however if external time code timing is required then this
            should be selected before the macro is recorded. This enables the console to record the key and button presses according to the
            received time code signal.
        </p>
    </div>
    <div class="section">
        ### 22.4.4.&nbsp;Editing keyboard macros
        <p>
            Times can be modified in the View Data view of the Macro Window using the keypad and Encoder E. Multiple items in the macro can
            be changed at one time using SHIFT and the cursor keys to select the items.
        </p>
        <p>When using time code timing, the + and – operators can be used to offset the timing of a sequence of items.</p>
        <p>
            Macro steps can be deleted using the REMOVE key. Note when a button is pressed there is a "press" and a "release" – both should
            be removed – otherwise the button state will become confused.
        </p>
        <p>
            It is possible to move steps in the Macro, View Data view – press MOVE and then select the source followed by the destination.
            Multiple steps can be moved using SHIFT and the cursor keys.
        </p>
        <p>
            The RETIME soft button can be used to change the times for steps that are out of sequence - any times that are not in order are
            changed to a new time that is within order. The sequence that the keys are played back in is maintained.
        </p>
        <p>
            The REORDER soft button changes the sequence of keys to match the timing. Note that this will affect the result of playing the
            macro.
        </p>
    </div>
    <div class="section">
        ### 22.4.5.&nbsp;Assigning keyboard macros
        <p>
            To assign a macro to a button, press the ASSIGN MACRO soft button and press a key to assign it to (e.g. one of the 6 spare
            keys). Keyboard macros can also be assigned to a combination of keys – for example if you hold one key and press another key.
            Keyboard macros are saved into show files and also when you Save Settings, so it is possible to personalise your console.
        </p>
        <p>
            If you accidentally assign a keyboard macro to the wrong button then you can easily change the assignment. Open the Macro
            Window, move the cursor to the macro you want to change the assignment for and press the ASSIGN MACRO soft button. Now press the
            button that you really wanted to assign it to.
        </p>
        <p>A macro assignment can be removed using the DEASSIGN MACRO soft button.</p>
    </div>
    <div class="section">
        ### 22.4.6.&nbsp;Quick Macro Toolbar
        <p>
            The Quick Macro Tool Bar is accessed by pressing the screen in the Status Display (the area of the screen above Playbacks PB1 to
            PB5 with the Clock). The Macro Tool Bar can be closed by pressing in the Status Display again.
        </p>
        <p>The Macro Tool Bar shows the Key Macros 1 to 10.</p>
    </div>
    <div class="section">
        ### 22.4.7.&nbsp;Recording Playback faders
        <p>
            Macros support fader moves and encoder changes as well as button presses. This enables complete recording and playback of macro
            segments. Macro timing and playback uses a high resolution internal clock enabling accurate playback of recorded sequences.
        </p>
        <p>MagicQ optimises fader moves to remove redundant steps.</p>
    </div>
    <div class="section">
        ### 22.4.8.&nbsp;In built Macros
        <p>
            MagicQ supports a number of in-built macros which carry out common programming key sequences including quite a few that would
            normally require multiple key presses or simultaneous pressing of more than one key. The In-built Macros can be useful on touch
            systems where it is not possible to touch 2 keys at one time.
        </p>
        <p>Press the In built Macro soft button and choose the macro to assign to the current item in the Macro Window.</p>
    </div>
    <div class="section">
        ### 22.4.9.&nbsp;Scheduled events in Cue Stacks
        <p>
            Cue Stacks can be used to program a list of scheduled events. To use this feature, set the Halt field of each of the Cues in the
            Cue Stack Window to "Sched". Double click to change the field. Then enter the time in the Wait field. The times can have
            wildcards and sunrise/sunset times as per
            <a class="link" href="automation.html#scheduled-events" title="22.2.&nbsp;Scheduled Events">Autom</a>
            events.
        </p>
        <p>
            If dates are required then they are entered into the macro field starting with Z and ending with Z. For example to have an event
            on the
        </p>
        <p>24 December 2005 enter:</p>
        <p>Z24/12/2005Z</p>
        <p>
            You can also specify particular days of the week using the characters A to G where A is Monday, B is Tuesday, C is Wednesday
            etc…
        </p>
        <p>So for an event every Monday and Tuesday enter:</p>
        <p>ZABZ</p>
        <p>For an event on the first day of every month enter</p>
        <p>Z1Z</p>
    </div>
</div>
