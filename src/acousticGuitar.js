const A2A3 = new Audio('../assets/AcousticGuitar/A2A3.wav')
const A3 = new Audio('../assets/AcousticGuitar/A3.wav')
const B2 = new Audio('../assets/AcousticGuitar/B2.wav')
const B3 = new Audio('../assets/AcousticGuitar/B3.wav')
const B3B4 = new Audio('../assets/AcousticGuitar/B3B4.wav')
const B4 = new Audio('../assets/AcousticGuitar/B4.wav')
const Csharp3 = new Audio('../assets/AcousticGuitar/Csharp3.wav')

const color = '#62d6c9'

export const acousticGuitar = [
	{
		name: 'Acoustic 1',
		sound: A2A3,
		key: 'A',
		cssClassName: 'instruments-section__acoustc-guitar__A2A3',
		color
	},
	{
		name: 'Acoustic 2',
		sound: A3,
		key: 'S',
		cssClassName: 'instruments-section__acoustc-guitar__A3',
		color
	},
	{
		name: 'Acoustic 3',
		sound: B2,
		key: 'D',
		cssClassName: 'instruments-section__acoustc-guitar__B2',
		color
	},
	{
		name: 'Acoustic 4',
		sound: B3,
		key: 'F',
		cssClassName: 'instruments-section__acoustc-guitar__B3',
		color
	},
	{
		name: 'Acoustic 5',
		sound: B3B4,
		key: 'G',
		cssClassName: 'instruments-section__acoustc-guitar__B3B4',
		color
	},
	{
		name: 'Acoustic 6',
		sound: B4,
		key: 'H',
		cssClassName: 'instruments-section__acoustc-guitar__B4',
		color
	},
	{
		name: 'Acoustic 7',
		sound: Csharp3,
		key: 'J',
		cssClassName: 'instruments-section__acoustc-guitar__Csharp3',
		color
	},
]