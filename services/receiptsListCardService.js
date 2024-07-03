const Receipt = require('../models/invoiceListModel.js');
const { ObjectId } = require('mongodb');

async function fetchReceiptsListCard() {
    const pipeline = [
        // Perform lookups
        { '$lookup': { 'from': 'customers', 'localField': 'customer_id', 'foreignField': '_id', 'as': 'customer_info' } },
        { '$unwind': { 'path': '$customer_info', 'preserveNullAndEmptyArrays': true } },
        { '$lookup': { 'from': 'stores', 'localField': 'store_id', 'foreignField': '_id', 'as': 'store_info' } },
        { '$unwind': { 'path': '$store_info', 'preserveNullAndEmptyArrays': true } },

        // Project fields and calculate paid and unpaid
        { '$addFields': {
            'paid': { '$sum': '$payments.amount_paid' },
            'unpaid': { '$sum': '$items.total' }
        }},
        
        // Use $facet to run multiple pipelines
        { '$facet': {
            'uniqueClients': [
                { '$group': { '_id': '$customer_id' } },
                { '$count': 'clients_count' }
            ],
            'invoiceCount': [
                { '$group': { '_id': '$invoice_id' } },
                { '$count': 'invoices_count' }
            ],
            'paidCalculation': [
                { '$group': { '_id': null, 'paid': { '$sum': '$paid' } } }
            ],
            'unpaidCalculation': [
                { '$group': { '_id': null, 'unpaid': { '$sum': '$unpaid' } } }
            ]
        }},
  


        // Combine the results into a single object
        { '$project': {
            'results': [
                {  'title': { '$arrayElemAt': ['$uniqueClients.clients_count', 0] },'subtitle': 'Clients','icon': 'ri-user-3-line','textcolor': 'primary'},
                { 'title': { '$arrayElemAt': ['$invoiceCount.invoices_count', 0] },'subtitle': 'Invoices', 'icon': 'ri-pages-line', 'textcolor': 'primary'},
                {  'title': { '$concat': [{ '$toString': { '$arrayElemAt': ['$paidCalculation.paid', 0] } }, ' SAR'] },'subtitle': 'paid','icon': 'mdi:invoice-text-check-outline', 'textcolor': 'success'},
                {  'title': { '$concat': [{ '$toString': { '$arrayElemAt': ['$unpaidCalculation.unpaid', 0] } }, ' SAR'] },'subtitle': 'unpaid', 'icon': 'mdi:invoice-text-clock-outline','textcolor': 'error'},
            ]
        }}
    ];

    try {
        const results = await Receipt.aggregate(pipeline);
        return results.length ? results[0].results : [];
    } catch (err) {
        throw err;
    }
}

module.exports = {
    fetchReceiptsListCard
};
