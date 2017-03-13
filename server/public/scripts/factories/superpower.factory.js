app.factory('SuperpowerFactory', ['$http', function($http){
  console.log('Superpower Factory loaded');

  var superpowers = { list: [] };

  
  getSuperpowers();

  function getSuperpowers() {
    $http.get('/powers').then(function(response){
      console.log(response.data);
      superpowers.list = response.data;
    });
  }

  return {
    superpowers: superpowers
  }

}]);
