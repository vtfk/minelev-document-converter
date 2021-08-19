const { logger } = require('@vtfk/logger')
const convertToOldDocument = require('./convert-to-old-document')

module.exports = (data, language) => {
  const documentType = data.type === 'samtale' ? data.type : `${data.type}-${data.variant}`
  let oldDocumentTemplate = convertToOldDocument(data)
  logger('info', ['convert-document', documentType, 'converted'])
  if (data.type !== 'notat') {
    oldDocumentTemplate = { ...oldDocumentTemplate, ...require(`./document-types/convert-content-${documentType}`)(data, language) }
    logger('info', ['convert-document', documentType, 'add type specific properties', 'finish'])
  }
  logger('info', ['convert-document', data.type, 'finish'])
  return oldDocumentTemplate
}
