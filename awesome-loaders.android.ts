declare var com: any;
import common = require('./awesome-loaders.common');
import app = require('application');
import {PropertyMetadata} from 'ui/core/proxy';
import {PropertyChangeData} from "ui/core/dependency-observable";
import {Color} from 'color';


const BallBeatIndicator = com.wang.avi.indicator.BallBeatIndicator;
const BallClipRotateIndicator = com.wang.avi.indicator.BallClipRotateIndicator;
const BallClipRotateMultipleIndicator = com.wang.avi.indicator.BallClipRotateMultipleIndicator;
const BallClipRotatePulseIndicator = com.wang.avi.indicator.BallClipRotatePulseIndicator;
const BallGridBeatIndicator = com.wang.avi.indicator.BallGridBeatIndicator;
const BallGridPulseIndicator = com.wang.avi.indicator.BallGridPulseIndicator;
const BallPulseIndicator = com.wang.avi.indicator.BallPulseIndicator;
const BallPulseRiseIndicator = com.wang.avi.indicator.BallPulseRiseIndicator;
const BallPulseSyncIndicator = com.wang.avi.indicator.BallPulseSyncIndicator;
const BallRotateIndicator = com.wang.avi.indicator.BallRotateIndicator;
const BallScaleIndicator = com.wang.avi.indicator.BallScaleIndicator;
const BallScaleMultipleIndicator = com.wang.avi.indicator.BallScaleMultipleIndicator;
const BallScaleRippleIndicator = com.wang.avi.indicator.BallScaleRippleIndicator;
const BallScaleRippleMultipleIndicator = com.wang.avi.indicator.BallScaleRippleMultipleIndicator;
const BallSpinFadeLoaderIndicator = com.wang.avi.indicator.BallSpinFadeLoaderIndicator;
const BallTrianglePathIndicator = com.wang.avi.indicator.BallTrianglePathIndicator;
const BallZigZagDeflectIndicator = com.wang.avi.indicator.BallZigZagDeflectIndicator;
const BallZigZagIndicator = com.wang.avi.indicator.BallZigZagIndicator;
const BaseIndicatorController = com.wang.avi.indicator.BaseIndicatorController;
const CubeTransitionIndicator = com.wang.avi.indicator.CubeTransitionIndicator;
const LineScaleIndicator = com.wang.avi.indicator.LineScaleIndicator;
const LineScalePartyIndicator = com.wang.avi.indicator.LineScalePartyIndicator;
const LineScalePulseOutIndicator = com.wang.avi.indicator.LineScalePulseOutIndicator;
const LineScalePulseOutRapidIndicator = com.wang.avi.indicator.LineScalePulseOutRapidIndicator;
const LineSpinFadeLoaderIndicator = com.wang.avi.indicator.LineSpinFadeLoaderIndicator;
const PacmanIndicator = com.wang.avi.indicator.PacmanIndicator;
const SemiCircleSpinIndicator = com.wang.avi.indicator.SemiCircleSpinIndicator;
const SquareSpinIndicator = com.wang.avi.indicator.SquareSpinIndicator;
const TriangleSkewSpinIndicator = com.wang.avi.indicator.TriangleSkewSpinIndicator;




const BallPulse = 0;
const BallGridPulse = 1;
const BallClipRotate = 2;
const BallClipRotatePulse = 3;
const SquareSpin = 4;
const BallClipRotateMultiple = 5;
const BallPulseRise = 6;
const BallRotate = 7;
const CubeTransition = 8;
const BallZigZag = 9;
const BallZigZagDeflect = 10;
const BallTrianglePath = 11;
const BallScale = 12;
const LineScale = 13;
const LineScaleParty = 14;
const BallScaleMultiple = 15;
const BallPulseSync = 16;
const BallBeat = 17;
const LineScalePulseOut = 18;
const LineScalePulseOutRapid = 19;
const BallScaleRipple = 20;
const BallScaleRippleMultiple = 21;
const BallSpinFadeLoader = 22;
const LineSpinFadeLoader = 23;
const TriangleSkewSpin = 24;
const Pacman = 25;
const BallGridBeat = 26;
const SemiCircleSpin = 27;



function onIndicatorPropertyChanged(data: PropertyChangeData) {
    var indicator = <AwesomeLoaders>data.object;
    if (!indicator.android) {
        return;
    }

    indicator._setIndicator(data.newValue ? data.newValue : null);
}

function onIndicatorColorPropertyChanged(data: PropertyChangeData) {
    var color = <AwesomeLoaders>data.object;
    if (!color.android) {
        return;
    }

    color._setIndicatorColor(data.newValue ? data.newValue : null);
}



(<PropertyMetadata>common.AwesomeLoaders.indicatorProperty.metadata).onSetNativeValue = onIndicatorPropertyChanged;
(<PropertyMetadata>common.AwesomeLoaders.indicatorColorProperty.metadata).onSetNativeValue = onIndicatorColorPropertyChanged;


export class AwesomeLoaders extends common.AwesomeLoaders {
    private _android: com.wang.avi.AVLoadingIndicatorView;

    get android(): com.wang.avi.AVLoadingIndicatorView {
        return this._android;
    }
    public _createUI() {
        if (!this.indicator) return;
        this._android = new com.wang.avi.AVLoadingIndicatorView(this._context);
    }

    _setIndicator(indicator) {
        if (!indicator) return;
        switch (indicator) {
            case 'BallPulse':
                this._android.setIndicator(new BallPulseIndicator());
                break;
            case 'BallGridPulse':
                this._android.setIndicator(new BallGridPulseIndicator());
                break;
            case 'BallClipRotate':
                this._android.setIndicator(new BallClipRotateIndicator());
                break;
            case 'BallClipRotatePulse':
                this._android.setIndicator(new BallClipRotatePulseIndicator());
                break;
            case 'SquareSpin':
                this._android.setIndicator(new SquareSpinIndicator());
                break;
            case 'BallClipRotateMultiple':
                this._android.setIndicator(new BallClipRotateMultipleIndicator());
                break;
            case 'BallPulseRise':
                this._android.setIndicator(new BallPulseRiseIndicator());
                break;
            case 'BallRotate':
                this._android.setIndicator(new BallRotateIndicator());
                break;
            case 'CubeTransition':
                this._android.setIndicator(new CubeTransitionIndicator());
                break;
            case 'BallZigZag':
                this._android.setIndicator(new BallZigZagIndicator());
                break;
            case 'BallZigZagDeflect':
                this._android.setIndicator(new BallZigZagDeflectIndicator());
                break;
            case 'BallTrianglePath':
                this._android.setIndicator(new BallTrianglePathIndicator());
                break;
            case 'BallScale':
                this._android.setIndicator(new BallScaleIndicator());
                break;
            case 'LineScale':
                this._android.setIndicator(new LineScaleIndicator());
                break;
            case 'LineScaleParty':
                this._android.setIndicator(new LineScalePartyIndicator());
                break;
            case 'BallScaleMultiple':
                this._android.setIndicator(new BallScaleMultipleIndicator());
                break;
            case 'BallPulseSync':
                this._android.setIndicator(new BallPulseSyncIndicator());
                break;
            case 'BallBeat':
                this._android.setIndicator(new BallBeatIndicator());
                break;
            case 'LineScalePulseOut':
                this._android.setIndicator(new LineScalePulseOutIndicator());
                break;
            case 'LineScalePulseOutRapid':
                this._android.setIndicator(new LineScalePulseOutRapidIndicator());
                break;
            case 'BallScaleRipple':
                this._android.setIndicator(new BallScaleRippleIndicator());
                break;
            case 'BallScaleRippleMultiple':
                this._android.setIndicator(new BallScaleRippleMultipleIndicator());
                break;
            case 'BallSpinFadeLoader':
                this._android.setIndicator(new BallSpinFadeLoaderIndicator());
                break;
            case 'LineSpinFadeLoader':
                this._android.setIndicator(new LineSpinFadeLoaderIndicator());
                break;
            case 'TriangleSkewSpin':
                this._android.setIndicator(new TriangleSkewSpinIndicator());
                break;
            case 'Pacman':
                this._android.setIndicator(new PacmanIndicator());
                break;
            case 'BallGridBeat':
                this._android.setIndicator(new BallGridBeatIndicator());
                break;
            case 'SemiCircleSpin':
                this._android.setIndicator(new SemiCircleSpinIndicator());
                break;
        }


    }
    _setIndicatorColor(color) {
        if (color) {
            const data = new Color(color);
            this._android.setColor(data.android);
        }
    }
}