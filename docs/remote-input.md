---
id: remote-input
title: Chapter 42. Remote Input port
sidebar_position: 42
---

# Chapter 42. Remote Input port
<p>
    The MagicQ PC Wing, MagicQ MaxiWing and MagicQ consoles support a remote input port on the rear panel, which can be used to trigger
    functions in MagicQ from an external control device or switch. MagicQ MQ250M, Compact Connect and Stadium Connect feature 10Scene Ports
    which include a contact trigger input working in the same way.
</p>
<p>The remote trigger can be used to trigger Cues in Cues Stacks, to flash playbacks, as a master GO button, or as a ADD/SWAP selector.</p>
<div class="section">
    ## 42.1. Connection (MagicQ Consoles, MagicQ PC Wing Compact and MagicQ MaxiWing)
    <p>The remote input is provided on a standard 4 pin mini DIN connector.</p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/remoteinput4pin.png" alt="image" />
        </span>
    </p>
    <p>The connections are (in the sequence they appear physically on the connector)</p>
    <div class="informaltable">
        <table class="informaltable" cellpadding="4px">
            <colgroup>
                <col class="col_1" />
                <col class="col_2" />
            </colgroup>
            <tbody>
                <tr>
                    <td align="left" valign="top"><p>2</p></td>
                    <td align="left" valign="top"><p>0V and equipment ground</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>4</p></td>
                    <td align="left" valign="top"><p>Opto isolated input negative</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>3</p></td>
                    <td align="left" valign="top"><p>Power supply positive (Current limited)</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>1</p></td>
                    <td align="left" valign="top"><p>Opto isolated input positive</p></td>
                </tr>
            </tbody>
        </table>
    </div>
    <p>
        The remote input can be used to receive an external signal on the opto isolated inputs, or it can be wired to an external switch. To
        receive an external signal wire the signal + to pin 1 and the signal – to pin 4. When used as external optically isolated input the
        maximum continuous voltage rating is 24V DC.
    </p>
    <p>When wiring to an external switch links pins 2 and 4. Then connect the external switch between pins 3 and 1.</p>
    <p>
        The Pin 3 Power Supply voltage is 5v on MQ50, MQ70, MQ80, MQ500 and PC Wing Compact. On MQ60’s, MQ100 series consoles and Maxi Wings
        its 12-13v.
    </p>
</div>
<div class="section">
    ## 42.2. Connection (Original PC Wing)
    <p>On the original PC Wing the remote input is provided on a standard 5 pin 180 degree DIN connector.</p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/remoteinput5pin.png" alt="image" />
        </span>
    </p>
    <p>The connections are (in the sequence they appear physically on the connector)</p>
    <div class="informaltable">
        <table class="informaltable" cellpadding="4px">
            <colgroup>
                <col class="col_1" />
                <col class="col_2" />
            </colgroup>
            <tbody>
                <tr>
                    <td align="left" valign="top"><p>3</p></td>
                    <td align="left" valign="top"><p>0V and equipment ground</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>5</p></td>
                    <td align="left" valign="top"><p>Opto isolated input positive</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>2</p></td>
                    <td align="left" valign="top"><p>Power supply positive (5 Volt, current limited)</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>4</p></td>
                    <td align="left" valign="top"><p>Opto isolated input negative</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>1</p></td>
                    <td align="left" valign="top"><p>0V and equipment ground (same as pin 3)</p></td>
                </tr>
            </tbody>
        </table>
    </div>
    <p>
        The remote input can be used to receive an external signal on the opto isolated inputs, or it can be wired to an external switch. To
        receive an external signal wire the signal + to pin 5 and the signal – to pin 4. When used as external optically isolated input the
        maximum continuous voltage rating is 24V DC.
    </p>
    <p>When wiring to an external switch links pins 4 and 1. Then connect the external switch between pins 2 and 5.</p>
</div>
<div class="section">
    ## 42.3. Enabling the remote input in MagicQ
    <p>
        In the View Settings view in the Setup Window page down to the Port Settings. Set up the remote trigger type and remote trigger
        action.
    </p>
    <p>
        The remote trigger type can be set to NONE, MAKE, or BREAK, depending on whether your external switch is a push to make or a push to
        break switch. When using an external signal, setting the type to make will cause a trigger when the voltage differential is
        positive.
    </p>
    <p>The remote trigger action, determines what action is taken by MagicQ when the remote input signal is detected. The options are:</p>
    <div class="itemizedlist">
        <ul class="itemizedlist">
            <li class="listitem">NONE</li>
            <li class="listitem">CURRENT PLAYBACK GO</li>
            <li class="listitem">CURRENT PLAYBACK FLASH</li>
            <li class="listitem">ADD/SWAP</li>
            <li class="listitem">SWAP</li>
            <li class="listitem">DBO</li>
            <li class="listitem">WING1 PB1 GO</li>
            <li class="listitem">WING1 PB1 FLASH</li>
            <li class="listitem">WING1 PB12 GO</li>
            <li class="listitem">WING1 PB12 FLASH</li>
            <li class="listitem">PB10 GO</li>
            <li class="listitem">PB10 FLASH</li>
            <li class="listitem">AUDIO BUMP</li>
            <li class="listitem">TAP TO TIME</li>
        </ul>
    </div>
    <p>
        When set to NONE there is no special action associated with pressing the remote input. However, the remote input can still be used
        in Cue Stacks to trigger specific cues by setting the Halt Field in the Cue Stack to REMOTE. The Cue will then wait till the remote
        trigger is detected before starting to execute the Cue.
    </p>
    <p>
        When set to SWAP, playbacks are set to SWAP mode whenever the remote signal is detected – this can therefore be used with a
        foot-switch to temporarily engage SWAP mode.
    </p>
    <p>
        WING1 PB1 GO and WING1 PB1 FLASH are provided as an alternative to the current playback GO and FLASH. This allows, for example, a
        smoke machine to be set up on WING1 PB1 trigger by the remote input.
    </p>
    <p>
        AUDIO BUMP allows the remote trigger to be used in the same way as when triggering from receiving audio. Any Cue Stack set with
        "Audio Bumps Go" set will bump one step every time the remote input is triggered.
    </p>
    <p>TAP TO TIME changes the speed of the currently selected playback.</p>
    <p>
        In Setup, View System, View Status there is a counter of the number of times the remote input has been switched since the system was
        started. This enables MagicQ to be used to count the number of times an event has occurred – e.g. customers pressing a button or
        starting a presentation sequence.
    </p>
</div>
