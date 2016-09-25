const Table = require('cli-table2')
const cheerio = require('cheerio')
const extractHeaders = require('./extract-headers')
const extractBody = require('./extract-body')
const applyChalkStyles = require('./apply-chalk-styles')

module.exports = (html, styles) => {
  const $ = cheerio.load(html)
  const headers = applyChalkStyles(extractHeaders($, styles))
  const body = applyChalkStyles(extractBody($, styles))

  const table = new Table({
    head: headers
  })

  table.push(...body)

  console.log()
  console.log(table.toString())
}
