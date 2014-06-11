define([
  'underscore',
  'backbone',
  'collections/Reports'
], function(_, Backbone, ReportsCollection){

  var EmployeeModel = Backbone.Model.extend({

    urlRoot: 'http://localhost:3000/data/',

    url : function() {
      return this.id ? this.urlRoot + this.id : this.urlRoot;
    },

    initialize: function () {
      this.reports = new ReportsCollection();
      this.reports.parent = this;
    }
  });

  return EmployeeModel;
});
