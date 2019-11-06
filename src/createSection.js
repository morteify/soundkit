export function createSection(name, buttons, icon=null) {
	const section = document.createElement('div')
	const cssClassName = `instruments-section__${name}`
	section.classList.add(cssClassName)
	buttons.forEach(button => section.appendChild(button))
	icon && section.appendChild(icon)
	return section
}