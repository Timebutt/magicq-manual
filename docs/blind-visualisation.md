---
id: blind-visualisation
title: Chapter 47. Blind Visualisation
sidebar_position: 47
---

# Chapter 47. Blind Visualisation
<p>
    MagicQ supports Blind Visualisation and Preview Visualisation when used together with MagicVis, Capture or WYSIWYG. This enables a
    Visualiser to show the contents of the Programmer during BLIND mode or to preview a Playback that is not active on the real outputs.
</p>
<p>
    In Patch, View Vis press the VIS SOURCE Soft button to choose between visualising the console Output, the BLIND programmer, the
    Programmer Only, the selected Playback, or the next step on the selected Playback.
</p>
<p>
    When set to "Blind Programmer" MagicQ will add the contents of the Programmer to the Output visualisation even when the programmer is in
    BLIND mode.
</p>
<p>
    When set to "Prog Only" MagicQ will show the contents of the programmer without the current playback state regardless of the Blind
    state.
</p>
<p>
    When set to "Playback" MagicQ will show in the visualiser the contents of the selected Playback as if the Playback fader was at 100%.
    Only data from the selected Playback is shown.
</p>
<p>
    When set to "Next GO" MagicQ will show in the visualiser the output of the console as it would appear if GO was pressed on the selected
    Playback. When the selected Playback has multiple steps then MagicQ always shows the next step in the Visualiser. If the selected
    Playback is not active then MagicQ will show what would occur if the Playback was activated.
</p>
<p>When set to "Output" MagicQ will the console live output.</p>
<p>
    Blind Visualisation and Preview Visualisation do not affect the normal network outputs such as ArtNet, ACN, or Pathport. Only the DMX
    stream sent directly to the Visualiser is affected.
</p>
<p>
    When using Capture visualisation, Capture must be connected via CITP universes rather than ArtNet – otherwise Capture will just show the
    console output.
</p>
<div class="section">
    ## 47.1. Split Visualisation in MagicVis
    <p>
        MagicVis now supports split visualisation where it is possible to show simultaneously both the Live Output and the Blind
        Visualisation.
    </p>
    <p>In MagicVis select View, Split Screen.</p>
    <p>The upper window will always show the Live Output.</p>
    <p>
        The lower window will show the normal MagicQ visualisation - which will depend on the Vis Source option above. When set to "Output"
        it will show the same as the upper window.
    </p>
    <p>
        Note that when using stand alone MagicVis, for both the Output and the Blind Preview to work then the console Output must be set to
        output over the network using a network protocol such as ArtNet, ACN or Pathport - otherwise the Output will not be shown when Blind
        Preview is in operation.
    </p>
</div>
<div class="section">
    ## 47.2. Automatic Source Selection
    <p>In Setup, View Settings, Mode set the Visualiser option to "Auto insert, auto Previs" for automatic pre visualisation.</p>
    <p>
        When MagicVis is running with the 3D view with Output as the source and BLIND is pressed on the console, then MagicVis automatically
        changes to split Output/Blind Preview mode so that both the output and Blind programmer can be monitored. When BLIND mode is exited
        then MagicVis returns to the single 3D view.
    </p>
    <p>
        When MagicVis is running with the 3D view with Output as the source, and a S button is held on the console then MagicVis will change
        temporarily to show the contents of the Playback rather than the Output. On releasing the S button MagicVis reverts to showing the
        Output.
    </p>
</div>
