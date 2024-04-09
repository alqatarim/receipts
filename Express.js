import express from 'express';
import cors from 'cors';

// var PORT = process.env.PORT || 5001;
var PORT = 80;

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

 // try {
    // fetch data
    res.json(receiptDetails);
 // } catch (err) {
 //   res.status(500).send(err)
 // }
  
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// hiiiiii