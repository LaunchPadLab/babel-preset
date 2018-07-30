module.exports = {
  'presets': [
    require('./es6'),
    'react',
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
