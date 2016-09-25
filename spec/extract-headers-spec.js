const Mustache = require('mustache')
const cheerio = require('cheerio')
const template = require('./data/template')
const model = require('./data/model')
const styles = require('./data/styles')
const extractHeaders = require('../src/extract-headers')

xdescribe('Extract Headers', () => {
  let $ = null

  beforeAll(() => {
    $ = cheerio.load(Mustache.render(template, model))
  })

  it('should ...', () => {
    expect(extractHeaders($, styles)).toEqual([{
      content: 'Foo'
    }, {
      content: 'Bar'
    }, {
      content: 'Baz'
    }])
  })
})
