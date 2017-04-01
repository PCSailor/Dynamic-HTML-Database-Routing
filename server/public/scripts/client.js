var app = angular.module('HeroApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/heroList', {
    templateUrl: '/views/hero-list.html',
    controller: 'HeroListController',
    controllerAs: 'hlc'
  })
  .when('/addHero', {
    templateUrl: '/views/add-hero.html',
    controller: 'AddHeroController',
    controllerAs: 'ahc'
  })

  //added
    .when('/hero/:heroId', { // NOTE: :heroId instructs to find /hero/something // build an object where the property-key is called heroId & whatever is put after heroId will be the property-value.
    // .when('/hero/:taco', { Whatever you put after the /hero inside of the object while inside the router.

// simplest way to think of it is on the Ajax request, data becomes req.body on the server side, things actually concatenated in the URL becomes req.params on the server side, and params becomes req.query on the server side. They are all ways of passing information back. Under the hood, angular and express are doing all of that through the URL.

    templateUrl: '/views/hero-details.html',
    controller: 'HeroDetailsController',
    controllerAs: 'hdc'
  })
  .otherwise({
    redirectTo: 'heroList'
  })
}]);
