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

  it('should ...', () => {
    expect(extractBody($, styles)).toEqual([
     [ { content: 'Hey' }, { content: 'World' }, { content: 'Sup?' } ],
     [ { content: 'Hey' }, { content: 'Again' }, { content: 'World' } ]
    ])
  })
})
