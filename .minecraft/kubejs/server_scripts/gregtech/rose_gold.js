ServerEvents.recipes(event => {

    event.recipes.gtceu.alloy_smelter('techboom:gtceu_rose_gold')
    .itemInputs(
        '3x ' + 'minecraft:copper_ingot',
        '1x ' + 'minecraft:gold_ingot'
        )
    .itemOutputs(
        '2x gtceu:rose_gold_ingot')
    .duration(30)
    .EUt(15)
})