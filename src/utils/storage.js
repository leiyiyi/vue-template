/**
 * 本地同步存储
 * 可选择 localstorage 或者 sessionstorage 存储引擎
 */

import {
  storagePrefix as prefix,
  storageEngine as engine
} from '../common/config'

export const getItem = (key, dft) => {
  const val = 'getItem' in engine && engine.getItem(prefix + key)
  return val === null
    ? dft === undefined
      ? null
      : dft
    : JSON.parse(val)
}

export const setItem = (key, val) => {
  if (val === undefined) {
    removeItem(key)
  } else {
    'setItem' in engine && engine.setItem(prefix + key, JSON.stringify(val))
  }
}

export const removeItem = key => {
  'removeItem' in engine && engine.removeItem(key)
}

export const clearItems = () => {
  'clear' in engine && engine.clear()
}
