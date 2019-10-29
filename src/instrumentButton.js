export function instrumentButton(title, sound, key, cssClassName = '', state, updateSavedSounds) {
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

    const playSound = (soundSource, updateSavedSounds, ) => {
        const audioElem = soundSource.cloneNode()

        if (state.isRecording) {
            const currentAudioInfo = {
                key,
                audio: soundSource,
                name: title,
                currentTime: Date.now() - state.lastInterval
            }
            updateSavedSounds(currentAudioInfo)
        }
        audioElem.pause()
        audioElem.currentTime = 0
        audioElem.load()
        audioElem.play()
        state.lastInterval = Date.now()
    }

    const toggleActive = () => {
        div.classList.toggleList(`${cssClassName}--title`)
    }

    div.addEventListener('mousedown', event => {
        div.className = `${cssClassName}--active`
        playSound(sound, updateSavedSounds)
    })

    div.addEventListener('mouseup', event => {
        div.className = `${cssClassName}`
    })

    document.body.addEventListener('keydown', event => {
        if (event.keyCode === key.charCodeAt(0)) {
            playSound(sound, updateSavedSounds)
            div.className = `${cssClassName}--active`
        }
    })

    document.body.addEventListener('keyup', event => {
        if (event.keyCode === key.charCodeAt(0)) {
            div.className = `${cssClassName}`
        }
    })

    return div
}

