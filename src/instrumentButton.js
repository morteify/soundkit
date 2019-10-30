export function instrumentButton(obj, state, updateSavedSounds, targetOutput) {
	const { name, sound, key, color, cssClassName } = obj
	const div = document.createElement('div')
	div.classList.add(cssClassName)

	const nameElem = document.createElement('p')
	nameElem.innerHTML = name
	nameElem.classList.add(`${cssClassName}name`)
	div.appendChild(nameElem)

	const keyElem = document.createElement('p')
	keyElem.innerHTML = key
	keyElem.classList.add(`${cssClassName}__key`)
	div.appendChild(keyElem)

	const playSound = (soundSource, updateSavedSounds, ) => {
		const audioElem = new Audio(soundSource.src)

		if (state.isRecording) {
			const currentAudioInfo = {
				key,
				name,
				audio: soundSource,
				currentTime: Date.now() - state.lastInterval
			}
			targetOutput.innerHTML += '&nbsp'.repeat(Math.floor(currentAudioInfo.currentTime / 100))
			const visualBlock = document.createElement('div')
			visualBlock.style = `border-radius: 8px; width: 0.8rem; height: 8rem; background: ${color}`
			targetOutput.appendChild(visualBlock)

			updateSavedSounds(currentAudioInfo)
		}
		audioElem.pause()
		audioElem.currentTime = 0
		audioElem.load()
		audioElem.play()
		state.lastInterval = Date.now()
	}

	div.addEventListener('mousedown', event => {
		div.className = 'instruments-section__drums--active'
		playSound(sound, updateSavedSounds)
	})

	div.addEventListener('mouseup', event => {
		div.className = `${cssClassName}`
	})

	document.body.addEventListener('keydown', event => {
		if (event.keyCode === key.charCodeAt(0)) {
			playSound(sound, updateSavedSounds)
			div.className = 'instruments-section__drums--active'
		}
	})

	document.body.addEventListener('keyup', event => {
		if (event.keyCode === key.charCodeAt(0)) {
			div.className = `${cssClassName}`
		}
	})

	return div
}

