import { AwesomeLoaders as Root, indicatorProperty, indicatorColorProperty } from "./awesome-loaders.common";
import { Color } from 'color';

declare var com: any;

export class AwesomeLoaders extends Root {
    private _android; /* com.wang.avi.AVLoadingIndicatorView */

    get android() /* com.wang.avi.AVLoadingIndicatorView */ {
        return this.nativeView;
    }

    public createNativeView() {
        if (!this.indicator) return;
        this._android = new com.wang.avi.AVLoadingIndicatorView(this._context);
        return this._android;
    }

    [indicatorProperty.setNative](indicator: string) {
        if (!indicator) return;
        switch (indicator) {
            case 'BallPulse':
                this.nativeView.setIndicator(new com.wang.avi.indicator.BallPulseIndicator());
                break;
            case 'BallGridPulse':
                this.nativeView.setIndicator(new com.wang.avi.indicator.BallGridPulseIndicator());
                break;
            case 'BallClipRotate':
                this.nativeView.setIndicator(new com.wang.avi.indicator.BallClipRotateIndicator());
                break;
            case 'BallClipRotatePulse':
                this.nativeView.setIndicator(new com.wang.avi.indicator.BallClipRotatePulseIndicator());
                break;
            case 'SquareSpin':
                this.nativeView.setIndicator(new com.wang.avi.indicator.SquareSpinIndicator());
                break;
            case 'BallClipRotateMultiple':
                this.nativeView.setIndicator(new com.wang.avi.indicator.BallClipRotateMultipleIndicator());
                break;
            case 'BallPulseRise':
                this.nativeView.setIndicator(new com.wang.avi.indicator.BallPulseRiseIndicator());
                break;
            case 'BallRotate':
                this.nativeView.setIndicator(new com.wang.avi.indicator.BallRotateIndicator());
                break;
            case 'CubeTransition':
                this.nativeView.setIndicator(new com.wang.avi.indicator.CubeTransitionIndicator());
                break;
            case 'BallZigZag':
                this.nativeView.setIndicator(new com.wang.avi.indicator.BallZigZagIndicator());
                break;
            case 'BallZigZagDeflect':
                this.nativeView.setIndicator(new com.wang.avi.indicator.BallZigZagDeflectIndicator());
                break;
            case 'BallTrianglePath':
                this.nativeView.setIndicator(new com.wang.avi.indicator.BallTrianglePathIndicator());
                break;
            case 'BallScale':
                this.nativeView.setIndicator(new com.wang.avi.indicator.BallScaleIndicator());
                break;
            case 'LineScale':
                this.nativeView.setIndicator(new com.wang.avi.indicator.LineScaleIndicator());
                break;
            case 'LineScaleParty':
                this.nativeView.setIndicator(new com.wang.avi.indicator.LineScalePartyIndicator());
                break;
            case 'BallScaleMultiple':
                this.nativeView.setIndicator(new com.wang.avi.indicator.BallScaleMultipleIndicator());
                break;
            case 'BallPulseSync':
                this.nativeView.setIndicator(new com.wang.avi.indicator.BallPulseSyncIndicator());
                break;
            case 'BallBeat':
                this.nativeView.setIndicator(new com.wang.avi.indicator.BallBeatIndicator());
                break;
            case 'LineScalePulseOut':
                this.nativeView.setIndicator(new com.wang.avi.indicator.LineScalePulseOutIndicator());
                break;
            case 'LineScalePulseOutRapid':
                this.nativeView.setIndicator(new com.wang.avi.indicator.LineScalePulseOutRapidIndicator());
                break;
            case 'BallScaleRipple':
                this.nativeView.setIndicator(new com.wang.avi.indicator.BallScaleRippleIndicator());
                break;
            case 'BallScaleRippleMultiple':
                this.nativeView.setIndicator(new com.wang.avi.indicator.BallScaleRippleMultipleIndicator());
                break;
            case 'BallSpinFadeLoader':
                this.nativeView.setIndicator(new com.wang.avi.indicator.BallSpinFadeLoaderIndicator());
                break;
            case 'LineSpinFadeLoader':
                this.nativeView.setIndicator(new com.wang.avi.indicator.LineSpinFadeLoaderIndicator());
                break;
            case 'TriangleSkewSpin':
                this.nativeView.setIndicator(new com.wang.avi.indicator.TriangleSkewSpinIndicator());
                break;
            case 'Pacman':
                this.nativeView.setIndicator(new com.wang.avi.indicator.PacmanIndicator());
                break;
            case 'BallGridBeat':
                this.nativeView.setIndicator(new com.wang.avi.indicator.BallGridBeatIndicator());
                break;
            case 'SemiCircleSpin':
                this.nativeView.setIndicator(new com.wang.avi.indicator.SemiCircleSpinIndicator());
                break;
        }
    }

    [indicatorColorProperty.setNative](color: Color) {
        if (color) {
            this.nativeView.setColor(color.android);
        }
    }

    public disposeNativeView() {
        this._android = undefined;
    }
}
