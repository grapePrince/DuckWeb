
requirejs.config({
    baseUrl: 'lib',
    paths: { //alias paths
    	"jquery": "./jquery",
    	"bluebird": "./bluebird",
        "handlebars": "./handlebars",
        "underscore": "./underscore",
        "crossroads": "./crossroads",
        "app": '../app' 
    }
});

require(['jquery', 'app/main'], 
	function($) { // Configuration loaded now, safe to do other require calls
       ;
	}
);

