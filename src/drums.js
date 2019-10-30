const Clap = new Audio('../../../assets/Drums/clap.WAV')
const OpenHiHat = new Audio('../../../assets/Drums/openhihat.WAV')
const ClosedHiHat = new Audio('../../../assets/Drums/closedhihat.WAV')
const Snare = new Audio('../../../assets/Drums/snare.WAV')
const Kick = new Audio('../../../assets/Drums/kick.WAV')
const Shaker = new Audio('../../../assets/Drums/shaker.WAV')
const Ride = new Audio('../../../assets/Drums/ride.WAV')
const Cymbal = new Audio('../../../assets/Drums/cymbal.WAV')

export const drums = [
	{
		name: 'Open HiHat',
		sound: OpenHiHat,
		key: 'Q',
		cssClassName: 'instruments-section__drums__openhihat',
		color: '#f7567c'
	},
	{
		name: 'Closed HiHat',
		sound: ClosedHiHat,
		key: 'W',
		cssClassName: 'instruments-section__drums__closedhihat',
		color: '#f7567c'
	},
	{
		name: 'Ride',
		sound: Ride,
		key: 'E',
		cssClassName: 'instruments-section__drums__ride',
		color: '#f7567c'
	},
	{
		name: 'Cymbal',
		sound: Cymbal,
		key: 'R',
		cssClassName: 'instruments-section__drums__cymbal',
		color: '#f7567c'
	},
	{
		name: 'Snare',
		sound: Snare,
		key: 'T',
		cssClassName: 'instruments-section__drums__snare',
		color: '#f7567c'
	},
	{
		name: 'Kick',
		sound: Kick,
		key: 'Y',
		cssClassName: 'instruments-section__drums__kick',
		color: '#f7567c'
	},
	// {
	// 	name: 'Clap',
	// 	sound: Clap,
	// 	key: 'J',
	// 	cssClassName: 'instruments-section__drums__clap',
	// 	color: '#f7567c'
	// },
	{
		name: 'Shaker',
		sound: Shaker,
		key: 'U',
		cssClassName: 'instruments-section__drums__shaker',
		color: '#f7567c'
	},
]