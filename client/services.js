angular.module('app.services', [])

.factory('PhotoLibrary', function($http) {
	var getPhotos = function(apiURL) {
		return { 
			title: 'Cute Puppy',
			rating: 5,
			url:  'https://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg'
		}
	}

	var newPhoto = function(title, url, rating) {
		return { 
			title: title,
			rating: rating,
			url: url
		}
	}
	return {
		getPhotos: getPhotos,
		newPhoto: newPhoto
	};
})