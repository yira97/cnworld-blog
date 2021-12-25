import ArticleRow from './ArticleRow'


function FeaturedArticle(props) {
    const {fillBlank, pageSize} = props

    const contents = props.articles.map(p_article => {
        return {
            article: p_article,
            dummy: false,
            link: `/article/${p_article.uid}`,
        }
    })

    if (fillBlank && pageSize) {
        for (let i = 0; pageSize > contents.length; i++) {
            contents.push({
                article: {
                    uid: '___pad_' + i,
                },
                dummy: true,
                link: ``,
            })
        }
    }

    return (
        <div className={'group flex flex-col items-center py-2 pt-4 text-center cursor-default mx-auto max-w-md px-1'}>
            <p className=" py-3 text-4xl text-iceburg-2 font-serif">{props.title}</p>
            <div className={'py-1 h-0.5 w-full border-b border-iceburg-2 shadow-lg'} ></div>
            <div className={'flex flex-col py-1 w-full gap-2'}>
                {contents.map((content) => (
                    <ArticleRow key={content.article.uid} article={content.article} link={content.link} dummy={content.dummy} />
                ))}
            </div>
            <div className={'py-1 h-0.5 w-full border-b border-iceburg-2 shadow-lg'} ></div>
        </div>
    )
}

export default FeaturedArticle
