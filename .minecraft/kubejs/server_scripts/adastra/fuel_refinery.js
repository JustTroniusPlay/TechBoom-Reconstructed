ServerEvents.recipes(event => {

    event.replaceInput(
    {id: "ad_astra:fuel_refinery"},
    "minecraft:furnace",
    "thermal:machine_refinery"
    )
    event.replaceInput(
    {id: "ad_astra:fuel_refinery"},
    "minecraft:bucket",
    "immersivetechnology:barrel_steel"
    )

})