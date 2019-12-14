const Manga = require('../../../models/Manga')

const mangasResolver = () => {
  return Manga.find({})
}

console.log(mangasResolver())

module.exports = mangasResolver
