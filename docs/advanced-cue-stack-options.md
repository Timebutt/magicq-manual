---
id: advanced-cue-stack-options
title: Chapter 18. Advanced Playback / Cue Stack Options
sidebar_position: 18
---

# Chapter&nbsp;18.&nbsp;Advanced Playback / Cue Stack Options
<div class="section">
    ## 18.1.&nbsp;Interaction of HTP and LTP channels between Playbacks
    <p>
        Channels are set as either HTP (Highest Takes Priority) or LTP (Latest Takes Priority) in their personality file – the property can
        be edited in the Head Editor.
    </p>
    <p>
        By default, Playbacks use the HTP / LTP property to determine how channels are controlled from multiple playbacks simultaneously.
        For HTP channels the highest level will be output, for LTP channels the highest priority or latest touched playback will control the
        channel.
    </p>
    <p>This operation can be modified on a per Cue Stack basis.</p>
</div>
<div class="section">
    ## 18.2.&nbsp;HTP handling
    <p>
        MagicQ handles HTP (Highest Takes Precedence) channels in a very simple way - the highest value from all the playbacks, the
        programmer and the preset faders is the value that is output.
    </p>
    <p>
        If the "Programmer overrides HTP chans" option is enabled then any HTP channels in the programmer will override channels on the
        playbacks. Channels on preset faders still affect the output.
    </p>
    <p>
        MagicQ supports a powerful swap mode selected through the ADD/SWAP button. In SWAP mode when a FLASH button for a playback is
        pressed then the HTP channels from all other playbacks are disregarded. Only playbacks with a FLASH button pressed affect the HTP
        output. Similarly, the programmer and preset faders have no effect on HTP output.
    </p>
    <p>
        FX and channel values are handled independently enabling operators to program one playback with channel values and one with FX. For
        example one playback could have an ambient level whilst another has a dimmer chase. The FX is added to the highest channel value.
    </p>
</div>
<div class="section">
    ## 18.3.&nbsp;LTP handling
    <p>
        MagicQ provides powerful handling of LTP (Latest Takes Precedence) channels enabling new effects to be "bumped" onto intelligent
        heads for a period of time before reverting to the previous effect.
    </p>
    <p>
        Note that several other consoles handle LTP channels in a less intuitive way - when the last active playback is returned to zero
        then the values on that playback still control the channel rather than reverting to the previous raised playback that is still
        active.
    </p>
    <p>
        The programmer always over-rides playbacks. If a LTP channel is active in the programmer then playbacks will be disregarded for this
        channel.
    </p>
    <p>
        FX and channel values are handled independently enabling operators to program one playback with channel values and one with FX. For
        example one playback could have MAC500 positions (channels) whilst another has MAC500 movements (FX).
    </p>
</div>
<div class="section">
    ## 18.4.&nbsp;All chans controlled LTP
    <p>
        If a Cue Stack on a Playback is set to "All chans controlled LTP" then when that Playback is activated as the last touched playback
        then all channels controlled by that Playback are considered to be LTP.
    </p>
    <p>The Playback will exclusively control the levels of all channels used by the Cue Stack including Intensity.</p>
    <p>
        Where fade times are in use the HTP channels will fade between the values on the different playbacks. Where fade times are not set,
        then the HTP channels will snap between the values in the different playbacks.
    </p>
    <p>
        Soft LTP enables cross fading of HTP channels (including Intensities) between Cue Stacks set as All Chans Controlled LTP. On other
        Cue Stacks it is not needed - the Cue Stacks will mix HTP channels as HTP.
    </p>
    <p>To set Soft LTP set the following Cue Stack Settings:</p>
    <p>Advanced, All Chans Controlled LTP = Yes Faders, Fader Controls HTP = No Faders, Fader Controls LTP = Yes</p>
</div>
<div class="section">
    ## 18.5.&nbsp;HTP always active (Use HTP) option
    <p>
        By default HTP channels programmed in a Playback only affect output when the Playback is active. It is possible to make a Playback
        so that the activation of the Playback is separated from the operation of the HTP channels using the "HTP always active (Use HTP)"
        in Cue Stack options, Activate/Release.
    </p>
    <p>
        When this option is set, then HTP channels on the playback will be output whenever the fader is above the activation point (defaults
        0) regardless of the other activate options on the Cue Stack. They will only be released when the fader is taken back down to 0.
        They are not affected by pressing the RELEASE or the SHIFT RELEASE buttons.
    </p>
    <p>
        If a Playback is set to "HTP Always Active" then raising the fader or pressing the FLASH button will not use any specified Intensity
        delay or fade times. If the Cue Stack has multiple steps then delay and fade times will still be used when changing steps – i.e.
        pressing the GO or PAUSE buttons.
    </p>
    <p>
        The "HTP always active (Use HTP)" has priority over the "All chans controlled LTP" option – therefore HTP channels on playbacks will
        be output regardless of any other higher priority faders with "All chans controlled LTP".
    </p>
    <p>
        LTP channels will be activated in the normal way – i.e. by pressing GO, or if the "Fader activates" option is set by moving the
        fader upwards. If the "Flash activates" option is set then pressing the FLASH button will also activate the channels.
    </p>
    <p>
        When one of the main faders has HTP levels active then it is coloured orange. Only once the playback is activated fully will it be
        coloured red.
    </p>
    <p>
        Note that this option affects all channels that are patched as HTP channels (normally only Intensity – but potentially other
        attributes if desired).
    </p>
</div>
<div class="section">
    ## 18.6.&nbsp;Interaction of FX between Playbacks
    <p>
        By default, the FX and levels on MagicQ operate independently so it is possible to have a FX running on one Playback and the level
        (base values that the FX is applying to) coming from a separate Playback.
    </p>
    <p>
        Only one FX is ever active on a particular channel, so the FX from the last touched playback will over-ride any FX for that channel
        from other playbacks.
    </p>
    <p>
        If a Playback has a Cue with both a FX and a level for a channel then that Playback controls both the level plus the FX from that
        Playback.
    </p>
    <p>
        If a Playback has a Cue with only a level for a channel (i.e. no FX), then a FX may be added to that level from another active
        Playback.
    </p>
    <p>
        It is possible to set the Cue Stack option "Ignore FX from other Playbacks" so that when the Playback is the last touched Playback,
        any FX from other Playbacks are ignored, regardless of whether this Playback has FX for these channels.
    </p>
    <p>
        It is also possible to set the Cue Option "Block FX" to block other Playbacks with FX from affecting the levels in a particular Cue.
        Note that when the option "Programmer overrides FX" is active (e.g. in Hog II Warp mode) then Cues are automatically recorded with
        the "Block FX" option set. The Cue option "Block FX" can be viewed and changed in the Cue Stack Window (page right).
    </p>
    <p>An alternative way to block FX from other Playbacks is to use "Add FX Zero Size" in Cues where you wish to block other Playbacks.</p>
</div>
<div class="section">
    ## 18.7.&nbsp;Playback Priority
    <p>
        By default all playbacks have the same priority. It is possible to set a playback to maximum priority using the Cue Stack option
        "Highest Playback priority". The options are:
    </p>
    <div class="itemizedlist">
        <ul class="itemizedlist">
            <li class="listitem">Normal – same priority as other playbacks – last activated has control</li>
            <li class="listitem">Mid – above Normal but lower than programmer</li>
            <li class="listitem">High – highest priority of all playbacks but lower priority than the programmer</li>
            <li class="listitem">Above Programmer – higher than playbacks and the programmer</li>
        </ul>
    </div>
    <p>
        When the Cue Stack has highest priority, LTP channels under control of the playback are not affected by other playbacks. HTP
        channels continue to operate as normal.
    </p>
</div>
<div class="section">
    ## 18.8.&nbsp;Playbacks ignore masters levels
    <p>
        Sometimes it is necessary to program playbacks that are not affected by the Grand Master or Sub Master. Use the "Ignore Masters"
        option to prevent the Cue Stack being affected by the master faders – this is useful for controlling channels that must stay up –
        e.g. house lights, smoke machines etc… Cue Stacks set with this option are not affected by grand master, sub master, DBO button.
    </p>
    <p>Cue Stacks with this option set are not released by pressing SHIFT RELEASE to release all playbacks.</p>
    <p>From 1.9.4.1 this option also causes Playbacks to ignore FX Speed Masters and FX Size Masters.</p>
</div>
<div class="section">
    ## 18.9.&nbsp;Playback Stomping
    <p>
        There is a Playback Stomping option in the Setup Window, View Settings, Playback. With this option enabled playbacks that have been
        fully overridden by other playbacks will be automatically released (stomped).
    </p>
    <p>
        This is useful in some environments such as night-clubs where the operator wishes to continually play back new functions without
        having to turn off the older functions.
    </p>
    <p>There is a choice of Stomping - LTP or both LTP and HTP.</p>
    <p>
        When set to just LTP then playbacks that contain HTP channels are never released (stomped) as they may still be affecting the
        output. When set to LTP and HTP then playbacks are stomped if all of the LTP channels have been overridden by another playback and
        the HTP channels are at the same or higher level in another playback.
    </p>
    <p>
        When using the Playback Stomping option it is possible to allow some playbacks to be marked as "non stomping". This enables certain
        playbacks to be bumped in without stomping over the original playback.
    </p>
</div>
<div class="section">
    ## 18.10.&nbsp;Group Masters (Inhibit Masters)
    <p>
        Playbacks can be used to control groups of channels – you can assign a playback to be a master for Intensities, FX size or FX speed
        for a specified set of heads. Using Intensity Masters you can make an "Inhibit Master" to give overall control for the levels of a
        group of channels.
    </p>
    <p>
        Group masters can be based either on a particular group in the Group Window, or based on the channels recorded into a Cue. Masters
        based on groups are updated whenever a group is changed.
    </p>
    <p>
        Group Masters are activated and released in the same way as normal Cue Stacks. When you set Cue Stacks to be Intensity Masters, FX
        Speed or FX Size Masters it is not necessary to set Fader Activates Stack to No and Fader Releases Stack to No. MagicQ will ignore
        these settings and always activate only using the GO button and release using the RELEASE button.
    </p>
    <p>When editing the channels in a Group Master you should ensure that the fader is released before you make the edit.</p>
    <p>
        Note that the channel levels, times, and FX information in the Cue that is used as the Group Master are ignored and hence do not
        affect the output in any way.
    </p>
    <div class="section">
        ### 18.10.1.&nbsp;Intensity Masters
        <div class="section">
            #### Group based Intensity Masters
            <p>
                To make an Intensity Master based on a Group simply clear the programmer, then select the Group and record to a Playback.
                Make sure that there are no active channels in the programmer. MagicQ will automatically create a Group Master, setting the
                Cue Stack Options, Function, Intensity Master = Yes and setting the Cue Stack Options, Function, Group Id to the selected
                Group.
            </p>
            <p>
                The group associated with an Intensity Master can be changed in Cue Stack Options, Function. When a group number other than
                0 is set in the Cue Stack Options, Function menu then MagicQ automatically edits and generates the Cue assigned to the first
                step in that Cue Stack. Ensure you set the group id on the correct Cue Stack.
            </p>
            <p>You can have multiple Group Masters that control one channel – they will work together.</p>
        </div>
        <div class="section">
            #### Channel based Intensity Masters
            <p>It is possible ro record an Intensity Master without a link to a particular group.</p>
            <p>
                Record a cue with the channels that you wish to control - the level of the channels can be any level as long as the channel
                is in the programmer. Then set the Cue Stack option "Fader is an Intensity Master".
            </p>
            <p>
                Activate the playback (press GO or raise the fader) and now it acts as an Intensity Master. Press RELEASE to stop the master
                having any effect.
            </p>
        </div>
    </div>
    <div class="section">
        ### 18.10.2.&nbsp;FX Size and FX Speed Master
        <p>
            FX Size and FX Speed masters allow control of the FX size and speed on multiple heads, either based on a group or based on the
            channels recorded into a Cue.
        </p>
        <p>
            You can set-up multiple FX Size and FX Speed Masters – however you should only have one Master of each type to control each head
            – otherwise there is a conflict.
        </p>
        <p>
            To make a FX Size or FX Speed Master you record a single Cue onto a Playback. Then in Cue Stack Settings, Function set the FX
            Size Master or FX Speed Master to Yes.
        </p>
        <div class="section">
            #### Group based FX Size and FX Speed Masters
            <p>For group based FX Size and FX Speed masters simply set the Group ID in Cue Stack Settings, Function.</p>
            <p>To choose which attributes to control set the Group Attribs.</p>
        </div>
        <div class="section">
            #### Channel based FX Size and FX Speed Masters
            <p>For channel based FX Size and FX Speed masters, record a Cue that contains the attributes that you wish to control.</p>
            <p>
                To make a FX size master for pan movement, record a cue with only the pan attribute in the programmer for the heads you wish
                to control. Then set the Cue Stack option "Fader is a Size Master". Activate the playback and now it acts as a FX Size
                Master for pan movement.
            </p>
        </div>
    </div>
</div>
<div class="section">
    ## 18.11.&nbsp;Speed Masters
    <p>
        Playbacks can be set with Cue Stacks that have their function set as a Speed Master. These Cue Stacks do not execute normal Cues -
        instead the control they global Speed Masters using the Playback buttons and fader.
    </p>
    <p>
        For more details see the
        <a class="link" href="busking.html#busking-speed-masters" title="19.12.5.&nbsp;Speed Masters">Busking</a>
        ) section.
    </p>
</div>
<div class="section">
    ## 18.12.&nbsp;Advanced activate and release options
    <p>
        The FLASH button can be set to release the Cue Stack using the "Flash releases stack" option. This option works in a slightly
        different way depending on the "Fader releases stack".
    </p>
    <p>
        When "Fader releases stack" = "no" (Theatre, Hog II Warp modes), pressing and then releasing the FLASH button will always release
        the stack regardless of the fader level. When "Fader releases stack" = "yes" (Normal mode), pressing and releasing the FLASH button
        will only release the Cue Stack if the fader is at 0.
    </p>
    <p>
        The Cue Stack can be configured in different ways to affect whether the Cue Stack resets to the first step on release, whether it
        stays at the current step, or whether it moves on one step.
    </p>
</div>
