export const getPropByPath = (
  obj: Record<string, any>,
  path: string,
  defaultVal?: any 
) => {
  if (!obj || typeof obj !== 'object') {
    return {
      v: defaultVal
    }
  }

  if (typeof path !== 'string' || !path) {
    return {
      v: defaultVal
    }
  }

  let tempObj = obj

  let keyArr = path.replace(/\[/g, '.')
    .replace(/\]/g, '')
    .split('.')
    .filter(Boolean)

  let i = 0
  for (let len = keyArr.length; i < len - 1; ++i) {
    let key = keyArr[i]
    if (key in tempObj) {
      tempObj = tempObj[key]
    } else {
      return {
        v: defaultVal
      }
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj[keyArr[i]] ?? defaultVal
  }
}