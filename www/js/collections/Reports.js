define([
  'underscore',
  'backbone',
  'models/Employee'
], function(_, Backbone, EmployeeModel){

  var ReportsCollection = Backbone.Collection.extend({

    model: EmployeeModel,
    url: 'http://localhost:3000/data'

  });

  return ReportsCollection;
});
