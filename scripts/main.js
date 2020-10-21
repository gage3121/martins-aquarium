import { useFish } from './Fish/FishDataProvider.js'

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

import { FishList } from './Fish/FishList.js'

FishList()


import { useTip } from './Tips/TipDataProvider.js'

const allTheTips = useTip()

for (const tips of allTheTips) {
    console.log(tips)
}

import { TipList } from './Tips/TipList.js'

TipList()