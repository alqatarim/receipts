const ReceiptDraft = require('../models/receiptDraftModel.js');


async function fetchReceiptDraft(storeId) {
    try {
        // Directly querying the view that includes the aggregation pipeline logic
        const results = await ReceiptDraft.find({ store_id: Number(storeId) });
        return results.map(result => result.toObject());
    } catch (err) {
        throw err;
    }
}

module.exports = {
    fetchReceiptDraft
};
