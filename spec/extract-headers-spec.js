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

  it('should extract the headers as expected', () => {
    expect(extractHeaders($, styles)).toEqual([{
      content: 'Foo',
      color: 'white',
      fontWeight: 'bold'
    }, {
      content: 'Bar',
      color: 'white',
      fontWeight: 'bold'
    }, {
      content: 'Baz',
      color: 'white',
      fontWeight: 'bold'
    }])
  })
})
