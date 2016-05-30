import * as view from 'ui/core/view';
import { Property } from "ui/core/dependency-observable";
export declare class LoadingIndicator extends view.View {
    static indicatorProperty: Property;
    static indicatorColorProperty: Property;
    constructor();
    indicator: string;
    indicatorColor: string;
}
