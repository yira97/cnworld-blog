import React from 'react'
import Link from 'next/link'
import classes from './NavItem.module.css'

function NavItem({ Icon, name, link }) {
    return (
        <Link href={link || '/'}>
            <div className={`cursor-pointer group flex flex-col items-center transition duration-300 text-iceburg-2 hover:text-iceburg-4 transform hover:scale-110 ${classes.parent} z-10`}>
                <div className={classes.avatar}>{Icon}</div>
                <p className={' transition-opacity duration-200 opacity-0 group-hover:opacity-100 font-thin'} style={{ fontFamily: 'Poppins' }}>{name}</p>
            </div>
        </Link>
    )
}

export default NavItem
