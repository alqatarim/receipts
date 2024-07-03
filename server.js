const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
var cors = require('cors');
const { connectToDb } = require('./db/mongooseConnection.js');

const receiptsListRoutes = require('./routes/receiptsListRoutes.js');
const uri = "mongodb+srv://alqatarim:Ilovecheesecake%238240@receiptmongodbcluster.omw7pzr.mongodb.net/Receipts_db?retryWrites=true&w=majority&appName=ReceiptMongoDBCluster";

app.use(cors());

//app.use(express.urlencoded({ extended: true }));


 app.use(express.json());
 app.use('/api', receiptsListRoutes);

 app.set('port', 8081);
 // app.set('host', 'ReceiptsLoadBalancer-1009143669.me-south-1.elb.amazonaws.com');
 app.set('host', 'localhost');

 // Start the server
 app.listen(app.get('port'), function(){
   console.log('Server server listening on port ' + app.get('host') + ':' + app.get('port'));
 
   mongoose
   .connect(uri, { useNewUrlParser: true })
   .then(() => {

       console.log("Conneced to MongoDB Atlas!")
   
   })
 
 
  });


  