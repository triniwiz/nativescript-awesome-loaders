#Installation
`tns plugin add nativescript-loadingindicator`

#Usage

```js
import {LoadingIndicator} from 'nativescript-loadingindicator';
let li = new LoadingIndicator();
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
import {LoadingIndicator} from 'nativescript-loadingindicator';

 let li = new LoadingIndicator();
    li.width = 60;
    li.height = 60;
    li.indicator = "SemiCircleSpin";
    li.indicatorColor= "black";
```

JavaScript
```js
var LoadingIndicator = require('nativescript-loadingindicator').LoadingIndicator;
 let li = new LoadingIndicator();
    li.width = 60;
    li.height = 60;
    li.indicator = "SemiCircleSpin";
    li.indicatorColor= "black";
```



###Xml markup settings

IMPORTANT: Make sure you include xmlns:li="nativescript-loadingindicator" on the Page element

e.g
`    <li:LoadingIndicator width="60" height="60"   indicator="Pacman" indicatorColor="#FFEB3B" /> `

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