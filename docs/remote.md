---
id: remote
title: Chapter 34. Remote control of MagicQ
sidebar_position: 34
---

# Chapter 34. Remote control of MagicQ
<p>
    MagicQ supports the remote control of other MagicQ consoles and PC/Mac systems. Any MagicQ console or any MagicQ PC system can be
    controlled from any other MagicQ console or MagicQ PC system on the network. This enables complete remote management of any system from
    any other system. The remote system appears exactly as if it were running on the local system.
</p>
<p>Remote control over a VPN is supported subject to the VPN allowing UDP traffic on port 4910 and TCP traffic on port 4911.</p>
<p>
    Remote Control must be enabled on the console that is to be controlled – by default it is disabled. It can be enabled in Setup, View
    Settings, Multi Console settings, Enable Remote Control.
</p>
<div class="section">
    ## 34.1. MagicQ Remote Control (Windows/Mac/Linux)
    <p>
        When you install MagicQ on PC or Mac there is a MagicQ Remote Control option under the ChamSys menu that enables MagicQ to run
        solely in remote control mode.
    </p>
    <p>
        In remote control mode MagicQ acts only as a remote control system; it does not transmit any network traffic (such as lighting
        protocols, Art-Net, ACN, Pathport etc…) except for the control of the remote MagicQ system.
    </p>
    <p>
        When you start up MagicQ in remote mode it will scan for MagicQ consoles on the network and give a list of the available consoles to
        select from.
    </p>
    <p>
        In the list is "Specify IP" to enable connection to a specific IP in case MagicQ is unable to detect the console - e.g. when using a
        VPN.
    </p>
    <p>To stop remote control of a MagicQ console aned exit click on "Quit".</p>
    <p>To stop remote control of a MagicQ console and choose a different console press CTRL CLOSE.</p>
</div>
<div class="section">
    ## 34.2. Remote control from MagicQ
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/setupremotecontrol.png" alt="image" />
        </span>
    </p>
    <p>
        The remote control function can be accessed from MagicQ in Setup, View System, View Monitors. To control another MagicQ press the
        Remote Control soft button. MagicQ then presents a list of all the other MagicQ consoles / MagicQ PC systems it can find on the
        network and you can choose which one you wish to control.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/remotecontrolselectconsole.png" alt="image" />
        </span>
    </p>
    <p>
        If for any reason it cannot connect to the console you can abort the remote control by pressing the backspace ←- key, or by pressing
        CTRL CLOSE.
    </p>
    <p>
        You can tell which system you are controlling by looking at the system name in the Status Display (above PB1 to PB5). When MagicQ is
        remote controlling another console it indicates "REM" at the start of this status line.
    </p>
    <p>
        To end remote control of another system press CTRL 1 on the keyboard of the controlling system. Alternatively press QUIT or CTRL
        CLOSE on the controlling system. The status line will change back to be the normal line without "REM".
    </p>
    <p>
        When a remote system is under remote control it is still possible to control the system locally – the normal system interface is
        still fully operational. We recommend that you only use one interface at a time – having two operators will cause confusion!
    </p>
    <p>
        This function is only enabled when the target system (i.e. the one you wish to control) is a MagicQ console, or it is a MagicQ PC
        system with a MagicQ PC Wing or MagicQ USB interface attached. There are no restrictions on the MagicQ system that you use to
        control the remote system – for example, this can be MagicQ PC running on a wireless tablet.
    </p>
    <p>
        You can specify a particular IP address to connect to by entering the IP address in the command line before pressing REMOTE CONTROL
        or through the "Specify IP" option in the list of consoles.
    </p>
</div>
<div class="section">
    ## 34.3. iOS / Android Remote App
    <p>MagicQ systems can be used together with an Apple iPhone, iPad, iPod Touch or Android phone or tablet for remote control.</p>
    <p>
        All MagicQ consoles support remote control. On MagicQ PC systems remote control support is only unlocked when connected to a MagicQ
        Wing or MagicQ Interfaces (not MagicDMX).
    </p>
    <p>
        In order to use the remote with a MagicQ console, connect an external wireless access point to the console via network cable. Some
        consoles also have an inbuilt wireless access point which can be used instead or, when the app is simply being used as an additional
        screen the mobile device can be connected directly to the console via an ethernet adaptor.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/iosfocus.png" alt="image" />
        </span>
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/ioscol.png" alt="image" />
        </span>
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/iosexec.png" alt="image" />
        </span>
    </p>
    <p>
        The MagicQ Remote application can be downloaded free of charge from the Apple App Store. For Android it can be downloaded free of
        charge from the Google Play Store.
    </p>
    <p>
        To enable support for the remote application, go to Setup, View Settings, Multi Console, set
        <span class="emphasis"><em>Enable remote control</em></span>
        and
        <span class="emphasis"><em>Enable remote access</em></span>
        to "Enabled".
    </p>
    <div class="section">
        ### 34.3.1. Setting up an access point
        <p>
            In order to use a wireless access point with MagicQ you must configure the access point with an SSID, password, IP address and
            subnet mask.
        </p>
        <p>
            Most access points have an inbuilt web server that enables configuration from a PC or Mac using a web browser. The web server
            generally has a username and password - you will need to consult the instruction manual for your particular access point.
        </p>
        <p>
            Access points usually default to a standard IP addess such as 192.168.1.1 and subnet mask of 255.255.255.0. Most acess points
            have DHCP support - i.e. the access point will attempt to give out IP addresses to other computers on the network. DHCP may be
            enabled or disabled by default depending on the type of access point. Consult the manual for your access point to determine how
            to configure it.
        </p>
        <p>
            In order for the wireless access point to work correctly with MagicQ, the access point should be in the same IP address range as
            the MagicQ console / MagicQ PC/Mac.
        </p>
        <p>
            For example, if the console is set to IP address 2.0.0.5 then the access point should have an IP address on the 2.0.0.x network
            – e.g. 2.0.0.1. Note that many access points only support subnet masks of 255.255.255.0 instead of the normal Art-Net subnet
            mask 255.0.0.0. This can be overcome by simply making sure that all your devices are on the same subnet – i.e. all devices have
            a 2.0.0.x address.
        </p>
        <p>The remote device (iOS/Android) should also have an IP address in the same range.</p>
        <p>
            The access point can be set up with DHCP to provide a range of IP addresses to wireless devices - this removes the need to set
            the IP address manually on the remote device. For example, you could set up your wireless access point to give out IP addresses
            in the range 2.0.0.100 to 2.0.0.150.
        </p>
        <p>Security settings should be set up on your access point to avoid unauthorised control of the console.</p>
        <p>
            When using your own wireless access point the WIFI settings in MagicQ are not used - these are only for consoles with inbuilt
            wireless. Ensure that Setup, View Settings, WIFI,
            <span class="emphasis"><em>Wireless mode</em></span>
            is set to "Disabled".
        </p>
    </div>
    <div class="section">
        ### 34.3.2. Inbuilt wireless
        <p>These consoles have an inbuilt wireless access point:</p>
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">MQ50</li>
                <li class="listitem">MQ70)</li>
                <li class="listitem">MQ70 (original)</li>
                <li class="listitem">Pro 2010/2014 (optional extra via USB device)</li>
            </ul>
        </div>
        <p>Inbuilt wireless on Pro 2010/2014 consoles requires the Edimax EW-7711UAn USB device.</p>
        <p>
            For all other consoles, and on PC/Mac, you need your own wireless access point connected via the wired network port (see
            <span class="emphasis"><em>Setting up an access point</em></span>
            above).
        </p>
        <p>Inbuilt wireless can be configured in Setup, View Settings, WIFI:</p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/wifisetup.png" alt="image" />
            </span>
        </p>
        <p>
            <span class="emphasis"><em>Wireless mode</em></span>
            needs to be set to "Access Point" or "Access Point (Hidden SSID)".
        </p>
        <p>The rest of the settings can be left at their default values.</p>
        <p>
            See
            <a class="link" href="settings.html#_wifi_settings" title="50.16. WIFI Settings">WIFI Settings</a>
            for more information on the settings in this window.
        </p>
        <p>
            The IP address in the
            <span class="emphasis"><em>WIFI</em></span>
            tab should be in a different range from the IP address in the
            <span class="emphasis"><em>Network</em></span>
            tab.
        </p>
        <p>
            You can scan the QR code from the MagicQ Remote app or your device’s camera app to automatically connect to the wireless
            network, or you can connect manually (see below).
        </p>
        <div class="important">
            <table border="0" summary="Important">
                <tbody>
                    <tr>
                        <td rowspan="2" align="center" valign="top" width="25">
                            <img
                                alt="[Important]"
                                src="https://secure.chamsys.co.uk/help/documentation/magicq/images/icons/important.png" />
                        </td>
                        <th align="left"></th>
                    </tr>
                    <tr>
                        <td align="left" valign="top">
                            <p>
                                Pro2010/2014: MagicQ versions 1.5.4.0 to 1.5.6.0 had problems with the Edimx interface. 1.5.6.2 supports it
                                ok, but it is necessary to upgrade the kernel first to kernel version 3.9.2.0. Note that before updating the
                                kernel you must set the Wireless mode to None.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="section">
        ### 34.3.3. Connecting the remote app via ethernet
        <p>
            In environments where there are a large number of WiFi devices or other devices that may interfere with WiFi signals and when
            the remote app is being used next to the console (eg as an additional screen) it can be beneficial to connect via ethernet
            network cable rather than WiFi.
        </p>
        <p>
            To do this an ethernet adaptor is required for your mobile device. The ethernet adaptor plugs into the USB or Lightning port of
            your Android or Apple device and allows an ethernet cable to be connected (ensure that the adaptor you buy is suitable for your
            device).
        </p>
        <p>
            Most devices can be connected either via a network external to the console which provides DHCP or directly to the console by
            setting a static IP address.
        </p>
        <p>
            With an ethernet adaptor connected to an Apple device an
            <span class="emphasis"><em>Ethernet</em></span>
            menu option will appear in the device’s Settings menu and under this an item for
            <span class="emphasis"><em>Interfaces</em></span>
            . When connecting via an external network the LAN interface’s
            <span class="emphasis"><em>Configure IP</em></span>
            should be set to
            <span class="emphasis"><em>Automatic</em></span>
            . This will configure the network settings for you. When using an ethernet cable connected directly to the console
            <span class="emphasis"><em>Configure IP</em></span>
            should be set to
            <span class="emphasis"><em>Manual</em></span>
            .
        </p>
        <p>
            The location of Ethernet settings on Android devices varies depending on the device but on many devices an option,
            <span class="emphasis"><em>More connection settings</em></span>
            , is found under
            <span class="emphasis"><em>Connections</em></span>
            in the Settings app. Under this option is an item for
            <span class="emphasis"><em>Ethernet</em></span>
            which will be greyed out until the ethernet adaptor is connected. Under the
            <span class="emphasis"><em>Ethernet</em></span>
            option is an option,
            <span class="emphasis"><em>Configure Ethernet device</em></span>
            . When connecting via an external network the
            <span class="emphasis"><em>Connection type</em></span>
            under this should be set to
            <span class="emphasis"><em>DHCP</em></span>
            . This will configure the network settings for you. When using an ethernet cable connected directly to the console
            <span class="emphasis"><em>Connection type</em></span>
            should be set to
            <span class="emphasis"><em>Static IP</em></span>
            . To change settings the
            <span class="emphasis"><em>Ethernet</em></span>
            Option will need to be disabled and should be enabled once the changes have been made. Some Android devices do not allow a
            static IP to be set. If you still require to connect the device directly to the console then you can do so via the
            <a class="link" href="networking.html#control-network" title="32.13. Control network">Control Net</a>
            secondary network interface. This should be set to a mode with the DHCP server enabled.
        </p>
        <p>
            When using a
            <span class="emphasis"><em>Manual</em></span>
            or
            <span class="emphasis"><em>Static IP</em></span>
            connection the
            <span class="emphasis"><em>IP Address</em></span>
            should be set to be in the same range as the console (eg if the console has an IP address of 2.0.0.5 the IP address could be set
            to 2.0.0.7). The
            <span class="emphasis"><em>Subnet Mask</em></span>
            or
            <span class="emphasis"><em>Netmask</em></span>
            should be set to the same value as set on the console.
        </p>
        <p>To use an ethernet adaptor you may need to disable WiFi on the device.</p>
    </div>
    <div class="section">
        ### 34.3.4. Making a connection to MagicQ
        <p>In the case of inbuilt WiFi, you can scan the QR code in the WiFi settings tab using the MagicQ Remote app.</p>
        <p>If you are using your own access point you need to connect manually:</p>
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">
                    Turn on your mobile device and select the required wireless network to connect to - the network name (SSID) of your
                    access point.
                </li>
                <li class="listitem">
                    Check the WiFi settings for the remote device to ensure that it has automatically received a correct IP address. If it
                    has not, then enter a static IP address - this must be in the same range as the console IP address (when using your own
                    access point).
                </li>
                <li class="listitem">Open the MagicQ remote app.</li>
                <li class="listitem">
                    In the remote application, go to the
                    <span class="emphasis"><em>Con</em></span>
                    tab. You should see a list of all the available MagicQ consoles on the network. Select the required console so that it
                    has red border. If your console does not appear in the list Select
                    <span class="emphasis"><em>Manual IP</em></span>
                    and enter the IP address of the console.
                </li>
                <li class="listitem">
                    You should now have control. Change to the
                    <span class="emphasis"><em>Pos</em></span>
                    tab and try selecting a group.
                </li>
            </ul>
        </div>
        <p>
            If you are connecting via a VPN then you must specify the IP address of MagicQ in the Settings view of the app. The VPN must
            allow UDP traffic on port 4920.
        </p>
        <p>
            The
            <span class="emphasis"><em>Con</em></span>
            tab on MagicQ Remote has a green communication health bar. If this starts to turn red then packets are being missed and there is
            an issue with communication between MagicQ and MagicQ Remote. Check that the device that the app is running on is in range of
            the WiFi access point it is connected to. Communication will also be impacted by other devices either using WiFi or interfering
            with it.
        </p>
    </div>
    <div class="section">
        ### 34.3.5. Modifying palettes with the remote app
        <p>It is easy to modify palettes with the remote application.</p>
        <p>
            In the Focus tab (Key tab on iPad), select your heads (e.g. GROUP 1 ENTER) then select the position palette (e.g. POS 5 ENTER).
            If you cannot remember the numbers then change to the Windows tab and select the Pos, Colour or Beam Windows.
        </p>
        <p>
            In the Focus tab use the encoder wheels to modify the look on stage. On a small screen device like a phone use the Bank button
            to change the attributes controlled by the wheel. On a tablet or other large screen device you can press the Pos, Colour, Beam
            buttons.
        </p>
        <p>
            When you are happy with you look then record over the palette (e.g. REC POS 5 ENTER). MagicQ will ask for a confirmation. Press
            1 to confirm yes. Press 0 to cancel.
        </p>
    </div>
    <div class="section">
        ### 34.3.6. Using the Execute Window
        <p>
            We recommend you use the Execute Window on the remote app for shortcuts, group selections, focus test, etc… Items from the
            Group, Position, Colour, Beam, Cue Stack Store, Cue Store, Playback and Macro windows can all be copied into the Execute Window
            for immediate access from the remote device.
        </p>
        <p>
            On the MagicQ console press the Execute Window and then press SET GRID SIZE to create grid 1. We recommend a grid size 5/5 for
            the iPhone/Android phones. For iPad 10/10 or 12/12 is good.
        </p>
        <p>
            Copy items from the Group, Pos, Colour Beam windows into the Execute Window. You can copy multiple items in one go, by using
            SHIFT and the cursor keys in the source window to select multiple items. Press COPY. If it says "select source" then press COPY
            again. When it says "select destination" change to the Execute Window and select the place in the grid to copy to.
        </p>
        <p>
            This latest version allows the Execute Window images to be shown on your device as images instead of boxes. Custom button images
            will be automatically downloaded to the app from MagicQ.
        </p>
    </div>
    <div class="section">
        ### 34.3.7. Restricting Access (Execute Mode)
        <p>
            The app can be limited to only have access to the Execute Window by modifying the "Enable Remote App" setting in the user
            settings on MagicQ. (This mode was formally called Install Mode). Access can also limited to selected users. See
            <a class="link" href="system-management.html#restricting-remote" title="51.19. Restricting Remote App Access">
                the section on Restricting Remote App Access
            </a>
            for more information. A particular console IP address can also be specified in the app Settings View to ensure the app always
            connects to the correct console. The Execute Page number can also be specified in the Settings View.
        </p>
    </div>
    <div class="section">
        ### 34.3.8. In App Settings
        <p>The Settings View in the app has the following options:</p>
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">Username - The username required to access MagicQ.</li>
                <li class="listitem">Password - The password required to access MagicQ.</li>
                <li class="listitem">Execute Page # - The Execute page to display.</li>
                <li class="listitem">MagicQ IP Address - The IP address of the MagicQ device to connect to.</li>
                <li class="listitem">
                    Pos Pan/Tilt Invert - When enabled the direction of the Pan/Tilt wheels in the Position Window are inverted.
                </li>
                <li class="listitem">
                    Win Status Display - When enabled the MagicQ Status box is added to the bottom of the "Window" Window.
                </li>
                <li class="listitem">Win Match Columns - When enabled Window Views will match the number of columns used in MagicQ.</li>
                <li class="listitem">
                    Redownload Images - When enabled the custom images for the Execute Window are redownloaded from MagicQ overwriting any
                    existing ones.
                </li>
                <li class="listitem">
                    Execute Appearance - Allows the appearance of the Execute Window to be toggled between Boxes and Coloured buttons with
                    additional detail.
                </li>
                <li class="listitem">
                    Large Screen Mode - When enabled the Keyboard and Focus Windows are combined into a single view with additional
                    controls. This is enabled by default on large screen devices.
                </li>
                <li class="listitem">
                    Display Views on MagicQ - When enabled switching the Window View on the app will also display that view on MagicQ.
                </li>
                <li class="listitem">
                    Lock Orientation - (Android Only) When enabled the orientation of the app will not change when the device is rotated.
                </li>
                <li class="listitem">
                    Delete All Downloaded Images - When selected all Execute Window images downloaded from MagicQ are deleted from the app
                    device.
                </li>
            </ul>
        </div>
    </div>
    <div class="section">
        ### 34.3.9. In App Help
        <p>
            The top section of the Help View in the app displays the release notes and copyright notices for the app. Below this are the
            details of the version of the app and (if the device has an internet connection) the details of the latest available stable and
            beta version of MagicQ. Tapping the Stable version details will open the ChamSys MagicQ Downloads webpage.
        </p>
        <p>If the app is connected to MagicQ then the details of the version running are also displayed.</p>
        <p>At the bottom of the view are a grid of buttons:</p>
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">Open Manual - Opens the MagicQ Manual webpage.</li>
                <li class="listitem">Email Support - Opens a view with help information and a form to contact ChamSys Support.</li>
                <li class="listitem">Fixture Finder - Open the ChamSys Fixture Finder webpage.</li>
                <li class="listitem">Copyright Notices / Release Notes - Toggles the content of the top view.</li>
                <li class="listitem">Report Bug - Opens the ChamSys Bug Tracker to report a bug.</li>
                <li class="listitem">Join Beta Programme - Opens a form on the App Store to opt in to Beta versions of the app.</li>
            </ul>
        </div>
    </div>
    <div class="section">
        ### 34.3.10. Key &amp; Focus View
        <p>
            These two views can be combined into a single Focus view. This is the default on tablets and other large screen devices and can
            be toggled view the Large Screen Mode control in Settings.
        </p>
        <p>
            The Bank control allows selection of a bank of attributes for the Focus View encoders. Tapping the centre of the encoder allows
            the range to be selected. The Shift button on the combined view will act on the next control selected. If enabled on MagicQ
            Remote it will not affect a control selected on MagicQ. With Position attributes selected the Enc and Touch buttons will toggle
            between encoder and touch pad control. The arrow bars on either axis can be used to adjust the value on a single axis. With
            Colour attributes selected the Enc and Picker buttons will toggle between encoder and colour picker control.
        </p>
    </div>
    <div class="section">
        ### 34.3.11. Pos View
        <p>The Position View provides pan and tilt bars and a set of controls specific to positioning.</p>
    </div>
    <div class="section">
        ### 34.3.12. Exec View
        <p>
            The Execute Window replicates the window from MagicQ. Custom images will be downloaded from MagicQ. The page shown can be
            changed by assigning Exec Page, Exec Pg Up and Exec Pg Down special button or by setting the Execute Page # in Settings. From
            Settings the appearance of the window can also be toggled between Boxes and Coloured.
        </p>
    </div>
    <div class="section">
        ### 34.3.13. Win View
        <p>
            Select the window type and its sub view to display the view. Using the Photo button in the top bar a photo can be taken to
            assign to a button as its icon. The Win Status Display at the bottom of the view can be hidden view the Settings view.
        </p>
    </div>
</div>
<div class="section">
    ## 34.4. Remote control via web server
    <p>
        MagicQ includes an in-built web server for enabling access to MagicQ from web browsers on external computers, pocket PCs and mobile
        phones with web browsers. The web server includes web pages for monitoring of the status of the MagicQ, remote control, and access
        to the MagicQ windows such as the Patch window for downloading complete patch lists / cue sheets.
    </p>
    <p>
        By default the web server is disabled – enable it in Setup, Network Settings. The default port is 8080 although this can be changed
        in the Network Settings.
    </p>
    <p>
        To browse to the console enter the console name followed by the port number, e.g. for chamsys176, enter the URL in your browser.
        Note that by default most browsers use port 80 – so you must explicitly specify port 8080 in the URL or it will not work.
    </p>
    <p>chamsys176:8080</p>
    <p>or you can use the IP address of the MagicQ (e.g. 2.0.0..5)</p>
    <p>2.0.0.5:8080</p>
    <p>
        This URL will get you to the home page on the MagicQ console - a general system overview and a main menu of items, including Remote,
        Execute, Windows and Network.
    </p>
    <p>On some browsers / PDAs you may need to enter the full http line:</p>
    <p><a class="ulink" href="http://chamsys176:8080/index.html" target="_top">http://chamsys176:8080/index.html</a></p>
    <p>or</p>
    <p><a class="ulink" href="http://2.9.200.5:8080/index.html" target="_top">http://2.9.200.5:8080/index.html</a></p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/webbrowse.png" alt="image" />
        </span>
    </p>
    <p>
        The Remote page is a simple remote focus for setting channel levels. It can also be accessed by adding "/remote" to the URL. This is
        useful for Pocket PC and mobile phones to go directly to the remote control page.
    </p>
    <p>chamsys176:8080/remote</p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/remotekeypad.png" alt="image" />
        </span>
    </p>
    <p>
        In order to set up a PC, Pocket PC or mobile phone to connect to MagicQ you must ensure that there is a physical connection to
        MagicQ – either directly via network cable, or via a wireless router. The IP address of the PC, Pocket PC, or mobile phone must be
        set to be on the same network as the MagicQ – this is generally the Art-Net IP addressing scheme – so the device must have an IP
        address starting with 2 (e.g. 2.0.0.2) and a subnet mask of 255.0.0.0.
    </p>
    <p>
        The Execute page is very similar to the Execute Windows on the console but accessible through any PC with a browser on the network –
        it enables users to remote manage the console via the Execute window.
    </p>
    <p>
        The Windows pages enable users to view all the windows on the console remotely within a browser. This is useful for checking the
        status of a remote console or for easy printing of console show data.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/webserverpatch.png" alt="image" />
        </span>
    </p>
    <p>
        The Network page shows all the MagicQ consoles and PC systems on the networks and enables easy selection of particular consoles for
        remote control.
    </p>
    <p>
        The Remote and Execute functions are only enabled when connected to a MagicQ console or a MagicQ PC System that is itself connected
        to a MagicQ wing or MagicQ interface.
    </p>
    <div class="section">
        ### 34.4.1. Custom Web Server pages
        <p>
            There is now support for user HTML pages. These pages should be stored in the web folder and their name should start with "user"
            e.g. user1.html, user2.html. The MagicQ remote commands can be sent from the HTML using the button/input types to submit.
        </p>
        <pre class="programlisting">
&lt;html&gt;

&lt;head&gt;&lt;META NAME="HandheldFriendly" content="True"&gt;&lt;META
NAME="MobileOptimized" CONTENT="240"&gt;

&lt;title&gt;MagicQ User HTML Page&lt;/title&gt;

&lt;/head&gt;

&lt;body&gt;

&lt;!-- User forms must start with the name user - e.g. user1, user2 --&gt;
&lt;!-- Remote commands can be found in the MagicQ manual --&gt;

&lt;FORM ACTION="user.html" name="user" METHOD=GET&gt;

&lt;!-- Remote commands are sent using input types --&gt;
&lt;!-- Place the command in the value and set the name to "cmd" --&gt;

&lt;input type="submit" value="1T" name="cmd"&gt;
&lt;input type="submit" value="1U" name="cmd"&gt;
&lt;p&gt;
&lt;!-- Or as button types --&gt;
&lt;!-- Note for Internet Explorer to work the value
feature below is not used and you must put the remote
command in the name after "cmd" --&gt;

&lt;button type="submit" name="cmd1T" value="1T"&gt;PB1 act&lt;/button&gt;
&lt;button type="submit" name="cmd1U" value="1U"&gt;PB1 rel&lt;/button&gt;
</pre>
    </div>
</div>
<div class="section">
    ## 34.5. Remote control using Magic Wand simulator
    <p>MagicQ supports a Magic Wand simulator which acts like the MagicQ Playback Wand.</p>
    <p>
        To use the Magic Wand simulator start MagicQ with the command line argument "wand". MagicQ will run just a simulation of the Magic
        Wand controlling the first 4 playbacks from the first Wing.
    </p>
    <p>
        If you wish to restrict the Wand simulation to only connect to a specific IP address then include the required IP address as the
        second command line argument of the IP address.
    </p>
    <p>The MagicQ Wand simulator must be run on a separate system to the one running MagicQ.</p>
</div>
