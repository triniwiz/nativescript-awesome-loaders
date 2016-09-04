import * as app from 'application';
import {Property, PropertyMetadataSettings, PropertyChangeData} from "ui/core/dependency-observable";
import {PropertyMetadata} from "ui/core/proxy";
import {ContentView} from "ui/content-view";

export class AwesomeLoaders extends ContentView {

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