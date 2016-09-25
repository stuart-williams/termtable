const { mergeAll, compose, split, map, propOr, __, keys, reduce } = require('ramda')
const camelCase = require('lodash.camelcase')

const apiMap = {
  textAlign: 'hAlign',
  verticalAlign: 'vAlign'
}

const applyAPIMap = (data) => reduce((o, k) => {
  const camelizedKey = camelCase(k)
  o[apiMap[camelizedKey] || camelizedKey] = data[k]
  return o
}, {}, keys(data))

module.exports = (styles) => ($el) => {
  const elStyles = styles[$el[0].name] || {}
  const classStyles = compose(map(propOr({}, __, styles)), split(' '))($el.attr('class') || '')
  return applyAPIMap(mergeAll([{ content: $el.text() }, elStyles, ...classStyles, $el.css()]))
}
