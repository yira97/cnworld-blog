import React from 'react'
import SubcribeForm from './SubcribeForm'

function SubscribeNow() {
    return (
        <div className={'h-36 flex justify-center bg-blue_pink_set-pink py-3 gap-2'}>
            <div >
                <p className='text-blue_pink_set-blue_2 text-4xl font-serif cursor-default'>加入订阅</p>
            </div>
            <div>
                <SubcribeForm />
            </div>
        </div>
    )
}

export default SubscribeNow
