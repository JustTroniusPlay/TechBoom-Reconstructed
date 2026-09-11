ServerEvents.recipes(event => {

    event.recipes.gtceu.alloy_smelter('techboom:gtceu_glass_panes')
    .itemInputs(
        '1x ' + 'gtceu:tiny_flint_dust',
        '1x ' + 'gtceu:quartz_sand_dust'
        )
    .itemOutputs(
        '1x minecraft:glass_pane')
    .duration(30)
    .EUt(15)
})