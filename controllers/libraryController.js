const Book = require('../models/bookModel')
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
        const bookFile = req.files.bookFile

        if(!title || !author || !year || !seriaNumber || !count || !category || !bookFile) {
            return res.status(400).json({
                message: "Hamma maydonlar to'ldiririlishi shart"
            })
        }

        if(!req.files) {
            return res.status(400).json({
                message: 'Fayl yuklanmagan'
            })
        }

        if(!bookFile.mimetype.startsWith('application/pdf')){
            return res.status(400).json({
                message: "Faqat *pdf formatdagi fayllarni yuklash kerak"
            })
        }

        if(bookFile.size > process.env.MAX_UPLOAD_FILE_SIZE) {
            return res.status(400).json({
                message: "Fayl hajmi 100mb dan oshmasligi kerak"
            })
        }

        bookFile.name = `file_${new Date().getTime()}${path.parse(bookFile.name).ext}`

        bookFile.mv(`public/uploads/${bookFile.name}`, async (err) => {
            if(err) {
                return res.status(500).json({
                    message: err.message
                })
            }
        })

        const newBook = await Book({
            title,
            author,
            year,
            seriaNumber,
            count,
            category,
            bookFile: `/uploads/${bookFile.name}`
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

const logout = async (req, res) => {
    try {
        
    } catch (err) {
        return res.status(500).json({
            massage: err.message
        })
    }
}

module.exports = {
    getAllBook,
    addBook,
    getBook,
    deleteBook,
    editBook
}