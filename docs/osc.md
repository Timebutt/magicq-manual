---
id: osc
title: Chapter 45. Open Sound Control (OSC)
sidebar_position: 45
---

# Chapter&nbsp;45.&nbsp;Open Sound Control (OSC)
<p>MagicQ supports sending and receiving of Open Sound Control (OSC) messages.</p>
<p>
    OSC is a network protocol commonly used to send messages between audio visual programs, such as show control, sound effect and tablet
    applications. The protocol is free to implement which makes it increasingly popular; the specification can be found at
    <a class="ulink" href="http://opensoundcontrol.org/introduction-osc" target="_top">http://opensoundcontrol.org/introduction-osc</a>
</p>
<p>
    OSC is supported on MagicQ consoles (except MQ40 and MQ40N) and PCs with a MagicQ wing or interface attached (PC must be out of demo
    mode).
</p>
<p>MagicQ can interact with OSC in the following ways:</p>
<div class="itemizedlist">
    <ul class="itemizedlist">
        <li class="listitem">Receive messages controlling the first 10 playbacks</li>
        <li class="listitem">Receive messages controlling buttons, faders and encoders in the Execute Window</li>
        <li class="listitem">
            Convert messages to
            <a class="link" href="rpc.html" title="Chapter&nbsp;35.&nbsp;ChamSys Remote Protocol Commands">
                ChamSys Remote Ethernet Protocol commands
            </a>
            and
            <a class="link" href="midi.html" title="Chapter&nbsp;40.&nbsp;MIDI">midi messages</a>
        </li>
        <li class="listitem">Respond to message by using the Autom Window</li>
        <li class="listitem">Send messages using the macro field of cue stacks</li>
        <li class="listitem">Patch a special OSC head that sends messages when the value of the channel changes</li>
    </ul>
</div>
<p>An OSC message consists of two parts:</p>
<div class="itemizedlist">
    <ul class="itemizedlist">
        <li class="listitem">
            <span class="strong"><strong>Address</strong></span>
            : a forward slash followed by the name of the message. Can be separated by slashes, similar to file paths. e.g.
            <code class="literal">/myosc/method/address</code>
            or
            <code class="literal">/triggercue</code>
        </li>
        <li class="listitem">
            <p class="simpara">
                <span class="strong"><strong>Arguments</strong></span>
                : zero or more values, each with a specific type. Common types are:
            </p>
            <div class="itemizedlist">
                <ul class="itemizedlist">
                    <li class="listitem">
                        <span class="emphasis"><em>integer</em></span>
                    </li>
                    <li class="listitem">
                        <span class="emphasis"><em>float</em></span>
                        : number with a decimal place
                    </li>
                    <li class="listitem">
                        <span class="emphasis"><em>string</em></span>
                        : line of text
                    </li>
                    <li class="listitem">
                        <span class="emphasis"><em>midi</em></span>
                        : MIDI message
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</div>
<div class="section">
    ## 45.1.&nbsp;Setup
    <p>To enable OSC on MagicQ you need to set the mode, and the transmit and/or receive port numbers in Setup, View Settings, Network.</p>
    <p>Setting a port to 0 disables transmitting/receiving of OSC.</p>
    <p>
        Optionally, a transmit IP address can be specified or set to 0.0.0.0 to broadcast to all computers on the lighting network. Note
        that if you wish to transmit on the control net then you must set a transmit IP address which is on the control net.
    </p>
    <p>
        MagicQ automatically receives OSC on the main lighting network. MagicQ will receive OSC on the control net when the control net
        firewall is disabled.
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
                        <p>Port number needs to be higher than 1024 on most systems. A good default is 9000 transmit and 8000 receive.</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<div class="section">
    ## 45.2.&nbsp;Receiving messages
    <div class="section">
        ### 45.2.1.&nbsp;MagicQ OSC addresses
        <p>
            The following table lists the built-in OSC messages that MagicQ will respond to. Only the first 10 playbacks and first 10
            execute grids can be controlled with the built-in addresses.
        </p>
        <p>You can use the AUTOM window to extend control to other parts of the MagicQ system.</p>
        <div class="table">
            <a id="idm13062"></a>
            <p class="title"><strong>Table&nbsp;45.1.&nbsp;OSC Addresses</strong></p>
            <div class="table-contents">
                <table class="table" summary="OSC Addresses" cellpadding="4px">
                    <colgroup>
                        <col class="col_1" />
                        <col class="col_2" />
                        <col class="col_3" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th align="left" valign="top">Address</th>
                            <th align="left" valign="top">Arguments</th>
                            <th align="left" valign="top">Behaviour</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td align="left" valign="top">
                                <p>
                                    /pb/
                                    <span class="emphasis"><em>&lt;playback&gt;</em></span>
                                </p>
                            </td>
                            <td align="left" valign="top">
                                <p>float between 0.0 and 1.0</p>
                                <p>
                                    <span class="emphasis"><em>or</em></span>
                                </p>
                                <p>int between 0 and 100</p>
                            </td>
                            <td align="left" valign="top"><p>Set playback fader level</p></td>
                        </tr>
                        <tr>
                            <td align="left" valign="top">
                                <p>
                                    /pb/
                                    <span class="emphasis"><em>&lt;playback&gt;</em></span>
                                    /go
                                </p>
                            </td>
                            <td align="left" valign="top">
                                <p>(optional)</p>
                                <p>non-zero value</p>
                            </td>
                            <td align="left" valign="top"><p>Go on playback</p></td>
                        </tr>
                        <tr>
                            <td align="left" valign="top">
                                <p>
                                    /pb/
                                    <span class="emphasis"><em>&lt;playback&gt;</em></span>
                                    /flash
                                </p>
                            </td>
                            <td align="left" valign="top">
                                <p>0 sets to 0%</p>
                                <p>non-zero sets to 100%</p>
                            </td>
                            <td align="left" valign="top"><p>Set playback level to 100%</p></td>
                        </tr>
                        <tr>
                            <td align="left" valign="top">
                                <p>
                                    /pb/
                                    <span class="emphasis"><em>&lt;playback&gt;</em></span>
                                    /pause
                                </p>
                            </td>
                            <td align="left" valign="top">
                                <p>(optional)</p>
                                <p>non-zero value</p>
                            </td>
                            <td align="left" valign="top"><p>Pause playback</p></td>
                        </tr>
                        <tr>
                            <td align="left" valign="top">
                                <p>
                                    /pb/
                                    <span class="emphasis"><em>&lt;playback&gt;</em></span>
                                    /release
                                </p>
                            </td>
                            <td align="left" valign="top">
                                <p>(optional)</p>
                                <p>non-zero value</p>
                            </td>
                            <td align="left" valign="top"><p>Release playback</p></td>
                        </tr>
                        <tr>
                            <td align="left" valign="top">
                                <p>
                                    /pb/
                                    <span class="emphasis"><em>&lt;playback&gt;</em></span>
                                    /
                                    <span class="emphasis"><em>&lt;cue&gt;</em></span>
                                </p>
                            </td>
                            <td align="left" valign="top">
                                <p>(optional)</p>
                                <p>non-zero value</p>
                            </td>
                            <td align="left" valign="top"><p>Jump to cue</p></td>
                        </tr>
                        <tr>
                            <td align="left" valign="top"><p>/dbo</p></td>
                            <td align="left" valign="top">
                                <p>0 turns on</p>
                                <p>non-zero turns off</p>
                            </td>
                            <td align="left" valign="top"><p>Blackout</p></td>
                        </tr>
                        <tr>
                            <td align="left" valign="top"><p>/swap</p></td>
                            <td align="left" valign="top">
                                <p>0 = add</p>
                                <p>non-zero = swap</p>
                            </td>
                            <td align="left" valign="top"><p>Set swap mode</p></td>
                        </tr>
                        <tr>
                            <td align="left" valign="top">
                                <p>/exec/&lt;page&gt;/&lt;item&gt;</p>
                                <p>/exec/&lt;item&gt;</p>
                            </td>
                            <td align="left" valign="top">
                                <p>(optional) one of following</p>
                                <p>
                                    <span class="emphasis"><em>no arguments</em></span>
                                    = activate button/fader
                                </p>
                                <p>
                                    <span class="emphasis"><em>0</em></span>
                                    = relase button/fader; lower encoder
                                </p>
                                <p>
                                    <span class="emphasis"><em>1</em></span>
                                    = activate button/fader; raise encoder
                                </p>
                                <p>
                                    <span class="emphasis"><em>float between 0.0 and 1.0</em></span>
                                    = set fader level
                                </p>
                                <p>
                                    <span class="emphasis"><em>int between 0 and 100</em></span>
                                    = set fader level
                                </p>
                            </td>
                            <td align="left" valign="top"><p>Control button, fader or encoder in execute window</p></td>
                        </tr>
                        <tr>
                            <td align="left" valign="top">
                                <p>/10Scene/&lt;item&gt;/&lt;zone&gt;</p>
                                <p>/10Scene/&lt;item&gt;</p>
                            </td>
                            <td align="left" valign="top">
                                <p>(optional) one of following</p>
                                <p>
                                    <span class="emphasis"><em>no arguments</em></span>
                                    = activate button
                                </p>
                                <p>
                                    <span class="emphasis"><em>0</em></span>
                                    = release button
                                </p>
                                <p>
                                    <span class="emphasis"><em>1</em></span>
                                    = activate button
                                </p>
                                <p>
                                    <span class="emphasis"><em>float between 0.0 and 1.0</em></span>
                                    = set fader level
                                </p>
                            </td>
                            <td align="left" valign="top"><p>Control 10Scene buttons</p></td>
                        </tr>
                        <tr>
                            <td align="left" valign="top"><p>/rpc</p></td>
                            <td align="left" valign="top"><p>string with commands</p></td>
                            <td rowspan="2" align="left" valign="middle">
                                <p>
                                    Send
                                    <a class="link" href="rpc.html" title="Chapter&nbsp;35.&nbsp;ChamSys Remote Protocol Commands">
                                        remote ethernet
                                    </a>
                                    command
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" valign="top"><p>/rpc/&lt;commands&gt;</p></td>
                            <td align="left" valign="top"><p>None</p></td>
                        </tr>
                        <tr>
                            <td align="left" valign="top"><p>/midi</p></td>
                            <td align="left" valign="top"><p>MIDI bytes</p></td>
                            <td align="left" valign="top">
                                <p>Send MIDI message - processed as if received from MagicQ or USB MIDI device</p>
                                <p>(timecode messages are ignored)</p>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" valign="top"><p>/feedback/off</p></td>
                            <td align="left" valign="top"><p>None</p></td>
                            <td align="left" valign="top"><p>Turns feedback off</p></td>
                        </tr>
                        <tr>
                            <td align="left" valign="top">
                                <p>/feedback/pb</p>
                                <p>/feedback/exec</p>
                                <p>/feedback/pb+exec</p>
                            </td>
                            <td align="left" valign="top"><p>None</p></td>
                            <td align="left" valign="top">
                                <p>
                                    Turns feedback on and transmits state of playbacks and executes (see
                                    <a class="link" href="osc.html#_touchosc" title="45.4.&nbsp;TouchOSC">TouchOSC</a>
                                    )
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <br class="table-break" />
        <p>If unspecified, as an argument either a float or an int is accepted.</p>
        <p>
            <span class="emphasis"><em>&lt;playback&gt;</em></span>
            := number between 1 and 10
        </p>
        <p>
            <span class="emphasis"><em>&lt;cue&gt;</em></span>
            := number with optional decimal, e.g. 2.5
        </p>
        <p>
            <span class="emphasis"><em>&lt;page&gt;</em></span>
            := number between 1 and 10 for execute grid, or name of execute grid
        </p>
        <p>
            <span class="emphasis"><em>&lt;item&gt;</em></span>
            := number of box in execute grid, or grid reference e.g. 4x3 for row 4 col 4, or name of execute item
        </p>
        <p>The receipt of OSC messages from the keyboard by typing testosc followed by the command - for example to GO on Playback 1:</p>
        <p>testosc /pb/1/go</p>
        <p>This is supported on MagicQ consoles and on MagicQ PC sytems unlocked with a MagicQ Wing or Interface.</p>
    </div>
    <div class="section">
        ### 45.2.2.&nbsp;Automation
        <p>
            MagicQ can respond to user-defined OSC messages by adding rows to the MACRO - VIEW AUTOM window. After seting the type to
            <span class="emphasis"><em>OSC Message</em></span>
            , set the OSC address in the
            <span class="emphasis"><em>P1</em></span>
            column.
        </p>
        <p>
            Depending on the trigger type, an argument may be expected, e.g to set a fader level. This can either be an integer between 0
            and 100 or float between 0.0 and 1.0.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/osc_autom.png" alt="image" />
            </span>
        </p>
    </div>
</div>
<div class="section">
    ## 45.3.&nbsp;Sending messages
    <div class="section">
        ### 45.3.1.&nbsp;Cue stack macros
        <p>OSC messages can be sent by using the macro field of a cues inside the Cue Stack window.</p>
        <p>
            OSC addresses should be entered into the macro field, preceeded by the letter K and must be the last macro command in a macro.
        </p>
        <p>The address can be followed by an optional comma separated list of arguments.</p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/osc_cues.png" alt="image" />
            </span>
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
                                Specifying commas and backslashes in string arguments should be escaped with a backslash, e.g.
                                <code class="literal">\,</code>
                                , and
                                <code class="literal">\\</code>
                                .
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="section">
        ### 45.3.2.&nbsp;Patching OSC heads
        <p>
            A generic 1-channel personality can be patched that will send OSC messages whenever the value of the channel changes. This
            personality can be found in the CHOOSE HEAD window under
            <span class="emphasis"><em>Generic</em></span>
            -
            <span class="emphasis"><em>mqosc</em></span>
            . You can choose between three modes depending on the type of argument you want sent in the OSC message.
        </p>
        <p>The channel value can be set using encoder Y in the INTENSITY window.</p>
        <p>
            You will need to change the name of the head to the address of the OSC message, followed by an optional comma separated list of
            arguments that will be added before the value being transmitted (see Cue stack macros above).
        </p>
    </div>
</div>
<div class="section">
    ## 45.4.&nbsp;TouchOSC
    <p>
        TouchOSC is a free iOS and Android application that can be used to create custom layouts of buttons, faders and encoders, and attach
        these controls to OSC messages.
    </p>
    <p>
        There is an example TouchOSC file and show file in the MagicQ show folder called
        <span class="emphasis"><em>magicqdemo.touchosc</em></span>
        and
        <span class="emphasis"><em>MQTouchOSCDemo.shw</em></span>
        . You can load the TouchOSC file onto the app and edit the layout with the editor tool provided at
        <a class="ulink" href="http://hexler.net/software/touchosc#downloads" target="_top">
            http://hexler.net/software/touchosc#downloads
        </a>
    </p>
    <p>
        In the demo, the
        <span class="emphasis"><em>Load vals</em></span>
        button sends a
        <span class="emphasis"><em>/feedback/pb+exec</em></span>
        message which transmits the current state of playbacks and execute controls to the TouchOSC app. This also enables automatic sending
        of any changes to playbacks and executes to keep the TouchOSC controls in sync with MagicQ.
    </p>
    <p>
        The
        <span class="emphasis"><em>Load vals</em></span>
        button can be used to reload the state of MagicQ if the app gets closed or after network loss.
    </p>
</div>
<div class="section">
    ## 45.5.&nbsp;Troubleshooting
    <div class="section">
        ### 45.5.1.&nbsp;Transmit or receive not working
        <p>Make sure transmit and receive ports are set opposite to the device you are communicating with.</p>
        <p>
            If there are multiple networks cards on the PC, make sure the IP address in MagicQ setup is set to the IP address of the
            interface you want OSC to transmit on.
        </p>
        <p>Make sure the OSC address starts with a forward slash.</p>
        <p>Make sure the address does not contain any characters that are disallowed in the OSC specification.</p>
        <p>
            If specifying arguments after the address in a cue stack macro or patched head, ensure the address is followed by a comma, and
            that there are no unusual characters. Backslashes in string arguments can also cause issues, only use a double backslash
            <code class="literal">\\</code>
            or to escape a comma
            <code class="literal">\,</code>
        </p>
        <p>Ensure MagicQ is out of demo mode.</p>
        <p>Check transmit and receive port numbers are set to values larger than 1024.</p>
        <p>Check for any firewalls (e.g. Windows firewall) that may stop messages from being received.</p>
    </div>
    <div class="section">
        ### 45.5.2.&nbsp;Messages getting lost
        <p>Be careful not to flood the network with large amounts of OSC traffic, particularly if using OSC heads.</p>
        <p>Large amount of broadcast Art-Net universes may case delayed or lost OSC messages.</p>
    </div>
</div>
<div class="section">
    ## 45.6.&nbsp;Notes
    <p>MagicQ only supports OSC over UDP. Receiving OSC bundles is supported, although MagicQ does not currently transmit bundles.</p>
    <p>OSC patched head names are restricted to 15 characters.</p>
    <p>
        In the Execute Window, select an item, type
        <code class="literal">//</code>
        and press ENTER to display the OSC address that is associated with the button. This is also the address that gets sent when feedback
        is enabled.
    </p>
</div>
