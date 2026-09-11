ServerEvents.recipes(event => {

    event.replaceInput(
    {id: "ad_astra:coal_generator"},
    "minecraft:coal_block",
    "mekanism:ingot_osmium"
    )
    event.replaceInput(
    {id: "ad_astra:coal_generator"},
    "minecraft:iron_ingot",
    "create:iron_sheet"
    )
})