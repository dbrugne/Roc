define([
  'jquery',
  'underscore',
  'backbone',
  'text!tpl/EmployeeList.html'
], function($, _, Backbone, projectListTemplate){

  return Backbone.View.extend({
    //el: $('#container'),
    template: _.template(projectListTemplate),

    initialize: function (options) {
      this.render();
      this.collection.on("reset", this.render, this);
    },

    render: function () {
      this.$el.html(this.template({employees: this.collection.toJSON()}));
      return this;
    }
  });
});