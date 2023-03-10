express = require('express');
app = express();
port = 8081;

app.get('/', function(req, res){
  res.send("Bem Vindo");
});



app.listen(port, function(){
  console.log("listening on " + port);
});