import React from 'react'
import classes from './ContentDetailHeader.module.css'

function ContentDetailHeader({ title, tag }) {
    return (
        <div className={`relative text-center cursor-default z-50 ${classes.container}`}>
            <h2 className={`${classes.tags} whitespace-nowrap flex justify-center text-black`}>
                {tag.map(t => (
                    <span key={t} className={'font-mono'}>#{t} </span>
                ))}
            </h2>
            <h1 className={`${classes.big_title} text-8xl `}>
                {title}
            </h1>
        </div>
    )
}

export default ContentDetailHeader
