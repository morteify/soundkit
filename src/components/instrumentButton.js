export function instrumentButton(title, sound, key, cssClassName) {
    const div = document.createElement('div')
    div.classList.add(cssClassName)
    const titleElem = document.createElement('p')
    titleElem.classList.add(`${cssClassName}__title`)
    div.appendChild(titleElem)

    const playSound = sound => sound.play()

    div.addEventListener('click', event => playSound(sound))
    document.body.addEventListener('keydown', event => {
        if (event.keyCode === key.charCodeAt(0)) {
            playSound(sound)
        }
    })
    return div
}