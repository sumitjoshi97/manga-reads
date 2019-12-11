const mongoose = require('mongoose')
const { Schema } = mongoose

const mangaSchema = new Schema({
  alias: String,
  title: String,
  categories: [ String ],
  hits: Number,
  image: String,
  lastUpdated: Number,
  status: Number,
})

const Manga = mongoose.model('Manga', mangaSchema)

module.exports = Manga
