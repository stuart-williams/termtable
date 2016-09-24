const cliui = require('cliui')
const cheerio = require('cheerio')
const extractHeaders = require('./extract-headers')

module.exports = (html, styles) => {
  const ui = cliui(styles.table || {})
  const $ = cheerio.load(html)
  const headers = extractHeaders($, styles)

  ui.div(...headers)

  console.log()
  console.log(ui.toString())
}
