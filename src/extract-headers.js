const { mergeAll, propOr } = require('ramda')
const thStyles = propOr({}, 'th')

module.exports = ($, styles) => $('th').map((i, el) => {
  const $el = $(el)
  const classes = ($el.attr('class') || '').split(' ')
  const classStyles = classes.map((className) => styles[`.${className}`] || {})

  return mergeAll([{ text: $el.text() }, thStyles(styles), ...classStyles])
}).get()
