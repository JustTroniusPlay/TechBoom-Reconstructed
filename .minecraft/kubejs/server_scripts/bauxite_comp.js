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

    /*event.custom({
        "type": "tconstruct:ore_melting",
        "byproducts": 
        [{
            "amount": 90,
            "rate": "metal",
            "tag": "forge:molten_aluminum"
        }],
        "ingredient": 
        {
            "item": 'gtceu:raw_bauxite'
        },
        "rate": "metal",
        "result": 
        {
        "amount": 90,
        "tag": "forge:molten_aluminum" 
        },
        "temperature": 425,
        "time": 17
        })*/

        //"forge:raw_materials/aluminum"
})