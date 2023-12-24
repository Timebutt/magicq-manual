---
id: trackers
title: Chapter 49. Trackers
sidebar_position: 49
---

# Chapter 49. Trackers
<p>MagicQ supports many advanced 3D features related to 3D (XYZ) space using the inbuilt plotting and visualisation features.</p>
<p>
    This enables shows to be built up around XYZ positions in the performance space with positions being easily updated when moving between
    venues, or for real time tracking of objects, people, or of lighting truss /set piece movements during show playback.
</p>
<p>
    MagicQ supports a number of tracking protocols to enable automated positions of heads on 2D or 3D positions within the stage. See the
    inbuilt demo show file TrackerDemo.shw.
</p>
<p>The information from Trackers can be used by Palettes set as Track, to move MagicVis objects and also by Tracker Automations.</p>
<p>The current value of received trackers can be seen in Macro, View Autom, View Trackers.</p>
<p>
    When tracker data is active MagicVis shows the tracker points as a green cross within the 3D space. If the tracker data is lost then the
    cross will turn red, and then after 2 seconds of not receiving any tracker data for that tracker the cross will disappear altogether.
</p>
<div class="section">
    ## 49.1. MQ Track protocol
    <p>MagicQ can transmit and receive tracker data over a simple UDP protocol on UDP port 6549. The format of the data received is:</p>
    <p>&lt;x&gt;,&lt;y&gt;,&lt;z&gt;,&lt;tracker id&gt;,&lt;tracker name&gt;</p>
    <p>Where &lt;tracker id&gt; is zero based - 0 for Tracker 1, 1 for Tracker 2.</p>
    <p>For example, sending tracker 2 named "Bob" with position x of 2.5m, y of 3m and z of 3.5m the data in the UDP message would be</p>
    <p>2.5,3,3.5,1,Bob</p>
    <p>MQ Track protocol uses MagicQ XYZ space which has X and Z as horizontal on the stage / performance space and Y as vertical.</p>
</div>
<div class="section">
    ## 49.2. Object Transform Protocol
    <p>
        MagicQ supports E.159 Object Transform Protocol (OTP) for transmit and receive of tracker data and for transmitting and receiving
        MagicVis object position and rotation data.
    </p>
    <p>The OTP function is set in Setup, View Settings, Network, OTP Function.</p>
    <p>
        When set to "Tracker (rx)" MagicQ receives Tracker data over OTP and acts as an OTP consumer. MagicQ accepts any System or Group,
        where point is the Tracker ID.
    </p>
    <p>
        MagicQ automatically converts between the Object Transform Protocol XYZ co-ordinates (X,Y horizontal, Z vertical) and MagicQ XYZ
        space (X and Z horizontal, Y vertical).
    </p>
    <p>
        When set to "Tracker (tx)" MagicQ transmits Tracker data over OTP and acts as an OTP producer. MagicQ transmits OTP System 1, Group
        1 with the Point number mapping to the Tracker ID in MagicQ and the name set to the relevant tracker - for example "Tracker 1".
    </p>
    <p>
        MagicQ can be receiving Tracker data over a protocol other than OTP, such as the MQ Track protocol and can then re-transmit that
        data using the "Tracker (tx)" option above.
    </p>
    <p>
        When set to "Vis object (rx)" MagicQ accepts position and rotation data for the MagicVis objects modifying their position and
        rotation accordingly. MagicQ accepts from any System or Group where the name matches the MagicVis object name.
    </p>
    <p>
        MagicQ matches the names for the points received over OTP with the object names in MagicVis. The OTP name must exactly match the
        MagicVis object name including capitalisation. Changes in a point position or rotation will have an immediately move the object
        within the MagicVis XYZ space.
    </p>
    <p>
        When set to "Vis object (tx)" MagicQ transmits position and rotation data for all the MagicVis objects and acts as an OTP producer.
        MagicQ transmits OTP System 1, Group 2 and Points starting from 1. MagicQ transmits the name for each point as the name of the
        object within MagicVis.
    </p>
    <p>
        When set to "Tracker + vis (rx)" MagicQ accepts both Tracker and MagicVis data. Where the OTP name matches a MagicVis object name it
        processes for the MagicVis object, otherwise it assumes it is Tracker data.
    </p>
    <p>
        When set to "Tracker + vis (tx)" MagicQ transmits both Tracker and MagicVis data. Tracker data is sent as OTP Group 1 and MagicVis
        object data is sent as OTP Group 2.
    </p>
    <p>When receiving OTP and PSN it is now possible for MagicQ to decode rotation data and use it to control MagicVis attach objects.</p>
    <p>
        When the OTP Function field is set to Vis Object (rx) or Tracker + Vis (rx), then received tracker data with a name that matches the
        name of an Attach Object will cause the Attach Object to be set to the position and rotation received via OTP.
    </p>
    <p>
        Receiving and transmitting Object Transform Protocol data is supported on MagicQ consoles. On MagicQ PC and Mac systems it is only
        supported when unlocked with a MagicQ or SnakeSys interface.
    </p>
</div>
<div class="section">
    ## 49.3. PSN/SpotMe
    <p>
        When set to PSN/SpotMe, MagicQ receives tracker data from the PSN protocol / Robert Juliat tracking system. PSN is an open protocol
        for On-Stage, Live 3D Position data. www.posistage.net.
    </p>
    <p>
        MagicQ and PSN use the same XYZ space (X and Z horizontal, Y vertical). The Z position is automatically inverted - MagicQ has Z
        positive towards the audience, PSN has Z positive towards the back of the stage (up stage direction).
    </p>
    <p>
        When the Tracker rx option is set to PSN, then received tracker data with a name that matches the name of an Attach Object will
        cause the Attach Object to be set to the position and rotation received via PSN.
    </p>
    <p>
        To send PSN set the Tracker tx option to PSN. This uses the OPT Function option to determine what function is sent. If the OTP
        Function field is set to Vis Object (tx) or Tracker + Vis (tx) then MagicQ sends the positions and rotations of MagicVis Attach
        Objects over PSN. If the OPT Function field is set to any other values then MagicQ sends the Tracker position and rotation for any
        valid Trackers.
    </p>
    <p>
        PSN is supported on MagicQ consoles. On MagicQ PC and Mac systems it is only supported when unlocked with a MagicQ or SnakeSys
        interface.
    </p>
</div>
<div class="section">
    ## 49.4. Scaling, Offsets and Swaps
    <p>Scaling, offsets and swapping Y/Z can be set for individual Trackers in the Macro window, View Autom, View Trackers.</p>
    <p>
        The incoming Tracker data is received and shown in the Data column. Than any Y/Z Swap is applied, the scaling is applied (which can
        be negative) and then any offset is applied. The result is shown in the X,Y,X columns which are then used internally by MagicQ for
        Tracker functions.
    </p>
    <p>
        An IP address can be specified for each Tracker to restrict acceptance of Tracker data for that Tracker only from a single system
        with that specific IP address.
    </p>
    <p>
        The Tracking settings are per console settings rather than per show settings. In order to load them from a saved show file use LOAD
        SHOW + CONS and ensure PORTS is selected.
    </p>
</div>
<div class="section">
    ## 49.5. Tracker Palettes
    <p>Tracker Palettes are special palettes that use a Tracker rather than absolute values stored in the palette.</p>
    <p>
        By setting a Palette to be a Tracker Palette then wherever the Palette is used the channels follow the Tracker with an optional
        offset. Tracker palettes recorded with values of 128 for the pan and tilt attributes (0 degrees pan and tilt) will have no offset.
        Any other values will function as an offset to the tracker device.
    </p>
    <p>
        To set a Palette as a Tracker Palette go to View Palette and press the SET TRACKER soft button. Then select Tracker and enter a
        tracker ID.
    </p>
    <p>To unset a Palette as a Tracker Palette press SHIFT UNSET TRACKER or press SET TRACKER and select none.</p>
    <p>
        The Tracker controls the base position. It is therefore possible to add a FX on top of the tracker position - for example spots
        could be set to run a circle around the Tracker position of a moving car.
    </p>
    <p>
        When a channel changes from control by an absolute value or normal Palette to a Tracker Palette then it uses the fade times to
        crossfade between the original position and the tracker position.
    </p>
    <p>
        When a channel changes from control by a Tracker Palette to an absolute value or normal Palette then MagicQ used the fade times to
        crossfade from the tracker position to the new position.
    </p>
    <p>
        By default all heads within the palette track the XYZ position of the Tracker. It is possible to set X and Z offsets from the
        MagicVis object XYZ position for each head in the View Palette view.
    </p>
</div>
<div class="section">
    ## 49.6. Using automations with Trackers
    <p>
        MagicQ can trigger automation events based on a XYZ Tracker position related to a MagicVis object. This enables receiving XYZ
        position from an external system and using that position information to control other attributes - e.g. ramping up intensity of a
        fixed luminaire when performer moves into an area on the stage. We tie it into areas of the stage that we can define in our MagicVis
        visualisation so we can control attributes - intensity, colour, zoom etc… based on how close the performer is to a point or to a
        line.
    </p>
    <p>
        When the trigger type is set to Inside then as the XYZ tracker moves inside the MagicVis object the trigger event level goes from 0
        at the edge to 255 at the centre of the object.
    </p>
    <p>
        When the trigger type is set to Outside then when the XYZ tracker is outside the MagicVis object the trigger event level is at 255.
        When it moves inside it goes from 255 at the edge to 0 at the centre of the object.
    </p>
    <p>When the trigger type is set to Enter then as the XYZ tracker moves inside the MagicVis object the event is triggered.</p>
    <p>When the trigger type is set to Exit then as the XYZ tracker moves outside the MagicVis object the event is triggered.</p>
    <p>
        For example, to set up a moving light to change magenta as a performer moves through a position, create a Cue Stack with a single
        Cue with the magenta colour attribute only. In MagicVis create a Form - either a Cube or a Cylinder and place it on the floor of the
        performing space. Set the Cue Stack to Fader controls LTP and then create a Tracker automation type Inside and selecting the
        MagicVis object.
    </p>
</div>
<div class="section">
    ## 49.7. Tracking a fixed XYZ when lighting trusses moving
    <p>
        In situations where it is the lighting truss, and hence the position and rotation of the lights moving rather than an object moving
        it is possible to set up XYZ positions in the 3D space which are then tracked by the moving lights regardless of their actual
        position and rotation.
    </p>
    <p>
        In this case the truss or object with the lights attached in MagicVis must be set to track the external Tracker either via OTP or
        via a Generic Movement personality. From software version 1.9.2.2 the Generic Movement personality can be set to get its data from
        an External Tracker by setting the Tracker attribute to a valid Tracker ID (1 to 20).
    </p>
    <p>
        To use a fixed XYZ position, select the Heads and then use Focus Hold in the Plot View to position them. Record this position as a
        Position Palette, and then select View Palette and Set Tracker. Select the XYZ Pos option. Whenever this Palette is used in a Cue
        then the Heads will be positioned on this point, regardless of any changes in the physical position of the Heads in MagicVis.
    </p>
    <p>
        It is also possible to use Focus Line instead of Focus Hold. As for Focus Hold, record this position into a Position Palette, and
        then select View Palette and Set Tracker to XYZ Pos option. The XYZ of each specific Head is stored into the Palette. The View
        Palette view will show the X and Z position in the Pan and Tilt fields.
    </p>
    <p>
        Note that Setup, View Settings, Network, Tracker rx must be set to Internal or one of the external tracking protocols for tracking
        of fixed XYZ positions and objects. If it is set to None then no tracking will take place. Whenever this Palette is used, each Head
        will be positioned according to the specific Head XZ position. The Y (height) is common to all Heads in the Palette.
    </p>
    <p>
        The View Palette window shows the palette XYZ position in the title bar. In addition for each head the Pan and Tilt fields show the
        X and Z offset of the individual head from the palette XYZ position. It is possible to adjust the offset of the heads for each head.
    </p>
</div>
<div class="section">
    ## 49.8. Tracking a moving MagicVis object
    <p>
        Where a MagicVis object is moving (under control of a Generic Movement head or using OTP Vis Object rx) then lights can be set up to
        track the XYZ position of the MagicVis object.
    </p>
    <p>
        To track a MagicVis object, select the Heads and record them into a Palette and then select View Palette and Set Tracker. Select the
        MagicVis Object option and select the required object. Whenever this Palette is used in a Cue then the Heads will be positioned on
        this MagicVis object, regardless of where the object is or any changes in the physical position of the Heads in MagicVis.
    </p>
    <p>
        Note that Setup, View Settings, Network, Tracker rx must be set to Internal or one of the external tracking protocols for tracking
        of MagicVis objects. If it is set to None then no tracking will take place. Whenever this Palette is used, each Head will be
        positioned according to the specific Head XZ position. The Y (height) is common to all Heads in the Palette.
    </p>
    <p>
        By default all heads within the palette track the XYZ position of the MagicVis object. It is possible to set X and Z offsets from
        the MagicVis object XYZ position for each head in the View Palette view.
    </p>
</div>
<div class="section">
    ## 49.9. Tracker Simulator
    <p>
        MagicQ supports an internal Tracker simulator that generates values for Tracker 1 and Tracker 2. Both trackers move within a
        rectangle from (-5,-5) to (5,5) metres. Tracker 1 is at 0.01m high and Tracker 2 at 0.05m high.
    </p>
    <p>
        The movement is designed so that half the time the Trackers are moving in one dimension only and the other half they are moving in
        two dimensions. Tracker 1 moves in a positive X with no change in Z and then when it moves in a negative X it changes Z. Tracker 2
        moves in a positive X changing Z at same time. When it moves in a negative X there is no change in Z.
    </p>
    <p>
        The Tracker Simulator does not require MagicQ to be unlocked - it is possible to use it on MagicQ software without any external
        ChamSys interfaces.
    </p>
    <p>The simulator is activated by setting Setup, View Settings, Network, Remote Tracker Protocol to Simulator.</p>
</div>
<div class="section">
    ## 49.10. Generic Tracker personality
    <p>
        MagicQ supports a Generic Tracker personality that can be patched into a show. This enables a position to be tracked using control
        of the XYZ position from the Head within the MagicQ show or received as an input DMX from another system. It is possible to have
        control both from within the show and from an external system.
    </p>
    <p>The Generic Tracker personality has ten channels:</p>
    <div class="informaltable">
        <table class="informaltable" cellpadding="4px">
            <colgroup>
                <col class="col_1" />
                <col class="col_2" />
            </colgroup>
            <tbody>
                <tr>
                    <td align="left" valign="top"><p>Channel 1</p></td>
                    <td align="left" valign="top"><p>Tracker ID</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Channel 2</p></td>
                    <td align="left" valign="top"><p>Spare</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Channel 3+4</p></td>
                    <td align="left" valign="top"><p>X position</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Channel 5+6</p></td>
                    <td align="left" valign="top"><p>Y position</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Channel 7+8</p></td>
                    <td align="left" valign="top"><p>Z position</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Channel 9+10</p></td>
                    <td align="left" valign="top"><p>Scale</p></td>
                </tr>
            </tbody>
        </table>
    </div>
    <p>All the attributes are mapped to the Position page when the Head is patched.</p>
    <p>
        The tracker ID defaults to 1. If you are using more than one Generic Tracker then the Tracker ID for the Head should always be
        programmed into a Cue in the show file and activated.
    </p>
    <p>
        The Generic Tracker personality uses MagicQ XYZ space which has X and Z as horizontal on the stage / performance space and Y as
        vertical.
    </p>
    <p>
        By default X,Y,Z are in mm. The 0 position is 32768, 32768, 32768. Values less than 32768 are negative. Values greater than 32768
        are positive.
    </p>
    <p>
        When scale is 0 or 256 then no scaling is applied. For other scale values the resulting X, Y, or Z position is multiplied by the
        scale divided by 256.
    </p>
    <p>
        Normally the Generic Tracker will generate Tracker XYZ based on the MagicQ values for the channels programmed in the show file. If
        the channels are set to Input in the Patch then XYZ data will be received from DMX input. If the channels are set to Override in the
        Patch then date will be generated from MagicQ when the channels are active on a playback or in the programmer otherwise received
        from DMX input.
    </p>
    <p>
        The Generic Tracker personalities do not require MagicQ to be unlocked to internally generate Tracker data - it is possible to use
        it on MagicQ software without any external ChamSys interfaces.
    </p>
    <p>
        Receiving Generic Tracker data from DMX input is always supported on MagicQ consoles. On MagicQ PC and Mac systems it is only
        supported when unlocked with a MagicQ or SnakeSys interface.
    </p>
    <p>
        Generic Trackers can be used to generate internal Trackers within MagicQ in combination with receiving Tracker data from external
        protocols. Note that you should use the same Tracker for internal generation and external receiving as the data will be mixed up.
    </p>
</div>
<div class="section">
    ## 49.11. Moving Vis Objects
    <p>
        Objects in MagicVis can be moved under control of Heads within the MagicQ show using the Generic Movement personality to model
        trusses that are on motors or set pieces that move around the stage. The Generic Movement Head also has a Tracker mdoe that can
        takes it offset data from an external Tracker instead of from its internal attributes.
    </p>
    <p>
        To make an attach object movable patch a Generic Movement head into MagicQ. Then in Patch, View Vis set the attach object for the
        Generic Movement to be the Attach object to move. Any heads attached to the truss will move along with the truss.
    </p>
    <p>
        The Generic Movement head has X, Y, Z position and X, Y, Z rotation attributes enabling complete control of the object from within
        MagicQ. When the Tracker attribute is set to a valid Tracker ID (1..20) then the X , Y, Z position is taken from the external
        Tracker and the X, Y, Z rotation is set to zero.
    </p>
    <p>The Generic Movement head is a virtual head so it can be unpatched in the MagicQ Patch.</p>
</div>
<div class="section">
    ## 49.12. Transmit Tracker 1 / Tracker 2 from Focus Hold
    <p>MagicQ can transmit the Focus Hold position to other consoles and devices using the MQ Track protocol.</p>
    <p>
        Set Setup,View Settings,Network,Tracker tx to Generate Track 1 or Generate Track 2. MagicQ updates the respective Tracker from the
        Focus Hold position and transmits it over MQ Track protocol.
    </p>
    <p>
        Generate Track 1 and Generate Track 2 can be used on secondary MagicQ consoles / systems to send the Focus Hold XY position from the
        Plot view to a primary MagicQ console (using MQ Track protocol), thus enabling separate operators to control the tracking points in
        real time.
    </p>
</div>
<div class="section">
    ## 49.13. DMX Input tracking
    <p>
        Instead of tracking a single 3D position, MagicQ can receive tracker data for each Head directly on the DMX input corresponding to
        the output - for example if a Head is patched to Universe 1 channel 1 with pan and tilt on channels 10 and 12 respectively, then it
        will take the tracker data input for pan and tilt from input channels 10 and 12.
    </p>
    <p>
        Whenever a Tracker Palette is active on that channel then the received DMX data will be used. When the Tracker Palette is not active
        then the normal MagicQ calculated data will be used.
    </p>
    <p>Tracker Palettes are used for DMX Input tracking should be set to DMX In Tracker.</p>
    <p>
        The palette pan and tilt values for each head should be set to 0% (128). It is possible to set pan and tilt offsets which are added
        to the received DMX in pan and tilt channels for each head in the View Palette view.
    </p>
</div>
<div class="section">
    ## 49.14. Tracker Demo show
    <p>
        MagicQ includes a Tracker Demo show in the demo folder. The show has 6 Chauvet MK3 spots and playbacks programmed to demo tracking.
        Load the show and open the Visualiser Window.
    </p>
    <p>
        When PB1 is raised a base look is put on the spots. A macro is run to set the Tracker Rx setting to Simulator. Trackers 1 and 2 will
        be moving across the stage - green and red crosses respectively.
    </p>
    <p>PB2 contains a Tracker Palette for Tracker 1. Raising this playback fades to the spots tracking Tracker 1.</p>
    <p>PB3 contains a Tracker Palette for Tracker 2. Raising this playback fades to the spots tracking Tracker 2.</p>
    <p>
        PB4 contains a Tracker Palette for Tracker 3. Tracker 3 is controlled by the Generic Tracker head in the show file and shown in
        MagicVis with a green cross, that starts in the middle of the stage. Playback PB8 applies a circle FX to the Tracker 3 position. The
        spots will track Tracker 3 wherever it is.
    </p>
    <p>
        PB5 has a Tracker Palette with a fixed XYZ position on the Drums. A Generic Movement head is attached to the lighting truss which
        enables via PB8 the truss to be raised and lowered. As the truss moves MagicQ recalculates the pan and tilt of the Spots to remain
        focuses on the XYZ position of the Drums.
    </p>
    <p>
        PB6 has a Tracker Palette with a fixed XYZ position created from a Focus Line - each Spot in the Palette has a unique X and Z
        position in the Palette. The spots all share the same Y position. It operates similar to PB5 with the positioning being held as the
        truss moves.
    </p>
    <p>
        PB7 has a Tracker Palette with a fixed position on the MagicVis Piano object. A Generic Movement head is attached to the Piano
        object which enables via PB10 the Piano to be moved left and right. As the truss moves, or the Piano moves MagicQ recalculates using
        the new position of the truss and the new position of the piano. The truss and the piano can move at the same time.
    </p>
    <p>
        Stepping PB1 onto Cue 2 enables a Tracker Automation which triggers a Cue Stack with a Cue with the spots in yellow. As the
        specified tracker (Tracker 1) enters the specified Autom object (Auto Area - the rectangle on the floor left of centre) the Cue is
        triggered with a level proportional to the closeness to the centre of the object - at the edge it is 0% and at the centre it is
        100%. The Cue Stack is set to Fader controls LTP so that the yellow is applied according to where the Tracker is in the area.
    </p>
    <p>Note that on PC/Mac systems MagicQ must be unlocked for the Automation to work.</p>
</div>
