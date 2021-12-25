import React from 'react'
import Hero from './Hero'
import Nav from './Nav'
import DissolveHR from './DissolveHR'

function Header() {
    return (
        <div className={' bg-gradient-to-tr from-pink-100 bg-iceburg-3'}>
            <Hero />
            <Nav />
            <DissolveHR />
        </div>
    )
}

export default Header
