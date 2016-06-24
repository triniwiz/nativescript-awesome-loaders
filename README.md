[![npm](https://img.shields.io/npm/v/nativescript-awesome-loaders.svg)](https://www.npmjs.com/package/nativescript-awesome-loaders)
[![npm](https://img.shields.io/npm/dt/nativescript-awesome-loaders.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-awesome-loaders)
#Installation
`tns plugin add nativescript-awesome-loaders`

#Usage

```js
import {AwesomeLoaders} from 'nativescript-awesome-loaders';
let al = new AwesomeLoaders();
```    

Set Width 

`al.width = 60`

Set Height

`al.height = 60`

Set Indicator

`al.indicator = "Pacman"`

Set Indicator Color

`al.indicatorColor= "#FFEB3B"`

TypeScript
```ts
import {AwesomeLoaders} from 'nativescript-awesome-loaders';

 let li = new AwesomeLoaders();
    al.width = 60;
    al.height = 60;
    al.indicator = "SemiCircleSpin";
    al.indicatorColor= "black";
```

JavaScript
```js
var AwesomeLoaders = require('nativescript-awesome-loaders').AwesomeLoaders;
 let li = new AwesomeLoaders();
    al.width = 60;
    al.height = 60;
    al.indicator = "SemiCircleSpin";
    al.indicatorColor= "black";
```



###Xml markup settings

IMPORTANT: Make sure you include xmlns:al="nativescript-awesome-loaders" on the Page element

e.g
`    <al:AwesomeLoaders width="60" height="60"   indicator="Pacman" indicatorColor="#FFEB3B" /> `

##Screenshot

![ss](screenshots/loading_indicator.gif?raw=true)


##Indicators

As seen above in the Screenshot, the indicators are as follows:

**Row 1**
 * `BallPulse`
 * `BallGridPulse`
 * `BallClipRotate`
 * `BallClipRotatePulse`

**Row 2**
 * `SquareSpin`
 * `BallClipRotateMultiple`
 * `BallPulseRise`
 * `BallRotate`

**Row 3**
 * `CubeTransition`
 * `BallZigZag`
 * `BallZigZagDeflect`
 * `BallTrianglePath`

**Row 4**
 * `BallScale`
 * `LineScale`
 * `LineScaleParty`
 * `BallScaleMultiple`

**Row 5**
 * `BallPulseSync`
 * `BallBeat`
 * `LineScalePulseOut`
 * `LineScalePulseOutRapid`

**Row 6**
 * `BallScaleRipple`
 * `BallScaleRippleMultiple`
 * `BallSpinFadeLoader`
 * `LineSpinFadeLoader`

**Row 7**
 * `TriangleSkewSpin`
 * `Pacman`
 * `BallGridBeat`
 * `SemiCircleSpin`
