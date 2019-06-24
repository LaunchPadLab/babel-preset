# @launchpadlab/babel-preset

Shareable babel presets to use across projects.

## Usage:

```js
// .babelrc:

// To use a specific config
{
  presets: ['@launchpadlab/babel-preset/es6'],
}

// To use the default config (react)
{
  presets: ['@launchpadlab/babel-preset'],
}
```

This preset uses [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) under the hood. To pass options down to that preset, you can pass an `env` option at the top level:
```js
{
  // Will skip module transformations
  presets: [['@launchpadlab/babel-preset', { env: { modules: false } }]],
}
```


## Migration Guides
- [v2.0.0](migration-guides/v2.0.0.md)
