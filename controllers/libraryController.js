const Book = require('../models/bookModel')
const User = require('../models/userModel')
const Order = require('../models/orderModel')
const path = require('path')

// @route       /api/v1/allbook
// @dec         Get all books
// @method      GET
// access       PRIVATE
const getAllBook = async (req, res) => {
    try {
        const books = await Book.find()

        if(!books) {
            return res.status(404).json({
                message: "Kitoblar mavjud emas"
            })
        }

        return res.status(200).json({
            message: "Success",
            books
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

// @route       /api/v1/add
// @dec         Add new book
// @method      POST
// access       PRIVATE
const addBook = async (req, res) => {
    try {
        const { title, author, year, seriaNumber, count, category } = req.body

        if(!title || !author || !year || !seriaNumber || !count || !category) {
            return res.status(400).json({
                message: "Hamma maydonlar to'ldiririlishi shart"
            })
        }

        const newBook = await Book({
            title,
            author,
            year,
            seriaNumber,
            count,
            category
        })

        await newBook.save()

        return res.status(201).json({
            message: "Ma'lumot qo'shildi",
            newBook
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

// @route       /api/v1/book/:id
// @dec         Get One book
// @method      GET
// access       PRIVATE
const getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)

        if(!book) {
            return res.status(404).json({
                message: "Ma'lumot topilmadi"
            })
        }

        return res.status(200).json({
            message: "Success",
            book
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

// @route       /api/v1/delete/:id
// @dec         delete book
// @method      DELETE
// access       PRIVATE
const deleteBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)

        if(!book) {
            return res.status(400).json({
                message: "Xatolik yuz berdi"
            })
        }

        await Book.findByIdAndRemove(req.params.id)

        return res.status(200).json({
            message: "O'chirildi"
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

// @route       /api/v1/edit/:id
// @dec         updated book
// @method      PUT
// access       PRIVATE
const editBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        if(!book) {
            return res.status(404).json({
                message: "Ma'lumot topilmadi"
            })
        }

        
        await Book.findByIdAndUpdate(book._id, req.body)

        return res.status(201).json({
            message: "Malumotlar yangilandi"
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

// @route       /api/v1/users
// @dec         all user
// @method      GET
// access       PRIVATE
const allUser = async (req, res) => {
    try {
        const users = await User.find()

        if(!users) {
            return res.status(400).json({
                message: "Ma'lumot topilmadi"
            })
        } else {
            return res.status(200).json({
                message: "Success",
                users
            })
        }
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

// @route       /api/v1/orders/:id
// @dec         new book order
// @method      POST
// access       PRIVATE
const orderBook = async (req, res) => {
    try {
        const id = req.params.id
        const book = await Book.findById(id)
        if(!book) {
            return res.status(400).json({
                message: "Bunday kitob mavjud emas"
            })
        }

        await Book.findByIdAndUpdate(id, {count: Number(book.count)-1, title: book.title, author: book.author, year: book.year, seriaNumber: book.seriaNumber, category: book.category})

        const newOrder = await Order.create({
            title: book.title,
            author: book.author
        })

        return res.status(201).json({
            message: "Success",
            orders: newOrder
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

// @route       /api/v1/orders/
// @dec         all orders
// @method      GET
// access       PRIVATE
const allOrder = async (req, res)=> {
    try {
        const orders = await Order.find()

        if(!orders) {
            return res.status(400).json({
                message: "Ma'lumot topilmadi"
            })
        }

        return res.status(200).json({
            message: "Success",
            orders
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

module.exports = {
    getAllBook,
    addBook,
    getBook,
    deleteBook,
    editBook,
    allUser,
    orderBook,
    allOrder
}