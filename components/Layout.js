import React from 'react'
import Header from './Header'
import DrawTab from '../components/DrawTab'

function Layout(props) {
    return (
        <div className={'relative'}>
            <Header />
            {props.children}
            <div className={'z-10 fixed  bottom-7 -right-5'}>
                <DrawTab />
            </div>
        </div >
    )
}

export default Layout
