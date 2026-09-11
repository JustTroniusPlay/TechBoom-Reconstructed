ServerEvents.recipes(event => {

    event.replaceInput({id: "thermal:device_collector"},
    "minecraft:hopper",
    'immersive_machinery:redstone_mechanism'
    )

    event.replaceInput({id: "thermal:device_collector"},
    "minecraft:ender_pearl",
    'expandingtechnologies:item_vacuum'
    )

    event.replaceInput({id: "thermal:device_collector"},
    "thermal:redstone_servo",
    'immersiveengineering:electromagnet'
    )

    event.replaceInput({id: "thermal:device_collector"},
    "#forge:glass",
    'thermal:enderium_glass'
    )

    event.replaceInput({id: "thermal:device_collector"},
    "#forge:ingots/tin",
    'minecraft:echo_shard'
    )
})