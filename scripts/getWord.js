var _ = require('lodash')
var dict = require('./target.json')

var result = _.find(dict, { 'strokes': 12 })
console.log(result)
