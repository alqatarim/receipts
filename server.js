var express = require('express');
var cors = require('cors'); // Import the 'cors' package
var app = express();

// var PORT = process.env.PORT || 5001;


// Define the hostname or domain to listen on


// Enable CORS for all origins and headers
app.use(cors());

// Sample customer receipts data
const receiptDetails = [
  { id: 1, customerName: 'John Doe', amount: 100 },
  { id: 2, customerName: 'Jane Smith', amount: 200 },
  // Add more sample receipts here as needed
];

app.set('port', 8081);
app.set('host', 'ReceiptsLoadBalancer-1009143669.me-south-1.elb.amazonaws.com');


// Start the server
app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('host') + ':' + app.get('port'));
});

// API endpoint to fetch customer receipts
app.get('/api/receipts', (_, res) => {
  res.json(receiptDetails);
});


