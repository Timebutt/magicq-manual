---
id: Group-Cues
title: Chapter 20. Group Cues
sidebar_position: 20
---

# Chapter 20. Group Cues
<p>
    Group Cues enables shows to be built up based on group programming rather than individual head programming. FX, fans and split times are
    programmed within the group rather than on an individual basis.
</p>
<p>
    Group Cues provide a very powerful and simple way of changing a show to use new fixtures types without having to reprogram Cues. If the
    group is changed to have different or additional heads then the programming is automatically recalculated over the new Heads within the
    group.
</p>
<p>
    It has the advantage over morphing that information is retained in the Group based Cues even if very different fixtures are used, and
    even allows the entire Patch to be deleted and new different heads patched in their place. It can even be used mid show to repurpose a
    head if one fails.
</p>
<p>
    MagicQ has previously supported Group based FX since 2015. Group Cues extends Group based FX so that the entire Cue, including the
    levels and times is now based on Groups attributes rather than on individual heads.
</p>
<p>Group Cues is enabled via the Group Cues setting in Setup, View Settings, Cue Storage. The options are:</p>
<div class="informaltable">
    <table class="informaltable" cellpadding="4px">
        <colgroup>
            <col class="col_1" />
            <col class="col_2" />
        </colgroup>
        <tbody>
            <tr>
                <td align="left" valign="top"><p>Disabled</p></td>
                <td align="left" valign="top">
                    <p>
                        MagicQ activates levels, times and FX by Head. MagicQ does not store levels or times as Group Cues. Group FX can
                        continue to be stored in Cues.
                    </p>
                </td>
            </tr>
            <tr>
                <td align="left" valign="top"><p>Prefer Group Cues</p></td>
                <td align="left" valign="top">
                    <p>MagicQ activates attributes and FX by Group. MagicQ stores Cues with Groups and Heads.</p>
                </td>
            </tr>
            <tr>
                <td align="left" valign="top"><p>Prefer Group Cues (Warn)</p></td>
                <td align="left" valign="top">
                    <p>MagicQ activate`s attributes and FX by Group. MagicQ warns if Cues are recorded with individual head levels or FX</p>
                </td>
            </tr>
            <tr>
                <td align="left" valign="top"><p>Group Cues Only</p></td>
                <td align="left" valign="top">
                    <p>
                        MagicQ activates attributes and FX by Group. Cues can only be recorded if Programmer does not have individual head
                        levels or FX
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<p>
    MagicQ continues to support selection of heads using Groups or Heads. Groups are selected either directly from the Group Window or using
    keypad shortcuts. When Groups are selected they show red in the Group Window. Heads can be selected directly from Group, View Heads or
    from keypad shortcuts and automatically deselect any selected Groups.
</p>
<p>
    When Group Cues is in operation then whenever Groups are selected then MagicQ will activate attributes and FX by Group rather than by
    Head. For each selected Group the level and fade time of each attribute used by Heads in the Group can be specified.
</p>
<p>
    Operation and programming occurs exactly the same as normal programming - Locating, using palettes, using attribute encoders, and using
    keypad shortcuts.
</p>
<p>
    If individual Heads are selected from the Group, View Heads Window or from the keypad then the Groups will not be selected (no Groups
    coloured red in Group Window) and MagicQ activates by Head rather than by Group.
</p>
<p>
    If Heads are sub selected - for example by pressing NEXT HEAD, SINGLE or ODD/EVEN then whilst the sub selection is in operation then
    MagicQ activates by Head. If ALL is then pressed then MagicQ will revert to activating by Group.
</p>
<p>
    At any time you can deselect the Groups by pressing the DESELECT GROUPS soft button in the Group Window. This button is only shown when
    Group Cues is enabled - when Group Cues is disabled this is the ADD GROUP FX button.
</p>
<p>
    When recording to Cues, the Cues can contain Group based attribute levels and Head based levels. The Head based levels take priority
    over the Group based levels.
</p>
<p>
    Heads can be in multiple Groups so it is possible to create Cues with multiple Groups referencing the same Head. The latest Group added
    (lowest down the list in Prog and Cue windows) takes priority.
</p>
<div class="section">
    ## 20.1. Group Levels
    <p>When a Group of heads is first activated they start from the current value of the first head in the Group.</p>
    <p>
        If the Heads are Located then MagicQ marks those attributes as Located in the Group Cue. MagicQ will always use the current Locate
        value for the Heads, not the value when the Group Cue was created - this enables Heads in the Group to be changed and the Locate
        Value of the new Heads to be used. The Prog and Cue Windows show L when using a Located attribute.
    </p>
    <p>
        When a Palette is selected then MagicQ stores the Palette. The Prog and Cue Windows will just show the Palette. Any changes using
        the encoder wheels will be applied as an offset to the Palette - the Prog and Cue windows show as the Palette + or - the offset.
    </p>
    <p>
        When hard values are selected (using encoder wheels, soft buttons, or keypad) then MagicQ will store the range information wherever
        possible, as well as the hard value. This helps when selecting Groups with heads of different types and when changing the Heads
        within a Group.
    </p>
    <p>
        Group levels are always stored as 16bit, regardless of the Heads that are currently in the Group - thus making enabling easy change
        between Heads with 16bit and 8bit attributes.
    </p>
    <p>If Heads in the Group have virtual dimmers then any Intensity in the Group Levels will be applied to the virtual dimmers.</p>
    <p>
        Wherever possible it is recommended to use Palettes rather than hard values in Group levels. This is particularly important when
        using Groups with mixed Head types, where hard values on some attributes (e.g. Strobe channel) may result in different operation on
        the different Head Types. By using Palettes, the correct values are used for each Head Type.
    </p>
    <p>Whenever Heads are added, removed or reordered from the Group the levels will be recalculated according to the new Head types.</p>
</div>
<div class="section">
    ## 20.2. Fanning
    <p>
        Group Cues support fanning - simply select the Group and fan the heads as normal. The fan will be stored as part of the Cue
        including the fan type, fan parts and fan segments. The fan will be recalculated over all the Heads in the Group whenever the Group
        is changed.
    </p>
    <p>
        The fan is shown in the Prog and Cue window with the start and end range of the fan separated by a &gt; (Fan from End) or a &lt;&gt;
        (Fan Symmetric) or a &gt;&gt; (Fan Asymmetric).
    </p>
    <p>Whenever Heads are added, removed or reordered from the Group the fanning will be recalculated.</p>
    <p>
        Group Cues can be fanned between two palettes - when in Fan mode choosing two Palettes in turn will fan between the two Palettes.
        Note that the two Palettes must be chosen within 5 seconds of each other.
    </p>
</div>
<div class="section">
    ## 20.3. Group Elements
    <p>For Groups without Elements set, the levels will be set for all Elements of a Head.</p>
    <p>For Groups with Elements set, the levels will be set for the Elements from that Group on each Head in the Group.</p>
    <p>For Groups with Head Elements set, the levels will be set for the Head Elements from that Group.</p>
    <p>Groups that are only Element Groups (i.e. have Type set to Elements) are not used in Group Cues.</p>
</div>
<div class="section">
    ## 20.4. Fade Times
    <p>
        Group levels use the same fade times as Head levels by default - i.e. the Int, Pos, Col, Beam times from Prog, View Times, Simple
        View and Cue, View Times, Simple View.
    </p>
    <p>
        In addition a fade time, delay time and fade type can be set as required for each Group attribute, in the same way that individual
        times can be set for individual Heads.
    </p>
    <p>When set, the fade time, delay time and fade type apply to that attribute for all Heads within the Group.</p>
    <p>
        The fade times can be fanned using the standard automatic fan times syntax - for example 3* will offset the fade times across the
        Group over 3 seconds, whilst 3*+ will offset into centre of the Group.
    </p>
    <p>
        Fanned fade times are shown in the Prog, View Times, Adv View and Cue, View Times, Adv View and can be entered directly in the
        attribute field.
    </p>
    <p>
        Fanned fade times can also be viewed and set in the Prog, View Times, Simple View and Cue, View Times, Simple View. Select the
        required Group (s) in order to view/change just those Groups in the Individual Times rows.
    </p>
    <p>
        Manual fanned delay and fade times can be set in the attribute fields using the standard individual head syntax and are shown with a
        &gt;&gt; for asymmetrical, a &lt;&gt; for symmetrical and a &gt; for from the end.
    </p>
    <p>Whenever Heads are added, removed or reordered from the Group the times will be recalculated.</p>
</div>
<div class="section">
    ## 20.5. Recording
    <p>
        Cues are recorded in the normal way. It is possible to merge and to remove Group data from Cues just like for individual Head data.
        Recording of selected heads and record masking is supported.
    </p>
    <p>
        In the Prefer Group Cues (Warn) mode, then when recording to a Cue if the Programmer contains individual head data (levels or FX)
        then MagicQ displays a warning box, to help prevent accidental recording of non Group based Cues.
    </p>
    <p>
        In the Group Cues Only mode, when recording to a Cue if the Programmer contains individual head data (levels or FX) then the record
        is totally blocked.
    </p>
    <p>
        Palettes always get recorded by Head regardless of whether the information is in the Programmer as Group attributes or Head levels
        and regardless of the Group Cues mode. This enables, for example, positions or gobo focus to be set up for each individual Head.
    </p>
</div>
<div class="section">
    ## 20.6. Including / Update
    <p>
        Cues can be included in the normal way and both the Group and Head data from the Cue will be loaded into the programmer. Including
        of selected heads and masking is supported. When using selected heads only the Groups that are selected will be loaded into the
        programmer, along with any individual data for those selected heads.
    </p>
    <p>Update works in the normal way and both the Group and Head data will be updated into the Cue.</p>
    <p>The Update only method of updating is supported for Group Cues like with Head Cues.</p>
    <p>Patch Offset can be applied using Group Cues just like for individual Head Cues.</p>
</div>
<div class="section">
    ## 20.7. Active / Snapshot
    <p>
        Attributes can be made active in the normal way. Attributes for the selected Groups that are active on Playbacks will be brought
        into the programmer, along with any individual head data for those selected heads.
    </p>
    <p>
        Snapshot will always snapshot Head values rather than Group values, so this is not recommended if you wish to keep your show using
        Group Cues.
    </p>
</div>
<div class="section">
    ## 20.8. Copying Head values
    <p>
        Attribute data can be copied between Groups of Heads using the normal copy head syntax. If a Group is specified then Group
        attributes will be copied rather than individual Head attributes.
    </p>
    <p>
        When copying heads Group FX can now copied from one Group to another. It is also possible to Split FX and Join FX for Group FX in
        the Prog window.
    </p>
</div>
<div class="section">
    ## 20.9. File Saving / Exporting / Merging
    <p>
        Group Cues are saved in show files in the normal way. As with all new MagicQ features, shows saved with Group Cues will load into
        previous versions of MagicQ, but any Group levels will be ignored by the old software. If you have a show file with Group Cues which
        you wish to load into an earlier version of software, then first use MagicQ PC (or a console with Group Cue support) to convert the
        show to use Head programming.
    </p>
    <p>
        In the Cue Store window Cues can be converted between Head Cues and Group Cues using the SET GROUP CUE and SET HEAD CUE soft
        buttons.
    </p>
    <p>
        When converting to Group Cues, MagicQ attempts to match the Head values to Groups by analysing the values in the Cue. If there is no
        matching Group with the required heads then those attributes will remain as individual Heads and not be converted to Group levels.
        Note that fanned attributes and fanned times will not be converted as the Head Cues do not hold any of the fan information. MagicQ
        also converts normal FX to Group FX.
    </p>
    <p>
        Before converting an existing show to Group Cues it is recommended to create groups for all the heads that have been programmed
        together in the existing show - e.g. if many of the Cues contain 4 particular Spots then create a group with just those particular
        spots.
    </p>
    <p>
        When converting to Head Cues, MagicQ applies fanned attributes and times from the Group Cue - but the fan information is not stored
        with the Head information, so the details of the fan are then lost. MagicQ does not convert Group FX back into normal FX since
        MagicQ has supported Group FX since 2015 and therefore the Group FX will run on all recent MagicQ systems.
    </p>
    <p>Press SHIFT + SET ALL GROUP CUE and SET ALL HEAD CUE to convert the entire show.</p>
    <p>
        MagicQ shows can be exported in the normal way. All data for selected Heads will be exported. In addition all Group levels/FX for
        Selected Groups will be exported.
    </p>
</div>
<div class="section">
    ## 20.10. Updating Groups
    <p>
        Groups can be updated at any time. Removing Heads from a Group will stop them from being part of Group Cues that use that Group.
        Adding Heads to a Group will put them into any Group Cues that use that Group.
    </p>
    <p>
        When using Group Cues we recommend to create your own groups with their own names before starting programming and to use these for
        programming Group Cues. If the auto generated Groups are used then when adding Heads of the same type to a show they will end up in
        the auto generated groups which may not be desired.
    </p>
</div>
<div class="section">
    ## 20.11. Updating Cues
    <p>Groups can be replaced, cloned or removed from one or more of the programmed Cues.</p>
    <p>Replacing Groups in Cues, enables modifying the programmed Cues to use a different Group.</p>
    <p>Cloning Groups in Cues enables expanding a show to use more Groups than originally programmmed.</p>
    <p>Removing Groups in Cues enables Groups to be taken back out of the programming.</p>
    <p>
        The advantage of cloning / removing Groups in Cues rather than simply adding removing from the Groups is that split times and FX
        will be run separately for each Group rather than as a single Group.
    </p>
    <p>
        Groups can be replaced, cloned or removed from individual Cues on a Cue Stack, from entire Cue Stacks, or from all Cues. The Stack
        Store and Cue Store filtering can be used to apply the changes to a specified set of Cues.
    </p>
    <p>
        In the Group window press SHIFT + REPLACE GROUP to replace a Group in Cues. Then select the Group to replace, then the Group to
        replace with, then the item to clone in. Press ENTER to replace in all Cues - MagicQ prompts with a confirm box.
    </p>
    <p>
        In the Group window press SHIFT + CLONE GROUP to clone a Group in Cues. Then select the Group to clone from, then the Group to clone
        to, then the item to clone in. Press ENTER to clone in all Cues - MagicQ prompts with a confirm box.
    </p>
    <p>
        In the Group window press SHIFT + REMOVE GROUP to remove a Group in Cues. Then select the Group to remove from, then the item to
        remove from. Press ENTER to remove from all Cues - MagicQ prompts with a confirm box.
    </p>
    <p>Cloning and removing of Cues is only supported when Group Cues is enabled.</p>
</div>
