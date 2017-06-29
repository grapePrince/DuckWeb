
requirejs.config({
    baseUrl: 'lib',
    paths: { //alias paths
    	"jquery": "./jquery",
    	"velocity": "./velocity",
        "app": '../app' 
    }
});

require(['jquery', 'velocity', 'app/main'], 
	function($) { // Configuration loaded now, safe to do other require calls
       ;
	}
);

