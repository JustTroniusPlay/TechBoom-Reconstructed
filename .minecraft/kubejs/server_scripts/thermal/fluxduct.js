ServerEvents.recipes(event => {

    //Fluxduct
    event.remove({id: "thermal:energy_duct_4"});
    event.shaped(
        Item.of('thermal:energy_duct', 8), // arg 1: output
        [
        'BCB',
        'AAA', // arg 2: the shape (array of strings)
        'BCB'
        ],
        {
        A: 'minecraft:redstone',
        B: 'thermal:lead_plate',  //arg 3: the mapping object
        C: 'immersiveengineering:wire_electrum'
        }
    )
})