module.exports = ($, styles) => {
  const buildElementModel = require('./build-element-model')(styles)
  let body = []
  $('tbody tr').each((i, tr) => body.push($(tr).find('td').map((j, td) => buildElementModel($(td))).get())).get()
  return body
}
