define([
  'jquery',
  'underscore',
  'backbone',
  'text!tpl/Login.html'
], function($, _, Backbone, projectListTemplate){

  return Backbone.View.extend({
    //el: $('#container'),
    template: _.template(projectListTemplate),

    initialize: function () {
      this.render();
    },

    render: function () {
      this.$el.html(this.template());
      return this;
    },

    events: {
      "keyup .login-btn":    "login"
    },

    login: function (event) {
      alert('try login');
    }
  });
});