import { instrumentButton } from "./src/components/instrumentButton.js";
import { Clap, HiHat, Snare, KickDrum } from "./src/components/sounds/drums/drums.js"

const instrumentsSection = document.querySelector('#instruments-section')

const drums = [
    {
        name: 'Clap',
        sound: Clap,
        key: 'A',
        cssClassName: 'instruments-section__drums__clap'
    },
    {
        name: 'HiHat',
        sound: HiHat,
        key: 'S',
        cssClassName: 'instruments-section__drums__hihat'
    },
    {
        name: 'Snare',
        sound: Snare,
        key: 'D',
        cssClassName: 'instruments-section__drums__snare'
    },
    {
        name: 'KickDrum',
        sound: KickDrum,
        key: 'F',
        cssClassName: 'instruments-section__drums__kickdrum'
    }
]



const drumsButtons = Object.values(drums).map(obj => {
    return instrumentButton(obj.name, obj.sound, obj.key, obj.cssClassName)
})
const drumsSection = document.createElement('div')
drumsSection.classList.add('instruments-section__drums')
drumsButtons.forEach(drumButton => drumsSection.appendChild(drumButton))
console.log(drumsSection)
instrumentsSection.appendChild(drumsSection)


Snare.play()