const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: 'String',
        required: true,
        trim: true,
        unique: true
    },
    price: {
        type: 'String',
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('User', userSchema); // instance of schema