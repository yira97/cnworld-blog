import React from 'react'
import { svgs } from '../lib/svg'
import NavItem from './NavItem'

const items = [
    {
        name: "home",
        icon: svgs.home,
        line: '/'
    },
    {
        name: "archive",
        icon: svgs.archive,
        link: '/archive'

    }, {
        name: "contact",
        icon: svgs.contact,
        link: '/contact'
    }, {
        name: "about",
        icon: svgs.about,
        link: '/about'
    }

]

function Nav() {
    return (
        <nav className={'flex justify-center text-gray-200 space-x-1 mt-3'}>
            {items.map(({ name, icon, link }) => <NavItem key={name} Icon={icon} name={name} link={link} />)}
        </nav>
    )
}

export default Nav
