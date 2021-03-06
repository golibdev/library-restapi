const { Router } = require('express')
const router = Router()
const {
    getAllBook,
    addBook,
    getBook,
    deleteBook,
    editBook,
    allUser,
    orderBook,
    allOrder
} = require('../controllers/libraryController')

router.get('/books', getAllBook)
router.get('/users', allUser)
router.post('/orders/:id', orderBook)
router.get('/orders', allOrder)
router.post('/add', addBook)
router.get('/book/:id', getBook)
router.delete('/delete/:id', deleteBook)
router.put('/edit/:id', editBook)

module.exports = router