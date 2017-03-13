app.controller('AddHeroController', ['$http', function($http){
    console.log('Add Hero Controller loaded');
    var self = this;
    self.testMessage = 'Can you hear me?';

    self.spawnNewHero = function(newHeroObject) {
      $http.post('/heroes', newHeroObject).then(function(response){
        console.log(response);
      });
    }
}]);
