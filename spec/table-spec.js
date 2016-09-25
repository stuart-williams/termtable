const Termtable = require('../')
const Mustache = require('mustache')
const template = require('./data/template')
const model = require('./data/model')
const styles = require('./data/styles')

describe('Termtable', () => {
  let html

  beforeAll(() => {
    html = Mustache.render(template, model)
  })

  it('should ...', () => {
    Termtable.render(html, styles)
  })
})
