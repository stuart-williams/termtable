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

  it('should extract the body as expected', () => {
    expect(extractBody($, styles)).toEqual([
      [
        {'content': 'Foo', 'hAlign': 'right'},
        {'content': '2', 'hAlign': 'center', 'color': 'green'},
        {'content': '1', 'hAlign': 'center', 'color': 'red'},
        {'content': '3', 'hAlign': 'center', 'color': 'cyan'}
      ],
      [
        {'content': 'Bar', 'hAlign': 'right'},
        {'content': '1', 'hAlign': 'center', 'color': 'green'},
        {'content': '0', 'hAlign': 'center', 'color': 'gray'},
        {'content': '1', 'hAlign': 'center', 'color': 'cyan'}
      ],
      [
        {'content': 'Baz', 'hAlign': 'right'},
        {'content': '0', 'hAlign': 'center', 'color': 'gray'},
        {'content': '2', 'hAlign': 'center', 'color': 'red'},
        {'content': '2', 'hAlign': 'center', 'color': 'cyan'}
      ]])
  })
})
