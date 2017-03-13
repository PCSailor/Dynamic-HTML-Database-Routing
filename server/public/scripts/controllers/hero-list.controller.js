app.controller('HeroListController', ['$http', function($http){
  console.log('Hero List Controller loaded');
  var self = this;
  self.testVariable = 'I am a test!';
  self.heroList = [];

  getHeroes();

  function getHeroes() {
    $http({
      method: 'GET',
      url: '/heroes'
    }).then(function(response){
      console.log(response.data);
      self.heroList = response.data;
    });
  }

  self.obliterateHero = function(heroId) {
    $http({
      method: 'DELETE',
      url: '/heroes/' + heroId
    }).then(function(response){
      getHeroes();
    });
  }
}]);
