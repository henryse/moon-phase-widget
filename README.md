<h1 align="center">Moon phase widget for Website</h1>
<p align="center"><i>Super tiny (only 3kb minified) javascript library to add awesome moon phase widget to your website. </i></p>
<p align="center">
  <img src="https://github.com/henryse/moon-phase-widget/raw/master/screenshots/example1.png?raw=true" alt="Moon phase widget for website" style="max-width:75%;">
</p>
<p align="center"><i>(This is a screenshot as an example)</i></p>

## Features
* Auto Geo detection
* Moon phase name and image
* Moon set and moon rise time
* Moon zodiac sign
* Super small size (This will not affect the speed of your site)
* Ability to change the background color
* 3 different styles (normal, small, horizontal)

## How To Install (Easy way)
The easiest way to install the widget is by using [CDN](https://www.jsdelivr.com/package/npm/moon-phase-widget)

[![](https://data.jsdelivr.com/v1/package/npm/moon-phase-widget/badge)](https://www.jsdelivr.com/package/npm/moon-phase-widget)

Just copy the code below and paste it where you want to see the widget.

```
<div id="moon-phase-widget" data-color="white"></div>
<script async src="https://cdn.jsdelivr.net/npm/moon-phase-widget@1.5.0/build/automount.min.js">
</script>
```
Thats all.

If you want you can change the background color by adding your value to ```data-color``` attribute.

Text ```white``` or hex value ```#FFFFFF```

Also, you can choose from different styles of the widget (By adding specific value to ```data-style```).

**Normal** (default style)

**Small:**

```
<div id="moon-phase-widget" data-color="white" data-style="small"></div>
<script async src="https://cdn.jsdelivr.net/npm/moon-phase-widget@1.5.0/build/automount.min.js">
</script>
```

**Horizontal orientation:**

```
<div id="moon-phase-widget" data-color="white" data-style="horizontal"></div>
<script async src="https://cdn.jsdelivr.net/npm/moon-phase-widget@1.5.0/build/automount.min.js">
</script>
```

## Usage via npm

![npm](https://img.shields.io/npm/dm/moon-phase-widget?style=flat-square)

Install package:

```
npm install moon-phase-widget
```
Import code and styles (if you want):
```javascript
import { MoonPhaseWidget } from 'moon-phase-widget'

import 'moon-phase-widget/src/index.css'

new MoonPhaseWidget('some-element-id')
```

## Contacts
More information about moon phase you can find [here](https://moonorganizer.com/en/moon-phase-for-today/)

Fill free to contact me if you need help with customization or installation.

## Development
### Build
npm run build
