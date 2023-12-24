---
id: cue-stacks
title: Chapter 15. Cue Stacks
sidebar_position: 15
---

# Chapter&nbsp;15.&nbsp;Cue Stacks
<p>
    MagicQ stores sequence of Cues as Cue Stacks. Cue Stacks keep track of the order of the cues and the options for how they are played
    back. A Cue Stack may have only one Cue associated with it or may have a whole list of Cues.
</p>
<p>
    When you record a Cue onto a Playback, MagicQ automatically generates a Cue Stack. MagicQ adds the Cue Stack to the Stack Store. The
    Stack Store is a list of all Cue Stacks stored in the show. The Cue Stack will be given a unique Cue Stack Number (e.g. CS1). This
    enables the Cue Stack to be re-used in future programming.
</p>
<p>
    If a Playback already has a Cue Stack stored on it, then by default the new Cue will be added to the end of the Cue Stack. However if
    you key in a Cue Id before pressing RECORD then the Cue will be inserted into the Cue Stack in the appropriate place.
</p>
<p>
    To view a Cue Stack, press the SELECT button of the Playback and then CUE STACK to open the Cue Stack Window. Alternatively double click
    the SELECT button of the Playback.
</p>
<div class="section">
    ## 15.1.&nbsp;Cue Stack Window
    <p>
        The Cue Stack Window shows details of all the Cues in the Cue Stack including their names, numbers and timing information. The
        fields can be edited in a similar way to the Prog Window and Patch Windows.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/cuestackcues.png" alt="image" />
        </span>
    </p>
    <p>
        The status field indicates the current status of the Cue in the Cue Stack. If the Cue is active (i.e. it is in the process of
        execution) then the field indicates a % complete and the entire cue is coloured red.
    </p>
    <p>
        Each Cue within a Cue Stack has a Cue Id (e.g. 1.0). This value is specific to the Cue Stack and is used for tying up Cues with a
        script in theatre style playback. It is distinct from the Cue Number (e.g. Q1) used to identify the Cue in the Cue Store.
    </p>
    <p>
        Each Cue also has some text associated with it. This text enables easy recognition of the contents of the Cue when the Cue Stack is
        played back. This text is displayed above the main Playbacks. It can also be displayed on the displays above the Wing Playbacks.
    </p>
    <p>
        Soft button A can be used to select different views. The different view modes show the columns in different orders. View modes
        include Default, Info, Macro and Tracking and Media.
    </p>
    <p>
        It is possible to open two cue stack windows on MagicQ systems. To open a second cue stack window using CTRL + Cue Stack window
        button. The Choose Cue stack soft button inside the window can be used to lock a cue stack window to a particular stack.
    </p>
</div>
<div class="section">
    ## 15.2.&nbsp;Chase Timing
    <p>
        When you record more than one Cue onto a Cue Stack, the Cue Stack behaviour kicks in to control the transition from one Cue to
        another. By default the Cue Stack operates like a chase - i.e. each Cue is executed in turn, with timing being handled by a Chase
        Speed for the whole Cue Stack.
    </p>
    <p>
        The timing mode can be changed, so that the Cues play back in a theatre style using the GO / STOP buttons, by pressing the CUE
        TIMING and CHASE TIMING soft buttons in the Cue Stack View Options Window to modify the timing mode.
    </p>
    <p>
        In Chase Timing mode it is possible to manually change the Fade and Delay times by pressing Cue Stack, View Options, Chase Times.
        The delay/crossfade is determined by whichever was set last - the specific delay times or the crossfade.
    </p>
</div>
<div class="section">
    ## 15.3.&nbsp;Cue Timing
    <p>
        When using Cue Timing, the timing of each cue is determined by individual Wait, Delay and Fade times for each Cue in the Cue Stack.
        The MagicQ can execute multiple Cues at one time - for example a Cue Stack could have one Cue that fades in MAC500s in green whilst
        another Cue fades in HPEs in red.
    </p>
    <p>
        The Wait time affects when execution of the Cue is started. The Delay and Fade times affect how each individual Cue is executed. The
        Wait time can be set to "Follow" - in this case the Cue is executed when the last Cue finishes - i.e. Cues are executed
        sequentially.
    </p>
    <p>
        Each Cue has a Next Cue - by default this is set up to be the following Cue in the Cue Stack. You can change the Next Cue to be any
        of the Cues in the Cue Stack. This enables loops and sequences to be set up.
    </p>
    <p>The Next Cue for the last Cue in the Cue Stack defaults to being the first Cue in the Cue Stack.</p>
    <div class="section">
        ### 15.3.1.&nbsp;Cue Timing Example
        <p>
            To illustrate the above Cue Timing consider a Cue Stack with three Cues. When the Cue Stack starts executing it executes the
            first Cue using its Delay and Fade times.
        </p>
        <p>
            As soon as the first Cue has been started (regardless of whether the first Cue is in a Delay, Fade or Complete stage) the next
            Cue in the Cue Stack will be examined to determined its Wait time.
        </p>
        <p>
            If the Halt field on the next Cue is set, then the Cue Stack waits for Go to be pressed before starting the next Cue – otherwise
            it executes the next Cue using its Fade and Delay time. The picture below shows 3 Cues each set to follow the previous Cue but
            with "Halt" set to "Yes".
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/cuestackcues.png" alt="image" />
            </span>
        </p>
        <p>
            If the Wait time on the next Cue is set to "Follow" then the Cue Stack will wait until the first Cue has completely finished
            fading (i.e. all channels have reached their final values) before starting the next Cue.
        </p>
        <p>
            If the Wait time on the next Cue is set to a time then the Cue Stack waits that time before executing the next Cue. This time is
            completely independent of the first cue – the first cue may still be in Delay or Fade and will continue until the Fade
            completes.
        </p>
        <p>
            If you enter a wait time in the Wait field MagicQ automatically changes the Halt field to No so that the Cue executes after the
            specified Wait time. The picture below shows Cues 2.00 and 3.00 automatically running 1 second and 2 seconds after Cue 1.00.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/cuestackwaittimes.png" alt="image" />
            </span>
        </p>
    </div>
    <div class="section">
        ### 15.3.2.&nbsp;The Halt field
        <p>
            This field determines whether MagicQ waits for the user to press GO before executing the next Cue. It can also be use to setup
            Cue triggers from the remote interface, Scheduled events or timecode.
        </p>
        <p>
            Pressing ENTER only toggles between Yes and No. To get the advanced options, such as Timecode, Scheduled or Remote either double
            click the field or press SHIFT + ENTER.
        </p>
        <p>
            The options "Yes (Ignore TC)" and "No (Ignore TC)" are the same as "Yes" and "No" except that when these Cues execute the
            incoming timecode will be ignored.
        </p>
    </div>
    <div class="section">
        ### 15.3.3.&nbsp;Cue Delay and Fade times
        <p>
            The Delay and Fade times shown in the Cue Stack Window are properties of the Cue whilst the Wait time is a property of the Cue
            Stack. Modifying the Delay and Fade times of the Cue may affect other Cue Stacks that use the Cue.
        </p>
        <p>
            The Delay and Fade time fields show the maximum delay and fade times used by any channel within the Cue – so giving a summary of
            the maximum delay and fade of the Cue. To view the actual times of the Cue move the cursor to the Delay or Fade field and press
            the View Cue soft button. This opens the Cue Window for the selected Cue, automatically showing the Cue Times.
        </p>
        <p>
            Delay and fade times can be entered directly in the Cue Stack Window – note however that this will set the times for all
            attributes. If you wish to change just the times for Position, Beam or Colour then these should be set up in the Cue Window,
            Simple View for general times or Cue Window, Advanced View for channel specific times.
        </p>
        <p>
            Split intensity in/out times can be entered into the Cue Stack Window in the Delay and Fade fields using /. For example, 2/3
            entered in the Fade field will fade the
            <span class="emphasis"><em>current</em></span>
            cue in over 2 seconds, and will fade the
            <span class="emphasis"><em>previous</em></span>
            cue out over 3 seconds. Only intensities times are affected – Beam, Colour and Position times remain at their current values.
        </p>
        <p>
            When executing Cues, MagicQ will primarily use the specific delay and fade times entered in the Advanced View, of the Cue
            Window. If no times are specified, then the general times used in the Simple View will be used.
        </p>
        <p>
            Times can be added in the Advanced View using the keypad and can be removed using the REMOVE button. In the Advanced View, the
            times shown are fade times, except where delay times have been set up, then times are shown as delay/fade.
        </p>
        <p>Times can also be set up for the selected heads in the Simple View.</p>
        <p>
            In the Cue Stack and Cue Windows delay and fade times with a ‘&gt;’ symbol at the end indicate when there are advanced times set
            for the Cue.
        </p>
    </div>
</div>
<div class="section">
    ## 15.4.&nbsp;Tracking
    <p>
        By default, MagicQ works in a similar way to traditional lighting consoles, in that what is in the programmer is recorded into the
        Cue. This is a "no nonsense" mode where you get what you expect recorded into your Cues.
    </p>
    <p>
        If you program just a FX chase on pan and tilt into a Cue, then that is what you get. If you program a complete look for a head
        including all the attributes, then that is what you get. Looking at a Cue in the Cue Window gives you the full picture.
    </p>
    <p>
        In a Cue Stack, you can choose for each Cue whether the Playback continues to control HTP and LTP channels used earlier in the Cue
        Stack but not stored in the current Cue. In "Live (Chase)" the LTP channels are tracked, but HTP channels (Intensities) are not.
    </p>
    <p>
        Traditionally lighting consoles used tracking mode to reduce show storage by only recording changes into each Cue. This can be
        confusing as when you jump around in Cue Stacks they may not play back as they were programmed. Busking live shows can be
        particularly difficult, as it can be more difficult to predict what is going to happen.
    </p>
    <p>
        MagicQ show files do not require a significant amount of space compared to the storage space available so show size is not a major
        concern. MagicQ has powerful editing modes that enable changes to be made to multiple Cues simultaneously – overcoming any benefits
        tracking mode might have for storing Cues in separate parts.
    </p>
    <p>
        MagicQ supports a tracking mode, which can be turned on through View Settings in the Setup Window. We recommend that users
        unfamiliar with tracking use MagicQ in its default, "non tracking" mode.
    </p>
    <div class="section">
        ### 15.4.1.&nbsp;Tracking on MagicQ
        <p>
            The easiest way to change between tracking and non tracking is to change the "Programming Mode" by pressing soft button B in the
            Setup Window and choosing one of the modes. For non tracking select Live (Chase) or Theatre Non Tracking. All other modes are
            tracking.
        </p>
        <p>
            Changing the "Programming Mode" affects the "Programmer Tracking" option in the Setup Window and also the defaults for tracking
            ("Track","Zero old HTP" , "Zero old FX", "Rel old chans") on the Cues Stack options. The "Programmer Tracking" option by itself
            determines how Cues are recorded - it does not affect how they are played back.
        </p>
        <p>
            When programmer tracking mode is off, then the entire contents of the programmer is recorded into Cues regardless of whether
            attributes have been change since the last Cue was recorded.
        </p>
        <p>
            When programmer tracking mode is on, then only attributes that have been modified since the Cue was recorded are stored into the
            new Cue. Attributes are determined as modified if their value had been changed using an encoder, using keypad entry, using a
            range button, using a palette or by a locate head. Note that modifying an attribute to a new value and then returning it to its
            old value counts as modified.
        </p>
        <p>
            Whilst in programmer tracking mode it is possible to force a record of the whole of the programmer by selecting the ENTIRE STATE
            record option. Record options are configured by pressing SHIFT and RECORD; whereupon the Record Options window is opened.
            Pressing any Window select button hides the display option and returns to the appropriate Window.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/cuestacktrack.png" alt="image" />
            </span>
        </p>
        <p>
            As a Cue Stack is executed, it keeps track of channels that have been used in previous Cues but are not used in the current Cue.
            How these channels are handled depends on the following settings on each Cue in the Cue Stack – there are three options which
            are shown in the Track field.
        </p>
        <p>H Track HTP (Defaults Yes in tracking mode)</p>
        <p>L Track LTP (Defaults Yes in all modes)</p>
        <p>F Track FX (Defaults Yes in tracking mode)</p>
        <p>
            So, to get a Cue Stack recorded in tracking mode to track all channel state during playback, ensure that all the Cue Stack steps
            have HLF set in the Track field.
        </p>
        <p>
            If Track LTP is not set then LTP channels that were used in previous steps in the Cue Stack but not in the current step are
            released with the release time of the Cue Stack. If Track HTP is not set then HTP channels that were used in previous steps in
            the Cue Stack but not in the current step are faded out using the Intensity fade out time of that Cue step.
        </p>
        <p>
            In addition there is an option on the Cue Stack that affects how tracking works for jumps and going backwards up the Cue Stack.
            If "recalculate state on jumps" is set, then MagicQ recalculates the entire state of the Cue Stack when you jump to a new Cue
            using "Goto Cue" or if you press the Pause button to go backwards up the Cue Stack.
        </p>
        <p>
            When tracking Duplicated Elements, if a Cue has Duplicated element 1 but not other elements, then any other elements that were
            tracking are removed. This ensures it is possible to go from reduced elements back to control of all Duplicted elements.
        </p>
    </div>
    <div class="section">
        ### 15.4.2.&nbsp;Viewing Cue Data and Tracking Data
        <p>
            The Cue Window shows the Cue data for the current Cue on the selected Playback. The Cue Window, has three views, View Levels,
            View Times and View FX just like the Programmer Window.
        </p>
        <p>
            When looking at a Cue Stack in the Cue Stack Window it is possible to go directly to the Cue Window by placing the cursor on the
            required Cue and pressing the View Cue soft button. If the field the cursor is on is a timing field then the Cue Window will
            open to show View Times, otherwise it will open to show View Levels.
        </p>
        <p>
            It is possible to view Cue data for different Cues in a Cue Stack by pressing the PREV CUE and NEXT CUE soft buttons. When a Cue
            is examined that is not the current Cue on the selected Playback, the Cue Window becomes locked to that Cue. Press the UNLOCK
            WINDOW soft button to return to viewing the current Cue.
        </p>
        <p>
            The Cue Window can also be used to preview Cues when in tracking modes – there is a View Tracking soft button. When this option
            is on the Window shows all of the values that are tracking from previous Cues as well as the data in the selected Cue. The
            tracked data is shown in dark colour whereas the data from the selected Cue is shown in active colours.
        </p>
        <p>
            When running a Cue Stack it is possible to determine which values have been tracked through the Cue Stack by selecting "View Cue
            Ids" in the Outputs Window. This shows which playback and which Cue on that playback is controlling the outputs. Thus, when
            values are tracking through a Cue Stack the Outputs Window will show the Cue that originated that value.
        </p>
    </div>
    <div class="section">
        ### 15.4.3.&nbsp;Tracking out FX
        <p>All FX can be tracked out using the Cue Track field in the Cue Stack - remove the "F" from the Cue Track field.</p>
        <p>
            FX in Cues can be tracked out by setting them as "Track Out" - page right to the "Track Out" field in the Cue, View FX and
            Programmer, View FX views.
        </p>
        <p>
            When a Cue executes a FX with "Track Out" set it removes the FX for all the channels in this FX from the playback. The
            parameters of a "Track Out" FX are ignored - except for fade out times - the FX will continue to run using the parameters it was
            using before until the fade out completes. The FX will fade out using the FX Out time in the View Times view unless the "Fade
            Out" field in the FX is changed from "Default" to a specific time.
        </p>
        <p>
            The "Track Out" FX do not need to exactly match the original FX - but it would be normal to copy the original FX and set it to
            "Track Out" to ensure that all the channels from the original FX are tracked out.
        </p>
        <p>
            It is possible to have both "Track Out" FX for an old FX and at the same time new FX for the same channel in a Cue provided
            there some of the heads from the old FX are not used in the new FX. Channels from the new FX will ignore the "Track Out" for the
            old FX and will crossfade from the old FX as per previous software.
        </p>
        <p>Track Out will work for both normal FX and Group FX.</p>
    </div>
    <div class="section">
        ### 15.4.4.&nbsp;Copying Cues in tracking mode
        <p>
            When in tracking mode, performing an unlinked copy of a Cue in a Cue Stack now copies the entire state of the Cue, not just the
            specific cue values. When copying multiple Cues from one Cue Stack to another Cue Stack, the first Cue will be copied entire
            state with the following cues being just the changes.
        </p>
        <p>If Cues are copied linked in tracking mode then they will always be just the change values not the entire state.</p>
        <p>
            When using Theatre Tracking mode and Hog II Warp mode, MagicQ defaults the Cue Storage option "Copy mode (unlinked/linked) to
            "unlinked".
        </p>
    </div>
    <div class="section">
        ### 15.4.5.&nbsp;Blocking / Unblocking Cues
        <p>It is possible to block and unblock Cues from the Cue Stack Window and from the Cue Window through soft buttons.</p>
        <p>
            Blocking a Cue has the effect of adding to that Cue all the state information that would track through into that Cue if the Cue
            Stack was executed up to and including that Cue. When a Cue is blocked it becomes a hard Cue – i.e. if edits are made to
            previous Cues then the edits will not affect the blocked Cue.
        </p>
        <p>
            Unblocking a Cue has the effect of removing from the Cue all the state information that would track through into that Cue if the
            Cue Stack was executed up to and including that Cue. When a Cue is unblocked it removes hard values in the Cue from the Cue that
            duplicate tracked values – therefore it enables values to track through from where they were first used.
        </p>
        <p>
            Unblocking and blocking Cues in a Cue Stack does not affect the appearance of the Cues and Cues Stacks when the Cue Stack is
            played back – it simply affects where the data is stored and what effect an edit will have on a Cue.
        </p>
        <p>Multiple Cues can be blocked / unblocked in the Cue Stack Window by selecting a range using SHIFT and the cursor keys.</p>
    </div>
</div>
<div class="section">
    ## 15.5.&nbsp;Cue Only
    <p>
        The "Cue Only" function in the Cue Stack Window can be used to mark a Cue as a temporary change to the lighting state before
        continuing the tracked state from the following Cue. The Cue Only field is on the right hand side of the Cue Stack Window (page
        right) and is only relevant when using tracking mode.
    </p>
    <p>
        MagicQ enables one or more Cues to be marked as Cue Only – when MagicQ moves on to the next Cue which is not set to "Cue Only" then
        it reverts to tracking the Cue Stack from before the "Cue Only" cues.
    </p>
    <p>
        Note that sequential Cues marked "Cue Only" will each be based on the state previous to the first "Cue Only" Cue with the additions
        of the specific Cue. To track changes through a sequence of "Cue Only" Cues, record each Cue using "Entire State" to capture the
        entire programmer contents in to each "Cue Only" Cue.
    </p>
</div>
<div class="section">
    ## 15.6.&nbsp;Mark Cues
    <p>
        Mark Cues are special cues that are used to pre-load LTP values before the following Cue is executed thus ensuring that, for
        instance, moving heads are in the correct position before the Cue executes. Note that Mark Cues only take effect if the
        corresponding head has intensity set to 0 – otherwise the change would be noticeable.
    </p>
    <p>
        The Mark Cue only affects LTP values for heads controlled by the Cue Stack which are currently at zero intensity. If these heads are
        used in the next Cue then their value will be faded to the value of the next Cue. By default the fade is set to 3 seconds but this
        can be modified as required. Note that attributes that are specified as Instant in the personality file will snap to the new value.
    </p>
    <p>The Mark Cue executes as soon as the previous Cue has completed execution.</p>
    <p>
        In the Cue Stack Window press the Mark Cue soft button insert a Mark Cue before the Cue which the cursor is currently on.
        Alternatively enter a Cue Id and press Mark Cue to insert a mark before the specified Cue Id.
    </p>
    <p>
        An entire Cue Stack can be configured to automatically perform the function of marking all Cues - set the Move When Dark option in
        View Options in the Cue Stack Options.
    </p>
    <p>The time taken for the Move When Dark is specified in Setup, View Settings, Cue Storage, Default mark/move when dark time.</p>
    <p>
        When using Marking and Move When Dark attributes of moving lights will be marked even if they have not been previously used in the
        Cue Stack. This result is that when a Mark Cue is executed in a Cue Stack, MagicQ will take control of the parameters used in the
        Marked Cue from other Cue Stacks even though the Cue is not yet executed.
    </p>
</div>
<div class="section">
    ## 15.7.&nbsp;The Cue Store and Cue Stack Store
    <p>
        MagicQ stores Cues and Cue Stacks in the Cue Store and Cue Stack Store respectively. Since you can program Cues and Cue Stacks
        directly onto playbacks, it is possible to program complete shows without referring to the Cue Store or the Cue Stack Store.
    </p>
    <p>
        However, sometimes you may wish to build up a library of Cues or Cue Stacks that are not assigned to playbacks. You might then
        assign them to playbacks later, e.g. during a technical rehearsal.
    </p>
    <div class="section">
        ### 15.7.1.&nbsp;Cue Store
        <p>
            To record a Cue into the Cue Store simply set up the required look in the programmer, open the Cue Store Window, press RECORD
            and press an empty Cue in the Cue Store Window.
        </p>
        <p>
            You can test programmed Cues in the Cue Store by pressing the appropriate Cue. MagicQ searches for an unused playback (from the
            last playback down) to test the Cue on. Pressing the Cue again removes the Cue from the playback.
        </p>
        <p>
            You can restart a Cue that is being tested by pressing the "Retest" soft button. Holding CTRL and selecting a Cue also restarts
            the Cue.
        </p>
        <p>
            You can view the contents of a programmed Cue by moving the cursor to the required Cue in the Cue Store Window and pressing the
            View Cue soft button. This opens the Cue Window locked to the specified Cue. Pressing the Unlock Cue button returns the Cue
            Window to monitoring the current Cue on the currently selected playback.
        </p>
        <p>
            Use the REMOVE UNUSED soft button to remove Cues from the show that are not being used. Cues that are assigned to Cue Stacks or
            used in the Execute window will not be removed. From 1.9.2.2 MagicQ also checks for usage in Automations.
        </p>
    </div>
    <div class="section">
        ### 15.7.2.&nbsp;Stack Store
        <p>
            To record a Cue into a Cue Stack in the Cue Stack Store Window set up the look as above, open the Cue Store Window, press RECORD
            and press the Cue Stack you wish to record the Cue into. If the Cue stack is empty then a new Cue Stack will be generated.
            Otherwise the Cue will be added to the existing Cue Stack, either at the specified Cue Id, or at the end of the Cue Stack.
        </p>
        <p>
            You can test programmed Cue Stacks in the Cue Stack Store by pressing the appropriate Cue Stack. MagicQ searches for an unused
            playback (from the last playback down) to test the Cue on. Pressing the Cue Stack again removes the Cue or Cue Stack from the
            playback.
        </p>
        <p>
            You can restart a Cue Stack that is being tested by pressing the "Retest" soft button. Holding CTRL and selecting a Cue Stack
            also restarts the Cue Stack.
        </p>
        <p>
            You can view the contents of a programmed Cue Stack by moving the cursor to the required Cue Stack in the Cue Stack Store Window
            and pressing the View Stack soft button. This opens the Cue Stack Window locked to the specified Cue Stack. Pressing the Unlock
            Stack button returns the Cue Stack Window to monitoring the Cue Stack on the currently selected playback.
        </p>
        <p>
            Note that the Cue Id used as a sequence number in the Cue Stack (e.g. 1.00) is different to the QId used in the Cue Store (e.g.
            Q5). The Cue Id is the sequence number within the Cue Stack wheras the QId is the reference number in the Cue Store.
        </p>
        <p>
            Some users prefer to hide the QId and only use and view Cue Ids – use the Setup, Cue Storage Settings – "Hide Cue Store Ids
            (Qxxx). When this option is set the Cue Stack window and Cue Window only either show the Cue Ids from within the Cue Stack –
            they do not show the Q ids from the Cue Store.
        </p>
        <p>Normally each step in a Cue Stack has a Cue assigned to it.</p>
        <p>
            When importing or exporting shows sometimes Cue Stacks will have steps that do not have a Cue assigned to them. The CREATE CUES
            soft button forces MagicQ to create Cues (with no channels) for any steps in Cue Stacks that have no Cue assigned to them.
        </p>
        <p>
            Use the REMOVE UNUSED soft button to remove Cues Stacks from the show that are not being used. Cue Stacks that are assigned to
            Playbacks or used in the Execute window or on Master faders will not be removed. From 1.9.2.2 MagicQ also checks for usage in
            Automations, Cue Stack macros and TC Tracks.
        </p>
    </div>
</div>
<div class="section">
    ## 15.8.&nbsp;Assigning Cues and Cue Stacks
    <p>Cues and Cue Stacks can be assigned to Playbacks at any time.</p>
    <p>
        To assign a Cue, open the Cue Store Window, press the MOVE button, select a Cue, and then select a playback to assign the Cue to.
        You can assign to real playbacks or to playbacks in the Playbacks Window. You can assign to a specific Cue Id in a Cue Stack on a
        playback, by keying in a Cue Id before you select the playback.
    </p>
    <p>
        To assign a Cue Stack, open the Cue Stack Store Window, press the MOVE button, select a Cue Stack, and then select an empty playback
        to assign the Cue to. You can assign to real playbacks or to playbacks in the Playbacks Window.
    </p>
    <p>
        Multiple Cues and Cue Stacks can be assigned at a time, by using SHIFT or CTRL and the cursor keys to select multiple Cues and Cue
        Stacks in the appropriate window.
    </p>
</div>
<div class="section">
    ## 15.9.&nbsp;Copying and Moving Cues
    <p>
        Cues can be copied and moved within a Cue Stack using the standard move and copy procedures. For example, to move a cue, press COPY,
        select the source, then select the destination. To copy multiple cues, press and hold COPY, select multiple entries, release COPY
        and select the destination.
    </p>
    <p>
        When copying or moving within a Cue Stack, Cues the Cues are moved or copied before the destination Cue that you select. To copy or
        move onto the end of the Stack select "End" as the destination.
    </p>
    <p>
        Cues can be copied onto other Cue Stacks that are assigned to playbacks. Select the Cues in the Cue Stack window and then select a
        playback fader as the destination.
    </p>
    <p>Cues can also be copied using the keypad syntax COPY CUE. For example, to copy Cues 1 and 2 to Cue 5.</p>
    <p>COPY CUE 1 THRU 2 @ 5 ENTER</p>
    <p>Or to copy Cues 3 to 5 at the end of the Cue Stack:</p>
    <p>COPY CUE 3 THRU 5 @ ENTER</p>
    <p>
        By default when copying Cues MagicQ does not create new Cues - it simply makes another link to the existing Cue. The default can be
        changed in Setup, View Settings, Cue Storage, Copy mode to Linked, Unlinked, or Unlinked Entire State.
    </p>
    <p>
        To force MagicQ to create a new Cue press SHIFT and COPY and select Unlinked. To force record of entire state, press SHIFT COPY and
        select ENTIRE STATE.
    </p>
    <p>A copy options toolbar can be enabled from Setup, View Settings, Windows, Always Show Record Options = Yes.</p>
</div>
<div class="section">
    ## 15.10.&nbsp;Linked Cues
    <p>
        Cues that are used more than once in a Cue Stack or that are used in more than one Cue Stack are called Linked Cues. If you edit a
        linked cue it will affect all places where the Cue is used. The Cue Store Window shows where each cue is used.
    </p>
    <p>
        In Cue Stacks linked Cues are shown with a "L" in the Cue field. It is possible to unlink a Cue by moving to the Cue in the Cue
        Stack and pressing SHIFT and UNLINK CUE.
    </p>
    <p>
        If you wish to avoid creating linked Cues, then when copying Cues and Cue Stacks use SHIFT + COPY (copy unlinked) rather than COPY
        and select COPY UNLINKED.
    </p>
    <p>
        It is possible to link Cues in a Cue Stack to other Cues in the Cue Stack or to a Cue in the Cue Store. When the Cue at the cursor
        is not linked to any other Cues then SHIFT + LINK can be used to link the Cue.
    </p>
    <p>
        To link a Cue you put the cursor on the Cue(s) that you want replaced then press SHIFT LINK. Then press ENTER on the Cue that you
        want those Cues linked to.
    </p>
    <p>
        Alternatively type the ID of the Cue in the Cue Store on the command line of the Cue you want to link to then press SHIFT LINK. For
        example to link to Q2550 type 2550 and press SHIFT LINK. That step will then be linked to Q2250. It is possible to cursor select
        multiple Cues in the Cue Stack and then link them all to the same Cue.
    </p>
</div>
<div class="section">
    ## 15.11.&nbsp;Copying Cue Stacks
    <p>When Copying Cue Stacks MagicQ will create a new Cue Stack, but will only create new Cues when COPY UNLINKED is used.</p>
    <p>When copying Cue Stacks unlinked MagicQ takes into account linked Cues in the source Cue Stack.</p>
    <p>
        Any Linked Cues that are linked to other Cues outside of the source Cue Stack remain as Linked Cues. Any linked Cues that were only
        linked within the Source Cue Stack are copied to a new Cue, but all of these Cues in the new Cue Stack are Linked together.
    </p>
    <div class="section">
        ### 15.11.1.&nbsp;Selective copying of Cue Stacks
        <p>
            MagicQ supports the SELECTED ONLY option when copying Cues and Cue Stacks. Only the selected heads from the source Cues and Cue
            Stacks will be copied. If none of the selected heads are in a source Cue then an empty Cue will be generated.
        </p>
        <p>The Cues in Cue Stacks created using copying SELECTED ONLY will always be unlinked.</p>
    </div>
    <div class="section">
        ### 15.11.2.&nbsp;Creating a new Cue Stack for different heads
        <p>MagicQ can create a Cue Stack based on an old Cue Stack but using different heads.</p>
        <p>
            Press SHIFT + COPY and select the COPY TO SEL option. This creates a new Cue Stack with identical Cues to the original Cue Stack
            except that it uses the selected heads instead of the heads in the original Cue Stack. The new Cue Stack will not contain the
            heads from the old Cue Stack, unless they are part of the new selection.
        </p>
        <p>
            MagicQ will rotate around the heads from the existing Cue to provide data for the new heads - for example if the old Cue Stack
            had 4 heads and 8 heads are selected then heads 1 and 5 from the selection will both use data from the first head in the old Cue
            Stack.
        </p>
        <p>
            This option will work on Cue Stacks containing multiple head types, but the best conversion will occur when copying from one set
            of heads to another set of heads. In some situations it may be preferable to do a selective copy of the original Cue Stack to
            heads of only one type and then to use the COPY TO SEL option on that new Cue Stack.
        </p>
        <p>The Cues in Cue Stacks created using COPY TO SEL will always be unlinked.</p>
    </div>
</div>
<div class="section">
    ## 15.12.&nbsp;Removing Cues and Cue Stacks
    <p>
        Cues can be removed from a Cue Stack by opening the Cue Stack window, then pressing REMOVE and selecting the Cue you wish to remove
        by pressing in the "Status or Cue Id" field.
    </p>
    <p>
        It is also possible to remove a specific Cue from a Cue Stack using the keypad. Type a Cue Id on the keypad then press REMOVE and
        select the S button of the Playback you wish to remove the Cue from.
    </p>
    <p>To remove an entire Cue Stack from a Playback press REMOVE and hit the S button of the Playback. Press S button again to confirm.</p>
    <p>
        Note that the Cue Storage Setting in the Setup options determine whether the Cue and Cue Stack are removed from the Cue Store and
        Cue Stack Store as well.
    </p>
</div>
<div class="section">
    ## 15.13.&nbsp;Cue Stack Defaults
    <p>The default operation of Cue Stacks can be modified in the Defaults view of the Cue Stack Window.</p>
    <p>
        Defaults can be configured for all of the Cue Stack options including operation of the faders and buttons, chase defaults and the
        defaults for each Cue Stack step.
    </p>
    <p>
        Changing the Defaults does not change Cue Stacks and Cues which have already been recorded – it only changes the options for when
        new Cue Stacks and Cues are recorded.
    </p>
    <p>
        When inserting and adding Cues to a Cue Stack MagicQ by default derives the settings from the previous Cue in the Cue Stack. If the
        setting Setup, Cue Storage Settings, "Derive settings from previous Cue" is set to "No" then all new recorded Cues will use the
        default step settings.
    </p>
</div>
<div class="section">
    ## 15.14.&nbsp;Col Tags
    <p>
        MagicQ supports Col Tags on each of the Cue Stacks. Set Col Tags in the Cue Stack, Options, Function. When a Col Tag is set for a
        Cue Stack then that Col Tag is shown in the Playback legend above the Playback faders and buttons.
    </p>
    <p>
        The RGB LEDs on the MQ500 and Stadium Wing playbacks can be set to show the colour of the Col Tags - in Setup, View Settings, View
        Windows set Playback Col Tags Playback to Cue Stack.
    </p>
</div>
<div class="section">
    ## 15.15.&nbsp;Cue Stack Favourites
    <p>Cue Stack Favourites provide a way to quickly apply favourite settings to different types of Cue Stacks.</p>
    <p>Cue Stack Favourites include:</p>
    <div class="itemizedlist">
        <ul class="itemizedlist">
            <li class="listitem">Button, Fader, Encoder options</li>
            <li class="listitem">Activate / Release options</li>
            <li class="listitem">Cue Stack function</li>
            <li class="listitem">Advanced function (but not timecode or DJ)</li>
            <li class="listitem">Intensity, Pos, Col, Beam, FX Fade in times for single step Cue Stacks</li>
            <li class="listitem">Chase Timing/Cue Timing/Timecode (multi step Cue Stacks only)</li>
            <li class="listitem">Cue Stack Release time</li>
            <li class="listitem">Colour tag</li>
            <li class="listitem">Icon</li>
        </ul>
    </div>
    <p>
        In the Cue Stack window there is a new view with 100 favourites. Press VIEW OPTIONS (or click 3 times on the S button) and then
        press VIEW FAVOURITES.
    </p>
    <p>
        The settings of the current Cue Stack can be recorded onto a selected Favourite. The Favourite can then be applied to any Cue Stack.
    </p>
    <p>Favourites can be named, moved, copied and removed in a similar way to all other MagicQ items.</p>
    <p>Note that when applying to a Cue Stack with multiple steps fade times are not applied. Release times are applied in all cases.</p>
    <p>Icons are only applied if the Favourite has an Icon in it - otherwise the icon on the current Cue Stack is retained.</p>
    <p>
        Cue Stack Favourites are stored in the show file. They are also stored in the settings file when using SAVE SETTINGS and IMPORT
        SETTINGS.
    </p>
</div>
<div class="section">
    ## 15.16.&nbsp;Audio in Cue Stacks
    <p>
        MagicQ supports two methods of playing back audio files from a Cue Stack. The first is allocating a single audio file to a Cue
        Stack, which is started when the Cue Stack is activated and stops when the Cue Stack is released. This is good for if you have a
        particular song for a timecode Cue Stack and need to synchronise Cue playback to the audio file. The second method is to specify an
        audio file as part of a given Cue in a Cue Stack. This will play the audio file when the Cue is activated.
    </p>
    <p>
        Audio output is available direct from the jack port on the front of the MQ500 consoles, from rear of the MagicQ Pro 2014, and from
        the audio port when using MagicQ PC on Windows, Mac and Linux. MagicQ older Compact consoles and Pro2010 consoles do not have audio
        output ports.
    </p>
    <p>MagicQ will search for audio files in the show\audio folder.</p>
    <p>
        The
        <a class="ulink" href="#_timeline_editor" target="_top">Timeline Editor</a>
        gives a visual timeline of the audio file and Cue Stack information to allow Cue Stacks to be programmed along a visual timeline.
    </p>
    <div class="section">
        ### 15.16.1.&nbsp;Audio Cue Stack
        <p>
            To specify an audio file to play when a Cue Stack is activated, goto the Cue Stack options, select the Audio tab, and then
            select your track in the "Audio file" setting.
        </p>
        <p>
            The "Audio Play Mode" setting can be used to associate an audio file with a Cue Stack for use in the Timeline Editor, but to not
            actively play back from MagicQ. This is useful in the situation where an external system is playing back audio and providing a
            timecode input to MagicQ, but where the waveform is still visualised in the Timeline Editor window.
        </p>
        <p>
            If a Cue Stack has an audio file as well as timecode Cues, then MagicQ will make sure that the audio follows the timecode value
            for the Playback. Scrubbing the timecode value from an external source will make the audio file jump to the given time. Using
            the "Set Timecode" feature in MagicQ will similarly jump to the corresponding point in the audio file.
        </p>
    </div>
    <div class="section">
        ### 15.16.2.&nbsp;Audio FX Cues
        <p>MagicQ supports playback of audio files triggered from Cues within Cue Stacks.</p>
        <p>Use the "Audio" column in the Cue Stack window to specify the audio file to play when the corresponding Cue is triggered.</p>
        <p>
            Each playback supports play of one Cue audio file at a time. If a Cue is triggered with an audio file configured, then any audio
            playing from a previous Cue in the same Cue Stack will be stopped. Audio files playing from the Cue Stack setting will continue.
            Multiple playbacks can be used to play multiple sounds simultaneously.
        </p>
        <p>
            The Macro &amp; Audio fields support some special commands to stop, close, jump and set the gain level. ChamSys recommend using
            the Macro field for these commands.
        </p>
        <p>In the Macro field:</p>
        <div class="informaltable">
            <table class="informaltable" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                </colgroup>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>D &lt;Audio command&gt;</p></td>
                        <td align="left" valign="top">
                            <p>Audio Command, supported commands are stop, close, jump, dev, Param1,g (gain)</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Dstop</p></td>
                        <td align="left" valign="top"><p>Stops playing the file</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Dclose</p></td>
                        <td align="left" valign="top"><p>Stops playing the file and closes the audio port</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Djump</p></td>
                        <td align="left" valign="top">
                            <p>Jumps within the current audio file to the calculated position (timecode only)</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Ddev</p></td>
                        <td align="left" valign="top"><p>Changes to use output device d</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Dgain &lt;gain&gt;</p></td>
                        <td align="left" valign="top"><p>Changes audio gain on current playback</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Dgain &lt;playback&gt; , &lt;gain&gt;</p></td>
                        <td align="left" valign="top"><p>Changes audio gain on specified playback 1 to 202</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Dparam 1,&lt;g&gt;</p></td>
                        <td align="left" valign="top"><p>Changes gain level (volume) where g is value 0 to 100</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>In the Audio field:</p>
        <div class="informaltable">
            <table class="informaltable" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                </colgroup>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>filename.wav</p></td>
                        <td align="left" valign="top"><p>Plays filename.wav (also supports other file types)</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>stop</p></td>
                        <td align="left" valign="top"><p>Stops playing the file</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>close</p></td>
                        <td align="left" valign="top"><p>Stops playing the file and closes the audio port</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>jump</p></td>
                        <td align="left" valign="top">
                            <p>Jumps within the current audio file to the calculated position (timecode only)</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>dev</p></td>
                        <td align="left" valign="top"><p>Changes to use output device d</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>gain &lt;gain&gt;</p></td>
                        <td align="left" valign="top"><p>Changes audio gain on current playback</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top">
                            <p>
                                <span class="emphasis"><em>param 1,g</em></span>
                            </p>
                        </td>
                        <td align="left" valign="top">
                            <p>
                                <span class="emphasis"><em>Changes gain level (volume) where g is value 0 to 100</em></span>
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="section">
        ### 15.16.3.&nbsp;Audio Formats
        <p>
            MagicQ will decode a variety of both lossy and lossless audio file formats. This includes .wav, .ogg, .flac, .alac, .mp3 and
            .aac. When using .wav files, only 8 and 16 bit formats are supported. It will accept both mono and stereo formats and sample
            rates up to 96kHz and will internally resample the audio files configured in the show to 44.1kHz stereo when playing back.
        </p>
    </div>
    <div class="section">
        ### 15.16.4.&nbsp;Audio Volume
        <p>
            Audio files will initially play back at 100% volume from their files unless overridden by the audio field above. The master
            output volume from MagicQ can be configured in Setup, View Settings, Ports, Audio output volume.
        </p>
        <p>Cue Stack audio and Cue Audio will fade out when a Playback is released with a Release time configured.</p>
        <p>
            If a Playback is configured with the "Fader controls audio volume" setting, then the audio volume will also be multiplied by the
            fader level.
        </p>
    </div>
</div>
<div class="section">
    ## 15.17.&nbsp;Cue Stack Macros
    <p>
        Cue Stack macros enable control over other Cue Stacks from within Cue Stacks such as activation, release, go, stop, and setting
        level of other Cue Stacks. Macros are typed into the Macro field in the Cue Stack window (scroll to the right). Macros can affect
        multiple Cue Stacks on different Playbacks enabling complete shows to be driven from one master Cue Stack.
    </p>
    <p>Cue Stack macros take the following format:</p>
    <div class="informaltable">
        <table class="informaltable" cellpadding="4px">
            <colgroup>
                <col class="col_1" />
                <col class="col_2" />
            </colgroup>
            <tbody>
                <tr>
                    <td align="left" valign="top"><p>A &lt;Playback no&gt;</p></td>
                    <td align="left" valign="top"><p>Activate playback</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>A &lt;Playback no&gt; / &lt;Level&gt;</p></td>
                    <td align="left" valign="top"><p>Activate playback at level</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>A &lt;Playback no&gt; / &lt;Level&gt; / &lt;Fade time&gt;</p></td>
                    <td align="left" valign="top"><p>Activate playback at level with time</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>B &lt;Macro no&gt;</p></td>
                    <td align="left" valign="top"><p>Run macro (0 = stop all macros)</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>R &lt;Playback no&gt;</p></td>
                    <td align="left" valign="top"><p>Release playback (0 = release this playback)</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>R &lt;Playback no&gt; / &lt;Fade time&gt;</p></td>
                    <td align="left" valign="top"><p>Release playback with time</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>R1000</p></td>
                    <td align="left" valign="top"><p>Release All Holdover Playbacks</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>R999</p></td>
                    <td align="left" valign="top"><p>Release Holdover Cue Stack on this Playback</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>T &lt;Playback no&gt;</p></td>
                    <td align="left" valign="top"><p>Test playback (activate with level 100%)</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>T &lt;Playback no&gt; / &lt;Fade time&gt;</p></td>
                    <td align="left" valign="top"><p>Test playback with time (activate with level 100%)</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>U &lt;Playback no&gt;</p></td>
                    <td align="left" valign="top"><p>Un-test playback (release with level 0%)</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>G &lt;Playback no&gt;</p></td>
                    <td align="left" valign="top"><p>Go on playback.</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top">
                        <p>G &lt;Playback no&gt; / &lt;Cue id&gt; / &lt;Preload flag&gt; / &lt;Fade time&gt;</p>
                    </td>
                    <td align="left" valign="top">
                        <p>Go to Cue id on playback with time (when &lt;preload flag&gt; is set to 1, cue is preloaded).</p>
                    </td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>G 0 / 1 / &lt;Frames&gt; / &lt;Layer&gt;</p></td>
                    <td align="left" valign="top">
                        <p>Go on current playback when the MagicHD layer is the given number of frames from the end</p>
                    </td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>G 0 / 2 / &lt;Frames&gt; / &lt;Layer&gt;</p></td>
                    <td align="left" valign="top">
                        <p>
                            Go on current playback when the Pixelmapper layer is the given number of frames from the end (for server 2 and
                            above add 16 to the layer for each server)
                        </p>
                    </td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>H &lt;Type&gt;</p></td>
                    <td align="left" valign="top">
                        <p>1 – Lamp on all heads, 2 reset all heads, 3 lamp off all heads, 4 cancel screen save</p>
                    </td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>H &lt;Type&gt; / &lt;Uni zone&gt;</p></td>
                    <td align="left" valign="top"><p>Type is 5 for enable Uni zone, 6 for disable Uni zone</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>H 10 / &lt;Speed Master&gt; / &lt;Command&gt; / &lt;Parameter&gt;</p></td>
                    <td align="left" valign="top"><p>Control Speed Masters</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>H 112 / &lt;state&gt;</p></td>
                    <td align="left" valign="top">
                        <p>Emergency Hot Takeover on, &lt;state&gt; is 1 for On, 0 for Off. Also works for H 911 and H 999.</p>
                    </td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>H 12</p></td>
                    <td align="left" valign="top"><p>Emergency Hot Takeover off</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>S &lt;Playback no&gt;</p></td>
                    <td align="left" valign="top"><p>Stop playback</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>C &lt;Playback no&gt;</p></td>
                    <td align="left" valign="top"><p>Choose playback</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>K &lt;level&gt; / &lt;Fade time&gt;</p></td>
                    <td align="left" valign="top">
                        <p>Set level of last Cue Stack to be activated (e.g. with an A command) / fade time</p>
                    </td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>L &lt;level&gt; / &lt;Fade time&gt;</p></td>
                    <td align="left" valign="top"><p>Set level of current playback / fade time</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>M &lt;level&gt; / &lt;Fade time&gt;</p></td>
                    <td align="left" valign="top"><p>Set level of the playback that is running the macro / fade time</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>J &lt;Cue Id&gt;</p></td>
                    <td align="left" valign="top"><p>Jump to Cue Id on current playback</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>E &lt;Cue Stack id&gt;</p></td>
                    <td align="left" valign="top"><p>Activates Cue Stack (in Stack Store).</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>E &lt;Cue Stack id&gt;/&lt;Level&gt;/&lt;Cue Id&gt;</p></td>
                    <td align="left" valign="top"><p>Activate Cue Stack at level. Cue Id is optional.</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>E 0/&lt;Exec Page&gt;/&lt;Item&gt;</p></td>
                    <td align="left" valign="top"><p>Activate Exec Grid item</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>F &lt;Cue Stack id&gt;</p></td>
                    <td align="left" valign="top"><p>Releases Cue Stack (in Stack Store)</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>F 0/&lt;Exec Page&gt;/&lt;Item&gt;</p></td>
                    <td align="left" valign="top"><p>Release Exec Grid item</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>I &lt;Timecode&gt;</p></td>
                    <td align="left" valign="top">
                        <p>
                            Set internal timecode (1000 to pause, 1001 to play, 1002 to reset to 0. All other values to set specific
                            timecode)
                        </p>
                    </td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>O &lt;Timecode&gt;</p></td>
                    <td align="left" valign="top"><p>Set current received timecode</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>P &lt;Page no&gt;</p></td>
                    <td align="left" valign="top"><p>Change page (page no of 0 means next page)</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>V &lt;View no&gt;</p></td>
                    <td align="left" valign="top"><p>Open Layout (window layout)</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>W &lt;Enable&gt;</p></td>
                    <td align="left" valign="top"><p>Enable/disable timecode generation (1 for enable, 0 for disable)</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>W &lt;Autom ID&gt; / &lt;Enable&gt;</p></td>
                    <td align="left" valign="top"><p>Enable/disable Automation (1 for enable, 0 for disable)</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Q &lt;Timecode&gt;</p></td>
                    <td align="left" valign="top"><p>Enable timecode gen from timecode e.g Q100</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>T0 / &lt;Zone id&gt; / &lt;Button id&gt; / &lt;State&gt;</p></td>
                    <td align="left" valign="top">
                        <p>
                            Trigger 10Scene - Zone id 1 to 20, Button id 1 to 10, State is 0 for button released 1 for button pressed 2 for
                            activate and 3 for release
                        </p>
                    </td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>X &lt;Data&gt;</p></td>
                    <td align="left" valign="top"><p>Transmit data on the serial port</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Y &lt;Data&gt;</p></td>
                    <td align="left" valign="top"><p>Transmit data on the network port over ChamSys Remote Ethernet Protocol</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>N &lt;Data&gt;</p></td>
                    <td align="left" valign="top"><p>Transmit data over MIDI</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>K/ &lt;Data&gt;</p></td>
                    <td align="left" valign="top"><p>Transmit data over OSC.</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>D &lt;Audio command&gt;</p></td>
                    <td align="left" valign="top"><p>Audio Command, supported commands are stop, close, jump, dev, Param1,g (gain)</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Z&lt;DDMMYYYY&gt;Z</p></td>
                    <td align="left" valign="top"><p>Scheduled Events Date</p></td>
                </tr>
            </tbody>
        </table>
    </div>
    <p>
        Note that either / or , can be used as the separator between parameters in commands that have more than one parameter. It is not
        neccesary to add a / or , after a command between the next command - MagicQ will detect A to Z as a command. Midi, Serial, Audio
        &amp; Ethernet cue stack macro commands cannot be mixed with other cue stack macros within the same cue.
    </p>
    <p>
        The playback number can either be the playback number 1 to 202. Alternatively Playbacks for wing playbacks can be entered as 1-1 to
        1-24, 2-1 to 2-24 etc… Playbacks can be playbacks with faders or virtual playbacks (playbacks on non fitted wings).
    </p>
    <p>Multiple Playbacks and multiple Cue Stacks in the Stack Store can be selected using + and THRU (&gt;) in the first parameter.</p>
    <p>For example to activate playback 8</p>
    <p>A8</p>
    <p>To press GO on playbacks 3 to 5,</p>
    <p>G3&gt;5</p>
    <p>To activate Cue Stacks 30 and 32 in the Cue Stack Store at 100% on step 2.00.</p>
    <p>E30+32/100/2.00</p>
    <p>Multiple commands can be put in a Cue Stack macro, e.g. to activate PB1 and then release PB2</p>
    <p>A1R2</p>
    <p>
        The G macro optionally supports two parameters. The first parameter is the playback, the second is the Cue ID to GO. For example,
        G5/6 will GO Cue Id 6 on Playback 5.
    </p>
    <p>
        The A macro optionally supports two parameters. The first parameter is the playback, the second is the level in %. For example,
        A5/60 will activate Playback 5 at 60%. To activate at 100% we suggest using the T macro rather than A - i.e. T5 instead of A5/100.
    </p>
    <p>The R macro supports the parameter 0 to release itself – i.e. R0 releases the playback that is running the macro.</p>
    <p>Where using the E and F Macros to control Execute grid item the item starts from the top of the grid left to right.</p>
    <p>The commands X, Y, N and K/ take a list of byte values (0 to 255) or strings in between "" separated by \ or ,</p>
    <p>To send the bytes 10 followed by 20 followed by 30 on the serial port use the command</p>
    <p>X10,20,30</p>
    <p>
        From v1.9.0.4 the Cue Stack macro commands X,Y,N, K/ and D (Serial, Ethernet, MIDI, OSC and Audio commands) can be placed after
        other macro commands in the Macro field. They must be the last command in the Macro field. Previously they had to be the one and
        only macro command. As before, only one macro command X,Y,N,K,D can be in a Macro field. For example it is now possible to do:
    </p>
    <p>A1 R2 Y"G2"</p>
    <p>G2 K/pb/1/go</p>
    <p>Executing the Q Macro turns off timecode receive on the ChamSys MIDI/Timecode USB interface and on some consoles.</p>
    <p>
        Timecode for the I and O commands can be specified using any of the separators / ; , . If no separator is specified then the time is
        in seconds.
    </p>
    <p>
        Cue Stack macros can be tested from the command line on MagicQ consoles and unlocked MagicQ systems using the command testmac
        followed by the macro. Note that the D, I, M macros normally run on the playback that is executing the macro so will always apply to
        the current selected playback when executed from the command line.
    </p>
    <div class="section">
        ### 15.17.1.&nbsp;Controlling Speed Masters
        <p>Use the H10 Cue Stack macro to control the Speed Master.</p>
        <p>H10,&lt;Speed Master ID&gt;,&lt;Command&gt;,&lt;Parameter&gt;</p>
        <div class="informaltable">
            <table class="informaltable" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                    <col class="col_3" />
                </colgroup>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>Command</p></td>
                        <td align="left" valign="top"><p>Parameter</p></td>
                        <td align="left" valign="top"><p>Description</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>1</p></td>
                        <td align="left" valign="top"><p>BPM</p></td>
                        <td align="left" valign="top"><p>Set the BPM</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>2</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p>Activate</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>3</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p>Deactivate</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>4</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p>Run</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>5</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p>Halt</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>6</p></td>
                        <td align="left" valign="top"><p>Divisor</p></td>
                        <td align="left" valign="top"><p>Set Divisor (2 to 32. 0 for no divisor)</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>7</p></td>
                        <td align="left" valign="top"><p>Multiplier</p></td>
                        <td align="left" valign="top"><p>Set Multiplier (2 to 32. 0 for no multiplier)</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>8</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p>Step</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>9</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p>Source is DJ Beat</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>10</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p>Source is Audio Beat</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>11</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p>Source is DJ BPM</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>12</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p>Source is Audio BPM</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>13</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p>Source is Tap</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>14</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p>Resync</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>15</p></td>
                        <td align="left" valign="top"><p></p></td>
                        <td align="left" valign="top"><p>Resync beat</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>16</p></td>
                        <td align="left" valign="top"><p>BPM increment</p></td>
                        <td align="left" valign="top"><p>Increase the BPM</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>17</p></td>
                        <td align="left" valign="top"><p>BPM decrement</p></td>
                        <td align="left" valign="top"><p>Decrease the BPM</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
<div class="section">
    ## 15.18.&nbsp;Timecode Cue Stacks
    <p>
        MagicQ supports execution of the Cues in a Cue Stack according to timecode - either generated internally, or received externally
        from other devices.
    </p>
    <p>
        To use timecode in a Cue Stack set the Halt field of one or more steps to timecode. Note you will need to double click the Halt
        field or put the cursor on the Halt field and press in the Input Window to open the Halt options. Pressing SHIFT and ENTER will
        toggle through the options.
    </p>
    <p>
        When setting Cues to timecode for the first time, the initial timecode value is set to previous timecode value in the Cue Stack + 1
        second.
    </p>
    <p>
        Timecode values in a Cue Stack must be in increasing order otherwise the Cue Stack may not play back at all. Timecode values that
        are out of sequence are shown with a !.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/cuestacktc.png" alt="image" />
        </span>
    </p>
    <p>
        MagicQ supports both external and internal timecode - choose using soft button C. External timecode is received from LTC, MIDI,
        Art-Net, Winamp or from the MagicQ timecode simulator.
    </p>
    <p>Internal timecode is run on a per Cue Stack basis, starting from 00/00/00.00 when the Cue Stack is activated.</p>
    <p>When the Cue Stack is active and a timecode value reaches a value in one of the steps then that step is executed.</p>
    <p>
        When a timecode Cue Stack is on a playback, the GO and PAUSE buttons will now allow control of the timecode playback status when
        using internal timecode or the external timecode simulator. If the timecode is paused, then the GO button will start the timecode
        from where it was paused. Similarly if the timecode is running, then the PAUSE button will stop the timecode where it is.
    </p>
    <p>
        Pressing GO when the timecode is already running will progress the Cue Stack to the next cue in the same way as a non timecode
        enabled Cue Stack works and the timecode will continue to run as before. This is useful in the case where there are some Cues which
        don’t have a timecode and need to be manually triggered during the stack.
    </p>
    <p>
        The Fast Forward and Fast Back buttons as part of the crossfade section will jump back and forward between the Cues, and will also
        update the current timecode. This allows for fast navigation around timecode enabled Cue Stacks.
    </p>
    <p>If the Cue Stack has an audio file associated with it, then the audio playback will follow the timecode value for the Cue Stack.</p>
    <p>
        See
        <a class="link" href="timecode.html" title="Chapter&nbsp;41.&nbsp;Timecode Support">Timecode Support</a>
        for how to set up external timecode on the console.
    </p>
    <div class="section">
        ### 15.18.1.&nbsp;Editing timecode
        <p>
            Timecode values can be edited individually and can be set in the format 0/0/0.00. The + and – operators can be used to add or
            subtract times to the timecode times for one or more cues. This is useful for changing the absolute times of a Cue Stack whilst
            maintaining the relative times between Cues. Use SHIFT or CTRL and the cursor keys to select multiple times and offset their
            values using + or -.
        </p>
        <p>
            To set a Cue Step to use the current timecode being received enter / in the Wait field. If multiple Cues are cursor selected
            then the first Cue will take the current timecode and the following Cues will all be modified, but keeping the same offsets
            between Cues as they previously had. This enables a whole section of Cues to be moved to a new timecode.
        </p>
    </div>
    <div class="section">
        ### 15.18.2.&nbsp;Learn Timing
        <p>
            It is possible for the console to learn the timing live. Set the steps in the Cue Stack to timecode. Then release the Cue Stack,
            and in the Cue Stack window, press SHIFT and RECORD TC.
        </p>
        <p>
            Now press the GO button for the Cue Stack. MagicQ starts the timecode running at 00/00/00.00 and each time you press GO it moves
            to the next Cue whilst recording the current timecode into the Wait fields. At the end of the Cue Stack, press RELEASE to end
            the timecode record mode.
        </p>
    </div>
    <div class="section">
        ### 15.18.3.&nbsp;Testing timecode
        <p>
            When a Cue Stack has some steps set to timecode the Cue Stack Window shows the timecode simulator / internal timecode on soft
            buttons X and Y.
        </p>
        <p>
            When a Cue Stack is set to External Timecode then the timecode simulator is available - this is the same simulator that is
            available in the Setup window, but is easier to access when working on a timecode Cue Stack. Use soft button Y to turn the
            timecode simulator on and off. The display for soft button X shows the current timecode value (either received from external
            timecode or set by the simulator). Use soft button X to start and stop the timecode, or enter a value on the keyboard/keypad and
            press the soft button to jump to a new timecode value.
        </p>
        <p>
            When a Cue Stack is set to Internal Timecode then soft button X shows the current internal timecode value of the playback. Use
            soft button X to start and stop the timecode, or enter a value on the keyboard/keypad and press the soft button to jump to new
            timecode value. Soft button Y can be used to restart the internal timecode at 0.
        </p>
        <p>
            When using the TC simulator or internal timecode, manually jumping to a Cue that is set to timecode timing will cause the
            timecode to be set to that timecode value. Jumping to a Cue can be done by pressing GOTO CUE or putting the cursor on the Cue
            Status field of a Cue and pressing ENTER.
        </p>
    </div>
    <div class="section">
        ### 15.18.4.&nbsp;External timecode
        <p>
            A Cue Stack on a Playback will only run external timecode steps when it is active - it will not activate by itself. Either
            manually activate the playback before the external timecode is started or use an Autom event to set a Playback to activate when
            a particular external timecode range is detected.
        </p>
        <p>
            In some cases it may be useful to have a master Cue Stack controlled by timecode that is always active which then activates
            other Cue Stacks for each song.
        </p>
        <p>
            When timecode values jump (for example when changing tracks), MagicQ checks for each active Cue Stack, whether the external
            timecode received is within the range of the first timecode value in the Cue Stack and the last timecode value in the Cue Stack.
            MagicQ will only execute a change of Cue if the new value is within the range controlled by that Cue Stack. This helps to avoid
            the erroneous execution of an entire Cue Stack.
        </p>
        <p>
            When timecode values jump forward, MagicQ will jump to the Cue that corresponds to the new timecode. If the Cue Stack, Options,
            Advanced, Recalculate State on Jumps is set to "Yes" then MagicQ will execute all of the Cues from the current Cue to the new
            Cue including any macros, media and audio clips. If Recalculate on Jumps is set to "No" then only the new Cue will be executed.
        </p>
    </div>
    <div class="section">
        ### 15.18.5.&nbsp;Timecode offset
        <p>
            MagicQ supports a timecode offset field for each Cue Stack. This can be used to add a positive or negative timecode offset to
            all timecode values within a Cue Stack including all TC Tracks associated with that Cue Stack. For example if the Cues in the
            Cue Stack have been set to respond to timecode starting at 0/0/0 and the timecode received actually starts at 2/0/0 then setting
            the timecode offset to 2/0/0 will make the Cue Stack correctly respond to the received times. Similarly if the Cue Stack has
            been set to respond to timecode starting at 5/0/0 then and timecode is actually received startign at 0/0/0 then setting a
            timecode offset of -5/0/0 will have the desired effect.
        </p>
        <p>The timecode offset can be adjusted in the Cue Stack Window by holding SHIFT and turning encoder D.</p>
        <p>
            The timecode offset is set in Cue Stack options, Advanced. Note that all the Cues will still show their programmed timecode
            values but an offset will be applied when playing back or recording timecode. The titlebar in the Cue Stack window shows the
            offset.
        </p>
    </div>
    <div class="section">
        ### 15.18.6.&nbsp;Automatic activation and release of Playbacks
        <p>
            MagicQ supports an option to automatically activate and release Playbacks according to the current received timecode. To use
            this feature set Setup, View Settings, MIDI &amp; Timecode, Timcode activate/release to either Act/Rel TC Playbacks or Act/Rel
            TC playbacks at full. MagicQ will activate and release all playbacks on the current playback page that contain timecode
            depending on the received timecode.
        </p>
        <p>Note that when this option is enabled, Playbacks that are in the range of the incoming timecode can not be released.</p>
    </div>
    <div class="section">
        ### 15.18.7.&nbsp;Internal timecode
        <p>Cue Stacks set to Internal timecode start the internal timecode from 0 when the Cue Stack is activated.</p>
        <p>
            There is support for setting the internal timecode from within a Cue Stack using the macro command ‘I’. To reset the internal
            timecode for a Cue Stack to 00/00/00.00 use the macro I0. To set a specific time, e.g. 10 seconds use the macro I10.
        </p>
        <p>Note when using internal timecode MagicQ uses seconds as the unit of measure rather than timecode frames.</p>
    </div>
    <div class="section">
        ### 15.18.8.&nbsp;Enabling / Disabling Timecode
        <p>
            It is possible to turn timecode decode on and off for a Cue Stack using soft button A in the Cue Stack Window. When timecode is
            turned off the Cue Stack will not execute timecode Cues.
        </p>
        <p>Press SHIFT + soft button on encoder D to avoid the confirmation request.</p>
    </div>
</div>
<div class="section">
    ## 15.19.&nbsp;Cue Stack timecode tracks
    <p>
        MagicQ supports up to 10 timecode tracks (TC Tracks) linked to each Cue Stack. A timecode track allows a sequence of button
        presses/fader movement events to be associated with the playback of a Cue Stack. This is useful where a main Cue Stack is used to
        program the overall look, but additional effects and bumps need to be added in time to the music. The timecode tracks are
        independent of the Cues in the Cue Stack, so it is therefore not necessary to generate a Cue for each of these effects/bumps.
    </p>
    <p>All recorded timecode tracks are started when the Cue Stack is activated and are released when the Cue Stack is released.</p>
    <p>Timecode tracks are visible in the Cue Stack, View TC view.</p>
    <p>
        Tracks 1 to 10 are selected by soft button A. Tracks can be recorded and removed using the RECORD TRACK and REMOVE TRACK soft
        buttons.
    </p>
    <p>
        The RECORD TRACK function is used to record the tracks - in this mode MagicQ records all button presses and fader movements as they
        occur with the appropriate times. The events and times can be modified afterwards. Each event can be edited individually, or whole
        sections can be cursor selected and moved in time.
    </p>
    <p>
        When recording a Track it is not recommended to record button or fader movements from the Cue Stacks itself as this may cause
        unexpected results when played back.
    </p>
    <p>Timecode tracks can be edited and steps can be manually added to them and removed from them.</p>
    <p>
        Steps in a timecode track must have increasing Time field otherwise they will not play correctly. To reorder the steps so that they
        are correctly in time order use the REORDER TRACK soft button.
    </p>
    <p>Each timecode track can be turned on and off individually using soft button D.</p>
    <p>
        Each timecode track is stored in MagicQ as a keyboard macro and if required can also be viewed and played back in the Macro Window.
        When a Track is created MagicQ generates a keyboard macro with the name CSx TrY where X is the Cue Stack ID and Y is the track
        number.
    </p>
    <p>When the track is removed using the RMEOVE TRACK soft button the keyboard macro is also removed from the Macro window.</p>
    <p>
        Timecode tracks can be managed completely from the Cue Stack window, so it is not necessary to use the Macro window. If required the
        ASSIGN TC MACRO soft button in the Cue Stack window can be used to manually assign a keyboard macro to a Track. To deassign a Track
        from a Cue Stack without removing from the show first copy the related keyboard macro in the Macro window.
    </p>
</div>
<div class="section">
    ## 15.20.&nbsp;Importing timecode timings
    <p>
        MagicQ supports importing timecode values from .CSV files which can be exported from software such as InqScribe and Reaper. In Cue
        Stack, View TC View select the IMPORT TC TIMINGS soft button.
    </p>
    <p>MagicQ normally looks for a .csv in the format:</p>
    <p>&lt;timecode&gt;,&lt;short name&gt;,&lt;long name&gt;,&lt;options&gt;</p>
    <p>Where the &lt;short name&gt; is used as the cue name and &lt;long name&gt; the comment field within MagicQ.</p>
    <p>For example:</p>
    <p>Header line 10:02:36.09,all on,Guests enter the room</p>
    <p>10:02:36.13,OPP 2 ON CHASE,Start the event</p>
    <p>10:02:36.23,ALL ON,Interval</p>
    <p>
        When importing from InqScribe, first export as .XML, open using a spreadsheet editor (for example Excel), reorder the columns to be
        as above and then save out as a .csv file.
    </p>
    <p>MagicQ autodetects input from Reaper (first line starts with a #) - the format for Reaper is</p>
    <p>&lt;short name&gt;,&lt;long name&gt;,&lt;start tc&gt;,&lt;end tc&gt;,&lt;length tc&gt;,&lt;colour&gt;</p>
    <p>For example:</p>
    <p>#,Name,Start,End,Length,Color R1,Intro,0:00:00:00,0:00:02:00,0:00:02:00, M1,Accent,0:00:00:11,,,FFF80A</p>
    <p>Once the times have been imported MagicQ gives the option to Make Cues, Make TC Stack or Load Markers.</p>
    <p>
        When Make Cues is selected, Cues will be generated for each timecode value and appended to the Cue Stack on the current playback for
        each of the timecode values in the file.
    </p>
    <p>
        If there is no Cue Stack on the current playback than a Cue Stack will be generated on the currently selected playback with a Cue
        for each timecode timing point. Each Cue can be programmed by merging into it. Remove any unwanted Cues. If the playback is empty
        then a new Cue Stack will be created.
    </p>
    <p>
        When Make TC Track is selected, TC Track items will be added to the current selected Track of the Cue Stack on the current playback
        for each of the timecode values in the file.
    </p>
    <p>
        If there is no Cue Stack on the current playback than a Cue Stack will be generated on the currently selected playback with a TC
        Track 1 with a TC Track item for each of the timecode values in the file.
    </p>
    <p>
        When Load Markers is selected, Markers will be loaded into the Cue Stack in the current playback. If there is no Cue Stack on the
        current playback than a Cue Stack will be generated on the currently selected playback with the Markers loaded into it.
    </p>
</div>
<div class="section">
    ## 15.21.&nbsp;Timeline
    <p>
        The Timeline Window provides alternative views into the Cue Stack and enables editing of Cues and TC Tracks events in a track sheet
        or visual timeline form. There are three views in Time line window; VIEW SHEET, VIEW CUELINE and VIEW EDITOR.
    </p>
    <p>
        To use the VIEW TC mode in the Cue Stack view, you can easily toggle between the timeline and the Cue Stack view using the VIEW
        TIMELINE and VIEW CUE STACK options.
    </p>
    <p>
        To record to a track first select the track layer normally named "CSYY TRKZ" where YY will be the number of the Cue Stack and Z will
        be the track number. To select the track click/press the on box containing the track layer’s name once you have selected you should
        see the INSERT IN TRACK option become available. It will immediately start recording and you will see the changes you make appear
        live in the relevant tracks below.
    </p>
    <p>
        To add more Timecode tracks you can do so using the new button "Add TC Track". It will immediately start recording and you will see
        the changes you make appear live in the relevant tracks below.
    </p>
    <p>
        To select multiple cues and/or steps in a track, if you hold shift and press/click and drag you are able to draw a box and select
        multiple items.
    </p>
    <p>
        Once selected you can either drag, copy or delete them all at once. If you drag them you must press/click on an item in the
        selection then drag. To copy the items press copy then left click/press on the timeline to place them all at that position. The
        timecode distances between all items are preserved. If you press return instead of clicking after pressing copy; it will paste all
        the items 1 second after the original.
    </p>
    <p>Selected items can now be deleted as a group using the REMOVE button.</p>
    <p>
        You are able to enter timecode value and update the playhead’s position while a track is running. Enter a +/- and/or your value then
        press on the PB Timecode/encoder X soft button to have it apply the value against the current time. A value with no +/- operator
        will set the position.
    </p>
    <p>To keep the playhead centred you can turn on the "Center Playhead" option found on the horizontal scroll encoder Y soft button.</p>
    <div class="section">
        ### 15.21.1.&nbsp;View Sheet
        <p>
            Press View Track Sheet to view the track sheet. The Track Sheet shows the data for the Cues for the Cue Stack on the currently
            selected Playback.
        </p>
        <p>Colours in the track sheet are as follows.</p>
        <div class="informaltable">
            <table class="informaltable" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                </colgroup>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>Red</p></td>
                        <td align="left" valign="top"><p>In programmer</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Cyan</p></td>
                        <td align="left" valign="top"><p>Increasing value</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Green</p></td>
                        <td align="left" valign="top"><p>Decreasing value</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>White</p></td>
                        <td align="left" valign="top"><p>Static value controlled by Playback/Cue</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Magenta</p></td>
                        <td align="left" valign="top"><p>Tracked value</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>Values can be directly edited in the Track Sheet.</p>
        <p>Use SHIFT and BLOCK CUE and SHIFT and UNBLOCK CUE to block and unblock Cues in the Track Sheet.</p>
    </div>
    <div class="section">
        ### 15.21.2.&nbsp;View Cueline
        <p>
            The Cueline is the original MagicQ timeline which enables viewing of a Cue Stack horizontally as a timeline. This view only
            shows Cues within the Cue Stack, not TC Track Events and there is only very limited editing supported.
        </p>
        <p>Use encoders A to specify the level of detail shown for each head and encoder B to choose specific attribute masks.</p>
        <p>
            By default all of the heads in the Cue Stack on the selected Playback are shown – use the SEL HDS ONLY soft button to make it
            only show the currently selected heads from that Playback.
        </p>
        <p>Encoder D is used to modify the horizontal scale to choose how many Cue Steps are shown in the window.</p>
        <p>Use encoders X and Y to scroll around the timeline.</p>
        <p>View Vals and View Raw can be used to view the data values rather than the timeline.</p>
        <p>
            Press VIEW TRACKING to show the tracking information for information that tracks from one Cue to another. When this is not
            selected only the hard values in each Cue are shown.
        </p>
    </div>
</div>
<div class="section">
    ## 15.22.&nbsp;View Editor
    <p>
        The Timeline Editor is designed to allow you to lay out Cues in a Timecoded Cue Stack on a traditional timeline based view. It
        visualises audio tracks, timecode values, and both Cue and Timecode Track events in rows to allow you to visually see and modify the
        Cue Stack.
    </p>
    <p>
        To access the Timeline Editor, select your Cue Stack, and then press the TIMELINE EDITOR soft button from within the Timeline
        window. The Timeline Editor will update the timeline to follow the currently selected playback. To lock the window to a particular
        Cue Stack, select the Cue Stack as normal, and then press the CHOOSE CUE STACK soft button. To unlock the window, press the same
        button again. Note that the cue stack needs to be set to
        <span class="emphasis"><em>cue timing</em></span>
        and the cues within it set to timeline (
        <span class="emphasis"><em>TC</em></span>
        ) timing. Cues can be set to TC timing using the Halt field within the cue stack.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/audio_timeline.png" alt="image" />
        </span>
    </p>
    <p>The timeline is split into multiple rows:</p>
    <div class="itemizedlist">
        <ul class="itemizedlist">
            <li class="listitem">Cue Stack audio file</li>
            <li class="listitem">Section layer, allowing sections of the songs to be labelled e.g: "Chorus" or "Intro"</li>
            <li class="listitem">Cues in the selected Cue Stack which have a timecode value set, showing their delay and fade values</li>
            <li class="listitem">Cue audio files</li>
            <li class="listitem">Timecode Tracks</li>
        </ul>
    </div>
    <p>
        The timeline view can be panned by dragging in any of the background space of the timeline window, or by using the "Horiz Scroll"
        encoder. The horizontal zoom level can be changed with the "Zoom" encoder, or by pressing on the encoder soft button to zoom in and
        out.
    </p>
    <p>
        In its default mode, the cue and timecode track rows are unlocked and will allow movement by clicking and dragging individual items.
        To prevent accidental changes to a cuestack, a row can be locked and unlocked by clicking the padlock icon next to the row name.
    </p>
    <p>
        Items can be selected and moved by clicking and dragging on the item. When selected, items can also be moved using the "Timecode"
        encoder. Cue fade and delay times can be modified using their respective encoders.
    </p>
    <p>
        If Cue’s are moved they also check whether they have had their order changed, if they change from orange to grey this is to show
        they are now no longer in the correct order. To fix this press the "REORDER TC" softbutton. Once ordered they will return to their
        orange colour and will then respect the updated time.
    </p>
    <p>
        After a TC reorder it will likely rename a cue with a new Cue ID, so aware if you have linked any of the cues. If you wish to
        renumber the cue’s so they follow a simpler order press the "REORDER CUE IDs" button.
    </p>
    <p>
        When a timecode offset is enabled in the Cue Stack, then two rulers are shown at the top of the window, with the upper showing
        timecode from the start of the Cue Stack, and the lower showing the equivalent external timecode with an offset applied.
    </p>
    <p>
        The Timeline Editor is supported on the MQ500M, MQ500, MQ250M, MQ80, MQ70, MQ50 and MagicQ PC Systems. Legacy products such as the
        MQ40,MQ40N, MQ60 and MQ100 Series consoles do not support the timeline editor.
    </p>
</div>
<div class="section">
    ## 15.23.&nbsp;View Cue Stack
    <p>
        Pressing "VIEW CUE STACK" will switch you over to the "CUE STACK" window, if you then press "VIEW TC" you see the "VIEW TIMELINE"
        button. You can switch back and forth between these views using these options with ease.
    </p>
</div>
<div class="section">
    ## 15.24.&nbsp;View Marker Options
    <p>All the markers can be moved, copied and removed using COPY, MOVE and REMOVE buttons.</p>
    <p>Naming a marker set or marker (if applicable) can be done using SET.</p>
    <div class="section">
        ### 15.24.1.&nbsp;Beat markers
        <p>
            The generate a bpm grid option has been moved if you would like to generate a grid based off a bpm you need select the “VIEW
            MARKER OPTIONS”.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/marker_options.png" alt="image" />
            </span>
        </p>
        <p>
            To generate a bpm grid simply use the encoder to set the BPM range you would like then press "Generate", if you need to add any
            extra beat markers add use the “ADD MAJOR BEAT MARKER” to mark the beginning of a new grid and “ADD MINOR BEAT MARKER” to mark
            the other beat positions.
        </p>
    </div>
    <div class="section">
        ### 15.24.2.&nbsp;Marker set layers
        <p>
            Marker set layers are used to label sections of a cue stack or song (if used), each layer can contain sections and unique
            markers. In order to add to an existing “marker layer” it first must be highlight/selected.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/marker_options_with_set_selected.png" alt="image" />
            </span>
        </p>
        <p>Using the cursor will add the new marker to that position, otherwise it will be position at 0.</p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/marker_options_add_with_cursor.png" alt="image" />
            </span>
        </p>
        <p>
            To add a new marker set layer you need press either the “ADD SET TO STACK” or “ADD SET TO AUDIO” option. The latter of the two
            options will only appear if there is and audio file assigned to the cue stack.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/marker_options_with_audio.png" alt="image" />
            </span>
        </p>
    </div>
</div>
<div class="section">
    ## 15.25.&nbsp;Choose Cue Stack
    <p>Using this option with lock/unlock the timeline window to a particular "Cue Stack".</p>
    <div class="section">
        ### 15.25.1.&nbsp;Audio files
        <p>
            Audio files are shown in the timeline view as a waveform. If the input audio file is in stereo, then this is mixed down to mono
            before being displayed.
        </p>
        <p>
            There are two render modes currently available for audio files. The first will show the peak and RMS values of the overall
            waveform. The second mode shows the peak values of the hi, mid and lo frequency bands of the audio file as an overlaid red,
            green, and blue waveform. This can aid in aligning cues to particular beats which may not be easily visible on the standard
            waveform, but easy to see when just looking at a particular channel. The modes can be toggled by pressing the "VIEW FREQ BANDS"
            and "VIEW PEAK/RMS" soft button in the timeline editor window.
        </p>
        <p>
            An example of how these two modes compare can be seen below. These show an audio file containing a single sine wave of
            increasing frequency. The RMS value and peak values stay consistent across the file as the amplitude of the sine wave doesn’t
            change, but the rising frequency can be seen going from lo, through mid, to high.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/audio_sweep_1.png" alt="image" />
            </span>
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/audio_sweep_2.png" alt="image" />
            </span>
        </p>
        <p>
            The Cue Stack audio file will always start at the 00/00/00.00 timecode value as this is started when the Cue Stack is activated.
            Cue Audio files will move in conjunction with their corresponding Cue in the above row.
        </p>
        <p>
            The first time an audio file is loaded into the timeline window, the waveform image is generated in the background. Once this
            has been created the timeline window will show the respective waveform. The underlying image files are stored in a folder named
            _cache in the audio folder based on the file name. If an audio file with the same name is replaced in the audio folder, you may
            need to clear this cache folder to regenerate the audio waveforms.
        </p>
    </div>
    <div class="section">
        ### 15.25.2.&nbsp;Playhead
        <p>
            The current timecode value is shown in the timeline using the red playhead bar. This will follow the timecode value for the
            selected Cue Stack. If the Cue Stack is configured to use an external timecode input, and a timecode offset has been configured,
            then the playhead will show the relative position in the Cue Stack of the external timecode. If the Cue Stack is either using
            the TC Sim or internal timecode, then the Encoder X buttons will start and stop the timecode playback. The RESTART TC softbutton
            will set the current timecode value to 00/00/00.00.
        </p>
        <p>
            The playhead can be moved by dragging in the timecode ruler at the top of the display. If the Cue Stack has a Stack Audio file
            associated and the Playback is currently active, then the Audio playback will also be scrubbed along with this.
        </p>
        <p>
            When the timecode source is playing, the timeline window will follow the playhead to keep it in view. If you have scrolled away
            from the current playhead, the
            <span class="emphasis"><em>Centre Playhead</em></span>
            soft button on encoder Y can also be used to move back to view the current playhead.
        </p>
    </div>
    <div class="section">
        ### 15.25.3.&nbsp;Timecode Tracks
        <p>
            Timecode track items are shown on the timeline where each macro target is shown on it’s own row. This means that Playback
            actions for multiple Playbacks will appear on their own rows. An entire timecode track can be hidden using the arrow in the row
            name. The timecode track can also be enabled or disabled using the 🚫 icon.
        </p>
        <p>
            For TC track entries which change the level of a Playback, the level shown in the timeline window is the target level which the
            Playback will fade to. The level can be modified using the "Parameter" encoder.
        </p>
    </div>
    <div class="section">
        ### 15.25.4.&nbsp;Timecode Loop
        <p>
            To enable the timecode loop function on a cue stack, you can use the ENABLE TC LOOP softbutton from within the Timeline Editor
            window. This will toggle the function on and off. The timecode loop functionality is only supported with a Cue Stacks' internal
            timecode and not on Cue Stacks configured to external timecode.
        </p>
        <p>
            To modify the timecode loop in and out points, use SHIFT + CONFIG TC LOOP to enter the loop configuration mode. The timecode in
            and out points can be modified using encoder A and B respectively. The In and Out points can also be set to the current timecode
            value on the playback by using the SET LOOP IN POINT and SET LOOP OUT POINT softbuttons.
        </p>
        <p>The loop configuration mode can be exited by pressing the BACK softbutton.</p>
    </div>
</div>
