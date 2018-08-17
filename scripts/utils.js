let dict = require('../lib/dict.json')
let testDict = require('../lib/testDict.json')
// output
/*
	{
        "word": "嗄",
        "pinyin": "á",
        "rhyme": "",// 
        "tone": "p" // p 平, z 仄	
    }

*/ 

// output
/*
[
	[[], []],// phyme1 [[]//p, []//z]
	...
	[]//phymeX
]
*/

let output = []
let aph = [
	{
		reg: /[ā|á|ǎ|à]/g,
		plc: 'a'
	},
	{
		reg: /[ē|é|ě|è]/g,
		plc: 'e'
	},
	{
		reg: /[ō|ó|ǒ|ò]/g,
		plc: 'o'
	},
	{
		reg: /[ī|í|ǐ|ì]/g,
		plc: 'i'
	},
	{
		reg: /[ū|ú|ǔ|ù]/g,
		plc: 'u'
	},
	{
		reg: /[ü|ǘ|ǚ|ǜ]/g,
		plc: 'v'
	}
]
// phyme cat num = 13, 0 ~ 12
let phymeCat = [
	[/^i$/, /^u$/, /^v$/],//0
	[/^a$/, /^ia$/, /^ua$/],//1
	[/^o$/, /^uo$/],//2
	[/^e$/, /^ie$/, /^ve$/, /^ue$/],//3
	[/^ai$/, /^iai$/, /^uai$/],//4
	[/^ei$/, /^ui$/],//5
	[/^ao$/, /^iao$/],//6
	[/^ou$/, /^iou$/, /^iu$/],//7
	[/^an$/, /^ian$/, /^uan$/, /^van$/],//8
	[/^en$/, /^in$/, /^un$/, /^vn$/],//9
	[/^ang$/, /^iang$/, /^uang$/],//10
	[/^eng$/, /^ing$/, /^ueng$/],//11
	[/^ong$/, /^iong$/]//12
]
// 0,1,2 = p; 3,4 = z
let toneMap = {
  'ā': [1, 'a'],
  'á': [2, 'a'],
  'ǎ': [3, 'a'],
  'à': [4, 'a'],
  'ē': [1, 'e'],
  'é': [2, 'e'],
  'ě': [3, 'e'],
  'è': [4, 'e'],
  'ō': [1, 'o'],
  'ó': [2, 'o'],
  'ǒ': [3, 'o'],
  'ò': [4, 'o'],
  'ī': [1, 'i'],
  'í': [2, 'i'],
  'ǐ': [3, 'i'],
  'ì': [4, 'i'],
  'ū': [1, 'u'],
  'ú': [2, 'u'],
  'ǔ': [3, 'u'],
  'ù': [4, 'u'],
  'ü': [0, 'v'],
  'ǘ': [2, 'v'],
  'ǚ': [3, 'v'],
  'ǜ': [4, 'v'],
  'ń': [2, 'n'],
  'ň': [3, 'n'],
  '': [2, 'm']
}
module.exports.getPinyinRhyme = function (pinyin) {// 韵母
	let rym = pinyin.replace(/^[b|p|m|f|d|t|n|l|g|k|h|j|q|x|zh|ch|sh|r|z|c|s|y|w]/,'')
	aph.forEach((item) => {
		rym = rym.replace(item.reg, item.plc)
	})
	return rym
}

module.exports.getRhymeCatIdx = function (rym) {
	let _idx
	phymeCat.forEach((row, idx) => {
		row.forEach((item) => {
			if (rym.match(item)) {
				_idx = idx
			}
		})
	})
	return _idx
}

