ServerEvents.recipes(event => {

    event.replaceInput({id: "thermal:tinker_bench"},
        "#minecraft:planks",
        "#forge:treated_wood"
    )
    event.replaceInput({id: "thermal:tinker_bench"},
        "thermal:rf_coil",
        "immersiveengineering:charging_station"
    )
    event.replaceInput({id: "thermal:tinker_bench"},
        "minecraft:iron_ingot",
        "thermal:steel_plate"
    )
})