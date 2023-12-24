---
id: execute
title: Chapter 21. Execute Window
sidebar_position: 21
---

# Chapter 21. Execute Window
<p>
    The Execute Window is a special window designed to allow customisation of the look and feel of the MagicQ. This layout of the window is
    configurable by the user and can contain Groups, Palettes, Macros, Cues and Cue Stacks and other special items.
</p>
<p>
    The Execute Window is also automatically accessible on the MagicQ remote iOS and Android applications and items in the Execute Window
    can be trigger from
    <a class="link" href="osc.html#cue-stack-macros" title="45.3.1. Cue stack macros">Cue Stack Macros</a>
    and from external systems using the
    <a class="link" href="rpc.html" title="Chapter 35. ChamSys Remote Protocol Commands">ChamSys Remote Protocol Commands</a>
    .
</p>
<p>
    Press the Exec button to open the Execute Window. Press 2 and Exec or 3 and Exec to open additional Execute Windows. Each Execute Window
    operates independently and can select different Execute Grid pages. Items can be copied between different Execute Windows.
</p>
<p>
    There are three views, View Design, View Execute and View Max. Use View Design to design the grid size and to place items in the grid.
    Use View Execute for playback, or View Max for full screen playback.
</p>
<div class="section">
    ## 21.1. Design View
    <p>
        Use the Set Grid Size soft button to specify a grid size and then copy the relevant items from other windows. For example, to place
        a Group in the Execute Window; go to the Group Window, press Copy, select the Group, and then go to the Execute Window and select
        the box to place the Group.
    </p>
    <p>Cues and Cue Stacks can be recorded directly into the Execute Window using Record and selecting a free item.</p>
    <p>Multiple items can be selected for copying into the Execute Window.</p>
    <p>
        You can also assign Special Functions to items in the Execute grid. These include Execute Page Up, Execute Page Down, Change to Exec
        Page, Close, Blind, Clear, Lamp On, Lamp Off, Reset, Key Lock. Press the ASSIGN SPECIAL soft button.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/executeoptions.png" alt="image" />
        </span>
    </p>
    <p>
        There are special functions for controlling universe zones – enabling, disabling and setting the hot takeover state. These enable
        complete control of complex DMX routing from a simple interface.
    </p>
    <p>
        To view the details of an item in the Execute Window use the View Item soft button. This makes it easy to change FX and Chase speed
        quickly.
    </p>
</div>
<div class="section">
    ## 21.2. Full Screen View
    <p>
        The Execute Window can be run in full-screen mode (View Max), allowing the whole of the screen to be customised. The size of the
        full screen Execute Window can be set via GRID OPTIONS soft button and selecting Win Size – this defaults to 1024 by 768 for MagicQ
        PC/Mac and 800 by 600 for the console.
    </p>
    <p>
        Selecting the "Run in Execute Window" option in the Setup Window ensures that the MagicQ will start up directly in the Execute
        Window. Note that on MagicQ PC/Mac, the buttons on the full screen Execute Window will only work when a MagicQ PC Wing is connected.
    </p>
    <p>
        Use the close icon in the title bar to close the Execute Window. Use Assign Special to add a specific Close button into the Execute
        Grid. On MagicQ consoles you can press the CLOSE button to return to normal MagicQ windows.
    </p>
    <p>
        It is possible to have the legends for the 10 main playbacks displayed even when in full screen view - use soft button C, Playbacks
        = On. The Playback legends take up the bottom part of the window, thus reducing the total size available for items.
    </p>
    <p>Note that View Max is only supported on the first Execute Window.</p>
</div>
<div class="section">
    ## 21.3. Password Protection
    <p>
        It is possible to protect the Execute Window so that operators only see the Execute Window and can not use the main MagicQ
        application windows. From the Execute Window set up a password using the Set Password soft button. If an operator tries to close the
        window then they have the choice of shutting down or entering the password to re-enter the main MagicQ application windows.
    </p>
    <p>
        Password protection in the Execute Window is only supported when the
        <span class="emphasis"><em>run in execute</em></span>
        option is enabled in Setup, view settings, playback and MagicQ has started in full screen execute. Pressing
        <span class="emphasis"><em>view max</em></span>
        in the execute window will not prompt for the password.
    </p>
    <p>For security reasons there is not a master password. To reset the password that is locked, please contact your local dealer.</p>
    <p>
        Protection can be added so that users cannot operate any Execute buttons until they enter a password. A "Key Lock" Special Function
        button can be placed in the Execute Window. When pressed the Execute Window is locked and can only be unlocked by entering the
        password. If no password has been set, then entering a blank password will unlock the window.
    </p>
</div>
<div class="section">
    ## 21.4. Automated Start
    <p>
        MagicQ includes several options for automated start of Playbacks and Executes. These options are available on MagicQ consoles and on
        MagicQ PC systems when connected to a MagicQ USB Wing or Interface. See Setup, View Settings, Playback, Activate Playbacks On Start.
    </p>
</div>
<div class="section">
    ## 21.5. Sizing of items
    <p>
        Items in the Execute window so that different items can have different sizes. This is particularly useful for laying out buttons
        around faders.
    </p>
    <p>
        In View Design mode, use encoders and soft buttons X and Y to set the item width and height from 1 to 16 boxes wide . The default is
        1 box wide and 1 box high.
    </p>
    <p>Items that overlay other items will block the other items so overlapping items should be avoided.</p>
    <p>The overall grid size can be set to up to 40 by 40 items - which enables detailed grid layouts to be constructed.</p>
</div>
<div class="section">
    ## 21.6. Faders
    <p>
        The Execute Window supports faders as well as buttons. Cue Stacks and Cues can be represented as faders. To set a Cue Stack or Cue
        as a fader, move the cursor to the item and press SOFT button E to toggle the Type between button and fader. A ‘F’ appears in the
        corner of the item when it is set to be a fader. Faders are only shown in Execute View and Max View, not in Design View.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/executefaders.png" alt="image" />
        </span>
    </p>
    <p>
        From version 1.8.8.0 MagicQ supports full sizing of all Execute items using the Item Width and Item Height soft buttons and
        encoders. In previous versions, and in 1.8.8.0 if faders are set to width and height of 1 then the size faders then if there is an
        unused box below the fader item then MagicQ automatically adjusts in the Execute View to fill the two boxes.
    </p>
    <p>Use SHIFT or CTRL and the cursor keys to cursor select multiple items to set the type for multiple items in one go.</p>
</div>
<div class="section">
    ## 21.7. Buttons
    <p>
        By default buttons in the Execute Window are set to toggle their function on and off each time the button is pressed. It is possible
        to set a button in the Execute Window that is controlling a Cue or a Cue Stack to momentary rather than toggling. Move the cursor to
        the required item and use Soft button E to set the item type "Button Fl".
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/executebuttons.png" alt="image" />
        </span>
    </p>
    <p>
        Buttons can also be set as solo buttons (also known as radio buttons) so that a group of buttons programmed as Cues or Cue Stacks
        can be set so that only one of the group is active at a time. Use soft button E to select "Solo".
    </p>
    <p>
        The group consists of all adjacent buttons in a horizontal row that have their "Item Type" set to "Solo". "Solo" buttons must be
        immediately adjacent. Empty items or items that are not set to "Solo" will end the group.
    </p>
    <p>Use SHIFT or CTRL and the cursor keys to cursor select multiple items to set the type for multiple items in one go.</p>
</div>
<div class="section">
    ## 21.8. Regions
    <p>
        Added Regions to the Execute Window to enable easier control of multiple items for attribute selection and soloing. Items in the
        Execute Window can be made part of the Region by selecting them with the cursor keys and pressing the SET REGION soft button.
    </p>
    <p>
        If the Region includes a Group item then Palettes within that Region will only affect the heads within that Group. The Group does
        not need to be selected first - those palettes will affect the heads regardless of head selection. This enables colours and other
        attributes to be selected on different head types without changing the current selection. All Palettes are applied in the programmer
        as normal.
    </p>
    <p>A Region should only have one Group in it.</p>
    <p>
        If a Region includes Cue Stacks that are set as Solo, then all those Cue Stacks will solo together - i.e. only one will be active at
        a time. This enables the solo areas to be set out as a block whereas previous solo selections had to be in a horizontal line.
    </p>
    <p>
        Use SHIFT and CLEAR REGION to clear a region. In Design View the region ID is shown in the top right corner of the item in Design
        View. Note that Win Size, Background, and Password have now been moved from the top menu to under the SET OPTIONS soft button.
    </p>
    <p>
        If the CLEAR, LOCATE, LAMP ON, LAMP OFF, LAMP ON ALL, LAMP OFF ALL buttons are included in a Region then they only affect the heads
        from the Group controlling that region.
    </p>
    <p>If RELEASE is included in a region it only affects the Cues and Cues Stacks in that region.</p>
</div>
<div class="section">
    ## 21.9. Timing
    <p>
        It is possible to add Timing items to the Execute Window via the Assign Special, Timing button. The timings affect how Palettes are
        played back in the Execute Window. The options include setting a time in seconds for Palette fades, setting a split fade, and
        directions - normal, reverse, in to out, out to in and random.
    </p>
    <p>
        The timing options include standard fades of 0, 1, 2, and 3 seconds and also allow custom times. A fade of 0 seconds ensures that
        Palettes snap in regardless of other MagicQ console settings such as Busking Rate masters.
    </p>
    <p>
        If the Timing items are within a Region then those times only affect the heads from the Group controlling that region. Using
        multiple regions this enables different times to be used on different heads simultaneously.
    </p>
    <p>Timing items also affect releasing of Cues and Cue Stacks within a region using the RELEASE special item.</p>
    <p>
        A Region can be set up with palettes and timing items but without a Group. In this case the timing will be used with those Palettes
        when applied to the currently selected heads. This is useful for example to have timings on Colour and Position Palettes, but not on
        Beam Palettes.
    </p>
</div>
<div class="section">
    ## 21.10. Rate and parameters
    <p>
        It is possible to add Rate items to the Excecute Window via the Assign Special, Rate Params button. The rate items affect how Cues,
        Cue Stacks and Programmer FX in the Execute Window are controlled. The Rate items include a Rate Tap to set the speed, controls to
        select Fade or Snap and controls to set the Parts to 2, 3 or 4.
    </p>
    <p>If the Rate items are within a Region then they only affect the Cues, Cue Stacks and Programmer FX that are within the Region.</p>
    <p>
        If the Rate items are not within a Region then they affect all Cues and Cue Stacks and Programmer FX in the Execute Window that do
        not have a Region set.
    </p>
    <p>
        Rate items affect both FX and Chases. When a Cue Stack is set as Chase Timing then the Rate will affect the Cue Stack rate not the
        FX rate within the chase steps. Chases are not affected by Width controls.
    </p>
    <p>
        The rate items affect the Cues and Chases regardless of whether they are active - so it is possible to set the speed, snap and width
        of a FX before activating a Cue or Cue Stack. Changes are stored with the Cue or Cue Stack so that when they are reactivated they
        will use the same parameters.
    </p>
    <p>
        When the "Use SPx" Rate Param is active the inbuilt FX in the Execute Window will use the respective Speed Master for timing if it
        is active. If the Speed Master is not active, then timing will remain as per the above Rate Params in the Execute Grid.
    </p>
</div>
<div class="section">
    ## 21.11. Execute Window FX
    <p>
        It is possible to add simple FX items directly to the Execute Window via the Assign Special, FX button. The FX items generate FX for
        Intensity chase, Zoom chase, Colour flick, 2 Colour chase, 3 Colour chase and White Flick. In addition it is possible to add Colour
        1, Colour 2 and Colour 3 buttons to select the Colours Palettes used within the FX.
    </p>
    <p>
        If the FX items are within a Region then they use only the channels from the Group of that Region. If the FX items are not within a
        Region then they will use currently selected heads.
    </p>
    <p>
        All the Colour FX items are affected by a change in Colour Palette. Note that Colour Flick only uses Colour 1, 2 Colour only uses
        Colour 1 and Colour 2. Intensity Chase, White Flick and Zoom Chase do not use any Colour Palettes. Colour Palettes can be selected
        before the FX items are active.
    </p>
    <p>
        When the item is activated the FX is added to the Programmer. When it is deactivated the FX is removed from the Programmer. As the
        FX are in the Programmer they run at normal programmer priority overiding any FX from Playbacks. The BLIND button affects these FX
        just like any other values/FX in the programmer.
    </p>
</div>
<div class="section">
    ## 21.12. Execute Window Soft Palettes
    <p>
        The Execute Window supports Soft Palettes. These are Palettes that can easily be updated from other Palettes so that Cues and Chases
        can be immediately changed to have new values. This is useful for instance when running Cue Stacks with colour chases and wanting to
        update the colours.
    </p>
    <p>
        Set "Item Type" to "Link" (Encoder E) in the Execute Window to set the Palette to be a Soft Palette. Soft Palettes are marked with a
        "S" in the top right corner.
    </p>
    <p>
        To change the contents of the Palette press the item and then select another Palette (not a Soft Palette) from the Execute Window.
        The Soft Palette will be updated with the values from the other Palette for all the currently selected heads.
    </p>
    <p>
        If the Soft Palette is set as part of a Region which has a Group and Palettes in it then it is not needed to press the Soft Palette
        - the individual Palettes can be selected directly to alter the Soft Palette. Note that in this case the Palettes in that Region
        only perform this function - they can not be used in the normal way.
    </p>
</div>
<div class="section">
    ## 21.13. Execute Window sequencing
    <p>
        It is possible to set items within the Execute Window to automatically sequence through the items according to defined time.
        Sequencing is possible for Positions, Colours, Beams, FX, Cue Stacks, Cues, Macros, and Groups. The sequence can be in sequential
        order or random. One item of each type will be activated at a time with all other items of that type released.
    </p>
    <p>
        In the Execute Window select ASSIGN SPECIAL and select Sequence. Then choose between Sequence and Random, followed by Sequence. Then
        enter a sequence time - this is the time between execute items automatically being activated/deactivated.
    </p>
    <p>
        If the Sequence item is within a Region then it will only affect items within that region. If it is not in a region then it will
        affect all items within the Execute grid. All item types are affected and are sequenced independently - for example if you have both
        Colour items and Cue Stacks items in the grid then MagicQ will sequence the colours at the same time as the Cue Stacks. Using the
        random sequence would cause a different colour and different Cue Stack to be activated after each sequence time has expired.
    </p>
    <p>MagicQ will apply any fade times from timing items within the Region/Grid that the sequence item is in.</p>
    <p>
        To make the Sequence Random, add a Random button - ASSIGN SPECIAL, Sequence, Random. When the RANDOM button is active the sequnce
        will run random instead of following one after another.
    </p>
    <p>
        Only one sequence item can be active at any one time within a Region. Only one sequence items outside a Region can be active at a
        time.
    </p>
</div>
<div class="section">
    ## 21.14. Execute Window Group
    <p>
        Each Execute Grid can have a Group assigned to it. This operates in a similar way to regions, except that the Group applies to the
        whole window without the need to set regions.
    </p>
    <p>Choose Grid Options, and select SET GROUP. To clear the Group select SET GROUP and choose NO GROUP.</p>
    <p>
        The Group Mode Filter determines whether MagicQ filters or expands to the group. Set the Group Mode Filter in Grid Options. For
        filtering the data in the Exec Grid must have the required channels in it. For expanding, the data in the Exec Grid can have any
        channels (but must have required attributes).
    </p>
    <p>By default no Group is assigned. When a Group is assigned then by default it expands to the Group.</p>
</div>
<div class="section">
    ## 21.15. Button appearance
    <p>
        The appearance of the boxes can be set using Soft button B "Appearance". The options are "Boxes" or "Coloured" for the appearance of
        the buttons, faders and encoders. "Coloured" colours the buttons according to function. When that function is active the button
        appears brighter.
    </p>
    <p>
        The Execute Window supports custom images for the buttons, faders and encoders. When set, these are displayed in "Coloured" mode
        instead of the coloured control. The images should be stored in the bitmaps folder and named according to:
    </p>
    <div class="informaltable">
        <table class="informaltable" cellpadding="4px">
            <colgroup>
                <col class="col_1" />
                <col class="col_2" />
            </colgroup>
            <tbody>
                <tr>
                    <td align="left" valign="top"><p>Button up image</p></td>
                    <td align="left" valign="top"><p>xxxxup.bmp</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Button down image</p></td>
                    <td align="left" valign="top"><p>xxxxdn.bmp</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Fader track image</p></td>
                    <td align="left" valign="top"><p>xxxxtrck.bmp</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Fader knob image</p></td>
                    <td align="left" valign="top"><p>xxxxknob.bmp</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Encoder back image</p></td>
                    <td align="left" valign="top"><p>xxxxbase.bmp</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Encoder dial image</p></td>
                    <td align="left" valign="top"><p>xxxxdial.bmp</p></td>
                </tr>
            </tbody>
        </table>
    </div>
    <p>
        Where xxxx is any name. The images can be .bmp, .jpg or .png. The bitmaps can be selected for each item in the Execute Window, View
        Design by pressing the BUTTON BITMAP soft button and selecting the required image file.
    </p>
    <p>
        When selecting the file, choose the "up", "trck" or "base" file. MagicQ will automatically substitute the "dn" file when the button
        is active.
    </p>
    <p>Use SHIFT + CLEAR BITMAP to remove the bitmap.</p>
    <p>The bitmap will be applied to all new buttons created on that Grid until the SHIFT + CLEAR BITMAP is pressed on an item.</p>
    <p>Use SHIFT or CTRL and the cursor keys to cursor select multiple items to set the image for multiple items in one go.</p>
    <p>Button images used withing MagicQ shows are stored in the .xhw show file.</p>
</div>
<div class="section">
    ## 21.16. Speed Encoders
    <p>
        The Execute Window supports encoders for speed control of Cue Stacks. Use Insert Special, and select Encoder to insert an encoder
        below a recorded Cue Stack. The Encoder will only be active when the Cue Stack directly above is active.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/executeencoder.png" alt="image" />
        </span>
    </p>
</div>
<div class="section">
    ## 21.17. Attribute Encoders
    <p>
        The attribute encoder acts like the encoders in the Intensity, Position, Colour, Beam windows, affecting the currently selected
        heads.
    </p>
</div>
<div class="section">
    ## 21.18. Preload
    <p>
        The Preload function allows execute window items to be selected before the change is applied. Press the PRELOAD soft button to start
        selecting/deselecting items. MagicQ will show the items selected/deselected but will not apply them until the PRELOAD GO soft button
        is pressed. The Busking Rate Master can be used in conjunction with this feature to allow all the items to fade at the same time.
    </p>
</div>
<div class="section">
    ## 21.19. Background
    <p>It is possible to set a background using the GRID OPTIONS soft button and selecting Set Background</p>
    <p>The background should be a bmp or jpeg of the size set by the WIN SIZE button.</p>
    <p>Use GRID OPTIONS soft button and and Clear Background to remove the background.</p>
    <p>Background images used withing MagicQ shows are stored in the .xhw show file.</p>
    <div class="section">
        ### 21.19.1. Assigning Execute Pages to Users
        <p>Execute Pages can be assigned to a specific user - enabling some pages to be hidden from some users.</p>
        <p>
            Press the GRID OPTIONS soft button and select Set User. The User for the page is shown in the title bar of the Execute Window.
        </p>
        <p>
            Once an Execute Page is assigned to a user then only that user can access the Execute Page - other users will just see a blank
            page. MagicQ hides the Execute Page change select items for Execute pages that the user does not have access to.
        </p>
        <p>Super Users can always access all Execute pages.</p>
        <p>To remove the assignment press GRID OPTIONS, select Set User and select Default.</p>
    </div>
</div>
<div class="section">
    ## 21.20. Special Options
    <p>There are a number of special options that can be assigned as buttons using the ASSIGN SPECIAL soft button. These include:</p>
    <div class="informaltable">
        <table class="informaltable" cellpadding="4px">
            <colgroup>
                <col class="col_1" />
                <col class="col_2" />
            </colgroup>
            <tbody>
                <tr>
                    <td align="left" valign="top"><p>Exec Page, Exec Page Up, Exec Page Dn</p></td>
                    <td align="left" valign="top"><p>Buttons to change Execute Grid</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Blind, Close, Clear, Locate, Release</p></td>
                    <td align="left" valign="top"><p>Useful buttons in Execute Grids</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Timing</p></td>
                    <td align="left" valign="top"><p>Set timing including split direction for Palettes</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Rate Params</p></td>
                    <td align="left" valign="top"><p>Set rate of Chase / FX</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>FX</p></td>
                    <td align="left" valign="top"><p>Add FX to selected heads</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>All Busking</p></td>
                    <td align="left" valign="top"><p>Adds all Timing, FX and Rate items</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Simple Busking</p></td>
                    <td align="left" valign="top"><p>Adds basic Timing, FX and Rate items</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>TC + Clock + PB</p></td>
                    <td align="left" valign="top"><p>Timecode, clock items and Playback items</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Enable Uni Zone, Disable Uni Zone, Set Hot Uni Zone, Clear Hot Uni Zone</p></td>
                    <td align="left" valign="top"><p>Management of multiple universe zones</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Global Tap</p></td>
                    <td align="left" valign="top"><p>Global Tap to Time button</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Fader FN</p></td>
                    <td align="left" valign="top"><p>Record current fader mode</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Powerdown</p></td>
                    <td align="left" valign="top"><p>Immediate shut down of the PC</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Lamp On, Lamp Off, Reset</p></td>
                    <td align="left" valign="top"><p>Affects selected heads</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Lamp On All, Lamp Of All</p></td>
                    <td align="left" valign="top"><p>Lamp On/Off whole lighting rig</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Preload</p></td>
                    <td align="left" valign="top"><p>Enter/leave preload mode</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Setup Option</p></td>
                    <td align="left" valign="top"><p>Change a Setup option</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Multi Console Control</p></td>
                    <td align="left" valign="top"><p>Shortcuts for multi console control</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Encoder</p></td>
                    <td align="left" valign="top"><p>Add a rate or attribute encoder</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Keylock</p></td>
                    <td align="left" valign="top"><p>Lock the Execute Window so users cannot change / shut down</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>User</p></td>
                    <td align="left" valign="top"><p>Change the user</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Speed Master</p></td>
                    <td align="left" valign="top"><p>Controls the Speed including enabling/disabling, rate and divisor</p></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="section">
        ### 21.20.1. Changing Execute Page
        <p>
            It is possible to build up multiple execute grids and to change between them using the Exec Page, Exec Page Up and Exec Page
            Down special options.
        </p>
        <p>
            For example you could use Grid 1 as an "Home" grid with only buttons to change to other pages. Then each of the other pages
            could have a Exec Page button to change back to the "Home" grid.
        </p>
        <p>Exec Page items for specific Execute Pages are hidden for users that do not have access those Execute Pages.</p>
    </div>
    <div class="section">
        ### 21.20.2. Automating Setup options
        <p>
            Setup options can be changed from the Execute Window without having to write keyboard macros. In the Execute Window – press
            ASSIGN SPECIAL and select Setup Option in order to assign the changing of a Setup Option to a single button.
        </p>
        <p>
            MagicQ will prompt for what the value for each option (e.g. Yes/No, Enabled/Disabled or other value) and this will be stored in
            the shortcut. It is therefore possible to make two different shortcuts - one to enable an option and one to disable it.
        </p>
    </div>
    <div class="section">
        ### 21.20.3. Multi Console Control shortcuts
        <p>
            In Net Session (Multi Console) mode these shortcuts enable quick selection of which console controls the output to which
            heads/channels on the lighting rig. These options are normally found in Setup, View DMX I/O, MULTIPROG SEL CHANS.
        </p>
        <p>All of the normal options are available.</p>
        <p>
            For the Group option, the Group selected when creating the Execute item is stored and is used for the shortcut. Therefore
            multiple shortcuts can be created for different Groups.
        </p>
        <p>For Uni Zones, One Universe, Universes the uni zone or universe is that chosen when the shortcut is recorded.</p>
        <p>
            For the One Head, Selected, Programmer, Last Active and Active options reflect the ongoing head/channel selection / activation
            state, not the selection or state when the shortcut was created.
        </p>
        <p>The None, All, User options do not depend on selection state.</p>
    </div>
    <div class="section">
        ### 21.20.4. Timecode and Timings
        <p>
            It is possible to add the TC simulator and supporting buttons to the Execute Window. This enables, for example, a large display
            of the current timecode value.
        </p>
        <p>There is also a 12 hour and 24 hour clock - so the Execute Window can be used to show the current time.</p>
        <p>
            There are also items to show the next Scheduled Event and the time remaining to the next Scheduled Event from the Scheduled
            Events in the Autom Window. This could be used to list the running order of bands playing at a Festival.
        </p>
        <p>
            The TC display and the Clock displays auto expand to take up to three times the normal item size if the surrounding items in the
            grid are empty.
        </p>
        <p>Select ASSIGN SPECIAL and then select Timecode + Clock + PB.</p>
    </div>
    <div class="section">
        ### 21.20.5. User
        <p>
            This allows the User to be changed from the Execute Window. If passwords are configured for the users then MagicQ prompts for
            the password before changing user.
        </p>
    </div>
    <div class="section">
        ### 21.20.6. Execute Window Playback / Cue Stack information
        <p>
            MagicQ supports special items in the Execute Window that indicate the current Cue name, Cue ID, Cue comment or Cue time
            remaining of a Playback or Cue Stack. This could be used, for example, to display special comments from a Cue Stack in the
            Execute Window.
        </p>
        <p>
            In the Execute Window press ASSIGN SPECIAL and then select Timecode + Clock + PB. Then choose the required Playback/Cue Stack
            feature. MagicQ will prompt for the Playback number or Cue Stack ID.
        </p>
        <p>
            The Playback Rem time is the remaining fade time whilst a Cue is fading. For a timecode Cue once the current Cue has completed
            the fade, then the remaining timecode to the next Cue is shown.
        </p>
        <p>
            The Playback Rem TC is the timecode remaining to the next step. If the next step is not a timecode step then the field will show
            as blank.
        </p>
        <p>The current Page and next Page can also be shown.</p>
    </div>
    <div class="section">
        ### 21.20.7. Speed Masters
        <p>
            Speed Masters can be assigned to Exec Grids in the Exec Window using the ASSIGN SPECIAL soft button. This enables the specific
            Speed Master to be controlled and updated.
        </p>
        <p>Select the Speed Master option and then choose from the function to assign:</p>
        <div class="informaltable">
            <table class="informaltable" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                </colgroup>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>Tap</p></td>
                        <td align="left" valign="top">
                            <p>
                                Tap to Time button. Also shows the current BPM. Enter a number before pressing TAP to set to a specific BPM.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Enable</p></td>
                        <td align="left" valign="top"><p>Enables/Disables the Speed Master</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Halt</p></td>
                        <td align="left" valign="top"><p>Halts the Speed Master/Restarts the Speed Master</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Resync</p></td>
                        <td align="left" valign="top"><p>Restarts any FX controlled by the Speed Master</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Inc</p></td>
                        <td align="left" valign="top"><p>Increases the rate divisor</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Dec</p></td>
                        <td align="left" valign="top"><p>Decreases the rate divisor</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Div</p></td>
                        <td align="left" valign="top"><p>Sets rate divisor back to 1. Also shows the current rate divisor.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Step</p></td>
                        <td align="left" valign="top"><p>Steps on to the next step in the FX</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>DJ BPM</p></td>
                        <td align="left" valign="top"><p>Uses the BPM from DJ system</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Audio BPM</p></td>
                        <td align="left" valign="top"><p>Uses the BPM from Audio input</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>DJ Beat</p></td>
                        <td align="left" valign="top"><p>Steps on to the next step on beat from DJ system</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Audio Beat</p></td>
                        <td align="left" valign="top"><p>Steps on to the next step on beat from Audio input</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Resync Beat</p></td>
                        <td align="left" valign="top"><p>Resyncs FX contolled by the Speed Master to the beat</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>All</p></td>
                        <td align="left" valign="top"><p>Adds all the above functions</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>Then choose the Speed Master to use (SP1 to SP100).</p>
        <p>
            Normally only one set of Execute buttons per Speed Master is required, but it is permitted to have more than set of buttons per
            Speed Master - for example on different Exec Grids - they will just duplicate each other.
        </p>
        <p>
            The Speed Master controls the chase rate and FX speed of all active Cue Stacks that have selected this Speed Master in the Cue
            Stack Options. Cue Stacks are affected regardless of whether they are executed from a Playback, from an Execute Window or from
            the Stack Store.
        </p>
        <p>
            Note the Speed Master does not directly affect the inbuilt FX in the Execute Window, for control of these FX in Regions, assign
            a Use Speed Master item as specified below.
        </p>
        <p>
            There is more info on Speed Masters in the
            <a class="link" href="busking.html#busking-speed-masters" title="19.12.5. Speed Masters">Busking section</a>
            .
        </p>
    </div>
    <div class="section">
        ### 21.20.8. Execute Grid Use Speed Master
        <p>
            The inbuilt FX in the Execute Window are applied into the Programmer. Since the default for the Programmer Speed Master is
            "Ignore", the speed for these FX will normally be directly controlled by the Rate Params items in the Exec Window - ie. the TAP
            button, and the PARTS, SNAP, FADE.
        </p>
        <p>
            When using the TAP for the inbuilt FX in the Execute Window it shows the BPM, and applies Per Head timing rather than per Step
            timing.
        </p>
        <p>
            It is possible to over ride this speed using a Speed Master. In the Exec Window press ASSIGN SPECIAL and select "Rate Params".
            Then select "Use Speed Master" and choose the Speed Master to use. This will then show in the Execute Window as "Use SPx" where
            x is the Speed Master SP1 to SP100.
        </p>
        <p>
            When the "Use SPx" is active the inbuilt FX in the Execute Window will use the respective Speed Master for timing if it is
            active. If the Speed Master is not active, then timing will remain as per the above Rate Params in the Execute Grid.
        </p>
        <p>It is possible (and often very useful) to have more than one Regions using the same Speed Master for Speed control.</p>
        <p>
            It is also possible to have more than one "Use SPx" in a Region so that different rates can be quickly selected - the first
            active one will be used.
        </p>
        <p>
            If the Programmer option, Programmer Speed Master is set to a Speed Master instead of "Ignore", then when active the respective
            Speed Master will control the above inbuilt FX. The "Use SPx" will take priority over the Programmer Speed Master.
        </p>
    </div>
</div>
<div class="section">
    ## 21.21. Execute Window on iOS/Android remote
    <p>Execute windows are automatically available on the iOS/Android remote apps.</p>
    <p>
        Each iOS/Android device can access different Execute Pages on the MagicQ system. We recommend using the Execute Page Up, Execute
        Page Down, Change to Exec Page special functions to enable page selection on remote devices.
    </p>
    <p>The iOS/Android device downloads any custom images used in the Execute Window from the MagicQ system.</p>
</div>
<div class="section">
    ## 21.22. Execute Buttons on Go/Pause buttons
    <p>The GO and Pause buttons for Playbacks 1 to 10 can be set to be Execute buttons from Execute Grid 1.</p>
    <p>When this function is in use then Execute Grid should be set to size 10/2 giving a total of 20 items.</p>
    <p>
        In Setup, View Settings, Playbacks if the option "Playback Go/Pause use Execute Grid 1" is set to "yes", then this makes all 20
        Execute buttons follow the items in Execute Grid 1.
    </p>
    <p>Setting this option will automatically set Execute Grid 1 to 10/2 if it was not previously used.</p>
    <p>
        It is also possible to set individual items in Cue Stacks, Options, Buttons by setting the options Go uses Exec Grid 1 or Pause uses
        Exec Grid 1.
    </p>
    <p>
        Note that if a button is set to an Execute and there is no corresponding item in Exec Grid 1 then the button operates as the normal
        Go/Pause for the Cue Stack.
    </p>
    <p>When a button is set to Execute then the function of the button is shown in the display together with its activation state.</p>
    <p>
        Exec Grid items can be set to Cue Stacks, Cues, Groups, Positions, Colours, Beams, Macros and other functions - all off these
        functions are available through the 20 Execute buttons. By default items in the Execute Grid toggle on/off - the LED on the Go/Pause
        button shows the state. Alternatively the Button function can be changed in the Exec Grid to be "Button Flash" or even "Button
        Solo".
    </p>
    <p>
        Note that this function is only supported on the main 10 MagicQ playbacks; this function is not supported on Extra wings, Playback
        wings, Execute wings, Stadium Wings or MQ500M Wings.
    </p>
</div>
<div class="section">
    ## 21.23. Multiple Execute windows
    <p>
        It is possible to have up to three execute windows open at any one time on MagicQ systems. To open a second or third Execute window,
        type either 2 or 3 before pressing the EXEC window button.
    </p>
</div>
