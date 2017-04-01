app.factory('HeroDetailsFactory', ['$http', function($http){
  console.log('HeroDetailsFactory is loaded');
  var hero = { details: {} }; // NOTE: don't want an array, but an object with details.


  function getHeroDetails(heroId) {
    $http({
        method: 'GET',
        url: '/herodetails/',
        params: {
            heroId: heroId
        } // NOTE: temporarily hardcoded with ID of 20
        }).then(function(response){
      console.log(response.data);
    //   superpowers.list = response.data;
      hero.details = response.data;
    });
  }
  return {
    // NOTE: controller: factory
    hero: hero,
    getHeroDetails: getHeroDetails
  }
}]);
