angular.module('app.controllers', [])

.controller('ViewController', function($scope, PhotoLibrary) {

	$scope.pictures = PhotoLibrary.pictures;
	$scope.selectedPic = PhotoLibrary.selectedPic;

	$scope.updatePhoto = function(index) {
		PhotoLibrary.selectedPic = index;
		$scope.selectedPic = index;
	}

	$scope.updateRating = function(value) {
		PhotoLibrary.pictures[PhotoLibrary.selectedPic].rating = value
		PhotoLibrary.updateRating(value);
	}

	$scope.isFavourite = function(rating) {
		return rating >= 4;
	}

})

.controller('NewPhotoController', function($scope, PhotoLibrary) {
	$scope.addPhoto = function(title, url, rating) {
		PhotoLibrary.newPhoto(title, url, rating)
	}

	// $scope.test = function() {
	// 	console.log('Ran with ', arguments);
	// }
})