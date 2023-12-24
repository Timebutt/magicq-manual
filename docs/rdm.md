---
id: rdm
title: Chapter 31. Remote Device Management (RDM)
sidebar_position: 31
---

# Chapter&nbsp;31.&nbsp;Remote Device Management (RDM)
<div class="section">
    ## 31.1.&nbsp;Introduction
    <p>
        <a class="ulink" href="http://www.rdmprotocol.org/" target="_top">Remote Device Management (RDM)</a>
        is an extension to the DMX512 protocol that allows a lighting console to detect all the RDM-enabled lighting fixtures plugged into a
        DMX line, and remotely change their settings (e.g. DMX address and mode).
    </p>
    <p>
        RDM-enabled fixtures can co-exist with older non-RDM fixtures. RDM uses the same pair of wires in the DMX cable as regular DMX,
        avoiding the need to replace any cabling. If you are using DMX splitters this will stop RDM from working unless the splitters are
        RDM aware.
    </p>
    <p>Currently MagicQ MQ50, MQ70 and MQ80 consoles support RDM via direct DMX ports.</p>
    <p>All MagicQ consoles support RDM over Art-Net with network nodes that support this function.</p>
    <p>
        In MagicQ RDM Fixtures are viewed, configured, and patched in the
        <a class="link" href="network-manager.html" title="Chapter&nbsp;30.&nbsp;Network Manager (SnakeSys)">Net Manager</a>
        - go to Setup, View DMX I/O, Net Manager.
    </p>
</div>
