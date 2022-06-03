const express = require('express');
const logger = require('../logger/logger')
const helper = require('../util/helper')
const formatter = require('../validator/formatter')


const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api! Hello Tanweer')
    logger.zaya()  
    helper.date()
    helper.month()
    helper.batchinfo() 
    formatter.string()
    formatter.lowerCase()
    formatter.upperCase() 


});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason