import { instrumentButton } from "./src/components/instrumentButton.js";
import { Clap, HiHat, Snare, KickDrum } from "./src/components/sounds/drums/drums.js"

const instrumentsSection = document.querySelector('#instruments-section')
const timelineSection = document.querySelector('#timeline-section')

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

const savedSounds = []
function updateSavedSounds(obj) {
    const sound = { key: obj.key, audio: obj.audio, name: obj.name, duration: obj.duration }
    savedSounds.push(sound)
    console.log(savedSounds)

}

const drumsButtons = Object.values(drums).map(obj => {
    return instrumentButton(obj.name, obj.sound, obj.key, obj.cssClassName, updateSavedSounds)
})
const drumsSection = document.createElement('div')
drumsSection.classList.add('instruments-section__drums')
drumsButtons.forEach(drumButton => drumsSection.appendChild(drumButton))
console.log(drumsSection)
instrumentsSection.appendChild(drumsSection)

const playButton = document.createElement('button')
playButton.innerHTML = "PLAY"

playButton.addEventListener('click', event => playSavedSounds())

timelineSection.appendChild(playButton)



const playSavedSounds = () => savedSounds.forEach(savedSound => {

    setTimeout(() => {
        const audio = savedSound.audio
        const duration = savedSound.duration
        console.log(audio.currentTime)
        console.log(duration)
        audio.play()
    }, 3)
})