
requirejs.config({
    baseUrl: '/js/',
    paths: { //alias paths
    	"jquery": "./lib/jquery",
    	"bluebird": "./lib/bluebird",
        "handlebars": "./lib/handlebars",
        "underscore": "./lib/underscore",
        "crossroads": "./lib/crossroads"
    }
});

require(['jquery', 'View'], 
	function($, View) { // Configuration loaded now, safe to do other require calls
       View.initFirstPage();
	}
);

