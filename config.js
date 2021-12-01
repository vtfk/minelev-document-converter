if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

module.exports = {
  PAPERTRAIL_HOST: process.env.PAPERTRAIL_HOST || undefined,
  PAPERTRAIL_TOKEN: process.env.PAPERTRAIL_TOKEN || undefined
}
