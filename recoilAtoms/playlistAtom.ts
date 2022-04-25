import {atom} from 'recoil'

export const seedsArray = atom({
    key: "seedsArray",
    default: ['6mfK6Q2tzLMEchAr0e9Uzu', '4DYFVNKZ1uixa6SQTvzQwJ']
})

export const currentSong = atom({
    key:"currentSong",
    default: null
})