---
id: udp
title: Chapter 36. Controlling MagicQ using UDP/IP
sidebar_position: 36
---

# Chapter 36. Controlling MagicQ using UDP/IP

<p>
    MagicQ consoles and MagicQ PC/Mac software supports the use of an network protocol for controlling external devices, such as media
    servers, video or automation computers.
</p>
<p>The protocol can also be used to remote control MagicQ consoles or MagicQ software via a simple set of text commands.</p>
<p>
    Note that the use of the ChamSys Remote Ethernet Protocol on MagicQ PC/Mac is only enabled when it is connected to a MagicQ Wing or
    Interface (not MagicDMX).
</p>
<p>
    On MagicQ commands are placed in the Macro field of the Cue Stack and are transmitted when the Cue starts to execute. In addition MagicQ
    will accept commands received according to a pre-defined protocol.
</p>
<p>ChamSys Remote Ethernet Protocol is not supported when net session mode is in use.</p>
<div class="section">
    ## 36.1. ChamSys Remote Ethernet Protocol
    <p>Enable ChamSys Remote Ethernet Protocol in the View Settings view of the Setup Window.</p>
    <p>
        ChamSys Remote Ethernet Protocol is an open protocol – i.e. you do not need permission to use it for your own purposes. It is a
        UDP/IP based protocol using port 6553 in broadcast mode.
    </p>
    <p>The port number can be changed in setup, View Settings, Network, Playback Sync Port.</p>
    <p>The structure of the UDP/IP packets are a ChamSys CREP header followed by the remote commands:</p>
    <pre class="programlisting">
long32 chamsys;
word16 version;
byte seq_fwd;
byte seq_bkwd;
word16 length;
byte data;
</pre>
    <p>
        where
        <code class="literal">long32</code>
        is 4 bytes,
        <code class="literal">word16</code>
        is 2 bytes and
        <code class="literal">byte</code>
        is 1 byte.
    </p>
    <p>
        ChamSys is 4 characters C R E P. Note that on MagicQ this is stored as little-endian, so that on the network it will appear as P E R
        C.
    </p>
    <p>The version is initially 0 and allows for future expansion of the protocol.</p>
    <p>
        The fwd sequence number is an incrementing sequence number. It enables the receiving end to determine if packets are missed. In
        addition the receiving end should sends back the last sequence number it received in the backward sequence number.
    </p>
    <p>Length is the length of the data field. It does not include the length of the ChamSys header.</p>
    <p>
        From v1.6.6.0 support is added for ChamSys Remote Ethernet Protocol Messages without the ChamSys CREP header - this allows easier
        integration with external systems but reduces the amount of checking of messages performed. In Setup, View Settings, Network, set
        Ethernet remote protocol to "ChamSys Rem (rx no header)", "ChamSys Rem (tx no header), or "ChamSys Rem (tx + rx no header)".
    </p>
</div>
<div class="section">
    ## 36.2. Writing to the network port
    <p>
        Commands are transmitted from the network port using the Y macro in the Macro field of the Cue Stack window (use Page Right to find
        the Macro field). In the View Settings view of the Setup Window, set the Ethernet Remote Protocol to "ChamSys Rem tx".
    </p>
    <p>
        The format of Ethernet commands is Y followed by the data. To send Ethernet data, the Y command must be the only macro command in
        the macro field. The Y command is followed by ASCII data contained within " " or ‘ ‘ or by decimal values separated by commas. For
        example to send Hello World followed by a carriage return:
    </p>
    <pre class="literallayout">Y"Hello World",10,13</pre>
    <p>To send the hexadecimal data stream 00 01 02 03 04</p>
    <pre class="literallayout">Y0,1,2,3,4</pre>
    <p>To send text only:</p>
    <pre class="literallayout">Y"abcedf"</pre>
    <p>To send several lines of text:</p>
    <pre class="literallayout">Y"Hello",10,13,"World",10,13</pre>
    <p>On the Ethernet the data above is encapsulated in the data field of ChamSys Ethernet Remote Protocol in the UDP packet.</p>
    <p>
        Note that commas ‘,’ are not allowed within the ASCII data inside " " or ' ' . If you wish to send ', then you must send it as its
        hexadecimal ASCII code.
    </p>
</div>
<div class="section">
    ## 36.3. Reading from the network
    <p>
        By default data received on the network is ignored. This can be changed to make MagicQ accept remote commands received on the
        network port. In Setup, View Settings, set the Ethernet Remote Protocol to "ChamSys Rem rx".
    </p>
    <p>
        ChamSys Remote Protocol consists of simple commands consisting of a list parameter values separated by commas ', and ending in a
        character A to Z (or a to z). Commands can contain spaces, tabs, and carriage returns; they are all ignored. See the section on
        ChamSys Remote Protocol for further details.
    </p>
</div>
<div class="section">
    ## 36.4. Sample code fragments
    <p>The code fragments below show you could connect to MagicQ using simple C programming.</p>
    
</div>
