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

    const playSound = soundElem => {
        const startTime = Date.now() / 1000
        const audio = soundElem.cloneNode()
        audio.addEventListener('loadedmetadata', event => {
            const duration = (Date.now() / 1000) - startTime
            updateSavedSounds({ key, audio, name: title, duration })
        })
        audio.load()
        audio.play()
        audio.remove()
    }

    div.addEventListener('click', event => playSound(sound))
    document.body.addEventListener('keydown', event => {
        if (event.keyCode === key.charCodeAt(0)) {
            playSound(sound)
        }
    })



    return div
}