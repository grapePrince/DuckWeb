
var url = require("url");

exports.callHandler = async function(req, res) {
  let pathname = getPathName(req);  
  console.log(pathname);
  // let returned = await dao.callDAO("findRecent10DiceLog");
  // util.ajaxResponse(res, returned);
};

function getPathName(req) {
		let pathname = url.parse(req.url).pathname;
		pathname = pathname ? pathname.replace(/^\/|\/$/g, "") : "";
		return pathname;
};

function ajaxResponse(_res, _result) {
        _res.writeHead(200, {"Content-Type": "application/json"});
        var json = JSON.stringify(_result);
        _res.end(json);
    }
