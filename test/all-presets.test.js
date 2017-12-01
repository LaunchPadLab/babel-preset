const execSync = require('child_process').execSync

// Basic sanity checks to make sure there are no syntax errors in the configs

function runConfig (config) {
  execSync(`node_modules/.bin/babel --config ${ config }.js test/test-input.js`, { stdio: 'inherit' })
}

test('index', () => runConfig('index'))
test('es6', () => runConfig('es6'))
test('react', () => runConfig('react'))

