const Manga = {
  id: mangaObj => mangaObj._id,
  lastUpdated: mangaObj => new Date(mangaObj.lastUpdated * 1000),
}

module.exports = Manga
