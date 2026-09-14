ServerEvents.recipes(event => {

    const forestry_packs = 
    [
        "miner",
        "digger",
        "forester",
        "hunter",
        "builder"
    ]

    forestry_packs.forEach(backpack => {

        event.replaceInput({id: "forestry:" + backpack + "_bag"},
        '#minecraft:wool',
        '#forge:string'
        )

        event.replaceInput({id: "forestry:" + backpack + "_bag"},
        '#forge:chests/wooden',
        'thermal:satchel'
        )
    })

})