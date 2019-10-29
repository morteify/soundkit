//import { instrumentButton } from "./src/components/instrumentButton.js";
const Clap = new Audio('../../../assets/Drums/clap.wav')
const HiHat = new Audio('../../../assets/Drums/hihat.wav')
const Snare = new Audio('../../../assets/Drums/snare.wav')
const KickDrum = new Audio('../../../assets/Drums/kick.wav')
// TODO REMOVE BELOW TEST
const schafter = new Audio('../../../assets/Drums/schafter.mp3')

const instrumentsSection = document.querySelector('#instruments-section')
const timelineSection = document.querySelector('#timeline-section')

const drums = [
    {
        name: 'Clap',
        sound: Clap,
        key: 'A',
        cssClassName: 'instruments-section__drums__clap',

    },
    {
        name: 'HiHat',
        sound: HiHat,
        key: 'S',
        cssClassName: 'instruments-section__drums__hihat',

    },
    {
        name: 'Snare',
        sound: Snare,
        key: 'D',
        cssClassName: 'instruments-section__drums__snare',

    },
    {
        name: 'KickDrum',
        sound: KickDrum,
        key: 'F',
        cssClassName: 'instruments-section__drums__kickdrum',

    },
    {
        name: 'schafter',
        sound: schafter,
        key: 'G',
        cssClassName: 'instruments-section__drums__schafter',
    }
]


// drums.forEach(item => {
//     const audioElem = document.createElement('audio')
//     audioElem.type = "audio/ogg"
//     audioElem.src = item.sound
//     audioElem.id = item.cssClassName
//     audioElem.preload = 'auto'
//     instrumentsSection.appendChild(audioElem)
// })


const savedSounds = []
function updateSavedSounds(obj) {
    const sound = {
        key: obj.key, audio: obj.audio, name: obj.name, currentTime: obj.currentTime,

    }
    savedSounds.push(sound)
    console.log(savedSounds)
}

const drumsButtons = Object.values(drums).map(obj => {
    return instrumentButton(obj.name, obj.sound, obj.key, obj.cssClassName, updateSavedSounds)
})


function instrumentButton(title, sound, key, cssClassName = '', updateSavedSounds) {
    const div = document.createElement('div')
    div.classList.add(cssClassName)

    const titleElem = document.createElement('p')
    titleElem.innerHTML = title
    titleElem.classList.add(`${cssClassName}__title`)
    div.appendChild(titleElem)

    const keyElem = document.createElement('p')
    keyElem.innerHTML = key
    keyElem.classList.add(`${cssClassName}__key`)
    div.appendChild(keyElem)

    const playSound = (soundSource, updateSavedSounds) => {
        const startTime = Date.now()
        const audioElem = soundSource.cloneNode()
        audioElem.pause()
        audioElem.currentTime = 0
        audioElem.play()

        audioElem.addEventListener('ended', () => {
            updateSavedSounds({ key, audio: audioElem, name: title, currentTime: audioElem.currentTime })
        })



    }
    div.addEventListener('click', event => playSound(sound, updateSavedSounds))
    document.body.addEventListener('keydown', event => {
        if (event.keyCode === key.charCodeAt(0)) {
            playSound(sound, updateSavedSounds)
        }
    })

    return div
}






const drumsSection = document.createElement('div')
drumsSection.classList.add('instruments-section__drums')
drumsButtons.forEach(drumButton => drumsSection.appendChild(drumButton))
instrumentsSection.appendChild(drumsSection)


// TIMELINE SECTION
const playButton = document.createElement('button')
playButton.innerHTML = "PLAY"
playButton.addEventListener('click', event => playSavedSounds())
timelineSection.appendChild(playButton)


// const playSavedSounds = () => savedSounds.forEach((savedSound, index) => {
//     savedSound.audio.currentTime = 0
//     const sampleSound = savedSound.audio.cloneNode()
//     console.log(savedSound.timestamp * 10000)
//     setTimeout(() => {
//         sampleSound.play()


//         console.log('dupa' + index)
//     }, (index * 1000) * (savedSound.timestamp))
// })

var i = -1;

function playSavedSounds() {
    i++;
    if (i == savedSounds.length) return;
    console.log(savedSounds[i])
    const playbackSound = savedSounds[i].audio.cloneNode()
    playbackSound.addEventListener('ended', playSavedSounds);

    setTimeout(() => {
        playbackSound.play();
    }, 100)
}


