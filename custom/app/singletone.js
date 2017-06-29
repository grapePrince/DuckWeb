define(function () {
    //Do setup work here
    var value = 1;
    var up = function() {
      value++;
    }
    var print = function() {
    	console.log(value);
    }

    return {
        up: up,
        print: print
    }
});