---
id: fx-editor
title: Chapter 29. FX Editor
sidebar_position: 29
---

# Chapter&nbsp;29.&nbsp;FX Editor
<p>
    MagicQ includes a FX editor added to enable users to create their own waveform FX and to edit existing waveform FX. The FX editor edits
    the core MagicQ waveform FX stored on the console – distinct from the combination FX stored in the FX Window. Waveform FX are not
    specific to a particular personality type – they can be used on any Head with the required attributes.
</p>
<p>
    <span class="inlinemediaobject">
        <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/fxeditgeneral.png" alt="image" />
    </span>
</p>
<p>
    Changes made in the FX editor have immediate effect on all Cues that use the FX – for example changing the standard circle FX will
    affect all cues with circle. It also affects the FX stored on the console, so all changes will affect new shows made on the console.
</p>
<p>
    MagicQ will not allow you to directly edit the inbuilt FX – you must SAVE AS to create a new FX before you make any changes in the FX
    Editor.
</p>
<p>
    From v1.4.0.3 MagicQ FX supports any number of attributes in a Waveform FX –previous versions supported a maximum of 3 different
    attributes. Note that shows that use Waveform FX with more than 3 attributes will not run correctly on software prior to v1.4.0.3.
</p>
<p>
    A MagicQ FX can store data for more than 1 head – so that for instance, you can make a FX with some heads perform circles in whilst
    others perform squares.
</p>
<p>
    In the FX Editor Window (FX Window, Edit FX) it is now possible to extract the user FX from a show file to the console. Press the
    EXTRACT USER FX soft button.
</p>
<p>It is possible to remove all user Waveform FX from a console. Press SHIFT + REMOVE USER FX.</p>
<div class="section">
    ## 29.1.&nbsp;View General
    <p>
        In View General you can configure properties for the FX. For FX that only use 1 attribute setting the "Apply to any attribute"
        enables the FX to be used on any attribute rather than being tied to a specific attribute such as dimmer.
    </p>
    <p>
        Defaults can be set up for speed, size, spread and contrast. Setting contrast to snap forces the contrast for the FX to default to 0
        – i.e. snap rather than fade. The contrast of a FX can be changed at any time during programming or playback.
    </p>
    <p>
        The add mode determines the default for how the FX is added to the base values – the choices are NORMAL, PLUS, MINUS or ABS. When
        set to ABS, playbacks will ignore any base values for the channels and treat the FX values as absolute values – this is useful for
        generating FX based on absolute positions or on specific colours on a colour wheel.
    </p>
</div>
<div class="section">
    ## 29.2.&nbsp;View Chans
    <p>
        Each step in the FX consists of a value between 0 and 255 and a curve. The curve specifies how the level changes from one step to
        the next. The valid curves are:
    </p>
    <p>0 – proportional fade 1 – sine fade 2 – cosine fade 3 – snap</p>
    <p>
        The waveform for the complete FX is shown at the top. Moving up and down with the cursor to a different attribute or head shows the
        waveform for that attribute / head.
    </p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/fxeditchans.png" alt="image" />
        </span>
    </p>
    <p>
        FX that have been recorded in a show, but that have not been stored onto the console can be extracted from the show by including the
        Cue that uses the FX. This will bring the FX into the FX Editor, and it can then be saved on the console.
    </p>
</div>
<div class="section">
    ## 29.3.&nbsp;Palette FX
    <p>
        In the FX Editor in View General, set up "Use Palettes" to be either "Pos", "Col" or "Beam". Then in View Chans, the values become
        Palette entries rather than absolute values.
    </p>
    <p>Each step in the Waveform FX can use any of the first 256 Palettes.</p>
    <p>
        <span class="inlinemediaobject">
            <img src="https://secure.chamsys.co.uk/help/documentation/magicq/images/fxeditpalette.png" alt="image" />
        </span>
    </p>
    <p>
        When applying a Palette FX if a Palette does not contain the specified attribute for a selected head then it will use the attribute
        from the first head in the Palette with that attribute. If that attribute is not contained in the palette at all then the default
        value for that attribute will be used.
    </p>
    <p>
        It is possible to set a FX to ignore attributes that are not in any of the specified palettes by setting the "Ignore Unused
        Palettes" to "yes". This, for example, enables a 2 Col FX which contains all colour attributes to be applied to a head without the
        FX affecting the colour wheels. When running Palette based FX any attributes that are used by the FX but that do not have values in
        the Palette will have a zero FX applied. When this option is not set then behaviour is as in previous software - the FX uses values
        from similar heads within the FX, or if none uses the attribute default value.
    </p>
</div>
