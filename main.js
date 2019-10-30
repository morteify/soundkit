import { instrumentButton } from './src/instrumentButton.js'
import { drums } from './src/drums.js'
import { guitarLicks } from './src/guitarLicks.js'
import { acousticGuitar } from './src/acousticGuitar.js'

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
recordIcon.src = './assets/Icons/microphone.png'
recordIcon.classList.add('timeline-section__control-panel__record')
recordIcon.addEventListener('click', event => {
	state.isRecording = !state.isRecording
	if (state.isRecording)
		recordIcon.classList = 'timeline-section__control-panel__record--active'
	if (!state.isRecording)
		recordIcon.classList = 'timeline-section__control-panel__record'
	state.lastInterval = Date.now()
})

const playIcon = document.createElement('img')
playIcon.src = './assets/Icons/play-button.png'
playIcon.classList.add('timeline-section__control-panel__play')
playIcon.addEventListener('click', event => {
	state.isRecording = false
	playSavedSounds(state)
})
const recordAndPlayIcons = document.createElement('div')
recordAndPlayIcons.appendChild(recordIcon)
recordAndPlayIcons.appendChild(playIcon)
controlPanel.appendChild(recordAndPlayIcons)

const removeSavedTrackIcon = document.createElement('img')
removeSavedTrackIcon.src = './assets/Icons/delete-photo.png'
removeSavedTrackIcon.classList.add('timeline-section__control-panel__remove')
removeSavedTrackIcon.addEventListener('click', event => {
	state.savedSounds = []
	savedSoundsSection.innerHTML = ''
})
controlPanel.appendChild(removeSavedTrackIcon)


const savedSoundsSection = document.createElement('div')
savedSoundsSection.classList.add('timeline-section__saved-sounds')
timelineSection.appendChild(savedSoundsSection)


function updateSavedSounds(obj) {
	const sound = {
		key: obj.key, audio: obj.audio, name: obj.name, currentTime: obj.currentTime,
	}
	state.savedSounds = [...state.savedSounds, sound]
}

const drumsButtons = Object.values(drums).map(obj => {
	return instrumentButton(obj, state, updateSavedSounds, savedSoundsSection)
})


const drumsSection = document.createElement('div')
drumsSection.classList.add('instruments-section__drums')
drumsButtons.forEach(drumButton => drumsSection.appendChild(drumButton))
const drumIcon = document.createElement('img')
drumIcon.src = './assets/Icons/drum.png'
drumIcon.classList.add('instruments-section__drums__icon')
drumsSection.appendChild(drumIcon)
instrumentsSection.appendChild(drumsSection)


const acousticGuitarButtons = Object.values(acousticGuitar).map(obj => {
	return instrumentButton(obj, state, updateSavedSounds, savedSoundsSection)
})

const acousticGuitarSection = document.createElement('div')
acousticGuitarSection.classList.add('instruments-section__acoustic-guitar')
acousticGuitarButtons.forEach(acousticSound => acousticGuitarSection.appendChild(acousticSound))
const acousticGuitarIcon = document.createElement('img')
acousticGuitarIcon.src = './assets/Icons/guitar.png'
acousticGuitarSection.appendChild(acousticGuitarIcon)
acousticGuitarIcon.classList.add('instruments-section__acoustic-guitar__icon')
instrumentsSection.appendChild(acousticGuitarSection)

const guitarLicksButtons = Object.values(guitarLicks).map(obj => {
	return instrumentButton(obj, state, updateSavedSounds, savedSoundsSection)
})

const guitarLicksSection = document.createElement('div')
guitarLicksSection.classList.add('instruments-section__guitar-licks')
guitarLicksButtons.forEach(guitarLick => guitarLicksSection.appendChild(guitarLick))
const electricGuitarIcon = document.createElement('img')
electricGuitarIcon.src = './assets/Icons/electric-guitar.png'
electricGuitarIcon.classList.add('instruments-section__guitar-licks__icon')
guitarLicksSection.appendChild(electricGuitarIcon)
instrumentsSection.appendChild(guitarLicksSection)

let i = -1
export function playSavedSounds() {
	i++
	if (i == state.savedSounds.length) {
		i = -1
		return
	}
	const playbackSound = state.savedSounds[i]
	const audioElem = playbackSound.audio.cloneNode()
	audioElem.load()
	setTimeout(() => {
		audioElem.play()

		playSavedSounds(state)
	}, playbackSound.currentTime)
}