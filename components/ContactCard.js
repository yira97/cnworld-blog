import React from 'react'
import { svgs } from '../lib/svg'
import LinkAdapt from './LinkAdapt'

const items = [
    {
        'name': 'email',
        'displayName': 'Email',
        'link': 'fangyira[a]gmail.com',
    },
    {
        'name': 'wechat',
        'displayName': 'WeChat',
        'link': 'yira97',
    },
    {
        'name':'line',
        'displayName':'Line',
        'link':'-'
    },
    {
        'name': 'twitter',
        'displayName': 'Twitter',
        'link': 'fengyiran3',
    },
    {
        'name':'github',
        'displayName':'Github',
        'link':'yira97',
    },
    {
        'name': 'youtube',
        'displayName': 'YouTube',
        'link': 'www.youtube.com/channel/UChMxBnCpX8a2Su_HD41ZWlQ',
    }
]

function ContactCard() {
    return (
        <div className={'bg-white bg-opacity-60  flex flex-col px-6 py-4 rounded-2xl whitespace-nowrap drop-shadow-xl'}>
            {items.map(({ name, displayName, link }) => {
                return (
                    <div className={'flex items-center py-3 gap-7 justify-between cursor-default hover:shadow-inner rounded-2xl px-4'} key={name}>
                        <div className={'flex gap-2'}>
                            {svgs[name]}
                            {displayName}
                            </div>
                        <div>
                            <div>
                                <LinkAdapt link={link} maxLength={10} replaceText={'Copy to clipboard'} />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ContactCard
