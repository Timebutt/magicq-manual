---
id: _dj
title: Chapter 39. DJ
sidebar_position: 39
---

# Chapter&nbsp;39.&nbsp;DJ
<p>
    From MagicQ version 1.9.2.2, we support the ability to connect to external DJ systems via a network connection. This allows MagicQ to
    both see what is currently playing on the connected DJ decks, as well as using the timecode information to be able to synchronise Cue
    Stacks to a given track.
</p>
<p>
    Further detail of the connection statuses can be found under "SETUP" → "VIEW SYSTEM" → "VIEW STATUS" "Timecode/DJ". Please send across a
    screenshot of this window along with your query; if you are facing any issues when using any of these protocols.
</p>
<div class="section">
    ## 39.1.&nbsp;Supported Systems
    <div class="section">
        ### 39.1.1.&nbsp;VirtualDJ / OS2L
        <p>
            MagicQ uses the Open Sound 2 Light protocol to communicate with VirtualDJ. To enable this, set the "VirtualDJ OS2L" protocol to
            "Yes" within the MIDI / Timecode tab of the Setup window. Within VirtualDJ, to enable the connection to MagicQ, go into the
            Settings window, select Options, and filter by "os2l". Set the "os2l" setting to "yes" or "auto", and set the "os2lDirectIp"
            setting to the IP address of the MagicQ system, with ":8060" appended on the end to specify the port number.
        </p>
        <p>
            Currently VirtualDJ will not send data to MagicQ until an initial OS2L command is sent from the software to MagicQ. To configure
            this, a macro will need to be configured to send "os2l_cmd 1 on". This can be configured in VirtualDJ to either be a key bind or
            button.
        </p>
        <p>
            VirtualDJ can run on the same computer as MagicQ, or can be connected remotely to a separate MagicQ system as long as they are
            connected to the same subnet.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/virtualdj_networksetup.png" alt="image" />
            </span>
        </p>
    </div>
    <div class="section">
        ### 39.1.2.&nbsp;StagelinQ / Engine Prime
        <p>
            MagicQ uses the Engine Prime network architecture to communicate to Denon DJ equipment. To enable this set the "StagelinQ"
            protocol to "Yes" within the MIDI / Timecode tab of the Setup window. Any connected devices that are within the subnet will
            appear in the popup when selecting a deck.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/denonnetworksetup.PNG" alt="image" />
            </span>
        </p>
    </div>
    <div class="section">
        ### 39.1.3.&nbsp;TCNet
        <p>
            To connect to a ProDJLink system, you will need to have either the ProDJLink Bridge application (Windows or macOS) application,
            or ShowKontrol application (macOS only) running on an external system. These applications form a bridge between the ProDJLink
            network which connects the mixers and decks together, and the TCNet network. To enable this connection, set the "TCNet" protocol
            to "Yes" within the MIDI / Timecode tab of the Setup window and make sure the ProDJLink bridge application is running on the
            same subnet as MagicQ. MagicQ should appear as a node within the TCNet tab of the bridge application.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/pioneer_networksetup.png" alt="image" />
            </span>
        </p>
    </div>
</div>
<div class="section">
    ## 39.2.&nbsp;Deck Configuration
    <p>
        MagicQ supports four DJ decks at once, but these can be mixed from different systems, rather than being limited to a single system.
        Once a protocol has been enabled, you should be able to select the decks from the "DJ Deck A-D" options within the MIDI / Timecode
        tab of the Setup window.
    </p>
</div>
<div class="section">
    ## 39.3.&nbsp;Audio Window
    <p>
        The Audio window has two main modes to show either the status of the connected DJ systems, or the status of the audio input beat
        tracking.
    </p>
    <p>
        The Audio Window can be loaded by selecting it from the "Window" menu on PC systems, or alternatively by pressing ALT+PAGE. The mode
        can be changed by using the two soft buttons "View DJ Deck" and "View Beat Track".
    </p>
    <p>
        When in DJ Deck mode, this window provides an overview of the connected and configured decks, showing the track info, position, BPM,
        volume, VU level and an overview of the waveform. Note some DJ systems do not provide all of this information, so MagicQ will only
        show information it has access to.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/audio_window_decks.png" alt="image" />
        </span>
    </p>
    <p>
        In Audio Beat Track mode, it will show a running waveform of the audio input, and the beats detected will be shown as red lines in
        the waveform. A histogram is also shown alongside to show the confidence the algorithm has in each BPM value. The peak will be used
        to set the BPM in MagicQ. The range of BPM values can be configured using the encoder in the Audio window. This will limit detection
        to the range of BPMs selected. This is useful in the case there are songs which the algorithm either ends up detecting a beat at
        either twice or half the actual BPM desired.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/audio_window_beats.png" alt="image" />
        </span>
    </p>
</div>
<div class="section">
    ## 39.4.&nbsp;Timecode and Level Synchronisation
    <p>
        To synchronise the playback of a track with a Cue Stack in MagicQ, you must associate the incoming track information together with
        the required Cue Stack. To do this, load the desired track so that it is showing in the Audio Window, then use the Copy function in
        MagicQ, select your Cue Stack as the source, then click on the header of the relevant deck in the Audio Window. This will set the
        "DJ Track" setting on the Cue Stack which corresponds to the track information we can determine from the deck.
    </p>
    <p>
        Some DJ Systems don’t provide unique track identifiers for tracks, so we have to generate a unique identifier based off the artist
        name and track title. Because of this, please ensure that any tracks you try to synchronise all have unique names within the
        relevant system.
    </p>
    <p>
        To disable the DJ Deck from synchronising with the timecode of the cue stack, then set the "Track DJ Deck timecode" setting within
        the "Advanced" tab to "No".
    </p>
    <p>
        To enable the Cue Stack to automatically activate and release when the track is loaded and unloaded from a deck, set the "Activate
        and Release on DJ System" setting to "Yes" under the "Activate Release" settings of the Cue Stack. When enabled, this will activate
        the Cue Stacks in the same way they are activated from an execute grid, or from the Stack Store window.
    </p>
    <p>
        Depending on the "Crossfader Mode" option within the MIDI / Timecode tab, the activated Cue Stack will either be activated at full
        when set to "Cue Stack 100% when active", or will follow the crossfader and upfader levels if set to "Cue Stack follows volume".
        Tracking the crossfader and upfader levels is only available on DJ systems which provide this information externally.
    </p>
</div>
<div class="section">
    ## 39.5.&nbsp;Beat tracking
    <p>
        If a DJ System is connected, then the active deck will be the source of the global beat number within MagicQ which can be used with
        the "Audio beat step" functionality. When an audio input is configured instead, then the beats will be used to drive a beat count
        internally to MagicQ.
    </p>
</div>
<div class="section">
    ## 39.6.&nbsp;Diagnostics
    <p>
        The status of the underlying connections to the different DJ systems can be viewed within the Setup, View System, View Status,
        DJ/Timecode tab. This will detail connection status and IPs of connected systems to aid in setting up a new system.
    </p>
</div>
