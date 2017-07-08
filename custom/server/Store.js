
let _shapes = [];

function setShapeList(shapes) {
    if (typeof shapes == "object" && shapes.length > 0) {
        _shapes = shapes.filter(shape =>  
            typeof shape.index == "number"
            && typeof shape.name == "string"
            && _isThumnailList(shape.thumnails)
            && _isColorList(shape.colors));
    }
    console.log(_shapes);
}
function _isThumnailList(thumnails) {
    for (var i = 0 ; i < thumnails.length ; i++) {
        var thumnail = thumnails[i];
        if (typeof thumnail != "string") {
            return false;
        }
    }
    return true;
}
function _isColorList(colors) {
    for (var i = 0 ; i < colors.length ; i++) {
        var color = colors[i];
        if (typeof color != "string") {
            return false;
        } else if (!color.startsWith("#")) {
            return false;
        }
    }
    return true;
}
function getShapeList() {
    return _shapes;
}

exports.setShapeList = setShapeList;
exports.getShapeList = getShapeList;