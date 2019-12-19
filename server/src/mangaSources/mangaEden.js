import axios from 'axios'
const keys = require('../keys')

export const axiosInstance = axios.create({
  baseURL: keys.MANGA_EDEN_URL,
})

const transformChapters = chapters =>
  chapters.map(([ number, lastUpdated, title, id ]) => ({
    id,
    lastUpdated,
    number,
    title,
  }))

const transformMangas = manga =>
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

export const fetchaAllMangas = () =>
  axiosInstance.get('/list/0').then(res => {
    res.data.manga = transformMangas(res.data.manga)
    return res.data.manga
  })

export const fetchMangaInfo = ({ mangaId }) => {
  return axiosInstance.get(`/manga/${mangaId}`).then(res => {
    res.data.chapters = transformChapters(res.data.chapters)
    return res
  })
}
