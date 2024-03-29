let fs = require('fs')
let _ = require('lodash')
let dict = require('../lib/dict.json')
let familyNames = require('../lib/familyNames.js')
let toneMap = require('../lib/tone_map.js')
let targetFile = '../src/familyNames.js'
let exportDict = []
let passWord = 0
for(let i = 0; i < familyNames.length; i ++) {
    let word = familyNames.charAt(i)
    let dw = _.find(dict, { 'word': word })
    if (typeof dw === 'undefined') {
        passWord ++
        continue
    }
    let pinyin = dw.pinyin
    let tone
    for (let k in toneMap) {
        if (pinyin.indexOf(k) !== -1) {
            tone = toneMap[k]
        }
    }
    exportDict.push({
        word: dw.word,
        strokes: Number(dw.strokes),
        pinyin,
        tone,
        radicals: dw.radicals,
        explanation: dw.explanation
    })
}

fs.writeFile(targetFile, 'window.familyNames = ' + JSON.stringify(exportDict), 'utf8', function (err) {
    if (err) throw err;
    console.log("JSON file has been saved. pass " + passWord + "words");
})