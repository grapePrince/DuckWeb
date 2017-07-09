define(
function () {
    var _example = {
        eye : {
            name : "눈1",
            src : "static/shapes/eye/eye.svg",
            color : "#FF0000"
        }
    };
    var _shapes = [
        {
            index : 0,
            name : "string",
            thumnails : ["string"],
            colors : ["string"]
        }
    ];
    var _shapes = [];
    var setInitialData = function(shapes) {
        var i;
        for (i = 0 ; i < shapes.length ; i++) {
            shapes[i].visible = false;
        }
        _shapes = shapes;
    }
    var getExample = function() {
        return _example;
    }
    var getShapeList = function() {
        return _shapes;
    }
    return {
        setInitialData: setInitialData,
        getExample: getExample,
        getShapeList: getShapeList
    }
});