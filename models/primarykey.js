const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const primarykey = new mongoose.Schema({
    CLASS: {
        type: String,
        trim: true,
        required: 'Please enter your first name!'
    },        
    CLASSSUBCLASS: {
        type: String,
        trim: true,
        required: 'Please enter your first name!'
    },
    EQID: {
        type: String,
        trim: true,
        required: 'Please enter your first name!'
    },
    STATUS: {
        type: String,
        trim: true,
        required: 'RENTED,OWNED,LEASED'
    },
    TYPE: {
        type: String,
        trim: true,
        required: 'BARE,OPERATED'
    }
});
module.exports = mongoose.model('primarykey', primarykey);