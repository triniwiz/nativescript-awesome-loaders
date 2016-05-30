#Installation
`tns plugin add nativescript-awesome-loaders`

#Usage

```js
import {AwesomeLoaders} from 'nativescript-awesome-loaders';
let li = new AwesomeLoaders();
```    

Set Width 

`li.width = 60`

Set Height

`li.height = 60`

Set Indicator

`li.indicator = "Pacman"`

Set Indicator Color

`li.indicatorColor= "#FFEB3B"`

TypeScript
```ts
import {AwesomeLoaders} from 'nativescript-awesome-loaders';

 let li = new AwesomeLoaders();
    li.width = 60;
    li.height = 60;
    li.indicator = "SemiCircleSpin";
    li.indicatorColor= "black";
```

JavaScript
```js
var AwesomeLoaders = require('nativescript-awesome-loaders').AwesomeLoaders;
 let li = new AwesomeLoaders();
    li.width = 60;
    li.height = 60;
    li.indicator = "SemiCircleSpin";
    li.indicatorColor= "black";
```



###Xml markup settings

IMPORTANT: Make sure you include xmlns:li="nativescript-awesome-loaders" on the Page element

e.g
`    <li:AwesomeLoaders width="60" height="60"   indicator="Pacman" indicatorColor="#FFEB3B" /> `

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