angular.module('app.controllers', [])

.controller('ViewController', function($scope, PhotoLibrary) {
	$scope.selectedPic = 0;
	$scope.pictures = [{title:'Cut kitty', rating: 5, url:'https://s-media-cache-ak0.pinimg.com/originals/84/71/e2/8471e2efdd2d3164895748ee8673124d.jpg'}];
	
	newPhotos = PhotoLibrary.getPhotos();
	$scope.pictures.push(newPhotos);

	$scope.updatePhoto = function(index) {
		$scope.selectedPic = index;
	}

	$scope.updateRating = function(value) {
		$scope.pictures[$scope.selectedPic].rating = value;
	}

	$scope.addPhoto = function(title, url, rating) {
		console.log(title, url, rating)
		$scope.pictures.push(PhotoLibrary.newPhoto(title, url, rating));
	}

	$scope.test = function() {
		console.log('Ran with ', arguments);
	}
})

.controller('NewPhotoController', function($scope) {

})