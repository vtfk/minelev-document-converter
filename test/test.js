const test = require('ava')
const { readdirSync, writeFileSync } = require('fs')
const { join } = require('path')
const pkg = require('../package.json')
const convert = require('../index')
const documentsPath = join(__dirname, 'documents')
const convertedPath = join(__dirname, 'converted')

test('ava works ok', t => {
  t.true(true)
})

Object.keys(pkg.dependencies || {}).forEach(dependency => {
  test(`${dependency} loads ok`, t => {
    const module = require(dependency)
    t.truthy(module)
  })
})

Object.keys(pkg.devDependencies || {}).forEach(dependency => {
  test(`${dependency} loads ok`, t => {
    const module = require(dependency)
    t.truthy(module)
  })
})

readdirSync(documentsPath, 'utf-8').forEach(file => {
  const filePath = join(documentsPath, file)
  const langs = ['nb', 'nn', 'en']
  langs.forEach(lang => {
    test(`'${filePath}' converts correctly to '${lang}'`, t => {
      const convertedFilePath = join(convertedPath, `${lang}_${file}`)
      const newDocument = require(filePath)
      const oldDocument = convert(newDocument, lang)
      writeFileSync(convertedFilePath, JSON.stringify(oldDocument, null, 2), 'utf8')
      t.truthy(oldDocument)
    })
  })
})
