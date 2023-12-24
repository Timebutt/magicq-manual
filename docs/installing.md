---
id: installing
title: Chapter 2. Installing MagicQ Software & Drivers
sidebar_position: 2
---

# Chapter&nbsp;2.&nbsp;Installing MagicQ Software &amp; Drivers
<div class="section">
    ## 2.1.&nbsp;MagicQ software
    <p>
        MagicQ software runs on PCs and Macs and can be downloaded free from the ChamSys web site
        <a class="ulink" href="https://secure.chamsys.co.uk/download" target="_top">www.chamsys.co.uk/download</a>
        .
    </p>
</div>
<div class="section">
    ## 2.2.&nbsp;MagicDMX
    <p>
        MagicDMX devices do NOT need any additional drivers – they use HID drivers within the operating system. Simply plug in the device
        and start MagicQ.
    </p>
    <p>
        To confirm that the MagicDMX is operating correctly go to Setup, View System, View status, Interfaces. The MagicDMX Status should
        say "Connected" and "DMX out".
    </p>
    <p>MagicDMX is enabled as DMX output by default. It can be disable/enabled from Setup, View Settings, Ports, MagicDMX.</p>
    <p>
        When first plugged in the MagicDMX alternates green and orange LEDs every second. When MagicQ is started and connects to the device
        then the green LED is on permanently and the orange flashes faster as it receives data from MagicQ.
    </p>
    <p>
        When using MagicDMX Basic and MagicDMX Full interfaces
        <span class="emphasis"><em>demo mode</em></span>
        will continue to be shown at the top of the MagicQ window. This does not affect the programming of MagicQ or restrict the output if
        you have a MagicDMX Full interface.
        <span class="emphasis"><em>Demo mode</em></span>
        does restrict some advanced MagicQ functions which are unlocked with MagicQ hardware (Not MagicDMX).
    </p>
</div>
<div class="section">
    ## 2.3.&nbsp;MagicQ Wings &amp; Interfaces
    <p>
        Current MagicQ Wings &amp; Interfaces including Stadium Connect, Compact Connect and Mini Connect and the older PC Wing Compact and
        Extra Wing Compact do not require special driver installation.
    </p>
    <p>Ensure the setting "Setup, View Settings, Ports, MagicQ Wings &amp; Interfaces" is set to "Yes (auto DMX)"</p>
    <p>
        Older MagicQ Wings (Mini wing, PC Wing, Maxi Wing, Extra Wing, Playback Wing, Execute Wing) and MagicQ DMX interfaces (Dual DMX,
        Audio, MIDI/SMPTE) use a USB chipset made by FTDI. PC Wing Compact &amp; Extra Wing Compact should not require any manual drive For
        other MagicQ Wings &amp; Interfaces or if for any reason MagicQ does not detect Compact wings, drivers can be manually updated using
        the steps below.
    </p>
    <p>
        Note that the drivers for MagicQ Wings and MagicQ DMX interfaces are not applicable to MagicDMX Basic or MagicDMX Full. Do not
        attempt to install drivers for MagicDMX.
    </p>
</div>
<div class="section">
    ## 2.4.&nbsp;MagicQ on Windows
    <p>MagicQ supports Windows 8, Windows 10 and Windows 11.</p>
    <p>MagicQ Connect products do not need any drivers installed.</p>
    <p>
        MagicDMX devices do not need any drivers - see
        <a class="xref" href="installing.html#_magicdmx" title="2.2.&nbsp;MagicDMX">Section&nbsp;2.2, “MagicDMX”</a>
        .
    </p>
    <p>MagicQ runs on all types of Windows PC including both Intel and ARM based Microsoft Surface.</p>
    <div class="section">
        ### 2.4.1.&nbsp;Drivers for older MagicQ products
        <p>The drivers for older MagicQ products are included in the MagicQ download.</p>
        <p><code class="literal">C:\Program Files (x86)\ChamSys Ltd\MagicQ\MagicQ Wing Drivers</code></p>
        <p>Disconnect all MagicQ Wings and Interfaces except the one you are trying to install the driver for.</p>
        <p>
            Open Device Manager. This is found in different places depending on the version of Windows, but it can normally be accessed by
            opening Control Panel and then selecting System, and then selecting Device Manager.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/windowssystem.png" alt="image" />
            </span>
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/windowsdevicemanager.png" alt="image" />
            </span>
        </p>
        <p>
            Device Manager lists all the devices on your system. The MagicQ device is normally listed at the bottom under Universal Serial
            Bus Controllers but it may be under any other section. It may be listed as a ChamSys or MagicQ device or just as a FTDI device.
            If you can not find it then try disconnecting and reconnecting the USB cable to the device - the listing should update and
            indicate to you which device is being plugged/unplugged.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/windowsdevicemanagerlist.png" alt="image" />
            </span>
        </p>
        <p>When you have identified the device then right click and press Update Driver.</p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/windowsupdatedriver.png" alt="image" />
            </span>
        </p>
        <p>
            Select "Browse My Computer for Driver Software (Locate and Install Driver Software Manually)". Do not let Windows search for a
            driver.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/windowsupdatedriver2.png" alt="image" />
            </span>
        </p>
        <p>Select the option "Let me pick from a list of device drivers on my computer".</p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/windowsupdatedriver3.png" alt="image" />
            </span>
        </p>
        <p>Select "Have Disk". If you cannot find "Have Disk" then click on items in the list until you get it.</p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/windowsupdatedriver4.png" alt="image" />
            </span>
        </p>
        <p>
            For PC Wing Compacts the drivers are in
            <code class="literal">
                C:\Program Files (x86)\ChamSys Ltd\Magicq\MagicQ Wing Drivers\PC Wing Compact\CDM 2.08.24 WHQL Certified\ftdibus.inf
            </code>
        </p>
        <p>PC Wing Compacts require MagicQ software version 1.5.8.0 or above.</p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/windowsupdatedriver6.png" alt="image" />
            </span>
        </p>
        <p>
            For all other products the drivers are in
            <code class="literal">C:\Program Files (x86) \ChamSys Ltd\Magicq\MagicQ Wing Drivers\FTDI\chamsys.inf</code>
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/windowsupdatedriver5.png" alt="image" />
            </span>
        </p>
        <p>
            If the MagicQ USB wing periodically disconnects and restarts then check the Windows settings for your USB ports - Windows may be
            shutting down the USB ports when it incorrectly thinks they are idle. Click on Control Panel, System, Device Manager and scroll
            to the bottom to get a list of the USB devices. For each USB Root Hub click on Properties, Power Management and make sure that
            the option "Allow the computer to turn off this device to save power" is NOT selected.
        </p>
        <p>
            On some Windows systems the Update Drivers dialog will not show the driver files even though they are correctly in the MagicQ
            Wing Drivers folder. In this case try copying the whole MagicQ Wing Drivers folder to the desktop (using Windows Explorer) and
            then try to update the drivers again.
        </p>
    </div>
    <div class="section">
        ### 2.4.2.&nbsp;User permissions on Windows
        <p>
            On new installs of MagicQ, show files are stored in
            <span class="strong">
                <strong><code class="literal">Documents/MagicQ/show/</code></strong>
            </span>
            in your home folder.
        </p>
        <p>If you have upgraded MagicQ from an old version, then your show files may instead be stored in one of the folling locations:</p>
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">
                    <code class="literal">C:\Users\username\AppData\Local\VirtualStore\Program Files\ChamSys Ltd\MagicQ PC\show</code>
                </li>
                <li class="listitem">
                    <code class="literal">C:\Program Files (x86)\ChamSys Ltd\MagicQ PC\show</code>
                </li>
            </ul>
        </div>
        <p>
            If MagicQ does not store settings after a restart - it forgets the number of universes, IP address or DMX I/O settings - then
            this is likely caused by Windows restricting write access to the folders where MagicQ stores this data. Check permissions.
        </p>
        <p>
            To check if permission settings are causing issues, try to run MagicQ as administrator. Right click on the MagicQ desktop icon
            and select
            <span class="emphasis"><em>run as administrator</em></span>
            from the options menu.
        </p>
        <div class="warning">
            <table border="0" summary="Warning">
                <tbody>
                    <tr>
                        <td rowspan="2" align="center" valign="top" width="25">
                            <img alt="[Warning]" src="https://secure.chamsys.co.uk/help/documentation/magicq/images/icons/warning.png" />
                        </td>
                        <th align="left"></th>
                    </tr>
                    <tr>
                        <td align="left" valign="top">
                            <p>
                                MagicQ should not be run as an administrator in normal operation - this is only recommneded as a
                                troubleshooting step. Complete functionality is available as a normal user.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>
            Windows controls the level of access to system folders through the User Account Control Settings. This can be found in Control
            Panel, User Accounts, Change User Account Control settings. Setting this to "Never Notify" will make Windows less restrictive.
            Note that for security reasons this is only recommended for stand alone systems dedicated to MagicQ which are not connected to
            the internet - please make sure you understand the implications for your computer, before changing this setting.
        </p>
    </div>
</div>
<div class="section">
    ## 2.5.&nbsp;MagicQ on Mac
    <p>MagicQ Supports macOS 10.12 and 10.13, 10.14, 10.15, 11 and 12.</p>
    <p>Note when using Apple M1 hardware ensure that MagicQ is installed via Rosetta.</p>
    <p>No driver installation is required for MagicQ wings and interfaces.</p>
    <p>On MagicQ v1.9.0.5 and older, wings and interfaces must be powered up and connected before MagicQ is started.</p>
    <p>
        On MagicQ v1.9.0.5 and older (except for PC Wing Compact and Extra Wing Compact), wings and interfaces require going to
        <span class="emphasis"><em>SETUP</em></span>
        →
        <span class="emphasis"><em>VIEW SETTINGS</em></span>
        →
        <span class="emphasis"><em>Ports</em></span>
        →
        <span class="emphasis"><em>MagicQ Wings &amp; Interfaces</em></span>
        and changing to
        <span class="strong"><strong>FTDI + VCP driver, auto DMX</strong></span>
        .
    </p>
    <p>
        MagicQ downloads for unsupported versions of macOS are available from the
        <a class="ulink" href="https://secure.chamsys.co.uk/bugtracker/download_legacy.php" target="_top">Legacy Downloads</a>
        page.
    </p>
    <div class="section">
        ### 2.5.1.&nbsp;Turning off App Nap
        <p>On all versions we recommend you disable Computer sleep and turn off App Nap to avoid MagicQ being shut down inadvertently.</p>
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">Quit MagicQ</li>
                <li class="listitem">
                    From the OSX Finder, navigate to the
                    <code class="literal">/Applications/MagicQ/</code>
                    folder
                </li>
                <li class="listitem">
                    Select MagicQ.app, then go to the "File" menu and select "Get Info" (or select the app and hit Command+i)
                </li>
                <li class="listitem">Check the box for "Prevent App Nap", found under the General section of Get Info</li>
            </ul>
        </div>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/macappnap.png" alt="image" />
            </span>
        </p>
    </div>
    <div class="section">
        ### 2.5.2.&nbsp;Making the MagicQ folder writeable
        <p>
            If you get the message "Cannot write file" when trying to save a show file, or your settings changes are not saved then check
            that the MagicQ folder and all its subfolders have both read and write permission.
        </p>
        <p>
            If you get a message starting with "MagicQ needs to write to the install folder…", you will need to check the permissions of the
            "MagicQ" folder. There are
            <a
                class="link"
                href="troubleshooting.html#mac_permissions"
                title='55.13.&nbsp;"MagicQ needs to write to the install folder…" message on Mac'>
                detailed steps
            </a>
            in the troubleshooting chapter.
        </p>
    </div>
</div>
<div class="section">
    ## 2.6.&nbsp;MagicQ on Linux
    <p>MagicQ can be installed on current Ubuntu LTS releases (14.04, 16.04 18.04 and 20.04) 64 bit.</p>
    <p>
        You can download MagicQ for Linux from the
        <a class="ulink" href="https://secure.chamsys.co.uk/bugtracker/download_magicq.php" target="_top">bugtracker</a>
        .
    </p>
    <p>
        Using older MagicQ wings and interfaces requires the ftdi_sio kernel driver which is included as standard on most Linux
        distributions.
    </p>
    <p>
        We cannot provide support for Linux specific issues; the best place to ask questions is on community forums and social media
        websites.
    </p>
    <div class="important">
        <table border="0" summary="Important">
            <tbody>
                <tr>
                    <td rowspan="2" align="center" valign="top" width="25">
                        <img alt="[Important]" src="https://secure.chamsys.co.uk/help/documentation/magicq/images/icons/important.png" />
                    </td>
                    <th align="left"></th>
                </tr>
                <tr>
                    <td align="left" valign="top">
                        <p>
                            MagicQ for Linux is only available for 64 bit AMD/Intel systems. We no longer provide downloads for 32 bit Linux
                            from version 1.8.0.3. MagicQ will not run on other architectures (e.g. ARM).
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="section">
        ### 2.6.1.&nbsp;Installing
        <p>To install the downloaded .deb file, run the following command in a terminal:</p>
        <pre class="literallayout">sudo dpkg -i magicq_ubuntu_vx_x_x_x.deb</pre>
        <p>Replacing the filename above the the name of the downloaded file.</p>
    </div>
    <div class="section">
        ### 2.6.2.&nbsp;High DPI screens
        <p>
            Automatic scaling for high resolution screens is disabled by default as with some screens it made the MagicQ user interface too
            big.
        </p>
        <p>
            From version 1.8.0.4 you can create a file called
            <code class="literal">.magicq_init.sh</code>
            in your home directory (
            <code class="literal">/home/USERNAME/.magicq_init.sh</code>
            ) and make sure it has executeble permissions.
        </p>
        <pre class="literallayout"># ~/.magicq_init.sh</pre>
        <pre class="literallayout">
# Uncomment the following line if you want MagicQ to try to scale automatically
#export QT_AUTO_SCREEN_SCALE_FACTOR=1
</pre>
        <pre class="literallayout">
# Uncomment and adjust the following line if you want to manually decide how to scale MagicQ
# You can specify a fractional number (e.g. specify 1.5 to make it 50% bigger)
#export QT_SCALE_FACTOR=1.0
</pre>
        <pre class="literallayout">
# If you have multiple screens that need different scaling, uncomment and set the following
# line to a semicolon-separated list of scale factors
#export QT_SCREEN_SCALE_FACTORS=1.5;1.0
</pre>
        <p>
            See
            <a class="ulink" href="https://doc.qt.io/qt-5/highdpi.html#high-dpi-support-in-qt" target="_top">
                https://doc.qt.io/qt-5/highdpi.html#high-dpi-support-in-qt
            </a>
            for more information on the environment variables in this file.
        </p>
    </div>
</div>
