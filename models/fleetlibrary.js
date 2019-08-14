const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const fleetlibrary = new mongoose.Schema({
    EQID: {
        type: String,
        trim: true,
        required: 'Please enter your first name!'
    },
    YEAR: {
        type: Date,
        trim: true,
        required: 'Please enter a lastname'
    },
    MAKE: {
        type: String,
        trim: true,
        required: 'Please enter an email'
    },
    MODEL: {
        type: String,
        trim: true,
        required: 'Please enter a phone number'
    },
    DESCRIPTION: {
        type: String,
        trim: true,
        required: 'Please enter an auth0 id'
    },
    SERIALNO: {
        type: String,
        trim: true,
        required: 'Please enter an auth0 id'
    },
    LICENSENO: {
        type: String,
        trim: true,
        required: 'Please enter an auth0 id'
    },
    REGEXP: {
        type: String,
        trim: true,
        required: 'Please enter an auth0 id'
    },
    EIN: {
        type: String,
        trim: true,
        required: 'Please enter an auth0 id'
    },
    VENDOR: {
        type: String,
        trim: true,
        required: 'Please enter an auth0 id'
    }

 
});
module.exports = mongoose.model('fleetlibrary', fleetlibrary);

