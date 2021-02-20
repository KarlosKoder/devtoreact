
const mongoose = require('mongoose')

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME
} = process.env

const url = `mongodb+srv://KarlVN:8bnUk3B83Jma2NA@cluster0.rszt9.mongodb.net/kodemia`

const connect = mongoose.connect(
  url, 
  { useNewUrlParser: true, useUnifiedTopology: true }
)

module.exports = {
  connect
}