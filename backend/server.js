const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
 app.use(bodyParser.urlencoded({extended: true}));
  MongoClient.connect( "mongodb+srv://hollywoodchase:bigNsmall517!@cluster0.xnreyj9.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true }, (err, database) => 
  {
     if (err) return console.log(err);
     require('./app/routes')(app, database);
      app.listen(port, () => {
           console.log("We are live on " +port);
  });
 });