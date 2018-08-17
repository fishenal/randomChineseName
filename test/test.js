let utils = require('../scripts/utils')

let testObj = [
	{
		name: 'xi test',
		pinyin: 'xí',
		rym: 'i',
		catIdx: 0
	},
	{
		name: 'xia test',
		pinyin: 'xià',
		rym: 'ia',
		catIdx: 1
	},
	{
		name: 'luo test',
		pinyin: 'luó',
		rym: 'uo',
		catIdx: 2
	},
	{
		name: 'le test',
		pinyin: 'lè',
		rym: 'e',
		catIdx: 3
	},
	{
		name: 'lai test',
		pinyin: 'lái',
		rym: 'ai',
		catIdx: 4
	},
	{
		name: 'pei test',
		pinyin: 'péi',
		rym: 'ei',
		catIdx: 5
	},
	{
		name: 'niao test',
		pinyin: 'níao',
		rym: 'iao',
		catIdx: 6
	},
	{
		name: 'dou test',
		pinyin: 'dōu',
		rym: 'ou',
		catIdx: 7
	},
	{
		name: 'an test',
		pinyin: 'ān',
		rym: 'an',
		catIdx: 8
	},
	{
		name: 'jué test',
		pinyin: 'jué',
		rym: 'ue',
		catIdx: 3
	},
	{
		name: 'cui test',
		pinyin: 'cuì',
		rym: 'ui',
		catIdx: 5
	},
	{
		name: 'dian test',
		pinyin: 'diàn',
		rym: 'ian',
		catIdx: 8
	},
	{
		name: 'dong test',
		pinyin: 'dōnɡ',ɡ
		rym: 'ong',
		catIdx: 12
	},
	{
		name: 'e test',
		pinyin: 'é',
		rym: 'e',
		catIdx: 3
	},
	{
		name: 'gun test',
		pinyin: 'ɡùn',
		rym: 'un',
		catIdx: 9
	},
	{
		name: 'hua test',
		pinyin: 'huá',
		rym: 'ua',
		catIdx: 1
	},
	{
		name: 'huang test',
		pinyin: 'huánɡ',
		rym: 'uang',
		catIdx: 10
	},
]






var assert = require('assert');
describe('test utils func', function() {
	testObj.forEach((item) => {
		describe(item.name, function() {
	    it(item.name, function() {
	    	let rym = utils.getPinyinRhyme(item.pinyin)
	      assert.equal(rym, item.rym);
	      assert.equal(utils.getRhymeCatIdx(rym), item.catIdx)
	    });
	  });	
	})
});