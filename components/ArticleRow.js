import React from 'react'
import Image from 'next/image'
import { svgs } from '../lib/svg'
import Link from 'next/link'
import {date_format} from '../lib/date_util'


function ArticleRow(props) {
    const { article, link, dummy } = props
    const formatedTime = date_format(article.created_at)

    let desc = article.body ? article.body[0] : ''
    let dummy_opa_control = dummy ? 'opacity-30' : ''
    let dummy_gradient_control = dummy ? 'bg-iceburg-5' : 'bg-gradient-to-br from-iceburg-3 to-yellow-50'
    let tags = article.tag ? article.tag : []

    const Banner = (
        <div className={`rounded-xl overflow-hidden w-32 h-24 flex-none opacity-00`}>
            {article.image ? (
                <Image src={article.image} width={200} height={150} />
            ) : (
                <div className={`  ${dummy_gradient_control} text-iceburg-2 flex items-center justify-center`} >
                   <p className={' py-9'}>?</p>
                </div>
            )}
        </div>
    )



    return (
        <div className={`flex my-5  text-iceburg-3 w-full gap-3 ${dummy_opa_control}`}>
            {/* 第一列 封面 */}
            {Banner}
            {/* 第二列 文本信息 */}
            <div className=' flex-col text-left w-full'>
                <Link href={link}>
                    <p className={'font-serif cursor-pointer hover:text-iceburg-2  transition duration-200'}>
                        {article.title}
                    </p>
                </Link>
                <p className='text-sm opacity-70 font-light font-sans  overflow-hidden h-10'>{desc}</p>
                {tags.map(tag => (
                    <span className={'italic text-xs opacity-70 cursor-pointer transition-colors  hover:text-iceburg-2'}>{`#`}{tag}{' '}</span>
                ))}
                <p className='text-xs text-iceburg-5 opacity-70'>{formatedTime}</p>
            </div>
            {/* 第三列 图标 */}
            <div className='flex text-xs item items-center '>
                <div className={' fill-current'}>
                    {svgs.bubble}
                </div>
                <p className={'px-2'}>{article.comment_count ? article.comment_count : 0}</p>
            </div>
        </div>
    )
}

export default ArticleRow
