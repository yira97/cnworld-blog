import React from 'react'
import DotChain from './DotChain'

function TimeLine(props) {
    const {title} = props
    return (
        <div className={' flex flex-col items-center mx-auto py-2 mb-5 text-center cursor-default  max-w-md '}>
            <p className=" pt-3 text-4xl text-iceburg-5  font-serif ">{title}</p>
            <div className={'py-3 md-1'}>
                <DotChain count={3} size={1} gap={2} />
            </div>
            <div className={'rounded-xl bg-gradient-to-br from-iceburg-2  opacity-80 h-72 w-full mx-5 shadow-lg my-1'}>
            </div>
            <div className={'py-3'}>
                <DotChain count={3} size={1} gap={2} />
            </div>
        </div>
    )
}

export default TimeLine
