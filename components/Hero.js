import React from 'react'
import Image from 'next/image'
import classes from './Hero.module.css'

function Hero() {
    return (
        <div className={'flex items-center justify-center font-thin'} style={{ fontFamily: 'Poppins' }}>
            <div className={'flex flex-col items-center mt-6'}>
                <div className={`${classes.avatar} relative group`}>
                    <div className={'border-8 border-iceburg-2 rounded-full shadow-xl flex items-center  '} style={{ width: 150, height: 150 }}>
                        <Image
                            className={'object-cover rounded-full'}
                            src={'/site/bu_ding.jpg'}
                            height={150}
                            width={150}
                        />
                    </div>
                    <div className={'absolute inset-x-0 bottom-0 z-40 whitespace-nowrap text-center'}>
                        <p className={' text-iceburg-2 md-1 mt-2 px-3 py-0.5 text-xl select-none cursor-default bg-gray-700 bg-opacity-10 rounded-full backdrop-filter backdrop-blur-sm shadow-lg transition-colors duration-700 group-hover:text-gray-700'}>Yiran's Blog</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
