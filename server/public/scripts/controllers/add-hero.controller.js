app.controller('AddHeroController', ['$http', function($http){
    console.log('Add Hero Controller loaded');
    var self = this;
    self.testMessage = 'Can you hear me?';

    self.spawnNewHero = function(newHeroObject) {
      $http({
        method: 'POST',
        url: '/heroes',
        data: newHeroObject
      }).then(function(response){
        console.log(response);
      });
    }
}]);
