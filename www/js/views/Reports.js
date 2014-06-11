define([
  'jquery',
  'underscore',
  'backbone',
  'collections/Employee',
  'views/EmployeeList',
  'text!tpl/Reports.html'
], function($, _, Backbone, EmployeeCollection, EmployeeListView, projectListTemplate){

  return Backbone.View.extend({
    //el: $('#container'),
    template: _.template(projectListTemplate),

    initialize: function (options) {
      var _thisView = this;
      this.model.reports= new EmployeeCollection();
      this.model.reports.fetch({
        success: function(model, response){
          _thisView.render()
        }
      });
    },

    render: function () {
      this.$el.html(this.template(this.model.attributes));
      this.listView = new EmployeeListView({collection: this.model.reports.filterByManagerId(this.model.attributes.id), el: $(".scroller", this.el)});
      return this;
    }
  });
});
