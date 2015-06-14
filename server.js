var express     = require("express");
var app         = express();
var http        = require("http").Server(app);

// Static Routes - assets, templates etc...
// app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/assets', express.static(__dirname + '/public/assets'));
// app.use('/data', express.static(__dirname + '/public/data/'));
// app.use('/templates', express.static(__dirname + '/public/templates/'));
// app.use('/posts', express.static(__dirname + '/posts/output'));

// Body Parser
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Routes
app.get("/", function (res, req) {
    req.sendFile(__dirname + "/index.html");
});

// Listen on port 3000
http.listen(3000, function () {
    console.log("listening on *:3000");
});