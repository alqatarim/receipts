import logo from './logo.svg';
import './App.css';
import ReceiptDetails from './ReceiptDetails.js';
function App() {
  return (
    <div>
      <ReceiptDetails />
    </div>
  );
    
};

// import ReceiptDetails from './ReceiptDetails';
// // export default App;
// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [receipts, setReceipts] = useState([]);

//   useEffect(() => {
//     // Fetch customer receipts from the backend when the component mounts
//     fetch('/api/receipts')
//       .then(response => response.json())
//       .then(data => setReceipts(data))
//       .catch(error => console.error('Error fetching receipts:', error));
//   }, []);

//   return (
//     <div>
//       <h1>Customer Receipts</h1>
//       <ul>
//         {receipts.map(receipt => (
//           <li key={receipt.id}>
//             Customer: {receipt.customerName} - Amount: {receipt.amount}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

 export default App;
