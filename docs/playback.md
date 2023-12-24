---
id: playback
title: Chapter 16. Playback
sidebar_position: 16
---

# Chapter 16. Playback
<p>
    MagicQ consoles support 10 main playbacks situated immediately below the touch screen. Up to 192 additional playbacks are available on
    up to 8 expansion wings.
</p>
<p>All playbacks have a fader, a FLASH button and a SELECT button.</p>
<p>The 10 main playbacks also have GO and PAUSE buttons for control of Cue Stacks.</p>
<p>Cue Stacks on wings have GO buttons. SHIFT + GO gives PAUSE function.</p>
<div class="section">
    ## 16.1. Playback Display
    <p>
        The area above each of the main playbacks on the display is used to provide information about the status of the playback. This
        includes the name of the Cue Stack that is loaded on the playback, the current Cue and the next Cue. The status of the Cue is shown
        as a percentage along with an indication of whether the Cue is running or paused.
    </p>
    <p>
        The LCD screen above each of the Playbacks on the Extra Wing displays the name of the Cue Stack. The name can be up to 12
        characters. When a Cue Stack is assigned to Wing Playbacks that has multiple steps then the name of the Cue Stack is displayed on
        the first line of the Wing Playback and the second line shows the current step. If no name is set for the Cue Stack then the first
        line shows the current step and the second line shows the next step.
    </p>
</div>
<div class="section">
    ## 16.2. Activating and Releasing Playbacks
    <p>
        Playbacks are activated and released by pressing the associated buttons and raising the associated faders depending on the options
        of the Cue Stack. Once a playback is activated it affects the output of the console until it is released.
    </p>
    <p>
        By default the Cue Stack on a playback is activated when the fader is raised above zero and released when it is returned to zero.
        Similarly it is activated when a flash button is pressed and then deactivated when the button is released.
    </p>
    <p>
        The Cue Stack options can be configured so that the flash buttons/faders do not affect activation or deactivation. In this case the
        playback can be activated by pressing the GO button. It can be released by pressing the S button to make the playback the current
        playback and then pressing the RELEASE button.
    </p>
    <p>The Cue Stack can also be configured so that it does not reset to the first step when it is released.</p>
    <p>
        A Cue Stack can be set so that pressing the FLASH button, activates and releases the playback on alternate presses. Set the "Flash
        Button toggles" option.
    </p>
    <p>
        A release time can be set for the Cue Stack in the Cue Stack options, so that when released the levels fade out over a specified
        time.
    </p>
    <p>
        At any time a playback can be released with time by pressing the SELECT button of the playback, typing a time and pressing the
        RELEASE button.
    </p>
    <p>
        Pressing SHIFT + RELEASE releases all playbacks simultaneously. It is also possible to enter a time before doing SHIFT + RELEASE.
        Holding a single SELECT button and pressing SHIFT + RELEASE releases all the playbacks except the one for which the SELECT is held.
    </p>
    <p>Holding multiple Select buttons and pressing RELEASE releases all the selected playbacks.</p>
    <p>
        Cue Stacks can be set to automatically activate or release on page change. When a Cue Stack is set to release on page change then
        holding the S button of the Playback when changing page avoids the release of the Cue Stack.
    </p>
</div>
<div class="section">
    ## 16.3. Fader control
    <p>
        By default the playback fader controls the level of any HTP channels recorded into the current Cue on the Cue Stack. If the "Fader
        controls HTP chans" option is set to "No" then the fader will no longer control the HTP channels – the Playback will automatically
        be always set to 100% level.
    </p>
    <p>
        The Cue Stack options can be configured so that the fader also controls LTP channels using the Fader controls LTP (IPCB) option.
        This is useful for example, to set up a fader to perform a "fly away" at the end of a song. As the fader is moved up the LTP
        channels are changed from their current values to the values recorded in the Cue.
    </p>
    <p>
        MagicQ supports an additional option "All chans controlled LTP". This options allows the Playback when it is the last activated, to
        consider all channels to be LTP. The value of HTP channels controlled by the Playback is the value output, regardless of the HTP
        level of other Playbacks. This allows soloing of Intensities.
    </p>
    <p>
        The Cue Stack can also be configured so that the fader controls the size and/or speed of any FX recorded in the current Cue. For
        example, you can set up one fader to control a pan swing and another to control a tilt swing. Moving the faders to half gets a small
        circle whilst moving to full gets a big circle. Varying the faders enables generation of ellipses.
    </p>
</div>
<div class="section">
    ## 16.4. Playback Buttons
    <p>In a Cue Stack set to Chase timing, GO runs the chase whilst PAUSE stops it.</p>
    <p>
        In a Cue Stack set to Theatre timing, GO steps to the next step in the Cue Stack. When a Cue Stack is fading, pressing PAUSE stops
        the fade mid step. When a Cue Stack is paused, pressing PAUSE fades backwards through the stack.
    </p>
    <p>Pressing S + GO steps to the next step without fading. Pressing S + PAUSE steps back to the previous step without fading.</p>
    <p>
        Pressing S + FLASH reasserts the Cue Stack to be the latest touched - this has the effect of reasserting channels that have been
        overriden by other Playbacks.
    </p>
    <p>
        Double clicking the S button opens the Cue Stack Window, View Cue Stack for that playback. Triple clicking the S button opens the
        Cue Stack options for that playback (i.e. the Cue Stack Window, View Options). Holding SHIFT and double clicking the S button opens
        the Cue Window for that playback to show the contents of the current Cue on that playback.
    </p>
    <p>Each of the buttons illuminates to indicate its current state:</p>
    <div class="informaltable">
        <table class="informaltable" cellpadding="4px">
            <colgroup>
                <col class="col_1" />
                <col class="col_2" />
                <col class="col_3" />
            </colgroup>
            <tbody>
                <tr>
                    <td align="left" valign="top"><p>FLASH</p></td>
                    <td align="left" valign="top"><p>Green</p></td>
                    <td align="left" valign="top"><p>Add</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p></p></td>
                    <td align="left" valign="top"><p>Red</p></td>
                    <td align="left" valign="top"><p>Swap</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p></p></td>
                    <td align="left" valign="top"><p>Green flash</p></td>
                    <td align="left" valign="top"><p>Add - playback held over</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p></p></td>
                    <td align="left" valign="top"><p>Red flash</p></td>
                    <td align="left" valign="top"><p>Swap - playback held over</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>GO</p></td>
                    <td align="left" valign="top"><p>Green</p></td>
                    <td align="left" valign="top"><p>Cue Stack is running</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>PAUSE</p></td>
                    <td align="left" valign="top"><p>Red</p></td>
                    <td align="left" valign="top"><p>Cue Stack is paused</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>SELECT</p></td>
                    <td align="left" valign="top"><p>Blue</p></td>
                    <td align="left" valign="top"><p>Playback is selected</p></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="section">
        ### 16.4.1. Playbacks without faders
        <p>MagicQ Extra Wings and Execute Wings have some playbacks without faders and without GO or PAUSE buttons.</p>
        <p>On these playbacks the FLASH buttons can be set to toggle on/off in the Cue Stack Options, Buttons, Flash toggles.</p>
        <p>
            From v1.7.1.3 there is support for toggling on/off these playbacks without permanently setting the FLASH buttons to toggle. Hold
            SHIFT and press the FLASH or press S + FLASH to toggle.
        </p>
    </div>
    <div class="section">
        ### 16.4.2. Grand Master &amp; Sub Master
        <p>
            To the left of the 10 playbacks are two master faders - a Grand Master which controls the overall HTP output level of the
            console, and a Sub Master which controls the HTP output level of the playbacks. In addition the Sub Master can be
            <a class="link" href="settings.html#setting-grand-master-function" title="50.13.1. Grand Master function">configured</a>
            to control the level of the FLASH buttons.
        </p>
        <p>
            Both the Grand Master and the Sub Master have FLASH buttons which respectively bump the overall HTP output level, and the HTP
            output level of the playbacks to full.
        </p>
        <p>LTP channels are not affected by the master faders.</p>
    </div>
    <div class="section">
        ### 16.4.3. Dead Black Out (DBO)
        <p>
            Above the Grand Master there is a DBO button. Pressing this button causes all HTP values to be set to zero, thus generating a
            black out. Releasing the button causes the original HTP levels to be restored. LTP channels are not affected by the DBO button.
        </p>
    </div>
    <div class="section">
        ### 16.4.4. Add / Swap
        <p>
            Above the Grand Master there is an ADD / SWAP button which controls the function of the playback FLASH buttons. When set to ADD,
            pressing a FLASH button causes the playback to be added to the output. When set to SWAP, pressing a FLASH button again causes
            the playback to be added to the output, but all other playbacks are removed from the output.
        </p>
        <p>Each FLASH button has an LED which is lit green for ADD and red for SWAP.</p>
        <p>
            The ADD / SWAP functionality only affects HTP channels on the playbacks - LTP channels are not affected by the FLASH buttons.
            The level of the playback is determined by the master faders – see
            <a class="link" href="settings.html#setting-grand-master-function" title="50.13.1. Grand Master function">
                configuring the masters
            </a>
            .
        </p>
        <p>
            Cue Stacks can be set to always swap. Open the Cue Stack window and press the SELECT button with the playback. In the VIEW
            OPTIONS view set the "Flash Button Swaps" option to YES.
        </p>
        <p>
            The "Flash acts like fader" option enables the FLASH button to act as if the fader was raised to full. This is useful if the
            fader controls LTP (IPCB) channels, FX size or FX speed, or if the Fader is a master for intensity, size or speed.
        </p>
    </div>
    <div class="section">
        ### 16.4.5. Page Select
        <p>MagicQ supports 500 pages of playbacks for recoding different Cue Stacks for different songs.</p>
        <p>
            The NEXT PAGE and a PREV PAGE buttons control which playback page is active, and hence which Cue Stacks the physical playback
            faders and buttons control.
        </p>
        <p>
            The current page number and name is displayed in the Status Display under the clock. The current page can also be changed from
            the Page Window by selecting a new page, or by pressing PAGE and entering the page number on the keypad.
        </p>
        <p>
            Changing the current page whilst playbacks are active does not affect the output of these playbacks - the playbacks are "held
            over" until the playback is released.
        </p>
        <p>
            It is possible to set up Cue Stacks to be activated and released on a page change in the Cue Stack options. When a Cue Stack is
            set to release on page change then holding the S button of the Playback when changing page avoids the release of the Cue Stack.
        </p>
        <p>
            The next Page can be preloaded in the Page Window by moving the cursor to the required item in the Page Window and pressing the
            PRELOAD PAGE soft button. The preloaded page will be indicated in the Status Display above PB1 to PB5. Pressing NEXT PAGE goes
            to the preloaded page.
        </p>
        <p>
            The preloaded page can also be loaded using the keypad syntax &lt;Page&gt; &lt;number&gt; *. So PAGE 34 * preloads page 34.
            Pressing NEXT PAGE goes to page 34.
        </p>
    </div>
    <div class="section">
        ### 16.4.6. Page Levels
        <p>
            It is now possible to save levels associated with the main playbacks and additional wing playbacks that are tied to the main
            playbacks. Whenever the main page is changed to a new page it will set the levels for the playbacks according to the saved state
            - this means that a "Song" will always start with the same playback levels. If the physical fader is not at the required level
            then the level must be matched before the fader will control the playback.
        </p>
        <p>
            To save levels for a page go to the Page Window and use the SAVE LEVELS and CLEAR LEVELS soft buttons. The levels are stored in
            the show file and can be updated at any time using SAVE LEVELS again.
        </p>
        <p>
            To set ties between playbacks on wings and the main playbacks go to Setup, View System, View Wings and set the required "Tie"
            fields to "Main".
        </p>
        <p>
            Cue Stacks can be set to Activate and Release on page change so that when a new page is selected one or more Cue Stacks
            activated at a required level.
        </p>
    </div>
    <div class="section">
        ### 16.4.7. Current Playback
        <p>
            The current playback is the one that has its SELECT button illuminated. The current playback is used by the Cue and Cue Stack
            windows to determine the Cue and Cue Stack to view / modify.
        </p>
        <p>
            You can change the current playback at any time by pressing the SELECT button for the playback you want to make the current
            playback
        </p>
        <p>
            Press the SELECT button of a Playback twice in quick succession to select the Playback and automatically open the Cue Stack
            Window so that you can view / change the contents of the Cue Stack.
        </p>
        <p>
            Press the SELECT button of a Playback three times in quick succession to select the Playback and automatically open the Cue
            Stack Window in the Options View.
        </p>
        <p>
            Sometimes you may wish that the currently selected fader changes to follow the last fader that was raised. This behaviour can be
            enables from the Setup Window by setting the "Current Playback follows last touched" option to YES.
        </p>
    </div>
    <div class="section">
        ### 16.4.8. Playbacks across multiple Pages
        <p>
            Multiple Playbacks can be active at one time from different pages. By default a particular Playback can only be active on one
            Page – it is not possible to activate Playback 1 on Page 1 and Playback 1 on Page 2 at the same time. To activate two Cue Stacks
            on one Playback see Page Holdover below.
        </p>
        <p>
            It is possible to temporarily transfer a Playback that is active to a different Playback in order to unblock a Playback. Press
            SHIFT + SEL to action the transfer, and then select the S button of the Playback to transfer followed by the S button of the
            destination.
        </p>
        <p>
            Transfer is only possible when a Playback is active. Once a transfer has occurred the original Playback can be used to run a
            Playback from a different page. When the transferred Playback is released then it returns to its original Playback.
        </p>
    </div>
    <div class="section">
        ### 16.4.9. Page Holdover
        <p>
            From v1.8.2.0 MagicQ supports "Two Page Holdover" whereby it is possible for two Cue Stacks from different pages on a single
            Playback to be active simultaneously. Previously it was not possible to access Cue Stacks from different pages on the same
            playback - the playback was blocked until the active Cue Stack was released, or until the user transferred (SHIFT+SEL) the Cue
            Stack to a different playback.
        </p>
        <p>In Setup, View Settings, Playback set "Page Holdover" to "Two Page Holdover".</p>
        <p>
            When an active Cue Stack holds over the Playback legend area is split with a small area at the bottom showing the page and name
            of the Cue Stack holding over. Full access is then available to start another Cue Stack from a different page. The fader and
            buttons control the new Cue Stack.
        </p>
        <p>
            When two Cue Stacks are active on the same playback then when changing pages between their two respective pages, the legends
            will swap around. The Cue Stack from the current page is always shown above, whilst the Cue Stack holding over is always shown
            below.
        </p>
        <p>
            To make changes to a Cue Stack that is holding over, first change back to the page it was activated on and then use the buttons
            and faders.
        </p>
        <p>
            Page Holdover is best used on the main playbacks where there is full legending of the playback state. On MagicQ Extra Wings,
            MagicQ Playback Wings and MagicQ Execute Wings the top line of the display shows the name of the Cue Stack from the current page
            and the bottom line flashes the name of the over Cue Stack holding over.
        </p>
        <p>
            Page Holdover can be used with Playbacks set with Default Cue Stacks in the same was as with normal Cue Stacks. The Cue Stack
            from Page 1 of the default Cue Stack can be released from Page 1 or any page where there is no other specific Cue Stack
            recorded.
        </p>
        <p>
            It is possible to release all playbacks that are holding over by pressing ALT + RELEASE. There is also an inbuilt macro for
            RELEASE ALL HOLDOVER which can be assigned to a button. The Cue Stack Macro R1000 also releases all held over Cue Stacks similar
            to ALT RELEASE. Releasing all playbacks does not affect Cue Stacks which are set with "Masters affect level" to "No".
        </p>
        <p>
            When Cue Stacks are holding over they use up free playbacks in a similar way to the Execute Window - there is an overall limit
            of 202 active playbacks/executes.
        </p>
        <p>
            In Two Page Holdover mode, Cue Stacks set to Activate on Page Change will now activate regardless of whether other Cue Stacks
            are active on that Playback. If there are already two Cue Stacks active then the oldest running one will be automatically
            released.
        </p>
        <p>The Cue Stack Macro R999 can also be used to release held over Cue Stacks for this playback.</p>
    </div>
    <div class="section">
        ### 16.4.10. Playback Banking
        <p>
            MagicQ supports playback banking to access the different playbacks. On Compact consoles the main bank consists of 10 fader
            playbacks PB1 to PB10. On MQ500 it consists of fader playbacks PB1 to PB15 and button playbacks PB16 to PB30. Additional
            playbacks banks can be accessed through the Extra Wing and Stadium Wing respectively.
        </p>
        <p>
            On MQ500M the motorised faders enable access to six different playback banks. The first playback bank consists of PB1 to PB15 on
            fader playbacks and PB16 to PB30 on encoder playbacks. The second playback bank consists of PB31 to PB45 on fader playbacks and
            PB46 to PB60 on encoder playbacks
        </p>
        <p>
            Playback banks are distinct from Playback Pages. Playback pages are typically used for songs, whilst Playback banks enable
            access to different playbacks within the page.
        </p>
        <p>
            See
            <a class="link" href="motor.html#motor-banking" title="23.1. Stadium Playback banking">MQ500M Playback banking</a>
            .
        </p>
    </div>
    <div class="section">
        ### 16.4.11. Manual Control
        <p>
            To the right of the 10 playbacks is the manual control section, consisting of a Manual Fader, four buttons (GO, PAUSE, FWD,
            BKWD) and an extra large GO button below the fader. This section controls the current playback – that is the playback whose
            SELECT button is illuminated.
        </p>
        <p>
            Pressing the SELECT button associated with a playback causes that playback to become the current playback and hence to be
            controlled by the manual section.
        </p>
        <p>
            When a playback is controlled by the manual section, the playbacks fader and buttons continue to function as normal so that the
            HTP level can be set using the fader and the playback can be bumped using the FLASH button. The manual section simply provides
            extra control features above those available on each of the playbacks.
        </p>
        <p>
            The GO and PAUSE buttons in the manual section have the same function as the GO and PAUSE buttons on each playback. The FWD and
            BKWD buttons move through the Cue stack without fading. The extra large GO button below the Manual Fader is designed for theatre
            style playback and has the same function as the GO button on each playback.
        </p>
        <p>
            If multiple SELECT buttons are held down then the Go, Pause, Fast Forward and Fast Back buttons in the manual control section
            can be used to control multiple Playbacks simultaneously.
        </p>
        <p>
            The Manual Fader is unlike all the other faders in that it controls the progress of the current CUE rather than the HTP level of
            the Cue Stack. This enables a Cue to be manually faded, the level of the Manual Fader representing the % of the fade that is
            complete - from 0% to 100%.
        </p>
        <p>
            The Manual Fader enables you to fade in a Cue Stack. To start a manual crossfade, hold the SELECT button for the playback and
            move the crossfader. The display window will show "pickup" until the crossfader level matches the current position in the fade -
            it will then change to "manual". You can also start a manual crossfade on the currently selected playback by holding SHIFT and
            moving the crossfader.
        </p>
        <p>As the fader reaches the limits of the Cue Stack it moves to the next Cue.</p>
    </div>
    <div class="section">
        ### 16.4.12. Goto
        <p>
            The GO buttons in the manual section can also be used to jump to a different Cue id in a Cue Stack – enter the Cue ID in the Cue
            Stack and press the Go button in the manual section.
        </p>
        <p>It is also possible to perform a Goto and a Preload of the next step to got to in the Cue Stack Window.</p>
    </div>
    <div class="section">
        ### 16.4.13. Manual Split Crossfade
        <p>Two faders may be assigned as theatre style split crossfade masters.</p>
        <p>
            When enabled from the Setup Window, playbacks faders 9 and 10 become Crossfade Masters for manual Fade In and Fade Out. Pressing
            the Pause button on either playback 9 or 10 brings the current playback under manual control.
        </p>
        <p>The two faders can then be used to fade in each new Cue with separate control for fade in and fade out.</p>
        <p>Pressing the Go button on either Playback 9 or 10 returns the current playback to normal Cue execution.</p>
        <p>When enabled, playbacks faders 9 and 10 can not be used as normal playbacks.</p>
    </div>
    <div class="section">
        ### 16.4.14. Rate Sub Master
        <p>
            It is possible in the Setup Window to set the function of manual crossfade fader to be a rate sub-master to control the
            execution rate of the current playback, or the global execution rate of all playbacks. The rate is shown in the bottom right of
            the Status Display from 0% to infinity. The fader should be set to 50% for normal execution rate.
        </p>
        <p>The options are:</p>
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">Rate Master</li>
                <li class="listitem">Global Rate Master</li>
                <li class="listitem">Cue Stack Rate Master</li>
                <li class="listitem">Cue Stack Global Rate Master</li>
                <li class="listitem">Club Master</li>
                <li class="listitem">Tested Stacks Rate Master</li>
            </ul>
        </div>
        <p>
            The Rate Master and Global Master affect both the Cue Stack times, FX times and Pixel FX times. The Cue Stack Rate Master and
            Cue Stack Global Rate Master control just the rate of the Cue Stack (not the FX in it).
        </p>
        <p>The Club Master affects both Cue Stack times, FX Times, Pixel FX Times and Cue Stack from the Execute window.</p>
        <p>
            Tested Stacks Rate Master – only tested Cue Stacks from the Execute Window or externally triggered are affected by rate changes.
        </p>
    </div>
    <div class="section">
        ### 16.4.15. Tap to time
        <p>
            It is possible to change the chase speed or FX speed using Tap to Time. Holding the S button of the playback and then pressing
            soft button Y (2nd soft button up on right side of touch screen).
        </p>
        <p>
            If the current step in the Cue Stack is set to Chase Timing then the Chase speed will be modified. If the step is set to Cue
            Timing then the FX speed of any FX in the current Cue will be modified.
        </p>
        <p>
            If a Cue Stack is set to Chase Timing then the GO button can also be used to tap the time. Note that this only works on chases
            when the option "Go Jumps Out of Loop" is set to "No".
        </p>
        <p>
            It is also possible to configure the S buttons or the GO buttons to perform Tap to Time – Setup, View Settings, Playbacks, Tap
            to time buttons.
        </p>
        <p>
            Tap to Time can also be triggered from
            <a class="link" href="osc.html#_automation" title="45.2.2. Automation">Autom</a>
            events.
        </p>
        <p>
            The
            <a class="link" href="remote-input.html" title="Chapter 42. Remote Input port">remote input</a>
            can also be set to always tap to time the currently selected playback.
        </p>
        <p>
            It is possible to set the GO button in the Master Crossfade Section to a Selected Playback or Global Tap to Time button. In the
            Setup Window, View Settings, Playback, set Crossfade button function to "Tap To Time Selected" or "Global Tap to Time". "Tap to
            Time Selected" affects the absolute rate of the currently selected Playback. "Global Tap to Time" affects the absolute rate of
            all active playbacks.
        </p>
    </div>
    <div class="section">
        ### 16.4.16. Global Tap to Time
        <p>
            When the Crossfade button function is set to "Global Tap to Time" then the absolute rate of all active playbacks can be
            controlled. This is also possible through a Global Tap button in the Execute Window.
        </p>
        <p>
            Cue Stacks can be set to use a divisor of the tapped time - in Cue Stack Options, Audio set the rate of the Rate Divisor - by
            default it is set to "Normal" and takes the tapped time. Options include "Div by 2" to "Div by 8" and "Mult by 2". The divisor
            affects setting of the rate by tap to time either as the selected playback, as part of global tap to time, or as part of audio
            BPM rate setting.
        </p>
        <p>
            Cue Stacks can also have the Rate Divisor can be set to "Inhibit" - in this case the rate of the Cue Stack is never affected by
            global tap to time options. This allows Global Tap to Time to be used without affecting particular Cue Stacks.
        </p>
        <p>
            Tap to time affects the absolute rate of the Cue Stack - if it is a Chase, then the Chase Speed, or if it is a Cue Stack Step
            with FX then the FX rate - the programmed rate of the Cue Stack or Cue is changed. The programmed rate is then modified by the
            relative speed controllers - it can be reduced by speed masters and fader controls FX speed options before being potentially
            increased or decreased by the playback rate/global rate masters.
        </p>
    </div>
</div>
<div class="section">
    ## 16.5. Playbacks Window
    <p>
        The Playbacks Window enables management of all 202 playbacks regardless of how many physical wings are attached. This ensures that
        shows that will be run on consoles with wings can be programmed on a MagicQ system without wings. It also provides an ideal way of
        expanding your show control by using virtual playbacks.
    </p>
    <p>
        The Playbacks Window displays a button for each of the 202 playbacks. On Compact console this starts with the 10 main playbacks and
        then with 8 wings each with 24 playbacks.
    </p>
    <p>On MQ500 there are 15 main fader playbacks, with the 15 button playbacks below and then wings each with 24 playbacks.</p>
    <p>
        On MQ500M there are 15 main fader playbacks, with the 15 encoder playbacks below, repeated six times for six playback banks of 30
        playbacks. Following this is a bank of 12 that is used for the 4x3 Execute buttons when they are set to Playbacks.
    </p>
    <p>
        The top right encoder is used to select which Page of playbacks is displayed. This is completely separate from the Page used for the
        physical playbacks - you can have the physical playbacks set to one page whilst you view and modify playbacks on a different page.
    </p>
    <p>
        Cues can be recorded onto any of the playbacks in the same way as they are recorded onto a real playback. After pressing RECORD,
        instead of selecting a playback SELECT button, just press the appropriate button in the Playbacks Window.
    </p>
    <div class="section">
        ### 16.5.1. Testing playbacks
        <p>
            Any playback can be tested, by pressing the button in the Playbacks Window. This has the same effect as raising the physical
            fader from zero to full. Pressing the button again sets the fader back to zero. We will refer to this as a virtual playback.
        </p>
        <p>
            You can use physical playbacks and virtual playbacks simultaneously - however if you activate a virtual playback for an active
            physical playback then the result will depend on whether the physical playback and the virtual playback are on the same page. If
            they are, then the effect will be that the playback will be activated and set to the highest level of the physical playback and
            the virtual playback. If not, then the physical playback will not be affected and the virtual playback will be ignored. This is
            because only one Cue Stack can be run on a playback.
        </p>
        <p>
            Use the View Faders soft button to change the view in the Playbacks Window into faders rather than buttons. Faders can then be
            moved up and down using the touch screen / mouse. This enables full control of virtual playbacks. The GO, PAUSE and RELEASE soft
            buttons enable immediate control of virtual playbacks.
        </p>
        <p>
            You can select a virtual playback as the currently selected playback by pressing the SELECT button and then pressing the
            required virtual playback in the Playbacks Window. This enables the Cue Stack from the virtual playback to be controlled,
            including the modification of Cues and Cue Stack parameters.
        </p>
        <p>
            In the Playback Window there is a soft button to release all test Cues, Cue Stacks and Playbacks. This does not release
            Playbacks that have been activated on real faders or buttons. This function is also available on the short cut CTRL + RELEASE.
        </p>
    </div>
    <div class="section">
        ### 16.5.2. Naming playbacks
        <p>Playbacks can be named in the Playbacks Window as per naming of any Windows item.</p>
    </div>
    <div class="section">
        ### 16.5.3. Copying and moving playbacks
        <p>
            Playbacks can be moved and copied in the Playbacks Window just like any Window item. You can also change the Playback Window
            page between selecting the source and destination, so that you can copy or move between pages.
        </p>
        <p>
            When a Playback is moved, any Cue Stacks from Playbacks on the same page that have Cue Stack macros that reference that playback
            will be updated to reference the destination Playback. This only affects Playbacks on the same page - Cue Stack macros from Cue
            Stacks on different pages or in the Execute window will not be updated.
        </p>
        <p>
            When a Playback is copied to another Playback, the Cue Stack on the source playback is copied (i.e. a new Cue Stack is
            generated) to the destination Playback. By default, the Cues that make up the Cue Stack are not copied - both Cue Stacks
            reference the same Cues. This means, for example, that you can generate several copies of a chase, each with the same Cues but
            with different chase speeds.
        </p>
        <p>
            You can force an unlinked copy of Cue Stacks by holding SHIFT down when you press the COPY button and electing Unlinked. This
            forces both the Cue Stack and its Cues to be copied.
        </p>
    </div>
    <div class="section">
        ### 16.5.4. Removing playbacks
        <p>Playbacks can be removed in the Playbacks Window as per removing of any Windows item.</p>
    </div>
    <div class="section">
        ### 16.5.5. Playback Rate
        <p>
            It is possible to set the playback rate of a Playback using Encoder X in the Playback Window. Press the S button of the required
            playback to choose which playback to change.
        </p>
        <p>
            By default the playback rate is locked to 100%. Press the X soft button to enable changes to playback rates. The playback rate %
            is shown for each of the main playbacks when the % is other than 100%.
        </p>
        <p>The playback rate is stored in the show file, so that the rate will persist over resets and power downs.</p>
        <p>Global playback rate can be set using the Y soft button in a similar way.</p>
        <p>
            If you have accidentally set playback rates then you can reset all playback rates to 100% using the top soft button RESET ALL
            RATE.
        </p>
    </div>
    <div class="section">
        ### 16.5.6. Checking Active playbacks
        <p>
            Playbacks can only be active on one page at a time. To view which page a playback is active on press the VIEW ACTIVE soft
            button.
        </p>
        <p>
            In this view, the active playbacks are shown together with the page that they are active on. The top soft buttons, GO, PAUSE and
            RELEASE can be used on the active playbacks. Playbacks that are not active show the Cues Stack that would be activated if that
            playback was activated.
        </p>
    </div>
    <div class="section">
        ### 16.5.7. Moving Playbacks for all pages
        <p>
            It is possible to move playbacks on all pages to a new playback number. This is particularly useful when converting a show from
            Compact console (10 main faders) to MQ500 (15 main faders).
        </p>
        <p>Select the top soft button VIEW ALL. In previous version this was on soft button B.</p>
        <p>It is possible to move multiple playbacks (and pages) at one time.</p>
        <p>
            Moving will now move the Cue Stacks on all pages to the new playback. It is also possible to copy and remove - but use these
            with care!
        </p>
    </div>
    <div class="section">
        ### 16.5.8. Speed Masters
        <p>Press VIEW SPD MASTERS to view and change Speed Masters. The following fields are supported:</p>
        <div class="informaltable">
            <table class="informaltable" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                </colgroup>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>ID</p></td>
                        <td align="left" valign="top"><p>The ID of the Speed Master</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Status</p></td>
                        <td align="left" valign="top"><p>When set to enabled the Speed Master is active.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Running</p></td>
                        <td align="left" valign="top">
                            <p>When a Speed Master is active this affects whether all the controlled FX and chases are running or halted</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Divisor</p></td>
                        <td align="left" valign="top"><p>The Divisor can be set to values between /32 to *32.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Previous BPM</p></td>
                        <td align="left" valign="top"><p>Shows the previous tapped BPM</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Attributes</p></td>
                        <td align="left" valign="top"><p>Determines which attribute types are affected by the Speed Master</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Fader 200%</p></td>
                        <td align="left" valign="top">
                            <p>When the Speed Master is on a fader then fader at full is 200%, fader at half is 100%.</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Tap syncs beat</p></td>
                        <td align="left" valign="top"><p>When Tapping speed, MagicQ will phase sync FX to the beat</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Timing</p></td>
                        <td align="left" valign="top"><p>Timing type of Per Head or FX Timing</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Link</p></td>
                        <td align="left" valign="top"><p>Link this Speed Master to the previous one</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Source</p></td>
                        <td align="left" valign="top">
                            <p>Enable the BPM to be sourced from audio input or DJ system instead of the Tap’d BPM</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>
            When a Speed Master is set to timing type of Per Head this overides the Timing field in the FX. When timing is set to FX Timing,
            the timing type will be taken from the FX timing field.
        </p>
        <p>When a Speed Master is disabled it has no effect at all on FX or chases assigned to that Speed Master.</p>
        <p>
            When Speed Masters are linked they take their BPM and BPM source from lowest numbered Speed Master linked. The divisor, active
            state and running/halt continue to operate independently for each Speed Master.
        </p>
        <p>Source can be Tap, Audio BPM, Audio Beat, DJM BPM and DJ Beat.</p>
        <p>To remove a Speed Master use the REMOVE button.</p>
        <p>
            There is more info on Speed Masters in the
            <a class="link" href="busking.html#busking-speed-masters" title="19.12.5. Speed Masters">Busking section</a>
            .
        </p>
    </div>
</div>
<div class="section">
    ## 16.6. Bank Pages
    <p>
        Banks of playbacks can operate on different pages. This is a very powerful feature as it allows the playbacks to be split into
        separate sections without forcing all the playbacks to be on the same page.
    </p>
    <p>
        This provides significant flexibility to how shows are played back – for example one bank can be used to control traditional lamps
        whilst another could be used to control intelligent heads. Changing the Page of the par lamps would not change the Page of the
        heads.
    </p>
    <p>
        By default the page buttons on the main section affect all playbacks whilst the buttons on all other banks only affect that bank. If
        you plan to operate a bank section separately then you can avoid the main page buttons affecting that bank section. In the Setup
        Window, select VIEW SYSTEM, VIEW WINGS.
    </p>
    <p>
        Playback wings support 24 playbacks divided into two banks (rows) of 12 playbacks refered to as the upper and lower banks. Each bank
        of playbacks has separate NEXT PAGE and PREV PAGE buttons.
    </p>
    <p>
        For each bank you can specify which page buttons the bank is tied to. To operate a section independently of any other page buttons
        set the tie to be itself. For example, to operate the upper bank of Wing 1 independently set the upper bank tie to Wing 1 upper.
    </p>
    <p>
        You can also tie multiple wing banks together to use one set of page buttons. Thus if you want both banks of a wing to operate off 1
        set of buttons, then you can configure the ties to do this.
    </p>
    <p>When any NEXT PAGE or PREV PAGE buttons are pressed the LCD displays temporarily change to indicate the current page number.</p>
    <p>
        You can jump to a Wing Playback Page by entering a page number, then holding the Wing NEXT PAGE button and pressing the Wing PREV
        PAGE button.
    </p>
</div>
<div class="section">
    ## 16.7. Default Cue Stacks
    <p>
        Cue Stacks can be made to appear on all pages of a Playback. To use this feature, record a Cue Stack on Page 1 and then in the
        Playbacks Window set "Default Cue Stack" to "On" for the selected Playback.
    </p>
    <p>The Cue Stack on Page 1 then appears on any Pages which do not have a Cue Stack assigned.</p>
</div>
<div class="section">
    ## 16.8. Synchronising Playbacks
    <p>
        It is possible to synchronise the Cue Stacks on two or more Playbacks. Set the "Sync next playback to this one" option. MagicQ
        matches the Cue Ids in the Cue Stack so it is possible to have different numbers of Cues in the Stacks. If there is no Cue Id
        matching in the next Cue Stack then it will remain at the current Cue.
    </p>
    <p>
        It is possible to have several Playbacks synced to one master Playback by setting the option "Sync next playback to this one" on the
        master and each adjacent Cue Stack, except for the last one in the chain. MagicQ tries to match the Cue Id within each Cue Stack to
        the master Cue Stack.
    </p>
</div>
<div class="section">
    ## 16.9. Set lists
    <p>
        It is possible to save and load set lists in the Page Window. Set lists are simply text files with a list of page names. When the
        set list is loaded, MagicQ rearranges the pages so that they are in the order specified in the set list. Pages that are not
        specified in the set list (for example songs not being used today) are moved after all the pages specified in the set list file.
    </p>
    <p>
        To use set lists, first name all the pages in the Page Window according to the song name or section name. You can then save this as
        a set list by pressing the Save Set List soft button – the file is saved into the show folder with a .txt file extension. You can
        edit this file with a text editor (e.g. Windows Notepad) to rearrange the songs. Load the set list back into MagicQ using the Load
        Set List soft button.
    </p>
</div>
