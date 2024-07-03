
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const billingInfoSchema = new mongoose.Schema({
    
    transaction_id: { type: String, required: false },
    country:    { type: String, required: false },
    bank_name: { type: String, required: false },
    account_name: { type: String, required: false },
    iban: { type: String, required: false },
});

const paymentMethodSchema = new mongoose.Schema({

    payment_option:{ type: String, required: false },
        transaction_id: { type: String, required: false },
        bank_name: { type: String, required: false },
        account_name:{ type: String, required: false },
        iban: { type: String, required: false },

});

const invoicePaymentSchema = new mongoose.Schema({
    payment_id : { type: Number, required: false },
    amount_paid : { type: Number, required: false },
    payment_date : { type: String, required: true },
    payment_due_date : { type: String, required: true },
    payment_method: { type: String, required: true },
    payment_method: { type: paymentMethodSchema, required: true },
 
});



const invoiceItemSchema = new mongoose.Schema({
    item_id: { type: String, required: false },
    name: { type: String, required: false },
    description: { type: String, required: false },
    quantity: { type: Number, required: false },
    unit_price: { type: Number, required: false },
    discount_amount: { type: Number, required: false },
    discount_percentage: { type: Number, required: false },
    discount_desc: { type: String, required: false },
    sub_total: { type: Number, required: false },
    vat_amount: { type: Number, required: false },
    total: { type: Number, required: false },
    refund_status: { type: String, required: false },
    refund_status_id: { type: Number, required: false },

});

// Assuming the mongoose connection is already set up elsewhere in your code
const customerSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone_number: { type: String, required: true },
    email: { type: String, required: true },
});

const invoiceSchema = new mongoose.Schema({
    invoice_id: { type: Number, required: true },
    total: { type: Number, required: true },
    invoice_status: { type: String, required: true },
    invoice_issued_date: { type: String, required: true },
    invoice_due_date: { type: String, required: true },
    balance: { type: String, required: true },
    customer_info: { type: customerSchema, required: true },
    items: [invoiceItemSchema],
    total_clients: { type: Number, required: true },
    total_invoices: { type: Number, required: true },
    total_paid: { type: Number, required: true },
    total_unpaid: { type: Number, required: true },
    billing_info: { type: billingInfoSchema, required: false },
    payments: [invoicePaymentSchema],

});

const Receipt = mongoose.model('invoices_list', invoiceSchema, 'invoices_list');


 module.exports = Receipt;
 