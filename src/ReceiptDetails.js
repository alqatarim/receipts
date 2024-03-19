import React, { useState, useEffect } from 'react';

const ReceiptDetails = () => {

  const [receipts, setReceipts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch('/api/receipts')
      .then(response => response.json()) 
      .then(data => {
        setReceipts(data);
      })
      .catch(error => {
        console.error('Error fetching receipts', error);
      })
      .finally(() => {
        setLoading(false);  
      });

  }, []); // Remove 'receipts' from the dependency array

  if (loading) return <p>Loading...</p>;

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
