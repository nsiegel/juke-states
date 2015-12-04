app.config(function($stateProvider) {
  $stateProvider.state('albumList', {
    url: '/albums',
    templateUrl: '/templates/albums.html',
  });
});
