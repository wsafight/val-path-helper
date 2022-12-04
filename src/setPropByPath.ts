export const setPropByPath = (
    obj: Record<string, any>, 
    path: string, 
    value: any
) => {
    let tempObj = obj
    let keyArr = path.split('.')
    let i = 0, len = keyArr.length
    for (; i < len - 1; ++i) {
        let key = keyArr[i]
        if (key in tempObj) {
            tempObj = tempObj[key]
        } else {
            tempObj[key] = {}
            tempObj = tempObj[key]
        }
    }
    tempObj[keyArr[len - 1]] = value
}