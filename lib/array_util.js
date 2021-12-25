// @ts-check
/**
 * 用函数f, 生成 count 个元素, 返回那个数组
 * @param {function} f 
 * @param {number} count 
 * @returns array
 */
export const array_of = (count, f = () => undefined) => {
    const arr = []
    for (let i = 0; i < count; i++) {
        arr.push(f(i))
    }
    return arr
}