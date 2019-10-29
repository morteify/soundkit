import { instrumentButton } from "./src/instrumentButton.js";
import { drums } from "./src/drums.js"


const instrumentsSection = document.querySelector('#instruments-section')
const timelineSection = document.querySelector('#timeline-section')

const state = {
    isRecording: false,
    lastInterval: 0,
    savedSounds: []
}

const controlPanel = document.createElement('div')
controlPanel.classList.add('timeline-section__control-panel')
timelineSection.appendChild(controlPanel)

const recordIcon = document.createElement('img')
recordIcon.src = "./assets/Icons/microphone.png"
recordIcon.classList.add('timeline-section__control-panel__record')
recordIcon.addEventListener('click', event => {
    state.isRecording = !state.isRecording
    if (state.isRecording)
        recordIcon.classList = 'timeline-section__control-panel__record--active'
    if (!state.isRecording)
        recordIcon.classList = 'timeline-section__control-panel__record'
    state.lastInterval = Date.now()
})
controlPanel.appendChild(recordIcon)

const playIcon = document.createElement('img')
playIcon.src = "./assets/Icons/play-button.png"
playIcon.classList.add('timeline-section__control-panel__play')
playIcon.addEventListener('click', event => {
    state.isRecording = false
    playSavedSounds(state)
})
controlPanel.appendChild(playIcon)

const savedSoundsSection = document.createElement('div')
savedSoundsSection.style = "width: 100%; display: flex"
timelineSection.appendChild(savedSoundsSection)


function updateSavedSounds(obj) {
    const sound = {
        key: obj.key, audio: obj.audio, name: obj.name, currentTime: obj.currentTime,
    }
    state.savedSounds = [...state.savedSounds, sound]
    console.log(state.savedSounds)
}

const drumsButtons = Object.values(drums).map(obj => {
    return instrumentButton(obj, state, updateSavedSounds, savedSoundsSection)
})

const drumsSection = document.createElement('div')
drumsSection.classList.add('instruments-section__drums')
drumsButtons.forEach(drumButton => drumsSection.appendChild(drumButton))
instrumentsSection.appendChild(drumsSection)

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