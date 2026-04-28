ServerEvents.recipes(event => {

    event.replaceOutput(
        {id: "gtceu:blasting/smelt_raw_bauxite_ore_to_ingot"},
        "gtceu:bauxite_dust",
        'immersiveengineering:ingot_aluminum'
    )
    event.replaceOutput(
        {id: "gtceu:smelting/smelt_raw_bauxite_ore_to_ingot"},
        "gtceu:bauxite_dust",
        'immersiveengineering:ingot_aluminum'
    )

    event.smelting('immersiveengineering:ingot_aluminum', 'gtceu:bauxite_dust');
    event.blasting('immersiveengineering:ingot_aluminum', 'gtceu:bauxite_dust');

    event.custom({
        "type": "tconstruct:ore_melting",
        "ingredient": 
        {
            "item": 'gtceu:raw_bauxite'
        },
        "rate": "metal",
        "result": 
        {
        "amount": 44,
        "tag": "forge:molten_aluminum" 
        },
        "temperature": 425,
        "time": 17
        })
})