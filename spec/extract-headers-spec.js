const Mustache = require('mustache')
const cheerio = require('cheerio')
const template = require('./data/template')
const model = require('./data/model')
const styles = require('./data/styles')
const extractHeaders = require('../src/extract-headers')

describe('Extract Headers', () => {
  let $ = null

  beforeAll(() => {
    $ = cheerio.load(Mustache.render(template, model))
  })

  it('should ...', () => {
    expect(extractHeaders($, styles)).toEqual([{
      text: 'Foo',
      width: 25,
      border: true,
      align: 'right'
    }, {
      text: 'Bar',
      width: 25,
      border: true
    }, {
      text: 'Baz',
      width: 25,
      border: true
    }])
  })
})
