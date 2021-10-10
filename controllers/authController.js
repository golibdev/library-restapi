const User = require('../models/userModel')

// @route       /api/v1/auth/register
// @method      POST
// @dec         register user
// @access      Private

const registerUser = async (req, res) => {
    try {
        const { email, username, firstName, lastName, birthday, group, password, phoneNumber } = req.body

        if(!email || !username || !group || !lastName || !birthday || !firstName || !password || !phoneNumber) {
            return res.status(400).json({
                message: "Hamma maydonlar to'ldirilishi shart"
            })
        }

        const user = await User.create({
            email,
            username,
            firstName,
            lastName,
            birthday,
            group,
            password,
            phoneNumber
        })

        const token = user.getSignedJwtToken()

        return res.status(201).json({
            massage: 'Success',
            user,
            token
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

// @route       /api/v1/auth/login
// @method      POST
// @dec         login user
// @access      Public

const loginUser = async (req, res) => {
    try {
        const { username, password  } = req.body

        if(!username || !password) {
            return res.status(400).json({
                message: "Hamma maydonlar to'ldirilishi shart"
            })
        }

        const user = await User.findOne({ username })

        if(!user) {
            return res.status(400).json({
                message: "Ma'lumotlar mos kelmadi"
            })
        }

        const isMatch = await user.matchPassword(password)

        if(!isMatch) {
            return res.status(401).json({
                message: "Ma'lumotlar to'gri kelmadi"
            })
        }

        const token = user.getSignedJwtToken()
        return res.status(201).json({
            massage: 'Success',
            user,
            token
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

module.exports = {
    registerUser,
    loginUser
}