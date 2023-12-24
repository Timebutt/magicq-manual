---
id: curve-editor
title: Chapter 28. Curve Editor
sidebar_position: 28
---

# Chapter&nbsp;28.&nbsp;Curve Editor
<p>
    MagicQ includes a curve editor to allow users to create their own dimmer fade curves and effects curves. Curves are not specific to any
    head, they can be used on any head.
</p>
<p>
    Note the Curve editor is not available on Compact consoles or Pro2010 consoles. User curves can be used on these consoles, but not
    edited.
</p>
<p>
    <span class="inlinemediaobject">
        <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/curveeditor_scurve.png" alt="image" />
    </span>
</p>
<p>
    User Curves 1 to 10 correspond to the user dimmer curves that were supported in previous versions of MagicQ. These will still be
    automatically loaded from the user dimmer csv files (e.g. show\heads\dimmercurveuser1.csv) if they exist.
</p>
<p>
    User Curves 1 to 20 can also be used in the FX Editor (FX Window, Edit FX) as part of FX steps. Select View Chans and set the Curve
    filed. This allows completely custom FX waveforms to be generated.
</p>
<p>
    User Curves are saved within the show file and can be imported from other show files using Setup, Import Show, Advanced, and by
    deselecting all options except for "Import Curves".
</p>
<div class="section">
    ## 28.1.&nbsp;Creating a curve
    <p>
        In the Curve Editor Window (FX Window, Curve Editor) use wheel A to find an empty curve, then press ADD POINT to add new points to
        the curve, at least 2 points will be required. The first 2 points are automatically placed at the start and the end of the curve.
        Additional points will be placed in between.
    </p>
    <p>
        Curves can be saved into the show by pressing SAVE CURVE. RESET CURVE will return the curve to how it was last saved. Once the curve
        has been saved it will take effect.
    </p>
    <p>
        Note the Curve editor is not available on Compact consoles or Pro2010 consoles. User curves can be used on these consoles, but not
        edited.
    </p>
</div>
<div class="section">
    ## 28.2.&nbsp;Editing a curve
    <p>
        Points can be moved around by either clicking on them and dragging them, or by clicking on them then using encoder wheel X and Y to
        move them around. By clicking and dragging it is possible to select more then one point at a time and move it around.
    </p>
    <p>
        Pressing the Y encoder button will cycle the point between 100%, 0% and a position midway between the first and last points. To
        specify an exact position type the required percentage then press Set and the X or Y encoder button.
    </p>
    <p>
        To remove a point first select it by clicking on it then press REMOVE POINT. If more than one point is selected they will all be
        removed.
    </p>
    <p>
        Points can either be
        <span class="emphasis"><em>Linear</em></span>
        or
        <span class="emphasis"><em>Spline</em></span>
        . Spline points create a curved join between 2 lines while linear points create a sharp join between 2 lines. Select a point then
        press encoder E to change the type of a point.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/curveeditor_linearspline.png" alt="image" />
        </span>
    </p>
    <p>To name a curve first type type the required name then press Set, then encoder A.</p>
</div>
<div class="section">
    ## 28.3.&nbsp;Setting a dimmer curve
    <p>
        To use a curve as a dimmer curve got to the Patch Channels Window (Patch Window, View Chans). There is a column in the table called
        <span class="emphasis"><em>Curve</em></span>
        . Select the Curve column for the Head and press Set. The first user created curve will be called
        <span class="emphasis"><em>User 1</em></span>
        or the name provided.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/curveeditordimmercurve.png" alt="image" />
        </span>
    </p>
</div>
