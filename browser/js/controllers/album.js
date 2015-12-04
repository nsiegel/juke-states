app.controller('AlbumCtrl', function ($stateParams, $scope, $rootScope, PlayerFactory, AlbumFactory) {
	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	};
	$scope.start = function (song) {
		PlayerFactory.start(song, $scope.album.songs);
	};

	
	AlbumFactory.fetchById($stateParams.album)
	.then(function (album) {
		$scope.album = album;
	});
	
	
});