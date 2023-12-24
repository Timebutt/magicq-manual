---
id: editing-cues
title: Chapter 14. Editing Cues
sidebar_position: 14
---

# Chapter&nbsp;14.&nbsp;Editing Cues
<div class="section">
    ## 14.1.&nbsp;Including Cues into the Programmer
    <p>
        A programmed Cue can be included back into the Programmer so that the information can be used to program further Cues. When a Cue is
        included all the level, timing and FX information is loaded.
    </p>
    <p>
        Cues can be included directly from Playbacks - the current Cue in the Cue Stack is included. Cues can also be included from the Cue
        Stack, Cue and Cue Store Windows. Including of Cues is an easy way to edit Cues.
    </p>
    <p>To include a Cue press INC and the S button of the Playback. The current Cue on that playback will be included.</p>
    <p>INC S</p>
    <p>To include a specific Cue on the Cue Stack enter the Cue ID - for example to include Cue 2.00 use</p>
    <p>INC 2 S</p>
    <p>
        You can also use keypad syntax or the Record Options to specify that only part of the Cue should be included into the programmer –
        for example only certain attributes or only selected heads.
    </p>
    <p>INC POS COL S</p>
    <p>GROUP 1 INC S</p>
    <p>101 INC POS S</p>
    <p>To specify a Group or Head and a Cue ID use / to separate the Head No or Group ID and the Cue ID.</p>
    <p>GROUP 1 INC / 2 S</p>
    <p>101 INC / 2 S</p>
    <p>The alternative order keypad syntax is also supported, but HEAD must be used to specify HEAD numbers to distinguish from Cue IDs.</p>
    <p>INC HEAD 101 S</p>
    <p>INC HEAD 101 / 2 S</p>
    <p>INC GROUP 1 S</p>
    <p>INC GROUP 1 / 2 S</p>
    <p>
        Masking can be selected quickly by holding Intensity, Position, Beam or Colour and pressing INCLUDE for including only the selected
        attributes.
    </p>
    <p>Press SHIFT and INCLUDE to get the full include options.</p>
    <p>
        By default only the data recorded into the specified Cue is included into the programmer. Use the Entire State option when including
        Cues into the programmer to include the whole tracking state of a Cue. The short cue ALL + INCLUDE can be used to select Entire
        State.
    </p>
    <p>
        When Cues are included into the Programmer then the channels from the Cue are automatically selected if the Setup option "Select
        Heads on Include" is set. At any time, CTRL + ALL selects all heads in the programmer.
    </p>
    <p>Include from a playback uses the current Cue unless a Cue ID is specified.</p>
    <div class="section">
        ### 14.1.1.&nbsp;Including Cues at a specified level
        <p>
            By default Include loads the Cue into the programmer at 100%. It is possible to modify this action using the keypad to use
            selected levels.
        </p>
        <p>
            To include a Playback or Cue at a particular level (e.g. 40%), press INCLUDE, type @ 40 and select the Playback or Cue to
            include.
        </p>
        <p>To include a playback at its current level press INCLUDE, type @ and press the Select button of the playback.</p>
    </div>
    <div class="section">
        ### 14.1.2.&nbsp;Snapshot
        <p>
            The Snapshot function enables the complete current output to be loaded into the programmer and hence recorded into a Cue. This
            function takes the Cues running on all active playbacks and includes them into the programmer based on the level of the fader.
            Both channel information and FX information is included into the programmer.
        </p>
        <p>To snapshot the current output, open the Programmer Window and press the Snapshot soft button.</p>
        <p>There is a shortcut for recording a complete snapshot - hold THRU and press REC.</p>
    </div>
</div>
<div class="section">
    ## 14.2.&nbsp;Editing using Include and Update method
    <p>
        Cues can be edited using INCLUDE and UPDATE. This includes the Cue data into the programmer where it can then be changed, before it
        is saved back to the Cue using Update.
    </p>
    <p>
        First, clear the Programmer, then include the required Cue back into the Programmer. Modify the required values in the Programmer
        and then use Update to re-record the Cue.
    </p>
    <p>
        You can include multiple Cues into the programmer. When you press UPDATE, the last Cue that you included will be modified. The
        Status Display shows which Cue was the last one to be Included.
    </p>
</div>
<div class="section">
    ## 14.3.&nbsp;Record Merge (Updating a Cue with the contents of the programmer)
    <p>
        You can quickly and easily merge the contents of the programmer into the current Cue on a Playback by holding the S button for the
        playback and pressing REC. The programmer is merged into the current Cue on the Playback.
    </p>
    <p>
        To merge into a specific Cue on a Playback, hold + and REC to select Record Merge and then type the Cue ID on the keypad before
        pressing the S button for the Playback.
    </p>
</div>
<div class="section">
    ## 14.4.&nbsp;Making changes to multiple Cues
    <p>
        Changes can be made to multiple Cues using the REC MERGE and REC REMOVE record options to specify a change in the programmer which
        is then merged with or removed from a number of Cues.
    </p>
    <p>There are some short-cuts for selecting RECORD MERGE and RECORD REMOVE</p>
    <p>Hold ‘+’ and press REC for REC MERGE</p>
    <p>Hold ‘-‘ and press REC for REC REMOVE</p>
    <p>Then press a S button and MagicQ will ask whether to merge into the current Cue on the Cue Stack or the Entire Cue Stack.</p>
    <div class="section">
        ### 14.4.1.&nbsp;Changes to multiple Cues using keypad
        <p>
            MagicQ supports record merging / record removing to a range of cues using the keypad – for example, to merge into Cue ids 2
            through 4:
        </p>
        <p>RECORD MERGE 2 THRU 4 S</p>
        <p>This function also works for the shortcuts – e.g. holding S and then typing a range of Cue Ids before pressing RECORD.</p>
        <p>Both the THRU and the + and – operators are supported.</p>
    </div>
    <div class="section">
        ### 14.4.2.&nbsp;Changes to multiple Cues using Cue Stack window
        <p>To remove all the pan and tilt information for a group of heads from all the Cues in a Cue Stack on a particular playback.</p>
        <p>Clear the programmer.</p>
        <p>Select the heads and modify the pan and tilt attributes.</p>
        <p>Open the Cue Stack Window and select the playback with the Cue Stack to modify.</p>
        <p>In the Cue Window, use cursor keys to select all the Cues (PG LEFT, HOME, SHIFT+END).</p>
        <p>Press SHIFT + RECORD and select REC REMOVE record option.</p>
        <p>Press ENTER.</p>
    </div>
</div>
<div class="section">
    ## 14.5.&nbsp;Editing using Update
    <p>
        MagicQ supports a function for easy updating of Cues and Palettes without first Including the Cues and Palettes. This is useful when
        making modifications to a pre-programmed show.
    </p>
    <p>
        When you press Update (when not in Include Mode) a list of all the Palettes and Cues that have been over-riden is shown. You can
        then choose which of the Palettes and Cues to update by selecting from the select box. One you have finished your selection press
        the "Done" button. You can press "Cancel" at any point to cancel the Update.
    </p>
    <p>
        When using a tracking Cue Stack, MagicQ will show all the Cues that have been overriden in the Stack – hence you can make an update
        even if the attributes were used in a previous Cue on that Cue Stack.
    </p>
    <p>Pressing SHIFT + UPDATE forces an update using the above method even if a Cue was previously included.</p>
</div>
<div class="section">
    ## 14.6.&nbsp;Direct Modification of Intensities in Cues
    <p>
        To add or change the intensity of heads (or dimmer channels) recorded into a Cue on a Playback without using the programmer, press
        and hold the SELECT button of the Playback with the Cue to be modified. Then use the keypad to adjust the intensity channels – e.g.
        typing 1 THRU 4 @ FULL will add channels 1 to 4 at FULL into the current Cue on the Playback. The change is immediate and permanent.
        The programmer is not affected.
    </p>
    <p>
        Setting intensities in a Cue can be absolute - e.g. setting some heads to 50% - or relative, e.g. setting some heads +10% where they
        are already used.
    </p>
    <p>To remove a level from the current Cue on a Cue Stack – hold the S button and set the channel at the special level . .</p>
    <pre class="literallayout">For example, whilst holding S type</pre>
    <div class="itemizedlist">
        <ul class="itemizedlist">
            <li class="listitem">1 @ FULL Sets head 1 to FULL in current cue on Playback with S held</li>
            <li class="listitem">1 @ +10 Adjusts head 1 intensity +10% in current cue on Playback with S held</li>
            <li class="listitem">1 @ FULL THRU Sets head 1 to FULL in all cues on Playback with S held</li>
            <li class="listitem">1 @ +10 THRU Adjusts head 1 intensity +10% in all cues on Playback with S held</li>
            <li class="listitem">1 @ .. THRU Removes head 1 intensity in all cues on Playback with S held</li>
        </ul>
    </div>
    <p>
        Note that in order to use THRU at the end of the syntax line to select all Cues in the Playback the Setup option, View Setup, View
        Settings, Keypad, Auto Enter on Intensity Set, must be set to No.
    </p>
</div>
<div class="section">
    ## 14.7.&nbsp;Copy heads in Cues
    <p>
        Head information can be copied from heads within a Cue/Cue Stack to other heads within the Cue Stack. The destination heads do not
        have to have been in the Cue/Cue Stack prior to the copy.
    </p>
    <p>From v1.9.1.0 use the following</p>
    <p>GROUP 1 COPY GROUP 2 S</p>
    <p>101 COPY 102 S</p>
    <p>To copy individual attribute types only</p>
    <p>GROUP 1 COPY POS GROUP 2 S</p>
    <p>The @ syntax is also supported</p>
    <p>COPY GROUP 1 @ GROUP 2 S</p>
    <p>COPY 101 @ 102 S</p>
    <p>COPY POS GROUP 1 @ GROUP 2 S</p>
    <p>
        If a Playback has more than one step then MagicQ will offer the choice of copying heads in the Entire Cue Stack or in a specific
        Cue. It is also possible to manually enter the steps to copy heads in before pressing the S button.
    </p>
    <p>
        The process of a selecting a Cue Stack and Cues is similar to the process when record merging or record removing in Cues/Cue Stacks
        - just in this case a copy head data operation is carried out instead of a merge/remove from the Cue/Cues.
    </p>
    <p>Prior to v1.9.1.0 or to use specific attribute masking use one of the following:</p>
    <div class="itemizedlist">
        <ul class="itemizedlist">
            <li class="listitem">Hold + and COPY</li>
            <li class="listitem">Press SHIFT + COPY and select the COPY HEADS option</li>
            <li class="listitem">Press COPY HEADS option from the Copy toolbar (when Always Show Record Options = Yes)</li>
        </ul>
    </div>
    <p>Once in COPY HEADS mode choose the heads to copy by either selecting from the keypad</p>
    <p>2 @ 3 ENTER</p>
    <p>Or from the Group Window by selecting a source and destination Group.</p>
    <p>Finally select an item to copy heads in - for example press the S button of a Playback.</p>
</div>
