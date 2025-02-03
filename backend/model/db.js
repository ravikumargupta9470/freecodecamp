const mongoose = require('mongoose');
const dbs = new mongoose.Schema({

    name: {
        type: String,

    }
    ,
    image: {
        type: String
    },
    prices: {
        type: String
    },
    desc: {
        type: String
    }
}, { timestamps: true });
module.exports =mongoose.model('blogss', dbs);