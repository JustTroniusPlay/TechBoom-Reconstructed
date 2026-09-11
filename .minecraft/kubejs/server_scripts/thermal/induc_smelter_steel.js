ServerEvents.recipes(event => {

    event.replaceInput(
        {id: "thermal:machines/smelter/smelter_alloy_steel"},
        "#forge:coal_coke",
        "thermal:coal_coke"
    )
    event.replaceInput(
        {id: "thermal:machines/smelter/smelter_alloy_steel"},
        "minecraft:iron_ingot",
        "#forge:dusts/iron"
    )
    event.replaceOutput(
        {id: "thermal:machines/press/unpacking/press_coal_coke_unpacking"},
        'thermal:coal_coke',
        'immersiveengineering:coal_coke'
    )
})