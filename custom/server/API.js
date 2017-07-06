
var url = require("url");

exports.handler = function(req, res) {
    let pathName = _getPathName(req);  console.log(pathName);
    switch(pathName) {
      case "api/shape/list" :
          _getShapeList(req, res);
      break;
    }
};

function _getPathName(req) {
    let pathName = url.parse(req.url).pathname;
    pathName = pathName ? pathName.replace(/^\/|\/$/g, "") : "";
    return pathName;
};

function _response(_res, _result) {
    _res.writeHead(200, {"Content-Type": "application/json"});
    let json = JSON.stringify(_result);
    _res.end(json);
}

/* API Handlers */
function _getShapeList(req, res) {
    let returned = "aaa" // await dao.callDAO("findRecent10DiceLog");
    _response(res, returned);
};
