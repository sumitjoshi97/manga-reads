const Manga = require('../../../models/Manga')

const mangasResolver = () => {
  return Manga.find({}).sort({ lastUpdated: -1 })
}

module.exports = mangasResolver
