module.exports = function (api) {
  api.cache(true)
  return {
    'presets': [
      require('./es6'),
      '@babel/react',
    ],
    'plugins': [
      ['transform-imports', {
          'redux-form': {
            'transform': 'redux-form/es/${member}',
            'preventFullImport': true
          }
      }]
    ]
  }
}
