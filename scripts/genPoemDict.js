let toneDict = {p: [], z: []}
let pzDict = {p: {}, z: {}}
let _ = require('lodash')
let roughDict = require('../lib/dict_com.js')
// phyme cat num = 13, 0 ~ 12
let phymeCat = {
	1: /[iīíǐì]$|[uūúǔù]$|[üǘǚǜ]$/,//0
	2: /[aāáǎà]$|i[aāáǎà]$|u[aāáǎà]$/,//1
	3: /[oōóǒò]$|u[oōóǒò]$/,//2
	4: /[eēéěè]$|i[eēéěè]$|ü[eēéěè]$|u[eēéěè]$/,//3
	5: /[aāáǎà]i$|u[aāáǎà]i$/,//4
	6: /[eēéěè]i$|u[iīíǐì]$/,//5
	7: /[aāáǎà]o$|i[aāáǎà]o$/,//6
	8: /[oōóǒò]u$|i[uūúǔù]$/,//7
	9: /[aāáǎà]n$|i[aāáǎà]n$|u[aāáǎà]n$/,//8
	10: /[eēéěè]n$|[iīíǐì]n$|[uūúǔù]n$/,//9
	11: /[aāáǎà]ng$|i[aāáǎà]ng$|u[aāáǎà]ng$/,//10
	12: /[eēéěè]ng$|[iīíǐì]ng$|u[eēéěè]ng$/,//11
	13: /[oōóǒò]ng$|i[oōóǒò]ng$///12
}
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

for (let key in roughDict) {
	let words = roughDict[key]
	for (let ky in toneMap) {
		let toneArr = toneMap[ky]

		if (key.split(',')[0].indexOf(ky) !== -1) {	
			if (toneArr[0] === 1 || toneArr[0] === 2 || toneArr[0] === 0) {

				//getRymIdx

				for (let _ky in phymeCat) {
					let phymeReg = phymeCat[_ky]
					if (key.match(phymeReg)) {
						if (typeof pzDict.p[_ky] === 'undefined') {
							pzDict.p[_ky] = []	
						}
						else {
							pzDict.p[_ky].push(roughDict[key])
						}
					}
				}
				toneDict.p.push(roughDict[key])
			}
			if (toneArr[0] === 3 || toneArr[0] === 4) {
				for (let _ky in phymeCat) {
					let phymeReg = phymeCat[_ky]
					if (key.match(phymeReg)) {
						if (typeof pzDict.z[_ky] === 'undefined') {
							pzDict.z[_ky] = []	
						}
						else {
							pzDict.z[_ky].push(roughDict[key])
						}
					}
				}
				toneDict.z.push(roughDict[key])
			}
		}
	}
}


let randomSeed = function () {
	return _.sampleSize([1,2,3,4,5,6,7,8,9,10,11,12,13], 7)
}

class Poetry {
	constructor(poemTemp) {
		this.poemTemp = poemTemp
		this.poem = ''
	}

	gen (times) {
		while (times >= 0) {
			this.poemTemp.forEach((st) => {
				st.forEach((word, index) => {
					let seed = randomSeed()
					word.split('').forEach((toneType, idx) => {
						let word = _.sample(pzDict[toneType][seed[idx]])
						this.poem += word.substring(0, 1)
					})
					if (index === st.length - 1) {
						this.poem += '。'	
					}
					else {
						this.poem += ','
					}
					
				})	
			})
			times --
		}
		return poem
	}

}

let poemTemp = [['ppzzzpp', 'zzppzzp'], ['zzpppzz', 'ppzzzpp']]


let poem = ''


poemTemp.forEach((st) => {
	st.forEach((word, index) => {
		let seed = randomSeed()
		word.split('').forEach((toneType, idx) => {
			let word = _.sample(pzDict[toneType][seed[idx]])
			poem += word.substring(0, 1)
		})
		if (index === st.length - 1) {
			poem += '。'	
		}
		else {
			poem += ','
		}
		
	})
	
})


console.log(poem)
