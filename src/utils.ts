export const isObj = (val: any): val is Object => {
    return Object.prototype.toString.call(val) === '[object Object]'
}