(function() {
  angular.module("apps", ["ngRoute", "ngResource", "config", "ngAnimate", "ui.bootstrap", "ngTouch"]).filter("truncate", function() {
    return function(text, length, end) {
      if (isNaN(length)) {
        length = 10;
      }
      if (end == null) {
        end = "...";
      }
      if (text.length <= length || text.length - end.length <= length) {
        return text;
      } else {
        return String(text).substring(0, length - end.length) + end;
      }
    };
  }).filter("langCodeToName", function() {
    var codeMap;
    codeMap = {
      en: "English",
      fi: "Finnish",
      sv: "Swedish",
      ru: "Russian"
    };
    return function(code) {
      return codeMap[code] || code;
    };
  }).factory("languageService", [
    "$locale", function($locale) {
      var language;
      language = $locale.id.split("-")[0];
      return {
        getLanguage: function() {
          return language;
        },
        setLanguage: function(new_lang) {
          language = new_lang;
        }
      };
    }
  ]).filter("translate", [
    "languageService", function(languageService) {
      return function(field) {
        var lang;
        lang = languageService.getLanguage();
        return field[lang] || field["en"];
      };
    }
  ]).factory("$templateCache", function($cacheFactory, $http, $injector) {
    var factory;
    var cache = $cacheFactory('templates');
    factory = {
      get: function(url) {
        var fromCache = cache.get(url);
        //console.log("getting template: ", url );
        // already have required template in the cache
        if (fromCache) {
          console.log("bring template from Cache");
          //return fromCache;
        }
        
        var i, locals, template_func;
        if (url[0] === '/') {
          url = url.substring(1);
        }
        i = url.lastIndexOf('.html');
        if (i >= 0) {
          url = url.substr(0, i);
        }
        
        template_func = window.HAML[url];
        locals = {
          render: function(template_name) {
            return factory.get("_" + template_name + ".html");
          }
        };
        return template_func(locals);
      }
      ,
      put: function(key, value) {
        return console.log("cache put", key, value);
        cache.put(key, value);
      }
    };
    return factory;
  }).factory("Applications", function($resource, API_ROOT) {
    return $resource(API_ROOT + "application/:id/");
  }).factory("Categories", function($resource, API_ROOT) {
    var Categories, glyphicons;
    Categories = $resource(API_ROOT + "category/:id/");
    glyphicons = {
      "travel-local": "glyphicon-camera",
      "food-drink": "glyphicon-glass",
      culture: "glyphicon-picture",
      transportation: "glyphicon-plane",
      nature: "glyphicon-tree-conifer",
      tools: "glyphicon-wrench",
      social: "glyphicon-comment",
      communications: "glyphicon-cloud",
      lifestyle: "glyphicon-star"
    };
    Categories.prototype.getGlyphiconClass = function() {
      return glyphicons[this.slug] || "glyphicon-th-large";
    };
    return Categories;
  }).factory("Platforms", function($resource, API_ROOT) {
    return $resource(API_ROOT + "platform/:id/");
  }).factory("Accessibilities", function($resource, API_ROOT) {
    return $resource(API_ROOT + "accessibility/:id/");
  }).config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  }).config(function($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|market|itms-apps):/);
  }).config([
    "$routeProvider", "STATIC_URL", function($routeProvider, STATIC_URL) {
      return $routeProvider.when("/", {
        templateUrl: STATIC_URL + "front.html"
      }).when("/list/", {
        controller: "ApplicationListCtrl",
        templateUrl: STATIC_URL + "list.html"
      }).when("/application/:applicationId/", {
        controller: "ApplicationCtrl",
        templateUrl: STATIC_URL + "application.html"
      }).when("/categories/", {
        controller: "CategoryListCtrl",
        templateUrl: STATIC_URL + "categories.html"
      }).when("/info/", {
        templateUrl: STATIC_URL + "info.html"
      }).otherwise({
        redirectTo: "/"
      });
    }
  ]).controller("ApplicationListCtrl", function($scope, $location, Applications, Categories, Platforms, Accessibilities) {
    $scope.refineBox = true; //refine box collapsed by default
    $scope.sortProp = "name.fi"; //default sorting method
    $scope.filter = {};
    $scope.appliedFilter = {};
    angular.extend($scope.filter, $location.search());
    angular.extend($scope.appliedFilter, $scope.filter);
    $scope.applications = Applications.query($scope.filter);
    $scope.categories = Categories.query();
    $scope.platforms = Platforms.query();
    $scope.accessibilities = Accessibilities.query();
    $scope.doFilter = function() {
      $scope.applications = Applications.query($scope.filter);
      $scope.appliedFilter = {};
      angular.extend($scope.appliedFilter, $scope.filter);
    };
    $scope.resetFilter = function() {
      $scope.filter = {};
      $scope.doFilter();
    };
  }).controller("ApplicationCtrl", function($scope, $routeParams, Applications) {
    var application;
    application = Applications.get({
      id: $routeParams.applicationId
    }, function() {
      $scope.application = application;
    });
  }).controller("CategoryListCtrl", function($scope, Categories) {
    $scope.categories = Categories.query();
  }).controller("CarouselCtrl", function($scope, Applications) {
    
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    
    $scope.addSlide = function($shoturl) {
      slides.push({
        image: $shoturl
      });
    };

    for( var i=0, l=$scope.application.screenshots.length; i<l; i++ ) {
      $scope.addSlide($scope.application.screenshots[i].image);
    }
    
  }).controller("RatingCtrl", function($scope) {
    $scope.rate = 4;
    $scope.max = 5;
    $scope.isReadonly = false;

  });

}).call(this);

$(document).ready(function(){
  
console.log("document ready");
  $('#j-filterbox').on('shown.bs.collapse', function(){ console.log("closing filters");
    $(".refine-toggle .glyphicon").removeClass("glyphicon-chevron-right").addClass("glyphicon-chevron-down");
  }).on('hidden.bs.collapse', function(){
  $(".refine-toggle .glyphicon").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-right");
  });

});
