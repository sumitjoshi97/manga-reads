const axios = require('axios')
const cron = require('node-cron')

const keys = require('./keys')
const Manga = require('./models/Manga')

cron.schedule('0 * * * *', () => {
  console.log('node task running every hour')
})
