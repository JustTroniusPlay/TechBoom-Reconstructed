ServerEvents.recipes(event => {

    event.replaceInput(
        {id: "gtceu:shaped/steam_boiler_solar_bronze"},
        "#forge:glass",
        "#forge:glass_panes"
    )

    event.replaceInput(
        {id: "gtceu:shaped/steam_boiler_lava_bronze"},
        "#forge:glass",
        "#forge:glass_panes"
    )

    event.replaceInput(
        {id: "gtceu:shaped/steam_boiler_solar_steel"},
        "minecraft:glass",
        "#forge:glass"
    )

    event.replaceInput(
        {id: "gtceu:shaped/steam_boiler_lava_steel"},
        "minecraft:glass",
        "#forge:glass"
    )

    
})