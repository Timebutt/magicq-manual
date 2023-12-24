---
id: patching
title: Chapter 7. Patching
sidebar_position: 7
---

# Chapter 7. Patching
<div class="section">
    ## 7.1. Patching on MagicQ
    <p>
        MagicQ considers DMX and console channels to be the same and therefore there is no need for complex patching to be carried out
        before the console can be used. MagicQ allows access to all DMX channels on all DMX universes supported on the console. Each channel
        can be controlled and programmed independently.
    </p>
    <p>
        Each head can be allocated a head number for recall using the keypad and a name for identification. However to save time, MagicQ
        will automatically allocate numbers and names according to head types.
    </p>
</div>
<div class="section">
    ## 7.2. Getting started with patching
    <p>
        MagicQ supports comprehensive patching facilities for allocating dimmers and intelligent heads to DMX channels. Patching can be
        carried out at any time and has an immediate effect.
    </p>
    <p>Press the PATCH button to open the Patch Window. The Patch Window has four views, VIEW HEADS, VIEW CHANS, VIEW DMX and VIEW VIS.</p>
    <p>VIEW HEADS is used to patch heads, name and number then and set and gel colour.</p>
    <p>VIEW CHANS is used to carry out operations on individual DMX channels, such as testing the channel and setting inverts.</p>
    <p>VIEW DMX is used when patching more than one DMX channel to a MagicQ Head.</p>
    <p>VIEW VIS is used for setting up and modifying visualiser heads in the MagicVis visualiser.</p>
</div>
<div class="section">
    ## 7.3. Patching a Head or Dimmer
    <p>
        MagicQ supports a large library of heads. MagicQ treats dimmers just like any other head - they just happen to have a single
        channel. Dimmers use the "Generic Dimmer" personality.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/patchdimmers.png" alt="image" />
        </span>
    </p>
    <p>
        Choose the head you wish to patch by pressing the CHOOSE HEAD soft button. The Window will change to give you a list of heads.
        Select a head by pressing the touch screen. Alternatively scroll around the Window using the cursor keys, and press ENTER when the
        cursor is over the correct head.
    </p>
    <p>
        Once you have chosen a head you will be returned to the Patch Window. Press the PATCH IT soft button to patch the head, and you will
        be prompted for an address to patch the head to.
    </p>
    <p>
        Press ENTER to patch to the next free address – the title bar shows the next free address that a head of the chosen type can be
        patched. If you wish to patch multiple heads at fixed offsets e.g. four Martin Mac500s at DMX channels 1,21,41,61 then enter 4/20.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/patchit.png" alt="image" />
        </span>
    </p>
    <p>
        To patch a head at a specific address use @. For example to patch 10 dimmers at DMX address 20 key in
        <a class="ulink" href="mailto:10@20" target="_top">10@20</a>
        . To patch to the 2
        <sup>nd</sup>
        universe use
        <a class="ulink" href="mailto:10@2-20" target="_top">10@2-20</a>
        . To patch at the first free address on a universe other than the first universe use +, e.g. for the second universe use 10@+2-1.
    </p>
    <p>
        If this is the first patch you have patched then MagicQ will prompt you whether to add the head into the visualiser. Pressing yes
        will create a visualiser head within the show file, so that you can see the head in the MagicQ visualiser.
    </p>
    <p>To patch more heads, just repeat the above process.</p>
    <p>To patch a dimmer, simply press CHOOSE DIM/MEDIA, select Generic Dimmer, and then patch one or more dimmers as above.</p>
    <p>
        In the Patch Window all the fields coloured yellow can be configured. To modify a field, first move the cursor to the field, then
        input the new value using the keypad and keyboard, and finally press ENTER.
    </p>
    <p>In this way you can modify DMX address, head number, head name and gel for each of your patched heads.</p>
</div>
<div class="section">
    ## 7.4. Head Names and Head Numbers
    <p>
        Press the VIEW HEADS soft button to check the heads you have patched, and to name and number them as you wish. In the Patch Window
        all the light coloured fields can be configured. To modify a field, first move the cursor to the field, then input the new value
        using the keypad and keyboard, and finally press ENTER.
    </p>
    <p>
        Multiple head names and numbers can be set at the same time by using SHIFT and the cursor keys to select multiple items. Turning on
        test mode using the TEST HEAD soft button makes it easy to view each head / dimmer in turn.
    </p>
    <p>
        By default the VIEW HEADS view is sorted by head number. If you are setting head numbers by entering each head number individually
        then you may find it easier if the view is sorted by DMX. Press the SORT soft button and select BY DMX. Note that the sort also
        affects the order in the Intensities Window, the Programmer Window and the Group Window.
    </p>
    <div class="section">
        ### 7.4.1. Head Names
        <p>
            Head names are used to identify the Dimmer or Head. We recommend that you set the head name based on its location (e.g. front
            wash / back truss SL). It is not necessary to name intelligent heads according to their product name (e.g. Mac500) as this is
            already stored in the head.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/patchdimmers.png" alt="image" />
            </span>
        </p>
    </div>
    <div class="section">
        ### 7.4.2. Head Numbers
        <p>
            Head numbers are used in various displays to indicate which heads are being operated on. Head numbers can also be used for
            selecting heads and setting intensities directly from the keypad.
        </p>
        <p>By default MagicQ numbers in the order that they are patched starting from 1.</p>
        <p>
            If you expect to be selecting heads using the keypad then we recommend you use unique head numbers for each head. MagicQ uses
            unique numbers by default. You can modify head numbers manually so that they are more meaningful to your rig. Alternatively you
            can use one of the in-built renumber algorithms.
        </p>
        <p>
            For multi head elements, by default MagicQ allocates each element of a multi element head ascending head numbers. MagicQ also
            supports the multiple elements of a multi element head all having the same head number and then use of the dot (.) operator to
            select individual heads.
        </p>
        <p>
            Multiple multi head elements can be set to use only a single head number in Patch, View Heads by setting the Head Number
            appended with /1 to indicate only 1 head number in use for that head.
        </p>
    </div>
    <div class="section">
        ### 7.4.3. Renumbering Head Numbers
        <p>
            Pressing RENUM HEAD NOS and selecting BEST FIT causes MagicQ to use an intelligent algorithm to allocate heads starting with
            numbers that you can easily recall. For example, if you patch 4 MAC500s and 4 HPEs then when you renumber using BEST FIT it will
            number the MAC500s from 1 to 4 and the HPEs from 11 to 14.
        </p>
        <p>
            If you would rather work with DMX channel numbers, then press the RENUM HEAD NOS soft button and select BY DMX. This will
            configure the head number for all patched heads to be the DMX channel address of the head. You can then select heads and set
            intensities using the DMX channel numbers.
        </p>
        <p>
            Selecting HEADS (ALL START 1) sets the head numbers so that for each head the numbers start from 1 - this is the default option.
            Selecting BY NAME sets the head numbers so that they use head name, gel and type to order the heads.
        </p>
    </div>
    <div class="section">
        ### 7.4.4. Patching to specific Head numbers
        <p>It is possible to patch direct to a specific head number using the * operator.</p>
        <p>For example:</p>
        <p>10 @ 7 – 2 * 201</p>
        <p>This will patch 10 heads at channel 2 on Universe 7 starting at head number 201.</p>
    </div>
</div>
<div class="section">
    ## 7.5. Gel name and number
    <p>
        For dimmers you may wish to configure the gel name or number. This makes programming easier – enabling MagicQ to auto program cues
        for you.
    </p>
    <p>
        The gel field uses gel numbers. For Lee colours enter the gel number directly (e.g. 181 for Lee 181). For Rosco colours enter the
        gel number preceded by dot (e.g. .14 for Rosco 14). For no colour enter 0. If you would prefer to use colour names rather than gel
        numbers then simply enter the colour name. MagicQ knows standard colour names.
    </p>
</div>
<div class="section">
    ## 7.6. Col Tags
    <p>
        It is possible to assign a Col Tag to each head. Col Tags from the Patch are used in other windows if Setup, View Settings, Windows,
        Col tags is set to "Patch".
    </p>
</div>
<div class="section">
    ## 7.7. Generating auto groups
    <p>MagicQ automatically generates groups for each of the different heads patched – e.g. "All Dimmers", "All Mac500".</p>
    <p>
        MagicQ is also capable of generating groups based on gel colours and head names. Press the AUTO GROUPS soft button in the VIEW HEADS
        view of the Patch Window and then select Dimmers and/or Heads.
    </p>
    <p>
        When Dimmers are selected MagicQ will examine all dimmers patched and generate a group for each different gel colour and a group for
        each different head name.
    </p>
    <p>
        When Heads is selected MagicQ will generate a group for each different head type that has heads with a distinct head name. Thus if
        you have named some of your Mac500s "front" and some of them "back" it will generate a "Mac500 front" group and a "Mac500 back"
        group.
    </p>
</div>
<div class="section">
    ## 7.8. Auto Palettes
    <p>
        When patching heads, MagicQ creates Palettes based on the Palettes stored in the Personality - typically the 10 basic colours.
        MagicQ also creates Palettes based on the main Gobo ranges for any Ranges in the Personality that have Auto Pal set. If the
        personality does not have any gobo ranges with the Auto Pal option set, then MagicQ now generates gobo palettes based on all the
        gobos set with Range Type of Fixed, Index or Rotate.
    </p>
    <p>
        From 1.7.4.4 MagicQ also automatically generates beam palettes for shutter, gobo rotation, iris and zoom attributes. Beam palettes
        for gobo rotation contain both Rotate 1 and Rotate 2 attributes if present in the head.
    </p>
    <p>
        Auto palette generation can be turned on and off and customised in the Patch Window, View Heads, soft button X. When set to All, all
        auto groups and auto palettes are generated. It is possible to individually select generation of groups, intensity, position,
        colour, gobos, rotate, iris, shutter, and zoom.
    </p>
</div>
<div class="section">
    ## 7.9. Heads with multiple elements
    <p>
        MagicQ supports heads that have multiple attributes of one type – e.g. more than one dimmer or more than one red, green or blue
        channel.
    </p>
    <p>
        The dot (.) syntax is used to access the sub elements. Individual elements can be selected using the dot (.) operator. For example
        to select the 1st element only, enter .1 NEXT HEAD or .1 @@. This sub selects only the 1st element. Pressing ALL returns the
        selection to all elements.
    </p>
    <p>
        MagicQ heads can be written to support one of two methods for supporting multiple attributes of the same type - the newer way is
        "Duplicated Heads" whilst the older way uses "Multi Elements Heads".
    </p>
    <div class="section">
        ### 7.9.1. Duplicated Heads
        <p>Duplicated Heads treats the head as a single head but with attributes that appear multiple times in the personality.</p>
        <p>
            When using the head, the duplicated elements by default are treated as one element - so the 2nd, 3rd and 4th elements just copy
            the programming from the 1st element. This ensures that the Head is simple to use and appears to act as if it only had a single
            element.
        </p>
        <p>
            When locating, selecting palettes and using soft buttons or encoders on attribute parameters only the first element is made
            active in the programmer and therefore only the first element is recorded into Cues. When the Cues are played back then MagicQ
            copies the calculated values from the 1st element to the other elements.
        </p>
        <p>
            When a sub selection is active on a Duplicated Head then the specific elements will be made active in the Programmer and
            subsequently recorded into Cues. When the Cues are played back MagicQ uses the programming from the Cue for elements that have
            been recorded in to the Cue, only copying for elements that have not been recorded.
        </p>
        <p>
            All elements can be selected if you wish to apply split times across all elements or to include all elements in a FX. Select all
            elements using the syntax .&gt; @@
        </p>
        <p>
            Palettes values are by default created for the first element. When a sub selection is in operation MagicQ will use the value in
            the Palette for the first element if there is no specific palette entry for the element selected - this avoids the need for
            creating separate palette information for each element. When a Palette is updated it will update Cues that use that Palette from
            the sub element if it exists in the Palette - otherwise it will use the data from the 1st element - ensuring that the Cue gets
            updated as expected.
        </p>
        <p>
            Note that Duplicated heads operate slightly differently to normal heads when splitting elements between different playbacks or
            the programmer. The playback that has the first element active controls all the other elements. If that playback has only the
            1st element active in it then all elements will output the same regardless of whether other elements are active on other
            playbacks. Similarly if the programmer only has the 1st element active in it then all elements will output the same regardless
            of whether other elements are active on any playbacks.
        </p>
    </div>
    <div class="section">
        ### 7.9.2. Multi Element Heads
        <p>Multi Element Heads treats the head as multiple different heads each patched automatically to adjacent addresses.</p>
        <p>
            Multi element heads are patched in exactly the same way as normal heads, but MagicQ shows a * next to the DMX address to
            indicate that it is a multi element head.
        </p>
        <p>
            MagicQ recognises three kinds of multi element heads – those which simply have a repeated element, those that have a main
            element followed by a repeated element and those that have repeated elements followed by a main element.
        </p>
        <p>
            When multi element heads are patched MagicQ generates the "All" group which contains both the main and repeated elements. MagicQ
            will also generate separate groups for the main "Mn" part and the repeated "Ele" part.
        </p>
        <p>
            Multi element heads can have a separate head number for each element in the head – so that when patching several of these heads,
            the head numbers will increase by more than one per head. Alternatively all the elements can be set to the same head number.
        </p>
        <p>
            When all the elements are set to the same head number the separate elements of the head can also be sub selected using the dot
            operator from the keypad – for example for head 2 you can select 2.4 to sub select the 4
            <sup>th</sup>
            element.
        </p>
    </div>
</div>
<div class="section">
    ## 7.10. Inverting and Swapping
    <p>
        In VIEW HEADS you can invert the pan and tilt channels of moving heads and also swap the pan and tilt channels. Pressing ENTER in
        the appropriate field changes the field value.
    </p>
    <p>Individual channels can also be inverted in VIEW CHANS if required.</p>
</div>
<div class="section">
    ## 7.11. Pan and Tilt Offsets
    <p>
        To add a Pan or Tilt offset then enter the offset in degrees in the Pan offset or Tilt offset in the Patch Window. The offset
        affects all programmed values.
    </p>
</div>
<div class="section">
    ## 7.12. Applying Offsets using Update
    <p>MagicQ supports a quick method of applying an offset to channels such as a pan or tilt offset, or an offset on a colour scroll.</p>
    <p>
        To apply an offset, playback the Cues and then override only the parameters you wish to offset in the programmer. Then press the
        Update button. The Update options have been modified to include an extra option "Patch Offset". Selecting this option applies a
        permanent offset to the channel in the Patch rather than modifying the individual Palettes and Cues.
    </p>
    <p>To remove the offset go to Patch, View Chans and remove the offset from the appropriate channels.</p>
    <p>Offsets apply only to LTP channels, not to HTP (Intensity) channels.</p>
    <p>The Outputs window shows channels with offsets in green colour.</p>
    <p>The Patch window shows offsets applied to Pan and Tilt in the Pan Offset and Tilt Offset field.</p>
</div>
<div class="section">
    ## 7.13. Minimum and Maximum levels
    <p>
        You can set minimum and maximum levels for each patched channel from the VIEW CHANS view. This is useful for setting pre-heat on
        dimmers or for limiting output values of certain lamps where power is tight.
    </p>
    <p>
        The minimum and maximum levels have absolute over-ride over all other playback and programming. Master faders and the DBO button do
        not affect the minimum and maximum levels.
    </p>
    <p>Minimum levels can be useful to force a minimum light level on a stage, for example during a changeover.</p>
    <div class="section">
        ### 7.13.1. Limits and Offset.
        <p>It is possible to set limits and offsets on channels using the Limit and Offset dimmer curves.</p>
        <p>
            Limit enables a maximum level to be set for the channel whilst retaining the normal linear dimming curve. When dimmer curve is
            set to "Limit" the channel has a linear curve up to the maximum value rather than using the normal linear curve and then
            stopping at the maximum value.
        </p>
        <p>
            Offset enables an offset value to be applied to a channel – this can be useful if a moving light is not calibrated correctly or
            it has been moved. When dimmer curve is set to "Offset" then the minimum value specifies the offset to be applied. When a
            channel value exceed 255 then it wraps back to 0.
        </p>
    </div>
</div>
<div class="section">
    ## 7.14. Dimmer curves
    <p>MagicQ supports 10 user dimmer curves that can be selected in the Patch Window, View Chans view.</p>
    <p>
        User dimmer curves are specified in files of format csv (comma separated variable) with filename dimmercurveuser1.csv,
        dimercurveuser2.csv etc… stored in the show/heads folder.
    </p>
    <p>
        The files consist of 256 lines each with a value between 0 and 255. These files can be generated in a spreadsheet (e.g. Microsoft
        Excel) and saved as csv format.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/dimmercurve.png" alt="image" />
        </span>
    </p>
    <p>
        From v1.6.0.7 dimmer curves can have 16bit values (0..66535) instead of just (0..255). If any value in the user dimmer curve file is
        over 255 then 16bit is assumed.
    </p>
    <p>
        User dimmer curves are not stored into the show or settings files. Each MagicQ system that uses user dimmer curves must have the
        curves stored in the show/heads folder.
    </p>
    <p>
        In the CSV file the line after the last line of data (the 257
        <sup>th</sup>
        line) can hold a name for the curve which is then displayed in MagicQ. The name has a maximum of 15 characters.
    </p>
    <p>Dimmer curve files are read on startup of MagicQ – so you will need to reset MagicQ for new curves to be loaded.</p>
</div>
<div class="section">
    ## 7.15. Testing channels
    <p>
        To test channels in VIEW CHANS press the TEST CHANS soft button to enter test mode. In this mode the channel which the cursor is on
        is set to the level configured on the TEST CHANS encoder. Use the cursor keys to move through different channels. Test mode remains
        active until the TEST CHANS soft button is pressed again.
    </p>
    <p>
        Channel testing works for both patched and unpatched channels. Note that for channels patched as LTP, the level of the Grand Master
        does not affect the channel level and after test is turned off the channel remains at the test level. LTP channels can be set to
        zero by pressing CTRL CLEAR.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/channeltest.png" alt="image" />
        </span>
    </p>
    <p>
        You can also test channels by moving to the appropriate channel and pressing the TEST SELECT CHANS soft button. The channel will be
        set to the level of the Grand Master fader. Pressing TEST SELECT CHANS soft button again returns the channel to zero. You can test
        multiple channels by using SHIFT and the cursor keys to select multiple channels and then pressing the TEST SELECT CHANS soft
        button. Channels that are in test mode are highlighted in red.
    </p>
    <p>
        Pressing Soft Button A (NEXT UNI or PREV UNI) soft button moves you up or down the window to the first channel of the next or
        previous universe.
    </p>
</div>
<div class="section">
    ## 7.16. Changing the DMX address of heads
    <p>
        Heads (including Dimmers) can be moved to different DMX addresses as required. When they are moved all the programming and palettes
        associated with them also moves to the new channels. In Patch, VIEW HEADS simply edit the DMX field with a new address.
    </p>
    <p>
        If you try and move to a location where there are already channels patched then MagicQ will prompt whether you wish to continue and
        move the already patched channels aside. If you confirm YES the already patched channels will be moved to the next free locations.
        If you confirm NO then no move will be performed.
    </p>
    <p>
        Multiple heads can be moved at a time using SHIFT and the cursor keys. When making a change to multiple heads the change defaults to
        an absolute change – the first head will be moved to the specified address and the next heads to the addresses immediately
        following. To make a relative change enter a / after the new address - i.e. to move 4 heads from 1-1 to 2-1, but keeping the
        relative DMX offsets between the heads, enter 2-1/. You can also specify an explicit offset to use, just like when patching e.g.
        2-1/20.
    </p>
</div>
<div class="section">
    ## 7.17. Patching a Head to multiple DMX addresses
    <p>
        The View DMX view in the Patch Window enables multiple DMX channels to be easily assigned to one head. Up to 5 additional DMX
        channels can be set up for each Head in addition to the main DMX address. Remove additional channels by pressing REMOVE and
        selecting the additional channel fields or by typing "u" (unpatch) instead of a DMX address.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/patchviewdmx.png" alt="image" />
        </span>
    </p>
</div>
<div class="section">
    ## 7.18. Unpatching a Head from a DMX address
    <p>
        It is possible to "unpatch" a head – i.e. to remove the association between the programmed data and a DMX address. The programmed
        data for the head is maintained and the head can subsequently be patched to a new DMX address. To unpatch a head move the cursor to
        the first DMX field in View DMX view and press REMOVE, or type "u".
    </p>
</div>
<div class="section">
    ## 7.19. Patching scrollers
    <p>
        There are two ways to patch scrollers – the first method is to patch the dimmer and scroller separately – then the dimmer and
        scroller will operate independently. Use the "generic dimmer" personality for the dimmer and the "generic scroller" personality for
        the scroller.
    </p>
    <p>MagicQ has enhanced support for scrollers, so that the colour scroll channel can be tied up with the dimmer channel in one head.</p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/patchscrollers.png" alt="image" />
        </span>
    </p>
    <p>
        To use this support, patch a Generic Scroller With Dim. This will appear in the View Heads with the DMX address marked as "virtual"
        and any DMX address you specified when you patched it will be ignored. Change to the View DMX view and specify in the appropriate
        DMX columns the DMX address of the dimmer and the scroller.
    </p>
    <p>
        The Generic Scroller With Dim is set up as a "Virtual" personality – i.e. the channels in the personality can be patched to any
        location on MagicQ – unlike normal personalities where the channels are sequential from the DMX start address. In the View DMX view,
        the DMX address fields are used to specify the addresses for each channel in the virtual personality – up to a maximum of 5
        channels. (For normal personalities these fields are used to specify multiple heads patched to one head.)
    </p>
</div>
<div class="section">
    ## 7.20. Editing Heads
    <p>
        You can modify the Head or create a new head in the
        <a class="link" href="head-editor.html" title="Chapter 27. Head Editor">Head Editor</a>
        . Choose the head you wish to edit and then press the EDIT HEAD soft button.
    </p>
    <p>
        To quickly choose a head that you have already patched move the cursor to the head in the Patch Window, hold SHIFT and press CHOOSE
        HEAD.
    </p>
    <p>
        To quickly edit a head that you have already patched move the cursor to the head in the Patch Window, hold SHIFT and press EDIT
        HEAD.
    </p>
</div>
<div class="section">
    ## 7.21. Cloning (Adding extra heads / dimmers to a programmed show)
    <p>
        Cloning enables a show programmed with a certain number of heads to be expanded to use more of the same head type without having to
        reprogram all of the show.
    </p>
    <p>
        For example, if you have a show programmed with 4 Maverick Spots` and you want to add 4 more Maverick Spots, then you can clone the
        4 programmed Maverick Spots. All the Cues, Cue Stacks, Groups and Palettes that have the original 4 Maverick Spots will now have the
        additional 4 Maverick Spots as well.
    </p>
    <p>
        By cloning heads in this way you have a quick and easy approach to expanding your show. You can then programme some new Cues and Cue
        Stacks that use the new and old heads individually.
    </p>
    <p>To Clone heads</p>
    <p>
        Enter the Patch Window and choose the
        <span class="emphasis"><em>view heads</em></span>
        view. Select the heads you wish to clone using SHIFT and the cursor keys. Note a new cloned head is created for each of the selected
        heads. e.g. selecting 4 heads when cloning will patch 4 more heads each cloned to one of the 4 selected heads.
    </p>
    <p>Then press the CLONE HEAD soft button.</p>
    <p>Cloned heads are patched on the next free universe/channel in MagicQ, these can then be re addressed as needed.</p>
    <p>
        There are several options when cloning heads. It is possible to choose whether both Palettes and Cues are cloned or just Palettes.
    </p>
    <p>
        It is also possible to specify that FX are split when the heads are cloned, so that the new heads are part of a different FX from
        the original FX. This function should be used with care when cloning multiple heads in order to avoid fragmenting the F X too much.
    </p>
    <div class="section">
        ### 7.21.1. Copy Head Programming
        <p>
            If you patch new heads into a show, without cloning it is still possible to then copy programming from other heads to the new
            heads. To copy programmed data from one head to another press the SHIFT + COPY HEAD PRG soft button in the HEAD VIEW, then
            select the source head followed by the destination head.
        </p>
        <p>
            Any programming for the destination Heads is first removed, before the new data from the source Heads is coped to the
            destination Heads.
        </p>
        <p>All the Cues, Cue Stacks, Groups and Palettes that contain the source head will be updated to include the destination head.</p>
        <p>
            From v1.9.1.0 it is possible to copy between different Head types. It is also possible to copy head programming using keypad
            syntax with Head nos or Groups to make it easier to copy entire programming from several Heads to several other Heads. To copy
            both from and to multiple heads use the same method as for copying heads in the Programmer or in Cues, but in the Copy Options
            select COPY HEAD PROG.
        </p>
        <p>To copy all programming from Heads 1 to 4 to Heads 10 to 20 use</p>
        <p>1 THRU 4 SHIFT COPY &lt;CHOOSE COPY HEADS and COPY HEAD PROG&gt; 10 THRU 20 ENTER</p>
        <p>To copy all programming from Group 1 to Group 2 use</p>
        <p>GROUP 1 SHIFT COPY &lt;CHOOSE COPY HEADS and COPY HEAD PROG&gt; GROUP 2 ENTER</p>
        <p>Alternatively select Groups from within the Group window.</p>
    </div>
    <div class="section">
        ### 7.21.2. Patch Channel Copy
        <p>
            Another way to expand existing shows is to patch the new heads and dimmers but then in the Patch window to set a real time
            channel copy from another already programmed channel. The value of the channel will always be that of the already programmed
            channel. Any programming of the newly patched channel will be ignored. To set up real time copies, edit the Merge and From Chan
            columns in the View Chans view of the Patch Window. Press ENTER in the Merge column to change it to "Copy" and then set the From
            Chan column.
        </p>
    </div>
</div>
<div class="section">
    ## 7.22. Morphing Heads (Changing Head type)
    <p>
        It is possible to morph one head type into another head type. The system will copy the programming from the old head type to the new
        head type. The system takes into account the different pan and tilt ranges of the heads when copying pan and tilt data.
    </p>
    <p>
        As no two heads are exactly the same, the programming will not create exactly the same looks as with the original heads. A closer
        representation will be obtained by morphing a spot into a spot compared to a spot into a wash light.
    </p>
    <p>
        If the new head types have more channels than the original head types then MagicQ morphs the heads but leaves them unpatched – the
        user must then repatch the heads at a suitable location.
    </p>
    <p>
        In the Patch Window, choose the new head type, then move the cursor to the head to change or select a block of heads using SHIFT and
        the cursor keys. Press the MORPH HEAD soft button and confirm that the action is what is required.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/morph.png" alt="image" />
        </span>
    </p>
    <p>After morphing heads your groups, palettes, and cues will be updated to reflect the new head types.</p>
    <div class="section">
        ### 7.22.1. Morphing multi element heads
        <p>
            MagicQ supports full morphing between multi element heads to single element heads and from single element heads to multi element
            heads.
        </p>
        <p>
            When morphing between multi element heads, if the new head has less elements than the original head then the excess elements in
            the original heads will be ignored. If the new head has more elements than the original head then the excess elements in the new
            head will be a repeat of the elements from the original head.
        </p>
        <p>
            It is possible to morph from a Duplicated element head that is entirely made up of duplicated elements (no channels that are not
            multi element) to multiple non duplicated heads - e.g. to split a Duplicated 10 channel LED head into 10 separate RGB heads.
        </p>
    </div>
    <div class="section">
        ### 7.22.2. Morphing Heads with virtual dimmers
        <p>
            It is possible to morph between heads with inbuilt dimmers and heads with virtual dimmers. For example it is possible to morph a
            RGB head with an inbuilt dimmer to a RGB head with a virtual dimmer. It is also possible to morph back from a head with a
            virtual dimmer to one that has an inbuilt dimmer.
        </p>
    </div>
    <div class="section">
        ### 7.22.3. Morphing between CMY and colour wheel Heads
        <p>
            When morphing between heads with CMY/RGB and Colour Wheel to heads with only Colour Wheels, MagicQ now converts the CMY/RGB data
            to Col Wheel rather than trying to map between the Colour Wheels. This ensures that shows programmed with Cues using RGB
            palettes morph to Col Wheel palettes.
        </p>
        <p>
            When morphing to heads with greater number of colour wheels or greater number of gobo wheels MagicQ now includes the extra
            colour or gobo wheels channels in Palettes and Cues where the colour wheels or gobo wheels were previously used. This enables
            easy updating of shows, for example when changing from heads with only 1 gobo wheel to heads with 2 gobo wheels.
        </p>
    </div>
</div>
<div class="section">
    ## 7.23. Importing Heads
    <p>
        A quick way of patching heads is to import the heads from a file. MagicQ supports comma separated variable files (.csv) which can be
        from Visualisers like WYSIWYG and VectorWorks or generated manually from spread sheets and text editors.
    </p>
    <p>
        In Patch, View Chans press the IMPORT HEADS soft button and select a file in .csv format. MagicQ auto detects the contents of the
        file recognising formats from Capture, WYSIWYG, VectorWorks, L8 and Depence.
    </p>
    <p>MagicQ provides several import options:</p>
    <div class="informaltable">
        <table class="informaltable" cellpadding="4px">
            <colgroup>
                <col class="col_1" />
                <col class="col_2" />
            </colgroup>
            <tbody>
                <tr>
                    <td align="left" valign="top"><p>Add</p></td>
                    <td align="left" valign="top">
                        <p>
                            Adds the heads to the patch. If DMX address is specified then will only add if that address is free - otherwise
                            adds to next free address
                        </p>
                    </td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Readdress</p></td>
                    <td align="left" valign="top"><p>Readdress the head with the specified head number to the specified DMX address</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Morph, Readdress</p></td>
                    <td align="left" valign="top">
                        <p>
                            First morphs the head with the specified head number to the new Head type and then readdresses to specified DMX
                            address
                        </p>
                    </td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Clone, Morph, Readdress</p></td>
                    <td align="left" valign="top">
                        <p>
                            First clones the head with the specified head number, then morphs to the new Head type and then readdresses to
                            specified DMX address
                        </p>
                    </td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Vis only</p></td>
                    <td align="left" valign="top">
                        <p>
                            Imports only the Vis data (XYZ position and rotation) for the head at the specified DMX address. If no DMX
                            address is specified then it uses the head number to match
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <p>
        When patching heads if there is no DMX address specified MagicQ may not be able to patch them. If no DMX address is provided then
        MagicQ will check the head number to see whether there is a head already patched with that head number that matches the requested
        number of channels. If no match is found MagicQ will choose a spare DMX address to patch the head.
    </p>
    <p>
        If a head is already allocated at the required DMX address then MagicQ will not patch a new head - however it will import Visualiser
        XYZ data if available.
    </p>
    <p>If no head at the DMX address or head number is found then MagicQ will attempt to match the Head type provided.</p>
    <p>
        In WYSIWYG the heads need to have an Address and Universe in the Fixture Properties dialog but there does not need to be any devices
        mapped in the device manager.
    </p>
    <div class="section">
        ### 7.23.1. Supported column headings
        <p>
            MagicQ supports a large number of column headings and will attempt to detect the contents of the file - e.g. whether it has come
            from a specific Visualiser such as Capture, WYSIWYG, VectorWorks, or whether it is just a head list.
        </p>
        <p>
            The column heading is the first row in the file, except in the case of Capture where the first rows are "Channel Report" -
            MagicQ skips these and expects the next row to be the column headings.
        </p>
        <p>Column headings are case insensitive.</p>
        <p>
            The file can be delimited by semicolons (;) instead of commas (,). MagicQ detects the first occurrence of either to choose which
            is the delimiter.
        </p>
        <p>The column headings supported are:</p>
        <div class="informaltable">
            <table class="informaltable" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                    <col class="col_3" />
                </colgroup>
                <thead>
                    <tr>
                        <th align="left" valign="top">Column Heading</th>
                        <th align="left" valign="top">MagicQ Function</th>
                        <th align="left" valign="top">Comment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>Head no,Headno,Hdno,Headnum,Channel,Spot,Fixture ID</p></td>
                        <td align="left" valign="top"><p>Head No</p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Head name,Hd name,Headname,Hdname,Purpose,Short Name</p></td>
                        <td align="left" valign="top"><p>Name</p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Universe,DMX Line</p></td>
                        <td align="left" valign="top"><p>Universe</p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top">
                            <p>DMX,DMX no,DMXno,DMX num,DMX Address,DMX Channel,DMX Patch,Patch,Patch Address</p>
                        </td>
                        <td align="left" valign="top"><p>DMX</p></td>
                        <td align="left" valign="top"><p>Patch Address (may contain universe and channel)</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Manufacturer,Man</p></td>
                        <td align="left" valign="top"><p>Manufacturer</p></td>
                        <td align="left" valign="top"><p>Tries to match MagicQ manufacturer</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Type,Head type,Headtype,Hd type,Hdtype,Fixture,Instrument Type</p></td>
                        <td align="left" valign="top"><p>Head Type</p></td>
                        <td align="left" valign="top"><p>Tries to match standard MagicQ names, Capture, Wyg names</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>gel,colour,filter</p></td>
                        <td align="left" valign="top"><p>Gel</p></td>
                        <td align="left" valign="top">
                            <p>Gel number - starting with L for Lee, R for Rosco. Otherwise MagicQ colour numbers</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Pinv,P inv,Pan inv,Paninv,Pani,Pan i</p></td>
                        <td align="left" valign="top"><p>P Inv</p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Tinv,T inv,Tilt inv,Tiltinv,Tilti,Tilt i</p></td>
                        <td align="left" valign="top"><p>T Inv</p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Swap,Flip</p></td>
                        <td align="left" valign="top"><p>Swap</p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Chans,Num chans,Numchans,# of Data Channels,Num channels,Channel Count</p></td>
                        <td align="left" valign="top"><p>Num Of Chans</p></td>
                        <td align="left" valign="top"><p>Used for checking type/mode</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>X,X Location,X Pos,X Position,Position X</p></td>
                        <td align="left" valign="top"><p>X Pos</p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Y,Y Location,Y Pos,Y Position,Position Y</p></td>
                        <td align="left" valign="top"><p>Y Pos</p></td>
                        <td align="left" valign="top"><p>Note for Wyg/VectorWorks Y is treated as MagicQ Z Pos</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Z,Z Location,Y Pos,Z Position,Position Z</p></td>
                        <td align="left" valign="top"><p>Z Pos</p></td>
                        <td align="left" valign="top"><p>Note for Wyg/VectorWorks Z is treated as MagicQ Y Pos</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>RotX,X Rotation,X Rot,Rotation X</p></td>
                        <td align="left" valign="top"><p>X Rot</p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>RotY,Y Rotation,Y Rot,Rotation Y</p></td>
                        <td align="left" valign="top"><p>Y Rot</p></td>
                        <td align="left" valign="top"><p>Note for Wyg/VectorWorks RotY is treated as MagicQ Z Rot</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>RotZ,Z Rotation,Z Rot,Rotation Z</p></td>
                        <td align="left" valign="top"><p>Z Rot</p></td>
                        <td align="left" valign="top"><p>Note for Wyg/VectorWorks RotZ is treated as MagicQ Y Rot</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>
            X, Y and Z position in MagicQ default to metres - this is the recommended values for import. When MagicQ imports from CSV it
            checks the range of X,Y and Z position values and then auto detects the scale. For example, if the positions where in
            millimetres - e.g. 7000,1000 - MagicQ would divide by 1000.
        </p>
    </div>
    <div class="section">
        ### 7.23.2. WYSIWYG
        <p>WYSIWYG R38 can export the positions and rotations of fixtures so that they can be viewed in MagicVis.</p>
        <p>
            The columns "# of Data Channels" and "Fixture Options" or the columns "Hookup" and "Circuit Name" must be present for MagicQ to
            detect it as a WYSIWYG file and import the patch correctly.
        </p>
        <p>
            To get the rotation correct go to the Data→Spreadsheet view in WYSIWYG, then click on OPTIONS → View. In the
            <span class="emphasis"><em>View Options</em></span>
            dialog select the
            <span class="emphasis"><em>Data Options</em></span>
            tab and ensure that the
            <span class="emphasis"><em>RotX</em></span>
            ,
            <span class="emphasis"><em>RotY</em></span>
            , and
            <span class="emphasis"><em>RotZ</em></span>
            columns are checked. Click
            <span class="emphasis"><em>OK</em></span>
            then select FILE → Export and select
            <span class="emphasis"><em>.CSV</em></span>
            to export the data. The data can then be imported into MagicQ.
        </p>
        <p>
            If the DMX Universes are named numerically (for example
            <span class="emphasis"><em>1</em></span>
            or
            <span class="emphasis"><em>21</em></span>
            ) then they will be assigned to that MagicQ universe.
        </p>
        <p>MagicQ will automatically swap Y/Z positions and rotations when importing WYSIWYG files.</p>
    </div>
    <div class="section">
        ### 7.23.3. VectorWorks
        <p>VectorWorks can output csv files with all the fixture parameters.</p>
        <p>
            The columns "Channel" and "Symbol Name" or "Vertical Focus Angle" must be present for MagicQ to detect it as a VectorWorks file
            and import the patch correctly.
        </p>
        <p>The below table shows the exported column heads from VectorWorks required and their function within MagicQ</p>
        <div class="informaltable">
            <table class="informaltable" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                </colgroup>
                <thead>
                    <tr>
                        <th align="left" valign="top">Vector works Column Heading</th>
                        <th align="left" valign="top">Comment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>Instrument Type</p></td>
                        <td align="left" valign="top">
                            <p>
                                this should be fixture manufacturer followed by_name separated with an underscore e.g. "Clay
                                Paky_GoldenScan3"
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Num channels</p></td>
                        <td align="left" valign="top"><p>the number of channels in the fixture</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Universe</p></td>
                        <td align="left" valign="top"><p>should be a number starting at 1 for the first universe</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Address</p></td>
                        <td align="left" valign="top">
                            <p>should be a number between 1 and 512 to indicate the DMX address within the universe</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Channel</p></td>
                        <td align="left" valign="top"><p>should be a number between 1 and 65356 to indicate head number</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Purpose</p></td>
                        <td align="left" valign="top"><p>a text field that if present will be used as the Head Name in MagicQ</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>X Position</p></td>
                        <td align="left" valign="top">
                            <p>
                                should be in metres - e.g. 1.1 represents 1.1 metres. MagicQ will attempt to scale if it detects large
                                values - e.g. if the positions are in millimetres
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Y Position</p></td>
                        <td align="left" valign="top">
                            <p>
                                should be in metres - e.g. 1.1 represents 1.1 metres. MagicQ will attempt to scale if it detects large
                                values - e.g. if the positions are in millimetres
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Z Position</p></td>
                        <td align="left" valign="top">
                            <p>
                                should be in metres - e.g. 1.1 represents 1.1 metres. MagicQ will attempt to scale if it detects large
                                values - e.g. if the positions are in millimetres
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>X Rotation</p></td>
                        <td align="left" valign="top"><p>should be in degrees</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Y Rotation</p></td>
                        <td align="left" valign="top"><p>should be in degrees</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Z Rotation</p></td>
                        <td align="left" valign="top"><p>should be in degrees</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>
            Where possible X,Y,Z position should be in metres - e.g. 1.1 represents 1.1 metres. MagicQ will attempt to scale if it detects
            large values - e.g. if the positions are in millimetres.
        </p>
        <p>MagicQ will automatically swap Y/Z poitions and rotations when importing VectorWorks files.</p>
        <p>To export from Vectorworks Vectorworks 2018 or later and MagicQ 1.7.9.4 or later</p>
        <div class="orderedlist">
            <ol class="orderedlist" type="1">
                <li class="listitem">
                    Set up Vectorworks Instruments: Check you have the "Number of Channels" field set to the mode you wish to use the
                    fixture in (this can be done manually or for newer instruments via the "Mode" drop down menu )
                </li>
                <li class="listitem">
                    Set document preferences: to meters for shows under 100 metes wide, or centimeters for shows over 100 meters wide, MQ
                    will automatically move the decimal when it detects shows over 100 meters making it 1.00 meters (if this step is
                    skipped, patch and heads will still import but Vis positions will not be accurate)
                </li>
                <li class="listitem">
                    Assign individual Channel Numbers, universe, and address fields in Vectorworks: in the object info panel for each
                    fixture. Channel number dictates the Head number when imported into MQ. if you use unit number for your head numbers in
                    VW it’s best to use the find and modify tool to copy the unit number field to the channel field before exporting the
                    instrument data (this can also be done after export in Excel)
                </li>
                <li class="listitem">
                    Export from Vectorworks: File&gt;Export&gt;Export Instrument Data, Select the "ALL" box in the top right to add all
                    fields to the exported file, then choose Export and save the file.
                </li>
                <li class="listitem">
                    Import that file into excel: follow the import window that pops up to be sure the imported document is formatted
                    correctly
                </li>
                <li class="listitem">
                    Edit Data if needed: in some cases, depending on instrument name, you may need to use the "Find/Replace" tool to edit
                    the instrument type to correspond with the head file name in MQ , Example: if your VW file has Martin Axiom’s in it,
                    listed as an Axiom, you will need to change the Instrument type in the spreadsheet to be "Martin_MacAxiomHybrid" or the
                    console will not be able to match the fixture in the spreadsheet to the proper fixture in the library (Tip: for large
                    rigs with a lot of fixture types, to save time, make all fixtures "Generic_Dimmer" then once you import the into MQ you
                    can morph those dimmers to the proper fixture types)
                </li>
                <li class="listitem">
                    For countries that use comma as the decimal separator ensure Excel is set to use decimal places as "." not ",". Click
                    File &gt; Options, then in the Excel Options dialog, click Advanced from left pane, then in the right section, the
                    Editing options group, uncheck Use system separator, then type decimal point into the Decimal separator box to instead
                    of the decimal point, and type nothing for the Thousand separator box.
                </li>
                <li class="listitem">
                    Export from Excel; as a .CSV file, save to your show file or to a usb drive and copy it to your show folder on your
                    console
                </li>
                <li class="listitem">
                    Import into MagicQ: in Patch, select "View Channels" and then "Import Heads" there will be some feedback in the CMD line
                    to show it’s importing the heads,
                </li>
            </ol>
        </div>
    </div>
    <div class="section">
        ### 7.23.4. Depence
        <p>It is possible to export fixtrue patch and XYZ from Depence and import them into MagicQ via csv format file.</p>
        <p>
            The columns "Position on Stage" and "Fixture Library Revision" must be present for MagicQ to detect it as a Depence file and
            import the patch correctly. Depence XYZ positions are in centimetres so MagicQ scales to metres. Depence uses XYZ co-ordinates
            the same as MagicQ with Y vertical and Z front to back.
        </p>
    </div>
    <div class="section">
        ### 7.23.5. Creating a head list
        <p>To create a CSV file from Excel use Save As,Other Format, Comma Separated Variable (.csv).</p>
        <p>
            The first row of the file indicates which columns are present in the file. The next rows of the file contain the data for each
            head.
        </p>
        <p>
            Headno,Headname,Dmxno,Headtype,Gel,Pinv,Tinv,Swap 0001,Spots,1-001,Generic_Dimmer,No col,no,no,no
            0002,Spots,1-002,Generic_Dimmer,No col,no,no,no 0003,Spots,1-003,Generic_Dimmer,No col,no,no,no
            0004,Spots,1-004,Generic_Dimmer,No col,no,no,no 0005,Finger L,1-005,Generic_Dimmer,R59 Indigo,no,no,no 0006,Finger
            L,1-006,Generic_Dimmer,R312 Canary,no,no,no 0007,Finger L,1-007,Generic_Dimmer,R356 Middle Lavender,no,no,no 0008,Finger
            L,1-008,Generic_Dimmer,R27 Medium Red,no,no,no
        </p>
    </div>
</div>
<div class="section">
    ## 7.24. Exporting Heads
    <p>
        MagicQ can export the contents of any window to CSV format and includes options to select which fields are exported. To export the
        Patch this way open the Patch Window, View Heads and from the toolbar select File and Print Window, select the required fields and
        then press Create CSV.
    </p>
    <p>
        In older versions of MagicQ there was only the option to export with fixed column headings of Headno, Headname, Dmxno, Headtype,
        Gel, Pinv, Tinv, Swap. In Patch, View Chans press the EXPORT HEADS soft button. MagicQ asks for a file name and will save the file
        in the show folder.
    </p>
</div>
<div class="section">
    ## 7.25. VL5 type channels (split personalities)
    <p>
        MagicQ supports heads such as the Vari-lite VL5
        <sup>TM</sup>
        where the head functionality is split between different non-contiguous DMX addresses. For example when the fixture features an
        external dimmer that’s DMX address can be set independently.
    </p>
    <p>
        The personality for the main channels in the head includes the extra channels. The extra channels are then patched separately and
        set to have their levels copied from the main channels.
    </p>
    <p>
        When creating a VL5 type fixture, if the Dimmer channel has been named
        <span class="emphasis"><em>Dimmer dummy’ in the Head editor, 'view chans</em></span>
        . When the fixture is patched, if a 2nd DMX field in the
        <span class="emphasis"><em>view dmx</em></span>
        view of the Patch this 2nd address will be controlled by the main fixture dimmer.
    </p>
    <p>
        For example for a VL5, patch the VL5 to the required DMX address for the main head. The in Patch, View DMX set the address of the
        real dimmer channel in the second DMX field.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/patchvl5.png" alt="image" />
        </span>
    </p>
</div>
<div class="section">
    ## 7.26. Merging with DMX input
    <p>
        MagicQ supports comprehensive merging of data from each of the input and output universes. Any output channel can be set to output
        data from any received input channel, or to merge the two.
    </p>
    <p>
        In addition channels can be configured so that they are passed through transparently unless MagicQ is controlling the channel from
        the programmer or a playback. This provides a powerful over-ride mode.
    </p>
    <p>
        To set a channel to output data received as input from another channel set the Merge field to "Input" and the From field to the
        channel number you wish to get the data from.
    </p>
    <p>You can easily set up a large number of channels by using SHIFT and the cursor keys to select multiple channels.</p>
    <p>
        You can also set up a channel so that it outputs data from an input channel except when that channel is being controlled by a
        playback or the programmer. Set the Merge field to "Over".
    </p>
    <p>To HTP merge the output with the received input use the "Merge" option.</p>
    <p>
        The "Mult" option enables another channel on the console to control the level of the output of the channel- this is useful with RGB
        LED heads where you wish to make another channel control the overall level of the RGB.
    </p>
    <p>
        The "Mul-In" option multiplies the received input with the calculated value for the channel. MagicQ can therefore be used as a DMX
        modifier to modify the level of individual or groups of channels.
    </p>
    <p>
        It is possible to set multiple channels all to copy or multiply by one channel. Use SHIFT and the cursor keys to select all the
        required channels and enter &lt;chan&gt; / 0.
    </p>
</div>
<div class="section">
    ## 7.27. Customising Locate, Default, Highlight and Lowlight values
    <p>MagicQ allows the user to define the Locate, Default, Highlight and Lowlight values for each attribute of each patched heads.</p>
    <p>
        The Locate values are the values that are used when the Locate button is pressed. The Default values are the values that are output
        when a channel is not in the programmer and no playback is controlling a channel. Note that the Setup Window option "Unused chans
        return to defaults" must be enabled for this mode of operation.
    </p>
    <p>The Hightlight and Lowlight values are used when Highlight Mode is set to one of the Advanced modes.</p>
    <p>
        By default, the Locate values and Default values are taken from the personality of the patched head – these typically put the
        position to centre, beam open, colour white and intensity at full.
    </p>
    <p>
        These values can be re-programmed by creating a Cue that represents the desired Locate Values and/or a Cue that represents the
        desired Default Values. For Highlight and Lowlight create a Cue that represents the desired Highlight or Lowlight values.
    </p>
    <p>
        Simply record a Cue into the Cue Store and then press the SET LOC CUE, SET DEF CUE, SET HIGHL CUE, SET LOWL CUE soft buttons. The
        Cue is indicated as Default, Locate, Highlight or Lowlight by a D, L,H or Lo after the Q number.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/defaultcue.png" alt="image" />
        </span>
    </p>
    <p>
        Only one Cue can be set for each type - however one cue can be set for more than one type – e.g. one Cue can be set for both the
        Default Cue and the Locate Cue.
    </p>
    <p>
        It is not necessary to program all the different attributes into the Locate, Default, Highlight or Lowlight Cues. Simply program the
        values that you want to be different from normal operation. For instance to record a default position with all heads positioned
        towards FOH position, simply record a Cue with the FOH position data and press the SET DEF CUE soft button.
    </p>
    <p>
        If you wish to change the Locate, Default, Highlight or Lowlight Cue then simply re-record the Cue. If you update Palettes used in
        the Cue, or modify the Cue directly from the Cue Window then you may need to reset the Cue in the Cue Store before the change takes
        place. Press the CLEAR DEF CUE and SET DEF CUE for the desired Cue.
    </p>
</div>
<div class="section">
    ## 7.28. Theatre Patch syntax
    <p>
        MagicQ supports a Theatre Patch option which changes the syntax used for patching to simplify patching (and re-patching) of large
        numbers of dimmers.
    </p>
    <p>
        The option is enabled in Setup,View Settings, Keypad, Keypad Syntax Theatre Patch. When this option is set to "yes" the keypad can
        be used to patch a dimmer or moving light directly to a DMX address and head number – e.g.
    </p>
    <p>10 @ 2 – 5 will patch head number 10 to Universe 2 channel 5.</p>
</div>
<div class="section">
    ## 7.29. Virtual Dimmers
    <p>
        MagicQ enables LED and other heads with colour mixing but no dimmer channel to have an associated virtual dimmer. This allows the
        LED heads to be used as simple RGB heads with a dimmer. This development does not affect the internal pixel mapping (Bitmap FX)
        which already has a virtual dimmer.
    </p>
    <p>
        To add a virtual dimmer channel for a LED head (i.e. a head without a dimmer) simply patch a generic dimmer and set the head number
        to the same head number as the LED head. The generic dimmer will then be shown with a ‘v’ after the head number to indicate the
        association with the LED head. The LED head will then appear with a dimmer in the Intensity, Group, Outputs and Programmer windows.
    </p>
    <p>
        Note that virtual dimmers will only work if there are only 2 heads with the same head number – if there are more than 2 heads with
        the same head number then each head will be treated as a separate head.
    </p>
    <p>
        When MagicQ assigns a virtual dimmer in this way, in the Cue Engine it takes the value of the RGB (CMY) attributes from the
        playbacks and programmer and then scales these values according to the value of the virtual dimmer channel.
    </p>
    <p>
        Virtual Dimmers take effect at the Patch level rather than at the Programmer level. This means that the Output Window, View Heads
        will show the virtual levels on the RGB channels (i.e. the RGB levels before the virtual dimmer is applied).
    </p>
    <p>
        The Outputs Window, View Chans, View DMX will show the actual levels output to the RGB channels (i.e. the level after the virtual
        dimmer is applied).
    </p>
    <p>
        The full head can be selected using the head number. The title bar of the Group, Pos, Colour, Beam windows will show +v for each
        head with a virtual dimmer.
    </p>
    <p>To always add virtual dimmers when patching set Auto VDIMs to on using Patch soft button E.</p>
    <div class="section">
        ### 7.29.1. Quickly adding Virtual Dimmers to patched heads
        <p>
            It is possible to add virtual dimmers to a head in the Patch, View Heads view using a single action. Place the cursor on the
            head you wish to add a virtual dimmer for and then press SHIFT and ADD VDIM. You can use SHIFT or CTRL + the cursor keys to
            select multiple heads.
        </p>
        <p>
            Virtual dimmers can only be added to heads that do not have an intensity channel. For heads with multiple RGB elements, a
            virtual dimmer will be made for each RGB element.
        </p>
        <p>
            Virtual dimmers added in this way will appear unpatched. Note that virtual dimmers take up channels from the total channel
            count.
        </p>
        <p>
            It is possible to hide the virtual dimmers from the Patch View using Setup, View Settings, Cue Storage, Hide Vdims. In this case
            the virtual dimmers are not shown as separate heads in the Patch View. Instead the head with the virtual dimmer shows a +v in
            the Head No field.
        </p>
        <p>Virtual dimmers can be removed from a head by pressing SHIFT and REMOVE VDIM.</p>
    </div>
    <div class="section">
        ### 7.29.2. Heads always with virtual dimmers
        <p>
            It is possible to make heads that automatically patch a virtual dimmer. In the Head Editor, View General, Options there is an
            option "Virtual Dim". If this is set to "yes" and the head has no dimmer then a virtual dimmer is automatically patched for this
            head.
        </p>
        <p>The MagicQ head library includes a mode of LED3chan with a virtual dimmer.</p>
        <p>Note that Virtual Dimmer is distinct from Virtual Channels where all the channels of the head have separate DMX addresses.</p>
    </div>
</div>
<div class="section">
    ## 7.30. Patch Head Filtering
    <p>
        In Patch, Choose Head it is possible to filter personalities by type, making it easier to find the personalities required. Filter
        options include All, Patched, Live, Club, Film/TV and User.
    </p>
    <p>Patched enables users to see which heads are patched in the current show and to re choose them easily.</p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/patched.png" alt="image" />
        </span>
    </p>
    <p>
        Users can tag heads that they use frequently so that they appear in the User filter. This could be used for example to include all
        heads in the stock of a rental company.
    </p>
    <p>
        Heads can be tagged and untagged in both Choose Head, Simple View and Choose Head, Adv View. In Simple View you can tag all heads
        from a particular manufacturer, or all modes of a specific head. In Adv View you can tag individual modes of a head.
    </p>
    <p>In Adv View the Tag column shows a "U" for all heads tagged as user.</p>
    <p>
        MagicQ stores a file of all tagged heads in the heads folder called userheads.csv. It is possible to create or edit this file with a
        text editor/spreadsheet. The format is:
    </p>
    <p>&lt;manufacturer&gt; , &lt;short name&gt; , &lt;mode&gt;</p>
    <div class="section">
        ### 7.30.1. Duplicated elements operating independently
        <p>
            Duplicated heads can operate in a Duplicated or Independent Mode in the Patch, View Heads view - scroll to the right to find the
            "Independent" column. This is useful when you wish to record different elements into different playbacks and mix them together -
            the elements will operate as if they were separate heads. Independent mode is supported from v1.7.9.6.
        </p>
        <p>
            When set to "Ind", all elements act independently. When selecting a complete head all elements are made active in the programmer
            and programmed into Cues. When selecting elements of a head using the dot (.) syntax only the selected elements are made active
            in the programmer and programmed into Cues. FX can operate across all elements either in sync or offset across the elements.
        </p>
        <p>
            When set to "Dup", elements 2 and above are duplicated from element 1 when they are not explicitly in the programmer or active
            on a playback. This provides a simple programming mode where the head generally operates as a single element. FX can operate
            across all elements either in sync or offset across the elements. Using the dot (.) syntax different levels can be programmed
            for the different element into a single Cue.
        </p>
        <p>
            The default for this field comes from the Head Editor where it is possible to set the "Independent" field per channel. When a
            head is patched, then MagicQ will use the defaults from the Head Editor for each channel - if one or more duplicated elements 2
            or above is set as Independent in the personality then the head will show as Independent in the Patch View.
        </p>
        <p>
            The setting in the Patch window overrides the setting in the Head Editor, enabling the option to be set differently per head.
            Users should change the option in the Patch not in the Head Editor.
        </p>
    </div>
</div>
