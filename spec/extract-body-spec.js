const Mustache = require('mustache')
const cheerio = require('cheerio')
const template = require('./data/template')
const model = require('./data/model')
const styles = require('./data/styles')
const extractBody = require('../src/extract-body')

xdescribe('Extract Body', () => {
  let $ = null

  beforeAll(() => {
    $ = cheerio.load(Mustache.render(template, model))
  })

  it('should extract the body as expected', () => {
    expect(extractBody($, styles)).toEqual([
     [ { content: 'Hey', color: 'green' }, { content: 'World', color: 'yellow' }, { content: 'Sup?', color: 'red' } ],
     [ { content: 'Hey', color: 'green' }, { content: 'Again', color: 'yellow' }, { content: 'World', color: 'red' } ]
    ])
  })
})
