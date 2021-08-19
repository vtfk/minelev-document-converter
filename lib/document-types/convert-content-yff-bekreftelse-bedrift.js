module.exports = (data) => {
  return {
    documentCategory: `yff-${data.variant}`,
    bedriftsData: data.content.bekreftelse.bedriftsData
  }
}
