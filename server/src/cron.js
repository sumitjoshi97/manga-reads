import { schedule } from 'node-cron'

import { fetchaAllMangas } from './mangaSources/mangaEden'

const seed = async () => {
  const mangas = await fetchaAllMangas()
  // const mangas = transformMangaEden(res.data.manga)

  await insertMany(mangas)
}

seed()

schedule('0 * * * *', () => {
  console.log('node task running every hour')
})
