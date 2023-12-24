---
id: network-manager
title: Chapter 30. Network Manager (SnakeSys)
sidebar_position: 30
---

# Chapter&nbsp;30.&nbsp;Network Manager (SnakeSys)
<p>
    MagicQ supports a Network Manager (Setup, View DMX I/O, Net Manager) for monitoring and configuring network devices, including Art-Net
    and sACN nodes, RDM devices, and SnakeSys products using the ChamNet protocol.
</p>
<p>
    <span class="inlinemediaobject">
        <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/netmanager.png" alt="image" />
    </span>
</p>
<div class="section">
    ## 30.1.&nbsp;VIEW CHAMNET
    <p>
        ChamNet devices include the SnakeSys B4, SnakeSys R4, SnakeSys R8, SnakeSys T2 (T6), older ChamSys 4 port Ethernet Interfaces and
        10Scene Gateways,
    </p>
    <p>
        SnakeSys products B4, R4, R8, T2 can be configured in two different ways – in normal mode the product is configured from the front
        panel switches and buttons on the SnakeSys product. In ChamNet mode the switches and buttons are ignored and the product is
        configured from MagicQ.
    </p>
    <div class="section">
        ### 30.1.1.&nbsp;Normal (non ChamNet mode)
        <p>
            If the SnakeSys product is set in a mode other than ChamNet Mode (such as Art-Net, ACN or buffer) then it is not possible to
            configure the interface from Net Manager. However, the device will still appear in Net Manager and it is possible to view its
            configuration.
        </p>
    </div>
    <div class="section">
        ### 30.1.2.&nbsp;ChamNet Mode
        <p>
            In ChamNet mode each SnakeSys product on the network has a different ID in the range 0 to 99. All interfaces should have
            different IDs.
        </p>
        <p>
            The ID is set on the SnakeSys product using either the control panel or rotary switches. The 10Scene Gateway ID can only be
            configured through Net Manager as it has no physical buttons on the device.
        </p>
        <p>SnakeSys B4, R4, R8, T2(6) nodes can be configured using the CONFIG DEVICE soft button and selecting an appropriate profile.</p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/netmanagerdmx.png" alt="image" />
            </span>
        </p>
        <p>
            The profiles act as a starting point – once a starting profile has been chosen, the detailed configuration can all be set
            individually for each port by changing to the VIEW PORTS view.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/netmanagerports.png" alt="image" />
            </span>
        </p>
        <p>The rate, frame, MAB and Break timing can be set for each interface – the timings affect all ports on the interface.</p>
        <p>When configured as Outputs the ports can be configured to output the same or different Art-Net / sACN universes.</p>
        <p>
            The Cons Uni field shows the console universe on MagicQ that is outputting the data that the port is trying to read. If no
            console universe is set to output on that port then the field is blank.
        </p>
        <p>
            At any time you can revert back to a standard profile by pressing the CONFIG DEVICE soft button – this will show the list of DMX
            profiles.
        </p>
    </div>
    <div class="section">
        ### 30.1.3.&nbsp;Upgrading SnakeSys firmware
        <p>
            SnakeSys product firmware can be firmware upgraded from MagicQ software - the latest MagicQ software contains the latest
            firmware for all SnakeSys products - this can be found in the firmware folder under on the installation.
        </p>
        <p>ChamSys recommend not attempting a firmware update on SnakeSys products in a critical show environment.</p>
        <p>
            Download the latest MagicQ software from the ChamSys download site. In order to upgrade the full range of SnakeSys devices
            MagicQ must be running software version 1.6.0.5 or higher.
        </p>
        <p><a class="ulink" href="http://chamsys.co.uk/download" target="_top">http://chamsys.co.uk/download</a></p>
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">
                    Connect the SnakeSys device to either a MagicQ Console or MagicQ PC/Mac System via a direct network cable. It is
                    advisable to remove all other equipment from the network.
                </li>
                <li class="listitem">
                    SnakeSys devices ship with a default IP address in the 2.X.X.X range, in order to update the firmware on your device
                    MagicQ must also be set to an IP address within this range.
                </li>
                <li class="listitem">Set the SnakeSys device to be in ChamNet/MagicQ mode</li>
                <li class="listitem">In Net Manager, put the cursor on the device to be upgraded and press UPGRADE DEVICE.</li>
                <li class="listitem">
                    Choose the required firmware version. In older versions of MagicQ you need to specify the version number of the
                    firmware.
                </li>
                <li class="listitem">
                    Do not power off the interface whilst the firmware is being upgraded. When MagicQ reports "Device restarted
                    successfully" the upgrade is complete.
                </li>
            </ul>
        </div>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/netmanagerupgrade.png" alt="image" />
            </span>
        </p>
        <p>
            If you are sent a newer firmware file by ChamSys support then copy the file into the firmware folder in the MagicQ installation.
            To install it onto a MagicQ console put the file onto a USB stick, then in MagicQ go to Setup, File Manager. Select USB DRIVE.
            Press COPY and select the file as the source to copy. Then select the destination, by selecting HARD DRIVE, UP DIR, and select
            the firmware folder. Press the "." item to copy to. Then follow the procedure above.
        </p>
        <p>
            The firmware has the filename firmware_XXXX_YYYY or firmware_XXXX_XXXX_YYYY where the XXXX or XXXX_XXXX is the product code and
            YYYY is the firmware version number. The product codes are:
        </p>
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">SnakeSys B4 334A</li>
                <li class="listitem">SnakeSys R4 342A</li>
                <li class="listitem">SnakeSys T2 419B</li>
                <li class="listitem">SnakeSys R8 330A</li>
                <li class="listitem">10Scene 0310_0024</li>
            </ul>
        </div>
    </div>
    <div class="section">
        ### 30.1.4.&nbsp;Older ChamSys 4 Port Ethernet interfaces
        <p>
            Older ChamSys 4 Port Ethernet Interfaces and the SnakeSys B4 interfaces manufactured prior to 2013 (serial numbers with last 4
            digits less than 0268) have no storage for configuration data and so when in ChamNet mode they always get their configuration
            from MagicQ every time they are powered up.
        </p>
        <p>
            When the interface starts up it will recognise that it is in MQ Mode and then will search on the network to find a MagicQ system
            that can give it a configuration. The interface will not output or input DMX data until it has received configuration from a
            MagicQ system.
        </p>
        <p>
            The MagicQ system stores the configuration information for all these older interfaces as console settings. In View Ports, press
            the INSERT B4MK1 button to add a new interface. MagicQ will present a list of default profiles for configuring the interface.
        </p>
        <p>An interface can be removed by putting the cursor on the line of the interface and pressing REMOVE.</p>
        <p>
            If there are multiple MagicQ consoles on the network, then only the master one (as per Hot Takeover) will provide configuration
            information to the interfaces.
        </p>
        <p>
            Newer SnakeSys B4s and all other SnakeSys products will appear automatically in the list and do not need to be inserted or
            removed.
        </p>
    </div>
    <div class="section">
        ### 30.1.5.&nbsp;Output Setup
        <p>
            In order to use a SnakeSys product with a MagicQ system the MagicQ system must be set up in Setup, View DMX I/O to output or
            input universes over the network
        </p>
        <p>
            When outputting from the SnakeSys product set up MagicQ universes with Output type of Art-Net or sACN with the Out Uni set to
            the Art-Net or sACN universes that the SnakeSys device is set to decode.
        </p>
        <p>
            For inputting DMX from the SnakeSys product set up MagicQ universes with Input type of Art-Net or sACN with the In Uni set to
            the Art-Net or sACN universes that the SnakeSys device is set to generate.
        </p>
    </div>
</div>
<div class="section">
    ## 30.2.&nbsp;VIEW ART-NET
    <p>
        This view shows all Art-Net devices detected on the network. This includes all MagicQ console, QuickQ consoles and stand alone
        MagicVis and MagicHD applications as they all have Art-Net capability.
    </p>
    <p>Press REFRESH NODES to force MagicQ to clear its table of Art-Net nodes and redetect all nodes.</p>
    <p>For each node that it detects it shows the IP address, node name and port configuration.</p>
    <p>
        For each port it shows the universe that the node is set to output or input. The universe is preceded by the following letters to
        indicate status:
    </p>
    <div class="itemizedlist">
        <ul class="itemizedlist">
            <li class="listitem">O Port is configured as an Output</li>
            <li class="listitem">OE Port is configured as an Output and is enabled</li>
            <li class="listitem">sAO Port is configured as an Output for sACN</li>
            <li class="listitem">sAOE Port is configured as an Output for SACN and is enabled</li>
            <li class="listitem">I Port is configured as an Input</li>
            <li class="listitem">IR Port is configured as an Input and is receiving data</li>
        </ul>
    </div>
    <p>For Art-Net ports the universe is the Art-Net universe (starting at 0) for sACN it is the sACN universe.</p>
    <p>
        Note that whether these indicators are displayed is entirely dependent on the node and whether the manufacturer has implemented
        these fields in their Art-Net implementation.
    </p>
    <p>
        Where the node supports it, it is possible to directly configure the ports of the node by setting the Universe value in the Port
        Field.
    </p>
    <p>Type S or s in the Port field to set the port to sACN. Type A or a in the port field to set the port to Art-Net.</p>
    <p>Type I or i in the Port field to set the port to Input. Type O or o in the port field to set the port to Output.</p>
    <p>
        Press RDM DISCOVERY to force an Art-Net node that supports RDMM to perform discovery amd retrieve the RDM table of devices. Any
        devices that are detected will be shown in the VIEW RDM menu. SHIFT + GET RDM TOD retrieves the table of devices (TOD) without
        forcing the node to do a discovery of new devices.
    </p>
    <p>
        Press VIEW STATUS to jump to the Output Window, Art-Net View to see the number of Art-Net packets being received on Art-Net universe
        0 to 255.
    </p>
</div>
<div class="section">
    ## 30.3.&nbsp;VIEW SACN
    <p>
        This view shows all sACN RDMNET devices detected on the network. In order to detect RDMNET devices the IP Address and port of the
        RDMNET gateway must be first configured in Setup, View Settings, Network.
    </p>
    <p>Once a RDMNET gateway has been detected, use GET ENDPOINTS to get the Endpoint data.</p>
</div>
<div class="section">
    ## 30.4.&nbsp;VIEW RDM
    <p>This view shows RDM devices.</p>
    <p>
        MagicQ stores the list of RDM devices (to enable restoring of a lighting rig via RDM) in the show file, so the device list may
        contain devices that are not currently accessible.
    </p>
    <p>
        Devices that have been discovered in the current session are shown in white, whilst devices that have been discovered in previous
        sessions and stored in the show file are shown in grey.
    </p>
    <p>
        Press SHIFT and CLEAR RDM to clear all stored RDM devices out of the MagicQ show. Alternatively, use REMOVE to remove one or more
        individual entries.
    </p>
    <div class="section">
        ### 30.4.1.&nbsp;Discovering and configuring devices
        <p>
            Press DISCOVER ALL to discover RDM devices. MagicQ will attempt to discover RDM compliant devices on its direct console ports
            (MQ50, MQ70, MQ80, MQ250M and Stadium Connect) and via connected Art-Net nodes that support RDM.
        </p>
        <p>
            When MagicQ detects the RDM devices it will automatically attempt to get information from each fixture in turn on all. Some
            devices may not respond immediately - in this case it may be necessary to press GET INFO to force this information to be
            retrieved.
        </p>
        <p>
            If the RDM devices are connected to an Art-Net node and nothing is detected then check that your RDM-enabled Art-Net node
            appears in VIEW ART-NET.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/rdm_devices.png" alt="image" />
            </span>
        </p>
        <p>
            The fixture address, mode, dimmer curve and modulation frequency can be set directly for each RDM device shown in the Window. It
            is also possible to factory reset devices that support it.
        </p>
        <div class="variablelist">
            <p class="title"><strong>Columns</strong></p>
            <dl class="variablelist">
                <dt><span class="term">Uni</span></dt>
                <dd>MagicQ universe number.</dd>
                <dt><span class="term">Type</span></dt>
                <dd>Shows if this is running over Art-Net or ACN.</dd>
                <dt><span class="term">RDM Uni</span></dt>
                <dd>If this is running over Art-Net, this shows the Art-Net universe.</dd>
                <dt><span class="term">Addr</span></dt>
                <dd>DMX address (1 - 512). Set this field to change the DMX address of the fixture.</dd>
                <dt><span class="term">Chans</span></dt>
                <dd>Number of DMX channels this fixture uses in its current mode.</dd>
                <dt><span class="term">Per</span></dt>
                <dd>
                    Mode/personality of the fixture (1+). Set this field to change the mode of the fixture - MagicQ will show a list of the
                    modes reported by the fixture.
                </dd>
                <dt><span class="term">Tot</span></dt>
                <dd>Number of modes/personalities supported by this fixture.</dd>
                <dt><span class="term">Manufacturer</span></dt>
                <dd>Manufacturer of the fixture.</dd>
                <dt><span class="term">Model</span></dt>
                <dd>Model of the fixture.</dd>
                <dt><span class="term">Mode</span></dt>
                <dd>
                    Name of the currently selected mode/personality. Modes start from 1. This field can be set to change the mode of the
                    fixture.
                </dd>
                <dt><span class="term">UID</span></dt>
                <dd>
                    This is a 12 digit hexadecimal number that is unique to this device. It enables the RDM protocol to ensure messages can
                    be sent to specific devices. The first four digits of the UID is also known as the "ESTA Manufacturer ID" assigned to
                    that manufacturer.
                </dd>
                <dt><span class="term">Device Model ID</span></dt>
                <dd>A four digit hexadecimal number which uniquely identifies the model of the fixture for that manufacturer.</dd>
                <dt><span class="term">Curve</span></dt>
                <dd>The dimmer curve of the fixture. Dimmer curve is an optional RDM field.</dd>
                <dt><span class="term">Freq</span></dt>
                <dd>The modulation frequency of the fixture. Frequency is an optional RDM field.</dd>
                <dt><span class="term">Reset</span></dt>
                <dd>
                    This field enables resetting the fixture. Press on the field and confirm yes to perform a cold (like power on) reset on
                    the fixture. This is an optional RDM field and is not supported by many fixtures.
                </dd>
                <dt><span class="term">Factory Reset</span></dt>
                <dd>
                    This field indicates if the fixture is in its factory reset state and enables setting to the factory reset state. Press
                    on the field and confirm yes to perform a factory reset. This is an optional RDM field and is not supported by many
                    fixtures.
                </dd>
                <dt><span class="term">Cable Index</span></dt>
                <dd>This field is reserved for indicating cable index in systems that support DMX cable index identification.</dd>
                <dt><span class="term">Sel PID</span></dt>
                <dd>This field shows the value of the selected PID as selected on Soft Button X.</dd>
            </dl>
        </div>
        <p>
            To further configure the manufacturer parameter PIDs of each connected RDM device, put the cursor on the required device and
            press VIEW PIDS.
        </p>
        <p>
            Note that The DISCOVER ALL command requests Art-Net nodes to perform a flush of their RDM table of devices (TOD) and to then
            perform a discovery of all currently connected devices. In some cases it may be useful to just retrieve the table off devices
            without forcing a new discovery - in this case press SHIFT + GET TOD ALL. .
        </p>
    </div>
    <div class="section">
        ### 30.4.2.&nbsp;Auto addressing
        <p>
            Press the AUTO ADDRESS soft button to automatically address all the fixtures in the list, starting at 1 and incrementing based
            on the channel count of each fixture.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/rdm_modes.png" alt="image" />
            </span>
        </p>
        <p>Where there are devices from more than one universe the devices on each universe will be addressed starting at 1.</p>
    </div>
    <div class="section">
        ### 30.4.3.&nbsp;Restore addressing
        <p>
            Once a DISCOVER ALL and GET INFO has been performed on a lighting rig, MagicQ stores the RDM address and mode for each fixture
            with its unique UUID in the show file. This is maintained in the show file through subsequent loads and saves of that show file.
        </p>
        <p>At any time a lighting rig can be restored to a known state from a MagicQ show file.</p>
        <p>
            First in Net Manager perform a DISCOVER ALL and GET INFO to get the addresses and mode of the RDM devices. Check that all the
            expected devices have been detected.
        </p>
        <p>
            Then press SHIFT + RESTORE ADDRESS and select a show file to load the RDM information from. MagicQ loads the RDM data from that
            show file and readdresses the RDM fixtures to the mode and address from that show file. Note that MagicQ only loads the RDM
            information from that show file, it does not load or change any other data in your show.
        </p>
        <p>
            When setting up a new venue, or a new lighting rig that uses RDM when the configuration is complete it is recommended to
            DISCOVER ALL and GET INFO for the complete rig and save the MagicQ show file with a name such as "VenueRDM.shw" which can then
            be used in the future to restore the lighitn rig to the correct RDM state.
        </p>
    </div>
    <div class="section">
        ### 30.4.4.&nbsp;Identifying devices
        <p>
            The RDM identify command forces a fixture to identify itself. This is usually a flashing white light or continuous pan, tilt and
            colour scroll. This allows you to match up the devices you are seeing in the VIEW RDM window with physical devices on the
            lighting rig, similar to the Head Test feature in the Patch window.
        </p>
        <p>
            In the VIEW RDM window, press soft button C, RDM Test, and use the cursor keys to scroll up and down the list of devices. The
            device at the cursor will be sent the RDM identify message and highlighted red to show it is in test mode.
        </p>
    </div>
    <div class="section">
        ### 30.4.5.&nbsp;Sensors
        <p>
            Sensor information for the RDM device at the cursor is displayed at the top of the window and is continually refreshed. If the
            device is able to report multiple sensors then they are all shown.
        </p>
    </div>
    <div class="section">
        ### 30.4.6.&nbsp;Auto patching
        <p>
            Pressing the PATCH RDM HEAD soft button will patch the RDM device at the cursor into the show, using its current DMX address and
            mode.
        </p>
        <p>Press SHIFT and PATCH ALL RDM soft button to patch everything in the list.</p>
        <p>
            This tries to find a matching head file using the ESTA Manufacturer ID, Device Model ID and mode. If this fails it tries to
            match the manufacturer and model descriptions and channel count.
        </p>
        <p>
            To improve the accuracy of the auto patching feature, you can add in the RDM information into the head file using the
            <a class="link" href="head-editor.html" title="Chapter&nbsp;27.&nbsp;Head Editor">head editor</a>
            . In the General View there is
        </p>
        <div class="variablelist">
            <dl class="variablelist">
                <dt><span class="term">ESTA manufacturer ID (hex)</span></dt>
                <dd>
                    This is a four digit hexadecimal number which uniquely identifies the manufacturer of the fixture. This can be found by
                    taking the first four digits of the UID (e.g. in the VIEW RDM window image above, the UID of the first fixture is
                    21A4-A30810F6 so the ESTA ID is 21A4, which will be the same for all Chauvet fixtures). A complete list can be found on
                    the
                    <a class="ulink" href="http://tsp.esta.org/tsp/working_groups/CP/mfctrIDs.php" target="_top">ESTA website</a>
                    .
                </dd>
                <dt><span class="term">RDM device model ID (hex)</span></dt>
                <dd>
                    This is a four digit hexadecimal number which uniquely identifies the model for this manufacturer. It can be found in
                    the
                    <span class="emphasis"><em>Device Model ID</em></span>
                    column or in the manual. In this example, device model ID 00AE will be the same for all Chauvet Rogue R1 FX-B fixtures.
                </dd>
                <dt><span class="term">RDM personality number</span></dt>
                <dd>
                    This is a decimal number which represents the mode/personality reported by RDM. This can be found in the
                    <span class="emphasis"><em>Per</em></span>
                    column and must be 1 or higher.
                </dd>
            </dl>
        </div>
        <p>
            The ESTA Manufacturer ID, Device Model ID and Personality number are all reported by the fixture over RDM and together can be
            used to match a specific head file. You should not have more than one head file with all three of these fields the same.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/headeditgeneral.png" alt="image" />
            </span>
        </p>
    </div>
    <div class="section">
        ### 30.4.7.&nbsp;Creating Heads from RDM data
        <p>
            MagicQ has an extensive personality library which covers nearly all fixtures. MagicQ personality library has very detailed
            modelling of fixtures including gobo icons and physical dimensions.
        </p>
        <p>
            RDM optionally allows fixtures to provide basic reporting of attribute allocation enabling MagicQ to create a basic new
            personality which can be then used to patch the head.
        </p>
        <p>
            Put the cursor on the required device and press CREATE HEAD to create a new personality. The name of the personality will be
            based on the Manufacturer, Model and Mode fields reported by the RDM device.
        </p>
        <p>Note that creating heads is only possible if the RDM device supports the RDM SLOT_INFO PID.</p>
    </div>
    <div class="section">
        ### 30.4.8.&nbsp;Manual Repatch
        <p>MagicQ provides shortcuts for repatching a lighting rig RDM compliant fixtures in it.</p>
        <p>There are two options - Readdress physical fixtures and Repatch show to fixtures.</p>
        <div class="section">
            #### Readdress physical fixtures
            <p>
                This is used when you want to change the addresses on the physical fixtures in the venue to match your show file - for
                example, when setting up a lighting rig for the first time where the fixtures have not yet been addressed.
            </p>
            <p>
                Readdressing physical fixtures does not change the Patch information or any of your programming in your show - instead it
                uses RDM commands to change the address and mode of the physical fixtures, just as if you were changing them on the fixture
                control panel.
            </p>
            <p>First press DISCOVER ALL and GET INFO to get the RDM information for the RDM compliant fixtures in the lighting rig.</p>
            <p>
                Then press MANUAL REPATCH and select Readdress physical fixtures. "RDM Readdr" will flash in the status window under the
                clock whilst RDM Readdr mode is in operation.
            </p>
            <p>
                In RDM Readdr mode the fixture at the cursor in Net Manager is automatically tested (identified) to identify the fixture in
                the physical lighting rig.
            </p>
            <p>
                Use the NEXT HEAD and PREV HEAD buttons to move to different fixtures in the lighting rig. Note that the NEXT HEAD and PREV
                HEAD buttons are not used to select heads whilst in RDM Readdr mode.
            </p>
            <p>To readdress a RDM fixture to match a head in your show use one of the normal MagicQ head selection operations - either:</p>
            <div class="itemizedlist">
                <ul class="itemizedlist">
                    <li class="listitem">Enter the head number - e.g. for head 10 type 10 @ @</li>
                    <li class="listitem">Select the head in Group, View Heads</li>
                    <li class="listitem">Select the head in the Plot Window</li>
                    <li class="listitem">Select the head in the Output Window, View Grid</li>
                    <li class="listitem">In the Patch Window, move cursor to a Head and press ENTER.</li>
                </ul>
            </div>
            <p>The RDM device will be readdressed and set to the mode of the selected head in the MagicQ show.</p>
            <p>
                Use NEXT HEAD or PREV HEAD to change to another RDM fixture, and then select the head in the MagicQ show to readdress this
                fixture to.
            </p>
            <p>When all readdressing has been done press the END READDRESS button in the Net Manager.</p>
        </div>
        <div class="section">
            #### Repatch show to fixtures
            <p>
                This is used when you want to change your show data to match the DMX addresses and modes of the physical fixtures in the
                venue - for example, when touring and visiting a venue with a fixed lighting rig.
            </p>
            <p>
                Repatch show to fixtures does not change the address, mode or any other parameters of the physical fixtures - instead it
                morphs your show file to the physical fixtures and repatches the addresses to match the physical rig.
            </p>
            <p>First press DISCOVER ALL and GET INFO to get the RDM information for the RDM compliant fixtures in the lighting rig.</p>
            <p>
                Then press MANUAL REPATCH and select Repatch show to fixtures. "RDM Repatch" will flash in the status window under the clock
                whilst RDM Repatch mode is in operation.
            </p>
            <p>
                In RDM Repatch mode the fixture at the cursor in Net Manager is automatically tested (identified) to identify the fixture in
                the physical lighting rig.
            </p>
            <p>
                Use the NEXT HEAD and PREV HEAD buttons to move to different fixtures in the lighting rig. Note that the NEXT HEAD and PREV
                HEAD buttons are not used to select heads whilst in RDM Repatch mode.
            </p>
            <p>
                To repatch a head in your show to use the physical fixture select that head using one of the normal MagicQ head selection
                operations - either:
            </p>
            <div class="itemizedlist">
                <ul class="itemizedlist">
                    <li class="listitem">Enter the head number - e.g. for head 10 type 10 @ @</li>
                    <li class="listitem">Select the head in Group, View Heads</li>
                    <li class="listitem">Select the head in the Plot Window</li>
                    <li class="listitem">Select the head in the Output Window, View Grid</li>
                    <li class="listitem">In the Patch Window, move cursor to a Head and press ENTER.</li>
                </ul>
            </div>
            <p>
                The head in the MagicQ Patch will be morphed to the RDM fixture, and it will be moved to the DMX address that the RDM device
                reported.
            </p>
            <p>
                Use NEXT HEAD or PREV HEAD to change to another RDM fixture, and then select the head in the MagicQ show to repatch for this
                fixture.
            </p>
            <p>When all repatching has been done press the END REPATCH button in the Net Manager.</p>
        </div>
    </div>
    <div class="section">
        ### 30.4.9.&nbsp;Background Check
        <p>
            Use soft button F to enable background RDM checking. When Background Check is on, MagicQ performs a RDM discovery every 60
            seconds to detect RDM devices and get their info.
        </p>
        <p>When Background Check is off, MagicQ only performs RDM discovery when requested by pressing the DISCOVER ALL button.</p>
        <p>
            Note that Background RDM checking requires a lot of RDM traffic, particularly on larger lighting rigs or with complex fixtures,
            which may slow down DMX refresh rates.
        </p>
    </div>
    <div class="section">
        ### 30.4.10.&nbsp;Auto Patch
        <p>
            Auto Patch enables a lighting rig to be detected and patched automatically. It also enables the show to be updated if any
            devices have had their address or mode changed.
        </p>
        <p>Use soft button Y to enable RDM auto patching. When Auto Patch is on, then Background Check is automatically turned on.</p>
        <p>
            When Auto Patch is on, MagicQ performs a background discovery and patches any new devices that it had not previously encountered
            in the show using the current device mode . If MagicQ determines that devices that it had previously auto patched have changed
            DMX address or mode then MagicQ will change the DMX address or mode of the patched Head in the show.
        </p>
        <p>
            Note that MagicQ does not remove Heads from the Patch if devices are not detected - this ensures that the show programming is
            maintained. If devices are permanently removed from the lighting rig then they must be manually unpatched from the show.
        </p>
    </div>
    <div class="section">
        ### 30.4.11.&nbsp;Rig Lock
        <p>Rig Lock enables a lighting rig to be locked so that users cannot change the DMX address or modes of fixtures.</p>
        <p>Use soft button X to enable RDM Rig Lock. When Rig Lock is on, then Background Check is automatically turned on.</p>
        <p>
            When Rig Lock is on, MagicQ performes a background discovery and checks any devices found. If the device address or mode has
            been changed then MagicQ sends a RDM command to return the device to the address and mode from its show file.
        </p>
        <p>Rig Lock takes priority over Auto Patch. Generally Auto Patch should be set to off when Rig Lock is in use.</p>
    </div>
</div>
<div class="section">
    ## 30.5.&nbsp;VIEW PIDS
    <p>
        RDM fixtures support parameters referred to as PIDs. Parameters can be "Get" - i.e read only, "Set", i.e. set only, or "Get and
        Set".
    </p>
    <p>
        All RDM fixtures must support the parameters used for discovering the device, identifying the device and setting the DMX start
        address.
    </p>
    <p>
        In the VIEW PIDS all the PIDs that the device reports that it supports are shown. For each parameter there is an ID (as defined by
        the RDM specification), a description and the current value.
    </p>
    <p>Standard PIDs have IDs in the range 0x0001 to 0x7FFF. Manufacturer specific PIDs are in the range 0x8000 to 0xFFDF.</p>
    <p>The Size, Data Type, Min, Max, Type, Default, Unit and Prefix fields give more information about the particular parameter.</p>
    <p>For parameters that are "Set" or "Get and Set" the Value field can be set. Enter a new value on the keyboard to change the value.</p>
    <p>Press REFRESH PIDS to reload the PIDs from the device.</p>
    <p>
        The GET SLOTS and LOG RDM soft buttons are used for testing RDM fixtures. Press GET SLOTS to force MagicQ to get the DMX Slot
        information (fixture attribute information) from the RDM device. LOG RDM writes all the details that have been retrieved from the
        RDM device including the general info, modes, slot info and PIDs to the file "rdm.csv" in the log folder.
    </p>
    <p>
        Press COPY PID to copy the PID that the cursor is on to all devices of the same type. Press SHIFT + COPY ALL PIDs to copy all PIDs
        to all devices of the same type.
    </p>
</div>
