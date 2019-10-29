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
        name: 'OpenHiHat',
        sound: OpenHiHat,
        key: 'A',
        cssClassName: 'instruments-section__drums__openhihat',

    },
    {
        name: 'ClosedHiHat',
        sound: ClosedHiHat,
        key: 'S',
        cssClassName: 'instruments-section__drums__closedhihat',

    },
    {
        name: 'Ride',
        sound: Ride,
        key: 'D',
        cssClassName: 'instruments-section__drums__ride',
    },
    {
        name: 'Cymbal',
        sound: Cymbal,
        key: 'F',
        cssClassName: 'instruments-section__drums__cymbal',
    },
    {
        name: 'Snare',
        sound: Snare,
        key: 'G',
        cssClassName: 'instruments-section__drums__snare',

    },
    {
        name: 'Kick',
        sound: Kick,
        key: 'H',
        cssClassName: 'instruments-section__drums__kick',
    },
    {
        name: 'Clap',
        sound: Clap,
        key: 'J',
        cssClassName: 'instruments-section__drums__clap',

    },
    {
        name: 'Shaker',
        sound: Shaker,
        key: 'K',
        cssClassName: 'instruments-section__drums__shaker',
    },
]