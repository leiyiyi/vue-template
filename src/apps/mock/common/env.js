export const [, appName] = /^\.\/src\/apps\/(\w+)\/index\.js$/.exec(require.resolveWeak('../index')) || []
