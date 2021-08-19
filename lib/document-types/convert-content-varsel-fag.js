const getSchools = require('vtfk-schools-info')
const { logger } = require('@vtfk/logger')
const getContentValues = require('../get-content-values')

module.exports = (data, language) => {
  const coursesList = data.content.classes.map(item => {
    let school = getSchools({ schoolId: item.schoolId })
    if (school.length === 0) {
      logger('error', ['convert-content-varsel-fag', 'school not found', item.schoolId])
      school = item.schoolId
    } else if (school.length === 1) school = school[0].shortName
    else {
      logger('warn', ['convert-content-varsel-fag', 'multiple schools found', school.map(s => s.shortName), 'using first one'])
      school = school[0].shortName
    }
    return `${school}:${item.name} - ${item[language]}`
  })

  return {
    period: data.content.period[language],
    gradesCategories: getContentValues(data.content.reasons, language),
    coursesList: coursesList.join('\n')
  }
}
