# randomChineseName
generate random chinese name character depand on strokes and tones

## Try [this](https://fishenal.github.io/randomChineseName/web/index.html) to generate your random chinese name, you will get the chinese character and pinyin

![image](https://fishenal.github.io/randomChineseName/demo.png)

## info:
- strokes: how many steps to write a chinese character, mostly represents it's complexity.
- tone: modern mandarin has four tones, it shows four differents pronunciations.

## files:
- lib/dict.json : whole chinese dict, from https://github.com/pwxcoo/chinese-xinhua
- lib/goodWords.js : frequently-used character, I remove some 'bad words for name' manually, but not 100% promise no 'bad words for name'

- scripts/. : some node scripts to genarate source data
- src/. : genarated source data
- web/. : web app run on this github website, using lodash.js / vue.js/ bootstrap

## Enjoy!

