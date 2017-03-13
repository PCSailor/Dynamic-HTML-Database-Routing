app.controller('HeroListController', ['$http', function($http){
    console.log('Hero List Controller loaded');
    var self = this;
    self.testVariable = 'I am a test!';
    self.heroList = [];
    $http({
      method: 'GET',
      url: '/heroes'
    }).then(function(response){
      console.log(response.data);
      self.heroList = response.data;
    });
}]);
