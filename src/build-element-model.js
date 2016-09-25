const { mergeAll, compose, split, map, propOr, __ } = require('ramda')

module.exports = (styles) => ($el) => {
  const elStyles = styles[$el[0].name] || {}
  const classStyles = compose(map(propOr({}, __, styles)), split(' '))($el.attr('class') || '')

  return mergeAll([{ text: $el.text() }, elStyles, ...classStyles])
}
