var express = require('express');
var app = express();
app.use(express.static('./public'));

// port
server.listen(process.env.PORT || 80, function(){
	console.log('server dang chay....');
});