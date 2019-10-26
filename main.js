import { instrumentButton } from "./src/components/instrumentButton.js";

const instrumentsSection = document.querySelector('#instruments-section')

const instrumentButtonElement = instrumentButton('sound', 'example', 'instruments-section__example-button-element')

console.log(instrumentButtonElement)

instrumentsSection.appendChild(instrumentButtonElement)