import express from 'express';
import cors from 'cors';

// var PORT = process.env.PORT || 5001;
var PORT = 8081;

// Define the hostname or domain to listen on

const HOSTNAME = 'ReceiptsLoadBalancer-1009143669.me-south-1.elb.amazonaws.com';


// Enable CORS for all origins and headers
app.use(cors());

// Sample customer receipts data
const receiptDetails = [
  { id: 1, customerName: 'John Doe', amount: 100 },
  { id: 2, customerName: 'Jane Smith', amount: 200 },
  // Add more sample receipts here as needed
];


app.set('port', process.env.PORT || 8081);
app.set('host', process.env.HOST || 'ReceiptsLoadBalancer-1009143669.me-south-1.elb.amazonaws.com');



// Start the server
app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('host') + ':' + app.get('port'));
});




// API endpoint to fetch customer receipts
app.get('/api/receipts', (_, res) => {

 // try {
    // fetch data
    res.json(receiptDetails);
 // } catch (err) {
 //   res.status(500).send(err)
 // }
  
});

