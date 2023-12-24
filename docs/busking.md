---
id: busking
title: Chapter 19. Live Programming (Busking)
sidebar_position: 19
---

# Chapter&nbsp;19.&nbsp;Live Programming (Busking)
<div class="section">
    ## 19.1.&nbsp;Adding individual channels using preset faders
    <p>
        Individual channels can be added into the show as required using the Intensities Windows. Channels can be added using the faders in
        either the Programmer View or the Presets View.
    </p>
    <p>
        Channels added in the Programmer View are added into the programmer in the usual way. If the programmer is cleared then they are
        cleared. Channels added using the Presets View are not affected by operations on the programmer - they act like preset faders.
    </p>
    <p>Channels added in both views are affected by the Grand Master and by the pressing of SWAP buttons.</p>
</div>
<div class="section">
    ## 19.2.&nbsp;Over-ride / take-over
    <p>
        The MagicQ architecture supports the combined use of the programmer, playbacks and preset faders so that there is no need to
        constantly swap between modes, losing your overridden effects. This makes the console ideal for busking shows.
    </p>
    <p>
        ADD and SWAP buttons work regardless of whether you are programming or playing back. Similarly the programmer works as an over-ride,
        regardless of what you are doing.
    </p>
    <p>
        By default, the console makes no distinction between programming and run modes. Some operators may wish to restrict what is allowed
        in run mode – this can be configured in the Setup Window. You can choose to disable programming or to disable modification of
        programmed Cues / Cue Stacks.
    </p>
</div>
<div class="section">
    ## 19.3.&nbsp;Viewing Cues and Cue Stacks
    <p>
        The Cue and Cue Stack Windows are used to monitor and adjust the execution of Cues and Cue Stacks respectively. Both windows monitor
        the currently selected playback.
    </p>
    <p>
        For a Cue Stack with a single Cue recorded on it, then the Cue Stack window will not be of much interest. In this case the Cue can
        be monitored and adjusted using the Cue Window.
    </p>
    <p>
        For a Cue Stack with multiple Cues, the Cue Stack window can be used to watch the progress of the Cue Stack. The position within the
        Cue Stack can be changed along with the timing information. You can make the Cue Stack window follow the Cue currently executing on
        the selected playback - set the Display Current Cue option to YES in the Cue Stack Window.
    </p>
</div>
<div class="section">
    ## 19.4.&nbsp;Modifying chase speed / crossfade
    <p>
        To modify the speed or crossfade of a Cue Stack that is running with Chase Timing, press the SELECT button for the playback, and
        then adjust the encoders in the Cue Stack Window. The chase direction and chase type (Normal, Bounce, Random) can also be selected.
        Pressing and holding the SELECT button of a Playback with a chase on it automatically opens the Cue Stack Window.
    </p>
    <p>
        Use the top right encoder to modify individual attributes - Position, Beam, Colour, Intensity In and Intensity Out (soft button
        selects the different attributes). Once the speed of an attribute is changed it is no longer controlled by the master chase speed.
        Modifying the attribute so that it is the same as the master chase speed brings it back under control of the master chase speed.
    </p>
    <p>Use soft button Y to Tap to Time the speed.</p>
    <p>Modifications are retained even after the playback is released.</p>
</div>
<div class="section">
    ## 19.5.&nbsp;Modifying FX parameters
    <p>
        To modify the parameters of a FX that is programmed in a Cue, press the SELECT button for the playback, and then adjust the encoders
        in the Cue Window.
    </p>
    <p>FX size, shape, spread and speed are all adjustable.</p>
    <p>Use soft button Y to Tap to Time the speed.</p>
    <p>Modifications are retained even after the playback is released.</p>
</div>
<div class="section">
    ## 19.6.&nbsp;Stop / Starting Cue Stacks
    <p>Cue Stacks can be started and stopped using the GO and STOP buttons associated with the playback.</p>
    <p>For wing playbacks, make the playback the current playback and then press the GO / STOP buttons in the manual control section.</p>
</div>
<div class="section">
    ## 19.7.&nbsp;Jumping to a Cue in a Cue Stack
    <p>There are several ways to jump to a specific Cue in a Cue Stack.</p>
    <p>Press the S button of the Playback, enter a Cue Id on the keypad and press the manual GO button.</p>
    <p>
        In the Cue Stack window, use the cursor keys or press the touch screen to move the cursor to the required Cue. Press the GOTO CUE
        soft button to jump directly to the Cue. Alternatively key in the Cue ID within the Cue Stack of the Cue you wish to jump to and
        press GOTO CUE.
    </p>
    <p>
        Pressing the PRELOAD CUE button rather than the GOTO CUE button selects the Cue that will be executed when the GO button for the Cue
        Stack is next pressed. This enables the next Cue to be selected in advance of the Cue being required.
    </p>
    <p>Pressing ENTER in the first column of the Cue Stack also jumps to the specified Cue.</p>
</div>
<div class="section">
    ## 19.8.&nbsp;Over-riding using the programmer
    <p>
        When playing back a show, you can over-ride the programmed effect in the playbacks by using the programmer. For instance, assume
        that you are running a yellow circle on your MAC500s. You wish to change the colour to Red.
    </p>
    <p>Select the MAC500s from the Group Window.</p>
    <p>In the Colour Window select the Red palette entry.</p>
    <p>
        If you wish to remove the over-ride then you can either clear all off the programmer by pressing CLEAR. Alternatively you can remove
        only certain attributes or certain heads by selecting the items with the cursor in the Prog Window and pressing the REMOVE soft
        button.
    </p>
    <p>
        When you press CLEAR or remove selected heads from the programmer, the programming will be immediately removed and the heads will be
        controlled by the playbacks as if the programming had not been applied. This is different to some other consoles where clearing the
        programmer has non deterministic effects.
    </p>
    <p>
        Note that in order to over-ride individual attributes of an intelligent head you need to be in SELECT BY CHAN rather than SELECT BY
        HEAD mode. If you are in SELECT BY HEAD mode then all of the head attributes will be set to what is in the programmer.
    </p>
</div>
<div class="section">
    ## 19.9.&nbsp;Adding in new FX
    <p>
        MagicQ does not make a distinction between programming and run modes so it is always possible to busk new FX. For instance, assume
        that you have an active playback which has the MAC500s statically focused on the centre vocals position. You now wish to temporarily
        add in a tilt saw.
    </p>
    <p>Select the MAC500s from the Group Window.</p>
    <p>In the Prog Window, select the ADD FX soft button.</p>
    <p>Select the TILT FX.</p>
    <p>Adjust the encoder wheels as appropriate.</p>
    <p>
        If you wish to set the speed / size of the FX before you make it live on stage, then go into BLIND mode before you ADD in the FX.
        Then you can adjust the chase without affecting the stage output. Use the Move View in the Outputs Window to get a 2D picture of how
        your FX will look. Then when you are happy, go out of BLIND mode and the FX will appear on stage.
    </p>
    <p>
        Alternatively use the ADD FX ZERO SIZE soft button – this adds an FX into the programmer exactly as when using the ADD FX soft
        button except that the Zero Size option is set. You can then select the size you want using the SIZE encoder before pressing the
        ZERO SIZE soft button to clear the Zero Size option.
    </p>
    <p>Use the CHANGE FX soft button to change the waveform of the FX live.</p>
    <p>Pressing and releasing BLIND will enable you to busk the FX in and out – e.g. in the chorus / verse transitions.</p>
</div>
<div class="section">
    ## 19.10.&nbsp;Applying palettes with time
    <p>Palettes can be applied with a time by simple entering a time in seconds before selecting the palette entry to apply.</p>
    <p>
        For example, to apply a 4.5 second movement from the current position to your programmed centre vocals position, simply type 4.5 and
        select the vocals position in the Position Window.
    </p>
    <p>
        The fades are carried out in the programmer (you don’t need any playbacks free). All attributes in the palette are faded regardless
        of whether they are marked as instant or fading in the personality file.
    </p>
    <p>
        If you apply a palette with time whilst in FAN mode then the times will be fanned across the different heads in the order that the
        heads have been selected. See
        <a class="link" href="palettes.html#using-palettes-with-times" title="10.11.&nbsp;Using Palettes with times">
            Using Palettes with time
        </a>
        .
    </p>
</div>
<div class="section">
    ## 19.11.&nbsp;Releasing / Clearing with time
    <p>
        Release times can be set on a per Cue Stack basis, in the Cue Stack Options. Default release times can be set up in the Cue Stack,
        Defaults view including times for Cue Stacks with single Cues and Cue Stacks with multiple Cues.
    </p>
    <p>
        It is also possible to release a Playback with time by typing a number and then pressing REL. For example, 3 REL releases the
        currently selected playback over 3 seconds.
    </p>
    <p>
        In addition it is possible to clear the programmer and to enter and exit blind mode with times. Press 5 CLEAR to clear the
        programmer over 5 seconds. Press 10 BLIND to enter blind mode over 10 seconds.
    </p>
</div>
<div class="section">
    ## 19.12.&nbsp;Speed control
    <p>MagicQ provides multiple ways to control the speed of chases and FX.</p>
    <div class="section">
        ### 19.12.1.&nbsp;Changing the Chase or FX data
        <p>
            The most direct approach is to change the chase speed directly in the Cue Stack window or the FX speed directly in the Cue
            Window as described in the sections above.
        </p>
        <p>This is a permanent change to the stored chase / FX on the selected playback.</p>
    </div>
    <div class="section">
        ### 19.12.2.&nbsp;Global Rate or Playback Rate
        <p>
            An increase or decrease in speed can be applied to a Cue Stack on a Playback or to active Cue Stacks using the Global Rate and
            Playback Rate in the Playback window. This affects both Chase speed and FX Speed. The manual fader can also be set to control
            the Global Rate or Playback Rate.
        </p>
        <p>
            The Global Rate and Playback Rate are a percentage applied respectively to all and specified Cue Stacks when they are active.
            The default (unchanged) rate is 100%. 0% is stopped whilst greater than 100% is faster than programmed. The change is permanent,
            but does not change the actual speeds recorded in the Chase or FX - it purely applies a percentage change on those speeds.
        </p>
        <p>
            Both rates are permanently applied until changed back to 100%. All Playback rates can be reset to 100% via the RESET ALL RATE
            soft button in the Playback Window.
        </p>
        <p>The Global Rate applies to all playbacks and can not be inhibited.</p>
    </div>
    <div class="section">
        ### 19.12.3.&nbsp;FX Speed on Playback Fader
        <p>
            Individual control of speed of FX in a Cue Stack on a Playback can be put under the control of the playback fader using the
            Fader controls FX Size option.
        </p>
        <p>
            This is a temporary change that follows the fader level - the FX is stopped when the fader is at 0%, and runs the programmed
            speed when the fader is at 100%.
        </p>
    </div>
    <div class="section">
        ### 19.12.4.&nbsp;FX Speed Masters
        <p>
            A dedicated FX Speed Master can be set up to control the speed of a number of channels or a group of channels. When activated
            the FX Speed Master is always applied to those channels regardless on which Playback they are running and also affects those
            channels if they are in a FX in the Programmer.
        </p>
        <p>
            This is a temporary change that follows the fader level - the FX is stopped when the fader is at 0%, and runs the programmed
            speed when the fader is at 100%.
        </p>
        <p>
            FX Speed Masters can not be inhibited - they are a per channel setting that will always control the affected channels regardless
            of the Cue Stack settings on the Cue Stack where they are applied.
        </p>
    </div>
    <div class="section">
        ### 19.12.5.&nbsp;Speed Masters
        <p>
            A Speed Master is a generic speed that when activated is applied to multiple Cue Stacks overriding the programmed speed. It is
            an absolute speed which is normally set by Tap to Time. Each Cue Stack specifies which Speed Master it responds to - the default
            being Speed Master 1 (SP1).
        </p>
        <p>
            Speed Masters can also be configured to get their BPM from external DJ systems, from audio input sources and from other 3rd
            party sources. It is possible to switch instantaneously between different sources.
        </p>
        <p>
            MagicQ supports 100 Speed Masters which can be used to Tap to Time speed and apply the speeds to chosen Cue Stacks. Some users
            may wish to use just one global Speed Master whilst others may wish to use a Speed Master per song page.
        </p>
        <p>
            Each Speed Master can be set to either control all attribute types, or can be selected individually for Intensity, Position,
            Colour and Beam.
        </p>
        <p>
            Speed Masters can be enabled and disabled. When disabled the Speed Master no longer applies to the Cue Stacks and they run at
            their programmed speeds. When a new show is started all Speed Masters are reset to a disabled state.
        </p>
        <p>
            Speed Masters contain a speed and a rate divisor. The rate divisor applies to the programmed speed, enabling half, and further
            fractions of the speed, or doubling of the speed or further multiplications. By default it has no effect on the programmed
            speed.
        </p>
        <p>
            All Cue Stacks by default are controlled by Speed Master 1 (SP1). In the Cue Stack, Advanced options, the Speed Master option
            can be set to choose any of the 100 Speed Masters, or to Ignore - in which case the Cue Stack ignores all Speed Masters.
        </p>
        <p>
            Each FX in a Cue Stack can also be assigned to a different Speed Master - in this case it takes precedence over the the Speed
            Master for the entire Cue Stack. If the FX is set to "Cue Stack" then the Speed Master setting for the entire Cue Stack is used.
        </p>
        <p>
            Cue Stacks are affected regardless of whether they are executed from a Playback, from an Execute Window or from the Stack Store.
        </p>
        <p>
            By default FX that are in the Programmer are not affected by any enabled Speed Masters - this ensures that during programming
            default speeds can be programmed into Cues. For playback (busking) the Programmer can be controlled by a Speed Master - in
            Setup, View Settings, Prog set the Programmer Speed Master to the required Speed Master. Set it to Ignore to make it ignore all
            Speed Masters.
        </p>
        <p>
            When enabled, the Speed Master will control the speed of chases in the Cue Stack and all the FX in the Cue Stack, including any
            Pixel Map FX. The programmed chase time and programmed FX time are ignored. When a Speed Master is deactivated all chases and FX
            under control of that Speed Master revert to their programmed speeds.
        </p>
        <p>
            When Tap to Time is used to set the speed of a Speed Master, all controlled chases and FX will be phase synced to the Taps as
            well as setting the speed. This means that after a Tap to Time on a Speed Master all chases and FX will be in sync.
        </p>
        <p>
            A "No Tap Sync" can be set for each Speed Master, so that Tap to Time on that Speed Master will only set the tempo, it will not
            phase sync the FX and chases.
        </p>
        <p>
            "Fader 200%" can be set for each Speed Master, so when the fader is at half the temp is the tapped tempo and when at full it is
            200% of the tapped tempo.
        </p>
        <p>Speed Masters can be accessed as options through the following features:</p>
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">The physical TAP button</li>
                <li class="listitem">The DBO button</li>
                <li class="listitem">The Master crossfade GO button</li>
                <li class="listitem">From the remote trigger input</li>
                <li class="listitem">From automations</li>
                <li class="listitem">
                    Through Cue Stacks set with the Cue Stack, Function option
                    <a class="link" href="advanced-cue-stack-options.html#cue-stack-speed-masters" title="18.11.&nbsp;Speed Masters">
                        "Cue Stack is a Speed Master"
                    </a>
                </li>
                <li class="listitem">
                    Through a new Speed Master motorised bank
                    <a class="link" href="motor.html#fader-modes" title="23.2.&nbsp;Fader modes">Fader Mode</a>
                    on the Stadium consoles
                </li>
                <li class="listitem">
                    Through the Execute Windows using ASSIGN SPECIAL (see
                    <a class="link" href="execute.html#execute-speed-masters" title="21.20.7.&nbsp;Speed Masters">Execute Speed Masters</a>
                    )
                </li>
                <li class="listitem">
                    Through the Playbacks, VIEW SPD MASTER view (see
                    <a class="link" href="playback.html#playback-speed-masters" title="16.5.8.&nbsp;Speed Masters">
                        Playback Speed Masters
                    </a>
                    )
                </li>
            </ul>
        </div>
        <p>
            The current status of the Speed Masters can be viewed in the Playback Window, VIEW SPD MASTERS view. In this view it is also
            possible to activate/deactivate the Speed Master, to set the Speed Master running or halted and to set the Speed Master BPM and
            Rate Divisor.
        </p>
        <p>
            Speed Masters are set to Per Head Timing by default. They can be set between Per Step and Per Head timing in the Playback
            Window. If either the FX or the Speed Master is set to Per Head timing then Per Head timing is used.
        </p>
        <p>
            Using Speed Masters it is now possible to resync FX back to the start of the FX. Press CTRL and any of the TAP shortcut buttons
            above.
        </p>
        <p>
            Speed Masters can be linked together so that adjacent Speed Masters are linked to the previous Speed Masters. This enables, for
            example, a single Tap To Time button for multiple Speed Masters. In Playback, VIEW SPD MASTER, set the Linked field to link to
            the previous Speed Master.
        </p>
        <div class="section">
            #### Cue Stack is a Speed Master
            <p>
                In the Cue Stack window, View Options in the Function tab a Cue Stack can be set to be a Speed Master. This has a similar
                effect to the other Master options in this tab - they completely override the normal operation of the Cue Stack.
            </p>
            <p>The FLASH button is used to Tap to Time.</p>
            <p>
                The GO button activates the Speed Master and sets it running so it takes speed control of all Cue Stacks set to use that
                Speed Master.
            </p>
            <p>
                The PAUSE button halts the Speed Master. The PAUSE button can then be used to manually bump the chases and FX controlled by
                the Speed Master.
            </p>
            <p>RELEASE disables the Speed Master so it no longer controls any Cue Stacks. SHIFT + FLASH also disables the Speed Master.</p>
            <p>SHIFT + FLASH disables the Speed Master.</p>
            <p>SHIFT + GO doubles the rate divisor.</p>
            <p>SHIFT + PAUSE halves the rate divisor.</p>
            <p>CTRL + FLASH resyncs all the FX controlled by the Speed Master.</p>
            <p>
                Lowering the fader slows the speed from the tapped speed down to halted. Raising the fader to full returns to the last
                tapped speed.
            </p>
            <p>
                Normally only one Cue Stack per Speed Master is required, but it is permitted to have more than one Cue Stack set to the
                same Speed Master - for example on different Pages - they will just duplicate each other.
            </p>
            <p>
                When changing pages the Speed Master will never hold over - if you need the Speed Master on multiple pages then either make
                it a Default Playback or program a Cue Stack on each page.
            </p>
            <p>
                If the Cue Stack option Activate on Page Change is set then the Speed Master will enable when changing to that page. If the
                Cue Stack option Release on Page Change is set then the Speed master will disable when changing from that page.
            </p>
        </div>
        <div class="section">
            #### Speed Master Fader Mode
            <p>
                On Stadium motorised consoles there is a Speed Master fader mode. Select the fader mode in the normal way using SHIFT + NEXT
                PAGE, and then select Speed Masters.
            </p>
            <p>The FLASH button is used to Tap to Time.</p>
            <p>
                The GO button enables the Speed Master and sets it running so it takes speed control of all Cue Stacks set to use that Speed
                Master. If the Speed Master is already enabled then pressing GO returns to the previous time set by Tap to Time.
            </p>
            <p>
                The PAUSE button halts the Speed Master. The PAUSE button can then be used to manually bump the chases and FX controlled by
                the Speed Master.
            </p>
            <p>SHIFT + FLASH disables the Speed Master so it no longer controls any Cue Stacks.</p>
            <p>SHIFT + GO doubles the rate divisor.</p>
            <p>SHIFT + PAUSE halves the rate divisor.</p>
            <p>CTRL + FLASH resyncs all the FX controlled by the Speed Master.</p>
            <p>
                Lowering the fader slows the speed from the tapped speed down to halted. Raising the fader to full returns to the last
                tapped speed.
            </p>
        </div>
    </div>
</div>
<div class="section">
    ## 19.13.&nbsp;Busking Master
    <p>
        It is possible in the Setup Window to set the manual crossfade fader to be a "busking rate" sub-master from 0 seconds to 10 seconds.
        The rate is shown in the bottom right of the Status Display. The time is applied to selection of palettes and intensities. When FAN
        mode is selected the change is applied in turn across each of the selected heads.
    </p>
</div>
<div class="section">
    ## 19.14.&nbsp;Programmer Master
    <p>
        It is possible to make a Playback into a Programmer Master. Record an empty Cue onto a Playback and then set the Cue Stack option,
        Function, Programmer Master.
    </p>
    <p>
        When the Playback is activated by pressing the GO button then the fader level becomes the Programmer level. Releasing the fader
        level causes the Programmer level to go back to 100%.
    </p>
    <p>When the fader is less set to less than 100%, the FLASH button can be used to bump in the Programmer at 100%.</p>
    <p>The GO button and PAUSE buttons are used to swap Palette values in the Programmer when the Programmer has mixed palette values.</p>
    <p>
        For instance if some heads are set to use the RED palette in the programmer and others using the GREEN palette then pressing GO will
        swap all the heads using RED palette to use GREEN and all the heads using GREEN palette to use RED.
    </p>
    <p>If there are more than 2 colour Palettes in use in the Programmer, then the colours rotate around all the different Palettes.</p>
    <p>Odd/Even can be used to easily set up an initial look of 2 or more colour palettes.</p>
    <p>Currently only one Programmer Master can be active at a time.</p>
</div>
<div class="section">
    ## 19.15.&nbsp;Live Macro
    <p>
        From v1.9.2.3 MagicQ supports a feature to enable a "Live Macro" which can be used to preload playback changes before excuting them
        all at once with the BIG GO button.
    </p>
    <p>
        Press CTRL + BIG GO to start recording the Live Macro. The status bar will show light blue and indicate REC LIVE whilst recording
        the Live Macro. When all the required buttons have been pressed and faders moved then press CTRL + BIG GO again to stop recording
        the Live Macro.
    </p>
    <p>
        When a Live Macro has been recorded then the status bar indicates LIVE MACRO and the BIG GO button flashes fast to indicate it is
        armed, ready to go. When armed, pressing the BIG GO button will execute the Live Macro, regardless of any other button function set
        for the BIG GO button.
    </p>
    <p>
        The Live Macro is always replayed with immediate timing regardless of the timing used to record the macro - this enables
        simultaneous playback of multiple items which would not be possible through manual operation.
    </p>
    <p>
        A Live Macro can be re-recorded before it has been executed. Simply press CTRL + BIG GO to re-record the Live Macro and follow the
        steps above.
    </p>
    <p>When armed, pressing BACKSPACE will cancel the Live Macro and the BIG GO button returns to its normal function.</p>
    <p>
        The BIG GO can be set to always be a LIVE MACRO button, avoiding the need to use CTRL when recording the Live Macro. In Setup, View
        Settings, Playback, set Crossfade Button function to Live Macro. Note that even when this function is set, CTRL + BIG GO can be used
        to re-record the Live Macto.
    </p>
    <p>
        The Live Macro is recorded into the Macro Window at the highest free macro and is named Live Macro. It can be viewed and steps can
        be edited as for normal key macros. It is automatically deleted when the Live Macro has been executed. Since it is a live fucntion,
        it is not saved to show files and hence is not preserved over a reset or shut down.
    </p>
    <p>
        The Live Macro is primarily intended for recording playback buttons. It is possible to record programmer buttons and even presses in
        Windows, but the scope is limited since the playback/programmer buttons are not executed as they are being recorded (unlike normal
        key macros) and hence there is no feedback of the pressed items.
    </p>
</div>
<div class="section">
    ## 19.16.&nbsp;Prog Store
    <p>
        The MagicQ Programmer supports a Prog Store for live operation (busking). This is a store of 12 Programmer states that can be
        quickly stored and recalled with single button presses. The levels, times and FX in the Programmer are all stored. The stores can be
        included (without times) or activated (with times), enabling the operator to adjust between snapping and fading effects in real
        time.
    </p>
    <p>
        Hidden from the user, MagicQ uses the Cue Store to store the Prog States as Cues - starting from the last Cue in the Cue Store, and
        naming them as Prog Store1 to Prog Store10. The Prog Store is saved into the show file, so the Prog Store survives a rest or power
        down.
    </p>
    <p>
        The Prog Store can be accessed through SPECIAL buttons in the Exec Window. In the Exec Window, press ASSIGN SPECIAL and select PROG
        STORE. For each Prog Store item there are three possible actions - Record, Include and Activate. Each action is available for each
        of the 10 Prog Stores.
    </p>
    <p>
        Pressing a REC PS button (e.g. REC PS1) records the current programmer state to that Prog Store. The button is shown active when
        programmed.
    </p>
    <p>
        Pressing an INC PS button (e.g. INC PS1) includes the specified Prog Store back into the Programmer immediately without times. The
        Programmer is automatically cleared before including - so the Programmer will contain only the contents of the specified Prog Store.
        Pressing a Inc PS button on a Prog Store that has not been recorded has no effect.
    </p>
    <p>
        Pressing a REC PS button on an already recorded Prog Store overwrites the existing Prog Store. To modify an existing Prog Store,
        press the INC PS button, modify it, then press the REC PS button.
    </p>
    <p>Pressing a REC PS button when the programmer is empty (cleared) causes the specified Prog Store to be removed.</p>
    <p>
        Pressing an ACT PS button activates and releases that Prog Store as a Cue with any times that were originally used in the
        programmer. If this Prog Store was the one active in the Programmer than the Programmer is cleared so that the Prog Store is now
        running as a Cue without the Programmer. The Prog Store can be activated and releases as a Cue any time until the Prog Store item is
        removed (by recording it again with the Programmer empty).
    </p>
    <p>
        When pressing an ACT PS button, if there are any overlapping Prog Stores active then they are released. Overlapping means that the
        two Prog Stores control one or more of the same channels.
    </p>
    <p>
        Pressing an INC PS button for a Prog Store that is active as a Cue also release the Cue so that control of that Prog Store will now
        be entirely from the Programmer. MagicQ will also release any other overlapping Prog Stores that are currently active.
    </p>
    <p>
        A Prog Store mode is supported on the 4x3 Execute Buttons on Stadium consoles - this enables easy access to the Prog Store function
        without needing to assign the Special buttons in the Exec window. The Prog Store mode shows 4 Prog Store items at a time each with a
        REC, INC and ACT button. Paging can be used to access all 12 Prog Stores.
    </p>
</div>
