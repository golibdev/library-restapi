const { Schema, model } = require('mongoose')

const orderSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['new', 'success'],
        default: 'new'
    }
}, {
    timestamps: true
})

module.exports = model('Order', orderSchema)