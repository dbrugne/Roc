define([
  'underscore',
  'backbone'
//  ,'collections/Reports'
], function(_, Backbone/*, ReportsCollection*/){

  var PrescriptionModel = Backbone.Model.extend({

    urlRoot: "http://localhost:3000/data/",

    getStatuses: function(){
      return {
        "active": "active",
        "expired": "expired",
        "out_of_quantity": "out_of_quantity",
        "inactive": "inactive"
      }
    },

    url : function() {
      return this.id ? this.urlRoot + this.id : this.urlRoot;
    },

    initialize: function () {
//      this.reports = new ReportsCollection();
//      this.reports.parent = this;
    }
  });

  return PrescriptionModel;
});
