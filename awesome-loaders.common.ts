import { View } from 'ui/core/view';
import { Property } from "ui/core/properties";
import { Color } from "color";

export class AwesomeLoaders extends View {
  protected indicator: string = null;
}

export const indicatorProperty = new Property<AwesomeLoaders, boolean>({
  name: "indicator",
  defaultValue: null
});
indicatorProperty.register(AwesomeLoaders);


export const indicatorColorProperty = new Property<AwesomeLoaders, Color>({
  name: "indicatorColor",
  equalityComparer: Color.equals,
  defaultValue: null,
  valueConverter: v => new Color(v)
});
indicatorColorProperty.register(AwesomeLoaders);
