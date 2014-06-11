define(['backbone', 'pageslider'], function(Backbone, PageSlider){
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
      require(['views/Login'], function (LoginView) {
        var loginView = new LoginView();
        loginView.delegateEvents();
        slider.slidePage(loginView.$el);
      });
    },
    /* Dashboard */
    dashboard: function () {
      $("body").removeClass('left-nav');
      require(['views/Dashboard'], function (DashboardView) {
        var dashboardView = new DashboardView();
        dashboardView.delegateEvents();
        slider.slidePage(dashboardView.$el);
      });
    },
    /* Cart */
    cart: function () {
      $("body").removeClass('left-nav');
      require(['views/Cart'], function (CartView) {
        var cartView = new CartView();
        cartView.delegateEvents();
        slider.slidePage(cartView.$el);
      });
    },
    /* Prescription view */
    prescriptionDetails: function (id) {
      $("body").removeClass('left-nav');
      require(['views/Prescription', 'models/Prescription'], function (PrescriptionView, PrescriptionModel) {
        var prescription = new PrescriptionModel({id: id});
        prescription.fetch({
          success: function (data) {
            slider.slidePage(new PrescriptionView({model: data}).$el);
          }
        });
      });
    },
    /*
     *
     * START : OLD APPLICATION
     *
     */
    /* Home view */
    home: function () {
      require(['views/Home'], function (HomeView) {
        var homeView = new HomeView();
        homeView.delegateEvents();
        slider.slidePage(homeView.$el);
      });
    },
    /* Employee view */
    employeeDetails: function (id) {
      require(["models/Employee", "views/Employee"], function (EmployeeModel, EmployeeView) {
        var employee = new EmployeeModel({id: id});
        employee.fetch({
          success: function (data) {
            slider.slidePage(new EmployeeView({model: data}).$el);
          }
        });
      });
    },
    /* Reports view */
    reports: function (id) {
      require(["models/Employee", "views/Reports"], function (EmployeeModel, ReportsView) {
        var employee = new EmployeeModel({id: id});
        employee.fetch({
          success: function (data) {
            slider.slidePage(new ReportsView({model: data}).$el);
          }
        });
      });
    }
    /*
     *
     * END : OLD APPLICATION
     *
     */
  })
});