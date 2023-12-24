---
id: cue-stack-options
title: Chapter 17. Cue Stack Options
sidebar_position: 17
---

# Chapter 17. Cue Stack Options
<p>The Cue Stack Window has three Views – View Cue Stack, View Options and View Defaults.</p>
<p>
    The View Options view shows the settings for the Cue Stack on the current Playback. Changing these settings immediately affects the
    currently selected Cue Stack.
</p>
<p>
    The View Defaults view shows the settings that will be used when new Cues and Cue Stacks are recorded. Changing the settings in View
    Defaults does not affect Cues and Cues Stacks that have already been recorded.
</p>
<p>
    The View Defaults view contains two columns – one for single step Cue Stacks and one for multiple step Cue Stacks. When the first Cue is
    first recorded on a Cue Stack the single step defaults are used. When a second Cue is recorded on the Cue Stack the Cue Stack settings
    are modified to use the multiple step defaults.
</p>
<div class="section">
    ## 17.1. Faders
    <div class="section">
        ### 17.1.1. Fader activates stack
        <p>
            When set to Yes raising the fader from 0 to above the activation threshold activates the Cue Stack. When set to No the fader
            does not activate the Cue Stack.
        </p>
        <p>The activation threshold defaults to 0. It is a global setting which is set in Setup, View Settings, Hardware.</p>
    </div>
    <div class="section">
        ### 17.1.2. Fader releases stack
        <p>
            When set to Yes lowering the fader to the activation threshold releases the Cue Stack. When set to No the fader does Not release
            the Cue Stack.
        </p>
        <p>The activation threshold defaults to 0. It is a global setting which is set in Setup, View Settings, Hardware.</p>
    </div>
    <div class="section">
        ### 17.1.3. Fader controls HTP chans
        <p>When set to Yes the fader will control the level of all channels from the Playback that are patched as HTP channels.</p>
        <p>
            When set to No then all HTP channels will be activated at 100% of the their level within the Playback, ignoring the level of the
            fader.
        </p>
        <p>
            MagicQ personalities normally only have Intensity set as HTP channel - but it is sometimes useful to patch heads without
            Intensity as HTP – e.g. the Red, Green, Blue channels of LED heads.
        </p>
        <p>The fader controls the levels proportionately from 0% to 100% through the length of the fader.</p>
        <p>If the Cue includes FX on HTP channels then the size of the FX is also reduced proportionately according to the fader level.</p>
        <p>When this setting is set to Yes then the other "Fader controls" settings should generally be set to No.</p>
        <p>
            The overall intensity level of HTP channels is also affected by the Grand Master and the Sub Master and any active Group
            Masters.
        </p>
    </div>
    <div class="section">
        ### 17.1.4. Fader controls LTP (IPCB) chans
        <p>
            When set to Yes the fader will crossfade all channels that are operating as LTP channels (generally this is everything apart
            from Intensity).
        </p>
        <p>
            When the fader is at 0% the LTP channels are not controlled by this Cue Stack. When the fader is raised above 0% then MagicQ
            crossfades the LTP channels to the values stored in the Cue under control of the fader.
        </p>
        <p>When the fader is at 100% then the LTP channels are exactly as stored in the Cue.</p>
        <p>
            MagicQ crossfades the LTP channels from the values that they were at before the fader was raised above 0 – i.e. the current
            value of these channels. This will either be the values from other Cue Stacks, or if no other Cue Stacks are controlling these
            channels the LTP or default values.
        </p>
        <p>When set to Yes then the other "Fader controls" settings should generally be set to No.</p>
        <p>
            If the setting Advanced, All Channels Controlled LTP is set to Yes, and the setting Fader controls HTP is set to No, then MagicQ
            will perfrom Soft LTOP - crossfadin HTP channels (such as Intensity).
        </p>
    </div>
    <div class="section">
        ### 17.1.5. Fader blocks FX on LTP chans
        <p>
            When set to Yes any LTP channels that are under control of the fader also block FX from other playbacks according to the level
            of the fader - at 100% they completely block FX
        </p>
        <p>When set to No any FX on the channels from other playbacks keep running without change.</p>
    </div>
    <div class="section">
        ### 17.1.6. Fader controls Absolute chans
        <p>
            When set to Yes the fader will control the value of all LTP chans in an absolute way - when the fader is at 0% then the channels
            are at 0% - when at 100% the channels are at the programmed value. This allows direct control of the attributes from the fader.
        </p>
        <p>
            This is similar to Fader Controls LTP (IPCB) chans except that the crossfade always starts from 0% rather than the value from
            other Playbacks.
        </p>
    </div>
    <div class="section">
        ### 17.1.7. Fader controls FX size
        <p>
            When this setting is set to Yes the fader controls the size of any FX that are running in the Cue Stack – this includes FX from
            the current Cue and also any FX that are tracking from previous Cues in the Cue Stack.
        </p>
        <p>
            When the fader is at 100% then the FX is the size that was recorded in the Cue - lowering the fader reduces the size until there
            is No size (No FX) at 0%.
        </p>
        <p>Fader controls FX size affects FX on any attribute.</p>
        <p>
            When set to Yes then the other "Fader controls" settings other than "Fader controls speed" settings should generally be set to
            No.
        </p>
    </div>
    <div class="section">
        ### 17.1.8. Fader controls FX speed
        <p>
            When this setting is set to Yes the fader controls the speed of any FX that are running in the Cue Stack – this includes FX from
            the current Cue and also any FX that are tracking from previous Cues in the Cue Stack.
        </p>
        <p>
            When the fader is at 100% then the FX runs at the speed that was recorded in the Cue - lowering the fader reduces the speed
            until it stops at 0%.
        </p>
        <p>Fader controls FX speed affects FX on any attribute.</p>
        <p>
            When set to Yes then the other "Fader controls" settings other than "Fader controls size" settings should generally be set to
            No.
        </p>
    </div>
    <div class="section">
        ### 17.1.9. Fader controls manual crossfades
        <p>
            When set to Yes then the fader performs a manual crossfade on the Cue Stack in a similar way to the dedicated manual crossfader.
            This enables multiple Cue Stacks to be manually crossfaded.
        </p>
        <p>
            All other "Fader controls" settings, especially "Fader controls HTP" should be set to No, otherwise there will be unpredictable
            results.
        </p>
    </div>
    <div class="section">
        ### 17.1.10. Fader controls timing
        <p>This setting controls timing of Cue Stack steps.</p>
        <p>When the fader is at 0 the Cue Stack snaps with 0 time, when at full it fades with 10 seconds.</p>
        <p>If the Cue has split timing then the split timing is respected within the overall fade time set by the fader.</p>
    </div>
    <div class="section">
        ### 17.1.11. Fader controls audio volume
        <p>
            When set to Yes, the level of the fader will affect the volume of any audio played from both the "Audio File" Cue Stack option
            and "Audio" fields on the Cues within the given Cue Stack.
        </p>
    </div>
    <div class="section">
        ### 17.1.12. Fader jumps to Cue Step
        <p>
            When set to Yes and the Cue Stack has multiple steps then raising the fader will step through the Cue Stack - at 0% it will be
            on step 1 and at 100% it will be on the last step.
        </p>
    </div>
    <div class="section">
        ### 17.1.13. Encoder mode
        <p>On Stadium consoles the playback encoders can be used for many different functions including:</p>
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">Intensity (HTP channel control)</li>
                <li class="listitem">LTP channel control</li>
                <li class="listitem">FX Size</li>
                <li class="listitem">FX Speed</li>
                <li class="listitem">FX Speed and FX Size</li>
                <li class="listitem">Rate (not implemented yet)</li>
                <li class="listitem">Time (not implemented yet)</li>
            </ul>
        </div>
        <p>
            When Cues are recorded to an Execute Playbacks (e.g. PB16 to PB30) by default the encoders will control the function of the Cue
            Stack on that Playback. The user can choose the Encoder mode to determine which function the encoder has. The current state of
            the encoder is shown in the playback legend.
        </p>
        <p>
            When Cues are recorded to a Fader Playback, if there is no Cue Stack assigned to the Execute Playback above then the encoder
            from the Execute Playback will automatically take any encoder function that is set on the Fader Playback. This means that it is
            easy, for example, to record a FX Cue onto a fader playback and use the encoder above it to control the speed.
        </p>
    </div>
    <div class="section">
        ### 17.1.14. Control type
        <p>
            On Stadium consoles it is possible to chose to control one or more different Playbacks or even a separate Cue Stack to control
            in which case the encoder is not related to the specific Playback. The following options are available from Cue Stack options,
            Fader tab, Encoder Mode:
        </p>
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">This Playback</li>
                <li class="listitem">Other Playback</li>
                <li class="listitem">All Playback on this Bank</li>
                <li class="listitem">All Playback on this Page</li>
                <li class="listitem">Other Cue Stack</li>
            </ul>
        </div>
        <p>When set to Other Payback the Playback ID is specified in the Control Item option.</p>
        <p>
            When set to Other Cue Stack then the Cue Stack ID is specified in the Control Item option. If the Encoder Mode is LTP or HTP and
            the Cue Stack is assigned to a Playback on the current Playback Page then it will activate from the Playback, otherwise it will
            activate from the Stack Store. As per the usual Cue Stack options in will only activate if Fader Activates is set to yes. For FX
            Size and FX Speed this will only take effect if the Cue Stack is already active on a Playback or within an Execute Grid or the
            Stack Store.
        </p>
    </div>
    <div class="section">
        ### 17.1.15. Control item
        <p>On Stadium consoles specifies the Playback ID or Cue Stack ID when Control type is et to Other Playback or Other Cue Stack.</p>
    </div>
</div>
<div class="section">
    ## 17.2. Buttons
    <div class="section">
        ### 17.2.1. Flash activates stack
        <p>When set to Yes pressing the Flash button activates the Cue Stack and sets the level of the Playback to 100%.</p>
        <p>When set to No pressing the Flash button sets the level of the Playback to 100% but does not activate the Cue Stack.</p>
        <p>
            The overall level of HTP channels is also affected by the Grand Master and Sub Master and any active Group Masters. The Sub
            Master can be configured in Setup to be an Add Swap Master.
        </p>
    </div>
    <div class="section">
        ### 17.2.2. Flash releases stack
        <p>When set to Yes releasing the Flash button releases the Cue Stack and sets the level of the Playback to 0%.</p>
        <p>When set to No pressing the Flash button sets the level of the Playback to 0% but does not release the Cue Stack.</p>
        <p>Note that if the option Fader Activates Stack is set to Yes then releasing of the Playback is also dependent on the fader.</p>
        <p>If the Playback was activated by raising the fader then pressing the Flash button will not release the Playback.</p>
        <p>
            In this case the Playback will only be released by lowering the fader to 0% or by pressing the Rel button. This allows the Flash
            button to be used both to bump in a Cue which was not activated by fader, and to also bump a Cue to 100% which was activated by
            the fader at a lower level.
        </p>
    </div>
    <div class="section">
        ### 17.2.3. Flash always swaps
        <p>
            When set to Yes, pressing the Flash button will always act as a Swap rather than an Add, regardless of the state of the Add/Swap
            button.
        </p>
        <p>
            When the button is pressed the Intensity of all other active Playbacks will be set to 0%. When the button is released the other
            Playbacks will be restored to their previous level.
        </p>
        <p>When this option is set Yes then the LED in the Flash button will always be red.</p>
    </div>
    <div class="section">
        ### 17.2.4. Flash acts as Go/Pause
        <p>
            When set to Yes, pressing the Flash button acts as if the Go button had been pressed and pressing Shift + the Flash button acts
            as if the Pause button had been pressed. When set this way the button does not act as a bump button.
        </p>
        <p>When set to No the Flash button acts as a bump button in the normal way.</p>
        <p>Holding Shift and pressing Flash will perform Pause instead of Go.</p>
        <p>When set to Yes the settings "Flash activates Stack", "Flash releases Stack" and "Flash toggles" are ignored.</p>
    </div>
    <div class="section">
        ### 17.2.5. Flash acts as Flash + Go
        <p>When set to Yes the Flash button acts as both a Flash button and a Go button.</p>
        <p>
            Pressing the Flash button performs the Go function – this will active the Cue Stack, or if the Cue Stack is already active, it
            will Go to the next step. At the same time the Flash button will operate in the Normal way, setting the Playback level to 100%.
        </p>
        <p>Releasing the Flash button will set the Playback level back to 0% or if the fader is raised to the level of the fader.</p>
        <p>Holding SHIFT and pressing the Flash button will perform Flash + Pause.</p>
        <p>
            Normally when "Flash acts as Flash + Go" is set Yes then the setting "Flash Releases Stack" should be set to No. If the option
            "Flash Releases Stack" is set to Yes then releasing the Flash button will also release the Playback unless the fader is raised.
        </p>
        <p>When set to Yes, the setting "Flash acts as Go/Pause" is ignored.</p>
    </div>
    <div class="section">
        ### 17.2.6. Flash toggles
        <p>
            When set to Yes the Flash button acts as a toggle rather than a bump. Pressing the button the first time activates the Playback.
            Pressing the button again releases the Playback.
        </p>
        <p>
            When this option is set and the playback is active the LED in the Flash button flashes to indicate the toggle mode is latched.
        </p>
        <p>When set to Yes, the settings "Flash activates Stack" and "Flash releases Stack" are ignored.</p>
    </div>
    <div class="section">
        ### 17.2.7. Flash acts like fader
        <p>
            When set to Yes the Flash button has the same effect as if the fader has temporarily been raised to 100%. This is useful for
            enabling the Flash button to control attributes other than Intensity.
        </p>
        <p>
            For example, if the fader is set to control FX size then pressing the Flash button would act like the fader being fully raised –
            so 100% FX size.
        </p>
    </div>
    <div class="section">
        ### 17.2.8. Go activates stack
        <p>When set to Yes the GO button activates the Cue Stack if it is not already active.</p>
        <p>
            When set to No the Go and the Cue Stack is inactive, then the GO button steps the Cue Stack without activating it - as per the
            FFWD button.
        </p>
        <p>The default is Yes.</p>
    </div>
    <div class="section">
        ### 17.2.9. Go jumps out of loop
        <p>This setting affects Cues that are set to Chase Timing which are in a loop.</p>
        <p>When set to Yes, pressing Go will exit the loop – jumping to the step after the Cue that loops back to an earlier Cue.</p>
        <p>When set to No, pressing Go will step one step within the chase.</p>
    </div>
    <div class="section">
        ### 17.2.10. Go stop/starts
        <p>When set to Yes then pressing GO stops a Cue that is already running or starts a Cue that is stopped.</p>
        <p>When set to No then pressing GO starts the next Cue.</p>
    </div>
    <div class="section">
        ### 17.2.11. Go uses Exec Grid 1
        <p>This enables the GO button on Playbacks 1 to 10 to control the first ten items in Exec Grid 1.</p>
        <p>
            When set to Yes then pressing the GO button toggles the Exec Grid item corresponding to this Playback - for example GO on
            Playback 2 will toggle item 2 in Execute Grid 1.
        </p>
        <p>When set to No the GO button acts normally.</p>
    </div>
    <div class="section">
        ### 17.2.12. Pause swaps
        <p>When set to Yes the Pause button acts as a Flash button in Swap mode.</p>
        <p>
            Pressing the Pause button the Playback will be set to 100% and the Intensity of all other active Playbacks will be set to 0%.
            When the button is released the other Playbacks will be restored to their previous level.
        </p>
        <p>This setting enables a Playback to have both an Add button and a Swap button.</p>
    </div>
    <div class="section">
        ### 17.2.13. Pause releases
        <p>When set to Yes the Pause button releases the Cue Stack.</p>
    </div>
    <div class="section">
        ### 17.2.14. Pause uses Exec Grid 1
        <p>This enables the Pause button on Playbacks 1 to 10 to control items 11 to 20 in Exec Grid 1.</p>
        <p>
            When set to Yes then pressing the Pause button toggles the Exec Grid item corresponding to this Playback - for example Pause on
            Playback 2 will toggle item 12 in Execute Grid 1.
        </p>
        <p>When set to No the Pause button acts normally.</p>
    </div>
</div>
<div class="section">
    ## 17.3. Function
    <div class="section">
        ### 17.3.1. Cue Stack is an Intensity Master
        <p>
            When this setting is set to Yes then the Cue Stack behaves as an Intensity Master. The Cue Stack normal Cue execution behaviour
            is disabled.
        </p>
        <p>
            The Group Id settings specifies the group of channels that are under control of the Intensity Master. Updating the channels
            stored within the specified group updates the channels under control of the FX Intensity Master.
        </p>
        <p>
            If the Group ID is 0 or refers to an invalid group, then the channels stored in the first Cue are used to determine which
            channels are under control of the Intensity Master. The levels of the channels in the first Cue are not important – only that
            the channels are present at some level in the Cue.
        </p>
        <p>
            In order for the Intensity Master to be activated the Go button must be pressed. To release the Intensity Master the Playback
            must be selected and the REL button pressed. The Button settings "Flash activates Stack" and "Flash releases Stack" are ignored.
            In order to avoid sudden changes in output level the fader should be raised to 100% before activating or releasing.
        </p>
        <p>
            When the fader is at 100% then the Intensity Master has no effect. As the fader is lowered then all the channels under control
            have their intensity reduced.
        </p>
        <p>It is possible to have multiple Intensity Masters that control the same channel which work proportionately.</p>
        <p>
            Normally when this setting is set to Yes, the settings Cue Stack is a FX Size Master and Cue Stack is a FX Speed Master should
            be set to No.
        </p>
        <p>When this setting is set to No then the Cue Stack behaves normally.</p>
    </div>
    <div class="section">
        ### 17.3.2. Cue Stack is a FX Size Master
        <p>
            When this setting is set to Yes then the Cue Stack behaves as an FX Size Master. The Cue Stack normal Cue execution behaviour is
            disabled.
        </p>
        <p>
            The Group Id settings specifies the group of channels that are under control of the FX Size Master. Updating the channels stored
            within the specified group updates the channels under control of the FX Size Master.
        </p>
        <p>
            If the Group ID is 0 or refers to an invalid group, then the channels stored in the first Cue are used to determine which
            channels are under control of the FX Size Master. The levels of the channels in the first Cue are not important – only that the
            channels are present at some level in the Cue.
        </p>
        <p>
            In order for the FX Size Master to be activated the Go button must be pressed. To release the FX Size Master the Playback must
            be selected and the REL button pressed. The Button settings "Flash activates Stack" and "Flash releases Stack" are ignored. In
            order to avoid sudden changes in output level the fader should be raised to 100% before activating or releasing.
        </p>
        <p>
            When the fader is at 100% then FX size is as programmed. As the fader is lowered then the FX size is reduced until it reaches
            zero size at 0%.
        </p>
        <p>A particular channel can only be controlled from one FX Size Master.</p>
        <p>
            Normally when this setting is set to Yes, the setting Cue Stack is an Intensity Master should be set to No. It is possible to
            have a Cue Stack set to both a FX Size Master and a FX Speed Master.
        </p>
        <p>When this setting is set to No then the Cue Stack behaves normally.</p>
    </div>
    <div class="section">
        ### 17.3.3. Cue Stack is a FX Speed Master
        <p>
            When this setting is set to Yes then the Cue Stack behaves as an FX Speed Master. The Cue Stack normal Cue execution behaviour
            is disabled.
        </p>
        <p>
            The Group Id settings specifies the group of channels that are under control of the FX Speed Master. Updating the channels
            stored within the specified group updates the channels under control of the FX Speed Master.
        </p>
        <p>
            If the Group ID is 0 or refers to an invalid group, then the channels stored in the first Cue are used to determine which
            channels are under control of the FX Speed Master. The levels of the channels in the first Cue are not important – only that the
            channels are present at some level in the Cue.
        </p>
        <p>
            In order for the FX Speed Master to be activated the Go button must be pressed. To release the FX Speed Master the Playback must
            be selected and the REL button pressed. The Button settings "Flash activates Stack" and "Flash releases Stack" are ignored. In
            order to avoid sudden changes in output level the fader should be raised to 100% before activating or releasing.
        </p>
        <p>
            When the fader is at 100% then FX size is as programmed. As the fader is lowered then the FX speed is reduced until it stops at
            0%.
        </p>
        <p>A particular channel can only be controlled from one FX Speed Master.</p>
        <p>
            Normally when this setting is set to Yes, the setting Cue Stack is an Intensity Master should be set to No. It is possible to
            have a Cue Stack set to both a FX Size Master and a FX Speed Master.
        </p>
        <p>When this setting is set to No then the Cue Stack behaves normally.</p>
    </div>
    <div class="section">
        ### 17.3.4. Group ID (0 is not used)
        <p>
            This setting is used when the Cue Stack is an Intensity Master, FX Size Master or FX Speed Master. It specifies the group to use
            for the Master.
        </p>
        <p>
            When set to zero the Master will use the data in the first Cue of the Cue Stack to determine which heads are controlled by the
            master.
        </p>
    </div>
    <div class="section">
        ### 17.3.5. Group Attributes
        <p>
            This setting is used when the Cue Stack is an FX Size Master or FX Speed Master and the Group ID is non zero. It specifies which
            attributes the FX Speed or FX Size master should control for the heads in the Group.
        </p>
        <p>
            The Group Attributes defaults to all attributes. The options are All, Pos, Pan, Tilt, Col, Int, Zoom, Int+Pos, Int+Col,
            Int+Beam, and Int+Pos+Col.
        </p>
        <p>
            If the Group ID is zero or invalid then this setting is not used and MagicQ uses the data in the first Cue of the Cue Stack to
            determine which heads and attributes are controlled by the master.
        </p>
    </div>
    <div class="section">
        ### 17.3.6. Intensity Master to 200%
        <p>
            When Cue Stack is an Intensity Master is set to yes, then the fader will operate from 0% to 200% intensity. Above 100% the level
            recorded in the Cue will be boosted - although the maximum output level will always be 100%.
        </p>
    </div>
    <div class="section">
        ### 17.3.7. Cue Stack is a Prog Master
        <p>
            The Playback with this Cue Stack operates as a Programmer Master. The Programmer master enables level control of the contents of
            the Programmer on the fader and stepping between different Programmer states.
        </p>
        <p>
            See
            <a class="link" href="busking.html#_programmer_master" title="19.14. Programmer Master">Programmer Master</a>
            .
        </p>
        <p>The Cue Stack normal Cue execution behaviour is disabled.</p>
    </div>
    <div class="section">
        ### 17.3.8. Cue Stack is a Speed Master
        <p>
            When this setting is set to a Speed Master SPx then the Cue Stack behaves as a Speed Master. The flash button is a tap to time,
            the fader controls the speed relative to the tap to time. GO halts the speed master whilst PAUSE resumes.
        </p>
        <p>The Cue Stack normal Cue execution behaviour is disabled.</p>
    </div>
    <div class="section">
        ### 17.3.9. Cue Stack is a Live Copy Master
        <p>When this setting is set to yes, the Cue Stack behaves as a Live Copy Master.</p>
        <p>
            The Group Id settings specifies the group of channels that are copied to - i.e. that are controlled by this Master. Updating the
            channels stored within the specified group updates the channels under control of the Live Copy Master.
        </p>
        <p>
            If the Group ID is 0 or refers to an invalid group, then the channels stored in the first Cue are used to determine which
            channels are under control of the Live Copy Master. The levels of the channels in the first Cue are not important – only that
            the channels are present at some level in the Cue.
        </p>
        <p>The Live Copy Group ID determines the channels that the Live Copy Master copies from.</p>
        <p>The Cue Stack normal Cue execution behaviour is disabled.</p>
    </div>
    <div class="section">
        ### 17.3.10. Live Copy Group ID
        <p>This setting is used when the Cue Stack is an Live Copy Master. It specifies the group to use for copying channels from.</p>
    </div>
    <div class="section">
        ### 17.3.11. Col Tag
        <p>
            When a Col Tag is set for a Cue Stack then that Col Tag is shown in the Playback legend above the Playback faders and buttons.
        </p>
        <p>
            The RGB LEDs on the MQ500 and Stadium Wing playbacks can be set to show the colour of the Col Tags in Setup, View Setting,
            Windows, Playback Col Tags.
        </p>
    </div>
</div>
<div class="section">
    ## 17.4. Activate/Release
    <div class="section">
        ### 17.4.1. Halt at last step
        <p>When set to Yes the Cue Stack halts at the last step in the Cue Stack.</p>
        <p>When set to No then the Cue Stack will return to the first step after the last step.</p>
    </div>
    <div class="section">
        ### 17.4.2. Release after last step
        <p>When set to Yes the Cue Stack automatically releases after the last step in the Cue Stack has completed fading.</p>
        <p>When set to No the Cue Stack must be released manually.</p>
    </div>
    <div class="section">
        ### 17.4.3. Release resets to first step
        <p>
            When set to Yes the Cue Stack always starts from the first step when the Cue Stack is activated. The setting "Release steps 1
            step" is ignored.
        </p>
        <p>When set to No the Cue Stack activates at the step it was on when it was last released.</p>
    </div>
    <div class="section">
        ### 17.4.4. Release steps 1 step
        <p>When set to Yes the Cue Stack activates at the step following the step the Cue Stack was on when it was last released.</p>
        <p>When the setting "Release resets to first step" is set to Yes, this setting has no effect.</p>
    </div>
    <div class="section">
        ### 17.4.5. Release time
        <p>
            This is the time for channels to release when the Cue Stack is released (using the REL button or via fader/flash button). The
            exact behaviour depends upon whether channels are active on other Playbacks. Intensity channels not used by other channels will
            fade out using the release time.
        </p>
        <p>
            The release time also affects channels that are released from Cue steps within a Cue Stack step – i.e. when the Cue Stack step
            Tracking option is not set to LTP ("Rel old chans" = yes)
        </p>
        <p>This setting can also be set in the End field in View Cue in the Cue Stack Window.</p>
    </div>
    <div class="section">
        ### 17.4.6. Release attributes
        <p>This setting determines which attributes are released with time when a Cue Stack is released with time.</p>
        <p>Individual attribute types - "Int", "Pos", "Col", "Beam" can be selected together with combinations.</p>
        <p>The default is "All" which will fade out all attribute types except for attributes that are set to Instant.</p>
    </div>
    <div class="section">
        ### 17.4.7. Release uses last step times
        <p>
            When set to Yes the step times of the last step in the Cue Stack are used when releasing. This enables releasing using complex
            fan times and different fade / delay times on different attributes and heads.
        </p>
        <p>
            The last step times will apply when the whole Cue Stack is released and also when individual channels are released from the Cue
            Stack (e.g. when Tracking is set without L or H).
        </p>
        <p>
            The channels must be programmed in the last step for times to take effect. The values in the last step are ignored - only the
            times are used. If channels are not in the last step then they use the general times from the last step.
        </p>
        <p>
            When this option is set it is not required to set the overall Cue Stack release time - this is overridden by the chan and
            general times in the last step.
        </p>
    </div>
    <div class="section">
        ### 17.4.8. Release fades audio
        <p>
            By default, when the Cue Stack has audio playback enabled, if the Cue Stack has a release time configured, the audio will fade
            out over the same time.
        </p>
        <p>
            When set to No, the audio will snap to silent at the end of the release time. When set to Yes, the audio will fade in time with
            the release time.
        </p>
        <p>The default is "Yes"</p>
    </div>
    <div class="section">
        ### 17.4.9. Release executes last step
        <p>
            When the Playback is released then MagicQ executes the last step of the Cue Stack before releasing. Any macros in the last step
            of the Cue Stack are also executed.
        </p>
        <p>It affects all releases including releasing by flash button, fader to 0% or RELEASE button.</p>
        <p>
            This can be used with a Release Time on the Cue Stack to perform a fade out of a different look when the Cue Stack is released.
        </p>
    </div>
    <div class="section">
        ### 17.4.10. Activate on page change
        <p>When set to Yes, then this Cue Stack is activated when the page is changed to the page that this Cue Stack is assigned to.</p>
        <p>
            If there is an active Cue Stack on this Playback then the new Cue Stack will only be activated if the old Cue Stack is set to
            release on page change.
        </p>
    </div>
    <div class="section">
        ### 17.4.11. Release on page change
        <p>
            When set to Yes, then this Cue Stack is released when the page is changed to any page other than the page that this Cue Stack is
            assigned to.
        </p>
    </div>
    <div class="section">
        ### 17.4.12. HTP always active (Use HTP)
        <p>
            When set to Yes then the fader always controls the Intensity (HTP) channels from the Cue Stack regardless of whether the Cue
            Stack is activated. Whenever the fader is raised above zero the Intensity channels will affect the Output. The highest level
            from this Cue Stack and any other Playbacks will determine the Output level for each channel.
        </p>
        <p>This setting overrides the Advanced Setting "All Channels controlled LTP".</p>
        <p>This setting is similar to the Use HTP setting on some other consoles.</p>
    </div>
    <div class="section">
        ### 17.4.13. Activate and Release on DJ System
        <p>
            When set to Yes, this Cue Stack will automatically activate and release when a DJ deck is playing the corresponding track
            configured in the "DJ Track" setting. If the Cue Stack is only in the Stack Store, then the stack will activate form the Stack
            Store instead of from a Playback.
        </p>
    </div>
</div>
<div class="section">
    ## 17.5. Advanced
    <div class="section">
        ### 17.5.1. All chans controlled LTP
        <p>
            When set to Yes all HTP channels under control of the Playback act as if they were LTP channels. When the Playback with this Cue
            Stack is the latest activated and highest priority Playback then the Playback has complete control of all HTP channels
            regardless of whether they are active on other faders.
        </p>
        <p>
            HTP channels that are active on higher priority Playbacks will be under control of the higher priority Playback and will ignore
            this setting.
        </p>
        <p>
            HTP channels that are active on other Playbacks with the same priority, but which were activated/reasserted more recently than
            this Playback, will be under control of the other Playbacks.
        </p>
    </div>
    <div class="section">
        ### 17.5.2. Block FX from other playbacks
        <p>When set to Yes then any channels controlled by this Playback block FX on those channels from other Playbacks.</p>
        <p>
            Channels controlled by this Playback that have levels but no FX are not affected by FX on other Playbacks. In effect an implicit
            zero FX is added to these channels to block the other Playbacks.
        </p>
        <p>
            When set to No then channels controlled by this Playback that have levels but no FX are affected by FX on those channels from
            other Playbacks.
        </p>
    </div>
    <div class="section">
        ### 17.5.3. Ignore Masters
        <p>
            When set to Yes, then the levels of HTP channels ignore grand master and sub master faders. They also ignore DBO and SHIFT
            RELEASE and will not be automatically activated and released by timecode.
        </p>
        <p>FX from the Cue Stack are not affected by FX Speed Masters and FX Size Masters. (v1.9.4.1 and above)</p>
        <p>When set to No then then levels and FX are affected by Masters, DBO,SHIFT RELEASE and timecode as normal.</p>
    </div>
    <div class="section">
        ### 17.5.4. Playback priority
        <p>The Playback priority can be set to Normal, Mid, High, Programmer and Above Programmer.</p>
        <p>When all Playbacks are set to priority Normal then the latest Playback to be activated/reasserted will control the channels.</p>
        <p>Playbacks set to Mid priority always have higher priority than Playbacks set to Normal priority.</p>
        <p>Playbacks set to High priority always have higher priority than Playbacks set to Normal or Mid priority.</p>
        <p>
            Playbacks set to Programmer priority have the same priority as the programmer but always have higher priority than Playbacks set
            to Normal, Mid or High priority.
        </p>
        <p>
            Playbacks set to Above Programmer have higher priority than the Programmer. Note that the Programmer overrides HTP setting in
            Setup, View Settings, Prog must be set to "Playbacks except Above Programmer" for this setting to take effect. In order to edit
            the Cues in the Programmer and see the changes on the Output it is best to release the Cue Stack. Above Programmer also takes
            priority above any Preset or Parked channels.
        </p>
    </div>
    <div class="section">
        ### 17.5.5. Move when dark
        <p>When set to Yes, then MagicQ checks after each Cue is executed whether it should perform a move when dark.</p>
        <p>
            Any heads that are used in the next Cue but which have 0% intensity in the current Cue are checked to see whether the Position,
            Beam and Colour attributes should be preloaded before the next Cue is executed. If the Position, Beam or Colour values are
            different from the current values then the new values are crossfaded with a time of 3 seconds.
        </p>
        <p>This option is similar to putting a Mark Cue before every Cue in a Cue Stack.</p>
        <p>The time taken for the Move when dark is specified in Setup, View Settings, Cue Storage, Default mark/move when dark time.</p>
    </div>
    <div class="section">
        ### 17.5.6. Recalculate state on jumps
        <p>This option specifies how MagicQ calculates the Cue State when playing back a Cue Stack.</p>
        <p>
            When set to Yes, MagicQ recalculates the Cue State whenever a jump is made in the Cue Stack. The Output of a particular Cue
            always appears the same regardless of which Cue was executed preciously. MagicQ recalculates the Output as if the Cue Stack had
            been played back from the first Cue to this Cue by pressing the GO button.
        </p>
        <p>
            When set to No, MagicQ calculates the Cue State based on the Cues that it has actually executed – when jumping to a new Cue only
            the Cues that have been previously executed will make up the Output.
        </p>
        <p>In tracking modes this setting defaults to Yes. In non-tracking modes this setting defaults to No.</p>
    </div>
    <div class="section">
        ### 17.5.7. Stomp other playbacks
        <p>Stomping enables Playbacks that have been completely overridden by other Playbacks to be automatically released.</p>
        <p>
            This option only has an effect when the Setup, Playback setting "Stomp Playbacks" is set. When "Stomp Playbacks" is set to No
            then this setting is ignored.
        </p>
        <p>When this setting is set to Yes then this Playback is allowed to stomp other Playbacks.</p>
        <p>
            When this setting is set to No then this Playback will not stomp other Playbacks - this can be useful when bumping in stabs and
            temporary FX.
        </p>
    </div>
    <div class="section">
        ### 17.5.8. Sync next Playback to this one
        <p>This setting enables one or more playbacks to be synchronised together so that they step the same Cue Ids at the same time.</p>
        <p>Setting this option to Yes forces the next Playback (higher number) to synchronise to this Playback.</p>
        <p>If enabled for playback PB10 then Wing 1 PB1 will be synced to it.</p>
        <p>
            If you Go on this playback to a Cue Id that is not implemented on the next playback then the next playback will not change step.
            It will only sync to steps where the Cue Ids match.
        </p>
        <p>
            It is possible to synchronise multiple playbacks by enabling this setting on several adjacent playbacks. In this case all the
            adjacent playbacks are synced to the first playback in the adjacent playbacks.
        </p>
        <p>
            It is not neccessary for each of the adjacent playbacks to have all the Cues - each adjacent playback syncs independently to the
            first adjacent playback ignoring the Cues of any intermediate adjacent playbacks.
        </p>
    </div>
    <div class="section">
        ### 17.5.9. Send playback state to other consoles
        <p>When set to Yes then the state of this Playback is sent to other MagicQ consoles on the network.</p>
        <p>
            If Net Sessions, Playback sync is set then the state of all Playbacks is sent to other consoles regardless of this Cue Stack
            setting, so this setting should be set to No.
        </p>
        <p>This setting requires Setup, Network, Ethernet Remote Protocol to be set to "ChamSys TX" or "ChamSys TX and RX".</p>
    </div>
    <div class="section">
        ### 17.5.10. Rate Divisor
        <p>
            Cue Stacks can be set to use a divisor of the tapped time - by default it is set to "Normal" and takes the tapped time. Options
            include "Div by 2" to "Div by 8" and "Mult by 2".
        </p>
        <p>
            The divisor affects setting of the rate by tap to time either as the selected playback, as part of global tap to time, or as
            part of audio BPM rate setting.
        </p>
        <p>
            If set to "Ignore" the rate of the Cue Stack is never affected by global tap to time or FX Speed Masters. This allows Global Tap
            to Time and Speed Masters to be used without affecting particular Cue Stacks.
        </p>
    </div>
    <div class="section">
        ### 17.5.11. Speed Master
        <p>Selects which Speed Master this Cue Stack uses to control Chase and FX Speed - from SP1 to SP100.</p>
        <p>If set to "Ignore" it ignores Speed Masters.</p>
    </div>
    <div class="section">
        ### 17.5.12. External timecode
        <p>This setting affects any steps in this Cue Stack that have their Halt field set to "Timecode".</p>
        <p>
            When set to Yes this Cue Stack is controlled by external timecode. When set to No then this Cue Stack is controlled by internal
            timecode – activating the Playback starts the timecode from 0.
        </p>
        <p>This setting can also be changed from an encoder soft button.</p>
    </div>
    <div class="section">
        ### 17.5.13. Timecode offset
        <p>
            This can be used to add a positive or negative timecode offset to all timecode values within a Cue Stack including all TC Tracks
            associated with that Cue Stack.
        </p>
        <p>
            For example if the Cues in the Cue Stack have been set to respond to timecode starting at 0/0/0 and the timecode received
            actually starts at 2/0/0 then setting the timecode offset to 2/0/0 will make the Cue stack correctly respond to the received
            times.
        </p>
        <p>
            Similarly if the CueStack has been set to respond to timecode starting at 5/0/0 and timecode is actually received starting at
            0/0/0 then setting a timecode offset of -5/0/0 will have the desired effect.
        </p>
        <p>
            Note that all the Cues will still show their programmed timecode values but an offset will be applied when playing back or
            recording timecode. The titlebar of the Cue Stack Window shows the offset.
        </p>
        <p>The timecode offset can be modified using an encoder in the Cue Stack window by holding SHIFT and turning encoder D.</p>
    </div>
    <div class="section">
        ### 17.5.14. Enable timecode loop
        <p>
            When set to Yes this will enable the internal timecode of the playback to loop between the "Timecode loop in" and "Timecode loop
            out" points. This only works with the internal timecode function and cannot control external timecode sources. Manually setting
            the timecode to a value greater than the "Timecode loop out" value will cause the timecode to be set to the value in "Timecode
            loop in"
        </p>
    </div>
    <div class="section">
        ### 17.5.15. Timecode loop in
        <p>This is the start timecode of the section of timecode which will be looped when "Enable timecode loop" is set to Yes.</p>
    </div>
    <div class="section">
        ### 17.5.16. Timecode loop out
        <p>
            This is the end timecode of the section of timecode which will be looped when "Enable timecode loop" is set to Yes. When the
            timecode reaches this value or higher, the internal timecode will be set to the value of the
            <span class="emphasis"><em>Timecode loop in</em></span>
            setting.
        </p>
    </div>
    <div class="section">
        ### 17.5.17. DJ Track
        <p>
            This will show the title and artist of an associated DJ System track when configured. To set this, make sure the relevant track
            you wish to associate is currently playing on a connected DJ system, then use the "Copy" function to copy the cue stack onto the
            relevant deck in the Audio window.
        </p>
    </div>
    <div class="section">
        ### 17.5.18. Track DJ Deck timecode
        <p>
            When set to yes, and when the DJ Track is configured above, the timecode for this cue stack will be taken from the relevant DJ
            deck on which the configured track is playing. This is automatically set to Yes when associating a DJ Track above.
        </p>
    </div>
</div>
<div class="section">
    ## 17.6. Chase Options
    <div class="section">
        ### 17.6.1. Skip first times
        <p>
            When this setting is set to Yes, then when the Cue Stack is activated the fade times for the first step are ignored and the
            levels bumped straight in.
        </p>
        <p>This only affects Cue steps set to "Chase Timing".</p>
    </div>
    <div class="section">
        ### 17.6.2. Speed
        <p>
            This controls the speed of any Cue Steps in the Cue Stack set to "Chase Timing". This setting can also be controlled via encoder
            X in the Cue Stack view.
        </p>
    </div>
    <div class="section">
        ### 17.6.3. Xfade
        <p>
            This controls the crossfade of any Cue Steps in the Cue Stack set to "Chase Timing". This setting can also be controlled via the
            Y encoder in the Cue Stack view.
        </p>
    </div>
    <div class="section">
        ### 17.6.4. Direction
        <p>
            This controls the direction (forward or backward) of any Cue Steps in the Cue Stack set to "Chase Timing". This setting can also
            be controlled via encoder C in the Cue Stack view.
        </p>
    </div>
    <div class="section">
        ### 17.6.5. Repeat type
        <p>
            The options are Normal, Bounce and Random. Bounce executes the Chase alternating backward and forward direction. This setting
            can also be controlled via encoder D in the Cue Stack view.
        </p>
    </div>
    <div class="section">
        ### 17.6.6. Number of repeats
        <p>This setting specifies how many repeats of the Chase should take place.</p>
        <p>When set to 0 then the Chase will continue until the chase is exited manually.</p>
    </div>
    <div class="section">
        ### 17.6.7. Running
        <p>This setting specifies whether Chases start running or halted.</p>
    </div>
    <div class="section">
        ### 17.6.8. HTP in fade, HTP out fade, Position fade, Colour fade, Beam fade
        <p>
            The fade times for any Cue Steps in the Cue Stack set to "Chase Timing". These times generally match the Chase speed. These
            times can also be controlled via encoder C in the Cue Stack view.
        </p>
        <p>Setting one or more attribute group fade times to 0 causes that attribute group to snap rather than fade.</p>
        <p>The overall Chase speed corresponds to attribute group with the biggest combined delay and fade time.</p>
    </div>
    <div class="section">
        ### 17.6.9. HTP in delay, HTP out delay, Position delay, Colour delay, Beam delay
        <p>The delay times for any Cue Steps in the Cue Stack set to "Chase Timing".</p>
        <p>These times can be used to make one or more attribute groups snap at end.</p>
        <p>The overall Chase speed corresponds to attribute group with the biggest combined delay and fade time.</p>
    </div>
</div>
<div class="section">
    ## 17.7. Audio
    <div class="section">
        ### 17.7.1. Audio controls fader level
        <p>
            When set to Yes, the level of the playback is controlled by the received audio level on the chosen. The level of the real fader
            is ignored. The effect on the Playback is determined by the Cue Stack, Fader settings.
        </p>
        <p>The Cue Stack must be active for the audio to take effect.</p>
        <p>The setting can be used in conjunction with the setting "Audio jumps to Cue Step".</p>
        <p>
            The audio level, audio parameter 1, and audio parameter 2 settings can be used to fine tune how the received audio affects the
            fader level.
        </p>
    </div>
    <div class="section">
        ### 17.7.2. Audio level jumps to Cue Step
        <p>
            "Audio level jumps to Cue Step" enables the level of the specified audio channel to determine which step in the Cue Stack is
            executed – for example if you have a Cue Stack with 10 steps, then a level of 0% will execute step 1, 10% will execute step 2
            whilst a level of 100% will execute step 10. This is very useful if you wish to program different Cues onto LED or media
            servers.
        </p>
        <p>The Cue Stack must be active for the audio to take effect.</p>
        <p>When this setting is set to Yes, the settings "Audio bumps Go" and "Audio beat step" should be set to No.</p>
        <p>
            If the setting "Audio controls fader level" is set to YES then audio level, audio parameter 1, and audio parameter 2 will affect
            the level of the Playback and hence the Cue step chosen.
        </p>
    </div>
    <div class="section">
        ### 17.7.3. Audio bumps GO/FX
        <p>
            When set to Yes, the Cue Stack bumps to the next step every time a peak in the audio is detected on the specified channel. This
            enables a Cue Stack to follow the beat of the music.
        </p>
        <p>This is best used with the Cue Stack set to Cue Timing instead of Chase Timing.</p>
        <p>The Cue Stack must be active for the audio to take effect.</p>
        <p>
            When this setting is set to Yes, the settings "Audio controls fader level", "Audio sets BPM" and "Audio level jumps to Cue Step"
            should be set to No.
        </p>
        <p>
            Audio parameter 1 is used as a divider – set it between 2 and 16 to divide the received beat frequency by a value between 2 and
            16 times.
        </p>
        <p>Audio parameter 2 should be set to 0.</p>
    </div>
    <div class="section">
        ### 17.7.4. Audio beat step
        <p>
            When set to yes, the Cue Stack will use the currently detected beat number (whether from the Audio Input BPM beat tracker, or
            from an external DJ system), to jump to the Cue with the corresponding Cue ID for the beat number.
        </p>
        <p>When this setting is set to Yes, the settings "Audio sets BPM" and "Audio level jumps to Cue Step" should be set to No.</p>
    </div>
    <div class="section">
        ### 17.7.5. Audio beat step length
        <p>
            In conjunction with the "Audio beat step" setting, this value specifies after how many beats the Cue Stack should loop. By
            default this value is 4, but can be overridden to any value required. Cue IDs which are outside of this range will never be
            triggered. E.g. with this setting set to 6, then only Cue IDs 1 through 6 will be checked.
        </p>
    </div>
    <div class="section">
        ### 17.7.6. Audio sets BPM
        <p>
            When set to Yes, then the chase speed of the Cue Stack is set to the timing of the peaks on the specified audio channel. The Cue
            Stack should be set to Chase Timing.
        </p>
        <p>The Cue Stack must be active for the audio to take effect.</p>
        <p>
            When this setting is set to Yes, the settings "Audio controls fader level", "Audio bumps GO/FX" and "Audio level jumps to Cue
            Step" should be set to No.
        </p>
        <p>Audio level, audio parameter 1, and audio parameter 2 should be set to 0.</p>
    </div>
    <div class="section">
        ### 17.7.7. Audio channel
        <p>This setting specifies the audio channel that the Playback will respond to.</p>
        <p>The ChamSys audio interface supports 7 different frequency bands on two audio inputs (left and right).</p>
        <p>Selecting the option "Energy" uses all frequency bands mixed together.</p>
    </div>
    <div class="section">
        ### 17.7.8. Audio level
        <p>
            When "Audio controls fader level" is set to Yes then the settings Audio parameter 1 and Audio Parameter 2 can be set to control
            the response:
        </p>
        <p>Audio P1 = 0 Normal (direct trigger from level)</p>
        <p>Audio P1 = 1 Decayed (decays by Audio P2 each sample)</p>
        <p>Audio P1 = 2 Pulse (triggers at Audio Level, Audio P2 is duration of pulse)</p>
        <p>Audio P1 = 3 Pulse decay (triggers at Audio Level, decays by Audio P2 each sample)</p>
        <p>Audio P1 = 4 Switch (triggers to on/off at Audio Level)</p>
        <p>Audio P1 = 5 Slow (increases/decreases by Audio P2 each sample)</p>
        <p>These parameters are ignored for the settings "Audio Bumps Go" and "Audio sets BPM", and "Audio jumps to Cue Step"</p>
        <p>
            When the setting "Audio Bumps Go" is set to Yes, then Audio P1 acts as a divider - from 2 to 64 so that the Cue Stack is bumped
            at a slower rate than the audio input.
        </p>
    </div>
    <div class="section">
        ### 17.7.9. Audio parameter 1
        <p>Audio P1 = 0 Normal (direct trigger from level)</p>
        <p>Audio P1 = 1 Decayed (decays by Audio P2 each sample)</p>
        <p>Audio P1 = 2 Pulse (triggers at Audio Level, Audio P2 is duration of pulse)</p>
        <p>Audio P1 = 3 Pulse decay (triggers at Audio Level, decays by Audio P2 each sample)</p>
        <p>Audio P1 = 4 Switch (triggers to on/off at Audio Level)</p>
        <p>Audio P1 = 5 Slow (increases/decreases by Audio P2 each sample)</p>
    </div>
    <div class="section">
        ### 17.7.10. Audio parameter 2
        <p>Audio P2 is dependent on Audio P1</p>
        <p>Audio P1 = 1 Decayed (decays by Audio P2 each sample)</p>
        <p>Audio P1 = 2 Pulse (triggers at Audio Level, Audio P2 is duration of pulse)</p>
        <p>Audio P1 = 3 Pulse decay (triggers at Audio Level, decays by Audio P2 each sample)</p>
        <p>Audio P1 = 5 Slow (increases/decreases by Audio P2 each sample)</p>
    </div>
    <div class="section">
        ### 17.7.11. Audio file
        <p>This specifies an audio file to be associated with the Cue Stack.</p>
    </div>
    <div class="section">
        ### 17.7.12. Audio play mode
        <p>In "Normal" mode, the audio file specified will play upon the playback being activated, and stops when deactivated.</p>
        <p>
            In "Stack Audio Muted" mode, the audio file will be shown in the Audio Timeline window to allow timecode based Cue Stacks to be
            modified visually, but MagicQ won’t play back the audio itself. This mode is used when you are receiving timecode from an
            external system which is playing the same audio file and providing a timecode source to MagicQ.
        </p>
    </div>
</div>
<div class="section">
    ## 17.8. Step (View Defaults only)
    <div class="section">
        ### 17.8.1. Step controlled as a chase
        <p>When set to Yes, the step defaults to Chase timing. When set to No the step defaults to Cue timing.</p>
    </div>
    <div class="section">
        ### 17.8.2. Step follows last
        <p>
            When set to Yes, the step executes after the completion of the previous step. When set to No the step executes after the wait
            time specified in the Cue step.
        </p>
    </div>
    <div class="section">
        ### 17.8.3. Step halts before executing
        <p>When set to Yes, the step halts and waits for the user to pres GO before executing the Cue step.</p>
        <p>
            When set to No the step executes immediately after the previous step has completed – this is either after it has completed
            fading (when "Step follows last" is set to YES) or immediately after the wait time has expired.
        </p>
        <p>
            When "Step Controlled as Chase" is Yes then this setting is normally set to No so that the chase runs step to step without user
            interaction.
        </p>
        <p>
            When "Step Controlled as Chase" is No then this setting is normally set to Yes so that the Cue Stack is executed step by step
            under user control.
        </p>
    </div>
    <div class="section">
        ### 17.8.4. Zero old HTP (from previous steps)
        <p>When set to Yes, any HTP channels from previous Cues that are not in this Cue step are faded out.</p>
        <p>In tracking modes this setting defaults to No. In non-tracking mode this setting defaults to Yes.</p>
        <p>The Tracking flag "H" corresponds to the inverse of this setting.</p>
    </div>
    <div class="section">
        ### 17.8.5. Zero old FX (from previous steps)
        <p>
            When set to Yes, any FX on channels from previous Cues that are not controlled by a FX in this Cue step have the FX faded out.
        </p>
        <p>In tracking modes this setting defaults to No. In non-tracking mode this setting defaults to Yes.</p>
        <p>The Tracking flag "F" corresponds to the inverse of this setting.</p>
    </div>
    <div class="section">
        ### 17.8.6. Release old chans
        <p>When set to Yes, any channels used in previous Cues but not used in this Cue step are released.</p>
        <p>This setting defaults to No in all modes.</p>
        <p>The Tracking flag "L" corresponds to the inverse of this setting.</p>
    </div>
</div>
<div class="section">
    ## 17.9. Step Times (View Defaults only)
    <div class="section">
        ### 17.9.1. HTP in fade
        <p>The default fade times used when new Cues are recorded in a Cue Stack. Used by Cues in the Cue Stack set to "Cue Timing".</p>
        <p>Once Cues have been recorded then the times for Specific Cues are edited in the Cue Window, View Times.</p>
    </div>
    <div class="section">
        ### 17.9.2. HTP out fade
        <p>The default fade times used when new Cues are recorded in a Cue Stack. Used by Cues in the Cue Stack set to "Cue Timing".</p>
        <p>Once Cues have been recorded then the times for Specific Cues are edited in the Cue Window, View Times.</p>
    </div>
    <div class="section">
        ### 17.9.3. Position fade
        <p>The default fade times used when new Cues are recorded in a Cue Stack. Used by Cues in the Cue Stack set to "Cue Timing".</p>
        <p>Once Cues have been recorded then the times for Specific Cues are edited in the Cue Window, View Times.</p>
    </div>
    <div class="section">
        ### 17.9.4. Colour fade
        <p>The default fade times used when new Cues are recorded in a Cue Stack. Used by Cues in the Cue Stack set to "Cue Timing".</p>
        <p>Once Cues have been recorded then the times for Specific Cues are edited in the Cue Window, View Times.</p>
    </div>
    <div class="section">
        ### 17.9.5. Beam fade
        <p>The default fade times used when new Cues are recorded in a Cue Stack. Used by Cues in the Cue Stack set to "Cue Timing".</p>
        <p>Once Cues have been recorded then the times for Specific Cues are edited in the Cue Window, View Times.</p>
    </div>
    <div class="section">
        ### 17.9.6. HTP in delay
        <p>The default delay times used when new Cues are recorded in a Cue Stack. Used by Cues in the Cue Stack set to "Cue Timing".</p>
        <p>Once Cues have been recorded then the times for Specific Cues are edited in the Cue Window, View Times.</p>
    </div>
    <div class="section">
        ### 17.9.7. HTP out delay
        <p>The default delay times used when new Cues are recorded in a Cue Stack. Used by Cues in the Cue Stack set to "Cue Timing".</p>
        <p>Once Cues have been recorded then the times for Specific Cues are edited in the Cue Window, View Times.</p>
    </div>
    <div class="section">
        ### 17.9.8. Position delay
        <p>The default delay times used when new Cues are recorded in a Cue Stack. Used by Cues in the Cue Stack set to "Cue Timing".</p>
        <p>Once Cues have been recorded then the times for Specific Cues are edited in the Cue Window, View Times.</p>
    </div>
    <div class="section">
        ### 17.9.9. Colour delay
        <p>The default delay times used when new Cues are recorded in a Cue Stack. Used by Cues in the Cue Stack set to "Cue Timing".</p>
        <p>Once Cues have been recorded then the times for Specific Cues are edited in the Cue Window, View Times.</p>
    </div>
    <div class="section">
        ### 17.9.10. Beam delay
        <p>The default delay times used when new Cues are recorded in a Cue Stack. Used by Cues in the Cue Stack set to "Cue Timing".</p>
        <p>Once Cues have been recorded then the times for Specific Cues are edited in the Cue Window, View Times.</p>
    </div>
</div>
<div class="section">
    ## 17.10. FX (View Defaults Only)
    <p>Default speed</p>
    <p>This is the default FX speed used when creating new Waveform FX in the FX Editor Window.</p>
    <div class="section">
        ### 17.10.1. Default in fade
        <p>
            This is the default FX fade in used when setting a specific FX fade in time. Note that by default FX are faded in using the fade
            times of the Cue step.
        </p>
    </div>
    <div class="section">
        ### 17.10.2. Default out fade
        <p>
            This is the default FX fade in used when setting a specific FX fade out time. Note that by default FX are faded out using the
            fade times of the Cue step.
        </p>
    </div>
</div>
