const mongoose = require('mongoose');
mongoose.set('strictQuery', true);



const itemsSchema = new mongoose.Schema({
    name: { type: String, required: false },
    description: { type: String, required: false },
    unit_sub_total: { type: Number, required: false },
});

const creditCardSchema = new mongoose.Schema({
    bank_name: { type: String, required: false },
    account_name: { type: String, required: false },
    country: { type: String, required: false },
    iban: { type: String, required: false },
});

const debitCardSchema = new mongoose.Schema({
    bank_name: { type: String, required: false },
    account_name: { type: String, required: false },
    country: { type: String, required: false },
    iban: { type: String, required: false },
});

const wireTransferSchema = new mongoose.Schema({
    bank_name: { type: String, required: false },
    account_name: { type: String, required: false },
    country: { type: String, required: false },
    iban: { type: String, required: false },
});

const cashSchema = new mongoose.Schema({});

const paymentOptionSchema = new mongoose.Schema({
    credit_card: { type: [creditCardSchema], required: false },
    debit_card: { type: [debitCardSchema], required: false },
    wire_transfer: { type: [wireTransferSchema], required: false },
    cash: { type: [cashSchema], required: false },
});

const customerSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone_number: { type: String, required: true },
    email: { type: String, required: true },
});

const storeSchema = new mongoose.Schema({
    store_id: { type: Number, required: true },
    store_name: { type: String, required: true },
    store_phone_number: { type: String, required: true },
    store_email: { type: String, required: true },
    store_country: { type: String, required: true },
    store_region: { type: String, required: true },
    store_city: { type: String, required: true },
    store_district: { type: String, required: true },
    store_vat_number: { type: String, required: true },
    store_cr_number: { type: String, required: true },
    store_google_maps_url: { type: String, required: false },
    salesperson_name: { type: String, required: false },
    payment_options: { type: paymentOptionSchema, required: false },
    customer_info: { type: [customerSchema], required: false },
    items: { type: [itemsSchema], required: false },
});

const ReceiptDraft = mongoose.model('invoice_draft', storeSchema, 'invoice_draft');

module.exports = ReceiptDraft;
