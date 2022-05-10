const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + "/views"));

app.set("port", 3000);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });

  app.use("/public", express.static('./public/'));

app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));

});


app.listen(app.get('port'), () => {

    console.log("Server on port",app.get('port'));
});