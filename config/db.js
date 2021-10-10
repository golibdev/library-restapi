const mongoose = require('mongoose')

const connectDB = async () => {
    const uri = process.env.MONGO_URI
    const conn = await mongoose.connect(uri, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log(`MongoDB connect to: ${conn.connection.host}`)
}

module.exports = connectDB