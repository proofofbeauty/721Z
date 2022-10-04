const withTM = require('next-transpile-modules')([
  '@pob-monorepo/protocol',
  '@pob-monorepo/types',
]);

module.exports = withTM({
  swcMinify: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
    // removeConsole: true,
    // removeConsole: {
    //   exclude: ['error'],
    // },
  },
  webpack: (config) => {
    // Need this locally or else react-spring gets mad on hot reloads
    config.module.rules.push({ test: /react-spring/, sideEffects: true });
    return config;
  },
});
