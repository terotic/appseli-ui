
window.HAML['_app'] = function(locals){
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
   var _$output="<div class=\"app-listing\"><div class=\"g-app-listing__content\"><div class=\"g-app-listing__maininfo\"><h3 class=\"app-listing__name\"><a href=\"/application/{{application.id}}\" class=\"app-link\">{{application.name | translate}}</a></h3><div class=\"app-listing__description\">{{application.short_description | translate}}</div></div><div class=\"g-app-listing__moreinfo\"><div class=\"app-listing__icon\"><img ng-src=\"{{application.image}}\" /></div><div class=\"app-listing__rating\">" + 
render("rating") + 
"</div><div class=\"app-listing__tags\">Category:<ul class=\"taglist\"><li ng-repeat=\"category in application.categories\" class=\"taglist__tag\">{{category.name | translate}}</li></ul></div></div></div></div>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}


window.HAML['_filtering'] = function(locals){
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
   var _$output="<div class=\"filter-settings\"><form role=\"form\" class=\"filter-form\"><h5 class=\"filter-header\"><span class=\"filter-header-label\">Showing:<span ng-repeat=\"part in ['search', 'category', 'accessibility', 'language', 'platform', 'min_rating']\" ng-if=\"appliedFilter[part]\">{{part}}: {{appliedFilter[part].join(\", \")}}</span></span><a data-toggle=\"collapse\" data-target=\"#j-filterbox\">Refine &gt;&gt;</a></h5><div class=\"collapse\" id=\"j-filterbox\"><div class=\"filter-text form-group\"><label for=\"searchfield\">Search</label><input type=\"text\" placeholder=\"search\" ng-model=\"filter.search\" class=\"form-control\" id=\"searchfield\" /></div><div class=\"filter-tag-selections\"><div class=\"filter-select filter-select__category form-group\"><label for=\"category\">Category</label><select ng-model=\"filter.category\" class=\"form-control\" id=\"category\"><option ng-repeat=\"category in categories\" value=\"{{category.slug}}\">{{category.name | translate}}</option></select></div><div class=\"filter-select filter-select__accessibility form-group\"><label for=\"accessibility\">Accessibility</label><select ng-model=\"filter.accessibility\" data-native-menu=\"false\" class=\"form-control\" id=\"accessibility\"><option ng-repeat=\"accessibility in accessibilities\" value=\"{{accessibility.slug}}\">{{accessibility.name | translate}}</option></select></div><div class=\"filter-select filter-select__platform form-group\"><label for=\"platform\">Platform</label><select ng-model=\"filter.platform\" class=\"form-control\" id=\"platform\"><option value=\"{{platform.slug}}\" ng-repeat=\"platform in platforms\">{{platform.name | translate}}</option></select></div><div class=\"filter-select filter-select__language form-group\"><label for=\"language\">Language</label><select ng-model=\"filter.language\" class=\"form-control\" id=\"language\"><option value=\"en\">English</option><option value=\"fi\">Finnish</option><option value=\"sv\">Swedish</option><option value=\"ru\">Russian</option></select></div><div class=\"filter-select filter-select__rating form-group\"><label for=\"rating\">Minimum Rating</label><select ng-model=\"filter.min_rating\" class=\"form-control\" id=\"rating\"><option value=\"0\">0</option><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option></select></div><div class=\"filter-select filter-select__submit form-group\"><button type=\"button\" ng-click=\"resetFilter()\" class=\"btn btn-warning\">Reset</button><button type=\"button\" ng-click=\"doFilter()\" class=\"btn btn-primary\">Filter</button></div></div></div></form></div>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}


window.HAML['_footer'] = function(locals){
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
   var _$output="<footer class=\"main-footer\"><div class=\"main-footer-content\"><p>Information provided by Helsingin kaupunki</p><p>2014</p><pSend>feedback</pSend></div></footer>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}


window.HAML['_navigation'] = function(locals){
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
   var _$output="<nav class=\"navigation-bar\"><!-- role=navigation --><div class=\"container-fluid\"><!-- Brand and toggle get grouped for better mobile display --><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a class=\"navbar-brand\" href=\"/index/\">apps.hel.fi</a></div><!-- Collect the nav links, forms, and other content for toggling --><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav\" id=\"j-pagenavi\"><li><a href=\"/list/\">Applications</a></li><li><a href=\"/categories/\">Categories</a></li><li><a href=\"/info/\">Info</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><form class=\"navbar-form navbar-left\" role=\"search\"><div class=\"form-group\"><input type=\"text\" class=\"form-control\" placeholder=\"Search\" /><button type=\"submit\" class=\"btn btn-default\">Submit</button></div></form></ul></div></div></nav>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}


window.HAML['_rating'] = function(locals){
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
   var _$output="<div ng-init=\"ratingRange = [0.5, 1.5, 2.5, 3.5, 4.5]\"> <span ng-repeat=\"val in ratingRange\" ng-if=\"application.rating &gt; val\" class=\"glyphicon glyphicon-star\"></span> <span ng-repeat=\"val in ratingRange\" ng-if=\"application.rating &lt; val\" class=\"glyphicon glyphicon-star-empty\"></span></div>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}


window.HAML['application'] = function(locals){
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
   var _$output="<div ng-if=\"application\"><div class=\"app__header\"><h2 class=\"app__name\">{{application.name | translate}}</h2><div class=\"app__publisher\">{{application.vendor}}</div><div class=\"app__short-description\">{{application.short_description | translate}}</div></div><div class=\"app__details\"><div class=\"app_details__first\"><div class=\"app__icon\"><img ng-src=\"{{application.image}}\" /></div></div><div class=\"app_details__second\"><div class=\"app__rating\">Rating:" +
render("rating") + 
"</div><div ng-if=\"application.categories.length\" class=\"app__languages\">Categories<ul class=\"language-list\"><li ng-repeat=\"category in application.categories\" class=\"language-list__language\">{{category.name | translate}}</li></ul></div><div ng-if=\"application.languages.length\" class=\"app__languages\">Languages<ul class=\"language-list\"><li ng-repeat=\"language in application.languages\" class=\"language-list__language\">{{language | langCodeToName}}</li></ul></div><div ng-if=\"application.accessibilities.length\" class=\"app__languages\">Accessibility<ul class=\"language-list\"><li ng-repeat=\"accessibility in application.accessibilities\" class=\"language-list__language\">{{accessibility.name | translate}}</li></ul></div><div ng-if=\"application.version\" class=\"app__version\">Version {{application.version}}</div><div class=\"app__updated\">Updated {{application.modified | date:\"dd.MM.yyyy\"}}</div></div><div class=\"app__platforms\"><ul class=\"platform-list\"><li ng-repeat=\"platform in application.platforms\" class=\"platform-list__platform platform-list__platform--{{platform.slug}}\"><a href=\"{{platform.store_url}}\" class=\"platform__download\">{{platform.name | translate}}</a></li></ul><div class=\"app__links\"><div class=\"app__link app-link--publisherwebsite\"><a href=\"{{application.publisher_url}}\">Publisher Website &gt;&gt;</a></div><div class=\"app-link app-link--support\"><a href=\"{{application.support_url}}\">Support Website &gt;&gt;</a></div></div></div></div><div class=\"app__long-description\">{{application.description | translate}}</div><div class=\"app__screenshots\"><div data-ride=\"carousel\" class=\"carousel slide\" id=\"j-screenshots-carousel\"><!-- Indicators --><ol class=\"carousel-indicators\"><li data-target=\"#j-screenshots-carousel\" data-slide-to=\"{{$index}}\" ng-repeat=\"screenshot in application.screenshots\" ng-class=\"{active: $index == 0}\"></li></ol><!-- Wrapper for slides --><div class=\"carousel-inner\"><div ng-repeat=\"screenshot in application.screenshots\" ng-class=\"{active: $index == 0}\" class=\"item\"><img ng-src=\"{{ screenshot.image }}\" alt=\"Screenshot\" /></div></div><!-- Controls --><a data-target=\"#j-screenshots-carousel\" data-slide=\"prev\" class=\"left carousel-control\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a><a data-target=\"#j-screenshots-carousel\" data-slide=\"next\" class=\"right carousel-control\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a></div></div></div>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}


window.HAML['categories'] = function(locals){
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
   var _$output="<h1>Categories</h1><div class=\"categories\"><div ng-repeat=\"category in categories\" class=\"category\"><a ng-href=\"/list/?category={{category.slug}}\"><div class=\"category-content\"><div class=\"category--icon\"><span class=\"glyphicon {{category.getGlyphiconClass()}}\"></span></div><div class=\"category--name\">{{category.name | translate}}</div><div class=\"category--count\">{{category.applications.length}}</div></div></a></div></div>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}


window.HAML['front'] = function(locals){
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
   var _$output="FRONT PAGE";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}


window.HAML['info'] = function(locals){
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
   var _$output="<div class=\"info__illustration image--responsive\"><img src=\"/images/illustration-placer.png\" /></div><h1>Info</h1><div class=\"info__description\"><p>Ipsum aliquip concursionibus in pariatur culpa ipsum do aliqua. Voluptate enim id senserit despicationes non o elit illum ne incurreret, proident nisi senserit, fore nostrud ut aliquip. Laborum eram aliquip offendit. Possumus esse fugiat ita culpa ad ad irure aliquip. Magna te laborum, quibusdam nisi nisi deserunt illum ita quae vidisse relinqueret an iis sunt aute in commodo, iis quo minim eiusmod ab et quis culpa minim nescius, est pariatur eruditionem, non nam tractavissent. Ut fugiat lorem culpa expetendis, sunt litteris non incurreret ubi tamen in si nisi expetendis ex ita ingeniis qui commodo eu o amet tamen si arbitror, legam possumus hic coniunctione, se legam sed fugiat ab o amet quo labore. De illum tempor sed senserit anim sed possumus consectetur ita aute quibusdam ab mentitum an ab lorem quis duis singulis. Sunt ullamco an summis nulla.</p></div><div class=\"info__terms-condition\"><h2>Terms and Conditions</h2><p>Aute tempor voluptate si eiusmod arbitrantur te aliquip. Aliqua ea probant in</p>labore, iis illum cillum ex pariatur nam occaecat efflorescere e senserit e possumus se fore laboris, expetendis fore hic tempor instituendarum qui ingeniis do lorem, e fugiat commodo, ita ipsum probant instituendarum. Hic aute proident coniunctione. Do velit quae se arbitror e anim possumus sempiternum. Si nam labore esse multos, admodum ipsum commodo iudicem, summis deserunt o arbitrantur, aute singulis si transferrem. Voluptate praesentibus nam cernantur. Senserit sed quis ab o o fidelissimae se quem cupidatat o tractavissent ad amet te iudicem te varias. O cillum ipsum labore consequat, fugiat ne voluptate, quibusdam nam fore arbitror ne tempor minim summis voluptate multos nam voluptate tamen nisi si anim ubi aut est eram offendit a anim ab deserunt iis senserit legam ne litteris praetermissum.</div>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}


window.HAML['list'] = function(locals){
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
   var _$output="<h2 class=\"page-header\">Apps Listing</h2><div class=\"apps-filter\">" + 
render("filtering") + 
"</div><div class=\"apps-list\"><div class=\"apps-list__sort\"><form role=\"form\" class=\"form-horizontal\"><div class=\"form-group\"><label for=\"sort-method\" class=\"control-label\">Sort List</label><select ng-model=\"sortProp\" class=\"form-control\" id=\"sort-method\"><option value=\"-created\">Date added</option><option value=\"-rating\">Rating</option><option value=\"name.fi\">Alphabetical</option></select></div></form></div><div class=\"g-apps-list\"><div ng-repeat=\"application in applications | orderBy:sortProp\" class=\"g-app-listing\">" + 
render("app") + 
"</div></div></div>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}
