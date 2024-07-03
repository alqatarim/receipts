const express = require('express');
const app = express();
var cors = require('cors');
const { connectToDb } = require('./db/mongoDBconnection.js');
const mongoose = require('mongoose');
const Router = require('./db/routes/receiptsListRouter.js');

mongoose.set('strictQuery', false);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




  

  // Inserting a document
  //const doc = await collection.insertOne(data);
  //console.log("Inserted document with _id:", doc.insertedId);

  app.set('port', 8081);
  // app.set('host', 'ReceiptsLoadBalancer-1009143669.me-south-1.elb.amazonaws.com');
  app.set('host', 'localhost');

  // Start the server
  app.listen(app.get('port'), function(){
    console.log('Server server listening on port ' + app.get('host') + ':' + app.get('port'));
  });

  // API endpoint to fetch customer receipts
  app.get('/api/receipts', (_, response) => {
    connectToDb(async (db) => {
     const receiptDetails = await db.collection('Receipts_List').find({ customer_id: { $gte: 1, $lte: 10 } }).toArray(); 
    
    if (receiptDetails) {
      return response.status(200).json(receiptDetails);
    }

    //return express.response.status(404).json({ message: 'No receipts found' });
    log('No receipts found');
  }, response);
  });


