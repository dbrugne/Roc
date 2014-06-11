define([
  'jquery',
  'underscore',
  'backbone',
  'text!tpl/PrescriptionList.html',
  'collections/Cart'
], function($, _, Backbone, projectListTemplate, CartCollection){

  return Backbone.View.extend({
    initialize: function (options) {
      this.render();
      this.collection.on("reset", this.render, this);
    },

    render: function () {
      var data = { prescriptions: this.collection.models };
      _.extend(data, viewHelpers);
      var html = _.template(projectListTemplate, data);
      this.$el.html(html);
    },

    events: {
      "click .add-to-cart": "addtocart"
    },

    addtocart: function (event) {
      var prescriptionId = $(event.target).data('prescription');
      var prescription = this.collection.get(prescriptionId);
      CartCollection.add(prescription);
      $('#cart-items-count').html(CartCollection.length);
    }
  });
});

var viewHelpers = {
  formatdate: function(dateToFormat){
    var d = new Date(dateToFormat)
    return d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
  }
}