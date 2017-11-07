module.exports = {
  'presets': [
    'env',
  ],
  'plugins': {
    ['lodash', { 'id': ['lodash', 'recompose'] }],
    'transform-export-extensions',
    'transform-object-rest-spread',
  },
}
