const mongoose = require('mongoose');
mongoose.set('strictQuery', true);


//  Customer Schema
const customerSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone_number: { type: String, required: true },
    email: { type: String, required: true },
});
  

//  Store Schema
const storeSchema = new mongoose.Schema({
    store_id: { type: Number, required: true },
    store_name: { type: String, required: true },
    store_phone_number: { type: String, required: true },
    store_email: { type: String, required: true },
    store_city: { type: String, required: true },
    store_district: { type: String, required: true },
    store_cr_number: { type: Number, required: true },
    store_vat_number: { type: Number, required: true },
    store_google_maps_url: { type: String, required: false},
 


});


// Define the schema for customer note object
const noteSchema = new mongoose.Schema({

    note: { type: String, required: false},
    note_date: { type: String, required: false},

});

// Define the schema for individual receipt items
const itemSchema = new mongoose.Schema({
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

//  Receipt Schema (with nested customer schema and nested Store schema)
const invoiceDetailsSchema = new mongoose.Schema({

  
    // INVOICE info
    invoice_id: { type: Number, required: true },
    invoice_status: { type: String, required: true },
    invoice_issued_date: { type: String, required: true },
    invoice_due_date: { type: String, required: true },
    balance: { type: String, required: true },
    items: [itemSchema],
    invoice_customer_notes: [noteSchema],

    // ITEMS calculated totals, subs, vats, discounts...
    calc_sub_total: { type: Number, required: true },
    calc_discount_total: { type: Number, required: true },
    calc_vat_total: { type: Number, required: true },
    calc_grand_total: { type: Number, required: true },

    // ITEMS fixed totals, subs, vats, discounts...
    sub_total: { type: Number, required: true },
    discount: { type: Number, required: true },
    vat: { type: Number, required: true },
    total: { type: Number, required: true },


   // STORE and CUSTOMER inf (nested Schema Objects)
    store_info: { type: storeSchema, required: true },
    customer_info: { type: customerSchema, required: true },

    billing_info: {
        bank_name: { type: String, required: true },
        payment_option: { type: String, required: false },
        account_name: { type: String, required: false },
         country: { type: String, required: false },
        iban: { type: String, required: false },
    }

});


const ReceiptDetail = mongoose.model('invoice_details', invoiceDetailsSchema);

 module.exports = ReceiptDetail;
 