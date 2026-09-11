ServerEvents.tags('item', event => {

    event.add("forge:raw_materials/aluminum","gtceu:raw_bauxite");
    event.add("forge:raw_materials/aluminum","crusty_chunks:bauxite");
})

ServerEvents.recipes(event => {

    event.replaceOutput(
        {id: "gtceu:blasting/smelt_raw_bauxite_ore_to_ingot"},
        '#forge:dusts/bauxite',
        'immersiveengineering:ingot_aluminum'
    )
    event.replaceOutput(
        {id: "gtceu:smelting/smelt_raw_bauxite_ore_to_ingot"},
        '#forge:dusts/bauxite',
        'immersiveengineering:ingot_aluminum'
    )

    event.smelting('immersiveengineering:ingot_aluminum', '#forge:dusts/bauxite');
    event.blasting('immersiveengineering:ingot_aluminum', '#forge:dusts/bauxite');

})