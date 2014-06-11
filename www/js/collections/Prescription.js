define([
  'underscore',
  'backbone',
  'models/Prescription'
], function(_, Backbone, PrescriptionModel){

  var PrescriptionCollection = Backbone.Collection.extend({
    model: PrescriptionModel,
    url: 'http://localhost:3000/data',

    initialize: function () {
      this.fetch();
    }
  });

  return PrescriptionCollection;

});
