define([
  'underscore',
  'backbone',
  'models/Employee'
], function(_, Backbone, EmployeeModel){

  var EmployeeCollection = Backbone.Collection.extend({
    model: EmployeeModel,
    url: 'http://localhost:3000/data',

    initialize: function () {
      this.fetch();
    },

    findByName: function(name) {
      var filtered = this.filter(function(employee) {
        var fullName = employee.get("FirstName") + " " + employee.get("lastName");
        if (fullName.toLowerCase().indexOf(name.toLowerCase()) > -1 || name == "")
          return employee.get("lastName");
        return null;
      });
      return new EmployeeCollection(filtered);
    },

    filterByManagerId: function(managerId) {
      var filtered = this.filter(function(employee) {
        if (employee.attributes.managerId === managerId)
          return employee.get("managerId");
        return null;
      });
      return new EmployeeCollection(filtered);
    }
  });

  return EmployeeCollection;

});
