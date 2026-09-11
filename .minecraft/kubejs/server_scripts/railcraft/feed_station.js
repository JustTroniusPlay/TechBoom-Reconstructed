ServerEvents.recipes(event => {

    event.replaceInput({id: "railcraft:feed_station"},
        'thermal:steel_plate',
        'thermal:bronze_gear'
    )
    event.replaceInput({id: "railcraft:feed_station"},
        'minecraft:golden_carrot',
        'minecraft:wheat'
    ) 
})