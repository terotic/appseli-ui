
# Remove '#' from urls and use html5 pushstate instead

# Don't add "unsafe" to market / app store protocol urls
# filter by GET parameters

# Filtering
angular.module("apps", [
    "ngRoute"
    "ngResource"
    "config"
]).filter("truncate", ->
    (text, length, end) ->
        if isNaN length
            length = 10
        if not end?
            end = "..."
        if text.length <= length or text.length - end.length <= length
            text
        else
            String(text).substring(0, length - end.length) + end
).filter("langCodeToName", ->
    codeMap =
        en: "English"
        fi: "Finnish"
        sv: "Swedish"
        ru: "Russian"

    (code) ->
        codeMap[code] or code
).factory("languageService", [
    "$locale"
    ($locale) ->
        language = $locale.id.split("-")[0]
        return (
            getLanguage: ->
                language

            setLanguage: (new_lang) ->
                language = new_lang
                return
        )
]).filter("translate", [
    "languageService"
    (languageService) ->
        return (field) ->
            lang = languageService.getLanguage()
            field[lang] or field["en"]
]).factory("$templateCache", ($cacheFactory, $http, $injector) ->
    factory = 
        get: (url) ->
            if url[0] == '/'
                url = url.substring 1
            i = url.lastIndexOf '.html'
            if i >= 0
                url = url.substr 0, i
            template_func = window.HAML[url]
            locals =
                render: (template_name) ->
                    return factory.get "_#{template_name}.html"
            return template_func locals
        put: (key, value) ->
            console.log "cache put", key, value
    return factory
).factory("PageState", ($timeout) ->
    class PageState
        register: (scope) ->
            @state = 'load'
            scope.$on '$viewContentLoaded', (arg) =>
                $timeout =>
                    @state = 'ready'
            @
    return new PageState
        

).factory("Applications", ($resource, API_ROOT) ->
    $resource API_ROOT + "application/:id/"
).factory("Categories", ($resource, API_ROOT) ->
    Categories = $resource(API_ROOT + "category/:id/")
    glyphicons =
        "travel-local": "glyphicon-camera"
        "food-drink": "glyphicon-glass"
        culture: "glyphicon-picture"
        transportation: "glyphicon-plane"
        nature: "glyphicon-tree-conifer"
        tools: "glyphicon-wrench"
        social: "glyphicon-comment"
        communications: "glyphicon-cloud"
        lifestyle: "glyphicon-star"

    Categories::getGlyphiconClass = ->
        glyphicons[@slug] or "glyphicon-th-large"

    Categories
).factory("Platforms", ($resource, API_ROOT) ->
    $resource API_ROOT + "platform/:id/"
).factory("Accessibilities", ($resource, API_ROOT) ->
    $resource API_ROOT + "accessibility/:id/"
).config(($locationProvider) ->
    $locationProvider.html5Mode true
    return
).config(($compileProvider) ->
    $compileProvider.aHrefSanitizationWhitelist /^\s*(https?|ftp|mailto|market|itms-apps):/
    return
).config([
    "$routeProvider"
    "STATIC_URL"
    ($routeProvider, STATIC_URL) ->
        $routeProvider.when("/",
            templateUrl: STATIC_URL + "front.html"
            controller: "DefaultCtrl"
        ).when("/list/",
            controller: "ApplicationListCtrl"
            templateUrl: STATIC_URL + "list.html"
        ).when("/application/:applicationId/",
            controller: "ApplicationCtrl"
            templateUrl: STATIC_URL + "application.html"
        ).when("/categories/",
            controller: "CategoryListCtrl"
            templateUrl: STATIC_URL + "categories.html"
        ).when("/info/",
            templateUrl: STATIC_URL + "info.html"
            controller: "DefaultCtrl"            
        ).otherwise redirectTo: "/"
]).controller("DefaultCtrl", ["$scope", "$rootScope", "$timeout", "PageState", ($scope, $rootScope, $timeout, PageState) ->
    $rootScope.ignoreTransition = false
    $scope.pageState = PageState.register $scope
]).controller("ApplicationListCtrl", ($scope, $rootScope, $location, Applications, Categories, Platforms, Accessibilities, PageState) ->
    $scope.pageState = PageState.register $scope
    $rootScope.ignoreTransition = true
    $scope.filter = {}
    $scope.appliedFilter = {}
    angular.extend $scope.filter, $location.search()
    angular.extend $scope.appliedFilter, $scope.filter
    $scope.applications = Applications.query($scope.filter)
    $scope.categories = Categories.query()
    $scope.platforms = Platforms.query()
    $scope.accessibilities = Accessibilities.query()
    $scope.doFilter = ->
        $scope.applications = Applications.query($scope.filter)
        $scope.appliedFilter = {}
        angular.extend $scope.appliedFilter, $scope.filter
        return

    $scope.resetFilter = ->
        $scope.filter = {}
        $scope.doFilter()
        return

    return
).controller("ApplicationCtrl", ($scope, $rootScope, $routeParams, Applications, PageState) ->
    $rootScope.ignoreTransition = false
    $scope.pageState = PageState.register $scope    
    application = Applications.get(
        id: $routeParams.applicationId
    , ->
        $scope.application = application
        return
    )
    return
).controller("CategoryListCtrl", ($scope, $rootScope, Categories, PageState) ->
    $rootScope.ignoreTransition = true
    $scope.pageState = PageState.register $scope    
    $scope.categories = Categories.query()
    return
).directive('catchTransitions', ($location) ->
    link: (scope, element) ->
        element.on 'transitionend otransitionend webkitTransitionEnd', (e) ->
            unless scope.ignoreTransition == true
                scope.$broadcast 'transition:end'
).directive('emitLast', ($rootScope) ->
    link: (scope, element) ->
        if scope.$last
            scope.$emit 'repeat:end'
).directive('showAfterTransitions', ($rootScope, $location) ->
    link: (scope, element) ->
        $rootScope.$on '$routeChangeStart', ->
            element.css 'visibility', 'hidden'
        $rootScope.$on 'transition:end', ->
            element.css 'visibility', 'visible'
).directive('showAfterRepeat', ($rootScope, $location) ->
    link: (scope, element) ->
        $rootScope.$on '$routeChangeStart', ->
            element.css 'visibility', 'hidden'
        $rootScope.$on 'repeat:end', ->
            element.css 'visibility', 'visible'
)
