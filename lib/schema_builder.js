// const { loadContent } = require('./utils')

const schemaBuilder = {
  getSchema: (schema) => {
    const schemaJson = schema
    // const schemaJson = typeof schema === 'string' ? loadContent(schema) : schema
    return _convertToJS(schemaJson)
  },
}

// private methods

const _convertToJS = (object) => {
  let result = object instanceof Array ? [] : {}
  for(let key in object) {
    const isObject = typeof object[key] === 'object'
    result[key] = isObject ? _convertToJS(object[key]) : (TYPE_MAPPER[object[key]] || object[key])
  }
  return result;
}

const TYPE_MAPPER = {
  'string': String,
  'number': Number,
  'boolean': Boolean,
}

module.exports = schemaBuilder
