app.config(function($stateProvider) {
  $stateProvider.state('album', {
    url: '/albums/:album',
    templateUrl: '/templates/album.html',
    controller: 'AlbumCtrl'
  });
});
