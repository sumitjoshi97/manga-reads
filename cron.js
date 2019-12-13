const axios = require('axios')
const cron = require('node-cron')

const keys = require('./keys')
const Manga = require('./models/Manga')

const axiosManga = axios.create({
  baseURL: keys.MANGA_EDEN_URL,
})

const transformMangaEden = manga =>
  manga
    .filter(manga => manga.ld)
    .map(
      ({
        a: alias,
        c: categories,
        h: hits,
        i: _id,
        im: image,
        ld: lastUpdated,
        s: status,
        t: title,
      }) => ({
        _id,
        alias,
        categories,
        hits,
        image,
        lastUpdated,
        status,
        title,
      })
    )

const seed = async () => {
  const res = await axiosManga.get()
  const mangas = transformMangaEden(res.data.manga)

  await Manga.insertMany(mangas)
}

seed()

cron.schedule('0 * * * *', () => {
  console.log('node task running every hour')
})
