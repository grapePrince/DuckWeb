define(
['jquery', 'Util', 'Store', 'Template'], 
function ($, Util, Store, Template) {
    var a = 0;

    var initFirstPage = function() {
        var shapes;
        var callback = _initFirstPageCallback.bind(this);

        Util.promisedRequest('/api/shape/list')
        .then(function(result) {
            return callback(result);
        })
        .catch(function(e) {});

    };

    var _initFirstPageCallback = function(result) {
        var shapes = result;
        Store.setInitialData(shapes);
        _renderFirstPage();
    }

    var _renderFirstPage = function() {
        var shapes = Store.getShapeList();
        _renderExample();
        _renderSummary();
        _renderShapes();
    };

    var _renderExample = function() {
        var example = Store.getExample();
        var exampleHtml = _makeExampleHtml(example);
        $("#example").html(exampleHtml);
    };

    var _makeExampleHtml = function(example) {
        return Template.exampleTemplate.replace("{{EyeSrc}}", example.eye.src);
    };

    var _renderSummary = function() {
        var example = Store.getExample();
        var summaryHtml = _makeSummaryHtml(example);
        $("#summary").html(summaryHtml); 
    };

    var _makeSummaryHtml = function(example) {
        return Template.summaryTemplate.replace("{{EyeName}}", example.eye.name)
                    .replace("{{EyeColor}}", example.eye.color);
    };

    var _renderShapes = function() {
        var shapes = Store.getShapeList();
        _renderShapesTabs(shapes);
        _renderShapesThumnails(shapes);
        _renderShapesColors(shapes);
    };

    var _renderShapesTabs = function(shapes) {
        var shapeTabsHtml = _makeShapeTabsHtml(shapes);
        $("#shapes .tabs").html(shapeTabsHtml);
    };

    var _makeShapeTabsHtml = function(shapes) {
        var i;
        var returnHtml = "";
        for( i = 0 ; i < shapes.length ; i++) {
            var shape = shapes[i];
            if (i == 0) {
                returnHtml += Template.shapeTabItem.replace("{{Tab}}", shape.name)
                                    .replace("{{Display}}", "selected"); 
            } else {
                returnHtml += Template.shapeTabItem.replace("{{Tab}}", shape.name)
                                    .replace("{{Display}}", "");
            }
        }
        return returnHtml;
    };

    var _renderShapesThumnails = function(shapes) {
        var shapeThumnailsHtml = "", i;
        for ( i = 0 ; i < shapes.length ; i++) {
            var shape = shapes[i];
            if (i == 0) {
                shapeThumnailsHtml += _makeShapeThumnailsHtml(shape.thumnails, "visible");
            } else {
                shapeThumnailsHtml +=  _makeShapeThumnailsHtml(shape.thumnails, "");
            }
        }
        $("#shapes .thumnails").html(shapeThumnailsHtml);
    };

    var _makeShapeThumnailsHtml = function(thumnails, visible) {
        var i;
        var returnHtml = "";

        if (visible == "visible") {
            returnHtml += "<div style='display:block'>";
        } else {
            returnHtml += "<div style='display:none'>";
        }
        for( i = 0 ; i < thumnails.length ; i++) {
            var thumnail = thumnails[i];
            returnHtml += Template.shapeThumnailItem.replace("{{ThumnailSrc}}", thumnail);
        }
        returnHtml += "</div>";

        return returnHtml;
    };

    var _renderShapesColors = function(shapes) {
         var shapeColorsHtml = "", i;
        for ( i = 0 ; i < shapes.length ; i++) {
            var shape = shapes[i];
            if (i == 0) {
                shapeColorsHtml += _makeShapeColorsHtml(shape.colors, "visible");
            } else {
                shapeColorsHtml +=  _makeShapeColorsHtml(shape.colors, "");
            }
        }
        $("#shapes .colors").html(shapeColorsHtml);
    };

    var _makeShapeColorsHtml = function(colors, visible) {
        var i;
        var returnHtml = "";

        if (visible == "visible") {
            returnHtml += "<div style='display:block'>";
        } else {
            returnHtml += "<div style='display:none'>";
        }
        for( i = 0 ; i < colors.length ; i++) {
            var color = colors[i];
            returnHtml += Template.shapeColorItem.replace("{{Color}}", color);
        }
        returnHtml += "</div>";

        return returnHtml;
    };

    var toggleShapes = function() {

    };

    return {
        initFirstPage: initFirstPage
    }
});