export function instrumentButton(title, sound, key, cssClassName = '', updateSavedSounds) {
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

    const playSound = (updateSavedSounds) => {
        const soundSource = document.querySelector(`#${cssClassName}`)
        soundSource.pause()
        soundSource.currentTime = 0
        soundSource.play()
        updateSavedSounds({ key, audio: sound, name: title, timestamp: Date.now() })

    }

    div.addEventListener('click', event => playSound(sound))
    document.body.addEventListener('keydown', event => {
        if (event.keyCode === key.charCodeAt(0)) {
            playSound(sound, updateSavedSounds)
        }
    })

    return div
}


