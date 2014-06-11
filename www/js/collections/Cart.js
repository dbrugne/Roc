define([
  'underscore',
  'backbone',
  'models/Prescription',
  'lib/backbone.localStorage'
], function(_, Backbone, PrescriptionModel, Localstorage){

  var CartCollection = Backbone.Collection.extend({
    model: PrescriptionModel,

    localStorage: new Localstorage("CartCollection"),

    initialize: function () {

    }
  });

  return new CartCollection;
});
