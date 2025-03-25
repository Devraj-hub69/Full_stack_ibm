// index.js file h
const express = require('express');
const router = express.Router();

// delivery page
router.get('/delivery', (req, res) =>{
    res.render('delivery');
});

// customer page
router.get('/customer', (req, res) => {
    res.render('customer');
});

module.exports = router;
