const getContentValues = require('../get-content-values')

module.exports = (data, language) => {
  return {
    period: data.content.period[language],
    orderCategories: getContentValues(data.content.reasons, language)
  }
}
