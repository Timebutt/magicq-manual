---
id: timecode
title: Chapter 41. Timecode Support
sidebar_position: 41
---

# Chapter 41. Timecode Support
<p>MagicQ supports both time code decode and time code generation.</p>
<p>
    MagicQ MQ70, MQ80, MQ250M and MQ500 consoles have inbuilt support for Timecode. MagicQ consoles do not support timecode via 3rd USB
    party MIDI interfaces or through the console phono (rca) interfaces. For MQ80 and MQ500 we recommend using a balanced input. For MQ70 it
    can be balanced or unbalanced.
</p>
<p>
    On MagicQ PC / Mac systems MIDI and timecode can be received using an external MagicQ MIDI/Timecode interface or a 3rd party USB/Virtual
    MIDI interface. Timecode and MIDI beat clock are only supported on 3rd party USB/Virtual MIDI when a MagicQ Wing or Interface is
    connected. MIDI notes is only supported on 3rd party USB interfaces when a ChamSys rack mount dongle is attached. For timecode we
    recommend the Adrem solutions TC1 time code reader (
    <a class="ulink" href="http://www.adrem-solutions.com" target="_top">http://www.adrem-solutions.com</a>
    ).
</p>
<p>MagicHD can also be used as a timecode input source for MagicQ systems supporting timecode.</p>
<p>
    Cue Stacks can be set up to run Cues according to timecode signals received from external sources via LTC or MIDI timecode. They can
    also be set up to use an Internal timecode source which is activated from 0:0:0 when the Cue Stack is activated and runs at 100 frames
    per second.
</p>
<p>
    If a Cue Stack is intended to be run from External Timecode then we recommend setting it to External Timecode when programming so that
    the timecode frames match the expected input times rather than the 100 frames per second of the internal timecode. If there is timecode
    input available then the Timecode Simulator can be used to simulate receiving external timecode.
</p>
<p>
    See
    <a class="link" href="cue-stacks.html#_timecode_cue_stacks" title="15.18. Timecode Cue Stacks">Timecode Cue Stacks</a>
    .
</p>
<p>
    <a class="link" href="automation.html#_magicq_automation_window" title="22.1. MagicQ Automation Window">Automation</a>
    events can be triggered by timecode.
</p>
<div class="section">
    ## 41.1. Timecode Decode
    <p>MagicQ supports decode of both linear time code (LTC) and MIDI time code.</p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/miditcdecode.png" alt="image" />
        </span>
    </p>
    <p>Set the Timecode Decode to LTC, MIDI, Art-Net or Internal MagicHD depending on the timecode source.</p>
    <p>
        The timecode type can be set to EBU-25, SMPTE30, NTSC30 and Film 24. The Status Display will show the current timecode being
        received.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/statustc.png" alt="image" />
        </span>
    </p>
    <p>
        The timecode continue frames is the number of frames to continue internal regeneration of the timecode signal when it is lost. After
        this time the timecode will be frozen until a signal is received again.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/cuestackoptiontc.png" alt="image" />
        </span>
    </p>
    <p>
        Time code can be triggered from an external timecode source using the MagicQ MIDI/Timecode module, or it can run from the internal
        time code source. To control a Cue Stack using external timecode set the "External timecode" option in the Cue Stack options.
    </p>
</div>
<div class="section">
    ## 41.2. Timecode from Winamp
    <p>On a PC, timecode can be received from Winamp instead of from a MagicQ MIDI/SMPTE interface.</p>
    <p>
        The PC must have a MagicQ Wing or MagicQ Interface connected, or be connected to a network with a MagicQ console. If connected via
        network then check in Setup, View System, View Status, Net Consoles that the MagicQ PC can see the MagicQ console in the network. It
        should report status 03c3. If it can not see the console check that MagicQ (mqqt.exe) is not being blocked by a firewall such as
        Windows Defender.
    </p>
    <p>
        Patch a Winamp personality in MagicQ (winamp_winamp.hed). If there is no Winamp personality in the show file then MagicQ will not
        connect to Winamp.
    </p>
    <p>
        When MagicQ has a Winamp personality patched, MagicQ detects the instance of Winamp running and connects to it automatically. There
        is no need to configure anything in Winamp.
    </p>
    <p>Set Timecode Decode to Winamp - the received timecode will be shown in the status display prefixed by "WTC".</p>
    <p>
        When a file is played in Winamp the timecode will start running. Winamp typically starts the first track at 1/0/0 instead of 0/0/0 -
        but this will depend on how you set up the tracks in Winamp.
    </p>
</div>
<div class="section">
    ## 41.3. Timecode from MagicHD
    <p>
        MagicHD can send timecode for the currently playing video, either over Art-Net or directly into MagicQ (if running as the internal
        player).
    </p>
    <p>
        Set the "Timecode Output" channel of MagicHD (#047) on the output layer to a value from 128 to 136, to select which video layer will
        be used for the timecode. On the MEDIA window, this can be found under Output &gt; Control &gt; Encoder D.
    </p>
    <p>
        If using MagicHD and MagicQ on the same PC, set "timecode decode" in the settings (under View Settings &gt; MIDI Timecode) to
        "Internal MagicHD"; MagicQ will now receive the timecode directly.
    </p>
    <p>If using MagicHD stand alone networked to a MagicQ system (either console or PC), set "timecode generation" to "Art-Net "</p>
    <p>
        On the standalone player, MagicHD will always output over Art-Net if "Timecode Output" is over 128 and MagicHD is out of demo mode
        (i.e. there is a ChamSys console or unlocked MagicQ instance on the local network).
    </p>
</div>
<div class="section">
    ## 41.4. Timecode Simulator
    <p>
        MagicQ includes a powerful timecode simulator for simulating external timecode when an external timecode source is not available. In
        the Setup Window, the simulator is turned on using soft button Y. When the simulator is on, then any received external timecode is
        ignored.
    </p>
    <p>
        The timecode start value can be set by entering a timecode value and pressing the X soft button. The X soft button is also used to
        start and stop the timecode running.
    </p>
    <p>Entering a new timecode value whilst the timecode simulator is running will jump directly to the new value and continue running.</p>
    <p>Typing * before pressing the X button will restart from the last entered timecode.</p>
</div>
<div class="section">
    ## 41.5. Timecode Generation
    <p>
        MagicQ can also master time code. Timecode Generation takes priority over Timecode Decode, so only enable Timecode Generation if it
        is required.
    </p>
    <p>Set Timecode Generation to LTC or MIDI. Timecode Decode should be set to None.</p>
    <p>There are special macro field commands to enable time code mastering and to set the time code value.</p>
    <p>W &lt;enable&gt; Enable / disable time code generation (1 for enable, 0 for disable)</p>
    <p>Q &lt;time code&gt; Set current time code (also enables time code generation)</p>
    <p>For example to set timecode to 0/01/00.00</p>
    <p>Enter Q100 at the cue stack macro.</p>
    <div class="important">
        <table border="0" summary="Important">
            <tbody>
                <tr>
                    <td rowspan="2" align="center" valign="top" width="25">
                        <img alt="[Important]" src="https://secure.chamsys.co.uk/help/documentation/magicq/images/icons/important.png" />
                    </td>
                    <th align="left"></th>
                </tr>
                <tr>
                    <td align="left" valign="top">
                        <p>
                            MagicQ consoles generate timecode in hardware, and you must use a Y-split cable (with LTC) or MIDI splitter if
                            you want MagicQ to see this timecode.
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<div class="section">
    ## 41.6. Timecode Re-transmit
    <p>
        The LTC or MIDI timecode decoded from a MagicQ MIDI/Timecode interface or from Winamp can be retransmitted over the network as
        Art-Net timecode.
    </p>
    <p>
        This can then be received by any MagicQ console on the network even if it does not have a MIDI/SMPTE interface - just set the
        timecode input type to Art-Net.
    </p>
    <p>
        For MagicQ PC/Mac systems the receiving system must have a MagicQ Wing or MagicQ Interface connected to enable the decoding of the
        Art-Net timecode - but this does not have to be a MagicQ MIDI/SMPTE interface.
    </p>
    <p>
        PC/Mac systems with Winamp must have a MagicQ Wing or MagicQ Interface connected to enable the timecode to be received from Winamp.
    </p>
</div>
