const Receipt = require('../models/invoiceListModel.js');

async function fetchReceiptsList() {
   


    try {
        // Directly querying the view that includes the aggregation pipeline logic
        const results = await Receipt.find({ });
        return results.map(result => result.toObject());
    } catch (err) {
        throw err;
    }

}

module.exports = {
    fetchReceiptsList
};
