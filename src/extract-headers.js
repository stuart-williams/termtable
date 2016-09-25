module.exports = ($, styles) => {
  const buildElementModel = require('./build-element-model')(styles)
  return $('th').map((i, el) => buildElementModel($(el))).get()
}
