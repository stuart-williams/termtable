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

  it('should extract the headers as expected', () => {
    expect(extractHeaders($, styles)).toEqual([{
      content: 'Name', color: 'white', fontWeight: 'bold'
    }, {
      content: 'Passed', color: 'white', fontWeight: 'bold'
    }, {
      content: 'Failed', color: 'white', fontWeight: 'bold'
    }, {
      content: 'Total', color: 'white', fontWeight: 'bold'
    }])
  })
})
