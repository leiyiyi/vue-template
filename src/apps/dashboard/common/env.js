export const getAppName = () => /^\.\/src\/apps\/(\w+)\//.exec(require.resolveWeak('./env'))[1]
