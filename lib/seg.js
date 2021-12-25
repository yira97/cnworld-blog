// @ts-check
// en
const en_comma = ','
const en_dot = '.'
const en_tan = '!'
const en_wen = '?'
const en_space = ' '
// cn
// https://www.collabo-china.com/archives/7357
const cn_comma = '，'
const cn_dot = '。'
const cn_dun = '、'
const cn_tan = '！'
const cn_wen = '？'
// jp
const jp_space = '　'

const en_sentence_end_set = [en_dot, en_tan, en_wen]
const cn_sentence_end_set = [cn_dot, cn_tan, cn_wen]
const sentence_end_set = [...en_sentence_end_set, ...cn_sentence_end_set]
const blank_char_set = [en_space, jp_space]

/**
 * 
 * @param {string} s 
 * @param {number} idx 
 * @returns {boolean}
 */
export const commonEndSegment = (s, idx) => {
    // console.log(`s=${s}_____idx=${idx}______${sentence_end_set.includes(s[idx + 1])}____${sentence_end_set.includes(s[idx])}`)
    return !sentence_end_set.includes(s[idx + 1]) && sentence_end_set.includes(s[idx])
}

/**
 * 
 * @param {string} p
 * @returns {string[]}
 */
export const segmentParagraph = (p, shouldSeg) => {
    // 只有两个字分个毛
    if (p.length <= 2) {
        return [p]
    }

    let s = p.trim()

    // 第一个字直接放进去
    const segs = [`${s[0]}`]
    let segIdx = 0
    // 从第二个元素开始, 并跳过最后一个元素
    for (let i = 1; i <= s.length - 2; i++) {
        if (
            segs[segIdx][segs[segIdx].length - 1] == ' ' && blank_char_set.includes(s[i]) || // 前面是空字符
            segs[segIdx].length === 0 && blank_char_set.includes(s[i]) // 上来就是空字符
        ) {
            continue;
        }
        segs[segIdx] += s[i]
        if (shouldSeg(s, i)) {
            segIdx++
            segs.push('')
        }
    }

    // 把最后一个字放进去
    segs[segIdx] += s[s.length - 1]
    return segs
}

// testing
const importCheck = () => {
    const my_ans = [
        segmentParagraph(`hi, my name is feng yiran.    what's your name?`, commonEndSegment),
        segmentParagraph(`こんにちは，ふうです。　あなたは？`, commonEndSegment),
    ]

    const ans = [
        ['hi, my name is feng yiran.', "what's your name?"],
        ['こんにちは，ふうです。', "あなたは？"]
    ]

    my_ans.forEach((test, test_idx) => {
        test.forEach((_, part_idx) => {
            if (my_ans[test_idx][part_idx] !== ans[test_idx][part_idx]) {
                console.log(`[ERROR](${__filename})   your ans=${my_ans[test_idx][part_idx]}, truth=${ans[test_idx][part_idx]}`)
            }
        })
    })

}
importCheck()