export function createIcon(iconSrc, cssClassName='' ) {
	const icon = document.createElement('img')
	icon.src = iconSrc
	icon.classList.add(cssClassName)
	return icon
}