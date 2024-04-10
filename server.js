var express = require('express');
var cors = require('cors'); // Import the 'cors' package
var app = express();

// var PORT = process.env.PORT || 5001;
var PORT = 8081;

// Define the hostname or domain to listen on
const HOSTNAME = 'receiptsloadbalancer-1009143669.me-south-1.elb.amazonaws.com';

// Enable CORS for all origins and headers
app.use(cors());

// Sample customer receipts data
const receiptDetails = [
  { id: 1, customerName: 'John Doe', amount: 100 },
  { id: 2, customerName: 'Jane Smith', amount: 200 },
  // Add more sample receipts here as needed
];

// API endpoint to fetch customer receipts
app.get('/api/receipts', (_, res) => {
  res.json(receiptDetails);
});

// Start the server
app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});
