ServerEvents.recipes(event => {

    event.remove({id: "mekanism:transmitter/universal_cable/basic"});
    event.shaped(
    Item.of('mekanism:basic_universal_cable', 8), // arg 1: output
    [
        'BBB',
        'CAC',
        'BBB'
    ],
    {
        A: 'thermal:energy_duct',
        B: ['immersiveengineering:wirecoil_steel','create_new_age:overcharged_diamond_wire'],  //arg 3: the mapping object
        C: 'mekanism:basic_control_circuit'
    })

})