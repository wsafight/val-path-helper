import { isObj } from "./utils"

export const convertImmutabilityByPath = (
  path: string,
  value: Record<string, any>
) => {
  if (typeof path !== 'string' || !path) {
    return {}
  }

  if (!value || !isObj(value)) {
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
    current[key] = index === len - 1 ? value : {}
    current = current[key]
  })

  return result
}