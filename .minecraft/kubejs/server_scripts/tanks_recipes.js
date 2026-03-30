ServerEvents.recipes(event => {

  //Mekanism Tanks
  {
  event.remove({id: "mekanism:fluid_tank/basic"});
    event.shaped(
  Item.of('mekanism:basic_fluid_tank', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'mekanism:alloy_infused',
    B: '#forge:ingots/steel',  //arg 3: the mapping object
    C: 'immersiveengineering:metal_barrel'
  })

   event.remove({id: "mekanism:fluid_tank/advanced"});
    event.shaped(
  Item.of('mekanism:advanced_fluid_tank', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'mekanism:alloy_infused',
    B: 'thermal:signalum_ingot',  //arg 3: the mapping object
    C: 'mekanism:basic_fluid_tank'
  })

  event.remove({id: "mekanism:fluid_tank/elite"});
    event.shaped(
  Item.of('mekanism:elite_fluid_tank', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'mekanism:alloy_reinforced',
    B: 'thermal:enderium_ingot',  //arg 3: the mapping object
    C: 'mekanism:advanced_fluid_tank'
  })

  event.remove({id: "mekanism:fluid_tank/ultimate"});
    event.shaped(
  Item.of('mekanism:ultimate_fluid_tank', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'mekanism:alloy_atomic',
    B: 'create:sturdy_sheet',  //arg 3: the mapping object
    C: 'mekanism:elite_fluid_tank'
  })

  event.remove({id: "mekanism_extras:fluid_tank/absolute"});
    event.shaped(
  Item.of('mekanism_extras:absolute_fluid_tank', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'mekanism_extras:alloy_radiance',
    B: 'thermal:lumium_ingot',  //arg 3: the mapping object
    C: 'mekanism:ultimate_fluid_tank'
  })

  event.remove({id: "mekanism_extras:fluid_tank/supreme"});
    event.shaped(
  Item.of('mekanism_extras:supreme_fluid_tank', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'mekanism_extras:alloy_thermonuclear',
    B: 'enderio:redstone_alloy_ingot',  //arg 3: the mapping object
    C: 'mekanism_extras:absolute_fluid_tank'
  })

  event.remove({id: "mekanism_extras:fluid_tank/cosmic"});
    event.shaped(
  Item.of('mekanism_extras:cosmic_fluid_tank', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'mekanism_extras:alloy_shining',
    B: 'create:refined_radiance',  //arg 3: the mapping object
    C: 'mekanism_extras:supreme_fluid_tank'
  })

  event.remove({id: "mekanism_extras:fluid_tank/infinite"});
    event.shaped(
  Item.of('mekanism_extras:infinite_fluid_tank', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'mekanism_extras:alloy_spectrum',
    B: 'gtceu:neutronium_ingot',  //arg 3: the mapping object
    C: 'mekanism_extras:cosmic_fluid_tank'
  })

  }

  

  //Iron Tank
{
    event.remove({id: "railcraft:iron_tank_gauge"});
    event.shaped(
  Item.of('railcraft:white_iron_tank_gauge', 12), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'tconstruct:clear_glass',
    B: 'create:iron_sheet',  //arg 3: the mapping object
    C: 'thermal:obsidian_glass'
  })

  event.remove({id: "railcraft:iron_tank_valve"});
    event.shaped(
  Item.of('railcraft:white_iron_tank_valve', 2), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'immersiveengineering:sheetmetal_iron',
    B: 'gtceu:tin_alloy_normal_fluid_pipe',  //arg 3: the mapping object
    C: 'create:portable_fluid_interface'
  })

  event.remove({id: "railcraft:iron_tank_wall"});
    event.shaped(
  Item.of('railcraft:white_iron_tank_wall', 8), // arg 1: output
  [
    ' B ',
    'BCB', // arg 2: the shape (array of strings)
    ' B '
  ],
  {
    B: 'gtceu:double_iron_plate',  //arg 3: the mapping object
    C: 'create:fluid_tank'
  })
}

//Steel Tank
{
  event.remove({id: "railcraft:steel_tank_gauge"});
    event.shaped(
  Item.of('railcraft:white_steel_tank_gauge', 12), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'tconstruct:clear_glass',
    B: 'thermal:steel_plate',  //arg 3: the mapping object
    C: 'thermal:obsidian_glass'
  })

  event.remove({id: "railcraft:steel_tank_valve"});
    event.shaped(
  Item.of('railcraft:white_steel_tank_valve', 4), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'immersiveengineering:sheetmetal_steel',
    B: 'gtceu:steel_normal_fluid_pipe',  //arg 3: the mapping object
    C: 'gtceu:steel_tank_valve'
  })

  event.remove({id: "railcraft:steel_tank_wall"});
    event.shaped(
  Item.of('railcraft:white_steel_tank_wall', 8), // arg 1: output
  [
    ' B ',
    'BCB', // arg 2: the shape (array of strings)
    ' B '
  ],
  {
    B: 'gtceu:double_steel_plate',  //arg 3: the mapping object
    C: 'create:fluid_tank'
  })
}

//Mekanism Dynamic Tank
{
    event.remove({id: "mekanism:dynamic_tank"});
    event.remove({id: "mekanism:dynamic_valve"});
    event.remove({id: "mekanism:structural_glass"});

    event.shaped(
  Item.of('mekanism:structural_glass', 4), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'gtceu:laminated_glass',
    B: 'gtceu:double_tungsten_steel_plate',  //arg 3: the mapping object
    C: 'thermal:enderium_glass'
  })

  event.shaped(
  Item.of('mekanism:dynamic_valve', 4), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'gtceu:robust_machine_casing',
    B: 'gtceu:tungsten_steel_large_fluid_pipe',  //arg 3: the mapping object
    C: '#railcraft:steel_tank_valve'
  })

  event.shaped(
  Item.of('mekanism:dynamic_tank', 4), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'gtceu:inert_machine_casing',
    B: 'gtceu:double_tungsten_steel_plate',  //arg 3: the mapping object
    C: 'mekanism:ultimate_fluid_tank'
  })
}

})