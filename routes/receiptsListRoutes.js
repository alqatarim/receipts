const express = require('express');
const router = express.Router();
const receiptsListService = require('../services/receiptsListService.js');
const receiptsListCardService = require('../services/receiptsListCardService.js');
const receiptDetailsService = require('../services/receiptDetailsService.js');
const receiptDraftService = require('../services/receiptDraftService.js');

// Get invoices list
router.get('/receipt/list', async (_, res) => {
    try {
    //const receiptsList = await Receiptmodel.find();
        const receiptsList = await receiptsListService.fetchReceiptsList();

        //return res.json({receiptsList});
        res.send(receiptsList);
        //console.log({receiptsList});
        
    } catch (error) {
        console.error(error);
        return res.status(400).json({message: error});
        // res.status(500).send(error);
    }
});


// Get invoices list card
router.get('/receipt/listcard', async (_, res) => {
    try {
  
        const receiptsListCard = await receiptsListCardService.fetchReceiptsListCard();

        //return res.json({receiptsList});
        res.send(receiptsListCard);
        //console.log({receiptsList});
        
    } catch (error) {
        console.error(error);
        return res.status(400).json({message: error});
        // res.status(500).send(error);
    }
});


// Get receipt details
router.get('/receipt/details/:id', async (req, res) => {

    const receiptId = req.params.id;
  

    try {
        
        const receiptDetails = await receiptDetailsService.fetchReceiptDetails(receiptId);  // Pass ID to service

        console.log('Response: ');
    //console.log(receiptDetails);
   
        res.send(receiptDetails);
        //console.log({receiptsList});
        
    } catch (error) {
        console.error(error);
        return res.status(400).json({message: "Failed to retrieve receipt details: " + error.message});
    
    }
});

// Get "Create invoice" form draft fields
router.get('/receipt/draft/:id', async (req, res) => {

    const companyId = req.params.id;
  

    try {
        
        const receiptDraft = await receiptDraftService.fetchReceiptDraft(companyId);  // Pass ID to service

        res.send(receiptDraft);

        
    } catch (error) {
        console.error(error);
        return res.status(400).json({message: "Failed to retrieve receipt details: " + error.message});
    
    }
});


module.exports = router