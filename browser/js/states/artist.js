app.config(function($stateProvider) {
  $stateProvider.state('artist', {
    url: '/artists/:artist',
    templateUrl: '/templates/artist.html',
    controller: 'ArtistCtrl'
  });
});
