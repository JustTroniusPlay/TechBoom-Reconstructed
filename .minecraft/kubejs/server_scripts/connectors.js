ServerEvents.recipes(event => {

    event.remove({id: "create_better_motors:crafting/heavy_connector"});
    /*event.remove({id: "createaddition:crafting/large_connector_electrum"});
    event.remove({id: "createaddition:crafting/large_connector_gold"});
    event.remove({id: "create_new_age:shaped/electrical_connector_mirrored"});
    event.remove({id: "create_new_age:shaped/electrical_connector"});
    event.remove({id: "createaddition:crafting/small_connector_copper"});


    event.replaceInput(
    {id: "createaddition:crafting/small_light_connector"},
    "createaddition:connector",
    'immersiveengineering:connector_mv'
    )
    
    event.replaceInput(
    {id: "create_better_motors:crafting/heavy_connector"},
    "createaddition:large_connector",
    'immersiveengineering:connector_hv_relay'
    )

    /*event.replaceInput(
    {id: "createaddition:crafting/redstone_relay"},
    "createaddition:connector",
    'immersiveengineering:connector_mv'
    )*/
})
