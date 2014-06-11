define([
  'jquery',
  'underscore',
  'backbone',
  'text!tpl/Prescription.html'
], function($, _, Backbone, projectListTemplate){

  return Backbone.View.extend({
    //el: $('#container'),
    template: _.template(projectListTemplate),

    initialize: function (options) {
      //this.truc = options.tartentifdi;
      this.render();
    },

    render: function () {
      var data = this.model.attributes ;
      _.extend(data, viewHelpers);
      var html = _.template(projectListTemplate, data);
      this.$el.html(html);
    }
  });
});
