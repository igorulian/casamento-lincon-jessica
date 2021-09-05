import { IITem } from '../pages/list'
import rawdata from './itemdata.json'


export function getItems(){
    let data:IITem[] = rawdata

    data.forEach(item => {
        item.image = require(`../assets/items/${data.indexOf(item)+1}.jpg`).default
        item.qrcode = require(`../assets/qrcode/${data.indexOf(item)+1}.png`).default
        // item.image = require(`../assets/items/1.jpg`).default
        // item.qrcode = require(`../assets/qrcode/1.png`).default
    })

    return data
}