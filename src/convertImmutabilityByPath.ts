import { isObj } from "./utils"

export const convertImmutabilityByPath = (
  path: string,
  actions: Record<string, any>
) => {
  if (typeof path !== 'string' || !path) {
    return {}
  }

  if (!actions || !isObj(actions)) {
    return {}
  }
  const keys = path.replace(/\[/g, '.')
    .replace(/\]/g, '')
    .split('.')
    .filter(Boolean)

  const result: Record<string, any> = {}
  let current = result
  
  const len = keys.length
  
  keys.forEach((key: string, index: number) => {
    current[key] = index === len - 1 ? actions : {}
    current = current[key]
  })

  return result
}