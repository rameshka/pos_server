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
        type: 'Number',
        required: true
    },
    quantity: {
        type: 'Number',
        required: 'true',
    },
    cost: {
        type: 'Number',
        required: 'true'
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
        type: 'Number',
        required: true,
        trim: true
    },
    items: [orderItemSchema],
    status: {                //open or closed order
        type: Boolean
    }

});

const Order = mongoose.model('Order', orderSchema); // instance of schema
const OrderItem = mongoose.model('OrderItem', orderItemSchema); // instance of schema

module.exports = {
    Order: Order,
    OrderItem: OrderItem,
};

