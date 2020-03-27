define([
    'tests'
], function(tests) {
    'use strict';
    /**
     * MordernizrPhoto is the constructor for Mordenizr
     * @class
     * @access public
     */
    var MordernizrPhoto = {
        _version: '__VERSION__',

        //Any settings that don't work as separate modules 
        //can go in here as configuration.
        _config:{
            'classPrefix':'',
            'enableClasses':true,
            'enableJSClass': true,
            'userPrefixes': true
        },

        //Queue
        _q: [],

        //Stub these for people who are listening
        on:function(test,cb){
            var self = this;
            setTimeout(function(){
                cb(self[test]);
            },0);
        },
        addTest: function(name, fn, options){
            tests.push({name: name, fn: fn, options: options});
        },
        addAsyncTest: function(fn){
            test.push({name: null, fn: fn});
        }
    };
    return MordernizrPhoto;
});