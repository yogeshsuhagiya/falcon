const notARollupCjsBuild = process.env.ROLLUP === undefined;
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        loose: true,
        targets: 'defaults'
      }
    ],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-transform-runtime', { useESModules: notARollupCjsBuild }],
    ['@babel/proposal-object-rest-spread', { loose: true, useBuiltIns: true }],
    'annotate-pure-calls'
  ].filter(Boolean)
};
