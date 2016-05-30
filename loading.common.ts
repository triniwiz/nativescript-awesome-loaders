import * as app from 'application';
import * as view from 'ui/core/view';
import {Property, PropertyMetadataSettings, PropertyChangeData} from "ui/core/dependency-observable";
import {PropertyMetadata} from "ui/core/proxy";


export class LoadingIndicator extends view.View {

  static indicatorProperty = new Property("indicator", "LoadingIndicator", new PropertyMetadata(undefined, PropertyMetadataSettings.None))
  static indicatorColorProperty = new Property("indicatorColor", "LoadingIndicator", new PropertyMetadata(undefined, PropertyMetadataSettings.None))

  constructor() {
    super();
  }
  get indicator(): string {
    return this._getValue(LoadingIndicator.indicatorProperty);
  }
  set indicator(value: string) {
    this._setValue(LoadingIndicator.indicatorProperty, value);
  }
  get indicatorColor(): string {
    return this._getValue(LoadingIndicator.indicatorColorProperty);
  }
  set indicatorColor(value: string) {
    this._setValue(LoadingIndicator.indicatorColorProperty, value);

  }
}