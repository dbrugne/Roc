define([
  'jquery',
  'underscore',
  'backbone',
  'collections/Cart',
  'views/PrescriptionList',
  'text!tpl/Cart.html'
], function($, _, Backbone, CartCollection, PrescriptionListView, projectListTemplate){

  return Backbone.View.extend({
    template: _.template(projectListTemplate),

    initialize: function () {
      this.prescriptionList = new CartCollection();
      this.render();
    },

    render: function () {
      this.$el.html(this.template());
      this.listView = new PrescriptionListView({collection: this.prescriptionList, el: $(".scroller", this.el)});
      return this;
    }
  });
});