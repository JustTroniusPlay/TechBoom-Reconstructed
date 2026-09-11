ServerEvents.recipes(event => {

  event.remove({id: "thermal:machine_smelter"});
  event.shaped(
  Item.of('thermal:machine_smelter', 1), 
  [
    ' A ',
    'BCF', 
    'DED'
  ],
  {
    A: 'immersiveengineering:furnace_heater',
    B: 'gtceu:steam_oven',  
    C: 'thermal:machine_frame',
    D: 'thermal:invar_gear',
    E: 'thermal:rf_coil',
    F: 'steamadditions:steam_foundry'
  })

})