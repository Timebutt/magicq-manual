---
id: _10scene
title: Chapter 43. 10Scene
sidebar_position: 43
---

# Chapter&nbsp;43.&nbsp;10Scene
<p>MagicQ supports 10Scene Wall Plates and 10Scene Gateways, enabling up to 50 different zones of 10Scene operation and trigger inputs.</p>
<p>
    10Scene supports ten scenes (MagicQ Cues) programmed onto 10 buttons which can be activated and released by pressing the buttons. In
    addition the level of the programmed Cue can be decreased and increased by pressing and holding the buttons for 1 second or more.
</p>
<p>10Scenes can operate in a simple mode with minimal configuration, or in an extended mode with manual configuration per Zone.</p>
<p>10Scene Wall Plates are connected to MagicQ via one or more 10Scene Gateways.</p>
<p>
    MagicQ includes a demo show ZoneDemo.shw for training. After loading the show you should set the 10Scene action setting as this is a
    console setting and will not be set when loading the show.
</p>
<p>
    Note 10Scene Gateways and wall plates do not unlock MagicQ PC systems from
    <span class="emphasis"><em>demo mode</em></span>
    , which is required to use 10Scene on PC systems.
</p>
<div class="section">
    ## 43.1.&nbsp;10Scene Gateways
    <p>
        10Scene Gateways are ChamNet enabled devices that are managed through the View ChamNet in Setup, View DMX I/O, Net Manager. The IP
        address and subnet mask of the Gateways can be configured, and new firmware can be uploaded to them.
    </p>
    <p>
        The ID of the Gateway can also be configured - this is different to other ChamNet devices such as the SnakeSys B4 where the ID is
        set by rotary switches on the device. Each Gateway and SnakeSys device in a system should be set to a different ChamNet ID.
    </p>
    <p>
        Each 10Scene Gateway has two 10Scene ports. Each 10Scene port supports up to ten 10Scene Wall Plates and a single remote input
        trigger. It is possible to use the 10Scene Wall Plates and the remote input trigger simultaneously.
    </p>
    <p>The 10Scene ports on the 10Scene Gateway have the following pin out, left to right looking from the front:</p>
    <div class="informaltable">
        <table class="informaltable" cellpadding="4px">
            <colgroup>
                <col class="col_1" />
                <col class="col_2" />
            </colgroup>
            <tbody>
                <tr>
                    <td align="left" valign="top"><p>Pin 1</p></td>
                    <td align="left" valign="top"><p>12V</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Pin 2</p></td>
                    <td align="left" valign="top"><p>Trigger input (accepts 0 to 5V or close contact)</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Pin 3</p></td>
                    <td align="left" valign="top"><p>10Scene protocol</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Pin 4</p></td>
                    <td align="left" valign="top"><p>10Scene protocol -</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Pin 5</p></td>
                    <td align="left" valign="top"><p>Ground (0V)</p></td>
                </tr>
            </tbody>
        </table>
    </div>
    <p>To connect to 10Scene Wall Plates, pins 1,3,4 and 5 must be connected.</p>
    <p>To use the trigger input connect with a switch connect it between pins 2 and 5.</p>
</div>
<div class="section">
    ## 43.2.&nbsp;10Scene Wall Plates
    <p>10Scene Wall Plates have the following pin out when looking into the connector.</p>
    <div class="informaltable">
        <table class="informaltable" cellpadding="4px">
            <colgroup>
                <col class="col_1" />
                <col class="col_2" />
            </colgroup>
            <tbody>
                <tr>
                    <td align="left" valign="top"><p>Pin 1</p></td>
                    <td align="left" valign="top"><p>12V</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Pin 2</p></td>
                    <td align="left" valign="top"><p>12V</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Pin 3</p></td>
                    <td align="left" valign="top"><p>10Scene protocol</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Pin 4</p></td>
                    <td align="left" valign="top"><p>10Scene protocol -</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Pin 5</p></td>
                    <td align="left" valign="top"><p></p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Pin 6</p></td>
                    <td align="left" valign="top"><p>Ground (0V)</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Pin 7</p></td>
                    <td align="left" valign="top"><p>Ground (0V)</p></td>
                </tr>
            </tbody>
        </table>
    </div>
    <p>
        It is only necessary to connect to pins 1,3,4 and 7. Pin 2 is connected internally to Pin 1. Pin 6 is connected internally to Pin 7.
    </p>
    <p>
        Each 10Scene Wall Plate when manufactured has an ID which is used to link it to a specific Zone. If there is only one Zone in use
        then Zone IDs are not used.
    </p>
    <div class="section">
        ### 43.2.1.&nbsp;Programming 10Scene Wall Plate IDs
        <p>
            The ID is factory assigned in the range 32768 to 61439. Users can change the ID to anything in the range 1 to 10000. All other
            IDs are reserved.
        </p>
        <p>
            To change the ID the 10Scene Wall Plate must be connected to a MagicQ system with a 10Scene port or to a 10Scene Gateway
            support. In Setup, View Settings, Ports set 10Scene to Inbuilt if using a direct port, or Inbuilt and Gateway if using a 10Scene
            Gateway.
        </p>
        <p>
            In MagicQ 10Scene Wall Plates are managed through the Macro Window, View Autom, View 10Scene. A list of detected 10Scene Wall
            Plates are shown, together with their current ID and firmware.
        </p>
        <p>
            To identify a 10Scene Wall Plate move the cursor to the required row and press ENTER on column 1. This will turn all the buttons
            on the 10Scene to red. Press ENTER again to stop identifying, or press ENTER on another 10Scene to identify that 10SCene
            instead.
        </p>
        <p>
            To check the IDs of individual Wall Plates press the PROG 10SCENE soft button. This puts all the 10Scene Wall Plates into a mode
            whereby they display their ID as a sequence of digits. The sequence starts with all buttons blue and then lights each LED in
            turn for each digit. Buttons 1 to 9 represent the digits 1 to 9 and 10 represents 0. Press PROG SCENE again to exit this mode
            back to normal.
        </p>
        <p>
            To change the ID of the 10Scene, then it is necessary to first reset it back to its factory ID if it has been changed before.
            Press PROG 10SCENE to enter the programming mode, and then press the RESET ID button and confirm yes. The 10Scene should now
            change to display its factory ID.
        </p>
        <p>
            Alternatively press PROG 10Scene and on the 10Scene Wall Plate that you wish to reset to factory, press and hold buttons 2,4,7
            and 9. The 10Scene Wall Plate will then return to factory ID and will display the factory ID.
        </p>
        <p>
            If you wish to reset all connected 10Scene Wall Plates then press SHIFT and RESET ALL IDS instead, and all 10Scene Wall Plates
            will be reset and then display their original factory IDs.
        </p>
        <p>
            To program an individual 10Scene go into PROG 10SCENE mode and on the 10Scene Wall Plate press and hold buttons 1,5,6 and 10.
            The 10Scene Wall Plate should change to all buttons blue. Now enter the required new ID using the buttons on the 10Scene Wall
            Plate. You can enter up to 5 digits. It is not necessary to enter leading 0s - so for example to program the 10Scene Wall Plate
            to ID 1 simply press 1, to program to ID 23 press 2 and then 3. After two seconds the 10Scene will reprogram its ID and if
            successful display the new ID.
        </p>
        <p>
            If an invalid ID is entered or no buttons are pressed within 20 seconds then all LEDs briefly show red to indicate an error and
            then return to displaying the current ID.
        </p>
        <p>
            When in programming mode any 10Scene Wall Plate that is at its original factory ID can be programmed to a new ID - it is not
            necessary to enter and exit the programming mode. Note however, that if an ID is incorrectly set then it must be first reset to
            factory before changing to the correct ID.
        </p>
        <p>When all programming is complete then exit programming mode by pressing PROG 10SCENE again.</p>
    </div>
</div>
<div class="section">
    ## 43.3.&nbsp;10Scene enable
    <p>
        To enable 10Scene Wall Plates set the 10Scene enable in Setup, View Settings, Ports to Inbuilt and Gateway or Inbuilt, Gateway,
        Remote.
    </p>
    <p>
        When set to disabled, there is no communication with 10Scenes Wall Plates and remotes. 10Scene zones can still be used internally
        through automations and macros if the 10Scene action or 10Scene zones are configured.
    </p>
</div>
<div class="section">
    ## 43.4.&nbsp;10Scene action
    <p>The 10Scene action is configured in Setup, View Settings, Ports, 10Scene action.</p>
    <div class="informaltable">
        <table class="informaltable" cellpadding="4px">
            <colgroup>
                <col class="col_1" />
                <col class="col_2" />
            </colgroup>
            <tbody>
                <tr>
                    <td align="left" valign="top"><p>PB1 to 10</p></td>
                    <td align="left" valign="top"><p>All 10Scenes control PB1 to PB10</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Exec 1</p></td>
                    <td align="left" valign="top"><p>All 10Scenes control Exec Grid 1, items 1 to 10</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Exec 1 Multi</p></td>
                    <td align="left" valign="top">
                        <p>
                            10Scenes with Zone IDs 1 to 10 control Exec Grid 1, Zone ID1 controls item 1 to 10, Zone ID2 controls 11 to 20,
                            etc…
                        </p>
                    </td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Exec 1 Groups</p></td>
                    <td align="left" valign="top">
                        <p>
                            10Scenes control Exec Grid 1, items 1 to 10, but using Groups named with the Zone ID to determine which heads
                            they control.
                        </p>
                    </td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Exec Grids</p></td>
                    <td align="left" valign="top">
                        <p>10Scenes control Exec Grids - Zone ID 1 controls Exec Grid 1, Zone ID2 controls Exec Grid 2, etc…</p>
                    </td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Custom</p></td>
                    <td align="left" valign="top">
                        <p>The action for each zone is configured separately using the Type, P1 and P2 fields in Macro, View Zone</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <p>
        The state of the Zones is shown in Macro, View Zone. The Zone Type field in this window should be set to "Action" for all Zones,
        except when using Custom action.
    </p>
    <div class="section">
        ### 43.4.1.&nbsp;PB1 to 10
        <p>
            All 10Scene Wall Plates control PB1 to PB10. Pressing a 10Scene button activates the Playback at 100%. Pressing again releases
            the Playback.
        </p>
        <p>
            The 10Scene ID is not used. Regardless of their ID, all 10Scene Wall Plates control the 10 playbacks or the first 10 items on
            Exec Grid 1 respectively. The IDs can remain at factory settings.
        </p>
    </div>
    <div class="section">
        ### 43.4.2.&nbsp;Exec 1
        <p>
            All 10Scene Wall Plates control items 1 to 10 in Exec Grid 1. Pressing and releasing a 10Scene button has the same effect as
            pressing and releasing in the Execute Window. Items in the Execute window can be set to toggle (normal) or to flash.
        </p>
        <p>
            The 10Scene ID is not used. Regardless of their ID, all 10Scene Wall Plates control the 10 playbacks or the first 10 items on
            Exec Grid 1 respectively. The IDs can remain at factory settings.
        </p>
    </div>
    <div class="section">
        ### 43.4.3.&nbsp;Exec 1 Multi
        <p>
            All 10Scene Wall Plates control Exec Grid 1 with the Zone ID determining which items are controlled. Zone ID1 controls item 1 to
            10, Zone ID2 controls 11 to 20, etc…
        </p>
        <p>
            By default the ID of the 10Scene Wall Plates maps directly to the Zone ID with ID1 to ID50 being supported - Wall Plate ID1
            corresponds to Zone 1, Wall Plate ID2 corresponds to Zone 2. The mapping of IDs can be modified by configuring the Min and Max
            fields in the Zone data.
        </p>
        <p>
            ID 10000 is also supported to control all zones. A Wall Plate with this ID will show a button active if that button is active on
            any of the Zones 1 to 10 and there is a 10Scene Wall Plate detected for that Zone or a Group set up for that Zone.. When a
            button is pressed on that Wall Plate, if that button is active on any of Zones 1 to 10 then it will deactivate all items for
            that button, otherwise it will activate all items for that button. For example, pressing button 2, when Exec Grid item 12 is
            active will cause Exec Grid items 2,12,22,32,42,52,62,72,82,92 all to be released.
        </p>
    </div>
    <div class="section">
        ### 43.4.4.&nbsp;Exec 1 Groups
        <p>
            MagicQ handles activation of the Cues in the Exec Grid 1 based on Groups. MagicQ handles converting the Cues to only affect the
            heads in the specific group for the zone. Cues are expanded to include all the heads in the Group to make it simple to program
            and to make the system expandable without having to reprogram Cues.
        </p>
        <p>
            Groups must be created for each zone with the Group names containing the word "Zone" followed by the zone ID - for example "Zone
            1", "Zone2". Capitalisation does not matter. There can be further data after the Zone data such as "Zone 1 Room 21" - this is
            useful for the 10Scene app which displays Zone names.
        </p>
        <p>
            It is important to ensure that there is only one Group with each Zone ID - if you have multiple Groups e.g. two Groups named
            "Zone 1" then it will use the Group with the highest group ID.
        </p>
        <p>
            By default the ID of the 10Scene Wall Plates maps directly to the Zone ID - with ID1 to ID50 being supported - Wall Plate ID1
            corresponds to Zone 1, Wall Plate ID2 corresponds to Zone 2. The mapping of IDs can be modified by configuring the Min and Max
            fields in the Zone data.
        </p>
        <p>
            ID 10000 is also supported to control all zones. A Wall Plate with this ID will show a button active if that button is active on
            any of the Zones 1 to 50 and there is a 10Scene Wall Plate detected for that Zone or a Group set up for that Zone.. When a
            button is pressed on that Wall Plate, if that button is active on any of Zones 1 to 50 then it will deactivate all items for
            that button, otherwise it will activate all items for that button. For example, pressing button 2, will cause Exec Grid item 2
            to be activate and released for all Zones.
        </p>
        <p>
            In this mode Exec Grid 1 in the Execute Window will not show active, as there are multiple different copies of the Exec Grid 1
            in action, one for each Zone (Group). It is possible to see the state for a particular zone in Macro, View Zones. In this mode
            activating items 1 to 10 in Execute Grid 1 by pressing in the Window or using macros/automs will activate the original Cue
            containing all its heads, independently of the activation of the separate zone copies - therefore you may end up with both the
            original Exec Grid 1 item and the copy active at the same time.
        </p>
        <p>
            Note that MagicQ makes converts from the orignal Cue to the Group using an intelligent copy. The original Cue does not need to
            contain the Heads from the new Group - MagicQ will try to copy from any attributes from other heads in the original Cue. This is
            beneficial when each Zone has different fixture types.
        </p>
        <p>
            When using multiple different fixture types, it is recommend to program all required attributes into the original Cue for each
            head type rather than relying on default attributes - e.g. start programming with LOCATE. This prevents MagicQ copying
            attributes that are not in the original Cue from other fixtures that are in the original Cue.
        </p>
    </div>
    <div class="section">
        ### 43.4.5.&nbsp;Exec Grids
        <p>
            The 10Scene Wall Plates work in zones with each Zone controlling items 1 to 10 of an Execute Grid. Zone 1 controls Grid 1, Zone
            2 controls Grid 2.
        </p>
        <p>
            By default the ID of the 10Scene Wall Plates maps directly to the Zone ID - with ID1 to ID50 being supported - Wall Plate ID1
            corresponds to Zone 1, Wall Plate ID2 corresponds to Zone 2. The mapping of IDs can be modified by configuring the Min and Max
            fields in the Zone data.
        </p>
        <p>
            ID 10000 is also supported to control all zones. A Wall Plate with this ID will show a button active if that button is active on
            any of the Zones 1 to 50 and there is a 10Scene Wall Plate detected for that Zone or a Group set up for that Zone. When a button
            is pressed on that Wall Plate, if that button is active on any of Zones 1 to 50 then it will deactivate all items for that
            button, otherwise it will activate all items for that button. For example, pressing button 2, will cause item 2 to be activate
            and released for all Execute Grids 1 to 50.
        </p>
    </div>
    <div class="section">
        ### 43.4.6.&nbsp;Custom
        <p>When 10Scene action is set to Custom the function of the Zone is determined by the Type field.</p>
        <p>When set to Playback, the Zone will control 10 playbacks starting from the playback specified by P1.</p>
        <p>When set to Exec Grid, the Zone will control items 1 to 10 of the Exec Grid with Grid ID set by P1.</p>
        <p>When set to Action the Zone will not control anything.</p>
    </div>
</div>
<div class="section">
    ## 43.5.&nbsp;Manual Zone Configuration
    <div class="section">
        ### 43.5.1.&nbsp;Zone Mode
        <p>
            The Zone Status controls how the zone is configured. When set to Auto the Zone is entirely controlled in accordance with the
            action specified in the 10Scene Action option in Setup, View, Settings, Ports. No Zone specific data can be configured.
        </p>
        <p>
            When set to Manual the Zone is configured with the data specified for that Zone including the Zone Name, Zone Status, Zone Type,
            Min ID, Max ID, Password, Passcode, Zone Switch, Join Zone and Join Status.
        </p>
    </div>
    <div class="section">
        ### 43.5.2.&nbsp;Zone Status
        <p>
            A Zone can be temporarily enabled and disabled. When disabled the buttons on all 10Scenes for that Zone will be deactivated and
            macro and automation commands for that Zone will have no effect.
        </p>
        <p>When the Zone Status is set to Auto the Zone is always enabled.</p>
    </div>
    <div class="section">
        ### 43.5.3.&nbsp;Zone Name
        <p>Each Zone can have a name that will be displayed internally and on the remote app.</p>
        <p>
            If a Zone Name is not set then when the Zone Action is Exec 1 Groups or Exec 1 Multi, then if there is a Group named starting
            with "Zone" then this will be used as the Zone name - e.g. "Zone 2 Rm 5" would be used for name Zone 2.
        </p>
    </div>
    <div class="section">
        ### 43.5.4.&nbsp;10Scene ID min and max
        <p>
            Each Zone can be controlled by a range of 10Scene Wall Plates with different 10Scene IDs - enter a minimum and a maximum range
            for the 10SCene ID. The minimum must be set to at least 1 to operate.
        </p>
        <p>
            If no minimum or maximum is specified then the Zone will be controlled by the 10Scene Wall Plate with ID set to the Zone ID -
            e.g. 10Scene ID2 will control Zone 2.
        </p>
        <p>
            When minimum and maximum ranges are in use it is not necessary to match the 10Scene Wall Plate ID to the Zone ID - any 10Scene
            Wall Plate IDs in the range 1 to 9999 can be used.
        </p>
    </div>
</div>
<div class="section">
    ## 43.6.&nbsp;Passwords
    <p>The password is used on the remote app to access the zone.</p>
    <p>In manual mode a password can be assigned to each Zone.</p>
    <p>
        In the other modes, the zones take a password from any users with passwords set up on the system (in Setup, View System, View Users)
        and these passwords can be used on any zones.
    </p>
    <p>
        In all modes, users that have a user set on the console with password authorisation can also use their master password to access any
        zone.
    </p>
    <p>
        Users that have a user set on the console of level Programmer with password authorisation (Setup, View System, View Users) can use
        this password to the "All Zones" zone to control all zones simultaneously.
    </p>
    <p>
        From v1.9.2.2 MagicQ was enhanced to provide locking of show files via console user passwords - version 1.5 of the 10Scene app is
        required to enable automatic QR code logon to the Zones.
    </p>
</div>
<div class="section">
    ## 43.7.&nbsp;Passcodes
    <p>
        In manual mode a passcode can be assigned to a Zone. When a passcode is assigned then the 10Scene Wall Plates in that zone will have
        all buttons off until the passcode is entered. Once the passcode is entered for a zone, then the 10Scene Wall Plates in that zone
        all show the zone state and button presses are accepted to change the state. After 20 seconds of inactivity the Zone is locked again
        and all 10Scene Wall Plates revert to off.
    </p>
    <p>
        In some cases it may be desirable to have some 10Scene Wall Plates in a controlled zone with passcode and others without. The
        10Scenes should then be split into 2 different zones, one with a passcode, the other without, and the Zones set to control the same
        items - e.g. the same Execute Grid and Group.
    </p>
    <p>Passcodes are not available in the simple modes.</p>
</div>
<div class="section">
    ## 43.8.&nbsp;Joining Zones
    <p>
        When 10Scene action is set to Exec 1 Groups, Exec 1 Multiple, Exec Grids or when zones are configured individually to control an
        Execute grid using a group then it is possible to join zones together. When two or more zones are joined together they operate as
        one zone. All Cues are expanded to include all heads of the group from each zone that is joined together.
    </p>
    <p>
        In manual mode any zone can be joined to any other by setting the required zone to join in the Join Zone field and setting the Zone
        Switch to Joined.
    </p>
    <p>
        When using Exec 1 Groups a zone can only be joined to the previous zone - i.e. Zone 2 can be joined to Zone 1, Zone 3 can be joined
        to Zone 2. The Zone Switch field is used to Join this zone.
    </p>
    <p>In manual mode the joining of zones can be temporarily enabled and disabled for each zone.</p>
    <p>
        The Zone Switch can also be operated from an automation, enabling automatic operation from a remote input. In Macro, View Autom
        insert an automation of Type Remote, and with Function set to Zone Switch.
    </p>
    <p>
        When joining and separating zones the Execute state from the joined/separated from zone is maintained and expanded to the newly
        joined or newly separated zone.
    </p>
    <p>
        The joining and separation of zones will only affect the zones that are part of the join/separate. All other zones will continue to
        operate without interruption, even if they themselves are made of several zones joined.
    </p>
    <p>
        The Zone Switch can also be added to the Execute windows - ASSIGN SPECIAL, select 10SCENE ZONE and enter the Zone ID. The Zone
        Switch item in the Execute window shows active when the Zone Switch for that zone is set to joined. The text of the item indicates
        which Zone it is joined to. Pressing the item will change the state of the Zone Switch.
    </p>
</div>
<div class="section">
    ## 43.9.&nbsp;10Scene remote triggers
    <p>
        MagicQ supports the 10Scene remote triggers from the 10Scene gateways in the Autom window. Add a new Autom with type Remote and set
        the ChamNet ID of the Gateway in P1 and the remote trigger number (1 or 2) in P2.
    </p>
</div>
<div class="section">
    ## 43.10.&nbsp;10Scene Remote app
    <p>
        MagicQ includes a 10Scene remote app for use on Android, iOS, Windows and MacOS that provides a simple to use 10Scene interface
        designed for install and use by non-technical people without needing any knowledge of lighting or MagicQ.
    </p>
    <p>The app connects to either the inbuilt WIFI of the console (MQ50,MQ70,MQ250M) or to an external router.</p>
    <p>
        The app shows the available 10Scene Zones and enables. Where required, Zones can be passworded, requiring the user to enter a
        password before having access to view or control the Zone. Master passwords can be set so that authorised users can have access to
        all zones.
    </p>
    <p>
        On MagicQ passwords can be set on specific zones in the Macro Window, View Zone. Master passwords for all zones can be set by adding
        users in Setup, View System, View Users and setting a user password. The user can be any level - it is assumed that anyone who can
        access the console as an operator should also be allowed to operate the 10Scene app. For example, specific passwords can be set for
        each Zone and given out to customers, whilst a user level password could be used for venue managers.
    </p>
    <p>
        For a Zone, the app shows the ten 10Scene buttons with their name and current state. When the Exec 1 Groups and Exec 1 Multi actions
        are in operation, then Zone names are taken from the zone data in the Macro Window, View Zones. If names are not set, then it will
        take names from the Group Names - e.g. if a Group is named "Zone 2 Rm 5" then this will be shown on the App. In Exec 1 Multi, Zone
        Groups are only used for the naming, not for the execution of the Cues.
    </p>
</div>
<div class="section">
    ## 43.11.&nbsp;Testing an installation
    <p>
        In Macro, View Zone the rightmost columns Named B1 to B10 show the ten 10Scene buttons for each Zone together with names. The
        buttons can be tested from this view by clicking or pressing ENTER on the button - this causes the Execute item for the 10Scene
        button to be activated or released.
    </p>
    <p>
        It is also possible to trigger 10Scene buttons from Cue Stack macros using the T0 command or from ChamSys Remote protocol using the
        X command. The button press and button release can be triggered just like on a 10Scene wall plate, or the Execute item for the
        10Scene button can be activated / released.
    </p>
</div>
