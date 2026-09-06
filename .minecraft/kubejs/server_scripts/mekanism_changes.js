ServerEvents.recipes(event => {
event.remove({id: "mekanism:metallurgic_infuser"});
event.remove({id: "mekanism:rails"});
event.remove({id: "mekanism:paper"});

  event.replaceInput(
        {id: "mekanism:transmitter/mechanical_pipe/basic"},
        "#forge:ingots/steel",
        "gtceu:double_steel_plate"
    )
  event.replaceInput(
        {id: "mekanism:transmitter/mechanical_pipe/basic"},
        "minecraft:bucket",
        'thermal:obsidian_glass'
    )
    event.replaceInput(
        {id: "mekanismgenerators:generator/heat"},
        "mekanism:ingot_osmium",
        "minecraft:copper_ingot"
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

  event.remove({id: "mekanism:cardboard_box"});
  event.shaped(
  Item.of('mekanism:cardboard_box', 1), // arg 1: output
  [
    ' A ',
    'ABA', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'forestry:carton',
    B: 'create:bound_cardboard_block',  //arg 3: the mapping object
  })
})