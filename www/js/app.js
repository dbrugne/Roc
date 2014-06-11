'use strict';

require.config({

  baseUrl: 'js/lib',

  paths: {
    app: '../app',
    lib: '../lib',
    models: '../models',
    collections: '../collections',
    views: '../views',
    tpl: '../../templates',
    root: '..'
  },

  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    }
  }
});

require([
  'jquery',
  'backbone',
  'root/router'
], function ($,  Backbone, Router) {

  new Router();

  $("body").on("click", ".slide-menu-button", function (event) {
    $("body").toggleClass('left-nav');
  });

  $("body").on("click", ".back-button", function (event) {
    event.preventDefault();
    window.history.back();
  });

  Backbone.history.start();
});