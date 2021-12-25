import { getRecentContentList } from '../lib/service/content'
import React from 'react'

import FeaturedArticle from '../components/FeaturedArticle'

const count = 50

function archive(props) {
    return (
        <div className={'bg-iceburg-4 shadow-xl pb-10'}>
            <FeaturedArticle title={'总集'} articles={props.articles} pageSize={5} fillBlank={true} />
        </div>
    )
}

// This function gets called at build time
export async function getStaticProps() {
    const articles = await getRecentContentList(count, 0)

    return {
        props: {
            articles,
        },
        revalidate: 3000,
    }
}

export default archive

