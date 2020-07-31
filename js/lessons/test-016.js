
'use strict';

var App = {};

(function (app) {
    
    /**
     * @param  {} text
     * @param  {} num
     */
    function MainModule(text,num){

        this.text = text;
        this.num = num;

        this.Left = function () {
            return this.text.slice(0,this.num);
        };
    }

    app.MainModule = MainModule;

})(App);

const MainModule = App.MainModule;

const mainModule = new MainModule("Some fruit are beautiful",20);

const text = mainModule.Left();
console.log(text);

console.log(text.slice(
    text.indexOf('fruit'),
    text.indexOf('fruit') + ('fruit').length));

console.log(Math.round(Math.random() * 100));

console.log(parseInt('v'));