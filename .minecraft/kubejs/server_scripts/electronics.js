ServerEvents.recipes(event => {

  event.remove({id: "integrateddynamics:crafting/energy_battery"});
  
  {//Connectors
  event.remove({id: "create_better_motors:crafting/heavy_connector"});
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
  }

  {//Accums
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

  event.replaceInput({id: "tfmg:crafting/kinetics/accumulatorfrom_lithium"},
    "tfmg:industrial_aluminum_casing",
    ["tfmg:industrial_aluminum_casing","immersiveengineering:capacitor_lv"]
  )
  }

  {//RF augments
  event.remove({id: "thermal:augments/rf_coil_xfer_augment"}); 
  event.shaped(
  Item.of('thermal:rf_coil_xfer_augment', 1), // arg 1: output
  [
    'ACA',
    'BDB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'create:brass_sheet',
    B: 'railcraft:silver_electrode',  //arg 3: the mapping object
    C: 'immersiveengineering:coil_mv',
    D: 'thermal:flux_capacitor'
  })

  event.remove({id: "thermal:augments/rf_coil_augment"}); 
  event.shaped(
  Item.of('thermal:rf_coil_augment', 1), // arg 1: output
  [
    'ACA',
    'BDB', // arg 2: the shape (array of strings)
    'ACA'
  ],
  {
    A: 'thermal:steel_plate',
    B: 'railcraft:gold_electrode',  //arg 3: the mapping object
    C: 'gtceu:double_electrum_plate',
    D: 'immersiveengineering:coil_hv'
  })

  event.remove({id: "thermal:augments/rf_coil_storage_augment"}); 
  event.shaped(
  Item.of('thermal:rf_coil_storage_augment', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'thermal:steel_plate',
    B: 'thermal:signalum_ingot',  //arg 3: the mapping object
    C: 'immersiveengineering:coil_hv'
  })
  }

})