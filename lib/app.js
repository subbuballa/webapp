var myApp = angular.module('myApp',[]);

myApp.factory('Data',function(){
	return {message: "Hello, there!!"}
});

myApp.factory('Avengers',function(){
	var avengers = {};
	avengers.cast = [
        {
            name: "Robert Downey Jr.",
            character: "Tony Stark / Iron Man"
        },
        {
            name: "Chris Evans",
            character: "Steve Rogers / Captain America}"
        },
        {
            name: "Mark Ruffalo",
            character: "Bruce Banner / The Hulk}"
        },
        {
            name: "Chris Hemsworth",
            character: "Thor"
        },
        {
            name: "Scarlett Johansson",
            character: "Natasha Romanoff / Black Widow"
        },
        {
            name: "Jeremy Renner",
            character: "Clint Barton / Hawkeye"
        },
        {
            name: "Tom Hiddleston",
            character: "Loki"
        },
        {
            name: "Clark Gregg",
            character: "Agent Phil Coulson"
        },
        {
            name: "Cobie Smulders",
            character: "Agent Maria Hill"
        },
        {
            name: "Stellan Skarsgard",
            character: "Selvig"
        },
        {
            name: "Samuel L. Jackson",
            character: "Nick Fury"
        },
        {
            name: "Gwyneth Paltrow",
            character: "Pepper Potts"
        },
        {
            name: "Paul Bettany",
            character: "Jarvis (voice)"
        },
        {
            name: "Alexis Denisof",
            character: "The Other"
        },
        {
            name: "Tina Benko",
            character: "NASA Scientist"
        }
    ];
	return avengers;
});

myApp.controller('FirstCtrl',['$scope','Data',function($scope,Data){
	$scope.data = Data;
	//$scope.data = {message: "Hello, First controller!!"};
}]);

myApp.controller('SecondCtrl',['$scope','Data',function($scope,Data){
	$scope.data = Data;
	//$scope.data = {message: "Hello, Second controller!!"};
	$scope.reversedMessage = function(message){
		return message.split("").reverse().join("");
		//scope.data.message;
	};
}]);

myApp.controller('AvengersCtrl',['$scope','Avengers',function($scope,Avengers){
	$scope.Avengers = Avengers;
}]);


myApp.filter('reverse',function(){
	return function(text){
		return text.split("").reverse().join("");
	};
});



