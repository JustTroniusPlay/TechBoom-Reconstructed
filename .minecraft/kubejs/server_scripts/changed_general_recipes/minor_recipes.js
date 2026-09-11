

ServerEvents.recipes(event => {

    event.remove({id: "regions_unexplored:redstone_from_blasting_raw_redstone_block"});

    event.remove({id: "regions_unexplored:redstone_from_smelting_raw_redstone_block"});

    event.replaceInput(
        {id: "adpother:aerometer"},
        'minecraft:comparator',
        'minecraft:repeater'
    )
})