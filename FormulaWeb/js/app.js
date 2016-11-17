var app = angular.module('formulaWeb', [
  'ngRoute',
  'formulaWebControllers',
  'zingchart-angularjs']);




app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Index', {
        templateUrl: 'views/index.html'
    }).
      when('/Drivers', {
        templateUrl: 'views/drivers.html',
        controller: 'driversController'
      }).
      when('/DriverPage', {
        templateUrl: 'views/driverpage.html',
        controller: 'driverPageController'
      }).
      when('/Cars', {
        templateUrl: 'views/cars.html',
        controller: 'carsController'
      }).
      when('/CarPage', {
        templateUrl: 'views/carpage.html',
        controller: 'carPageController'
      }).
      when('/Races', {
        templateUrl: 'views/races.html',
        controller: 'racesController'
      }).
      when('/RacePage', {
        templateUrl: 'views/racepage.html',
        controller: 'racePageController'
      }).
      when('/Locations', {
        templateUrl: 'views/locations.html',
        controller: 'locationsController'
      }).
      when('/LocationPage', {
        templateUrl: 'views/locationPage.html',
        controller: 'locationPageController'
      }).
      when('/AddDriver', {
        templateUrl: 'views/addDriver.html',
        controller: 'addDriverController'
      }).
      when('/AddLocation', {
        templateUrl: 'views/addLocation.html',
        controller: 'addLocationController'
      }).
      when('/AddRace', {
        templateUrl: 'views/addRace.html',
        controller: 'addRaceController'
      }).
      when('/AddCar', {
        templateUrl: 'views/addCar.html',
        controller: 'addCarController'
      }).
      otherwise({
        redirectTo: '/Index'
      });
}]);


