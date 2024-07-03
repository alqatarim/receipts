const mongoose = require('mongoose');

const uri = "mongodb+srv://alqatarim:Ilovecheesecake%238240@receiptmongodbcluster.omw7pzr.mongodb.net/?retryWrites=true&w=majority&appName=ReceiptMongoDBCluster";
const databaseName = 'Receipts_db';

const connectToDB = async () => {
    try {
        await mongoose.connect(uri)
        console.log('Connected to Mongodb Atlas');} catch (error) {
        console.error(error);
    }
}

module.exports = connectToDB;