// @ts-check
export const getRequestBasePath = () => {
    const httpProtocol = 'http'
    const address = '127.0.0.1'
    const port = '3001'
    const root_dir = '/'
    return `${httpProtocol}://${address}:${port}${root_dir}`
}

export const fetchOpts = {
    mode: "cors",
}