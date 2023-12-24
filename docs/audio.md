---
id: audio
title: Chapter 38. Audio
sidebar_position: 38
---

# Chapter&nbsp;38.&nbsp;Audio
<div class="section">
    ## 38.1.&nbsp;Audio Input
    <p>
        Audio input can be used in many ways on MagicQ - to bump a Cue Stack from step to step, to set a Cue Stack tempo, to set the virtual
        level of the playback fader and as part of the MagicQ Pixelmapper.
    </p>
    <p>
        Audio bump functions can also triggered from the
        <a class="link" href="remote-input.html" title="Chapter&nbsp;42.&nbsp;Remote Input port">remote input port</a>
        .
    </p>
    <div class="section">
        ### 38.1.1.&nbsp;Audio input ports
        <p>
            Audio input can be achieved on both MagicQ consoles and MagicQ PC via a sound card. On PC systems, a ChamSys Wing, Connect or
            Interface (not MagicDMX) is required to enable Audio input functionality.
        </p>
        <p>
            Audio input is supported directly on MagicQ consoles and Mini and Compact Connects via dedicated audio ports. In Setup, View
            Settings, Ports set Audio Input to "Internal sound card".
        </p>
        <p>
            On the MQ250M there are two possible audio inputs. The S2L input uses hardware to analyse the incoming audio system - to use
            this select "ChamSys Audio Interface". The audio input uses software to analyse the incoming audio - to use this select
            "Internal sound card".
        </p>
        <p>
            MagicQ Pro 2014 consoles require the latest Pro 2014 kernel (dated 4th June 2014) downloadable from the ChamSys download site,
            Docs page:
            <a class="ulink" href="https://secure.chamsys.co.uk/bugtracker/proj_doc_page.php" target="_top">
                https://secure.chamsys.co.uk/bugtracker/proj_doc_page.php
            </a>
        </p>
        <p>
            MagicQ PC / Mac supports audio input through the PC / Mac sound card when the PC / Mac is connected to a MagicQ Wing, Connect or
            Interface (not MagicDMX). In Setup, View Settings, Ports set Audio Input to "Internal sound card". The required device can be
            selected in the "Audio input device" setting. MagicQ currently supports stereo devices at 44100Hz.
        </p>
    </div>
    <div class="section">
        ### 38.1.2.&nbsp;Audio input options
        <p>
            The audio input signal is analysed in 7 different frequency bands: 63Hz, 160Hz, 400Hz, 1KHz, 2.5KHz, 6.2KHz, 16KHz. The levels
            for each channel can be used on MagicQ to set the level of Playbacks, to step through cue stacks and to set the speed of chases.
        </p>
        <p>
            When connected, a graphic equaliser display is shown in the Status Display showing the current levels of the inputs. Audio
            trigger level should be set to 0.
        </p>
        <p>
            Starting from version 1.9.2.0, when a full audio stream is provided, MagicQ now supports advanced beat tracking for an incoming
            audio signal which can then be used as part of any trigger based audio functions (e.g. Audio bumps GO/FX). This will work with
            the audio input on the MQ50/MQ70/MQ250M or MQ80/MQ500/MQ500M via a USB audio interface, or on MagicQ PC systems. The beat
            tracker is enabled when a playback is configured with an Audio channel of "Audio Input BPM". When the beat tracker is enabled, a
            beat indicator will be shown in the status bar adjacent to the audio input levels display.
        </p>
    </div>
    <div class="section">
        ### 38.1.3.&nbsp;Global audio settings
        <p>In order to use audio input on MagicQ set the setting Setup, View Settings, Ports, Audio, Audio Input. The options are</p>
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">None</li>
                <li class="listitem">ChamSys Audio Interface</li>
                <li class="listitem">ChamSys Audio Interface - Energy Only</li>
                <li class="listitem">ChamSys Audio Interface - Left Only</li>
                <li class="listitem">Internal sound card</li>
                <li class="listitem">External USB sound card</li>
                <li class="listitem">Audio output loopback</li>
            </ul>
        </div>
        <p>
            On MagicQ PC / Mac systems select "Internal sound card". Audio input is only supported when the PC/Mac is connected to a MagicQ
            Wing, Connect or Interface (not MagicDMX).
        </p>
        <p>
            On MagicQ Consoles the audio is received via dedicated audio ports on the console. To use these, choose the "Internal sound
            card" option. MagicQ Pro 2014 consoles require the latest Pro 2014 kernel and the MQ40, MQ60 and original MQ70 require the
            latest firmware.
        </p>
        <p>
            When using an external ChamSys USB Audio Interface then choose "ChamSys Audio Interface". When set to "ChamSys Audio Interface -
            Left Only", any signals received on the left channel are automatically duplicated onto the right channel. This is useful in
            situations where only a mono audio feed is available. When set to "ChamSys Audio Interface - Energy Only" all 14 received audio
            bands are combined into one level and all MagicQ audio options will use this one level.
        </p>
        <p>
            MagicQ supports global minimum and maximum audio levels to enable the levels to be matched to the received audio. Both the
            Minimum Audio Level and the Maximum Audio Level default to 0 indicating they have no effect.
        </p>
        <p>
            The minimum is used to adjust for noise whilst the maximum can be set if the audio signal is particularly weak. When set to non
            zero values any levels below the minimum or above the maximum are ignored and the levels are scaled appropriately.
        </p>
    </div>
    <div class="section">
        ### 38.1.4.&nbsp;Cue Stack audio options
        <p>
            In the Cue Stack options there are five possible audio modes – Audio Controls fader level, Audio bumps GO/FX, Audio sets BPM,
            Audio level jumps to Cue Step, and Audio beat step.
        </p>
        <p>Audio modes are not active until the Cue Stack is activated by raising the fader or pressing the GO button.</p>
        <p>
            Double click on the Audio channel to select the channel to respond to. Audio level, audio parameter 1, and audio parameter 2
            should be set to 0.
        </p>
        <p>
            "Audio Controls fader level" enables the level of the fader to be controlled by the received audio level on the chosen channel.
            In this way you can control all sorts of different functions depending on how you set the Fader options - HTP, LTP, FX Size, FX
            Speed etc… For example, you could control the iris opening of a moving light by also setting the Fader controls LTP (IPCB) chans
            option, or you could control a Master Intensity fader. When using this mode, then Audio P1 and Audio P2 can be set to control
            the response:
        </p>
        <p>Audio P1 = 0 Normal (direct trigger from level)</p>
        <p>Audio P1 = 1 Decayed (decays by Audio P2 each sample)</p>
        <p>Audio P1 = 2 Pulse (triggers at Audio Level, Audio P2 is duration of pulse)</p>
        <p>Audio P1 = 3 Pulse decay (triggers at Audio Level, decays by Audio P2 each sample)</p>
        <p>Audio P1 = 4 Switch (triggers to on/off at Audio Level)</p>
        <p>Audio P1 = 5 Slow (increases/decreases by Audio P2 each sample)</p>
        <p>
            "Audio level jumps to Cue Step" enables the level of the specified channel to determine which step in the Cue Stack is executed
            – for example if you have a Cue Stack with 10 steps, then a level of 0% will execute step 1, 10% will execute step 2 whilst a
            level of 100% will execute step 10. This is very useful if you wish to program different Cues onto LED or media servers.
        </p>
        <p>
            "Audio bumps GO/FX" causes the Cue Stack to bump to the next step every time a peak in the audio is detected on the specified
            channel. This enables a Cue Stack to follow the beat of the music. This is best used with the Cue Stack set to Cue Timing
            instead of Chase Timing. A divider can be configured using the "Rate divisor" option. This will skip the selected number of
            beats between triggering Go. For example, when set to 2, every other input beat will trigger a Go.
        </p>
        <p>
            "Audio beat step" will work with the detected beat number mentioned in the Audio Input Options section above, when the "Audio
            channel" is set to "Audio Input BPM". It will match the beat number currently being received, and will match the Cue with the
            corresponding Cue ID to jump to. To use this, generate a new Cue Stack with your required cues, set it to Cue Timing, and enable
            the "Audio beat step" option to "Yes". The beat number on which to trigger each Cue needs to be set in the Cue ID column. For
            the basic case, the default Cue IDs will provide steps on incremental beats. To have a Cue Stack where one Cue runs for beats 1
            through 3, and then a second Cue runs for beat 4, set the first Cue ID to 1.0 and the second Cue ID to 4.0 and so forth. By
            default the loop length will loop on every 4 beats, however this can be changed in the "Audio beat step length" setting. Setting
            this to 8 or 16 will cause the loop to repeat every 8 or 16 beats respectively. If a rate divisor is configured, then this will
            divide the incoming beat by the divisor. For example with a divisor set to 2, then Beats 1 through 8 would trigger steps 1
            through 4.
        </p>
        <p>
            "Audio sets BPM" causes a Cue Stack set as a chase to automatically set the chase speed to the timing of the peaks on the
            specified channel. The Cue Stack should be set to Chase Timing.
        </p>
    </div>
    <div class="section">
        ### 38.1.5.&nbsp;Pixel Mapper and Audio
        <p>
            The
            <a class="link" href="pixel-mapping.html#_pixel_map_audio_fx" title="24.3.14.&nbsp;Pixel Map Audio FX">Pixel Mapper Audio FX</a>
            support comprehensive Pixel Mapping using audio triggering.
        </p>
    </div>
</div>
<div class="section">
    ## 38.2.&nbsp;Audio playback
    <p>
        MagicQ supports playback of audio files directly from Cue Stacks. Documentation for this can be found in the
        <a class="link" href="cue-stacks.html#audio-in-cue-stacks" title="15.16.&nbsp;Audio in Cue Stacks">Audio in Cue Stacks</a>
        section.
    </p>
    <div class="section">
        ### 38.2.1.&nbsp;Audio output ports
        <p>
            Audio output is supported from MagicQ consoles with a dedicated audio output port, and MagicQ PC systems using the internal
            sound card.
        </p>
        <p>
            Audio output is also supported via an
            <a class="link" href="audio.html#_usb_sound_cards" title="38.3.&nbsp;USB sound cards">external USB sound card</a>
            on supported consoles.
        </p>
        <p>
            In Setup, View Settings, Ports, the Audio Output option allows you to select between the internal sound card output on a
            console, or the external USB sound card if connected. On PC systems, the required device can be selected in the "Audio output
            device" setting. MagicQ currently supports stereo devices at 44100Hz.
        </p>
    </div>
    <div class="section">
        ### 38.2.2.&nbsp;MagicQ PC
        <p>
            On Windows, macOS and Linux, you can select the device for both audio input and audio output by using the "Audio input device"
            and "Audio output device" settings.
        </p>
        <p>
            Different Audio APIs are supported on each platform. Windows supports MME, DirectSound, WASAPI and KS. Linux supports Alsa,
            JACK, and OSS. macOS supports Core Audio.
        </p>
    </div>
</div>
<div class="section">
    ## 38.3.&nbsp;USB sound cards
    <p>Instead of the built-in audio connections on consoles, a USB sound card can be used with the following consoles:</p>
    <p>MQ50, MQ70, MQ80*, MQ250M, MQ500, MQ500M.</p>
    <p>This can be useful if you need low noise and/or balanced outputs.</p>
    <p>
        If the USB sound card has been plugged in after starting the console, you must do a soft restart of MagicQ for these to be detected
        (
        <span class="emphasis"><em>SETUP</em></span>
        →
        <span class="emphasis"><em>[SHIFT] + RESET</em></span>
        ).
    </p>
    <p>
        To see which interface is currently being used for output and input, go to
        <span class="emphasis"><em>SETUP</em></span>
        →
        <span class="emphasis"><em>VIEW SYSTEM</em></span>
        →
        <span class="emphasis"><em>VIEW STATUS</em></span>
        →
        <span class="emphasis"><em>Interfaces</em></span>
        . The USB sound card should appear in
        <span class="strong"><strong>Audio output device</strong></span>
        and
        <span class="strong"><strong>Audio input device</strong></span>
        options.
    </p>
    <p>The following devices are known to work, however this is not exhaustive:</p>
    <div class="itemizedlist">
        <ul class="itemizedlist">
            <li class="listitem">Audient: Evo4 / iD14</li>
            <li class="listitem">Behringer: UCA202 / UMC202 / UMC22 / UMC404</li>
            <li class="listitem">Creative Labs: Sound Blaster Play! 3 / X-Fi Surround 5.1 / K3+</li>
            <li class="listitem">Focusrite: Scarlett 2i4 / Scarlett Solo</li>
            <li class="listitem">M-Audio: Fast track Pro / M-Track Solo</li>
            <li class="listitem">Mackie: Onyx Artist 1*2</li>
            <li class="listitem">Presonus: AudioBox 22VSL / iTwo</li>
            <li class="listitem">Swissonic UA-2X2</li>
            <li class="listitem">Tapco Link USB</li>
            <li class="listitem">Dante AVIO USB IO Adapter 2x2 (Audio over Ethernet)</li>
        </ul>
    </div>
    <p>
        When the USB sound card is selected, the respective internal audio port will be disabled. You can use the external USB sound card
        for audio output whilst using the internal audio port for audio input, and vice versa.
    </p>
    <p>
        *The MQ80 will also need a Linux Kernel upgrade - follow
        <a class="link" href="upgrading.html#mq80-kernel-v2" title="52.3.&nbsp;MQ80 Kernel v2 upgrade">these steps</a>
        .
    </p>
</div>
<div class="section">
    ## 38.4.&nbsp;Control of Winamp
    <p>
        MagicQ supports control of a Winamp instance on the same PC by patching a Winamp personality. The Winamp personality can control
        track number, play mode, track position, volume, and audio pan.
    </p>
    <p>The PC must have a MagicQ Wing, Connect or MagicQ Interface connected to enable Winamp control.</p>
    <p>Simply patch one Winamp head anywhere in the patch - MagicQ treats the heads as a special head and ignores the DMX address.</p>
    <p>Winamp does not need to be configured - MagicQ automatically connects to it.</p>
</div>
