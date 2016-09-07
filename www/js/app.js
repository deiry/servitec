// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('servitec', ['ionic', 'starter.controllers',
  /**
   * Directivas para los Controladores
   */
  'MapCtrl','FabCtrl', 'FormCtrl'
  ])


.run(function($ionicPlatform ) {

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.map', {
    url: '/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/map.html',
        controller: 'MapCtrl'
      }
    }
  })
    .state('app.cam', {
      url: '/cam',
      views: {
        'menuContent': {
          templateUrl: 'templates/cam.html'
        }
      }
    })
    .state('app.form', {
      url: '/form',
      views: {
        'menuContent': {
          templateUrl: 'templates/formulario.html',
          controller: 'FormCtrl'
        }
      }
    })
;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/map');
})
//Directiva del footer con el template
.directive('footer', function(){
  return{
    templateUrl: 'templates/footer.html'
  }

})

  .directive('header', function(){
    return{
      templateUrl: 'templates/header.html'
    }

  })

