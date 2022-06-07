const express = require('express');
const router = express.Router();

// const BookModel= require("../models/bookModel.js")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("I am testing my new api")
})

router.post("/createBook", BookController.createBook)
router.post("/getBooksInYear", BookController.getBooksInYear)
router.get("/getBookList", BookController.getBookList)
router.get("/getParticularBooks", BookController.getParticularBooks)
router.get("/getXNIRBooks", BookController.getXNIRBooks)
router.get("/getRandomBooks", BookController.getRandomBooks)

module.exports = router;