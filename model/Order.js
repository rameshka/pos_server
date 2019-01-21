const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    orderID: {
        type: 'String',
        required: true,
        trim: true,
        unique: true
    },
    cost: {
        type: 'String',
        required: true,
        trim: true
    },

});

module.exports = mongoose.model('User', userSchema); // instance of schema