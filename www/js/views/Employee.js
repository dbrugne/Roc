define([
  'jquery',
  'underscore',
  'backbone',
  'text!tpl/Employee.html'
], function($, _, Backbone, projectListTemplate){

  return Backbone.View.extend({
    //el: $('#container'),
    template: _.template(projectListTemplate),

    initialize: function (options) {
      //this.truc = options.tartentifdi;
      this.render();
    },

    render: function () {
      this.$el.html(this.template(this.model.attributes));
      return this;
    }
  });
});