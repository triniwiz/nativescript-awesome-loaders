import * as app from 'application';
import * as view from 'ui/core/view';
import {Property, PropertyMetadataSettings, PropertyChangeData} from "ui/core/dependency-observable";
import {PropertyMetadata} from "ui/core/proxy";


export class AwesomeLoaders extends view.View {

  static indicatorProperty = new Property("indicator", "AwesomeLoaders", new PropertyMetadata(undefined, PropertyMetadataSettings.None))
  static indicatorColorProperty = new Property("indicatorColor", "AwesomeLoaders", new PropertyMetadata(undefined, PropertyMetadataSettings.None))

  constructor() {
    super();
  }
  get indicator(): string {
    return this._getValue(AwesomeLoaders.indicatorProperty);
  }
  set indicator(value: string) {
    this._setValue(AwesomeLoaders.indicatorProperty, value);
  }
  get indicatorColor(): string {
    return this._getValue(AwesomeLoaders.indicatorColorProperty);
  }
  set indicatorColor(value: string) {
    this._setValue(AwesomeLoaders.indicatorColorProperty, value);

  }
}