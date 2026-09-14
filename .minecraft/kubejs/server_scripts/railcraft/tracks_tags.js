ServerEvents.tags('item', event => {

    const tracks = 
    [
        'iron',
        'abandoned',
        'strap_iron',
        'reinforced',
        'electric',
        'high_speed',
        'high_speed_electric'
    ]

    tracks.forEach(track =>{

        event.add('techboom:wye_traacks', 'railcraft:' + track + '_wye_track')

        event.add('techboom:turnout_tracks', 'railcraft:' + track + '_turnout_track')

    })
})