const express = require('express')
const path = require('path')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

const app = express()

// env variables initialize
dotenv.config()

// Middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// initialize static folder
app.use(express.static(path.join(__dirname, 'public')))
app.use(fileUpload())

// Registrate routes
app.use('/api/v1/', require('./routes/libraryRoutes'))
app.use('/api/v1/auth', require('./routes/authRoutes'))

const port = process.env.PORT || 4000

connectDB()

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})