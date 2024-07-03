const mongoose = require('mongoose');
mongoose.set('strictQuery', true);



const invoiceListCardSchema = new mongoose.Schema({
  
    count_clients: { type: Number, required: true },
    count_invoices: { type: Number, required: true },
    total_paid: { type: Number, required: true },
    total_unpaid: { type: Number, required: true },


},{ strict: true });

const Receipt = mongoose.model('Receipt', invoiceListCardSchema);


 module.exports = Receipt;
 