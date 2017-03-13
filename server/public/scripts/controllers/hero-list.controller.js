app.controller('HeroListController', ['$http', function($http){
  console.log('Hero List Controller loaded');
  var self = this;
  self.testVariable = 'I am a test!';
  self.heroList = [];

  getHeroes();

  function getHeroes() {
    $http.get('/heroes').then(function(response){
      console.log(response.data);
      self.heroList = response.data;
    });
  }

  self.obliterateHero = function(heroId) {
    $http.delete('/heroes/' + heroId).then(function(response){
      getHeroes();
    });
  }

  self.mutateHero = function(hero) {
    $http.put('/heroes/' + hero.id, hero).then(function(response){
      getHeroes();
    });
  }
}]);
