const { Router } = require('express')
const router = Router()
const {
    getAllBook,
    addBook,
    getBook,
    deleteBook,
    editBook
} = require('../controllers/libraryController')

router.get('/books', getAllBook)
router.post('/add', addBook)
router.get('/book/:id', getBook)
router.delete('/delete/:id', deleteBook)
router.put('/edit/:id', editBook)

module.exports = router