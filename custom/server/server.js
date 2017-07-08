let express = require("express");
let handlebars = require("express-handlebars");
let bodyParser = require("body-parser");
let path = require("path");
let url = require("url");
let fs = require("fs");
let API = require("./API.js");
let File = require("./File.js");

// server configuration
var app = express();
app.engine('handlebars', handlebars({ defaultLayout:'layout' }));

__dirname = fs.realpathSync('.');
console.log("current folder is : " + __dirname);
app.use("/static", express.static(path.join(__dirname, 'static')));
app.use("/css", express.static(path.join(__dirname, 'css')));
app.use("/js", express.static(path.join(__dirname, 'client')));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3101);

app.use(bodyParser.urlencoded({ extended: false }));
 
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/api/shape/list', API.handler);

/*
app.get('/util/dice', async function(req, res) {
	let logList = await dao.callDAO("findRecent10DiceLog");
	res.render('dice', {logList: logList});
});

app.get('/util/api/diceLog', async function(req, res) {
    let pathname = util.getPathName(req);  console.log(pathname);
    let returned = await dao.callDAO("findRecent10DiceLog");
	util.ajaxResponse(res, returned);
});

app.post('/util/api/diceLog', async function(req,res){
	let pathname = util.getPathName(req);  console.log(pathname);
	let data = util.getBodyData(req);
	let date = data.date;
	let result = data.result;
    let returned = await dao.callDAO("addDiceLog", date, result);
	util.ajaxResponse(res, returned);
});
*/
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});


/* init server */
File.storeShapeList();

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' + 
    app.get('port') + '; press Ctrl-C to terminate.' );
});
