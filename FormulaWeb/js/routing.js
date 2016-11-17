sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/index', {
        templateUrl: '../views/index.html'
    }).
      when('/Drivers', {
        templateUrl: '../views/drivers.html',
        controller: 'driversController'
      }).
      when('/DrivePage', {
        templateUrl: '../views/driverpage.html',
        controller: 'driverPageController'
      }).
      when('/Cars', {
        templateUrl: '../views/cars.html',
        controller: 'carsController'
      }).
      when('/CarPage', {
        templateUrl: '../views/carpage.html',
        controller: 'carPageController'
      }).

      otherwise({
        redirectTo: '/AddNewOrder'
      });
}]);