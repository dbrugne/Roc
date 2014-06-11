define([
  'jquery',
  'underscore',
  'backbone',
  'models/Employee',
  'collections/Employee',
  'views/EmployeeList',
  'text!tpl/Home.html'
], function($, _, Backbone, EmployeeModel, EmployeeCollection, EmployeeListView, projectListTemplate){

  return Backbone.View.extend({
    //el: $('#container'),
    template: _.template(projectListTemplate),

    initialize: function () {
      var _thisView = this;
      this.employeeList = new EmployeeCollection();
      this.employeeList.fetch({
          success: function(model, response){
            _thisView.render()
          }
      });
    },

    render: function () {
      this.$el.html(this.template());
      this.listView = new EmployeeListView({collection: this.employeeList, el: $(".scroller", this.el)});
      return this;
    },

    events: {
      "keyup .search-key":    "search",
      "keypress .search-key": "onkeypress"
    },

    search: function (event) {
      var key = $('.search-key').val();
      var employeeList = this.employeeList.findByName(key);
      this.listView = new EmployeeListView({collection: employeeList, el: $(".scroller", this.el)});
    },

    onkeypress: function (event) {
      if (event.keyCode === 13) { // enter key pressed
        event.preventDefault();
      }
    }
  });
});