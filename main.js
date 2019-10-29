import { instrumentButton } from "./src/instrumentButton.js";
import { Clap, OpenHiHat, ClosedHiHat, Snare, Kick, Shaker, Ride, Cymbal } from "./src/drums.js"

const drums = [
    {
        name: 'OpenHiHat',
        sound: OpenHiHat,
        key: 'A',
        cssClassName: 'instruments-section__drums__openhihat',

    },
    {
        name: 'ClosedHiHat',
        sound: ClosedHiHat,
        key: 'S',
        cssClassName: 'instruments-section__drums__closedhihat',

    },
    {
        name: 'Ride',
        sound: Ride,
        key: 'D',
        cssClassName: 'instruments-section__drums__ride',
    },
    {
        name: 'Cymbal',
        sound: Cymbal,
        key: 'F',
        cssClassName: 'instruments-section__drums__cymbal',
    },
    {
        name: 'Snare',
        sound: Snare,
        key: 'G',
        cssClassName: 'instruments-section__drums__snare',

    },
    {
        name: 'Kick',
        sound: Kick,
        key: 'H',
        cssClassName: 'instruments-section__drums__kick',
    },
    {
        name: 'Clap',
        sound: Clap,
        key: 'J',
        cssClassName: 'instruments-section__drums__clap',

    },
    {
        name: 'Shaker',
        sound: Shaker,
        key: 'K',
        cssClassName: 'instruments-section__drums__shaker',
    },

]

const instrumentsSection = document.querySelector('#instruments-section')
const timelineSection = document.querySelector('#timeline-section')

const state = {
    isRecording: false,
    lastInterval: 0,
    savedSounds: []
}

function updateSavedSounds(obj) {
    const sound = {
        key: obj.key, audio: obj.audio, name: obj.name, currentTime: obj.currentTime,
    }
    state.savedSounds = [...state.savedSounds, sound]
    console.log(state.savedSounds)
}

const drumsButtons = Object.values(drums).map(obj => {
    return instrumentButton(obj.name, obj.sound, obj.key, obj.cssClassName, state, updateSavedSounds)
})

let i = -1
export function playSavedSounds() {
    i++
    if (i == state.savedSounds.length) {
        i = -1;
        return;
    };
    const playbackSound = state.savedSounds[i]
    console.log(playbackSound.currentTime)
    const audioElem = playbackSound.audio.cloneNode()
    audioElem.load();
    setTimeout(() => {
        audioElem.play();
        playSavedSounds(state)
    }, playbackSound.currentTime)
}

const drumsSection = document.createElement('div')
drumsSection.classList.add('instruments-section__drums')
drumsButtons.forEach(drumButton => drumsSection.appendChild(drumButton))
instrumentsSection.appendChild(drumsSection)

const recordButton = document.createElement('button')
recordButton.innerHTML = "CLICK TO RECORD"
recordButton.addEventListener('click', event => {
    state.isRecording = !state.isRecording
    if (state.isRecording)
        recordButton.innerHTML = "NOW RECORDING"
    if (!state.isRecording)
        recordButton.innerHTML = "CLICK TO RECORD"
    state.lastInterval = Date.now()
})
timelineSection.appendChild(recordButton)

const playButton = document.createElement('button')
playButton.innerHTML = "PLAY"
playButton.addEventListener('click', event => {
    state.isRecording = false
    playSavedSounds(state)
})
timelineSection.appendChild(playButton)




