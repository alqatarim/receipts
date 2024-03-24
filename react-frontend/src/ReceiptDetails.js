import React, { useState, useEffect } from 'react';

const ReceiptDetails = () => {
  var responseClone;
  const [receipts, setReceipts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch('http://localhost:5001/api/receipts')
    .then(function (response) {
      responseClone = response.clone(); // 2
      return response.json();
    })
      .then(data => {
        console.log(data); 
        setReceipts(data);
      })
      .catch(error => {
        console.error('Error fetching receipts', error, responseClone);
      })
      .finally(() => {
        setLoading(false);  
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <p>Loading...</p>
      </div>
    );
  }

  
  return (
    <div>
      <h1>Customer Receipts</h1>
      <ul>
        {receipts.map(receipt => (
          <li key={receipt.id}>
            Customer: {receipt.customerName} - Amount: {receipt.amount}  
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReceiptDetails;