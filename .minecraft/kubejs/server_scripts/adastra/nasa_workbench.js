ServerEvents.recipes(event => {

    event.replaceInput(
    {id: "ad_astra:nasa_workbench"},
    "immersiveengineering:stick_iron",
    "gtceu:lv_robot_arm"
    )
    event.replaceInput(
    {id: "ad_astra:nasa_workbench"},
    "minecraft:redstone_torch",
    'immersive_machinery:redstone_mechanism'
    )
    event.replaceInput(
    {id: "ad_astra:nasa_workbench"},
    "minecraft:crafting_table",
    'create:mechanical_crafter'
    )
    event.replaceInput(
    {id: "ad_astra:nasa_workbench"},
    "thermal:steel_block",
    'gtceu:steel_gearbox'
    )
})