define(['jquery', 'bluebird'], function($, bluebird) {
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