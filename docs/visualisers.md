---
id: visualisers
title: Chapter 48. Using MagicQ with other Visualisers
sidebar_position: 48
---

# Chapter 48. Using MagicQ with other Visualisers
<p>
    In addition to its own free MagicVis visualiser, MagicQ supports connection with other Visualisers via network protocols. MagicQ
    supports transfer of patch, XYZ and head selection information to and from Visualisers. The protocol used to communicate between MagicQ
    and the Visualiser depends on the particular Visualiser.
</p>
<p>
    The simplest way to connect is using the Art-Net protocol in the same way as you would connect to Art-Net to DMX interfaces. Art-Net
    does not support transfer of patch, XYZ or head selection information, so for this you will need to use a Visualiser specific protocol.
</p>
<p>
    It is possible to run MagicQ PC/Mac on the same system that is running the Visualiser. For best performance it may be better to run them
    on separate PCs linked via Ethernet.
</p>
<div class="section">
    ## 48.1. Connecting to a Visualiser
    <p>
        MagicQ PC outputs up to a maximum of 64 universes for real control of lighting rigs configured in the Status, Out Type, Out Uni
        fields in Setup, View DMX I/O.
    </p>
    <p>
        From V1.8.7.6 MagicQ PC supports external Visualisers for up to 256 universes via direct links to the Visualiser. When using more
        than 64 universes direct Visualiser links must be used.
    </p>
    <p>
        When in MQ250M Previs, MQ500 Previs and MQ500M Previs panel modes normal lighting output is inhibited and Visualisers must also be
        connected with direct visualiser links.
    </p>
    <p>These are configured in the Visualiser field in Setup, View DMX I/O.</p>
    <p>The options are:</p>
    <div class="informaltable">
        <table class="informaltable" cellpadding="4px">
            <colgroup>
                <col class="col_1" />
                <col class="col_2" />
            </colgroup>
            <tbody>
                <tr>
                    <td align="left" valign="top"><p>MagicVis</p></td>
                    <td align="left" valign="top"><p>Default</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Capture (rem)</p></td>
                    <td align="left" valign="top"><p>Capture (same PC)</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>WYSIWYG (same PC)</p></td>
                    <td align="left" valign="top"><p>WYSIWYG (rem)</p></td>
                </tr>
                <tr>
                    <td align="left" valign="top"><p>Art/sACN(same PC)</p></td>
                    <td align="left" valign="top"><p>Art/sACN(rem)</p></td>
                </tr>
            </tbody>
        </table>
    </div>
    <p>
        When set to Art/sACN MagicQ sends directly over Art-Net or sACN to the Visualiser using the settings in Out Type and Out Uni. The
        universe does not need to be enabled.
    </p>
    <p>
        In Setup, View Settings, Network set Visualiser IP to the required IP address of the Visualiser system. Art-Net and sACN data sent
        to Visualisers via the Visualisers field is always unicast - it is never broadcast or multicast.
    </p>
    <p>
        To run both MagicQ PC and Visualiser on one PC set the option Setup, View Settings, Network, Net host options to Normal + Loopback
        IP.
    </p>
    <p>
        To run MagicQ PC and a Visualiser on two different systems then you need to ensure that both systems have their IP address and
        Subnet Address set up to be on the same network range - e.g. set one to 2.0.0.1 subnet 255.0.0.0 and the other to 2.0.0.2 subnet
        255.0.0.0.
    </p>
    <p>
        When MagicQ PC sends to an external Visualiser the data for universes 65 to 256 will have occasional breaks to prevent it being used
        to control real lighting rigs. When MagicQ PC is in the MQ250M, MQ500 or MQ500M Previs modes all universes have these breaks. These
        breaks are not present on MQ500 200 universe or MQ500M consoles which output full 256 universes.
    </p>
</div>
<div class="section">
    ## 48.2. Capture
    <p>MagicQ supports connections to Capture visualiser (www.capturesweden.com).</p>
    <p>
        There are two protocols for communication between MagicQ and Capture – Art-Net and CITP. Art-Net is a standard protocol used to
        carry DMX over Ethernet and enables control of the lighting.
    </p>
    <p>
        CITP is an open protocol specific to Capture which enables both control of lighting and the transfer of the show patch between
        MagicQ and Capture. ChamSys provides executable files for both protocols.
    </p>
    <p>
        To communicate using Art-Net simply set the required universes to Output Type of Art-Net in Setup, View DMX I/O and enable the
        universes. To use CITP simply set the Visualiser field for all required universes to Capture.
    </p>
    <div class="section">
        ### 48.2.1. Receiving Patch Data from Capture
        <p>
            It is possible for patch data to be transmitted from Capture to MagicQ when connected via CITP protocol. Start a new show on
            MagicQ and then in the Patch Window press the Visualiser Patch soft button. This will download the Patch information from
            Capture to MagicQ. MagicQ uses a fields in the personality to specify the Capture manufacturer name (Make) and Capture moving
            light name).
        </p>
        <p>
            Note that when receiving patch data from Capture, along with DMX addresses set in Capture, the channel number must also be set
            in Capture. Capture channel numbers = head numbers in MagicQ
        </p>
    </div>
</div>
<div class="section">
    ## 48.3. WYSIWYG
    <p>
        MagicQ interfaces to the
        <a class="ulink" href="https://cast-soft.com/" target="_top">CAST</a>
        WYSIWYG visualiser using a special driver file.
    </p>
    <p>WYSIWYG and MagicQ can be on the same PC, or connected via network cable to another PC or console.</p>
    <p>
        <span class="strong">
            <strong>From MagicQ v1.9.0.5, the WYSIWYG driver is automatically installed when MagicQ PC is installed.</strong>
        </span>
        Just install MagicQ v1.9.0.5 or later on the same PC as WYSIWYG. You can install a previous version of MagicQ afterwards if needed;
        the WYSIWYG driver will stay.
    </p>
    <p>
        There is a WYSIWYG demo show at
        <code class="literal">show/demos/magicqwysiwyg.wyg</code>
        .
    </p>
    <div class="section">
        ### 48.3.1. Enabling MagicQ to output WYSIWYG data
        <p>Now you need to configure the outputs. Go to the Setup, View DMX I/O window.</p>
        <p>
            Move to the Visualiser row and select WYSIWYG for the universes you wish to use. There is no need to change the Status column to
            enabled - WYSIWYG is automatically enabled when you select WYSIWYG as the visualiser.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/wysiwyg.png" alt="image" />
            </span>
        </p>
        <p>
            If you are using WYWISYG on the same PC as MagicQ then set the Visualiser to WYSIWYG (same PC) – otherwise, set it to WYSIWYG
            (remote). When connecting to WYSIWYG using a MagicQ console, always use WYSIWYG (remote).
        </p>
        <p>
            When using WYSIWYG and MagicQ on different PCs it is important to ensure that MagicQ PC knows the IP address to use to
            communicate with WYSIWYG.
        </p>
        <p>
            In Setup, View Settings, Network set the IP Address and Subnet Mask to be the same as the IP address of your network port in use
            on your PC.
        </p>
        <p>
            The WYSIWYG driver installed by MagicQ v1.9.0.5 and later allows up to 256 universes, depending on the universe count of the
            connected MagicQ PC or console.
        </p>
    </div>
    <div class="section">
        ### 48.3.2. Running WYSIWYG
        <p>Start up WYSIWYG.</p>
        <p>
            To get WYSIWYG to respond to data received you need to set up the ports in Device Manager. Go to
            <span class="emphasis"><em>LIVE</em></span>
            mode, then
            <span class="emphasis"><em>MANAGERS</em></span>
            →
            <span class="emphasis"><em>Device Manager…</em></span>
            . If MagicQ is not already in the list, click on
            <span class="emphasis"><em>New</em></span>
            , search for and add "ChamSys MagicQ". Select ChamSys MagicQ and then
            <span class="emphasis"><em>Connect</em></span>
            .
        </p>
        <p>Make sure you have installed the MagicQ WYSIWYG driver on the WYSIWYG PC. MagicQ will not connect to WYSIWYG without it.</p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/wygconnect.png" alt="image" />
            </span>
        </p>
        <p>
            The universes in WYSIWYG must be bound to the ChamSys MagicQ device in order for communication to occur with MagicQ. Select
            ChamSys MagicQ and click on
            <span class="emphasis"><em>Properties</em></span>
            to setup universe mapping.
        </p>
        <p>
            <span class="inlinemediaobject">
                <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/wygconnect2.png" alt="image" />
            </span>
        </p>
    </div>
    <div class="section">
        ### 48.3.3. Auto Patch
        <p>
            MagicQ supports the WYSIWYG Auto Patch protocol, which transfers the patch from WYSIWYG to MagicQ. To transfer a new show to
            MagicQ first erase the show in MagicQ, then in WYSIWYG go to
            <span class="emphasis"><em>LIVE</em></span>
            mode, then
            <span class="emphasis"><em>LIVE</em></span>
            →
            <span class="emphasis"><em>AutoPatch</em></span>
            →
            <span class="emphasis"><em>Send Patch</em></span>
            .
        </p>
        <p>
            Make sure that you have defined a Spot Number to each of your heads in WYSIWYG, otherwise WYSIWYG will not send the head over
            Auto Patch.
        </p>
        <p>
            MagicQ identifies the fixtures in WYSIWYG and maps the names to the MagicQ heads using a mapping table and a matching algorithm.
            If MagicQ can not identify a head it may patch the wrong head or not patch it at all.
        </p>
        <p>
            In the MagicQ personality it is possible to specify the WYSIWYG Auto Patch name that it should map to this MagicQ personality.
        </p>
        <p>
            When performing an Auto Patch, MagicQ will report any heads that it can not match. To fix a personality, edit the head in the
            Head Editor, setting the correct WYSIWYG name. If the WYSIWYG name is empty then pressing ENTER will fill in with the name
            received from WYSIWYG for the last mismatch.
        </p>
        <p>
            When using WYSIWYG with a separate MagicQ console make sure that on the console, Setup, View Settings, Multi Console, Enable
            Remote Access = Yes. This ensures the patch can be transferred correctly to the console.
        </p>
    </div>
    <div class="section">
        ### 48.3.4. Auto Focus
        <p>
            MagicQ supports the WYSIWYG Auto Focus protocol. If you turn Auto Focus on for the ChamSys port in the Device Manager on WYSIWYG
            then changes made in WYSIWYG design mode will be relayed to the programmer in the console.
        </p>
    </div>
    <div class="section">
        ### 48.3.5. Troubleshooting
        <p>Problem: WYSIWYG does not receive any data.</p>
        <p>
            Solution: Check that you have installed the MagicQ WYSIWYG driver on the WYSIWYG PC. Check that the connection is connected in
            WYSIWYG device manager. Check that you have configured the correct MagicQ universes to use WYSIWYG as their Vsualiser.
        </p>
        <p>Problem: WYSIWYG will not connect on the same PC as MagicQ.</p>
        <p>Solution: Check that you have configured the Visualiser to be WYSIWYG (same PC) in the Setup Window.</p>
        <p>Problem: WYSIWYG will not connect between two separate PCs.</p>
        <p>
            Solution: Check that the network interfaces on the two PCs are configured to the same IP subnet, that they are enabled, and that
            you have configured MagicQ to use the correct network port (Setup, View Settings, IP address). Check any firewall settings.
        </p>
        <p>Problem: WYSIWYG connects but no control of the lamps</p>
        <p>Solution: Check the MagicQ Universe in WYSIWYG is bound to the MagicQ device.</p>
    </div>
</div>
<div class="section">
    ## 48.4. Vision, Depence, L8
    <p>
        Vision, Depence and L8 all support Art-Net control. Simply set the required universes to Out Type of Art-Net and enable them. The
        Visualiser field should be set to "None".
    </p>
    <p>
        For greater than 64 universes or when in Previs mode set the Visualiser field to Art/sACN (remote) or Art/sACN (same PC) and
        configure the Visualiser IP in Setup, View Settings, Network.
    </p>
</div>
