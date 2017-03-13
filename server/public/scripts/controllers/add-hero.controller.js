app.controller('AddHeroController', ['$http', 'SuperpowerFactory', function($http, SuperpowerFactory){
    console.log('Add Hero Controller loaded');
    var self = this;
    self.testMessage = 'Can you hear me?';

    self.spawnNewHero = function(newHeroObject) {
      $http.post('/heroes', newHeroObject).then(function(response){
        console.log(response);
      });
    }

    self.superpowers = SuperpowerFactory.superpowers;
}]);
