
import { getRequestBasePath,fetchOpts } from "./connect"
import {log } from "../log"

export const getRecentContentList = async (count, offset) => {
    const url = `${getRequestBasePath()}api/v1/contents?count=${count}&offset=${offset}`
    const r = await fetch(url, fetchOpts)
        .then(r => r.json())
        .catch(e => {
            log(e)
            return []
        })
    return r
}

export const getContentDetail = async (uid) => {
    const url = `${getRequestBasePath()}api/v1/content/uid:${uid}`
    const r = await fetch(url, fetchOpts)
        .then(r => r.json())
        .catch(e => {
            log(e)
            return undefined
        })
    return r
}