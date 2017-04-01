app.controller('HeroDetailsController', ['HeroDetailsFactory', '$routeParams', function(HeroDetailsFactory, $routeParams){
// app.controller('HeroDetailsController', ['$routeParams', function($routeParams){
  console.log('HeroDetailsController is loaded');
  console.log($routeParams);
  // NOTE: $routeParams is a dependency given by ng-route (like ng-route give routeProvider)
var self = this;
self.hero = HeroDetailsFactory.hero;
HeroDetailsFactory.getHeroDetails($routeParams.heroId); // Note: passing $routeParams because it'sßß an object with the heroId on it.
}]);
