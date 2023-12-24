---
id: upgrading
title: Chapter 52. Software & Firmware Upgrade
sidebar_position: 52
---

# Chapter&nbsp;52.&nbsp;Software &amp; Firmware Upgrade
<p>MagicQ software versions are fully compatible and show files can be created and loaded into any software version.</p>
<div class="section">
    ## 52.1.&nbsp;Changing MagicQ Console Software
    <p>
        MagicQ consoles store all versions of software that have been loaded onto the console allowing easy changing between different
        versions. To change software version go to Setup, View System, View Status, Change Software. It is also possible to enter the
        software utility by pressing ENTER during boot up when prompted to enter the software upgrade utility.
    </p>
    <p>
        To upgrade to a new version of software, download the software file from ChamSys web site and store it onto a USB stick (FAT32
        Formatted, up to 16GB).
    </p>
    <div class="informaltable">
        <table class="informaltable" cellpadding="4px">
            <colgroup>
                <col class="col_1" />
                <col class="col_2" />
            </colgroup>
            <tbody>
                <tr>
                    <td align="left" valign="top"><p>MQ50, MQ70, MQ250M</p></td>
                    <td align="left" valign="top"><p>.cdz</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top">
                        <p>MQ40*, MQ40N*, MQ60*, old MQ70*, MQ80, MQ500 Stadium, MQ500M Stadium, Pro 2014*, Expert 2014</p>
                    </td>
                    <td align="left" valign="top"><p>.cdc</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Pro 2010</p></td>
                    <td align="left" valign="top"><p>.cdx</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>pre Pro, Expert, rack mount</p></td>
                    <td align="left" valign="top"><p>.cde (versions 1.5.6.0 and above not supported)</p></td>
                </tr>
            </tbody>
        </table>
    </div>
    <p>
        Note that MQ40, MQ40N, MQ60, old MQ70 and Pro2014 consoles support software versions up to v1.9.3.7 only, they cannot be upgraded
        past this version.
    </p>
    <p>
        If you are downloading using a Mac then you need to be aware that OSX often creates additional files with an underscore "\_" at the
        start when it attempts to copy files to USB drives. For example, if you are copying magicq_v1_6_7_0.cdc to a USB drive it may also
        make a file ._magicq_v1_6_7_0cdc. At first glance this file looks the same, but it contains file information only and can not be
        loaded into a MagicQ console. It is easy to tell the files apart as the real MagicQ software file is around 100MB whereas the
        underscore file is only a few bytes. Make sure to use the file without the underscore at the start.
    </p>
    <p>
        Ensure you have saved your current show file to a USB memory stick or to an external computer via network before you change software
        version. Also, ensure any personalities that you have customised have been saved to a different file name of your choice - the new
        software will install the latest version of the standard personalities. We recommend you only upgrade to new versions of software
        when you have plenty of time to recover the system - we don’t recommend you change it two minutes before doors!
    </p>
    <p>
        On the MagicQ console select Setup, File Manager and change to USB DRIVE. Click on the software version, then confirm the update.
        The console then automatically upgrade the software.
    </p>
    <p>
        It is also possible to copy the software directly via networking to the magicq folder on the MagicQ console and then to click on the
        file in File Manager, HARD DRIVE.
    </p>
    <p>
        In case of a problem where MagicQ can not be started or where it resets then the software upgrade utility can be entered on start
        up, by pressing a key when prompted on the screen.
    </p>
</div>
<div class="section">
    ## 52.2.&nbsp;Console Kernel Update
    <p>
        It is not normally necessary to update the kernel version on MagicQ consoles. Below contains Kernel update instructions for specific
        MagicQ consoles.
    </p>
</div>
<div class="section">
    ## 52.3.&nbsp;MQ80 Kernel v2 upgrade
    <p>This is recommended if using USB ethernet or USB audio devices.</p>
    <p>Download this CDC file:</p>
    <p>
        <a class="ulink" href="https://secure.chamsys.co.uk/bugtracker/download_file.php?file_id=209&amp;type=doc" target="_top">
            https://secure.chamsys.co.uk/bugtracker/download_file.php?file_id=209&amp;type=doc
        </a>
    </p>
    <p>
        Copy to a USB stick and install on the console, by going to Setup, View Settings, File Manager, USB Drive and selecting the file.
        The console will restart when completed successfully.
    </p>
    <p>
        Go to
        <span class="emphasis"><em>SETUP</em></span>
        →
        <span class="emphasis"><em>VEW SYSTEM</em></span>
        →
        <span class="emphasis"><em>VIEW STATUS</em></span>
        →
        <span class="emphasis"><em>System</em></span>
    </p>
    <p>
        <span class="strong"><strong>Kernel version</strong></span>
        should contain
        <span class="strong"><strong>4.4.261</strong></span>
        .
    </p>
</div>
<div class="section">
    ## 52.4.&nbsp;Resetting a MagicQ console to factory defaults
    <p>The console software upgrade utility has two other functions - reset to factory defaults and erase console.</p>
    <p>
        "Reset to factory defaults" changes settings back to factory settings but does not erase any user data. It is recommended that the
        current show is saved to a known file name before carrying out a factory reset. As a consequence of the reset to factory defaults,
        the console will reload the default show.
    </p>
    <p>
        "Erase console" erases all user data and reloads the newest software on the system. All show data, custom personalities, and
        settings will be erased. Ensure all user data is saved before carrying out this action.
    </p>
    <p>
        To carry out the above functions on MagicQ consoles enter the software upgrade utility by going to: -Setup, View System, View
        Status, Change software. -Select yes to enter the software utility. -Once in the software utility follow on screen instructions for
        "Factory Reset" or "Erase All"
    </p>
    <p>For "Factory reset" enter *999 followed by Enter.</p>
    <p>For "Erase All" enter *777 followed by Enter and 1 followed by Enter to confirm.</p>
    <p>
        Note once the Erase all is carried out user data e.g. show files cannot by recovered later. You must back these up if needed before
        carrying out the "Erase all".
    </p>
</div>
<div class="section">
    ## 52.5.&nbsp;Firmware
    <p>
        Each panel and interface on a MagicQ console and MagicQ wing runs separate firmware files, separate from the main MagicQ software.
    </p>
    <p>It is not normally necessary to update firmware on consoles and PC Wings / Interfaces, unless advised by ChamSys support.</p>
    <p>The latest firmware files are included in the latest MagicQ software release in the firmware folder.</p>
    <p>
        In MagicQ, the currently installed firmware for each panel / interface can be viewed in the Hardware tab in Setup, View System, View
        Status. If there is newer firmware available for an interface it will indicate there is a newer version available.
    </p>
    <p>
        To upgrade a panel / interface to the latest firmware version place the cursor on the item and press the LATEST FIRMWARE soft
        button.
    </p>
    <p>A listing of the latest firmware version for each product can also be found in the firmware change log in the section below.</p>
</div>
<div class="section">
    ## 52.6.&nbsp;MQ50, MQ70 and MQ80 front panel firmware
    <p>
        MQ50, MQ70 and MQ80 Consoles all share the same front panel firmware. The firmware file name for these products starts CH346. The
        firmware is also used for the MQ250M display controller and MQ500 and MQ500M MIDI interfaces.
    </p>
    <p>
        For the original MQ50 and MQ70 (sold in 2015 or before) see Upgrading original Compact series as these do not use CH346 firmware for
        the above products.
    </p>
    <p>The latest firmware is included with each MagicQ software release in the firmware folder under the name CH346_xxx.hex.</p>
    <p>
        To check the version of firmware in use go to Setup, View System, View Status and select the Hardware tab. The Programmer panel row
        will show the current firmware.
    </p>
    <p>To upgrade to latest firmware put the cursor on the Programmer panel row and press LATEST FIRMWARE.</p>
    <div class="section">
        ### 52.6.1.&nbsp;Pre v1.9.5.3 software
        <p>
            We recommend to upgrade the console software to the latest stable (which should be v1.8.9.0 or a higher version) before
            upgrading front panel firmware on these products.
        </p>
        <p>
            To check the version of firmware in use go to Setup, View System, View Status and select the USB Links tab. The software version
            is shown as the 7th number in the list of parameters as shown in the image below. The complete list of parameters is:
        </p>
        <p>
            &lt;link drops&gt; &lt;time link has been up&gt; &lt;tx packets&gt; &lt;rx packets&gt; &lt;tx errors&gt; &lt;tx retries&gt;
            &lt;sw version&gt; &lt;hw version&gt; &lt;build number&gt;
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/mq80_firmware.png" alt="image" />
            </span>
        </p>
        <p>
            Some MagicQ installers will not include every version of the CH346 firmware, however a higher version will include fixes and
            features of a lower version. i.e. CH346 V1.25 will include all fixes and features of the lower versions.
        </p>
        <p>Note that versions equal to or above V1.20 can be installed on MQ80, MQ70 and MQ50.</p>
        <p>
            Note, some early MQ80s had pre-production firmware versions left in the firmware folder. These can be identified as versions
            prior to CH324_V0.25.hex or with a name such as CH342_V80.69. Do not select these versions - these were pre-production firmware
            versions and are not compatible with the MagicQ software. They should be deleted from the firmware folder.
        </p>
    </div>
</div>
<div class="section">
    ## 52.7.&nbsp;MQ250M Stadium firmware
    <p>The MQ250M Stadium console has four boards that firmware can be user updated.</p>
    <div class="informaltable">
        <table class="informaltable" cellpadding="4px">
            <colgroup>
                <col class="col_1" />
                <col class="col_2" />
            </colgroup>
            <tbody>
                <tr>
                    <td align="left" valign="top"><p>Programmer panel</p></td>
                    <td align="left" valign="top"><p>Firmware 310-025_VX.YZ.hex via SPr USB link</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Playback panel</p></td>
                    <td align="left" valign="top"><p>Firmware 310-022_VX.YZ.hex via SPb USB link</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Motor board</p></td>
                    <td align="left" valign="top"><p>Firmware 310-021-VX.YZ.hex via SPb USB link</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Display controller</p></td>
                    <td align="left" valign="top"><p>Firmware CH346_X.YZ.hex via S2Dsp USB link</p></td>
                </tr>
            </tbody>
        </table>
    </div>
    <p>
        Note that the playback panel and the motor board use the same USB link - the motor board is itself connected to the playback panel.
        When upgrading the playback panel passes the motor firmware onto the motor board.
    </p>
    <p>Where date is the date, e.g. CH355A_2017_05_23.hex and X.YZ is version number e.g. CH346_V0.33.hex.</p>
    <p>The below image shows the firmware versions for each board highlighted.</p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/mq250m_firmware.png" alt="image" />
        </span>
    </p>
    <p>
        To check the version of firmware in use go to Setup, View System, View Status and select the Hardware tab. For each panel/board it
        shows current version, available highest firmware version and current update status.
    </p>
    <p>
        It is possible to see more details in the USB links tab - the software version is shown as the 7th number in the list of parameters.
        The complete list of parameters is:
    </p>
    <p>
        &lt;link drops&gt; &lt;time link has been up&gt; &lt;tx packets&gt; &lt;rx packets&gt; &lt;tx errors&gt; &lt;tx retries&gt; &lt;sw
        version&gt; &lt;hw version&gt; &lt;build number&gt;
    </p>
    <p>The latest firmware versions for each board can be found in the firmware change log in the section below.</p>
</div>
<div class="section">
    ## 52.8.&nbsp;MQ500 Stadium firmware
    <p>The MQ500 Stadium console has four boards where the firmware can be user updated.</p>
    <div class="informaltable">
        <table class="informaltable" cellpadding="4px">
            <colgroup>
                <col class="col_1" />
                <col class="col_2" />
            </colgroup>
            <tbody>
                <tr>
                    <td align="left" valign="top"><p>Programmer panel</p></td>
                    <td align="left" valign="top"><p>Firmware CH355A_date.hex via SPr USB link</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Playback panel</p></td>
                    <td align="left" valign="top"><p>Firmware CH355B_date.hex via SPb USB link</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>MIDI controller</p></td>
                    <td align="left" valign="top"><p>Firmware CH346_VX.YZ.hex via Smidi USB link</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Display controller</p></td>
                    <td align="left" valign="top">
                        <p>
                            SDsp USB link not user upgradeable. V2 of the controller board can use Firmware CH346_VX.YZ.hex via S5Dsp USB
                            link
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <p>Where date is the date, e.g. CH355A_2017_05_23.hex and X.YZ is version number e.g. CH346_V0.33.hex.</p>
    <p>
        To check the version of firmware in use go to Setup, View System, View Status and select the Hardware tab. For each panel/board it
        shows current version, available highest firmware version and current update status.
    </p>
    <p>
        It is possible to see more details in the USB links tab - the software version is shown as the 7th number in the list of parameters.
        The complete list of parameters is:
    </p>
    <p>
        &lt;link drops&gt; &lt;time link has been up&gt; &lt;tx packets&gt; &lt;rx packets&gt; &lt;tx errors&gt; &lt;tx retries&gt; &lt;sw
        version&gt; &lt;hw version&gt; &lt;build number&gt;
    </p>
    <p>The below image shows the firmware versions with each board highlighted.</p>
    <p>
        Note the SDMX USB link is for the DMX Card which is not user upgradable and users should not attempt to firmware update this card.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/mq500_firmware.png" alt="image" />
        </span>
    </p>
    <p>The latest firmware versions for each board can be found in the firmware change log in the section below.</p>
</div>
<div class="section">
    ## 52.9.&nbsp;MQ500M Stadium firmware
    <p>The MQ500M Stadium console has the following boards:</p>
    <div class="informaltable">
        <table class="informaltable" cellpadding="4px">
            <colgroup>
                <col class="col_1" />
                <col class="col_2" />
            </colgroup>
            <tbody>
                <tr>
                    <td align="left" valign="top"><p>Programmer panel</p></td>
                    <td align="left" valign="top"><p>Firmware 310-023_VX.YZ.hex via SPr USB link</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Playback panel</p></td>
                    <td align="left" valign="top"><p>Firmware 310-022_VX.YZ.hex via SPb USB link</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Motor board</p></td>
                    <td align="left" valign="top"><p>Firmware 310-021-VX.YZ.hex via SPb USB link</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>MIDI controller</p></td>
                    <td align="left" valign="top"><p>Firmware CH346_VX.YZ.hex via Smidi USB link</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Display controller</p></td>
                    <td align="left" valign="top">
                        <p>
                            SDsp USB link not user upgradeable. V2 of the controller board can use Firmware CH346_VX.YZ.hex via S5Dsp USB
                            link
                        </p>
                    </td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Hub controller</p></td>
                    <td align="left" valign="top"><p>SHub USB link not user upgradable</p></td>
                </tr>
            </tbody>
        </table>
    </div>
    <p>
        Note that the playback panel and the motor board use the same USB link - the motor board is itself connected to the playback panel.
        When upgrading the playback panel passes the motor firmware onto the motor board.
    </p>
    <p>Where date is the date, e.g. CH355A_2017_05_23.hex and X.YZ is version number e.g. CH346_V0.33.hex.</p>
    <p>
        The below image shows the firmware versions for each board highlighted. Note the SDMX USB link is for the DMX Card which is not user
        upgradable and users should not attempt to firmware update this card.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/mq500_firmware.png" alt="image" />
        </span>
    </p>
    <p>
        To check the version of firmware in use go to Setup, View System, View Status and select the Hardware tab. For each panel/board it
        shows current version, available highest firmware version and current update status.
    </p>
    <p>
        It is possible to see more details in the USB links tab - the software version is shown as the 7th number in the list of parameters.
        The complete list of parameters is:
    </p>
    <p>
        &lt;link drops&gt; &lt;time link has been up&gt; &lt;tx packets&gt; &lt;rx packets&gt; &lt;tx errors&gt; &lt;tx retries&gt; &lt;sw
        version&gt; &lt;hw version&gt; &lt;build number&gt;
    </p>
    <p>The latest firmware versions for each board can be found in the firmware change log in the section below.</p>
</div>
<div class="section">
    ## 52.10.&nbsp;MQ500M Wing firmware
    <p>The MQ500M Wing has the following boards:</p>
    <div class="informaltable">
        <table class="informaltable" cellpadding="4px">
            <colgroup>
                <col class="col_1" />
                <col class="col_2" />
            </colgroup>
            <tbody>
                <tr>
                    <td align="left" valign="top"><p>Playback panel</p></td>
                    <td align="left" valign="top"><p>Firmware 310-022_VX.YZ.hex via SWPb USB link</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Motor board</p></td>
                    <td align="left" valign="top"><p>Firmware 310-021-VX.YZ.hex via SWPb USB link</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Hub controller</p></td>
                    <td align="left" valign="top"><p>SWHub USB link not user upgradable</p></td>
                </tr>
            </tbody>
        </table>
    </div>
    <p>
        Follow the same procedure as for the MQ500M console above except using the Stadium Playback, Stadium Wing base card and Stadium Wing
        motor links.
    </p>
    <p>The latest firmware versions for each board can be found in the firmware change log in the section below.</p>
</div>
<div class="section">
    ## 52.11.&nbsp;Compact &amp; Mini Connect firmware
    <p>The Compact Connect used 310-028 Firmware and Mini Connect uses 310-033 firmware.</p>
    <p>
        Latest firmware for these products is included with MagicQ PC and firmware is updated via MagicQ in the same way as updating
        firmware for MagicQ Consoles
    </p>
</div>
<div class="section">
    ## 52.12.&nbsp;Firmware Change Log
    <div class="section">
        ### 52.12.1.&nbsp;CH346 Firmware (MQ50, MQ70, MQ80, MQ500(M) Midi Card, MQ500(M) V2 Display Controller and MQ250M Display
        controller)
        <div class="informaltable">
            <table class="informaltable" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                </colgroup>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>CH346_V0.25</p></td>
                        <td align="left" valign="top"><p>Original Production firmware for MQ80</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>CH346_V0.32</p></td>
                        <td align="left" valign="top">
                            <p>
                                Improvements to DMX, MIDI, LTC and faders. Upgrade to this version if you are seeing periodic DMX flicks
                                with some fixtures such as SGM P5. Upgrade to this version if you wish to use MIDI or LTC inputs.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>CH346_V0.33</p></td>
                        <td align="left" valign="top"><p>Fix for display not recovering from screen save</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>CH346_V0.35</p></td>
                        <td align="left" valign="top"><p>No Changes - used for Production</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>CH346_V1.00</p></td>
                        <td align="left" valign="top"><p>Support for RDM on the four DMX ports</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>CH346_V1.01</p></td>
                        <td align="left" valign="top">
                            <p>Fixes an RDM issue where the DMX port does not reset correctly after a RDM discovery collision.</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>CH346_V1.20</p></td>
                        <td align="left" valign="top"><p>Initial Support of MQ70 and MQ50 (2019).</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>CH346_V1.22</p></td>
                        <td align="left" valign="top"><p>Added Fader and Encoder brightness adjustment for the MQ70.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>CH346_V1.23</p></td>
                        <td align="left" valign="top">
                            <p>Fixed DMX output stopping when MQ Direct is selected for less than 4 ports.</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>CH346_V1.24</p></td>
                        <td align="left" valign="top">
                            <p>Fixes Midi show control and Midi System Exclusive messages for the MQ500 Midi Card.</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>CH346_V1.25</p></td>
                        <td align="left" valign="top">
                            <p>
                                Fixes Midi issues for MQ80 consoles, the Midi communication issue was introduced in versions greater than
                                and equal to V1.00.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>CH346_V1.30</p></td>
                        <td align="left" valign="top">
                            <p>
                                Fixes direct RDM Break and MaB (MQ80/MQ70/MQ50). Fixed RDM discovery times to help find large number nodes
                                (MQ80/MQ70/MQ50). Fixed front panel drop outs when MagicQ is doing time consuming tasks
                                (MQ80/MQ70/MQ50/MQ500 Midi). Updates to low level USB driver code from a third party (MQ80/MQ70/MQ50/MQ500
                                Midi).
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>CH346_V1.40</p></td>
                        <td align="left" valign="top"><p>MQ250M display PCB code added.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>CH346_V1.41</p></td>
                        <td align="left" valign="top"><p>MQ250M tilt sensor function added.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>CH346_V1.42</p></td>
                        <td align="left" valign="top"><p>DMX USB message alignment fix.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>CH346_V1.43</p></td>
                        <td align="left" valign="top"><p>Fix for intermittent firmware update failure.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>CH346_V1.45</p></td>
                        <td align="left" valign="top">
                            <p>
                                Added support for V2 MQ500(M) Display Controller, and HW revision 3 of MQ250M Display Controller. These
                                require MagicQ 1.9.2.4 and above.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>CH346_V1.46</p></td>
                        <td align="left" valign="top">
                            <p>Fixed the self test on the HW revision 3 of the MQ250M Display controller not starting.</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>CH346_V1.47</p></td>
                        <td align="left" valign="top">
                            <p>Fixed issue with MQ250 Displays not turning on sometimes when lid is opened.</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>CH346_V1.48</p></td>
                        <td align="left" valign="top">
                            <p>Updated MQ250 startup sequence to blank the smaller screen until MagicQ starts.</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>CH346_V1.49</p></td>
                        <td align="left" valign="top"><p>Updated MQ250 display board firmware to match tilt sensor hardware change.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>CH346_V1.50</p></td>
                        <td align="left" valign="top">
                            <p>Updated MQ250+MQ500 display board firmware to turn off the backlight until MagicQ starts.</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>CH346_V1.52</p></td>
                        <td align="left" valign="top"><p>Rebuild for compiler change.</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="section">
        ### 52.12.2.&nbsp;CH310-021 Firmware (MQ250M &amp; MQ500M Motor board)
        <div class="informaltable">
            <table class="informaltable" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                </colgroup>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>310-021_V0.10</p></td>
                        <td align="left" valign="top"><p>Initial release.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-021_V0.11</p></td>
                        <td align="left" valign="top">
                            <p>
                                Adds support of 12-bit moves to support cross fader tracking, needs 310-022_V0.07 or greater on the Playback
                                board.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-021_V0.13</p></td>
                        <td align="left" valign="top">
                            <p>
                                Adds explicit reset for the capacitive touch sense on the faders in cases where the console has failed
                                calibration due to faders being touched on startup.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-021_V0.14</p></td>
                        <td align="left" valign="top"><p>Improved fader positioning if fader belt contains more slack.</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="section">
        ### 52.12.3.&nbsp;CH310-022 Firmware (MQ250M &amp; MQ500M Playback Panel)
        <div class="informaltable">
            <table class="informaltable" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                </colgroup>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>310-022_V0.05</p></td>
                        <td align="left" valign="top"><p>Initial release.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-022_V0.07</p></td>
                        <td align="left" valign="top">
                            <p>
                                Fixed Motor stats filling up MagicQ USB RX buffer. Adds support of 12-bit cross fader moves for cross fader
                                tracking, needs 310-021_V0.11 or greater on the motor control board.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-022_V0.08</p></td>
                        <td align="left" valign="top"><p>Fixed drop outs when MagicQ is doing time consuming tasks.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-022_V0.09</p></td>
                        <td align="left" valign="top"><p>MQ250M Fader control added.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-022_V0.10</p></td>
                        <td align="left" valign="top"><p>WinUSB USB descriptors added.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-022_V0.11</p></td>
                        <td align="left" valign="top"><p>USB timeout fix.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-022_V0.12</p></td>
                        <td align="left" valign="top"><p>Fix for intermittent firmware update failure.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-022_V0.15</p></td>
                        <td align="left" valign="top"><p>Made changes to LED production tests. MagicQ v1.9.3.0</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-022_V0.17</p></td>
                        <td align="left" valign="top"><p>Made changes to LED production tests. (dim down leds etc)</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-022_V0.19</p></td>
                        <td align="left" valign="top"><p>Rebuild for compiler changed.</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="section">
        ### 52.12.4.&nbsp;CH310-023 Firmware (MQ500M Programmer Panel)
        <div class="informaltable">
            <table class="informaltable" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                </colgroup>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>310-023_V0.03</p></td>
                        <td align="left" valign="top"><p>Initial release.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-023_V0.05</p></td>
                        <td align="left" valign="top"><p>Fixed drop outs when MagicQ is doing time consuming tasks.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-023_V0.06</p></td>
                        <td align="left" valign="top"><p>WinUSB USB descriptors added.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-023_V0.07</p></td>
                        <td align="left" valign="top"><p>USB timeout fix.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-023_V0.08</p></td>
                        <td align="left" valign="top"><p>Fix for intermittent firmware update failure.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-023_V0.11</p></td>
                        <td align="left" valign="top"><p>Made changes to LED production tests. (dim down leds etc)</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-023_V0.13</p></td>
                        <td align="left" valign="top"><p>Rebuild for compiler change.</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="section">
        ### 52.12.5.&nbsp;CH310-025 Firmware (MQ250M Programmer Panel)
        <div class="informaltable">
            <table class="informaltable" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                </colgroup>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>310-025_V0.04</p></td>
                        <td align="left" valign="top"><p>Initial release.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-025_V0.07</p></td>
                        <td align="left" valign="top"><p>Made changes to LED production tests. (dim down leds etc)</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-025_V0.10</p></td>
                        <td align="left" valign="top"><p>Rebuild for compiler change.</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="section">
        ### 52.12.6.&nbsp;CH310-028 Firmware (Compact Connect)
        <div class="informaltable">
            <table class="informaltable" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                </colgroup>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>310-028_V1.01</p></td>
                        <td align="left" valign="top"><p>Initial release.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-028_V1.03</p></td>
                        <td align="left" valign="top">
                            <p>Resolved an issue with the keyboard locking up after a long period of time.</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-028_V1.04</p></td>
                        <td align="left" valign="top"><p>Fix for fader levels changing without moving faders.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-028_V1.05</p></td>
                        <td align="left" valign="top"><p>Fix for Compact Connect locking up when Flash toggles was enabled</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="section">
        ### 52.12.7.&nbsp;CH310-033 Firmware (Mini Connect)
        <div class="informaltable">
            <table class="informaltable" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                </colgroup>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>310-033_V1.01</p></td>
                        <td align="left" valign="top"><p>Initial release.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-033_V1.03</p></td>
                        <td align="left" valign="top">
                            <p>Resolved an issue with the keyboard locking up after a long period of time.</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-033_V1.04</p></td>
                        <td align="left" valign="top"><p>Fix for fader levels changing without moving faders.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>310-028_V1.05</p></td>
                        <td align="left" valign="top"><p>Fix for Compact Connect locking up when Flash toggles was enabled</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
<div class="section">
    ## 52.13.&nbsp;Updating Firmware
    <div class="section">
        ### 52.13.1.&nbsp;Upgrading to latest firmware
        <p>The Hardware tab in Setup, View System, View Status shows available firmware versions and current update status.</p>
        <p>
            The LATEST FIRMWARE menu option enables a hardware item to be updated to the latest hardware version without manually selecting
            the file. Move the cursor to the required row and press LATEST FIRMWARE.
        </p>
        <p>
            It is possible to press SHIFT and ALL FIRMWARE to upgrade all boards to the latest available firmware. A dialog gives the option
            to force upgrade all boards, or to only upgrade boards that are at lower firmware versions.
        </p>
        <p>
            Each board is upgraded in turn - the current board being upgraded shows as "upgrading" and the others show as "queued".
            Sometimes it may be needed to run ALL FIRMWARE twice to ensure all boards get upgraded.
        </p>
        <p>
            It is also possible to automatically change firmware direct from USB stick / firmware files copied to the console. In File
            Manager click on the file and a dialog will appear to ask whether to update all boards that use that firmware type.
        </p>
    </div>
    <div class="section">
        ### 52.13.2.&nbsp;Manual firmware update
        <p>Before updating firmware disconnect any Wings and USB interfaces &amp; drives from the console.</p>
        <p>Press Setup, View System, View Status and change to the USB Links tab.</p>
        <p>
            Put the cursor on the line for USB link to be updated. Press the CHANGE FIRMWARE top soft button and select the new firmware
            file - e.g. CH346_V1.43.hex.
        </p>
        <p>MagicQ will report "Starting firmware upgrade" then "Sent start upgrade".</p>
        <p>
            Do not touch anything or power off the console whilst the update is in progress – interrupting the upgrade could leave the
            Console in an unusable state and it will have to be returned to ChamSys for repair.
        </p>
        <p>
            MagicQ will then display "Sent firmware 1000", "Sent firmware 2000" and so on, the front Panel playback LEDs will also light in
            sequence to show the firmware update progress.
        </p>
        <p>The console will report "Sent all firmware" and "Programmed Ok" once firmware has been updated.</p>
        <p>
            Should the upgrade timeout or fail for the motor board the string "Boot" will appear after SMotor in the USB link, this
            indicates it is in boot-loader mode. A retry of the firmware upgrade should rectify this.
        </p>
    </div>
</div>
<div class="section">
    ## 52.14.&nbsp;Upgrading Legacy product firmware
    <div class="section">
        ### 52.14.1.&nbsp;Original Compact series MQ40/MQ40N/MQ60/MQ70 firmware
        <p>
            To check the version of firmware in use go to Setup, View System, View Status and select the USB Links tab. The software version
            is shown as the 7th number in the list of parameters. The complete list of parameters is:
        </p>
        <p>
            &lt;link drops&gt; &lt;time link has been up&gt; &lt;tx packets&gt; &lt;rx packets&gt; &lt;tx errors&gt; &lt;tx retries&gt;
            &lt;sw version&gt; &lt;hw version&gt; &lt;build number&gt;
        </p>
        <p>Alternatively check the front panel version field in Setup, View System, View Status, System tab.</p>
        <p>
            To upgrade the MQ40/40N/60/70 front panel firmware you must first be running a software version higher then v1.5.9.9 MagicQ
            software on the console. Do NOT use versions v1.7.0.1 to v1.7.0.4. Upgrade software to v1.7.1.0 or higher first.
        </p>
        <p>
            Some consoles have front panel firmware have a file version 2.0 in the firmware folder. Do NOT use this version. Only use
            version 1.0, 1.1 or 1.2.
        </p>
        <p>
            Failure to update to a valid version before performing the firmware upgrade could result in the console needing to be returned
            to ChamSys for repair. The latest MQ40/40N/60/70 firmware is included with each release in the firmware folder under the name
            CH331_xxx.hex
        </p>
        <div class="informaltable">
            <table class="informaltable" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                </colgroup>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>CH331_V0</p></td>
                        <td align="left" valign="top"><p>Original firmware</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>CH331_V1.0</p></td>
                        <td align="left" valign="top"><p>Added audio support</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>CH331_V1.1</p></td>
                        <td align="left" valign="top"><p>Added MIDI and LTC timecode support (MQ70 only - not for MQ40/60)</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>CH331_V1.2</p></td>
                        <td align="left" valign="top"><p>Fixed RS232 serial port communications</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>Disconnect any Wings and network devices and remove any USB drives from the console.</p>
        <p>
            Press Setup, View System, View Status and change to the USB Links tab. If more than one USB device is shown then disconnect all
            other MagicQ Wings and interfaces.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/mq60upgrade.png" alt="image" />
            </span>
        </p>
        <p>Put the cursor on the line for USB 1 as above. Press CHANGE FIRMWARE and select the new firmware file - e.g. CH331_V1.0.hex.</p>
        <p>MagicQ should then say "Starting firmware upgrade" and then a few seconds later "Sent start upgrade".</p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/mq60upgrade2.png" alt="image" />
            </span>
        </p>
        <p>
            Do not touch anything or power off whilst the update is in progress – interrupting the upgrade will leave the Console in an
            unusable state and it will have to be returned to ChamSys for repair.
        </p>
        <p>
            MagicQ will then wait between 5 and 10 seconds and then display messages "Sent firmware 1000", "Sent firmware 2000" and so on up
            to about "Sent firmware 76000".
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/mq60upgrade3.png" alt="image" />
            </span>
        </p>
        <p>It will then briefly say "Sent all firmware" and "Programmed Ok".</p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/mq60upgrade4.png" alt="image" />
            </span>
        </p>
        <p>
            If all is ok then it will say "Programmed OK" and you are ok to power off the Console and restart it. Note that the console
            front panel is sometimes unresponsive at this point, so you may need to shut down from the touch screen using Setup, View
            Settings, Quit. If there is no response at all then you will need to hold the reset button to power off the console.
        </p>
        <p>
            If it gets stuck on "Fails to Load Firmware" and the console continues to loop in the Load firmware screen the console should be
            powered off and will need to be returned to ChamSys UK for re-programming.
        </p>
    </div>
</div>
