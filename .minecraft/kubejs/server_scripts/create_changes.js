ServerEvents.recipes(event => {

  event.remove({id: "fluid:copper_tap"});
  event.remove({id: "fluid:copper_sink"});

    event.remove({id: "create:crafting/kinetics/mechanical_press"});
    event.shaped(
  Item.of('create:mechanical_press', 1), // arg 1: output
  [
    ' A ',
    ' B ', // arg 2: the shape (array of strings)
    ' C '
  ],
  {
    A: 'create:shaft',
    B: 'create:andesite_casing',  //arg 3: the mapping object
    C: 'thermal:steel_block'
  }
)

    event.remove({id: "create:crafting/kinetics/large_water_wheel"});
    event.shaped(
  Item.of('create:large_water_wheel', 1), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: '#forge:treated_wood',
    B: 'create:water_wheel'  //arg 3: the mapping object
  }
)

event.recipes.create.mechanical_crafting('create_sa:andesite_exoskeleton_chestplate', 
  [
  "ABCBA",
  "AADAA",
  "FEAEF"
  ], {
    A: 'create:andesite_alloy',
    B: 'create:shaft',
    C: 'create:belt_connector',
    D: 'create_sa:heat_engine',
    E: '#c:ingots/zinc',
    F: '#forge:stone'
  })

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
    E: 'tfmg:capacitor_item'
  })

  event.remove({id: "create:crafting/kinetics/fluid_tank"});
  event.remove({id: "create_connected:crafting/kinetics/fluid_vessel"});
  event.shaped(
  Item.of('create:fluid_tank', 1), // arg 1: output
  [
    ' A ',
    'BCB', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'create:copper_sheet',
    B: '#forge:glass_panes',  //arg 3: the mapping object
    C: 'immersiveengineering:wooden_barrel'
  })
  event.shaped(
  Item.of('create_connected:fluid_vessel', 1), // arg 1: output
  [
    ' B ',
    'ACA', // arg 2: the shape (array of strings)
    ' B '
  ],
  {
    A: 'create:copper_sheet',
    B: '#forge:glass_panes',  //arg 3: the mapping object
    C: 'immersiveengineering:wooden_barrel'
  })

  const fluid_tanks = ['aluminum', 'cast_iron', 'steel']
  fluid_tanks.forEach(tank =>
    {
      event.remove({id: "tfmg:crafting/kinetics/" + tank + "_fluid_tank"});
      event.shaped(
      Item.of('tfmg:' + tank +'_fluid_tank', 1), // arg 1: output
      [
        ' A ',
        'BCB', // arg 2: the shape (array of strings)
        ' A '
      ],
      {
        A: '#forge:plates/' + tank,
        B: '#forge:glass_panes',  //arg 3: the mapping object
        C: 'immersiveengineering:wooden_barrel'
      })
    })

  event.remove({id: "create_new_age:shaped/electrical_connector_mirrored"});
  event.remove({id: "create_new_age:shaped/electrical_connector"});
  event.shaped(
  Item.of('create_new_age:electrical_connector', 2), // arg 1: output
  [
    ' A ',
    'BCB', // arg 2: the shape (array of strings)
    'CDC'
  ],
  {
    A: '#forge:nuggets/silver',
    B: 'create:copper_sheet',  //arg 3: the mapping object
    C: 'create:andesite_alloy',
    D: 'minecraft:smooth_basalt'
  })

  event.replaceInput({id: "tfmg:crafting/kinetics/accumulatorfrom_lithium"},
    "tfmg:industrial_aluminum_casing",
    ["tfmg:industrial_aluminum_casing","immersiveengineering:capacitor_lv"]
  )
})