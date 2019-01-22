const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderItemSchema = new Schema({
    name: {
        type: 'String',
        required: true,
        trim: true,
        unique: true
    },
    price: {
        type: 'Decimal128',
        required: true,
        trim: true
    },
    quantity:{
        type:'Number',
        required:'true',
    }
});

const orderSchema = new Schema({
    orderID: {
        type: 'String',
        required: true,
        trim: true,
        unique: true
    },
    cost: {
        type: 'Decimal128',
        required: true,
        trim: true
    },
    items:[orderItemSchema],
    status:{                //open or closed order
        type:Boolean
    }

});

module.exports = mongoose.model('Order', orderSchema ); // instance of schema
module.exports = mongoose.model('OrderItem', orderItemSchema ); // instance of schema