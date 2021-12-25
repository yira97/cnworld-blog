import React from 'react'
import { segmentParagraph, commonEndSegment } from '../lib/seg'

function EditableParagraph(props) {
    const { para, segAlg } = props
    const segs = segmentParagraph(para, segAlg || commonEndSegment)
    return (
        <div className={'leading-loose'}>
        {segs.map((seg, i) => (
                <span className={' transition-colors  hover:text-iceburg-1 '} key={`${seg}-${i}`}>{seg}</span>
            ))}
        </div>
    )
}

export default EditableParagraph
