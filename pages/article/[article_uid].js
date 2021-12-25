import React from 'react'
import { getContentDetail } from '../../lib/service/content'
import EditableParagraph from '../../components/EditableParagraph'
import { date_format } from '../../lib/date_util'
import ContentDetailHeader from '../../components/ContentDetailHeader'

function ArticleDetailPage(props) {
    const { title, sender, body, created_at, tag } = props.article

    return (
        <div className={'font-serif bg-gradient-to-br from-pink-100 via-blue_pink_set-pink to-blue_pink_set-pink py-7'}>
            <div className={'flex flex-col items-center'}>
                <div className="sticky top-0  w-full backdrop-filter backdrop-blur-lg py-2">
                    <ContentDetailHeader title={title} sender={sender} tag={tag} />
                </div>

                <div className={'relative mt-1'}>
                    <div className={'absolute top-10 -left-2 text-2xl bg-green-200 bg-opacity-30 rounded-lg py-6 font-thin'} style={{ writingMode: 'vertical-lr', fontFamily: 'Poppins' }}>
                        <span className={' font-bold'}>Author:</span> {sender}
                    </div>
                    {body.map((para, i) => (
                        <div className={'bg-gray-100 bg-opacity-30 my-3 max-w-md rounded-lg px-5 py-3 mx-8 text-blue_pink_set-blue_3'} key={`${para}-${i}`}>
                            <EditableParagraph key={`${para}-${i}`} para={para} />
                        </div>
                    ))}
                </div>
                <div className={'cursor-default'}> - {date_format(created_at)} - </div>
            </div>
        </div>
    )
}

// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export async function getServerSideProps(context) {
    const {
        article_uid: uid
    } = context.query
    const article = await getContentDetail(uid)
    return {
        props: {
            article,
        }, // will be passed to the page component as props
    }
}


export default ArticleDetailPage