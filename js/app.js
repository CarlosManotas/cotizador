(function(){
	var app = angular.module('myApp', []);



	app.controller('formularioCtrl', function($scope) {
	    $scope.formData = {};
	    $scope.selected = "1";
	 	$scope.submitForm = function (formData) {
		    console.log('Form submitted with' + JSON.stringify(formData));
		  };
	});


	
})();
	


    