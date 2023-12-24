---
id: manual-multi-console
title: Chapter 33. Manual configuration of Multi Console operation
sidebar_position: 33
---

# Chapter&nbsp;33.&nbsp;Manual configuration of Multi Console operation
<p>
    We recommend you use network sessions to control hot take-over, show synchronisation and playback synchronisation as this provides much
    simpler and automatic configuration.
</p>
<p>
    When interworking with 3rd party console, or setting up install systems with emergency hot takeover it can be configured manually as
    below.
</p>
<div class="section">
    ## 33.1.&nbsp;Manual configuration of Hot take-over
    <p>
        Hot take-over allows the use of multiple consoles in case a console stops working. Hot take-over can be used in two ways - depending
        on what you wish to happen when the main console becomes available again.
    </p>
    <p>
        In "Preferred mode" only one of the consoles (or MagicQ PCs) on the network is designated as a back up. All the universes on the
        console are set to "Hot take-over". Whenever there is no received DMX traffic on the network for a particular universe, the back-up
        console starts sending data for that universe. As soon as data reappears, the back-up console stops sending data.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/hottakeover.png" alt="image" />
        </span>
    </p>
    <p>
        In "Equal mode" all consoles on the network are set to "Hot take-over". At any one time, one of the consoles will run as the master,
        with all universes enabled. If that console fails, one of the others will take over. It is recommended that you set the "Hot
        take-over detect time" to different values on each of the consoles to avoid conflict conditions.
    </p>
    <p>The first console to start is the Master and outputs. The other console becomes the Slave.</p>
    <div class="section">
        ### 33.1.1.&nbsp;Hot Takeover Mode
        <p>Hot Takeover Mode is set in Setup, View Settings, Multi Console. The options are:</p>
        <div class="informaltable">
            <table class="informaltable" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                </colgroup>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>Manual</p></td>
                        <td align="left" valign="top"><p>User Takes control and Release control as required.</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Pref Master</p></td>
                        <td align="left" valign="top"><p>Console will always be Master</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Pref Slave</p></td>
                        <td align="left" valign="top"><p>Console will only be Master if another console is not detected</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Equal</p></td>
                        <td align="left" valign="top"><p>Both consoles have same priority</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Split</p></td>
                        <td align="left" valign="top"><p>Universes controlled independently. (default)</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>Inhibit</p></td>
                        <td align="left" valign="top">
                            <p>
                                All MagicQ consoles on the network disable their outputs. Used to enable 3rd party consoles to output on the
                                network.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>
            For all modes it is still necessary to set up Setup, View DMX I/O so that all universes that you wish to use as Hot Takeover
            have their Output and Input universes and type set correctly.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/dmxiohottakeover.png" alt="image" />
            </span>
        </p>
        <p>
            When you set a universe to "Hot Takeover" you must ensure that Input is enabled on that Universe and that it is set to the
            correct type and universe number – generally the Input should be set up the same as the Output.
        </p>
        <p>
            When using "Hot take-over" on MagicQ PC, ensure that the IP address of MagicQ PC (set up in Setup Window, View Settings) is set
            to the valid IP address of the network you are using. If this setting is incorrect then Hot Takeover will not work correctly.
        </p>
        <p>
            <span class="emphasis"><em>Preferred Mode</em></span>
        </p>
        <p>
            Setting one console to Preferred Master and the other to Preferred Slave operates a Master/Slave mode whereby one console will
            always be the Master, with the other console only taking control when that Preferred Master console is not available (shutdown,
            reset, disconnected from the network). As soon as the Preferred Master restarts or is connected back on the network then it will
            take control and the Preferred Slave will stop outputting.
        </p>
        <p>All required universes on both consoles should be set to Hot Takeover.</p>
        <p>
            <span class="emphasis"><em>Equal Mode</em></span>
        </p>
        <p>
            Setting both consoles to Equal operates a Master/Slave mode whereby both Consoles have the same precedence. The first console to
            start becomes the Master. Take Control and Release Control can be used to swap which console is the Master.
        </p>
        <p>
            All Universes are treated the same – enabling / disabling together. For systems which require hot takeover to operate
            independently on different Universes the Split mode should be used.
        </p>
        <p>
            If the network cable between the consoles is broken then neither console will see the other console and both will become Master.
            If one of the consoles is still connected to the lighting rig then it will have control – both consoles will not be connected to
            the lighting rig – otherwise the consoles would see each other.
        </p>
        <p>
            When the network between the consoles is reconnected then both consoles will detect the other consoles at the same instance. The
            console with the lower IP address will become the Master.
        </p>
        <p>All required universes on both consoles should be set to Hot Takeover.</p>
        <p>
            <span class="emphasis"><em>Split Mode</em></span>
        </p>
        <p>
            This mode makes the consoles operate as in previous version of software. Set Hot Takeover in Setup, View DMX I/O for the
            required Universes.
        </p>
        <p>
            To make a single system a backup for another system set the universes to Hot Takeover only on the slave console. For a
            Master/Slave system with equal precedence, set the universes to Hot Takeover on both systems.
        </p>
    </div>
    <div class="section">
        ### 33.1.2.&nbsp;Hot take-over type
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/dmxiohottakeover.png" alt="image" />
            </span>
        </p>
        <p>
            The hot take-over type can be set to manual or automatic. When set to manual the output is frozen until the operator decides
            what new look to change to. In automatic, a gradual fade is made to the look set on the Playbacks – in this mode an operator
            will often put up a "safe" state on the standby console which can be used if the main console has a problem.
        </p>
        <p>
            In manual mode, when MagicQ determines that it should take over a universe it will load a snapshot of the last data from that
            universe into its Programmer. The universe will be completely controlled from within the Programmer and not from the Playbacks.
            The operator can then set up the playbacks as they wish and then clear the programmer to change to this new look. Clearing the
            programmer with time enables the operator to specify a fade time to the new look.
        </p>
        <p>
            In automatic mode, MagicQ loads the snapshot of the last data from that universe into the Programmer and then automatically
            clears the programmer using the hot-takeover fade time.
        </p>
        <p>Since both options use the programmer, it is recommended that the programmer is kept clear on the standby console.</p>
    </div>
    <div class="section">
        ### 33.1.3.&nbsp;Swapping control between multiple consoles
        <p>
            In Equal Mode, a console that is set to "Hot take-over" can be forced to control all universes using the "TAKE CONTROL" soft
            button. This will force an immediate change of control from one console to the other.
        </p>
        <p>
            Similarly, control can be given to another console using the "RELEASE CONTROL" soft button. This will force the other console to
            take control, and depending on the hot take-over options will enable a controlled fade to the new console outputs.
        </p>
        <p>Note that the "TAKE CONTROL" and "RELEASE CONTROL" are only active when one or more universes are set to "Hot take-over".</p>
        <p>
            When universes on MagicQ consoles are set to hot-takeover then the current Master / Slave status is shown in the Status Display
            underneath the date and time.
        </p>
        <p>
            Note that a MagicQ console is considered a Master if any of the universes that are configured as a hot takeover universe are
            currently enabled and hence outputting to the network. A MagicQ console is considered a Slave if all universes that are
            configured as hot takeover universes are currently disabled – the console is not outputting to the network on these universes.
        </p>
    </div>
    <div class="section">
        ### 33.1.4.&nbsp;Emergency Hot Takeover
        <p>
            MagicQ includes an Emergency Hot Takeover feature that forces all universes to output the data from itself rather than from
            received data from other consoles.
        </p>
        <p>
            When MagicQ enters Emergency Hot Takeover, all universes set to Hot Takeover are immediately enabled and any looping through of
            received Hot Takeover data is stopped.
        </p>
        <p>
            When MagicQ leaves Emergency Hot Takeover, normal Hot Takeover will operate - the Hot Takeover Mode determining which universes
            are controlled by which consoles.
        </p>
        <p>Emergency Hot Takeover can be triggered from the Remote Input port.</p>
        <p>It can also be triggered from Automations (hence can be triggered from 10Scene input ports, MIDI, OSC, incoming DMX etc…)</p>
        <p>Cue Stack Macro H 112, H 911 and H 999 can be used set Emergency Hot Takeover on and off.</p>
        <p>ChamSys Remote Protocol Command 112 H, 911 H and 999 H can be used to set Emergency Hot Takeover on and off.</p>
        <p>It can also be manually triggered from Setup, View DMX I/O with SHIFT + the top soft buttons EMERGENCY ON and EMERGENCY OFF.</p>
        <p>
            When using Emergency Hot Takeover and outputting over network to DMX nodes it is important that only the system where the
            Emergency Hot Takeover is configured to output universes directly to the DMX nodes.
        </p>
        <p>
            All other consoles on the network should output universes to the MagicQ system and then be looped through to the universes of
            the DMX nodes as required. In Setup, View DMX I/O set Hot Takeover on the universes to "Yes, Loop". When using loop through the
            Input and Output Universes should be set to different ranges in the Art-Net / sACN universe ranges.
        </p>
        <p>To set a MagicQ system for Emergency Hot Takeover:</p>
        <p>In Setup, View Settings, Multi Console</p>
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">Set Net Session Mode = None</li>
                <li class="listitem">Set Hot Takeover Mode = Pref Slave or Split Universes</li>
                <li class="listitem">Set Hot Takeover Fade Type = Automatic</li>
            </ul>
        </div>
        <p>In Setup, View DMX I/O</p>
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">Set Output Type and Output Uni to output to the required DMX nodes</li>
                <li class="listitem">Set Input Type and Input Uni to a different universe range</li>
                <li class="listitem">Set universes Takeover to "Yes, Loop"</li>
            </ul>
        </div>
        <p>Arrange that any other consoles on the network output to the different universe range</p>
        <p>
            The Autom Type "Emergency" triggers when Emergency Hot Takeover is entered and left. This enables triggering of Playbacks/Cues
            etc… dependent on the Emergency state.
        </p>
    </div>
</div>
<div class="section">
    ## 33.2.&nbsp;Manual configuration of Playback synchronisation
    <p>
        It is possible to carry out basic synchronisation of two or more consoles during playback by using the ChamSys Remote protocol –
        either via serial or Ethernet. Synchronisation can be set for individual playbacks, or for all 10 main playbacks. When the playbacks
        faders are raised, playbacks Go, Back or Jump are pressed, the master console sends ChamSys Remote Protocol commands to the slave
        consoles.
    </p>
    <p>Synchronisation on MagicQ PC is only available when connected to a MagicQ Wing or MagicQ Interface.</p>
    <div class="section">
        ### 33.2.1.&nbsp;Configuration
        <p>On all units that will be master units set the "Playback Sync type" option.</p>
        <p>The Setup option "Playback Sync Type" has the options:</p>
        <div class="itemizedlist">
            <ul class="itemizedlist">
                <li class="listitem">None: No synchronisation information is sent</li>
                <li class="listitem">Swap DBO Swap, DBO info only</li>
                <li class="listitem">Page Page changes only</li>
                <li class="listitem">Enhanced Playback Enhanced sync protocol (recommended)</li>
                <li class="listitem">Slave Slave (receive sync only)</li>
                <li class="listitem">Wings Wing data only (no data is sent for PB1 to PB10)</li>
                <li class="listitem">Obsolete (was Pb) Obsolete Playback info only mode</li>
                <li class="listitem">Obsolete (was PB,Swap,DBO) Obsolete Playback, Swap, DBO mode</li>
            </ul>
        </div>
        <p>We strongly recommend you use Enhanced as this is more reliable on heavily loaded networks.</p>
        <p>
            Therefore MaicQ systems can be set to track the playback exactly or just to honour DBO and Swap status. This means that, for
            example, when using two consoles, one for generic lights and one intelligent lights – pressing a Swap button on one console will
            affect both consoles.
        </p>
        <p>
            It is possible to synchronise with other (non MagicQ) consoles or external computers that support ChamSys Remote Ethernet
            Protocol.
        </p>
    </div>
    <div class="section">
        ### 33.2.2.&nbsp;Configuring which consoles Playback sync to which consoles
        <p>
            When there are multiple consoles on a network, it may be that consoles are controlling different network universes and therefore
            there may be more than one master console sending synchronisation information on the network.
        </p>
        <p>
            It is possible to set a MagicQ console to only accept synchronisation information from a particular console. In Multi Console
            Settings, "Playback Sync IP" enter the IP address of the console to accept synchronisation from. A value of 0.0.0.0 indicates
            that it will accept synchronisation from any console on the network.
        </p>
    </div>
</div>
<div class="section">
    ## 33.3.&nbsp;Manual configuration of Show Data Synchronisation
    <p>
        From software version 1.5.9.4 we recommend you use network sessions – all consoles in the network session are automatically
        configured for multi console programming. No further configuration is needed.
    </p>
    <p>
        MagicQ supports show file synchronisation in a network. One console is designated as the "Master Prog" console which will keep the
        master show file.
    </p>
    <p>
        The synchronisation of show data is separate to synchronisation of show playback state and hot takeover. Regardless of which console
        is actually controlling the universes the Master Prog console will remain in control of the master show file.
    </p>
    <p>
        When a Slave Prog console starts or is reset it makes a connection to the Master Prog console and tries to synchronise to the show
        master data. This consists of automatically grabbing the show data file from the show master and loading that show data file into
        the show slave. Users can also request a resynchronise at any time.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/multiconsoleoptions.png" alt="image" />
        </span>
    </p>
    <p>Configure the master console by setting the multi console setting "Show data sync type" to "Master Prog".</p>
    <p>
        On each of the slave consoles set the "Show data sync type" option to "Slave Prog" and set the "Show data sync IP" to the IP address
        of the master show console.
    </p>
    <p>
        There are hot keys on the slave consoles to enable and disable the show sync (as set up in Setup, View Settings, Multi Console).
        Hold the left and right cursor keys and press ‘+’ to enable the show sync and hold left and right cursor keys and press ‘-‘ to
        disable the show sync.
    </p>
    <p>To turn off show synchronisation on the master console simply set the Show Data Sync Type to None.</p>
</div>
<div class="section">
    ## 33.4.&nbsp;Manual configuration of Selective Channel Control
    <p>
        We recommend you use network sessions to configure selective channel control. In a network session all slave consoles can access
        channels from the master console by View DMX I/O, Multi Prog Select described in the next section.
    </p>
    <p>
        If consoles are manually set up for multi programming by setting Show data sync to Master Prog and Slave Prog then selective channel
        control is automatically enabled.
    </p>
    <p>
        Selective channel control can also be used without multi programming. This gives slave consoles access to control part of a lighting
        rig (e.g. for a technician to test some lights) but does not give them the ability to change any of the stored show data. To
        configure this mode, set Show data sync type on the master to "Master Control" and on the slaves to "Slave Control."
    </p>
    <p>
        Note that when network sessions are not in use, each console operates as a separate console in terms of the DMX I/O settings – so
        for example if you were to enable the universes on each of the consoles then there would be a "fight" between the consoles.
        Universes must be enabled / disabled manually on each console or set to hot takeover.
    </p>
</div>
<div class="section">
    ## 33.5.&nbsp;Automatic backing up of shows from other consoles
    <p>
        It is possible to set a MagicQ console or a MagicQ PC to automatically back up show files from one or more other consoles on the
        network. Optionally, this console can be made to automatically run one of the shows.
    </p>
    <p>
        Warning - if this option is configured incorrectly then your show files could get accidentally overwritten. Always back up your show
        files to external media / computer systems.
    </p>
    <p>In the Setup Window, View Settings, Multi Console configure the "Show sync type" option to "Archive".</p>
    <p>
        When set to "Archive", MagicQ periodically checks for other consoles on the network and grabs the show files that are running on
        those consoles. The show files are stored in the normal show folder.
    </p>
    <p>
        When this feature is used to back-up multiple consoles, it is important that different show file names are used on each of the other
        consoles – otherwise files from different consoles will overwrite each other on the back-up console.
    </p>
    <p>
        Note that files will only be copied from consoles that have the "auto backup" option set to "yes" or "on changes". Files will not be
        copied from consoles that do not have this set (e.g. when the playback mode is set to "Safe"). This avoids any performance impact
        from copying of files from live consoles.
    </p>
    <p>
        When set to "Show Sync" MagicQ copies the files as above. It will then load one of the shows that it has copied. If there are
        multiple consoles on the network then it will always run the show file from the same console.
    </p>
    <p>
        This feature can be used to back up show files from PCs running MagicQ PC as well as from consoles – these PCs must have the drive
        where MagicQ is installed shared on the network (e.g. share C: as C).
    </p>
</div>
