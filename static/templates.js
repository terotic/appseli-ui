
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
"</div><div class=\"app-listing__tags\">Category:<ul class=\"taglist\"><li ng-repeat=\"category in application.categories\" class=\"taglist__tag\"><a ng-href=\"/list/?category={{category.slug}}\">{{category.name | translate}}</a></li></ul></div></div></div></div>";
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
   var _$output="<div class=\"filter-settings\"><form role=\"form\" class=\"filter-form\"><h5 class=\"filter-header\"><span class=\"filter-header-label\">Showing:<span ng-repeat=\"part in ['search', 'category', 'accessibility', 'language', 'platform', 'min_rating']\" ng-if=\"appliedFilter[part]\">{{part}}: {{appliedFilter[part].join(\", \")}}</span></span><a data-toggle=\"collapse\" data-target=\"#j-filterbox\" class=\"refine-toggle\">Refine <span class=\"glyphicon glyphicon-chevron-right\"></span></a></h5><div collapse=\"refineBox\" class=\"filters-form collapse\" id=\"j-filterbox\"><div class=\"filter-text form-group\"><label for=\"searchfield\">Search</label><input type=\"text\" placeholder=\"search\" ng-model=\"filter.search\" class=\"form-control\" id=\"searchfield\" /></div><div class=\"filter-tag-selections\"><div class=\"filter-select filter-select__category form-group\"><label for=\"category\">Category</label><select ng-model=\"filter.category\" class=\"form-control\" id=\"category\"><option ng-repeat=\"category in categories\" value=\"{{category.slug}}\">{{category.name | translate}}</option></select></div><div class=\"filter-select filter-select__accessibility form-group\"><label for=\"accessibility\">Accessibility</label><select ng-model=\"filter.accessibility\" data-native-menu=\"false\" class=\"form-control\" id=\"accessibility\"><option ng-repeat=\"accessibility in accessibilities\" value=\"{{accessibility.slug}}\">{{accessibility.name | translate}}</option></select></div><div class=\"filter-select filter-select__platform form-group\"><label for=\"platform\">Platform</label><select ng-model=\"filter.platform\" class=\"form-control\" id=\"platform\"><option value=\"{{platform.slug}}\" ng-repeat=\"platform in platforms\">{{platform.name | translate}}</option></select></div><div class=\"filter-select filter-select__language form-group\"><label for=\"language\">Language</label><select ng-model=\"filter.language\" class=\"form-control\" id=\"language\"><option value=\"en\">English</option><option value=\"fi\">Finnish</option><option value=\"sv\">Swedish</option><option value=\"ru\">Russian</option></select></div><div class=\"filter-select filter-select__rating form-group\"><label for=\"rating\">Minimum Rating</label><select ng-model=\"filter.min_rating\" class=\"form-control\" id=\"rating\"><option value=\"0\">0</option><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option></select></div><div class=\"filter-select filter-select__submit form-group\"><button type=\"button\" ng-click=\"resetFilter()\" class=\"btn btn-warning\">Reset</button><button type=\"button\" ng-click=\"doFilter()\" class=\"btn btn-primary\">Filter</button></div></div></div></form></div>";
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
   var _$output="<nav class=\"navigation-bar\"><!-- role=navigation --><div class=\"container-fluid\"><!-- Brand and toggle get grouped for better mobile display --><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a class=\"navbar-brand\" href=\"/index/\">apps.hel.fi</a></div><!-- Collect the nav links, forms, and other content for toggling --><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav\" id=\"j-pagenavi\"><li><a href=\"/list/\">Apps</a></li><li><a href=\"/categories/\">Categories</a></li><li><a href=\"/info/\">Info</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><form class=\"navbar-form navbar-left\" role=\"search\"><div class=\"form-group\"><input type=\"text\" class=\"form-control\" placeholder=\"Search\" /><button class=\"btn btn-default\"><span class=\"glyphicon glyphicon-search\"></span></button></div></form></ul></div></div></nav>";
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
   var _$output="<div ng-controller=\"RatingCtrl\"><rating ng-model=\"rate\" max=\"max\" readonly=\"isReadonly\"></rating></div>";
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
   var _$output="<div ng-if=\"application\"><div class=\"app__header\"><h2 class=\"page-header\">{{application.name | translate}}</h2><div class=\"app__publisher\">Published by {{application.vendor}}</div></div><div class=\"app-content\"><div class=\"app__details\"><div class=\"app_details__first\"><div class=\"app__icon\"><img ng-src=\"{{application.image}}\" /></div></div><div class=\"app_details__second\"><div class=\"app__rating\">Rating:" +
render("rating") + 
"</div><div ng-if=\"application.categories.length\" class=\"app__languages\">Categories<ul class=\"language-list\"><li ng-repeat=\"category in application.categories\" class=\"language-list__language\">{{category.name | translate}}</li></ul></div><div ng-if=\"application.languages.length\" class=\"app__languages\">Languages<ul class=\"language-list\"><li ng-repeat=\"language in application.languages\" class=\"language-list__language\">{{language | langCodeToName}}</li></ul></div><div ng-if=\"application.accessibilities.length\" class=\"app__languages\">Accessibility<ul class=\"language-list\"><li ng-repeat=\"accessibility in application.accessibilities\" class=\"language-list__language\">{{accessibility.name | translate}}</li></ul></div><div ng-if=\"application.version\" class=\"app__version\">Version {{application.version}}</div><div class=\"app__updated\">Updated {{application.modified | date:\"dd.MM.yyyy\"}}</div></div><div class=\"app__platforms\"><ul class=\"platform-list\"><li ng-repeat=\"platform in application.platforms\" class=\"platform-list__platform platform-list__platform--{{platform.slug}}\"><a href=\"{{platform.store_url}}\" class=\"platform__download\"><img src=\"images/badges-assets/{{platform.slug}}-en.png\" alt=\"{{platform.name | translate}}\" /></a></li></ul><div class=\"app__links\"><div class=\"app__link app-link--publisherwebsite\"><a href=\"{{application.publisher_url}}\">Publisher Website &gt;&gt;</a></div><div class=\"app-link app-link--support\"><a href=\"{{application.support_url}}\">Support Website &gt;&gt;</a></div></div></div></div><div class=\"app__long-description\">{{application.description | translate}}</div><div class=\"app__screenshots\"><div ng-controller=\"CarouselCtrl\"><carousel interval=\"myInterval\">  <slide ng-repeat=\"slide in slides\" active=\"slide.active\">    <img ng-src=\"{{slide.image}}\" style=\"margin:auto;\">  </slide></carousel></div></div></div></div>";
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
   var _$output="<h2 class=\"page-header\">Categories</h2><div class=\"categories\"><div ng-repeat=\"category in categories\" class=\"category\"><a ng-href=\"/list/?category={{category.slug}}\"><div class=\"category-content\"><div class=\"category--icon\"><span class=\"glyphicon {{category.getGlyphiconClass()}}\"></span></div><div class=\"category--name\">{{category.name | translate}}</div><div class=\"category--count\">{{category.applications.length}}</div></div></a></div></div>";
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
   var _$output="<img src=\"images/pictures-assets/front-image.jpg\" alt=\"kuva: Maija Astikainen - Torikorttelit\" title=\"kuva: Maija Astikainen - Torikorttelit\" class=\"front-bg\" /><div class=\"front-content\"><img src=\"images/pictures-assets/apps-symbol.png\" alt=\"Helsinki Apps Symbol\" class=\"app-symbol\" /><div class=\"h2\">Helsinki App Catalogue</div><p>—</p><p>A collection of useful smartphone apps for Helsinki citizens and visitors</p></div>";
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
   var _$output="<h2 class=\"page-header\">Info</h2><div class=\"info-content\"><div class=\"info__illustration image--responsive\"><img src=\"/images/pictures-assets/illustration.jpg\" /></div><div class=\"info__description\"><h3>apps.hel.fi</h3><p>Ipsum aliquip concursionibus in pariatur culpa ipsum do aliqua. Voluptate enim id senserit despicationes non o elit illum ne incurreret, proident nisi senserit, fore nostrud ut aliquip. Laborum eram aliquip offendit. Possumus esse fugiat ita culpa ad ad irure aliquip. Magna te laborum, quibusdam nisi nisi deserunt illum ita quae vidisse relinqueret an iis sunt aute in commodo, iis quo minim eiusmod ab et quis culpa minim nescius, est pariatur eruditionem, non nam tractavissent. </p><p>Developed by xxx</p></div><div class=\"info__terms-condition\"><h2>Terms and Conditions</h2><p>Aute tempor voluptate si eiusmod arbitrantur te aliquip. Aliqua ea probant in</p>labore, iis illum cillum ex pariatur nam occaecat efflorescere e senserit e possumus se fore laboris, expetendis fore hic tempor instituendarum qui ingeniis do lorem, e fugiat commodo, ita ipsum probant instituendarum. Hic aute proident coniunctione. <p>Do velit quae se arbitror e anim possumus sempiternum. Si nam</p>labore esse multos, admodum ipsum commodo iudicem, summis deserunt o arbitrantur, aute singulis si transferrem. Voluptate praesentibus nam cernantur. Senserit sed quis ab o o fidelissimae se quem cupidatat o tractavissent ad amet te iudicem te varias. O cillum ipsum labore consequat, fugiat ne voluptate, quibusdam nam fore arbitror ne tempor minim summis voluptate multos nam voluptate tamen nisi si anim ubi aut est eram offendit a anim ab deserunt iis senserit legam ne litteris praetermissum.</div><div class=\"info__add-app\"><h2>Add Application</h2><p>Suggest an application that should be included in Helsinki App catalogue. Please bear in mind that all published applications should be relevant to City of Helsinki or Helsinki Region.</p><form class=\"form-horizontal suggest-form\"><fieldset><!-- Text input--><div class=\"form-group\">  <label class=\"control-label\" for=\"add-app-name\">App Name</label>    <div class=\"entryfield\">  <input id=\"add-app-name\" name=\"add-app-name\" type=\"text\" placeholder=\"\" class=\"form-control input-md\" required=\"\">  <span class=\"help-block\">Name of the App</span>    </div></div><!-- Text input--><div class=\"form-group\">  <label class=\"control-label\" for=\"add-app-url\">Url</label>    <div class=\"entryfield\">  <input id=\"add-app-url\" name=\"add-app-url\" type=\"text\" placeholder=\"\" class=\"form-control input-md\" required=\"\">  <span class=\"help-block\">Web address where the app can be downloaded</span>    </div></div><!-- Textarea --><div class=\"form-group\">  <label class=\"control-label\" for=\"add-app-info\">More Information</label>  <div class=\"entryfield\">                         <textarea class=\"form-control\" id=\"add-app-info\" name=\"add-app-info\"></textarea>    <span class=\"help-block\">ie. Why this app should be included in Helsinki App Catalogue</span>  </div></div><!-- Button (Double) --><div class=\"form-group\">  <label class=\"control-label\" for=\"add-app-send\"></label>  <div class=\"entryfield\">    <button id=\"add-app-send\" name=\"add-app-send\" class=\"btn btn-success\">Send</button>    <button id=\"add-app-cancel\" name=\"add-app-cancel\" class=\"btn btn-danger\">Clear</button>  </div></div></fieldset></form></div></div>";
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
   var _$output="<h2 class=\"page-header\">Apps</h2><div class=\"apps-filter\">" + 
render("filtering") + 
"</div><div class=\"apps-list\"><div class=\"apps-list__sort\"><form role=\"form\" class=\"form-horizontal\"><div class=\"form-group\"><label for=\"sort-method\" class=\"control-label\">Sort List</label><select ng-model=\"sortProp\" class=\"form-control\" id=\"sort-method\"><option value=\"-created\">Newest first</option><option value=\"-rating\">Best rated first</option><option value=\"name.fi\">Alphabetical order</option></select></div></form></div><div class=\"g-apps-list\"><div ng-repeat=\"application in applications | orderBy:sortProp\" class=\"g-app-listing\">" + 
render("app") + 
"</div></div></div>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}


window.HAML['template/alert/alert'] = function(locals){
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
   var _$output="<div class=\"alert\" ng-class=\"['alert-' + (type || 'warning'), closeable ? 'alert-dismissable' : null]\" role=\"alert\">    <button ng-show=\"closeable\" type=\"button\" class=\"close\" ng-click=\"close()\">        <span aria-hidden=\"true\">&times;</span>        <span class=\"sr-only\">Close</span>    </button>    <div ng-transclude></div></div>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}


window.HAML['template/carousel/carousel'] = function(locals){
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
   var _$output="<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">    <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">        <li ng-repeat=\"slide in slides track by $index\" ng-class=\"{active: isActive(slide)}\" ng-click=\"select(slide)\"></li>    </ol>    <div class=\"carousel-inner\" ng-transclude></div>    <a class=\"left carousel-control\" ng-click=\"prev()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>    <a class=\"right carousel-control\" ng-click=\"next()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a></div>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}


window.HAML['template/carousel/slide'] = function(locals){
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
   var _$output="<div ng-class=\"{'active': leaving || (active &amp;&amp; !entering),'prev': (next || active) &amp;&amp; direction=='prev','next': (next || active) &amp;&amp; direction=='next','right': direction=='prev','left': direction=='next'}\" ng-transclude=\"ng-transclude\" class=\"item text-center\"></div>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}


window.HAML['template/rating/rating'] = function(locals){
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
   var _$output="<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\">    <i ng-repeat=\"r in range track by $index\" ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"glyphicon\" ng-class=\"$index < value && (r.stateOn || 'glyphicon-star') || (r.stateOff || 'glyphicon-star-empty')\">        <span class=\"sr-only\">({{ $index < value ? '*' : ' ' }})</span>    </i></span>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}


window.HAML['template/typeahead/typeahead-match'] = function(locals){
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
   var _$output="<a tabindex=\"-1\" bind-html-unsafe=\"match.label | typeaheadHighlight:query\"></a>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}


window.HAML['template/typeahead/typeahead-popup'] = function(locals){
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
   var _$output="<ul class=\"dropdown-menu\" ng-if=\"isOpen()\" ng-style=\"{top: position.top+'px', left: position.left+'px'}\" style=\"display: block;\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\">    <li ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index)\" role=\"option\" id=\"{{match.id}}\">        <div typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div>    </li></ul>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}
