import { drums } from './src/drums.js'
import { guitarLicks } from './src/guitarLicks.js'
import { acousticGuitar } from './src/acousticGuitar.js'
import { createSection } from './src/createSection.js'
import { createIcon } from './src/createIcon.js'
import { createButtons } from './src/createButtons.js'

const instrumentsSection = document.querySelector('#instruments-section')
const timelineSection = document.querySelector('#timeline-section')

const state = {
	isRecording: false,
	lastInterval: 0,
	savedSounds: []
}

// CONTROL PANEL
const controlPanel = document.createElement('div')
controlPanel.classList.add('timeline-section__control-panel')
timelineSection.appendChild(controlPanel)

const recordIconCssName = 'timeline-section__control-panel__record'
const recordIcon = createIcon('./assets/Icons/microphone.png', recordIconCssName)
recordIcon.addEventListener('click', () => {
	state.isRecording = !state.isRecording
	if (state.isRecording)
		recordIcon.classList = `${recordIconCssName}--active`
	if (!state.isRecording)
		recordIcon.classList = recordIconCssName
	state.lastInterval = Date.now()
})

const playIcon = createIcon('./assets/Icons/play-button.png', 'timeline-section__control-panel__play')
playIcon.addEventListener('click', () => {
	state.isRecording = false
	playSavedSounds(state)
})
const recordAndPlayIcons = document.createElement('div')
recordAndPlayIcons.appendChild(recordIcon)
recordAndPlayIcons.appendChild(playIcon)
controlPanel.appendChild(recordAndPlayIcons)

const removeSavedTrackIcon = createIcon('./assets/Icons/delete-photo.png', 'timeline-section__control-panel__remove')
removeSavedTrackIcon.addEventListener('click', () => {
	state.savedSounds = []
	savedSoundsSection.innerHTML = ''
})
controlPanel.appendChild(removeSavedTrackIcon)

// SAVE SOUNDS
const savedSoundsSection = document.createElement('div')
savedSoundsSection.classList.add('timeline-section__saved-sounds')
timelineSection.appendChild(savedSoundsSection)

function updateSavedSounds(obj) {
	const sound = {
		key: obj.key, audio: obj.audio, name: obj.name, currentTime: obj.currentTime,
	}
	state.savedSounds = [...state.savedSounds, sound]
}

// DRUMS SECTION
const drumsButtons = createButtons(drums, state, updateSavedSounds, savedSoundsSection)
const drumsIcon = createIcon('./assets/Icons/drum.png', 'instruments-section__drums')
const drumsSection = createSection('drums', drumsButtons, drumsIcon)
instrumentsSection.appendChild(drumsSection)

// ACOUSTIC GUITAR SECTION
const acousticGuitarButtons = createButtons(acousticGuitar, state, updateSavedSounds, savedSoundsSection)
const acousticGuitarIcon = createIcon('./assets/Icons/guitar.png', 'instruments-section__acoustic-guitar')
const acousticGuitarSection = createSection('acoustic-guitar', acousticGuitarButtons, acousticGuitarIcon)
instrumentsSection.appendChild(acousticGuitarSection)

// GUITAR LICKS SECTION
const guitarLicksButtons = createButtons(guitarLicks, state, updateSavedSounds, savedSoundsSection)
const guitarLicksIcon = createIcon('./assets/Icons/electric-guitar.png', 'instruments-section__guitar-licks')
const guitarLicksSection = createSection('guitar-licks', guitarLicksButtons, guitarLicksIcon)
instrumentsSection.appendChild(guitarLicksSection)

// PLAY SAVED SOUNDS
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




