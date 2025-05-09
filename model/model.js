const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    name: {
        type : String,
    },
    date: {
        type : Date,
    },
    number: {
        type : Number,
    }
});

module.exports = mongoose.model('users', dataSchema);