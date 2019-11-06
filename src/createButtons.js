import { instrumentButton } from './instrumentButton.js'

export function createButtons(instrument, state, updateSavedSounds, targetSection) {
	return Object.values(instrument).map(obj => {
		return instrumentButton(obj, state, updateSavedSounds, targetSection)
	})
}