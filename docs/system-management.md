---
id: system-management
title: Chapter 51. System Management
sidebar_position: 51
---

# Chapter 51. System Management
<div class="section">
    ## 51.1. Starting Up
    <p>On PC and Mac systems click on the MagicQ application icon. On MagicQ console systems hold the power button on for 1 second.</p>
    <p>
        On first start up an introductory window is displayed on the screen. You are prompted to choose demo shows or to continue the last
        show. It is possible to turn this option off so that MagicQ automatically starts into the last show.
    </p>
    <p>
        When MagicQ starts up it loads the last show file that was saved – either a file explicitly saved by you, or the last backup file it
        automatically saved.
    </p>
</div>
<div class="section">
    ## 51.2. Shutting Down
    <p>
        To shut MagicQ down, press the QUIT soft button in the Setup Window. When asked for confirmation, select yes. MagicQ consoles
        automatically power off when the shutdown sequence is complete.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/quit.png" alt="image" />
        </span>
    </p>
    <p>
        On MagicQ consoles the console must be shut down correctly to avoid damage to their storage media. Removing power to the console
        when it is running may cause problems with the file system. Normally this will only result in a subsequent slow start-up whilst the
        system repairs the disk – however in certain circumstances the file system may become corrupted. If you always follow the
        instructions for shutting down you will have no problems.
    </p>
    <p>CONSOLES THAT ARE NOT SHUTDOWN IN ACCORDANCE WITH THE ABOVE INSTRUCTIONS WILL INVALIDATE THEIR WARRANTY.</p>
    <p>
        For situations where users regularly just disconnect the power from the console rather than shutting it down correctly it is
        possible to force a fast shut down on power fail. If the empty file "fast_power_fail.txt" is placed in the main MagicQ folder (up
        one from the show folder) then when power is lost the console will only wait 10 seconds for a user cancel before auto shutting down.
        This will help to avoid the battery going flat and the potential damage to the file system.
    </p>
</div>
<div class="section">
    ## 51.3. Saving Shows
    <p>
        When you are programming a show the show is stored in memory. In order to store your show on the disk you need to press the SAVE
        SHOW soft button in the Setup Window.
    </p>
    <p>
        Whilst programming, you should regularly save your show, so that if the unexpected happens and the power fails your show data is not
        lost. You can chose any filename. The console will automatically set the file extension to .shw.
    </p>
    <p>
        By default, MagicQ saves a backup of your show to disk shortly after you make changes – you will see it show "AutoS" in the Status
        Display. It uses the same show name but with the file extension .sbk.
    </p>
    <p>
        It is a good idea to save your show to different file names so that you have various points you can back-track to if things go
        wrong. For example, save the show as myshow-patch.shw after you have patched and then as myshow-final.shw after you have finished
        programming.
    </p>
    <p>
        When you shut down MagicQ through the QUIT soft button in the Setup Window, it automatically saves a backup copy of your show with a
        .sbk extension. When you subsequently restart MagicQ this file will be re-loaded. This ensures that MagicQ starts up as it was when
        the QUIT soft button was pressed.
    </p>
    <p>The Setup Window indicates when the show has not been saved (or autosaved) for over 10 minutes.</p>
    <p>MagicQ consoles have a large hard disk to enable storage of a virtually infinite number of shows.</p>
    <div class="section">
        ### 51.3.1. Show file name auto increment
        <p>
            MagicQ supports auto incrementing show file names. To start an auto incrementing show file, save a show file with the last part
            of the name set as _001. When you next press SAVE SHOW, MagicQ will suggest saving to _002. Press ENTER to accept, or edit the
            name to save to a different name.
        </p>
        <p>
            Note that in order to avoid accidentally saving to incrementing files, all 3 digits must be present - _1 or _10 is not
            supported. When the number _999 is reached MagicQ will not auto increment and will request a new name.
        </p>
        <p>
            Please note that over use of the auto increment feature will lead to high disk usage. It is important to clear out old versions
            once the show is finished.
        </p>
        <p>
            To delete all old revisions of the current show file, go to File Manager, and press SHIFT and REMOVE OLD REVS. This will remove
            all revisions of the current show file that have a lower revision number. It will not remove the current show file.
        </p>
    </div>
</div>
<div class="section">
    ## 51.4. Backing up to an external system
    <p>
        It is a good idea to back up your show to an external system. This ensures that should the unexpected happen you can transfer your
        show to another console. In a touring environment where the console is being moved every day we recommend you back up your show to
        an external system before moving the console.
    </p>
    <p>
        You can either backup by
        <a class="link" href="system-management.html#_transferring_files_over_network" title="51.11. Transferring files over network">
            transferring files over network
        </a>
        or via USB memory stick. To backup to USB memory stick, first insert a USB memory stick into the USB slot in the front or the back
        of the console then press the BACKUP TO USB soft button in the Setup Window.
    </p>
    <p>
        The USB memory stick should be formatted for a standard Windows file system (FAT32) – they generally come like this. This enables
        the memory stick to be used in both the console and standard PCs running Windows.
    </p>
</div>
<div class="section">
    ## 51.5. Loading Shows
    <p>
        You can load a show that you have previously saved using the LOAD SHOW soft button in the Setup Window. If you load a new show it
        will erase any existing programming. The console will prompt you for confirmation.
    </p>
    <p>
        Be careful to choose which type of show file you want to load – the .shw files are the ones you saved, whilst the .sbk ones are auto
        backups.
    </p>
    <p>
        When MagicQ saves a show file it saves the show data, the show settings and the console settings. By default when a show is loaded,
        only the show data and settings are loaded – the console settings are not loaded – so the console settings are not affected.
    </p>
    <p>
        To force loading of the console settings from a show file, hold SHIFT and press LOAD SHOW+CON. A list of Load Options is shown
        enabling the user to choose which console settings they wish to load.
    </p>
    <div class="itemizedlist">
        <p class="title"><strong>Console Settings</strong></p>
        <ul class="itemizedlist">
            <li class="listitem">Wing Settings</li>
            <li class="listitem">Remote Settings</li>
            <li class="listitem">Mode Settings</li>
            <li class="listitem">Network Settings</li>
            <li class="listitem">Media Server Settings</li>
            <li class="listitem">MIDI SMPTE Settings</li>
            <li class="listitem">Port Settings</li>
            <li class="listitem">Multi Console Settings</li>
            <li class="listitem">Hardware Settings</li>
        </ul>
    </div>
    <p>
        Selecting all the options loads the complete console settings and show settings – enabling the complete cloning of a console. Note
        that the console settings include the network settings and IP address – so if 2 cloned consoles are used on the same network then
        the IP address should be manually set to different addresses.
    </p>
    <p>
        Any show created on a MagicQ or QuickQ console can be loaded, but you need to be aware of the number of universes in the show. If
        the show uses more universes than configured on the console/PC you are loading on then the data for the heads on the excess
        universes will not be loaded. See
        <a
            class="link"
            href="system-management.html#loading-show-onto-smaller-console"
            title="51.16.1. Loading a show onto a smaller console">
            Loading a show onto a smaller console
        </a>
        .
    </p>
    <p>
        From v1.8.7.6 MagicQ PC supports up to 256 universes - set the number of universes required in Setup, View DMX I/O. SET UNIVERSES
        before loading the show. Note that the more universes are set, the more memory is required on the PC - so for older PC/Macs we
        recommend limiting the number of universes to those required.
    </p>
</div>
<div class="section">
    ## 51.6. Erasing
    <p>
        To erase the entire show from memory, go to the Setup Window and press the NEW SHOW (was ERASE SHOW) soft button. You will be asked
        to confirm by selecting YES. You will then be asked for which initial mode you want the console to be set up for, Normal, Theatre
        Non Track, Theatre Tracking or Hog II Warp. If in doubt, select Normal.
    </p>
    <p>
        Erasing a show clears all patching, all programming and all palettes. It does not clear console settings such as the configuration
        of the DMX outputs or the calibration of the touch screen.
    </p>
</div>
<div class="section">
    ## 51.7. Show extras file
    <p>
        In order to allow MagicQ shows with additional media such as icon snapshots, image files and audio files to be transferred onto
        other MagicQ systems, MagicQ uses a separate show extras file with the extension ".xhw". If a show contains extra data such as icon
        snapshots, image files or audio files, then when the show file is saved using SAVE SHOW or SAVE TO USB, the show extras file is
        saved at the same time.
    </p>
    <p>
        The show extras file contains only the icon snapshot data, image files and audio files used in your show - it does not contain the
        main programming of your show. If you wish to use your show on a different system then you need to copy both the ".shw" and ".xhw"
        files to the new system. When loading a new show MagicQ automatically checks for the presence of a ".xhw" file and extracts the
        required media from that file into the relevant folders on the MagicQ system.
    </p>
    <p>
        The show extras file is not saved during auto saves and is only loaded (extracted) when the user loads an existing show using LOAD
        SHOW.
    </p>
    <p>
        If the show file contains a lot of audio files, or particularly large audio files, then the generation of the show extras file can
        sometimes take some time to process. In this situation, smaller compressed audio files can be used as MagicQ supports both lossy and
        lossless audio codecs, or alternatively the automatic generation of the show extras file can be disabled by changing Setup, View
        Settings, Extras file create mode to
        <span class="emphasis"><em>Manual</em></span>
        . If the show extras file is needed, then this can be generated by pressing Shift + SAVE EXTRAS in the Setup window.
    </p>
</div>
<div class="section">
    ## 51.8. Import and Export of Show Data and Show Merging
    <p>
        MagicQ supports advanced features for merging shows together, taking selections from particular shows and adding them to other
        shows.
    </p>
    <p>
        A selection of Heads, Cues, Cue Stacks or Pages can be exported from a show file to a new file. Only the show data that uses those
        selected Heads, Cues, Cue Stacks or Pages is present in the new show file. The new show file can then be merged into other show
        files, with MagicQ repatching the data as required.
    </p>
    <div class="section">
        ### 51.8.1. Exporting Shows
        <p>
            Press SHIFT and SAVE SHOW (EXPORT SHOW) to export part of the current show. Only the currently selected heads are exported. All
            groups, palettes, cues and cue stacks that contain one or more of the selected heads are exported – but only with the data from
            the selected heads.
        </p>
        <p>
            If no heads are selected then MagicQ looks for items that are selected in the Page, Stack Store, and Cue Store windows. Use
            SHIFT + the cursor keys to select items in these windows. Complete pages can be exported using the Page Window, complete Cue
            Stacks (including the Cues they use) from the Cue Stack Store or individual Cues from the Cue Store.
        </p>
    </div>
    <div class="section">
        ### 51.8.2. Merging / Importing Shows
        <p>
            Select SHIFT + IMPORT SHOW to merge or import a show. MagicQ gives you a simple menu of Entire Show, Palettes, Show Structure or
            Advanced.
        </p>
        <p>Entire Show loads the entire show as separate heads, i.e. adding the loaded show to the existing show.</p>
        <p>
            Palettes allows just palettes to be loaded from the imported show file. There are further options for choosing just some head
            types and whether to load Positions, Colours and Beams.
        </p>
        <p>
            Show Structure loads the show with the Groups, Palettes, FX library, Cues and Cue Stacks but without the Patch or any
            programming in the Cues.
        </p>
    </div>
    <div class="section">
        ### 51.8.3. Advanced Merging
        <p>
            With Advanced Merging the imported data can be specified, including Settings, Patch, Palettes, FX Library, Cues, Cue Stacks,
            Playbacks, Grids, Curves are Vis data.
        </p>
        <p>Settings includes show settings, layouts, key macros and automations.</p>
        <p>Additionally you can determine how the data is merged into the current show data.</p>
        <p>
            If the Merge Heads option is selected then MagicQ merges programmed data from the new file into the heads that match in the
            original show.
        </p>
        <p>
            If the Merge Heads is not selected then MagicQ adds the channels to the new show. Channels from the imported show keep their DMX
            address unless they clash with channels in the original show – in which case they are moved to the first free location.
        </p>
        <p>
            If the Merge Palettes option is selected then any Palettes at the same Palette ID with the same name are merged together. If the
            Palettes at a particular ID do not match names, or the Palette is not programmed in the original show then the new Palette is
            added.
        </p>
        <p>
            If the Merge Cues option is selected then any Cues at the same Cue ID in the Cue Store with the same name are merged together.
            If the Cues at a particular Cue ID do not match names, or the Cue is not programmed in the original show then the new Cue is
            added.
        </p>
        <p>
            If the Merge Pages option is selected then Playback assignments are kept on the same Page as they were in the imported show –
            but they may be moved onto higher Playbacks (e.g. Playback wings) on the same page if the same playbacks are used.
        </p>
        <p>
            It is also possible to load the data for only selected head types from the imported show file - the optiosn are All, Chosen or
            None.
        </p>
        <p>All merges all Heads from the file. Chosen opens a list of the Head Types in the file.</p>
        <p>
            None is similar to the Show Structure option in the main merge menu except that it gives more control on the items that are
            loaded. When using None, Import Patch should not be selected.
        </p>
    </div>
    <div class="section">
        ### 51.8.4. Merging in part of another show file
        <p>
            If you wish to merge in only specific items, such as Cues, Cue Stacks or Palettes, or just selected heads then you can use
            Setup, SHIFT + IMPORT SHOW and select Advanced as above.
        </p>
        <p>
            If you wish to merge in only some Cues, Cues Stacks or Pages then you must first create another show file with only these items
            before importing it into your current show file.
        </p>
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">Save your current show file to a name different to the import show file.</li>
                <li class="listitem">
                    Open the import show file and cursor select the items in the Page, Stack Store or Cue Store windows you wish to export.
                </li>
                <li class="listitem">Press SHIFT + EXPORT SHOW to export the show to a new file name - e.g. partial.shw.</li>
                <li class="listitem">Reload your original show file.</li>
                <li class="listitem">Import the partial show file using SHIFT + IMPORT SHOW and selecting ENTIRE SHOW.</li>
            </ul>
        </div>
    </div>
    <div class="section">
        ### 51.8.5. Merging different versions of the same show
        <p>To merge two versions of a show together select Advanced and then Merge Heads.</p>
        <p>
            MagicQ will merge in Cues and Cue Stacks from the selected show file that are different to the Cues and Cue Stacks in the
            original show. Note that for this to work you should ensure that the Cues and Cue Stacks that are different in the two show
            files have different names.
        </p>
        <p>
            The heads must be the same type in both versions - it is not possible to merge between different head types. If the two versions
            you wish to merge have different head types then you must first morph the heads in one of the versions to be the same as the
            other.
        </p>
    </div>
    <div class="section">
        ### 51.8.6. Importing Cues from a different version of the same show
        <p>
            To import a newer version of a Cue from another show file go to Cue Stack Window and press SHIFT IMPORT CUE or to the Cue Store
            Window and cursor select one or more Cues and press the IMPORT CUE soft button.
        </p>
        <p>
            Import Cue gives options of choosing only selected heads and whether to merge into or replace the Cue in the existing show file.
        </p>
        <p>
            Only the selected Cues will be imported from the new show file. The Cues must exist (at the same QId in the Cue Store) and have
            the same name in the import file.
        </p>
        <p>
            Note that if you want to add new Cues that are not in the current show file then you must use Setup, Import Show and then select
            Import Cues only.
        </p>
    </div>
    <div class="section">
        ### 51.8.7. USITT ASCII file import
        <p>
            MagicQ supports import of dimmer patch, group, cue level and timing information from USITT ASCII files. In the Patch Window,
            View Chans, Import USITT.
        </p>
        <p>
            MagicQ does not support import of non dimmer parameters or more complex heads as this is manufacturer specific and not specified
            in the USITT ASCII format. We will be happy to investigate whether we can add import from the format of your console.
        </p>
        <p>
            Note that when importing USITT files with both patch and cues, MagicQ expects the PATCH section of the USITT file to be before
            the CUE section. A few consoles write the PATCH section at the end of the USITT file - for these cases it is necessary to edit
            the USITT file before importing, to move all the PATCH commands before the CUE Commands.
        </p>
    </div>
    <div class="section">
        ### 51.8.8. MVR file import
        <p>
            MagicQ supports importing patch and fixture position information from My Virtual Rig (MVR) files. Currently, importing scene
            objects is not supported.
        </p>
        <p>
            To import an MVR file, open the file manager (see below), and select the MVR file to import. The heads in the file will be added
            to the current show’s patch. GDTF files contained within the MVR file may be imported; MagicQ will default to using it’s own
            head files for a fixture if they are available. See
            <a class="link" href="head-editor.html#gdtf-import" title="27.15. Importing GDTF files">
                the section on importing GDTF files
            </a>
            for more information.
        </p>
    </div>
</div>
<div class="section">
    ## 51.9. Saving and Loading Settings
    <p>
        You can save your favourite show settings to a file. Settings include the options from the Setup Window, the defaults from the Cue
        Stack Window, the Layouts you have recorded and keyboard macros.
    </p>
    <p>
        Once you have become familiar with the console, it is a good idea to save your preferred settings to a file so that then when you
        start a new show you can load your settings in.
    </p>
</div>
<div class="section">
    ## 51.10. File Manager
    <p>
        You can organise you show files using File Manager in the Setup Window. File Manager supports renaming, moving, copying and deleting
        of files.
    </p>
    <p>All show files are located in the show directory. The show directory has sub directories for fx, heads and icons.</p>
    <p>File manager can operate on both the internal hard disk and external USB memory sticks. To copy a file to the USB stick:</p>
    <p>Select HARD DRIVE soft button.</p>
    <p>Press COPY and then select the file you wish to copy.</p>
    <p>Select USB DRIVE soft button</p>
    <p>Select the "." entry.</p>
    <p>
        Moving is done in a similar way using the MOVE action button. Renaming and deleting use the NAME and REMOVE action buttons
        respectively.
    </p>
    <p>It is also possible to load shows, settings, icons and new software by clicking on items in the File Manager window.</p>
</div>
<div class="section">
    ## 51.11. Transferring files over network
    <p>
        The console supports remote file system access over the network. Files can be accessed whilst the console is running and outputting
        Art-Net thus allowing, for instance, users to set up automatic show back-ups to an external server.
    </p>
    <p>Connect the console to the PC or Mac using a network cable.</p>
    <p>
        Configure the IP addresses of the PC / Mac and the console so that they are all on the same IP sub-net. For instance if the console
        is set to IP address 2.9.200.5, subnet mask 255.0.0.0 then set the host system to IP address 2.9.200.6 subnet mask 255.0.0.0.
    </p>
    <p>You can force Windows to find the console by using Search and searching for a computer – enter the IP address of the console.</p>
    <p>On a Mac connect using Finder and selecting the console.</p>
    <p>Log in as user magicq with password magicq.</p>
    <p>
        On some Windows systems you may need to create a user account magicq with password magicq to enable Windows to connect to the
        console.
    </p>
    <p>
        You can then transfer files between the host and the console. Show files, personality files, FX files and Patch files can all be
        transferred in this way.
    </p>
    <p>If you have problems putting files onto the console then try pressing the Set Rem Access soft button in the File Manager window.</p>
</div>
<div class="section">
    ## 51.12. Storage of MagicQ user files on PC/Mac
    <p>MagicQ now has an option to change where the user data files are stored.</p>
    <p>
        Older installations of MagicQ stored show, head, log and other user data files in the Application folder. Windows and OSX now make
        it difficult for users to access the Application folder - either forcing files into a Virtual Stores or preventing write access.
    </p>
    <p>
        This data can now be stored in the User Documents folder which is fully accessible. It is possible to revert back to using the
        Application folder at any time.
    </p>
    <p>From the top toolbar select Tools, Change Files Location.</p>
</div>
<div class="section">
    ## 51.13. Reports
    <p>
        MagicQ supports printing of the contents of any window to a printer or a pdf file. On PC/Mac select File, Print Window. For
        spreadsheet views, MagicQ defaults to selecting the most commonly used columns from the window in order that they fit easily on a
        printed page width. It is possible to modify the column selection as required.
    </p>
</div>
<div class="section">
    ## 51.14. Status Window
    <p>
        There is a status window in the Setup Window, View System. This shows data associated with the console and with the currently loaded
        show. This includes show size, data used, last saved times.
    </p>
    <p>The status window also shows all the MagicQ consoles on the network, and all the Art-Net devices on the network.</p>
</div>
<div class="section">
    ## 51.15. Backup Archives
    <p>
        By default the console stores an archive of the show files for every quarter of an hour of the day, and for every day of the week.
        This enables the user to revert to a previous copy of their show.
    </p>
    <p>
        Archive files are only made when the console auto saves. If auto saves are disabled then no archive files will be generated. If the
        console is set to "auto save on changes" then archive files will only be stored when changes are made. To revert to an archived file
        press SHIFT and LOAD SHOW in the Setup Window.
    </p>
    <p>
        Archive files are stored in a special directory that should not be modified by the user. When the user re-loads an archived backup
        file, the backup file is restored into the standard show directory.
    </p>
    <p>
        Archive files have the name "backup0530.sbk" to indicate the show file that was recorded just before 5.30am. Daily files are also
        stored – "backupfri.sbk" indicates the show file that was recorded at the start of Friday. Archive files are overwritten every 24
        hours, except for the daily files which are overwritten every 7 days.
    </p>
</div>
<div class="section">
    ## 51.16. Using shows on different MagicQ products and show versions
    <p>
        In general MagicQ show files are backwards and forwards compatible so you can load any show into any version of software. Loading
        shows created and modified on newer software versions into older software versions may result in some features not being supported
        or not working exactly as expected.
    </p>
    <p>
        MQ500M supports 256 universes, MQ500 support 64 or 200 universes. MQ250M supports 64 universes expandable to 128. MQ80 supports 48
        universes. MQ70 supports 24 universes expandable to 48 and the MQ50 supports 6 universes.
    </p>
    <p>From July 2020 MagicQ PC / Mac and Linux software supports up to 256 universes for previsualisation (only 64 for output).</p>
    <div class="section">
        ### 51.16.1. Loading a show onto a smaller console
        <p>
            Note that the limit of number of universes/channels refers to both patched and unpatched channels - i.e. any heads that have
            programming within the console. Therefore unpatched heads in a show still take up channels from the total number of universes
            supported on the console - MagicQ just allocates them to unused addresses.
        </p>
        <p>VDIM channels are unpatched channels and therefore may also be above the universe limit of the smaller console.</p>
        <p>The number of universes used by a show is reported in Setup, View System, View Status on the Show Data tab, Highest Universe.</p>
        <p>
            Unpatched channels can be forced onto lower universes by temporarily patching them and then unpatching them. For example, set
            the unpatched heads to +1-1. This will patch them onto the first free channels starting from Universe 1. Then unpatch the
            channels again.
        </p>
        <p>
            If you try to load a show with more channels used than the MagicQ console supports then it will ignore any channels above the
            number of supported universes and will save the show using a default show name rather than the original show name to avoid the
            ignored heads being removed from the original show file.
        </p>
        <p>
            We recommend that when loading a show into a console with less universes the show should first be reduced to the number of
            universes used by the smaller console. For example when transferring a show from a MQ100 Pro 2014 to a MQ60 the show should
            first be reduced to 12 universes. This show can be reduced on the Pro 2014 or using MagicQ on a PC or Mac.
        </p>
        <p>
            Note that unpatched heads may affect the highest universe depending on which universe they were last used and how many heads you
            have in your show. Either remove unpatched heads or repatch them down to a universe below the total number of universes.
        </p>
    </div>
    <div class="section">
        ### 51.16.2. Configuring number of Universes
        <p>
            To change the number of configured universes go to Setup Window and VIEW DMX I/O and select "SET NUM UNIVERSES" soft button. It
            is necessary to restart MagicQ before the changes take effect.
        </p>
        <p>
            Show files are compatible – except that it is not possible to fully load a show using more universes than the console is set to.
            So, if a show has with channels patched to universes 13 is loaded in a 12 universe console then any heads on the 13th universe
            will not be loaded.
        </p>
        <p>Current consoles</p>
        <div class="informaltable">
            <table class="informaltable" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                </colgroup>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>Console</p></td>
                        <td align="left" valign="top"><p>Number of Universes</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>QuickQ 10</p></td>
                        <td align="left" valign="top"><p>1</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>QuickQ 20</p></td>
                        <td align="left" valign="top"><p>2</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>QuickQ 30</p></td>
                        <td align="left" valign="top"><p>4</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>MQ50</p></td>
                        <td align="left" valign="top"><p>8</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>MQ70</p></td>
                        <td align="left" valign="top"><p>24, (option to 48)</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>MQ80</p></td>
                        <td align="left" valign="top"><p>48</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>MQ250M</p></td>
                        <td align="left" valign="top"><p>64 (option to 128)</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>MQ500</p></td>
                        <td align="left" valign="top"><p>64 (option to 200)</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>MQ500M</p></td>
                        <td align="left" valign="top"><p>256</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>MagicQ PC, Mac, Linux</p></td>
                        <td align="left" valign="top"><p>256 previs, 64 output</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>Old consoles</p>
        <div class="informaltable">
            <table class="informaltable" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                </colgroup>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>Console</p></td>
                        <td align="left" valign="top"><p>Number of Universes</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>MQ40,MQ40N</p></td>
                        <td align="left" valign="top"><p>4</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>MQ60, Old MQ70</p></td>
                        <td align="left" valign="top"><p>12</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>MQ100 Pro-E</p></td>
                        <td align="left" valign="top"><p>12</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>MQ100 Pro 2010</p></td>
                        <td align="left" valign="top"><p>32</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>MQ100 Pro 2014</p></td>
                        <td align="left" valign="top"><p>64</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>ChamSys does not guarantee performance if consoles are set to support higher numbers of universes than the hardware supports.</p>
    </div>
</div>
<div class="section">
    ## 51.17. MagicQ Profiles
    <p>
        MagicQ supports different profiles – a profile is the entire set-up of the console including the console specific settings (like IP
        address, media settings etc…) and the show file.
    </p>
    <p>Profiles enables the console to be used to control different venues with easy swapping between venues.</p>
    <p>
        It is possible to set the console to request profile selection on start-up. This is useful in a studio environment where MagicQ can
        control any one of several studios over Art-Net from a central control booth. When you start up the console you choose which studio
        to control.
    </p>
    <p>
        Profiles have a similar effect to using LOAD SHOW + CONSOLE but with a simpler interface. We recommend to use LOAD SHOW + CONSOLE
        for general purpose moving between venues, and Profiles where multiple studios are controlled from one console.
    </p>
    <p>
        Profiles are loaded and saved from the Setup Window – in View Settings, press SHIFT and LOAD PROFILE or SAVE PROFILE. Profiles are
        saved to .mpr files in the show folder – note that the profile does not contain the show data – it only references it – so if you
        are backing up you need to store both .shw files and .mpr files.
    </p>
    <p>
        To enable profile selection on start up put an empty text file "selectprofile.txt" into the main MagicQ folder (MagicQ PC on MagicQ
        PC). On start-up the console will then request which profile you wish to use before it loads the show and enables the outputs.
    </p>
</div>
<div class="section">
    ## 51.18. User management
    <p>
        MagicQ supports user management. This enables users to be set up with restricted access. Users can be set up to have full access to
        all the console channels, or to a group of channels only, or to all channels except a group of channels. Users can be set so that
        they can only "Operate" or "Program" the console without options to change settings. Execute pages can be assigned to specific
        users.
    </p>
    <p>Users can have passwords set for their accounts.</p>
    <p>
        The current user is displayed and selected in Setup, Soft button C. Note that on MagicQ consoles the Set Time function previously on
        Soft button C has been moved to soft button D and Set Date to SHIFT and soft button D.
    </p>
    <p>
        Users are managed in Setup, View System, View Users. When no users are configured the "Default" internal user is used and all MagicQ
        features are exactly as in previous versions.
    </p>
    <p>Users are stored as show settings, not as console settings.</p>
    <p>
        One of the Users in the User List can be set to be the Start User so that the console always start up into a restricted user. It can
        also be set so that the console starts locked and the user/password must be selected before the console can be accessed.
    </p>
    <p>MagicQ provides a flashing warning "User" when a show is loaded with a User with restricted access.</p>
    <p>
        Users apply to both Master and Slave consoles when using Net Sessions. On a Slave, selecting a User with reduced permissions will
        make that Slave only have access to the allowed channels. The Slave can control the output using Multi Prog Sel Chans, but is
        restricted to the allowed channels. There is a "User" option in the Multi Prog Sel Chans which sets the Slave to control the output
        of all the channels that it is allowed to.
    </p>
    <div class="section">
        ### 51.18.1. Passwords
        <p>When passwords are set then changing users requires entry of the password.</p>
        <p>To force user selection and password entry on startup, set up the Start User for one of the users to "Yes (locked)".</p>
        <p>
            To lock the console open the Setup Window and pres soft button C, "User" and from the menu of users select the "Lock" option.
            The console will be locked and changes to show the Locked Screen. Any key press will return to the User selection where it is
            necessary to select a user and enter a password in order to unlock the console.
        </p>
        <p>
            If Users with passwords are set, then when locking the console using the lock shortcut (hold CURSOR LEFT and CURSOR RIGHT and
            press CURSOR UP) will require selection of user and password entry to unlock.
        </p>
        <p>
            Locking a console stops access to the console, but does not stop the operation of the console - the console continues running in
            the background with the current user. To leave a Net Session completely, go to Setup, View Settings, Multi Console and set the
            Net Session Mode to "None".
        </p>
        <p>
            This also applies to loading shows so it is possible to protect show files by setting a User and Password within them, making it
            impossible to access the show file on a MagicQ console or MagicQ PC without first entering a valid password. When loading a show
            with user passwords set, if an incorrect password is entered then the show is not loaded.
        </p>
        <p>If passwords have been set on a show file and then forgotten please contact ChamSys support.</p>
    </div>
    <div class="section">
        ### 51.18.2. User Types
        <p>
            When at least one "Super User" is created then the Default User is no longer accessible and user management is in full
            operation. Users with type "Super User" have full access to all console features and settings without restriction.
        </p>
        <p>Users settings can only be edited when using the "Default" user or by a user with "Super User" permissions.</p>
        <p>"Programmer" can record, remove and modify show data but can not change Users.</p>
        <p>"Operator" cannot record anything or modify settings.</p>
        <p>Users that are "Disabled" are ignored.</p>
    </div>
    <div class="section">
        ### 51.18.3. Start Options
        <p>One of the users in the list can be set to the Start User with the additional option of Locked or Unlocked.</p>
        <p>
            When a console starts, a show is loaded, or a Slave connects to a Net Session with a show that has users configured then this
            user is automatically selected. This immediately determines what channels are blocked from the Output according to the selected
            user.
        </p>
        <p>
            The Start User can be set to be "No", "Yes (Locked)" or "Yes (Unlocked)". When set to "Yes (Locked)" the user must be selected
            and password entered before accessing the console.
        </p>
        <p>
            This also applies to loading shows so it is possible to protect show files by setting a User and Password within them, making it
            impossible to access the show file on a MagicQ console or MagicQ PC without first entering a valid password.
        </p>
        <p>
            Note that in order to protect show files with user passwords from being opened on previous versions of software any show files
            created in 1.9.2.2 or above that have user passwords can not be opened on software versions prior to 1.9.2.1. The user passwords
            must be first removed in 1.9.2.2 or above and then re-entered once the show is loaded in the older software version.
        </p>
        <p>
            When using the 10Scene Remote app connecting to MagicQ with user passwords set (and no individual 10Scene zone passwords),
            version 1.5 of the app is required in order to use the automatic QR code to log onto the password protected zones. Older
            versions of the 10Scene Remote app will not be able to use the automatic QR logon, although manual entering of the password is
            supported on all versions.
        </p>
    </div>
    <div class="section">
        ### 51.18.4. Access to console channels
        <p>Users can be configured to have type of "Group Only". This allows access to only the channels in the specified Group.</p>
        <p>
            Users can be configured to have type of "Exclude Group". This allows access to all channels except those in the specified Group.
        </p>
        <p>
            Users with "Superuser" permissions have access to all channels. User with "Group Only" or "Exclude Groups" can only select heads
            from their allowed channels and can only record and edit Cues and Groups with their allowed channels. They can not record over,
            merge into or remove any Groups or Cues that contain disallowed channels.
        </p>
        <p>
            If the option "Block Output" is set then Users with "Group Only" or "Exclude Groups" can not affect the output of heads outside
            of their allowed channels - these heads will remain at 0 intensity and default LTP values.
        </p>
        <p>
            If a user is created as Include Group without a Group set then they will not have access to any channels - they must chose a new
            user (and enter a password if set) to get access to the channels.
        </p>
    </div>
</div>
<div class="section">
    ## 51.19. Restricting Remote App Access
    <p>
        If the option to "Enable Remote App" is set to "Yes" (the default) then the app user has full access from the iOS/Android MagicQ
        Remote App. "Yes (Exec Only)" will only allow access to the Execute Window, this option can be used in installs (formerly called
        Install Mode). "No" will disable MagicQ access from the MagicQ Remote app.
    </p>
    <div class="section">
        ### 51.19.1. User Settings
        <p>
            Users can be configured so that they automatically load user settings for that user when switching users. For each user in
            Setup, View System, View Wings, View Users, set the "Load Settings" field to "Yes".
        </p>
        <p>When changing user the settings for the old user are saved and the settings for the new user are loaded.</p>
        <p>
            When the Load Settings is set for a user, MagicQ stores the current layout and the programmer contents as well as the show
            settings. When changing to a different user their layout will be opened and the progammer contents included.
        </p>
        <p>
            When changing users, MagicQ saves the current layout and programmer contents for the old user before loading the settings for
            the new user. MagicQ uses free layouts and free Cues to store the Layout and programer contents starting from the highest free
            Layout or Cue. The Layouts and Cues are named User X: YYYY where X is the user number and YYYY is the user name. MagicQ adds and
            removes these Layouts and Cues as required without any user interaction required.
        </p>
        <p>
            The programmer contents contains all the information that would be recorded into a Cue including values, times and FX. Note that
            head selection and selection order is not saved into Cues and therefore is not saveed in the user settings.
        </p>
        <p>
            When changing users there is a Logoff option. This logs the user off the console returning the console to the default user and
            locking the console. The Layout and programmer contents are automatically saved before logging out the user.
        </p>
        <p>
            Software prior to v1.9.3.0 only stored settings, not Layouts or the programmer. In these versiosn the settings were stored in
            settings files named user_xxxxxx.set where user is the user name.
        </p>
    </div>
</div>
<div class="section">
    ## 51.20. Security
    <p>
        Lighting consoles are designed to be used on private networks which are assumed to be secured. Where consoles are used remotely over
        the internet we recommend the use of secure network tunnels to protect the lighting network from access from the internet.
    </p>
    <p>
        ChamSys explicitly denies any responsibility for security of MagicQ consoles or their use in safety critical roles. Users must
        assure themselves of the security of their networks - if in doubt ensure the WIFI options are disabled and do not connect to the
        console network ports.
    </p>
    <p>
        In situations where the network is not secure then we recommend ensuring that only the required network protocols are enabled in
        order to reduce the likelihood of unauthorised access. In particular the following options should be set:
    </p>
    <div class="section">
        ### 51.20.1. Multi console settings
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">Enable remote control = No</li>
                <li class="listitem">Enable remote access = No</li>
                <li class="listitem">Net Session mode = None</li>
                <li class="listitem">Programmer Sync Mode = No Sync</li>
                <li class="listitem">Playback Sync Type = None</li>
                <li class="listitem">Show data sync type = None</li>
            </ul>
        </div>
    </div>
    <div class="section">
        ### 51.20.2. Network settings
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">RDMNet IP address = 0.0.0.0</li>
                <li class="listitem">Ethernet remote protocol = None</li>
                <li class="listitem">Web server = None</li>
                <li class="listitem">Control net IP Address = 0.0.0.0</li>
                <li class="listitem">OSC Mode = None</li>
                <li class="listitem">Track rx = None</li>
                <li class="listitem">Track tx = None</li>
                <li class="listitem">OTP function = None</li>
                <li class="listitem">Custom TCPIP = None</li>
            </ul>
        </div>
    </div>
    <div class="section">
        ### 51.20.3. WIFI settings
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">Wireless mode = Disabled</li>
                <li class="listitem">Android tethering support = No</li>
            </ul>
        </div>
    </div>
    <div class="section">
        ### 51.20.4. DMX I/O settings
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">In Type should be set to None for all universes</li>
                <li class="listitem">Visualiser should be set to MagicVis for all universes</li>
            </ul>
        </div>
    </div>
</div>
<div class="section">
    ## 51.21. Saving Support files
    <p>
        If you encounter a problem in the operation of the console then please report it on the ChamSys bugtracker at
        <a class="ulink" href="https://secure.chamsys.co.uk/bugtracker/bug_report_advanced_page.php" target="_top">
            https://secure.chamsys.co.uk/bugtracker/bug_report_advanced_page.php
        </a>
        and upload your show file and log files.
    </p>
    <p>
        MagicQ stores log files in the log folder. Each log file corresponds to a session when MagicQ is started, runs and then is closed.
        If the console resets for any reason then the log file closes and a new log file is started. The file is named according to the time
        and date that MagicQ started, and the file modification date is the time that MagicQ closed.
    </p>
    <p>
        For example, the file Tue_Dec_07_19_15_11_2021.log indicates MagicQ started at 7:19:15 on Dec 7th 2021. The file modification time
        will tell when MagicQ was closed.
    </p>
    <p>
        If a console has reset then the important log file is the one opened (and named) prior to the time of the reset. If in doubt then
        provide all the log files from the day when the reset occurred.
    </p>
    <p>
        It is easy to create and save to USB a single Support file to help ChamSys support and distributors to recreate and understand
        problems. This file includes the show file, the session log and the log files from the last seven days. In Setup, View System, View
        Status press the SAVE SUPPORT soft button.
    </p>
    <p>
        This saves a file named support_XXXXXXX.zip into the log folder, where XXXXXXX is the date and time. A prompt is given to enable
        saving to a USB Stick. Alternatively in the MagicQ File Manager you can copy the file manually to a USB stick. On a PC system you
        can access the file directly from the log folder.
    </p>
    <p>
        The older option SAVE TO LOG which saves just the session log file has been moved to SHIFT and SAVE LOG. This has been superceded by
        the SAVE SUPPORT function. The SAVE LOG creates a much smaller file so may still be useful in situations where it is not possible to
        transfer and upload larger files.
    </p>
    <p>Log files are automatically deleted after 1 month to minimise disc usage.</p>
</div>
<div class="section">
    ## 51.22. Commands and Logs
    <p>
        The Help Window in addition to VIEW MANUALS also contains VIEW COMMANDS and VIEW LOGS. Press CTRL and HELP to open the Help Window
        directly in the VIEW COMMANDS / VIEW LOGS views.
    </p>
    <p>
        VIEW COMMANDS shows the user commands and responses. Commands include those entered via the console buttons, the keypad and also
        those entered via the touch screens.
    </p>
    <p>
        VIEW LOGS shows all the functions that are logged on the console into the log files including button presses, fader movements,
        encoder usage, touch screen presses and events generated internally or from external inputs. It also shows general system logs and
        errors.
    </p>
    <p>
        Both views automatically update as the commands are entered and logs records are generated. The windows can be locked so they do not
        update using the LOCK soft button. The SEARCH, SEARCH FWD, and SHIFT + SEARCH BKWD soft buttons can be used to search for events.
    </p>
    <p>In VIEW LOGS it is possible to filter the log records shown by log class. Press the FILTER CLASS soft button.</p>
    <p>The Event class includes MIDI, MIDI SYSEX, MIDI OSC, ChamSys Remote Ethernet Protocol (CREP), Scheduled events and Automations.</p>
    <p>
        Log records of the Event class are only generated when Extended Logging is set to Extended &amp; Events. Events of this class can
        occur very frequently which could create very large log files. On systems with a lot of automated events we recommend only enabling
        Extended &amp; Events during programming and when fault finding.
    </p>
    <p>Set the Extended logging via the LOGGING TYPE soft button, or from the Setup Window, View Settings, Hardware tab.</p>
    <p>
        On system start the commands and logs are the current commands and logs. Using soft button A the previous log files can be viewed to
        look at commands and logs from previous sessions - i.e. from before the current console start / reset. The title bar shows the file
        name of the current log file being viewed.
    </p>
    <p>Press soft button B at any time to return to the current commands and logs.</p>
    <p>
        On MagicQ PC it is possible to examine log files from other consoles. From the top toolbar under Tools, select Log Viewer. This
        opens a standard system file selection dialog box to enable selection of a log file from any folder on the PC/Mac. MagicQ opens the
        Help Window in the VIEWLOGS view showing that file. Use Next/Prev on soft button A to examine other files from within that same
        folder.
    </p>
    <p>
        On system installs where the system is expected to run for many days, months or years the Help Window should be closed when not in
        use to prevent system degradation over time as the log files increase size.
    </p>
</div>
