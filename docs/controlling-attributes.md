---
id: controlling-attributes
title: Chapter 9. Controlling Attributes
sidebar_position: 9
---

# Chapter&nbsp;9.&nbsp;Controlling Attributes
<p>
    MagicQ supports many different ways of modifying the values of attributes for moving heads - using encoders, using buttons, and using
    the touch screen.
</p>
<p>
    In order to control intelligent heads it is necessary to be able to select which heads to use. MagicQ keeps track of the currently
    selected heads to enable it to determine which heads to apply changes to. You can select heads individually or can use groups to recall
    configurations of heads that are used frequently.
</p>
<div class="section">
    ## 9.1.&nbsp;Selecting Heads
    <p>
        MagicQ automatically generates a group for all the heads of a particular head type. In addition new groups can easily be recorded.
    </p>
    <p>
        The Group Window has two views. VIEW GROUPS enables selection of heads using groups whilst VIEW HEADS enables individual selection
        of heads.
    </p>
    <p>
        In VIEW GROUPS, pressing the touch screen for a particular group selects all the heads associated with that group. All other heads
        are deselected.
    </p>
    <p>
        In VIEW HEADS, individual heads are selected by pressing the touch screen. All other heads are deselected. Use PG UP and PG DN to
        scroll through the heads. To select multiple heads hold SHIFT and press a head. The head will be toggled in and out of selection.
    </p>
</div>
<div class="section">
    ## 9.2.&nbsp;Using Groups
    <p>
        Once a group has been recorded, then pressing the touch screen for the group will make all the heads in the group selected. All
        other heads will be deselected. To select multiple groups press SHIFT and a group to toggle the group in and out of selection.
    </p>
    <p>
        Set the Select Multiple Groups option in Setup, View Settings, Prog to enable multiple groups to be selected without pressing SHIFT.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/groupwindow2.png" alt="image" />
        </span>
    </p>
    <p>
        When in the VIEW GROUPS view you can also use the keypad to select a group - simply enter the group number. You can use + and - to
        select multiple groups.
    </p>
    <p>
        Pressing + before a group is selected adds the group to previously selected heads, i.e. the heads in the group are all selected as
        before, but other heads are not deselected.
    </p>
    <p>For example to select groups 1 and 3 press</p>
    <p>1 + 3 ENTER</p>
    <p>To deselect group 4 from the selection press</p>
    <p>- 4 ENTER</p>
    <p>
        MagicQ generates groups for each head as they are patched. In addition MagicQ can generate
        <a class="link" href="pixel-mapping.html#auto-groups" title="24.7.1.&nbsp;Auto Groups">auto groups</a>
        based on gel colour and head name.
    </p>
    <div class="section">
        ### 9.2.1.&nbsp;Recording a Group
        <p>Select the heads you want in a group in the VIEW HEADS view of the Group Window.</p>
        <p>Change to the VIEW GROUPS view.</p>
        <p>
            Press RECORD and then select the group you wish to record either by pressing the touch screen or by using the cursor keys and
            then pressing ENTER.
        </p>
    </div>
    <div class="section">
        ### 9.2.2.&nbsp;Naming a Group
        <p>
            When recording a group, if you key in a name before pressing the touch screen (or pressing ENTER) then the group will be named
            at the same time as it is recorded.
        </p>
        <p>You can name a group at any time by keying in the name, pressing SET, and pressing the touch screen.</p>
        <p>
            If you do not have a keyboard then press SET and select the group to name by pressing the touch screen (or using cursor keys and
            ENTER). A keyboard window will be displayed for you to enter the name on screen.
        </p>
    </div>
    <div class="section">
        ### 9.2.3.&nbsp;Setting Group Icon or Col Tag
        <p>
            Set a Icon for a Group by pressing SHIFT and SET and then selecting the Group item to set an icon to. The File Manager will be
            opened with a list of icons.
        </p>
        <p>
            It is possible to show Col Tags associated with each Group. In Setup, View Settings, Windows set the Col Tag to Head Type - this
            will automatically show a different colour tag for each type of head. Alternatively set the Col to Patch. This will then use the
            Col Tag assigned in the Patch to the first head in the Group.
        </p>
    </div>
</div>
<div class="section">
    ## 9.3.&nbsp;Selecting Heads using the keypad
    <p>
        Heads can be selected based on the head numbers of your dimmers / moving lights - if you intend to use this method then you should
        set up the head numbers of your lamps when patching. It is easy to do; MagicQ can automatically renumber them, or they can be set to
        be the same as the DMX start address of the dimmer / head. See the section on
        <a class="link" href="patching.html" title="Chapter&nbsp;7.&nbsp;Patching">patching</a>
        .
    </p>
    <p>On MagicQ the keypad is used for many functions including selecting heads, settings times, editing fields in spreadsheets.</p>
    <p>Heads can always be selected directly from the keypad regardless of setup options by entering the head number followed by @@</p>
    <p>101 @@</p>
    <p>
        Or by enteing the head number followed by @ ENTER or on Stadium consoles by using the HEAD key followed by the head number, for
        example:
    </p>
    <p>101 @ ENTER</p>
    <p>HEAD 101 ENTER</p>
    <p>
        For users that wish to use the keypad regularly for selecting heads, MagicQ provides the Keypad always selects heads option in
        Setup, View Settings, Keypad &amp; Encoders.
    </p>
    <p>When set to Yes (Priority to selected Heads) or Yes (Strict) the head number can be simply entered on the keypad.</p>
    <p>101 ENTER</p>
    <p>In these modes, to perform other operations like editing fields in the spreadsheet views, you need to press the SET button first.</p>
    <div class="section">
        ### 9.3.1.&nbsp;Selecting multiple heads from the keypad
        <p>To select heads 1 to 4 key in</p>
        <p>1 THRU 4 ENTER</p>
        <p>To select heads 1 to 4 and heads 8 to 11 key in</p>
        <p>1 THRU 4 + 8 THRU 11 ENTER</p>
        <p>To select heads 1 through 12 but not head 7 key in</p>
        <p>1 THRU 12 - 7 ENTER</p>
        <p>To select all heads of a certain type without specifying the entire range use</p>
        <p>1 THRU ENTER</p>
        <p>
            This selects all heads of the same type as head 1 starting at head no 1 in ascending head order until it reaches a head that is
            not of the same type.
        </p>
        <p>
            At any time you can select all of the heads of a particular type (regardless of head no) by selecting one of the heads and then
            using ALT ALL
        </p>
        <p>1 ENTER</p>
        <p>ALT ALL</p>
        <p>Note that on MagicQ PC you can use &gt; to indicate THRU.</p>
        <p>0 ENTER deselects all heads.</p>
        <p>To sub select an element of a multi element head use the dot operator, for example head 1 element 2.</p>
        <p>
            1 . 2 ENTER . 3 ENTER // Select 3rd element of currently selected heads . 1 &gt; 3 ENTER // Select 1st, 2nd and 3rd elements of
            currently selected heads . 1 + 4 ENTER // Select 1st and 4th elements of currently selected heads .&gt; ENTER // Select all
            duplicated elements of currently selected heads . ENTER // Cancel selection of duplicated elements - revert to normal head
            selection
        </p>
        <p>Note that in the above when the Keypad Selects Head option is set to No then ENTER should be replaced with @@.</p>
    </div>
    <div class="section">
        ### 9.3.2.&nbsp;Selecting Groups from the keypad
        <p>
            When the Select Heads and Palettes from keypad option in Setup, View Settings, Keypad &amp; Encoders is set, Groups can be
            selected directly from the keypad.
        </p>
        <div class="informaltable">
            <table class="informaltable" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                </colgroup>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>GROUP 1 ENTER</p></td>
                        <td align="left" valign="top"><p>Selects Group 1</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>GROUP 1 + 2 ENTER</p></td>
                        <td align="left" valign="top"><p>Selects Groups 1 and 2</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>GROUP 1 THRU 4 ENTER</p></td>
                        <td align="left" valign="top"><p>Selects Groups 1 ,2,3 and 4</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>GROUP 1 THRU 4 - 3 ENTER</p></td>
                        <td align="left" valign="top"><p>Selects Groups 1 ,2 and 4</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="section">
        ### 9.3.3.&nbsp;Selecting Palettes from the keypad
        <p>
            When the Select Heads and Palettes from keypad option in Setup, View Settings, Keypad &amp; Encoders is set, Palettes can be
            selected directly from the keypad.
        </p>
        <div class="informaltable">
            <table class="informaltable" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                </colgroup>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>COL 4 ENTER</p></td>
                        <td align="left" valign="top"><p>Sets selected heads to Colour palette 4</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>GROUP 8 COL 4 ENTER</p></td>
                        <td align="left" valign="top"><p>Sets Group 8 heads to Colour palette 4</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>GROUP 8 COL 4 BEAM 5 ENTER</p></td>
                        <td align="left" valign="top"><p>Sets Group 8 heads to Colour palette 4 Beam palette 5</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>101 COL 4 BEAM 5 ENTER</p></td>
                        <td align="left" valign="top"><p>Sets Head 101 to Colour palette 4 Beam palette 5</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>GROUP 8 @ FULL FX 3 ENTER</p></td>
                        <td align="left" valign="top"><p>Sets Group 8 to 100% with FX 3</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="section">
        ### 9.3.4.&nbsp;Remove Dimmer (Rem Dim) Function
        <p>
            The keypad now supports functionality to enable selecting of individual selections of heads and automatically setting all other
            heads to zero intensity – this is similar to the "Rem Dim" function found in some other theatre consoles. After selecting heads
            or setting intensities for heads, type - -.
        </p>
        <p>
            For example, 1 THRU 4 @ FULL - - will set heads 1 to 4 at full intensity and all other heads in the programmer will have their
            intensity set to zero.
        </p>
        <p>
            4 THRU 8 - - will bring heads 4 to 8 at full intensity into the programmer, whilst all other heads in the programmer will be set
            to zero intensity.
        </p>
    </div>
</div>
<div class="section">
    ## 9.4.&nbsp;Selecting heads using the rig plan view
    <p>
        Heads can be selected from a plan of the rig in the View Plan view of the Outputs window. See
        <a class="link" href="outputs-windows.html#_plan_view" title="13.6.&nbsp;Plan View">Plan View</a>
        .
    </p>
</div>
<div class="section">
    ## 9.5.&nbsp;Head Macros
    <p>
        MagicQ loads macros for the head from the personality file. Typical macros are "Lamp On", "Lamp Off" and "Reset" - however they are
        very head dependent.
    </p>
    <p>The "Lamp On", "Lamp Off" and "Reset" macros can be run at any time by using the following short-cuts:</p>
    <p>SHIFT + LOCATE Lamp on selected heads</p>
    <p>CTRL + LOCATE Reset selected heads</p>
    <p>CTRL + SHIFT + LOCATE Lamp off selected heads</p>
    <p>
        Other head macros can be accessed in the Macro Window - press the HEAD MACRO soft button. A list of the available macros is
        displayed. Select the macro you wish to run. Progress of the macro is shown in the Input Display.
    </p>
    <p>It is also possible to lamp on or off all heads from the MACRO window.</p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/macrosoftbuttons.png" alt="image" />
        </span>
    </p>
</div>
<div class="section">
    ## 9.6.&nbsp;Locating Heads
    <p>
        The first action you are likely to want to do is to locate the heads – i.e. to put them into a starting position. Select the
        required heads and then press the LOCATE button.
    </p>
    <p>
        Pressing LOCATE, locates all the selected heads. LOCATE places all the attributes of the selected head(s) into the Programmer at
        their Locate values.
    </p>
    <p>
        Every Head in the MagicQ library has a set of Locate values and a set of Default values. The DMX values for Locate are part of a
        heads profile. The Locate Values and Default Values are often the same however there may be some slight differences in the two.
        These values are set by each manufacturer and outlined in the DMX chart provided by that manufacturer. A good example of this is
        often the Dimmer channel. The Locate value may bring the dimmer into the programmer at full intensity or DMX value of 255 while the
        Default value will tell the fixture to default to no intensity or a DMX value of 0
    </p>
    <p>
        When using Locate typically the shutter is opened, the dimmer is set to 100% (DMX value of 255) and pan and tilt are set to the
        center position, (DMX value of 128) You can Locate attributes individually by holding down one of the Pos, Col, Beam, or Intensity
        buttons and pressing Locate. Only attributes of that type are Located and placed into the programmer.
    </p>
    <p>
        Locate values are ‘active’ in the sense that the operator has to activate or hit the Locate button to bring the Locate values in to
        the programmer. Default values are ‘passive’ in the sense these values tell the fixture what DMX values to default back to when no
        information is in the programmer.
    </p>
</div>
<div class="section">
    ## 9.7.&nbsp;Modifying Attributes
    <p>
        Intelligent heads have several different attributes typically including pan and tilt, colour, gobo and iris. When MagicQ patches an
        intelligent head it maps the head parameters to standard attributes to enable easy access of the features of the head.
    </p>
    <p>
        Attributes are categorised into four types – Intensity, Position, Colour and Beam. On MagicQ there is a window for each of these
        attribute types. Select the required heads, then open the required window.
    </p>
    <p>
        The window enables the control of all the attributes of that attribute type using the eight rotary encoders. In the Beam Window
        there are more than eight attributes to be controlled – these are accessed using multiple pages of encoders – by pressing the PAGE
        1, PAGE 2, PAGE 3, PAGE 4 or PAGE 5 soft buttons or pressing the BEAM button again.
    </p>
    <p>
        For indexed attributes such as colour wheels and gobo wheels, the button associated with each encoder can be used to bump the
        attribute value to the next range. Pressing SHIFT and the button bumps back to the previous range.
    </p>
    <p>
        In addition the window enables selection of palette values for the attribute type using the touch screen. When heads are recorded
        the system automatically generates palettes for each attribute type. You can record new palette entries, or modify existing ones as
        you see fit.
    </p>
    <p>
        In the Colour Window there is a COL MIX soft button which gives access to libraries of pre-programmed colours. Pressing the COL MIX
        soft button toggles between the normal palette view and the colour mixing view. In the colour mixing view you can select a colour
        using the touch screen. The COL TYPE soft button enables the user to choose between the default colour library, the Lee colour
        library or the Rosco colour library.
    </p>
    <p>To modify a 16bit parameter in high (i.e. 16 bit resolution), hold SHIFT and turn the appropriate encoder.</p>
    <p>Layout 1 opens the Group, Position, Colour and Beam windows together.</p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/paletteswindows.png" alt="image" />
        </span>
    </p>
</div>
<div class="section">
    ## 9.8.&nbsp;Colour Attributes
    <p>
        There are 13 colour attributes. The core colour mixing attributes are Cyan (Red), Magenta (Green), Yellow (Red), Amber, White and
        UVLime.
    </p>
    <p>The colour wheels are Col1 and Col2. In addition there is CTC, CTO, Col5, Col6, and Col Speed.</p>
    <p>
        The Colour Window now supports two pages of colour attributes. Page 1 is for the core colour mixing - Red, Green, Blue, Amber,
        White, UV Lime and the main 2 colour wheels Col1 and Col2. CTC and CTO default to encoders A and B on Colour Page 2.
    </p>
    <p>
        The Col Mix option in the personalities (Head Editor, View General, Options tab) specifies which attributes are being used for
        colour mixing.
    </p>
    <p>
        For heads with HSI or HSV models, Hue is always on the Cyan/Red attribute and Saturation is on the Magenta/Green attribute. The Col
        Mix option is set to HSI to enable MagicQ to recognise these heads.
    </p>
    <p>
        Colour temperature can be set onto CTC, CTO, Col1 and Col2 colour attributes in the Colour Window, and the current colour
        temperature will be show shown based on the range name info in the Head personality. For example, typing SET 3500 and pressing the
        soft button for CTC will attempt to set the CTC attribute to be 3500K. Turning the encoder will show the colour temperature as per
        the range names, interpolating between the different ranges.
    </p>
</div>
<div class="section">
    ## 9.9.&nbsp;Flip / Mirror
    <p>
        Flip modifies the pan and tilt parameters of a moving head so that the beam is positioned in the same place but from the other end
        of its movement ranges. Select the heads and then press the FLIP soft button in the Position Window.
    </p>
    <p>
        Use the MIRROR soft button in the Position Window to only invert the Pan attribute and not the tilt attribute. On older software
        versions press SHIFT + FLIP.
    </p>
    <p>Stadium consoles include a dedicated MIRROR button. On Compact consoles press ALT + FAN.</p>
</div>
<div class="section">
    ## 9.10.&nbsp;Setting attribute values using the keypad
    <p>
        You can set attribute values directly by pressing SET, entering the value on the keypad and then pressing the soft button for
        attribute in the Intensity, Position, Colour and Beam windows.
    </p>
</div>
<div class="section">
    ## 9.11.&nbsp;Reversing rotations
    <p>
        To reverse the rotation direction of gobos in the selected heads, hold the MIR button and press the soft button for the rotate
        attribute (e.g. soft button E and F in beam Page 1).
    </p>
    <p>On MagicQ PC or on systems without a MIR button, press SET and type "-" before pressing the soft button.</p>
    <p>
        Each of the heads will be reversed individually - so if heads have a mixture of clockwise and counter clock wise rotation, then each
        head will be reversed so that you then have a mixture of counter clockwise and clockwise.
    </p>
</div>
<div class="section">
    ## 9.12.&nbsp;Snap colour
    <p>Snap colour sets all selected Heads to the same colour values as the first selected Head. Snap Colour is available via ALT + ALL.</p>
</div>
<div class="section">
    ## 9.13.&nbsp;Default colour
    <p>
        Default colour sets all selected Heads to the default colour of those Heads. If the colour is already the default colour then sets
        them to red. Default Colour is available via ALT + LOCATE.
    </p>
</div>
<div class="section">
    ## 9.14.&nbsp;Selecting individual Heads
    <p>
        When programming it is often useful to be able to control one head out of a group of heads - for instance, in order to set up it’s
        position on the stage. Alternatively you may wish to apply an effect to all the heads, such as fanning the position.
    </p>
    <p>
        The head control buttons situated to the right of the touch screen enable the individual head to be selected quickly. Once a number
        of heads have been selected for programming, the head control buttons controls how changes are applied to those heads. By default
        changes are applied to all the selected heads.
    </p>
    <p>
        On MagicQ you first select the overall selection of heads you want to control using Groups or keypad selection, then you use the
        head control buttons to sub-select within that overall selection.
    </p>
    <p>The title bar of the Group, Position, Colour and Beam Windows show the currently selected heads.</p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/groupboxs.png" alt="image" />
        </span>
    </p>
    <div class="section">
        ### 9.14.1.&nbsp;Single Mode
        <p>
            Pressing NEXT HEAD, PREV HEAD or SINGLE enters Single mode whereby only one head from the selected heads is sub selected for
            operation on at a time.
        </p>
        <p>
            When Single mode is first entered control is given to the first head within the selection – i.e. the first head within the group
            or the first head the user selected after no heads were selected.
        </p>
        <p>Single mode is indicated by a LED lit on the SINGLE button.</p>
        <p>
            In Single mode changes made by the encoders or through selecting Palettes only affect the one sub selected head. The head is
            indicated by a * by the head number.
        </p>
        <p>
            Once in Single mode, the NEXT HEAD and PREV HEAD buttons are used to transfer control between the selected heads. Pressing the
            ALL button returns the head control area to the default mode whereby all selected heads are controlled.
        </p>
        <p>In Single mode, Locate only affects the sub selected head.</p>
    </div>
    <div class="section">
        ### 9.14.2.&nbsp;Pair
        <p>
            Pair mode is similar to Single mode except that instead of only a single head being sub selected, a symmetrical pair within the
            selected heads is sub selected.
        </p>
        <p>Pair mode is indicated by a LED flashing on the SINGLE button.</p>
        <p>
            Pressing NEXT HEAD or PREV HEAD selects the next pair for sub selection. Pressing the ALL button returns the head control area
            to the default mode whereby all selected heads are controlled.
        </p>
        <p>
            The MQ500 includes a dedicated PAIR button. On Compact consoles (MQ40/60/70) press ALT + SINGLE to get Pair. On all systems
            SHIFT + SINGLE will also select PAIR.
        </p>
    </div>
    <div class="section">
        ### 9.14.3.&nbsp;Odd/Even
        <p>
            Odd/Even mode is similar to Single mode except that instead of only a single head, half of the heads are sub selected. Odd/Even
            mode is indicated by a LED lit on the ODD/EVEN button.
        </p>
        <p>
            Pressing ODD/EVEN selects the odd heads. Pressing NEXT HEAD or PREV HEAD toggles between the odd and even heads. Pressing the
            ALL button returns the to the default mode whereby all selected heads are controlled.
        </p>
        <p>
            Holding the ODD/EVEN button brings up the Odd/Even toolbar for quick selection of odd/even or 3s, 4s, 5s. On MagicQ PC/Mac
            pressing SHIFT and ODD/EVEN opens the toolbar and keeps it open.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/oddeventoolbar.png" alt="image" />
            </span>
        </p>
        <p>Press SHIFT + ODD/EVEN to increase the mode to 3s or more.</p>
    </div>
    <div class="section">
        ### 9.14.4.&nbsp;Segments
        <p>
            Segments is similar to Odd/Even except that the sub selection is a segment of heads - for example if you have selected 10 heads
            and then select Seg 3’s will sub select the first three heads in the selection. Pressing Next Head will select the next three,
            then pressing NEXT HEAD again will get the next three, and then pressing NEXT HEAD again will get the tenth head. Pressing NEXT
            HEAD again goes back to the start with the first three. PREV HEAD works in a similar way but in the opposite direction.
        </p>
        <p>Segments is selected by holding ODD/EVEN to show the ODD/EVEN toolbar and then selecting SEGMENTS.</p>
    </div>
    <div class="section">
        ### 9.14.5.&nbsp;All
        <p>
            The ALL button is used to return the head control area to the default mode whereby all heads in the current selection are
            controlled.
        </p>
        <p>
            Pressing ALL when there are no heads selected causes the selected heads that were active when CLEAR was last pressed, to be
            reselected.
        </p>
        <p>Pressing SHIFT and ALL selects all the heads of the type last selected.</p>
        <p>Pressing CTRL + ALL, or FAN + ALL selects all the heads active in the programmer.</p>
        <p>Pressing Next Head and Prev Head reselects all heads in the current selection (like pressing ALL).</p>
    </div>
    <div class="section">
        ### 9.14.6.&nbsp;Sub selecting Groups
        <p>
            It is also possible to sub select groups. When making a head selection you can choose multiple groups using SHIFT and pressing
            group items or using the keypad.
        </p>
        <p>
            To sub select groups, Hold Odd/Even and then select Groups. MagicQ will now sub select heads from the first group. Pressing Next
            Head moves the sub selection to the next group of heads. Pressing Prev Head moves the sub selection to the previous group of
            heads.
        </p>
    </div>
    <div class="section">
        ### 9.14.7.&nbsp;Sub selecting heads using specific palettes
        <p>
            It is possible to sub select heads from the current selection, sub selecting only the heads using a particular palette and that
            have intensity greater than 0%.
        </p>
        <p>Hold NEXT HEAD and then select a palette in the Position, Colour, or Beam windows.</p>
    </div>
    <div class="section">
        ### 9.14.8.&nbsp;Changing Overall Selection order
        <p>
            The order of the overall selection can be changed using the C Soft Button in the Group Window – the options are "Normal",
            "Reverse", "Into Centre" and "Centre Out".
        </p>
        <p>
            It is also possible to randomise the overall selection order by holding SHIFT and pressing "RANDOM SELECT". The overall
            selection order can be randomised multiple times to get different random orders. Note that once the order is randomised it can
            not be returned to the normal order – to do this you must reselect the overall selection.
        </p>
        <p>Hold the ALL button to bring up a toolbar showing the above options.</p>
    </div>
    <div class="section">
        ### 9.14.9.&nbsp;Sub selection of heads from Groups / Overall Selection
        <p>
            When you select heads using Groups or the keypad, MagicQ then enables the operation on a sub selection of the main selection
            using the Next Head, Prev Head, Odd/Even, and All buttons. This enables the user to select a group of heads and work on heads
            individually without reselecting the heads.
        </p>
        <p>
            It is possible to sub select heads from within the main selection using the keypad and referring to heads using the index of
            that head within the overall selection order – for instance, selecting the 1
            <sup>st</sup>
            and 3
            <sup>rd</sup>
            head within the selection, or selecting heads 1 THRU 4 in that selection. The numbers used are the index into the selection
            order, not the head numbers.
        </p>
        <p>
            To use this method, select a group of heads, then type the index number followed by NEXT HEAD or PREV HEAD. So to select the 1
            <sup>st</sup>
            and 2
            <sup>nd</sup>
            heads in the current selection:
        </p>
        <p>1+2 NEXT HEAD</p>
        <p>
            Or to the 3
            <sup>rd</sup>
            , 4
            <sup>th</sup>
            and 5
            <sup>th</sup>
        </p>
        <p>3 THRU 5 NEXT HEAD</p>
        <p>
            You can select multiple groups as your main selection – so if you have a line of 4 spots and 4 washes you can make a group with
            of all 8 heads and then access them using the numbers 1 to 8 regardless of their head number.
        </p>
        <p>It is possible to invert the current sub selection - press 0 NEXT HEAD.</p>
        <p>
            Using NEXT HEAD and PREV HEAD without entering a number, operates as normal, selecting the next or previous head within the
            overall selection.
        </p>
    </div>
</div>
<div class="section">
    ## 9.15.&nbsp;Sub selection of elements
    <p>
        In normal operation, all the elements of heads with duplicated elements are treated as if there is only one element of each
        attribute. MagicQ automatically copies the output from the 1st element to the duplicated elements. This enables the head to be
        treated in a simple way like any other head.
    </p>
    <p>
        Sub selection of elements to enable individual element control can be done using the "." operator. MagicQ keeps a global element
        mask in the programmer to determine which elements are being controlled for the selected heads.
    </p>
    <p>
        The first element in the head is ".1" and the duplicated elements are ".2", ".3" and so on. For heads that have both a main section
        and duplicate elements (e.g. master colour channels and individual colour pixels) the main element is ".0".
    </p>
    <p>For example, to select the second element of a duplicated head</p>
    <div class="orderedlist">
        <ol class="orderedlist" type="1">
            <li class="listitem">2 ENTER</li>
        </ol>
    </div>
    <p>To select all elements of duplicated heads.</p>
    <div class="orderedlist">
        <ol class="orderedlist" type="1">
            <li class="listitem">&gt; ENTER</li>
        </ol>
    </div>
    <p>To go back to normal selection (i.e. no duplicated elements selected)</p>
    <div class="orderedlist">
        <ol class="orderedlist" type="1">
            <li class="listitem">ENTER</li>
        </ol>
    </div>
    <p>When all elements are selected the head selection text in the Window title bars will show ".all".</p>
    <p>
        Note that the ENTER must be replaced with @ @ when the option to select heads from keypad is not set. @ @ can also be replaced by
        NEXT HEAD.
    </p>
    <div class="section">
        ### 9.15.1.&nbsp;Head Element Selection
        <p>
            From v1.0.1.0 the selection of individual head elements for duplicated heads has been enhanced to enable selection of different
            elements from different heads using both the keypad and the Output window View Grid view.
        </p>
        <p>
            This operates in addition to the existing global programmer elements selection which affects all selected heads. When using the
            keypad the element selection is global unless multiple dot operators are specified in the synax or until elements are added to
            an existing selection.
        </p>
        <div class="informaltable">
            <table class="informaltable" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                </colgroup>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>.2 ENTER</p></td>
                        <td align="left" valign="top"><p>Select global element 2</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>.2 THRU 4 ENTER</p></td>
                        <td align="left" valign="top"><p>Select global elements 2,3,4</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>101.2 ENTER</p></td>
                        <td align="left" valign="top"><p>Select head 101 and global element 2</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>101.2 THRU 4 ENTER</p></td>
                        <td align="left" valign="top"><p>Select head 101 and global element 2,3,4</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>101 THRU 104 . 2 THRU 4 ENTER</p></td>
                        <td align="left" valign="top"><p>Select head 101 to 104 and global element 2,3,4</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>+105 . 4 ENTER</p></td>
                        <td align="left" valign="top"><p>Add Head 105 head element 4 to the existing selection</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>101 . 1 + 102 . 2 ENTER</p></td>
                        <td align="left" valign="top"><p>Select Head 101 head element 1 and Head 102 head element 2</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>101 . 1 + . 2 + 102 . 3 ENTER</p></td>
                        <td align="left" valign="top"><p>Select Head 101 head elements 1 and 2 and Head 102 head element 3</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>
            When head element selection is in operation the title bar of the Outputs, Group and Palette windows shows the elements in the
            order selected, prefixed by "HE".
        </p>
        <p>
            In the Output View when a Grid is set to Multi Head then selection of elements will always select individual head elements
            rather than global elements.
        </p>
        <p>In the Output View multiple head elements can be selected by dragging over the required elements.</p>
        <p>
            The selection of head elements is ordered, in the order that they are selected. When dragging over multiple elements, the
            initial drag direction determines the order - as per dragging over single element heads.
        </p>
        <p>
            Operations such as changing attributes, selecting palettes, and applying times will only affect the selected head elements, not
            the full heads.
        </p>
        <p>
            Normal head FX can be applied and will affect only the selected head elements and will respect the head element selection order.
        </p>
        <p>
            The head element selection can be recorded into a Group - the Group will show HE followed by the number of heads in the top
            right corner - e.g. HE2 indicates that 2 heads have some head elements selected. When the groups are selected the head elements
            will be added or removed from the current selection in a similar way to direct selection from the Output Window.
        </p>
        <p>
            Any Head that has a head element selected, or has had a head element selected since the last clear / deselect of heads will show
            in the Outputs, View Heads and Programmer windows as selected, but operations that support head elements will only affect the
            current head elements selected.
        </p>
        <p>
            Pressing CLEAR, DESELECT HEADS, NEXT HEAD, PREV HEAD, ALL or SINGLE will revert MagicQ to the normal head selection. Entering a
            global element number (e.g. . 2 ENTER) on the keypad will also revert to normal head selection.
        </p>
        <p>
            Keypad selection and setting intensities of elements using the dot syntax operates as before, except that when using the +
            operator at the start of a selection it enables per head element selection.
        </p>
        <p>
            Palettes can be applied with times using the standard timed shortcuts (*, *+, *- , */ and *.) and will respect the head element
            selection order.
        </p>
        <p>Group FX on Groups with head element selection will operate on the head element selection (v1.9.1.1 and above).</p>
        <p>
            The existing programmer elements can also now be used to apply timed palettes with element section order / priorities as shown
            in the Group, View Elements window.
        </p>
        <p>
            Note that when setting intensities using the keypad using the @ syntax it is not possible to set heads with multiple head
            elements, only one dot is allowed in the command syntax.
        </p>
    </div>
    <div class="section">
        ### 9.15.2.&nbsp;Element selection in the Group window
        <p>
            The View Elements view shows the current global element selection and enables one or more global elements to be selected or
            deselected.
        </p>
        <p>
            Each element has a newly supported priority which is shown in the top right corner of the element. Elements can have the same or
            different priorities enabling either sequential element usage or simultaneous element usage.
        </p>
        <p>
            When an element selection is active, FX are now only applied to those elements. If the option "Inc Element (synced)" is chosen
            then the element priorities will be used in playing back the FX. Both Group FX and Normal FX take the element selection and
            priority into account.
        </p>
        <p>
            For example, if half of the elements have priority 1 and the others have priority 2 then the FX offset is split into two - all
            the elements with priority 1 will have the same FX offset, whilst all the elements with priority 2 have the same (opposite) FX
            offset.
        </p>
        <p>
            When elements are selected from the keypad then they automatically get increasing priorities - e.g. if you enter . 6 THRU 10
            then elements 6 to 10 will be selected with increasing priorities 1 to 5. If you enter . 10 THRU 6 then then elements 6 to 10
            will be selected with decreasing priorities 5 to 1.
        </p>
        <p>
            When individual elements are selected in the View Element window then they get increasing priorities. When the programmer is
            cleared or all elements are deselected the priorities are reset.
        </p>
        <p>It is possible to set priorities directly to one of more elements using SET.</p>
        <p>
            Element priorities are stored when Groups are recorded and are recalled when groups are selected - therefore it is possible to
            create groups with the same heads but different element priorities.
        </p>
    </div>
    <div class="section">
        ### 9.15.3.&nbsp;Groups with element selection
        <p>
            The duplicated element selection can be stoed in Groups - so you could make a group with no duplicated element selection and one
            with all duplicated elements selected. Groups with duplicate element selection show a "." after the number of heads in the top
            right of the group item. Note that duplicate element selection applies to all selected heads in the programmer and in groups, so
            it is not possible to store e.g. element 1 from head 1 and element 2 from head 2 in the group.
        </p>
    </div>
</div>
<div class="section">
    ## 9.16.&nbsp;Sub Groups
    <p>
        MagicQ stores sub group information in groups. If multiple groups are selected and then recorded into a new group, the new group
        will store the selected heads and also store the groups that are active.
    </p>
    <p>The original groups that were active when a group was recorded can be recalled by using INCLUDE and selecting the group.</p>
    <p>If the group is always to be used for recalling sub groups then the Group type should be set to Sub Group.</p>
</div>
<div class="section">
    ## 9.17.&nbsp;Group Type
    <p>The Group Type can be set using soft Button E. There are four options:</p>
    <div class="informaltable">
        <table class="informaltable" cellpadding="4px">
            <colgroup>
                <col class="col_1" />
                <col class="col_2" />
            </colgroup>
            <tbody>
                <tr>
                    <td align="left" valign="top"><p>Norm</p></td>
                    <td align="left" valign="top"><p>Operates normally - selects the Group and all the Heads within the Group</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Sub Groups</p></td>
                    <td align="left" valign="top"><p>Group always recalls sub groups rather than the Group</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Elements Only</p></td>
                    <td align="left" valign="top"><p>Sets the Element selection only. No Heads or Groups are selected</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>No Groups</p></td>
                    <td align="left" valign="top"><p>Selects the Heads within the Group, but not the Group</p></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<div class="section">
    ## 9.18.&nbsp;Highlight Mode
    <p>
        Highlight mode is used in conjunction with Single mode and Odd/Even mode. There are four possible modes of operation depending on
        the setting in the Setup Window of the Highlight Mode - "Normal", "Advanced (highlights/lowlight)", "Advanced Highlight only" and
        "Advanced, no reset".
    </p>
    <p>
        In "Normal" mode, the intensities of the selected heads are reduced except for the one (or ones in Odd/Even mode) that are being
        controlled. Highlighting of the controlled head(s) makes programming of positions much easier.
    </p>
    <p>
        In "Advanced (highlight/lowlight)" mode, the selected heads are highlighted using the highlight values from the personality. If
        heads from the current selection are sub selected (e.g. through Single or Odd/Even) then the sub selected heads are highlighted and
        the remaining heads in the selection are lowlighted.
    </p>
    <p>
        "Advanced Highlight Only" is the same as above, but no lowlighting occurs. If heads from the current selection are sub selected
        (e.g. through Single or Odd/Even) then only the sub selected heads are highlighted - all other heads remain at their playback state.
    </p>
    <p>
        "Advanced no reset" is the same as "Advanced (highlight/lowlight)" but is not cleared when you press CLEAR. Press Highlight again to
        reset it.
    </p>
    <p>
        When in Highlight mode the LED on the HIGHLIGHT button is lit - pressing the HIGHLIGHT button again or the ALL button returns the
        head control area back to the default mode.
    </p>
</div>
<div class="section">
    ## 9.19.&nbsp;Lowlight function
    <p>
        A lowlight function is accessed by pressing SHIFT and HIGHLIGHT. When active the selected head is lowlighted to the value in the
        personality. This allows each head in the current selection to be temporarily lowlighted to try to find a particular head – without
        making a massive change to the current lighting state.
    </p>
    <p>Highlight mode must be set to Advanced highlight/lowlight.</p>
</div>
<div class="section">
    ## 9.20.&nbsp;Reselecting heads using Palettes and Intensities (Active Palette and Intensity)
    <p>To reselect all heads using a particular palette, hold ALL and press the palette entry.</p>
    <p>&lt;Hold ALL&gt; &lt;Green&gt;</p>
    <p>Or use the keypad</p>
    <p>&lt;Hold ALL&gt; &lt;COL 5 ENTER&gt;</p>
    <p>To reselect all heads at or above an intensity level hold ALL and type the level. Then release ALL or press ENTER.</p>
    <p>&lt;Hold ALL&gt; &lt;50 ENTER&gt;</p>
    <p>To reselect all heads at a specific intensity level hold ALL and type @ followed by the level. Then release ALL or press ENTER.</p>
    <p>&lt;Hold ALL&gt; &lt;@ 60 ENTER&gt;</p>
    <p>To reselect all heads active in the programmer</p>
    <p>&lt;CTRL&gt; + &lt;ALL&gt;</p>
    <p>To select all heads in the current step of a playback</p>
    <p>&lt;Hold ALL&gt; &lt;S&gt;</p>
</div>
<div class="section">
    ## 9.21.&nbsp;Fan Mode
    <p>
        The FAN button enables a different mode of operation of the encoders whereby instead of encoder changes being applied to each
        selected head in a linear fashion, changes are applied in a fan. Positive changes fan the heads apart whilst negative changes fan
        the heads together. Fan mode cannot be used when Single mode is are active since fanning only makes sense when more than one head is
        under control.
    </p>
    <p>Pressing and holding the FAN button enters FAN mode temporarily. Releasing the FAN button returns to the normal mode.</p>
    <p>
        When you press and hold FAN you get a toolbar on the screen that gives you direct access to fanning options. On MagicQ PC you can
        press SHIFT + FAN to bring up the FAN toolbar.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/fantoolbar.png" alt="image" />
        </span>
    </p>
    <p>There are 3 types of FAN</p>
    <p>Asymmetric (default, as in previous s/w) – fans from centre asymmetric</p>
    <p>Symmetric – fans from the centre symmetric</p>
    <p>End – fans from the end</p>
    <p>
        It is possible to use "Parts" for fanning parts so that the fan is replicated across the selected heads. For 2’s, 3’s select the 2
        Parts or 3 parts. For higher number of parts, use the N parts option and entering a number on the keypad. In FAN mode the current
        FAN type and parts is shown in the status display window (Fan-A, Fan-S, Fan-E).
    </p>
    <p>It is possible to use "Segments" for fanning segments – adjacent heads do the same fanning.</p>
    <p>
        It is possible to use "Groups" for fanning. When fanning by groups, the fan is performed on each group in turn as if the group
        contained the only selected heads. This enables a fan to be simultaneously applied to groups of different sizes.
    </p>
    <p>Fanning by segments overrides fanning by parts. Fanning by groups overrides fanning by parts or segments.</p>
    <p>The following short-cuts also work:</p>
    <p>Hold FAN + press LOCATE. Returns to default FAN type – asymmetric.</p>
    <p>Hold FAN + press NEXT HEAD. Chooses next FAN type.</p>
    <p>Hold FAN + press PREV HEAD. Chooses previous FAN type.</p>
</div>
<div class="section">
    ## 9.22.&nbsp;And Only
    <p>
        The AND ONLY (*) function enables selecting of the common heads between groups. It can be used on pairs of groups or on ranges of
        groups. When selecting a number of groups then the * operator can be used to specify that only the heads that are in both groups are
        selected.
    </p>
    <p>GROUP 1 * 2 ENTER</p>
    <p>This selects heads which are in both groups 1 and 2</p>
    <p>And Only can be used with the THRU, + and – operators.</p>
    <p>GROUP 1 THRU 4 * 5 THRU 8 ENTER</p>
    <p>This select heads which are in one of the groups 1 to 4 and also in one of the groups 5 to 8.</p>
    <p>It is possible to use And Only together with the @ operator to set levels directly.</p>
    <p>GROUP 1 * 3 @ FULL ENTER</p>
    <p>
        Note that if the option "Select heads and palettes from keypad" is set to "No" – then the * * operator must be used to select groups
        from the keypad:
    </p>
    <p>1 * 2 * *</p>
    <p>1 THRU 4 * 5 THRU 8 * *</p>
    <p>1 * 3 * * @ FULL ENTER</p>
</div>
<div class="section">
    ## 9.23.&nbsp;Group Window
    <p>
        Two additional Group windows have been added; enter 2 Group and 3 Group to open the second and third Group windows respectively. It
        is possible for one Group Window to show Groups, one to show Heads and one to show Elements.
    </p>
    <p>There are now three group types which affect how the group is recalled:</p>
    <div class="itemizedlist">
        <ul class="itemizedlist">
            <li class="listitem">Normal (as before)</li>
            <li class="listitem">Elements only - when the group is recalled it only changes the element mask</li>
            <li class="listitem">Sub Groups - when the group is recalled it activates sub groups</li>
        </ul>
    </div>
    <p>
        The group type can be set using soft button E. Groups that are set to Elements only show as "E" in the top right corner together
        with the number of elements stored in the group. Groups set to Sub Groups show a "S" in the top right corner together with the
        number of sub groups stored in the group.
    </p>
    <p>Selection order can also be changed by pressing and holding the ALL button.</p>
</div>
