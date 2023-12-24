---
id: vis
title: Chapter 46. MagicQ Visualiser
sidebar_position: 46
---

# Chapter 46. MagicQ Visualiser
<div class="section">
    ## 46.1. MagicVis
    <p>MagicQ includes a visualiser called MagicVis available for Windows, Mac and Linux.</p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/MagicVis.png" alt="image" />
        </span>
    </p>
    <p>MagicVis is available in two versions:</p>
    <div class="itemizedlist">
        <ul class="itemizedlist">
            <li class="listitem">
                A standalone application called MagicVis that can connect to a MagicQ console or receive Art-Net or sACN data from other
                brands of console over a network.
            </li>
            <li class="listitem">Part of the MagicQ PC application. This allows the editing and visualisation of a show on one PC.</li>
        </ul>
    </div>
    <p>
        The MagicVis application enables Lighting Designers to add visualisation to their MagicQ console simply by connecting a network
        cable and starting the MagicVis application. The graphics and processor intensive visualisation is performed on the attached
        computer, thus ensuring that the MagicQ console continues to run at full performance.
    </p>
    <p>
        In order to render the beams MagicVis uses the graphics card in your PC / Mac - the better the performance of your graphics card
        then the better performance of the visualiser. PCs and Macs with shared graphics memory will perform slowly and will only be able to
        render small lighting rigs. A Nvidia or ATI/Radeon graphics card costing £100/£120€/160&#36; will make all the difference to your
        system.
    </p>
    <div class="section">
        ### 46.1.1. Using the Separate MagicVis Application
        <p>
            The separate MagicVis application can connect to a console or a separate PC running MagicQ software. The show will be
            automatically loaded from the console over the network.
        </p>
        <p>
            Configure the IP addresses of the both the console and the laptop to be within the same IP address range, e.g. set the console
            to IP address 2.0.0.1 netmask 255.0.0.0 and the laptop to 2.0.0.2 netmask 255.0.0.0. On the console
        </p>
        <p>
            <span class="white black-background">setup</span>
            → VIEW SETTINGS → Multi Console
        </p>
        <p>
            and ensure that
            <span class="strong"><strong>Enable Remote Control</strong></span>
            and
            <span class="strong"><strong>Enable Remote Access</strong></span>
            are set to
            <span class="strong"><strong>yes</strong></span>
            .
        </p>
        <p>
            Connect the console and the PC/Mac with a network cable, then start MagicVis. It should find the console automatically and
            connect. If the name of the console appears in red then make sure that
            <span class="strong"><strong>Enable Remote Control</strong></span>
            and
            <span class="strong"><strong>Enable Remote Access</strong></span>
            are set to
            <span class="strong"><strong>yes</strong></span>
            on the console. If the IP address is red then it is on the wrong subnet.
        </p>
        <p>
            If MagicVis fails to connect to the console click on
            <span class="emphasis"><em>File</em></span>
            →
            <span class="emphasis"><em>Settings…</em></span>
            to bring up the
            <span class="emphasis"><em>Settings</em></span>
            dialog. Click on the
            <span class="emphasis"><em>Network</em></span>
            tab then choose the network adaptor/IP address of the network port that connects to the MagicQ console. Then select the console
            from the list. If the console does not appear on the list then check the connecting cable.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/magicvisdesign.png" alt="image" />
            </span>
        </p>
        <p>
            Initially the title bar in MagicVis will show
            <span class="strong"><strong>searching for consoles</strong></span>
            , then
            <span class="strong"><strong>trying to connect</strong></span>
            once it has found a console. Once a connection has been made with the console then it will change to say
            <span class="strong"><strong>waiting sync</strong></span>
            . Once the show data has been transferred over the connection from the console to the MagicQ vis application then it will change
            to say
            <span class="strong"><strong>synced</strong></span>
            .
        </p>
        <p>
            If the system continues to say
            <span class="strong"><strong>trying to connect</strong></span>
            then check firewalls are disabled. In some systems you may need to disable other network adaptors such as the wireless adaptor.
            Windows often classifies lighting networks as
            <span class="emphasis"><em>public</em></span>
            networks and applies different firewall rules.
        </p>
        <p>
            Once MagicVis is synced then whenever you load a new show on the console or change the visualiser patch then the changes will
            automatically appear in the visualiser.
        </p>
        <p>
            When MagicVis starts it assumes that it will receive DMX data on Art-Net starting from Art-Net Universe 0-0. As soon as MagicVis
            has a connection with a console it then starts using the DMX protocols and universes in use on that console for each of the
            patched universes. If the universes are not enabled on the console then the console will send the DMX data directly to the
            MagicVis using its own MagicVis protocol. This enables MagicVis to be used on a system where the outputs are not enabled.
        </p>
        <p>
            Note that even when MagicVis is not synced it will visualise according to received Art-Net. Art-Net is sent separately to the
            connection for show data transfer.
        </p>
    </div>
    <div class="section">
        ### 46.1.2. Using MagicVis with other consoles
        <p>
            MagicVis can be used with third-party consoles other than MagicQ. The visualisation show must first be created in MagicQ and
            then loaded into MagicVis for use with the other console.
        </p>
        <p>
            Load a MagicQ show file directly into MagicVis by clicking on
            <span class="emphasis"><em>File</em></span>
            →
            <span class="emphasis"><em>Load Show</em></span>
            . In this mode there is no sync, MagicVis just looks at the incoming Art-Net data for rendering the beams but does not sync the
            patch.
        </p>
        <div class="tip">
            <table border="0" summary="Tip">
                <tbody>
                    <tr>
                        <td rowspan="2" align="center" valign="top" width="25">
                            <img alt="[Tip]" src="https://secure.chamsys.co.uk/help/documentation/magicq/images/icons/tip.png" />
                        </td>
                        <th align="left"></th>
                    </tr>
                    <tr>
                        <td align="left" valign="top">
                            <p>
                                Once a show has been loaded using
                                <span class="emphasis"><em>Load Show</em></span>
                                MagicVis will not try to sync with a console.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="section">
        ### 46.1.3. Using the Visualiser in MagicQ
        <p>
            Run the MagicQ software then go to the
            <span class="emphasis"><em>Visualiser</em></span>
            menu in the menu bar and click on
            <span class="emphasis"><em>Show Visualiser</em></span>
            . The window can be sized and moved to the required position.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/magicqandvis.png" alt="image" />
            </span>
        </p>
        <p>As the Visualiser is integrated with the MagicQ app it is not necessary to set up IP addresses or enable/configure universes.</p>
    </div>
</div>
<div class="section">
    ## 46.2. Using MagicVis
    <p>
        MagicVis provides five views – Perspective, Top, Side, Front, and Free. The view can be changed either from the
        <span class="emphasis"><em>View</em></span>
        menu in the MagicVis window or in MagicQ in the
        <span class="emphasis"><em>Patch</em></span>
        window, using Soft Button E.
    </p>
    <p>
        The Top, Side, Front and Free views are orthographic projections and are wireframe views. The outline of the items in the room and
        the beams are shown. The Perspective view is fully shaded and the items are coloured and lit. If the camera is moved while in an
        orthographic view then the view automatically becomes Free.
    </p>
    <p>
        You can rotate the camera around by pointing the mouse at the visualiser window, clicking and holding then moving the mouse around.
        Move the camera back and forth with the scroll wheel, or by pressing CTRL and right-clicking. Moving the camera back and forth has
        no effect in the orthographic views. Hold down SHIFT, click and move the mouse to translate the camera and hold SHIFT and move the
        scroll wheel to zoom in and out.
    </p>
    <p>
        The lighting level of the room can be changed by clicking on
        <span class="emphasis"><em>View</em></span>
        →
        <span class="emphasis"><em>Dark</em></span>
        .
    </p>
    <div class="tip">
        <table border="0" summary="Tip">
            <tbody>
                <tr>
                    <td rowspan="2" align="center" valign="top" width="25">
                        <img alt="[Tip]" src="https://secure.chamsys.co.uk/help/documentation/magicq/images/icons/tip.png" />
                    </td>
                    <th align="left"></th>
                </tr>
                <tr>
                    <td align="left" valign="top">
                        <p>
                            The demo show files have visualiser rooms set up. The
                            <span class="emphasis"><em>ExhibitionDemo</em></span>
                            file uses MagicVis extensively and includes MagicHD integration. Use these to see examples of how to create your
                            own MagicVis visualisations.
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="section">
        ### 46.2.1. Patching Heads in the Visualiser
        <p>When you patch the first head in your show, MagicQ will prompt you whether you wish to auto insert heads into the visualiser.</p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/autopatchinvis.png" alt="image" />
            </span>
        </p>
        <p>
            Once a head has been patched into your show MagicQ will not prompt you again. If you wish to change the setting then you can
            enable or disable auto insertion in
        </p>
        <p>
            <span class="white black-background">setup</span>
            → VIEW SETTINGS → Mode → Visualiser.
        </p>
        <p>
            When you patch heads in VIEW HEADS, MagicQ patches the head in the VIEW HEADS view but also generates a visualiser object in
            VIEW VIS.
        </p>
        <p>
            Visualiser heads are separate from MagicQ heads – for instance you can have multiple visualiser heads associated with one
            patched head. You might want to do this if you had two par cans on a single dimmer channel – you would have one Generic Dimmer
            patched in MagicQ and two visualiser heads.
        </p>
        <p>
            By default when you patch heads MagicQ creates one visualiser head per MagicQ head. You can add extra visualiser objects for a
            head using INSERT.
        </p>
    </div>
    <div class="section">
        ### 46.2.2. View Vis View
        <p>
            <span class="white black-background">Patch</span>
            → VIEW VIS
        </p>
        <p>
            The VIEW VIS view manages the data for the visualiser. There are several different tabs including Selected Heads, Vis Heads, and
            Attach Objects.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/patchvisheads.png" alt="image" />
            </span>
        </p>
        <p>
            In
            <span class="emphasis"><em>Selected Heads</em></span>
            , all the visualiser heads for the currently selected heads will be shown in the list. Heads are selected as usual using groups
            or direct from the keypad. In this view the encoders and soft buttons will apply changes to all the visualiser heads for the
            selected heads.
        </p>
        <p>
            In Vis Heads, all the visualiser heads are shown. In this view the encoders and soft buttons will apply changes to the
            visualiser head under the cursor. Use SHIFT/CTRL and the cursor keys to apply changes to multiple heads.
        </p>
        <p>
            In Attach Objects, all the other (non head) objects are shown in a list. In this view the encoders and soft buttons will apply
            changes to the object under the cursor. Use SHIFT/CTRL and the cursor keys to apply changes to multiple objects.
        </p>
    </div>
    <div class="section">
        ### 46.2.3. Positioning the Heads in the Visualisation
        <p>When you patch heads they automatically become selected so that in</p>
        <p>
            <span class="white black-background">Patch</span>
            → VIEW VIS → Selected Heads
        </p>
        <p>you will have direct control of the positioning and orientation of the head using the encoder wheels and soft buttons.</p>
        <p>Encoders X, Y and F are used for X,Y and Z positioning.</p>
        <p>
            Pressing the soft buttons X, Y and F increases the position by 1 metre on that axis. Pressing SHIFT + the soft button decreases
            the position by 1 metre on that axis.
        </p>
        <p>Use fan to spread the position apart on the X,Y, or Z position wheels.</p>
        <p>
            Encoders B, C and D are used for rotation. Pressing the soft buttons B, C and D rotates the heads by 90 degrees around that
            axis. Pressing SHIFT + the soft button rotates the heads by – 90 degrees around that axis.
        </p>
        <p>You can also enter values directly into the spreadsheet view of the VIEW VIS window.</p>
        <p>
            You can change multiple values at a time by using SHIFT/CTRL and the cursor keys. Use THRU to enter a spread of values e.g. -5
            THRU 5 to spread the X position between -5 and 5 metres.
        </p>
    </div>
    <div class="section">
        ### 46.2.4. Transform Modes
        <p>
            All items can be positioned and orientated using the encoders as described in the above section, "Positioning the Heads in the
            Visualisation". The behaviour of the encoders can be changed using the Transform Mode soft button.
        </p>
        <p>
            There are four modes available: Original, World, Item, and Parent. The labels on the soft buttons will put W, I, or P to remind
            you what mode you are currently in.
        </p>
        <p>
            Original: Changing an item’s position will move the item relative to the world axis. Changing rotation directly changes the
            Euler angle of the object. So rotating on the y-axis will turn the object in the worlds y-axis, however rotating on the z-axis
            rotates an item about its own z-axis.
        </p>
        <p>
            World: Changing an item’s position will move the item relative to the world axis. Rotating an item rotates it parallel the world
            axis.
        </p>
        <p>
            Item: Changing an item’s position will move the item along its own axis, so the direction it moves is defined by its current
            orientation. Changing an item’s rotation will also be relative to its current orientation.
        </p>
        <p>
            Parent: Items will only move if they are attached to an object. The position and rotation changes will depend on the position,
            orientation and type of the object they are attached to. Changing the X position will move an item along a truss and changing
            rotations will always be relative to the point where it is attached to a truss.
        </p>
        <p>Please refer to the following figure below for a more visual explanation.</p>
        <p>
            Also, while in parent mode, encoder button E turns into a Hang Type button, this enables you to toggle the hang type of a head
            while maintaining its position along the truss.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/transform_modes.png" alt="image" />
            </span>
        </p>
    </div>
    <div class="section">
        ### 46.2.5. Objects
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/patchselectedheads.png" alt="image" />
            </span>
        </p>
        <p>
            In View Attach you can insert many different types of objects, including trusses, pipes, people, simple shapes and commonly
            found furniture. You can also import custom model files in many different formats.
        </p>
        <p>
            To create an Object press the INSERT soft button, then select what kind of object is to be created. The object is then created
            and added to the list. To add a sphere or a cylinder create a
            <span class="emphasis"><em>Form</em></span>
            object then go to the
            <span class="emphasis"><em>model</em></span>
            column, press Set and select the desired shape.
        </p>
        <p>
            Enter values in the window for length, width and height. Adding a ' after the number enters the dimension in feet rather than
            metres – so for 10 feet enter 10'.
        </p>
        <p>Position the truss or pipe as required. Enter a name in the window for the truss or pipe.</p>
        <p>
            After you insert a truss or pipe, then subsequent heads that are patched will be attached to that truss or pipe object. If for
            example you patch 6 spots after inserting a truss object, then they will be spread out along the length of the truss.
        </p>
        <p>
            When you create reports, then as well as overall plots, a plot is created for each attach object – enabling the lighting rig to
            be broken down into separate pipes and trusses.
        </p>
        <p>
            A texture can be applied to a Form object by entering the name of the texture in the Texture field. The texture should be stored
            in the bitmaps folder, for example ChamSys.png.
        </p>
        <div class="tip">
            <table border="0" summary="Tip">
                <tbody>
                    <tr>
                        <td rowspan="2" align="center" valign="top" width="25">
                            <img alt="[Tip]" src="https://secure.chamsys.co.uk/help/documentation/magicq/images/icons/tip.png" />
                        </td>
                        <th align="left"></th>
                    </tr>
                    <tr>
                        <td align="left" valign="top">
                            <p>
                                Create a truss and set the model to
                                <span class="strong"><strong>Invisible</strong></span>
                                to group lights together and create useful plots for them.
                            </p>
                            <p>
                                For example in the
                                <span class="emphasis"><em>ExhibitionDemo</em></span>
                                show the PixelLines may be rigged on individual vertical pipes but in MagicVis they are all rigged on one
                                invisible truss which is rotated so that when the paperwork is created there is a plot with all the
                                PixelLines on it rotated so that it is obvious how they are laid out.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="section">
        ### 46.2.6. Drapes
        <p>
            To add a drape to the scene press the INSERT soft button, then select
            <span class="emphasis"><em>Drape</em></span>
            . The drape will then be added to the scene. The width, height and depth of the folds can be adjusted as usual, as can the
            position and rotation. The extra params columns at the end of the table allow fine control over how the drape is rendered. Param
            1 controls the size of the wave. This defaults to 0.3m.
        </p>
        <p>
            Param 2 controls how flat the folds are at the top of the drape. A value of 0 will show them entirely flat at the top, while a
            value of 1.0 will show the folds at the same depth as they are at the bottom, as though the drape were hung from a track system.
        </p>
        <p>
            Param 3 sets the randomness of the folds. Real drapes do not hang evenly so the folds are often different sizes. Setting the
            Param to 0 will make all the folds the same, increasing it will make them vary. The default value is 0.4.
        </p>
    </div>
    <div class="section">
        ### 46.2.7. Custom Models
        <p>
            To add a custom model, press the INSERT button, then select
            <span class="emphasis"><em>Model</em></span>
            . A model object will be added to the scene; this will be invisible at first, until a model file is chosen for it.
        </p>
        <p>
            To choose a model file, select the "texture" field; a menu will appear, allowing the selection of any previously imported model,
            along with an option to import a new model.
        </p>
        <p>
            To import a new model, select the "Import Model…" button on this dialog. The file manager will appear, prompting for a model
            file to import. Only supported formats will be shown. Once a file is selected, another dialog will appear prompting for the
            import settings: whether to use the Y or Z axis for vertical, and what length units are used in the model.
        </p>
        <p>
            To properly determine these settings, you should ask the person who created the model. As a rough rule of thumb, if the model
            was created by an artist, the Y axis may be vertical; if it was created by an engineer, the Z axis is more likely. If the wrong
            value is selected, the model will appear flipped front-to-back and rotated 90 degrees, lying on it’s front.
        </p>
        <p>
            Model objects have a slightly different scaling behaviour than other objects. Their default length, width and height is zero;
            this means that the object will use it’s "native size", using the units specified using the process above.
        </p>
        <p>
            If only one of length, width, and height is specified, and all other values are set to zero, then the model will be scaled such
            that that axis takes on the given value in metres; all other axes will be scaled proportionally, preserving the model’s shape.
        </p>
        <p>
            If all three axes are given (none are zero), then all three axes will be scaled independently, to the given values in metres.
            This will distort the shape of the model if proportional values are not given.
        </p>
        <p>Only specifying two axes (leaving one at zero) is unsupported, and will produce unspecified behaviour.</p>
        <div class="tip">
            <table border="0" summary="Tip">
                <tbody>
                    <tr>
                        <td rowspan="2" align="center" valign="top" width="25">
                            <img alt="[Tip]" src="https://secure.chamsys.co.uk/help/documentation/magicq/images/icons/tip.png" />
                        </td>
                        <th align="left"></th>
                    </tr>
                    <tr>
                        <td align="left" valign="top">
                            <p>
                                It is not reccomended to use models with a very high polygon count (also specifed as triangle or vertex
                                count); this can lead to a degredation in performance, especially on older hardware, when many lights are
                                active in the scene, or when shadows are enabled.
                            </p>
                            <p>
                                To avoid this issue, try searching for or requesting "low-poly" models for use in MagicVis. As a rough
                                guide, try to avoid using more than 1000 polygons per model.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="section">
        ### 46.2.8. Attaching Heads to Objects
        <p>
            Heads can be attached to trusses or pipes at any time. Select the heads you wish to attach using groups or the keypad. Change to
            VIEW VIS → Selected Heads tab and press the FIT TO OBJECT soft button.
        </p>
        <p>
            Alternatively in the Vis Heads tab, double click on the Attach field. MagicQ will prompt you with a list of all the attach
            objects to choose from.
        </p>
        <p>
            Heads that are attached to an object move with that object – so repositioning that object in the Attach Objects tab will move
            the object and all the attached heads.
        </p>
        <p>
            MagicVis supports Hang Types so that Heads can be fitted to Attach Objects in specific orientations. This information is also
            available in the MagicVis reports. Hang type options are Normal, Bottom rear, Bottom front, Top rear, Top front face up, Top
            front face forwards, Top boom, and Bottom Boom.
        </p>
    </div>
    <div class="section">
        ### 46.2.9. Modifying Beam Angle and Head Shape
        <p>
            In Patch, View Heads it is possible to set specific shapes and beam angles for generic heads. When set these fields override the
            defaults from the chosen personality. The shape is also shown in the Fixture Patch report.
        </p>
        <p>
            If you wish to change the beam angle for heads other than generic heads then you must change the Zoom Narrow and Wide in the
            Params tab of the Head Editor for the chosen personality.
        </p>
    </div>
    <div class="section">
        ### 46.2.10. Visualising Media Servers
        <p>
            MagicVis can preview the output from media servers, including MagicHD. First of all make sure that the Media window on the
            console is displaying a live preview of the media server output. Then, in the
            <span class="emphasis"><em>Attach Objects</em></span>
            window add a
            <span class="emphasis"><em>Form</em></span>
            . Set the
            <span class="emphasis"><em>Model</em></span>
            to
            <span class="emphasis"><em>Sheet</em></span>
            and set the
            <span class="emphasis"><em>Texture</em></span>
            to
            <span class="emphasis"><em>mp</em></span>
            and the number of the media server. The Media Server number can be found in the
            <span class="emphasis"><em>Setup</em></span>
            ,
            <span class="emphasis"><em>View System</em></span>
            ,
            <span class="emphasis"><em>View Media</em></span>
            window.
        </p>
        <p>
            For example if the media server was the first in the
            <span class="emphasis"><em>View Media</em></span>
            window then the
            <span class="emphasis"><em>Texture</em></span>
            would be
            <span class="emphasis"><em>mp1</em></span>
            . If MagicVis is unable to connect to the media server then the sheet will display "Media Server 1". If there is still no
            connection after 1 minute then the text will disappear. The preview is done via CITP so is quite low resolution.
        </p>
    </div>
    <div class="section">
        ### 46.2.11. Moving Trusses
        <p>
            To make an attach object movable via DMX patch a Generic Movement head into MagicQ. Then in Patch, View Vis set the attach
            object for the Generic Movement to be the Attach object to move. Any heads hung from the truss will move along with the truss.
        </p>
        <p>
            The Generic Movement head has X, Y, Z position and X, Y, Z rotation attributes enabling complete control of the object from
            within MagicQ. The Generic movement head is a virtual head so it can be unpatched in the MagicQ Patch.
        </p>
        <p>
            From software version 1.9.2.2 the Generic Movement has an additional channel Tracker. When this is set to a Tracker ID (1 to 20)
            then the position offset is taken from the Tracker instead of from the parameters in the Generic Movement Head - thus the
            movement can be controlled from an external system.
        </p>
        <div class="note">
            <table border="0" summary="Note">
                <tbody>
                    <tr>
                        <td rowspan="2" align="center" valign="top" width="25">
                            <img alt="[Note]" src="https://secure.chamsys.co.uk/help/documentation/magicq/images/icons/note.png" />
                        </td>
                        <th align="left"></th>
                    </tr>
                    <tr>
                        <td align="left" valign="top">
                            <p>
                                In the
                                <span class="emphasis"><em>ExhibitionDemo</em></span>
                                show file there are 2 moving pipes. Each pipe has a form attached to it on which the MagicHD image is
                                rendered. This provides a nice simulation of moving LED walls.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="section">
        ### 46.2.12. Coloured objects
        <p>In MagicVis it is possible to set a Head item to colour an attach object, for truss warmers or for coloured scenic pieces.</p>
        <p>
            In Patch, View Vis on the Selected Heads or Vis Heads tab page right to get to the Col Apply column and set it to Yes. If there
            are more than one heads attached to an object with the Col Apply set then it will use the last one in the list.
        </p>
        <p>
            For RGB Heads the RGB colour will be applied to the object. If the Head only has intensity then the colour of the object will be
            scaled according to the intensity.
        </p>
    </div>
    <div class="section">
        ### 46.2.13. DMX Controlled Camera
        <p>
            The Generic Camera head enables the Visualiser view to be modified from within MagicQ programming. When a Generic Camera is
            patched in MagicQ and the Mode Attribute is non zero then the Visualiser view comes under the control of the Camera. The Generic
            Camera head is a virtual head so it can be unpatched in the MagicQ Patch.
        </p>
        <p>
            To use the Generic Camera select it then press Locate. This will put the camera into perspective mode and place it in the
            default position. Select the Position window then use the encoders to move it around and rotate the view. To return control to
            the Visualiser window use Encoder Wheel A to set the mode to Disabled.
        </p>
        <p>
            The Generic Camera also controls the brightness of the room and of the beams. These attributes can be found in the Beam window.
        </p>
        <div class="tip">
            <table border="0" summary="Tip">
                <tbody>
                    <tr>
                        <td rowspan="2" align="center" valign="top" width="25">
                            <img alt="[Tip]" src="https://secure.chamsys.co.uk/help/documentation/magicq/images/icons/tip.png" />
                        </td>
                        <th align="left"></th>
                    </tr>
                    <tr>
                        <td align="left" valign="top">
                            <p>
                                FX can be applied to the position and rotation attributes to make the Camera fly around the visualiser and
                                give a dynamic view of your design.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="section">
        ### 46.2.14. Removing Visualiser Heads and Objects
        <p>
            To remove a visualiser head go to VIEW VIS → Vis Heads and put the cursor on the item. Press REMOVE. Use SHIFT/CTRL and the
            cursor keys to cursor select multiple visualiser heads for removal. To remove an attach object go to VIEW VIS → Attach Objects
            and follow the same procedure.
        </p>
        <p>
            When heads are removed from the visualiser they are not removed from MagicQ patch. Removing heads from the MagicQ patch will
            remove any associated visualiser heads.
        </p>
    </div>
    <div class="section">
        ### 46.2.15. Changing the Size of the Room
        <p>
            It is possible to change the size of the room by adding a Room Object. By default MagicQ uses a room 20 x 20 x 20 metres. If you
            add a room object then MagicVis will use the dimensions of the room object instead. The datum is always on the floor in the
            centre of the room.
        </p>
        <p>
            In View Attach, press INSERT. Select the object type
            <span class="strong"><strong>Room</strong></span>
            and enter the length, width, and height.
        </p>
    </div>
    <div class="section">
        ### 46.2.16. Paperwork
        <p>
            You can use MagicVis to create plots and patch sheets. In the MagicVis window click on
            <span class="emphasis"><em>File</em></span>
            →
            <span class="emphasis"><em>Paperwork</em></span>
            . This will bring up the Reports window.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/visreports.png" alt="image" />
            </span>
        </p>
        <p>
            You can select what you would like to include and either print it out or create a PDF document. You can also export patch lists
            into a spreadsheet such as Numbers, LibreOffice Calc or Excel. To do this click on one of the
            <span class="emphasis"><em>Export CSV…</em></span>
            buttons, then load the csv file into a spreadsheet. You can then add extra columns or lay out the tables however you like.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/magicvisplot.png" alt="image" />
            </span>
        </p>
        <p>
            The Patch Sheets contain all the heads in the patch, whether or not they are in the Visualiser. Therefore you can create a patch
            sheet without having to set up heads in the Visualiser.
        </p>
        <p>
            The Positions table is a list of all the trusses and pipes with trim heights, DMX universes and approximate weights. The given
            weight is the total weight of the heads and does not include the weight of the cabling, truss or rigging. It is intended to be a
            tool for estimating total weights and should not be used for rigging calculations.
        </p>
    </div>
    <div class="section">
        ### 46.2.17. Converting an Existing MagicQ Show File
        <p>
            Old MagicQ show files can be loaded into MagicQ, but they will not have any visualiser heads defined. It is easy to take heads
            from an existing show file and create a visualisation.
        </p>
        <p>Select the heads using groups or the keypad. Then go to</p>
        <p>
            <span class="white black-background">Patch</span>
            → VIEW VIS → Selected Heads
        </p>
        <p>and press the INSERT SELECTED soft button. This creates a visualiser head for each of the selected heads.</p>
        <p>If you wish, you can attach the heads to an object using the FIT TO OBJECT soft button.</p>
        <p>
            It is also possible to insert all the patched heads in your show file into the visualiser in one step. Make sure no heads are
            selected, then go to
        </p>
        <p>
            <span class="white black-background">Patch</span>
            → VIEW VIS → Vis Heads
        </p>
        <p>
            and press the INSERT PATCHED soft. This creates a visualiser head for each head in the patch. The heads will be positioned in a
            grid format.
        </p>
    </div>
    <div class="section">
        ### 46.2.18. Converting a MagicQ Grid Into a Visualisation
        <p>
            It is possible to convert a grid from the MagicQ Plan View into a visualisation. In the Output Window, View Plan press SHIFT +
            ARRANGE VIS. MagicQ will prompt you for the positioning within the visualisation.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/vischoosepos.png" alt="image" />
            </span>
        </p>
        <p>
            For each of the heads in the grid a visualiser head will be will be inserted into the visualiser. The positioning will be set
            according to the position in the grid.
        </p>
        <p>
            For example if you select Top, then MagicQ will treat the grid as if it is a top view and all the visualiser heads will be
            positioned at the top of the room at the same height.
        </p>
    </div>
    <div class="section">
        ### 46.2.19. Visualiser Settings
        <p>MagicVis includes settings for how the visualisation looks.</p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/magicvissettings.png" alt="image" />
            </span>
        </p>
        <p>On systems with lower power graphics cards which are using a lot of LED heads we recommend to turn off drawing of LED Beams.</p>
        <p>
            MagicVis incorporates a new higher quality renderer with improved beams and shadows. To enable the higher quality renderer open
            MagicVis and go to File, Settings and select "New renderer" from the OpenGL options.
        </p>
        <p>
            If for any reason the new renderer does not work, then you can revert to the old renderer by opening MagicQ and from the toolbar
            select Visualiser, Use old renderer.
        </p>
    </div>
</div>
<div class="section">
    ## 46.3. Plot Window
    <p>
        MagicQ incorporates a Plot Window displaying the position and orientation of heads within the lighting rig. The Plot Window can show
        Front, Overhead and Side elevations, restricted to either Flown or Floor heads and the view can be moved and zoomed. The view can be
        restricted to only selected heads or to all heads. Heads can be selected from the plot window either by clicking (touching)
        individual items or by multi selecting multiple items. The positional information is taken from MagicVis and can be edited in the
        Patch Window.
    </p>
    <div class="section">
        ### 46.3.1. Focus Functions
        <p>
            It is possible to set the pan and tilt of selected heads from the Plot window so that the heads are focused on a point on the
            stage. To quickly focus the lights on a point press the FOCUS ON TARGET soft button then click on a point on the plot. The
            selected heads all move around to focus on that point. Click on FOCUS HOLD if you want to move the point around after clicking.
            On a touch screen you can move your finger around the plot window and the heads follow it. Click on FOCUS HOLD again to stop
            focusing.
        </p>
        <p>
            More complicated looks can be created with the FOCUS LINE feature. After selecting some heads and clicking on FOCUS LINE a
            yellow line will appear on the plot. The heads will be focused along the line. The line will also appear in the 3D visualiser.
            The line can be moved around either by clicking on the points on the plot window or by using the encoder wheels. The line is
            initially at stage level but can be raised up using the Y encoder.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/plotsimplefocusline.png" alt="image" />
            </span>
        </p>
        <p>
            FOCUS LINE allows easy creation of even stage washes but it can also be used to create gobo washes on walls and scenery or ACL
            style beam focuses. Use the Fan menu to change how the beams are distributed along the line. To create a symmetrical ACL style
            look first focus one side of heads, then select the other side, select FOCUS LINE again and press Encoder E,
            <span class="emphasis"><em>Mirror Line</em></span>
            . This will mirror the line over the centre line of the stage so the look is symmetrical.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/plotcomplexfocusline.png" alt="image" />
            </span>
        </p>
        <p>
            The
            <span class="emphasis"><em>Base Position</em></span>
            is the starting position for the heads before they are panned around to focus on the point. If the head has to pan more than 90°
            from the base position then it will
            <span class="emphasis"><em>flip</em></span>
            the head over. The default base position is directly downstage. If the lights flip while they are moving between positions then
            a different base position may be required.
        </p>
        <p>
            To change base positions record a palette with the desired base positions then press and hold encoder button A and select the
            palette. For example if you have two trusses either side of a catwalk you may want a base position where everything is focused
            directly onto the catwalk.
        </p>
        <p>
            Another Base Position option is
            <span class="emphasis"><em>Current Position</em></span>
            . This option will allow the heads to spin right round and only flip when they reach the end of their pan. This could be useful
            for creating specific movements between positions.
        </p>
    </div>
    <div class="section">
        ### 46.3.2. Converting the Plot View into a MagicQ Grid
        <p>
            It is possible to convert a plot into a grid using the CREATE GRID soft button in the Plot Window. MagicQ takes the heads from
            the current view and current filter in the Plot View and creates a new Grid in the Output Window.
        </p>
        <p>
            MagicQ will only create a grid if it can fit all the heads shown in the current Plot View into a grid where the maximum size
            corresponds to the maximum number of channels patchable on the console. The number of columns is limited to 1024 whilst the
            number of rows in limited to the number of channels patchable.
        </p>
        <p>For example on a MQ500M with 256 universes, it is possible to do 362x362, 1024x128 and 1x131,072.</p>
        <p>
            If there are items in the plot that are overlaid over the top of each other then where possible MagicQ will adjust the exact
            positioning of the item to fit into a unique position in the grid.
        </p>
        <p>
            We recommend to filter using groups or selected heads to only include the required heads in the new Grid. If the Plot involves a
            large number of heads close to each other or overlaid over each other then the conversion will not work.
        </p>
        <p>After creating the grid, unused rows and columns can be removed by pressing SHIFT + OPTIMISE GRID in the Outputs, View Grid.</p>
    </div>
</div>
