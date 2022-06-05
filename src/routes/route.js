const express = require('express');
const logger = require('../logger/logger')
const helper = require('../util/helper')
const formatter = require('../validator/formatter')

// const underscore = require('underscore')
const lodash = require('lodash')
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('I am Testing My First ever Api')
    logger.zaya()  
    helper.date()
    helper.month()
    helper.batchinfo() 
    formatter.string()
    formatter.lowerCase()
    formatter.upperCase() 
})
router.get('/hello', function (req, res) {
    res.send('I Am Testing Hello Api!') 
    
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let subArrays = lodash.chunk(months, 3)
    console.log('Chunks of months: ', subArrays)
    
    let oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    let lastNumbers = lodash.tail(oddNumbers)
    console.log('Last 9 odd numbers: ',lastNumbers)

    let arr1 = [1, 5, 7]
    let arr2 = [3, 8, 6]
    let arr3 = [7, 2, 1]
    let arr4 = [5, 4, 8]
    console.log('Merged array with unique values: ',lodash.union(arr1, arr2, arr3, arr4,))

    let movie1 = ['horror', 'The House Next Door']
    let movie2 = ['drama','3 Idiots']
    let movie3 = ['thriller','Saw']
    let movie4 = ['fantasy','Zumanji']
    let movieObject = lodash.fromPairs([movie1, movie2, movie3, movie4])
    console.log('Movies object: ', movieObject)
            
})
    
    module.exports = router;
