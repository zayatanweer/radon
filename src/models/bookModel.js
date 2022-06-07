const mongoose = require('mongoose');

const bookModel = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    prices:{
        IndianPrice: String,
        EurpeonPrice: String,
    },
    year:{type: Number, default:2021},
    tags:{totalpages: Number,
        stockAvailable: Boolean
    },
    
}, { timestamps: true });


module.exports = mongoose.model('bookModel', bookModel) 