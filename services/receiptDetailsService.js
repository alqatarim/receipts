const ReceiptDetails = require('../models/receiptDetailsModel.js');

async function fetchReceiptDetails(receiptId) {
    try {
        // Directly querying the view that includes the aggregation pipeline logic
        const results = await ReceiptDetails.find({ invoice_id: Number(receiptId) });
        return results.map(result => result.toObject());
    } catch (err) {
        throw err;
    }
}

module.exports = {
    fetchReceiptDetails
};
