var formulaWebControllers = angular.module('formulaWebControllers', []);

formulaWebControllers.controller('driversController', function($scope, $http) {

  $http.get('http://localhost:8080/formulastudent-2.1/drivers').success(function(data) {    
        $scope.drivers = data;
    });
});

formulaWebControllers.controller('driverPageController', function($scope, $http, $location) {

	var driverId = $location.hash();

	

  $http.get('http://localhost:8080/formulastudent-2.1/drivers/' + driverId).success(function(data) {    
        $scope.driver = data;
        console.log(JSON.stringify(data))
    });

  	$scope.updateDriver = function(data)
	{
		return $http.post('http://localhost:8080/formulastudent-2.1/drivers/' + driverId + '/push', {firstName: data});

	};
});


formulaWebControllers.controller('carsController', function($scope, $http) {

  $http.get('http://localhost:8080/formulastudent-2.1/cars').success(function(data) {    
        $scope.cars = data;
    });   
});
formulaWebControllers.controller('locationsController', function($scope, $http) {

  $http.get('http://localhost:8080/formulastudent-2.1/locations').success(function(data) {    
        $scope.locations = data;
    });   
});
formulaWebControllers.controller('locationPageController', function($scope, $http, $location) {

  var locationID = $location.hash();
	
  $http.get('http://localhost:8080/formulastudent-2.1/locations/' + locationID).success(function(data) {    
        $scope.singleLocation = data;
    });
  


});

formulaWebControllers.controller('carPageController', function($scope, $http, $location) {

	var carId = $location.hash();
	
  $http.get('http://localhost:8080/formulastudent-2.1/cars/' + carId).success(function(data) {    
        $scope.car = data;
    });   
});

formulaWebControllers.controller('racesController', function($scope, $http) {

  $http.post('http://localhost:8080/formulastudent-2.1/sessions').success(function(data) {    
        $scope.races = data;
    });   
});

formulaWebControllers.controller('racePageController', function($scope, $http, $location) {





	

	var raceId = $location.hash();
	$scope.timeData = [];
	$scope.rpmData = []; 
	$scope.throttleData = [];  
	$scope.waterData = [];  
	$scope.airData = []; 
	$scope.lambData = []; 
	$scope.oilPData = []; 
	$scope.voltsData = [];

	$scope.chartOptions = ['rpmData', 'throttleData', 'waterData', 'airData', 'lambData', 'oilPData', 'voltsData']; 	
  	$scope.chartData = [$scope.rpmData, $scope.throttleData, $scope.waterData, $scope.airData, $scope.lambData, $scope.oilPData, $scope.voltsData]; 	
  	$scope.chartSeries = [];
  	$scope.chartJson = {
      type : 'line',
      legend:{
        "layout":"x7",
      	"toggle-action":"remove",
       },
        "scale-x":{
                },
       	"scale-y":{
            },
        "scale-y-2":{
                },
      series : [ {
        text : "rpm",
        scales: "scale-x,scale-y-2"
    },
     {
        text : "Throttle",
        scales: "scale-x, scale-y"
    },
     {
        text : "Water",
        scales: "scale-x, scale-y"
    },
     {
        text : "Air",
        scales: "scale-x,scale-y"
    },
     {
        text : "Lamb",
        scales: "scale-x,scale-y"
    },
     {
        text : "Oil",
        scales: "scale-x,scale-y"
    },
     {
        text : "Volts",
        scales: "scale-x,scale-y"
    }]
 };




  	$scope.toggleSelection = function toggleSelection(option) {
    var index = $scope.chartData.indexOf($scope[option]);

    // is currently selected
    if (index > -1) {
      $scope.chartData.splice(index, 1);
      $scope.chartSeries.splice(index, 1)
      $scope.chartJson.series[index].text = ""; 
    }

    // is newly selected
    else {
      $scope.chartData.push($scope[option]);
      $scope.chartSeries.push(option)
      var posIndex = $scope.chartData.indexOf($scope[option])
      $scope.chartJson.series[posIndex].text = option;
    }
  };


	$http.post('http://localhost:8080/formulastudent-2.1/sessions', {sessionId: $location.hash()}).success(function(data) {    
        $scope.raceInfo = data;
 
    }); 


    $http.post('http://localhost:8080/formulastudent-2.1/sessions/175').success(function(data) {    
        $scope.raceData = data;

    angular.forEach($scope.raceData, function(item){

  	$scope.timeData.push(item.time);
	$scope.rpmData.push(item.rpm);
	$scope.throttleData.push(item.throttle);  
	$scope.waterData.push(item.water);
	$scope.airData.push(item.air);
	$scope.lambData.push(item.lamb); 
	$scope.oilPData.push(item.oilPressure); 
	$scope.voltsData.push(item.volts);
});

    $scope.chartData = [$scope.rpmData, $scope.throttleData, $scope.waterData, $scope.airData, $scope.lambData, $scope.oilPData, $scope.voltsData]; 

    

}); 



    $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

});

formulaWebControllers.controller('addDriverController', function($scope, $http) {


	  $scope.submit = function() {


	  	 	$http.post('http://localhost:8080/formulastudent-2.1/drivers/push', {studentId:$scope.studentID,firstName:$scope.firstName,lastName:$scope.lastName,
	  	 		dob:$scope.dob, weightKg:$scope.weight, heightCm:$scope.dHeight, comments:$scope.comments}).success(function(data) {   

	  	 		alert("success"); 

    }); 



      };
 
});

formulaWebControllers.controller('addLocationController', function($scope, $http) {


	  $scope.submit = function() {


	  	 	$http.post('http://localhost:8080/formulastudent-2.1/locations/push', {locationId:$scope.locationID,locationName:$scope.locationName,comments:$scope.comments}).success(function(data) {   

	  	 		alert("success"); 

    }); 

    };
 
});

formulaWebControllers.controller('addRaceController', function($scope, $http) {


	  $scope.submit = function() {


	  	 	$http.post('http://localhost:8080/formulastudent-2.1/races/push', {sessionId:$scope.sessionID,trackTemp:$scope.trackTemp,tyreTemp:$scope.tyreTemp,
	  	 				lapStart:$scope.lapStart, locationId:$scope.locationID, driverId:$scope.driverID, carId:$scope.carID, comments:$scope.comments}).success(function(data) {   

	  	 		alert("success"); 

    }); 

    };
 
});

formulaWebControllers.controller('addCarController', function($scope, $http) {


	  $scope.submit = function() {


	  	 	$http.post('http://localhost:8080/formulastudent-2.1/cars/push', {carId:$scope.carID,frontCamDeg:$scope.frontCamDeg,rearCamDeg:$scope.rearCamDeg,
	  	 				frontToeMm:$scope.frontToeMm, rearToeMm:$scope.rearToeMm, frontSpringRates:$scope.frontSpringRates, rearSpringRates:$scope.rearSpringRates, comments:$scope.comments}).success(function(data) {   

	  	 		alert("success"); 

    }); 

    };
 
});

