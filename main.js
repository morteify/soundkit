//import { instrumentButton } from "./src/components/instrumentButton.js";
const Clap = new Audio('../../../assets/Drums/clap.WAV')
const OpenHiHat = new Audio('../../../assets/Drums/openhihat.WAV')
const ClosedHiHat = new Audio('../../../assets/Drums/closedhihat.WAV')
const Snare = new Audio('../../../assets/Drums/snare.WAV')
const Kick = new Audio('../../../assets/Drums/kick.WAV')
const Shaker = new Audio('../../../assets/Drums/shaker.WAV')
const Ride = new Audio('../../../assets/Drums/ride.WAV')
const Cymbal = new Audio('../../../assets/Drums/cymbal.WAV')


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
        name: 'OpenHiHat',
        sound: OpenHiHat,
        key: 'S',
        cssClassName: 'instruments-section__drums__openhihat',

    },
    {
        name: 'ClosedHiHat',
        sound: ClosedHiHat,
        key: 'D',
        cssClassName: 'instruments-section__drums__closedhihat',

    },
    {
        name: 'Snare',
        sound: Snare,
        key: 'F',
        cssClassName: 'instruments-section__drums__snare',

    },
    {
        name: 'Kick',
        sound: Kick,
        key: 'G',
        cssClassName: 'instruments-section__drums__kick',
    },
    {
        name: 'Shaker',
        sound: Shaker,
        key: 'H',
        cssClassName: 'instruments-section__drums__shaker',
    },
    {
        name: 'Ride',
        sound: Ride,
        key: 'J',
        cssClassName: 'instruments-section__drums__ride',
    },
    {
        name: 'Cymbal',
        sound: Cymbal,
        key: 'K',
        cssClassName: 'instruments-section__drums__cymbal',
    },
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
const startTime = Date.now()
const drumsButtons = Object.values(drums).map(obj => {
    return instrumentButton(obj.name, obj.sound, obj.key, obj.cssClassName, updateSavedSounds, startTime)
})

let lastTime = 0
function instrumentButton(title, sound, key, cssClassName = '', updateSavedSounds, startTime) {
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

    const playSound = (soundSource, updateSavedSounds, startTime) => {
        const audioElem = soundSource.cloneNode()

        updateSavedSounds({ key, audio: soundSource, name: title, currentTime: Date.now() - lastTime })
        audioElem.pause()
        audioElem.currentTime = 0
        audioElem.load()
        audioElem.play()
        lastTime = Date.now()


        // document.body.addEventListener('keydown', event => {
        //     updateSavedSounds({ key, audio: audioElem, name: title, currentTime: audioElem.currentTime })
        // })
    }
    div.addEventListener('click', event => playSound(sound, updateSavedSounds))
    document.body.addEventListener('keydown', event => {
        if (event.keyCode === key.charCodeAt(0)) {
            if (lastTime === 0) {
                lastTime = startTime
                console.log('last time === 0', lastTime)
            }
            else {
                console.log('lastTime!=0', lastTime)
            }
            playSound(sound, updateSavedSounds, startTime)
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
playButton.addEventListener('click', event => {
    playSavedSounds()
})
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
    const playbackSound = savedSounds[i]
    console.log(playbackSound.currentTime)
    //playbackSound.audio.addEventListener('ended', playSavedSounds);
    const audioElem = playbackSound.audio.cloneNode()
    audioElem.load();
    setTimeout(() => {
        audioElem.play();
        playSavedSounds()
    }, playbackSound.currentTime)
}


