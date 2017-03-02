// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.navBar.alignTitle('center');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })



  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

    .state('tab.services', {
      url: '/home/services',
      views: {
        'tab-home': {
          templateUrl: 'templates/tab-services.html',
          controller: 'ServicesCtrl'
        }
      }
    })
    .state('tab.about', {
      url: '/home/about',
      views: {
        'tab-home': {
          templateUrl: 'templates/tab-about.html',
          controller: 'AboutCtrl'
        }
      }
    })
    .state('tab.feeds', {
      url: '/home/feeds',
      views: {
        'tab-home': {
          templateUrl: 'templates/tab-feeds.html',
          controller: 'FeedsCtrl'
        }
      }
    }) 
    .state('tab.schedules', {
      url: '/home/schedules',
      views: {
        'tab-home': {
          templateUrl: 'templates/tab-schedules.html',
          controller: 'SchedulesCtrl'
        }
      }
    }) 
    .state('tab.projects', {
      url: '/home/projects',
      views: {
        'tab-home': {
          templateUrl: 'templates/tab-projects.html',
          controller: 'ProjectsCtrl'
        }
      }
    })
    .state('tab.vacancy', {
      url: '/home/vacancy',
      views: {
        'tab-home': {
          templateUrl: 'templates/tab-vacancy.html',
          controller: 'VacancyCtrl'
        }
      }
    })  
  

  .state('tab.info', {
      url: '/info',
      views: {
        'tab-info': {
          templateUrl: 'templates/tab-info.html',
          controller: 'InfoCtrl'
        }
      }
    })
    
    // .state('tab.chat-detail', {
    //   url: '/chats/:chatId',
    //   views: {
    //     'tab-chats': {
    //       templateUrl: 'templates/tab-appointment.html',
    //       controller: 'AppointmentCtrl'
    //     }
    //   }
    // })
  .state('tab.appointment', {
      url: '/appointment',
      views: {
        'tab-appointment': {
          templateUrl: 'templates/tab-appointment.html',
          controller: 'AppointmentCtrl'
        }
      }
    })

  .state('tab.location', {
    url: '/location',
    views: {
      'tab-location': {
        templateUrl: 'templates/tab-location.html',
        controller: 'LocationCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
