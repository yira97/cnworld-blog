// @ts-check
export const format_date = (d) => {
    const formatedTime = new Date(d).toLocaleString('en-US', {
        month: 'long',
        day: 'numeric'
    })
    return formatedTime
}