const { pathOr } = require('ramda')
const Table = require('cli-table2')
const cheerio = require('cheerio')
const extractHeaders = require('./extract-headers')
const extractBody = require('./extract-body')
const applyChalkStyles = require('./apply-chalk-styles')

module.exports = {
  render: (html, styles) => {
    const $ = cheerio.load(html)
    const headers = applyChalkStyles(extractHeaders($, styles))
    const body = applyChalkStyles(extractBody($, styles))

    const table = new Table({
      head: headers,
      style: {
        head: [],
        border: [ pathOr(undefined, ['table', 'borderColor'], styles) ],
        'padding-left': pathOr(2, ['table', 'paddingLeft'], styles),
        'padding-right': pathOr(2, ['table', 'paddingRight'], styles)
      },
      colWidths: [] // TODO
    })

    table.push(...body)

    console.log()
    console.log(table.toString())
  }
}
