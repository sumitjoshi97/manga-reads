const Manga = require('../../../models/Manga')

const mangaResolver = (context, args) => {
  return Manga.findById(args.id)
}

export default mangaResolver
