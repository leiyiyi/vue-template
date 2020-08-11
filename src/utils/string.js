// const safeCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_'

/**
 * 首字母大写
 * @param str
 * @returns {string}
 */
export const uppercaseFirstLetter = (str = '') =>
  typeof str === 'string' && (str = str.trim()) && str.length && str.charAt(0).toUpperCase() + str.slice(1)

/**
 * 生成虚假ID
 * @param prefix 固定前缀
 * @returns {string}
 */
export const generateFakeId = (prefix = 'fake') =>
  typeof prefix === 'string' && (prefix = prefix.trim()) && `${prefix}_${Math.random().toString(36).substring(2, 15)}`
