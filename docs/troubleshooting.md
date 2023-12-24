---
id: troubleshooting
title: Chapter 55. Troubleshooting
sidebar_position: 55
---

# Chapter 55. Troubleshooting
<div class="section">
    ## 55.1. No outputs
    <p>
        Check whether MagicQ is operating correctly by opening the Outputs Window and looking at the data in View Heads. If the intensity or
        other attributes are not at their correct levels then check:
    </p>
    <div class="itemizedlist">
        <ul class="itemizedlist">
            <li class="listitem">Are the Grand Master and Playback Master faders up?</li>
            <li class="listitem">Are Playback faders raised?</li>
            <li class="listitem">Is there channel data recorded in the Cues on the playbacks?</li>
            <li class="listitem">Is BLIND mode on?</li>
            <li class="listitem">Heads and dimmers are patched to the correct universe?</li>
        </ul>
    </div>
    <p>
        If the Outputs Window shows correct values then check the Outputs are configured and enabled correctly in the View DMX I/O view of
        the Setup Window. If you are using an Ethernet convertor box check that it is receiving data correctly. Check:
    </p>
    <div class="itemizedlist">
        <ul class="itemizedlist">
            <li class="listitem">Outputs are configured correctly</li>
            <li class="listitem">Outputs are enabled</li>
            <li class="listitem">Is test mode active in DMX/IO?</li>
            <li class="listitem">If using network outputs check the IP address and subnet address are configured correctly</li>
        </ul>
    </div>
    <p>
        Try putting a test pattern on the entire DMX output - in DMX I/O set the test field to Ramp. The Outputs, View Chans, View DMX shows
        exactly what is being output on each universe.
    </p>
</div>
<div class="section">
    ## 55.2. MagicQ not responding
    <p>Is the time changing in the Status Display? If so then MagicQ is running o.k. Check</p>
    <div class="itemizedlist">
        <ul class="itemizedlist">
            <li class="listitem">Master faders up</li>
            <li class="listitem">Correct playback pages selected</li>
            <li class="listitem">Playback has a Cue stored on it</li>
            <li class="listitem">MagicQ is not locked (CTRL top left soft button)</li>
            <li class="listitem">
                Is button test mode on (Press CNTRL+ALT+SHIFT or hold top left SHIFT button and press top right SHIFT button on older MQ100
                series consoles)
            </li>
        </ul>
    </div>
    <p>If the time is not changing then you will have to perform a hard reset on the console.</p>
</div>
<div class="section">
    ## 55.3. MagicQ responding slowly
    <p>Check memory usage in Setup, View System, View Status. Try</p>
    <div class="itemizedlist">
        <ul class="itemizedlist">
            <li class="listitem">Closing all windows (SHIFT + CLOSE)</li>
            <li class="listitem">Ensure you have saved your show to hard disk not to a USB stick</li>
            <li class="listitem">Remove any USB devices especially USB Sticks</li>
            <li class="listitem">Disable network connections to media servers</li>
        </ul>
    </div>
</div>
<div class="section">
    ## 55.4. Strange key presses, unexpected window changes
    <p>
        Enter board test mode to determine the cause of the fault press CTRL + ALT + SHIFT keys to enter and exit this mode. On older MQ100
        Series console press the SHIFT buttons either side of the display together.
    </p>
    <div class="itemizedlist">
        <ul class="itemizedlist">
            <li class="listitem">Check a button has not become stuck down</li>
            <li class="listitem">Check nothing / no-one is leaning on the keyboard or other buttons</li>
            <li class="listitem">Check a keyboard macro has not been accidentally recorded / played back</li>
        </ul>
    </div>
</div>
<div class="section">
    ## 55.5. MagicQ console not booting
    <p>
        There are quite a few different reasons for the console not to boot - it could be a problem with the system operating system
        software or a hardware problem.
    </p>
    <div class="section">
        ### 55.5.1. MQ100 series console not booting
        <p>
            If the console is cycling the boot sequence continually or showing "kernel panic" then this normally indicates a hardware
            problem. Get a qualified service technician to remove the rear panel and reseat cables and processor daughter card (transition
            card). On a Pro 2014 console if the console is showing "lynxfb" then get a qualified service technician to remove the rear panel
            and remove the graphics card from underneath the processor module.
        </p>
        <p>
            Check out the
            <a class="link" href="upgrading.html" title="Chapter 52. Software &amp; Firmware Upgrade">Software Upgrade</a>
            section for repair of the operating system.
        </p>
    </div>
    <div class="section">
        ### 55.5.2. MQ80 console blank screen and not booting
        <p>
            When the BIOS settings are lost on the MQ80 console the internal display will not function, this can also cause MagicQ to not
            start correctly. An indication that this has happened would be when the console is powered on the blue soft button LEDs either
            side of the display illuminate, but the console display remains blank. To reset BIOS settings on the MQ80 console an external
            monitor and a USB keyboard connected to the lower Neutrik USB port are required.
        </p>
        <p>Once connected:</p>
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">Start up the console and Enter the BIOS using the ‘Delete’ key on the external keyboard.</li>
                <li class="listitem">Go to Advanced, Chipset Configuration</li>
                <li class="listitem">Select the primary output to be the LVDS output</li>
                <li class="listitem">
                    Select the "1440x900 24bit 2ch LED" option for the resolution (should be one above the 1280x900 option near the middle.
                </li>
                <li class="listitem">Select the secondary output to be HDMI</li>
                <li class="listitem">Press F10 to save and reboot the console</li>
            </ul>
        </div>
        <p>
            Note these settings are for the MQ80 console only and should not be used on ANY other MagicQ console. A BIOS update is available
            to default the correct settings if BIOS setting are lost in future - contact ChamSys support to obtain this.
        </p>
    </div>
    <div class="section">
        ### 55.5.3. MQ80 console MagicQ not starting
        <p>
            If the console is not correctly shutdown or for some reason MagicQ is not closed correctly (for example by using the reset
            button on the console), the console may boot into the GNU GRUB display pictured below. To boot MagicQ when in this state a USB
            keyboard is required, connect a USB keyboard to the console and select the top option
            <span class="emphasis"><em>MagicOS4 GNU/Linux</em></span>
            using the cursor keys on the keyboard and press
            <span class="emphasis"><em>Enter</em></span>
            to select to boot this option. The console should then boot MagicQ and start correctly. When the console has booted into the GNU
            GRUB display do NOT attempt to reset the console by power cycling or resetting the console as this will cause damage to the
            consoles Solid State Drive.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/GNUGrub.png" alt="image" />
            </span>
        </p>
    </div>
    <div class="section">
        ### 55.5.4. MQ50 / MQ70 / MQ250M console MagicQ not starting
        <p>
            MagicQ MQ50, MQ70 and MQ250M consoles feature a Recovery Mode allowing for the operating system to be re-installed. The Recovery
            button is located on the rear of the consoles. Recovery should only be used if the console is powering on, but MagicQ is not
            starting. Note the use of Recovery mode may erase user show files during the process.
        </p>
        <p>To use Recovery:</p>
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">Power off the console</li>
                <li class="listitem">Hold down the recovery button on the rear of the console</li>
                <li class="listitem">Power on the console while continuing to hold the Recovery button</li>
                <li class="listitem">After ~20 seconds release the recovery button, console will boot into Recovery Mode</li>
                <li class="listitem">Select System Format in the Recovery menu</li>
                <li class="listitem">Select Restore Boot partition</li>
                <li class="listitem">After this completes, select back and shutdown the console, then Power back on the console.</li>
            </ul>
        </div>
        <p>If console doesn’t boot into MagicQ after following the above these steps can be followed:</p>
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">
                    Download the latest MQ50/MQ70/MQ250M software installer from the ChamSys website (.cdz file) and copy onto a USB drive.
                </li>
                <li class="listitem">Power off the console</li>
                <li class="listitem">Hold down the recovery button on the rear of the console</li>
                <li class="listitem">Power on the console while continuing to hold the Recovery button</li>
                <li class="listitem">After ~20 seconds release the recovery button, console will boot into Recovery Mode</li>
                <li class="listitem">Select System Format in the Recovery menu</li>
                <li class="listitem">Select Format Internal Flash and Confirm, once complete select Back and shutdown the console</li>
                <li class="listitem">Power on the console normally</li>
                <li class="listitem">Console will boot automatically the MagicQ factory menu</li>
                <li class="listitem">Select Update from USB stick and select the .cdz file on USB drive.</li>
                <li class="listitem">Once complete console should then boot into MagicQ.</li>
            </ul>
        </div>
    </div>
    <div class="section">
        ### 55.5.5. MQ40/60 console not starting
        <p>
            MQ40/60 series consoles feature an OS recovery mode. When powering on the console the
            <span class="emphasis"><em>s</em></span>
            buttons should light in sequence and then start flashing until MagicQ has started. If MagicQ does not start this may indicate a
            problem with the OS.
        </p>
        <p>Recovery should only be used if the console is powering on, but MagicQ is not starting.</p>
        <p>To recover the OS on these consoles:</p>
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">Power off the console</li>
                <li class="listitem">Hold down || keys of playbacks 1 and 3, and &gt; key of playback 2</li>
                <li class="listitem">While holding down these 3 keys, power on the console</li>
                <li class="listitem">Continue to hold these keys for around 30 seconds</li>
                <li class="listitem">MagicQ should then recover and reload an older version of the MagicQ OS</li>
            </ul>
        </div>
        <p>If the console continue to not boot after this contact ChamSys Support</p>
    </div>
</div>
<div class="section">
    ## 55.6. MagicQ console blank screen
    <p>If the screen is blank then this may be because of the screen saver. Try pressing SHIFT.</p>
    <p>
        If the screen remains blank even after pressing buttons then try holding CTRL and pressing the X Encoder wheel soft button
        (Illuminated button closest to the X encoder wheel) twice. This attempts to restart the screen backlight.
    </p>
    <p>
        The screen may have been turned off and locked by a user. Press CTRL and the second soft button down on the left (soft button B). If
        this does not help then press CTRL and the second soft button a second time.
    </p>
    <p>If the screen still remains blank then try connecting an external monitor.</p>
    <p>
        Avoid using the white reset button to shut down the console - hold down the three cursor keys (&lt; V &gt;) and press DBO to shut
        down the console.
    </p>
</div>
<div class="section">
    ## 55.7. MagicQ console white screen
    <p>
        MagicQ console white screen indicates that the display has power but no data signal. This could be because the main processor has
        halted or because the display signal cable is broken/disconnected.
    </p>
    <p>
        Try pressing S buttons. If the blue LED follows the S button then the main processor is running correctly - check display cable. Get
        a qualified service technician to open the console to verify this.
    </p>
    <p>
        If the S buttons are not responding then it is likely there is a bad connection in the rear panel. Get a qualified service
        technician to remove the rear panel and reseat the power and disc cables and ensure processor daughter card (transition card) is
        firmly pressed onto the processor card.
    </p>
    <p>
        Avoid using the white reset button to shut down the console - use the three cursor keys (&lt; V &gt;) and press DBO to shut down the
        console.
    </p>
</div>
<div class="section">
    ## 55.8. MagicQ console distorted screen
    <p>
        If the screen image is distorted, has multiple lines through it or has incorrect colours then this indicates that the graphics
        hardware has not started correctly.
    </p>
    <p>Hold the three cursor keys (&lt; V &gt;) and press DBO to shut down the console.</p>
</div>
<div class="section">
    ## 55.9. MagicQ console internal touch screen not working
    <div class="itemizedlist">
        <ul class="itemizedlist">
            <li class="listitem">Try to calibrate the touch screen (CTRL + SET)</li>
            <li class="listitem">Check it is giving correct values in board test mode (SHIFT + SHIFT)</li>
            <li class="listitem">Check there is no dirt around the edges of the screen</li>
            <li class="listitem">Check that liquid has not been spilt into the touch screen</li>
            <li class="listitem">Check the metalwork is not catching on the screen</li>
        </ul>
    </div>
</div>
<div class="section">
    ## 55.10. All 10 S buttons flashing blue
    <p>
        If all 10 S buttons are flashing blue this indicates that the console front panel is not communicating with the console main
        processor.
    </p>
    <p>
        This could be caused by a problem with the console main processor or the cable/connection between the console main processor and the
        console front panel. If the main processor is running and showing MagicQ on the screen then the problem is with the
        cable/connection.
    </p>
    <p>It is possible to check whether the main processor is running:</p>
    <div class="itemizedlist">
        <ul class="itemizedlist">
            <li class="listitem">Is there any output on the main screen? Do you see the boot procedure?</li>
            <li class="listitem">Connect an external monitor. Do you see anything on the external monitor during boot?</li>
            <li class="listitem">Connect a keyboard. If you press CAPS LOCK does the LED on the CAPS LOCK key come on?</li>
            <li class="listitem">Is the console fan running?</li>
        </ul>
    </div>
    <p>
        Note that on a MQ100/200/300 the touch screen is controlled through the front panel so the touch will not work in this situation.
        Connect an external mouse to click items on the screen.
    </p>
    <p>To shut down the console use a mouse, or if there is no output on the screen using the reset button.</p>
    <p>
        As the front panel is not communicating with the main processor it will not be able to shut down using buttons on the front panel.
    </p>
</div>
<div class="section">
    ## 55.11. Fader, Encoder or Button not working correctly
    <div class="itemizedlist">
        <ul class="itemizedlist">
            <li class="listitem">Go into board test mode (CNTRL+ALT+SHIFT or SHIFT + SHIFT) to test the hardware.</li>
        </ul>
    </div>
    <p>
        If none of the buttons and faders are working then check that the front panel is running ok. If there are no LEDs lit on the front
        panel then it is possible that the front panel is not running correctly.
    </p>
    <p>
        On MQ500, MQ100 series console and Playback and Execute Wings there are 4 LEDs underneath the arm-rest. The red LED indicates power
        whilst the green LED should flash to indicate that the front panel CPU is running. The two yellow LEDS show messages from/to the
        front panel. One of them should turn on when you move faders, the other should flash periodically when it receives messages from the
        console main processor.
    </p>
</div>
<div class="section">
    ## 55.12. Unable to save shows or patch heads after performing a *777 erase all on the console
    <p>This is caused by using the *777 Erase all function on MagicQ console is versions prior to v1.5.9.2.</p>
    <p>To fix:</p>
    <p>
        Go to Setup, file manager and press the
        <span class="emphasis"><em>up dir</em></span>
        soft button a number of times. This will then take you into the root folder (folders will appear on screen). Find the folder called
        <span class="emphasis"><em>home</em></span>
        go into it Create a folder called
        <span class="emphasis"><em>magicq</em></span>
        . Using the Create Dir soft button. Restart the console.
    </p>
</div>
<div class="section">
    ## 55.13. "MagicQ needs to write to the install folder…" message on Mac
    <p>If you get a message on Mac about incorrect permissions, please try the following steps:</p>
    <div class="orderedlist">
        <ol class="orderedlist" type="1">
            <li class="listitem">Open the "Applications" folder in finder</li>
            <li class="listitem">Right click on the "MagicQ" folder and select "Get Info"</li>
            <li class="listitem">Click on the padlock in the bottom right corner and enter your password</li>
            <li class="listitem">If your username isn’t in the list of permissions, add it with the + button</li>
            <li class="listitem">Set the permissions of your username to "Read &amp; Write"</li>
            <li class="listitem">
                Click on the settings icon underneath the permissions list, select "Apply to enclosed items…", and accept the warning
                message
            </li>
            <li class="listitem">Restart the Mac</li>
        </ol>
    </div>
    <p>If you still see this error message, perform a clean install of MagicQ:</p>
    <div class="orderedlist">
        <ol class="orderedlist" type="1">
            <li class="listitem">Open the "Applications" folder</li>
            <li class="listitem">Delete the "MagicQ" folder</li>
            <li class="listitem">Open Finder, choose "Go" &gt; "Go to folder" from the toolbar</li>
            <li class="listitem">Type in "~/Library/Application Support/"</li>
            <li class="listitem">If a "MagicQ" folder exists, delete it</li>
            <li class="listitem">Restart the Mac</li>
            <li class="listitem">
                Download the latest version from
                <a class="ulink" href="https://secure.chamsys.co.uk/download" target="_top">https://secure.chamsys.co.uk/download</a>
            </li>
            <li class="listitem">
                Open the .dmg file. Hold down shift, right click on the MagicQ package, select "Open" and click "Open".
            </li>
            <li class="listitem">Follow the installer steps</li>
        </ol>
    </div>
</div>
<div class="section">
    ## 55.14. Linux: MagicQ fails to start / libGL error
    <p>
        If MagicQ is failing to start on Linux, try running it from the command line (with /opt/magicq/runmagicq.sh). If errors appear
        similar to the following:
    </p>
    <pre class="literallayout">
libGL error: MESA-LOADER: failed to open swrast (search paths /usr/lib/x86_64-linux-gnu/dri:\$${ORIGIN}/dri:/usr/lib/dri)
libGL error: failed to load driver: swrast
</pre>
    <p>
        Then this is likely caused by your graphics drivers being built for a newer version of libc
        <code class="literal">than MagicQ is distributed with. Try renaming /opt/magicq/lib/libstdc</code>
        .so.6 to libstdc
        <code class="literal">
            .so.6~ (this may require root) and running again; this will allow MagicQ to use the system version of libstdc
        </code>
        .so.6. If this fails, rename the file back again and contact support.
    </p>
</div>
