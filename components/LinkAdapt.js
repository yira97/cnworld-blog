import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

const startWithProtol = s => {

    if (s.startsWith("http://")) {
        return true
    }

    if (s.startsWith("https://")) {
        return true
    }
    return false
}

const isLink = (s) => {
    if (startWithProtol(s)) {
        return true
    }

    if (s.startsWith("www.")) {
        return true
    }

    return false
}

function LinkAdapt(props) {
    const { link, maxLength, replaceText, displayProtocol, onClick } = props
    if (!isLink(link)) {
        return <div>{link}</div>
    }

    let text = link

    if (!displayProtocol && startWithProtol(text)) {
        text.replace("https://", "")
        text.replace("http://", "")
    }

    if (text.length > maxLength) {
        text = replaceText
    }

    return (
        <CopyToClipboard text={link}>
            <span className={'cursor-pointer text-blue-600'}>
                {replaceText}
            </span>
        </CopyToClipboard>
    )
}

export default LinkAdapt
