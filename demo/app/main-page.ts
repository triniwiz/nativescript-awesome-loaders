import * as observable from 'data/observable';
import * as pages from 'ui/page';
import {HelloWorldModel} from './main-view-model';
import {AwesomeLoaders} from 'nativescript-awesome-loaders';
// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    var page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
    let gl = page.getViewById('gl');
    let li = new AwesomeLoaders();
    li.width = 60;
    li.height = 60;
    li.indicator = "SemiCircleSpin";
    li.indicatorColor= "black";
    gl._addView(li);
}