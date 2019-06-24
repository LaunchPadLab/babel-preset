module.exports = function (api, options={}) {
  api.cache(true)
  return {
    'presets': [
      [ require('./es6'), options ],
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
