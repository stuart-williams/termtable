const chalk = require('chalk')
const config = require('../config.json')

const applyChalkStyle = (model) => (prop) => {
  const value = model[prop]
  if (value && model.content && chalk[value] && config.styles[prop].includes(value)) {
    model.content = chalk[value](model.content)
  }
}

module.exports = function applyChalkStyles (data) {
  return data.map((model) => {
    if (Array.isArray(model)) return applyChalkStyles(model)
    Object.keys(config.styles).forEach(applyChalkStyle(model))
    return model
  })
}
