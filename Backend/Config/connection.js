const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Database connected at host: ${mongoose.connection.host}`)
};


module.exports = connectDB;