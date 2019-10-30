const Clap = new Audio('../../../assets/Drums/clap.WAV')
const OpenHiHat = new Audio('../../../assets/Drums/openhihat.WAV')
const ClosedHiHat = new Audio('../../../assets/Drums/closedhihat.WAV')
const Snare = new Audio('../../../assets/Drums/snare.WAV')
const Kick = new Audio('../../../assets/Drums/kick.WAV')
const Shaker = new Audio('../../../assets/Drums/shaker.WAV')
const Ride = new Audio('../../../assets/Drums/ride.WAV')
const Cymbal = new Audio('../../../assets/Drums/cymbal.WAV')

const color = '#f7567c'

export const drums = [
	{
		name: 'Open HiHat',
		sound: OpenHiHat,
		key: 'Q',
		cssClassName: 'instruments-section__drums__openhihat',
		color
	},
	{
		name: 'Closed HiHat',
		sound: ClosedHiHat,
		key: 'W',
		cssClassName: 'instruments-section__drums__closedhihat',
		color
	},
	{
		name: 'Ride',
		sound: Ride,
		key: 'E',
		cssClassName: 'instruments-section__drums__ride',
		color
	},
	{
		name: 'Cymbal',
		sound: Cymbal,
		key: 'R',
		cssClassName: 'instruments-section__drums__cymbal',
		color
	},
	{
		name: 'Snare',
		sound: Snare,
		key: 'T',
		cssClassName: 'instruments-section__drums__snare',
		color
	},
	{
		name: 'Kick',
		sound: Kick,
		key: 'Y',
		cssClassName: 'instruments-section__drums__kick',
		color
	},
	// {
	// 	name: 'Clap',
	// 	sound: Clap,
	// 	key: 'J',
	// 	cssClassName: 'instruments-section__drums__clap',
	// 	color
	// },
	{
		name: 'Shaker',
		sound: Shaker,
		key: 'U',
		cssClassName: 'instruments-section__drums__shaker',
		color
	},
]