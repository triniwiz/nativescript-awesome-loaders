import common = require('./awesome-loaders.common');
export class AwesomeLoaders extends common.AwesomeLoaders{
    private _ios:any;
    constructor(){

    }
    get ios(){
        return this._ios;
    }
    get _nativeView(){
        return this._ios;
    }

}