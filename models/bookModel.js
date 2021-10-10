const { Schema, model } = require('mongoose')

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    seriaNumber: {
        type: String,
        required: true
    },
    count: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    bookFile: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('Book', bookSchema)