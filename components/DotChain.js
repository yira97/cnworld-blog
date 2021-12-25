import React from 'react'
import { array_of } from '../lib/array_util'

function DotChain(props) {
    const { size, count, gap } = props
    return (
        <div className={`flex flex-col gap-${gap}`}>
            {array_of(count).map(() => (
                <div className={`w-${size} h-${size} bg-iceburg-5 transform rotate-45`}></div>
            ))}
        </div>
    )
}

export default DotChain
