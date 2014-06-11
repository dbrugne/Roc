define([
  'jquery',
  'underscore',
  'backbone',
  'models/Prescription',
  'collections/Prescription',
  'views/PrescriptionList',
  'text!tpl/Dashboard.html'
], function($, _, Backbone, PrescriptionModel, PrescriptionCollection, PrescriptionListView, projectListTemplate){

  return Backbone.View.extend({
    //el: $('#container'),
    template: _.template(projectListTemplate),

    initialize: function () {
      var _thisView = this;
      this.prescriptionList = new PrescriptionCollection();
      this.prescriptionList.fetch({
          success: function(model, response){
            _thisView.render()
          }
      });
    },

    render: function () {
      this.$el.html(this.template());
      this.listView = new PrescriptionListView({collection: this.prescriptionList, el: $(".scroller", this.el)});
      return this;
    },

    events: {
      "keyup .search-key":    "search",
      "keypress .search-key": "onkeypress"
    },

    search: function (event) {
      var key = $('.search-key').val();
      var prescriptionList = this.prescriptionList.findByName(key);
      this.listView = new PrescriptionListView({collection: prescriptionList, el: $(".scroller", this.el)});
    },

    onkeypress: function (event) {
      if (event.keyCode === 13) { // enter key pressed
        event.preventDefault();
      }
    }
  });
});