---
id: serial
title: Chapter 37. Controlling MagicQ using the serial port
sidebar_position: 37
---

# Chapter 37. Controlling MagicQ using the serial port
<p>The MQ500 and MagicQ PC software support the use of a serial port for controlling external devices or automation computers.</p>
<p>The serial port can also be used to remote control the MagicQ console or MagicQ software via a simple set of text commands.</p>
<p>MagicQ supports standard baud rates, stop bits and parity options for serial communication.</p>
<p>The use of a serial port on MagicQ PC is only enabled when it is connected to a MagicQ Wing or Interface.</p>
<div class="section">
    ## 37.1. Connecting the serial port
    <p>The MQ500 uses a female DE-9 connector.</p>
    <div class="table">
        <a id="idm11883"></a>
        <p class="title"><strong>Table 37.1. Serial port pinout</strong></p>
        <div class="table-contents">
            <table class="table" summary="Serial port pinout" cellpadding="4px">
                <colgroup>
                    <col class="col_1" />
                    <col class="col_2" />
                    <col class="col_3" />
                </colgroup>
                <thead>
                    <tr>
                        <th align="left" valign="top">DE-9 pin</th>
                        <th align="left" valign="top">Signal</th>
                        <th align="left" valign="top">Direction</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="left" valign="top"><p>2</p></td>
                        <td align="left" valign="top"><p>RX</p></td>
                        <td align="left" valign="top"><p>Into console</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>3</p></td>
                        <td align="left" valign="top"><p>TX</p></td>
                        <td align="left" valign="top"><p>Out of console</p></td>
                    </tr>
                    <tr>
                        <td align="left" valign="top"><p>5</p></td>
                        <td align="left" valign="top"><p>Ground</p></td>
                        <td align="left" valign="top"><p></p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <br class="table-break" />
    <p>You need a cross-over cable (aka "null modem cable") to connect between two serial ports, which swaps pins 2 and 3 .</p>
    <p>
        Turn off software and hardware flow control on the remote serial port - MagicQ does not use these. The usage of pins other than 2, 3
        and 5 varies between consoles but in most cases do not need to be connected.
    </p>
</div>
<div class="section">
    ## 37.2. Enabling the serial port
    <p>
        Enable the serial port in
        <span class="emphasis"><em>SETUP</em></span>
        ,
        <span class="emphasis"><em>VIEW SETTINGS</em></span>
        ,
        <span class="emphasis"><em>Ports</em></span>
        . Set
        <span class="emphasis"><em>Serial com port</em></span>
        to the COM port that you wish to use (on the console always select COM1). Set the baud rate, parity, data bits and stop bits.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/setupserialport.png" alt="image" />
        </span>
    </p>
</div>
<div class="section">
    ## 37.3. Writing to the serial port
    <p>Commands are transmitted out of the serial port by placing the command in the Macro field of the Cue Stack window.</p>
    <p>
        The format of serial commands is X followed by the data. To send serial data, the X command must be the only macro command in the
        macro field. The X command is followed by ASCII data contained within quotes (' ') or by decimal values separated by commas. For
        example to send Hello World followed by a carriage return:
    </p>
    <pre class="literallayout">X'Hello World',10,13</pre>
    <p>To send the binary data stream 00 01 02 03 04</p>
    <pre class="literallayout">X0,1,2,3,4</pre>
    <p>To send text only:</p>
    <pre class="literallayout">X'abcedf'</pre>
    <p>To send several lines of text:</p>
    <pre class="literallayout">X'Hello',10,13,'World',10,13</pre>
</div>
<div class="section">
    ## 37.4. Reading from the serial port
    <p>
        <span class="emphasis"><em>Serial remote protocol</em></span>
        must be set to
        <span class="emphasis"><em>CRP &amp; Automs</em></span>
        to receive remote commands or trigger AUTOM items.
    </p>
    <p>
        ChamSys Serial Remote protocol consists of a list of parameter values separated by commas ‘,’ and ending in a character A to Z (or a
        to z). Commands can contain spaces, tabs, and carriage returns; they are all ignored. See the section on
        <a class="link" href="rpc.html" title="Chapter 35. ChamSys Remote Protocol Commands">ChamSys Remote Protocol</a>
        for further details.
    </p>
    <p>
        AUTOM items can trigger on serial commands. Set
        <span class="emphasis"><em>Type</em></span>
        to
        <span class="emphasis"><em>Serial</em></span>
        ,
        <span class="emphasis"><em>P2</em></span>
        to the number of bytes expected and
        <span class="emphasis"><em>P3</em></span>
        to the serial command expected, in the same format as serial cue macros without the leading
        <span class="emphasis"><em>X</em></span>
        .
    </p>
    <p>If there are any serial AUTOM items, remote protocol commands are ignored.</p>
</div>
<div class="section">
    ## 37.5. Testing receiving serial commands
    <p>
        It is possible to test the behaviour when MagicQ receives serial commands without an external serial connection. Type "testser"
        followed by the command, in the same format as serial cue macros without the leading
        <span class="emphasis"><em>X</em></span>
        .
    </p>
    <p>For example to activate playback 1 enter:</p>
    <pre class="literallayout">testser '1a'</pre>
    <p>or:</p>
    <pre class="literallayout">testser 49,65</pre>
    <p>MagicQ version v1.8.6.6 minimum is needed to use the MQ500 serial port or the "testser" command.</p>
</div>
