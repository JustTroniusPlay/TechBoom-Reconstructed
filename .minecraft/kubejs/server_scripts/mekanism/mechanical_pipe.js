ServerEvents.recipes(event => {

    event.replaceInput({id: "mekanism:transmitter/mechanical_pipe/basic"},
        "#forge:ingots/steel",
        "gtceu:double_steel_plate"
    )
    event.replaceInput({id: "mekanism:transmitter/mechanical_pipe/basic"},
        "minecraft:bucket",
        'thermal:obsidian_glass'
    )
})