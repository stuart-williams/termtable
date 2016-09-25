const Mustache = require('mustache')
const cheerio = require('cheerio')
const template = require('./data/template')
const model = require('./data/model')
const styles = require('./data/styles')
const extractBody = require('../src/extract-body')

describe('Extract Body', () => {
  let $ = null

  beforeAll(() => {
    $ = cheerio.load(Mustache.render(template, model))
  })

  it('should ...', () => {
    expect(extractBody($, styles)).toEqual([
     [ { text: 'Hey', width: 25 }, { text: 'World', width: 25 }, { text: 'Sup?', width: 25 } ],
     [ { text: 'Hey', width: 25 }, { text: 'Again', width: 25 }, { text: 'World', width: 25 } ]
    ])
  })
})
