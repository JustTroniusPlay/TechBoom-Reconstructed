ServerEvents.recipes(event => {

    //Brass Accum
    event.remove({id: "createaddition:crafting/modular_accumulator_gold"});
    event.remove({id: "createaddition:crafting/modular_accumulator_electrum"});
    event.shaped(
    Item.of('createaddition:modular_accumulator', 1), // arg 1: output
    [
        'DAD',
        'EBE', // arg 2: the shape (array of strings)
        'DCD'
    ],
    {
        A: '#forge:rods/gold',
        B: 'immersiveengineering:capacitor_mv',  //arg 3: the mapping object
        C: 'immersiveengineering:wire_electrum',
        D: 'create:brass_sheet',
        E: 'createaddition:capacitor'//'tfmg:capacitor_item'
    })

    //Lithium (Legacy for now)
    event.replaceInput({id: "tfmg:crafting/kinetics/accumulatorfrom_lithium"},
        "tfmg:industrial_aluminum_casing",
        ["tfmg:industrial_aluminum_casing","immersiveengineering:capacitor_lv"]
    )
  

})