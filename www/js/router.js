define([
  'backbone',
  'pageslider',
  'views/Login',
  'views/Dashboard',
  'views/Cart',

  'views/Prescription', 'models/Prescription',

  'collections/Cart' // singleton
], function(Backbone, PageSlider, LoginView, DashboardView, CartView, PrescriptionView, PrescriptionModel, cartCollection){

  var slider = new PageSlider($('.main-content'));

  return Backbone.Router.extend({
    routes: {
      "": "login",
      "dashboard": "dashboard",
      "home": "home",
      "cart": "cart",
      "employees/:id": "employeeDetails",
      "prescription/:id": "prescriptionDetails",
      "employees/:id/reports": "reports",

      "*actions": "login" // Backbone will try match the route above first
    },

    /* Login */
    login: function () {
      $("body").removeClass('left-nav');
      var loginView = new LoginView();
      loginView.delegateEvents();
      slider.slidePage(loginView.$el);
    },
    /* Dashboard */
    dashboard: function () {
      $("body").removeClass('left-nav');
      var dashboardView = new DashboardView();
      dashboardView.delegateEvents();
      slider.slidePage(dashboardView.$el);
    },
    /* Cart */
    cart: function () {
      $("body").removeClass('left-nav');
      var cartView = new CartView({collection: cartCollection});
      cartView.delegateEvents();
      slider.slidePage(cartView.$el);
    },
    /* Prescription view */
    prescriptionDetails: function (id) {
      $("body").removeClass('left-nav');
      var prescription = new PrescriptionModel({id: id});
      prescription.fetch({
        success: function (data) {
          slider.slidePage(new PrescriptionView({model: data}).$el);
        }
      });
    },
  })
});