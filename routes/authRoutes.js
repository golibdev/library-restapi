const { Router } = require('express')
const router = Router()
const {
    loginUser,
    registerUser
} = require('../controllers/authController')

router.post('/register', registerUser)
router.post('/login', loginUser)

module.exports = router