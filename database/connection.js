const mongoose = require('mongoose');
require('dotenv').config();

const connect = async() => {
    mongoose.set('strictQuery', true);
    const db = mongoose.connect(process.env.DB_URI);
    return db;
}

module.exports = connect;