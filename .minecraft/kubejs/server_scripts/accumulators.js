ServerEvents.recipes(event => {

  event.remove({id: "integrateddynamics:crafting/energy_battery"});
  event.remove({id: "thermal:storage/coal_coke_from_block"});

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

})