ServerEvents.recipes(event => {
event.remove({id: "mekanism:metallurgic_infuser"});

  event.replaceInput(
        {id: "mekanism:transmitter/mechanical_pipe/basic"},
        "#c:ingots/steel",
        "gtceu:double_steel_plate"
    )
  event.replaceInput(
        {id: "mekanism:transmitter/mechanical_pipe/basic"},
        "minecraft:bucket",
        'thermal:obsidian_glass'
    )

    event.shaped(
  Item.of('mekanism:metallurgic_infuser', 1), // arg 1: output
  [
    'ACA',
    'BDB', // arg 2: the shape (array of strings)
    'AEA'
  ],
  {
    A: 'mekanism:ingot_osmium',
    B: 'thermal:rf_coil',  //arg 3: the mapping object
    C: 'tconstruct:smeltery_controller',
    D: 'mekanism:steel_casing',
    E: 'thermal:charge_bench'
  })

})