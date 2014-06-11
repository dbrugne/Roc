define([
  'jquery',
  'underscore',
  'backbone',
  'views/PrescriptionList',
  'text!tpl/Cart.html'
], function($, _, Backbone, PrescriptionListView, projectListTemplate){

  return Backbone.View.extend({
    template: _.template(projectListTemplate),

    initialize: function () {
//      this.collection // initialized on the router
      this.render();
    },

    render: function () {
      this.$el.html(this.template());
      this.listView = new PrescriptionListView({collection: this.collection, el: $(".scroller", this.el)});
      return this;
    }
  });
});