const table = require('../src/table')
const Mustache = require('mustache')
const template = require('./data/template')
const model = require('./data/model')
const styles = require('./data/styles')

describe('', () => {
  let html

  beforeAll(() => {
    html = Mustache.render(template, model)
  })

  it('', () => {
    table(html, styles)
  })
})
