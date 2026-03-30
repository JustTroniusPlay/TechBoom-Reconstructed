ServerEvents.recipes(event => {

    event.remove({id: "railcraft:fluid_fueled_firebox"});
    event.shaped(
  Item.of('railcraft:fluid_fueled_firebox', 1), // arg 1: output
  [
    'ABA',
    'CDC', // arg 2: the shape (array of strings)
    'AEA'
  ],
  {
    A: '#forge:plates/invar',
    B: 'gtceu:bronze_firebox_casing',  //arg 3: the mapping object
    C: 'minecraft:iron_bars',
    D: 'gtceu:invar_frame',
    E: 'gtceu:lp_steam_liquid_boiler'
  })

  event.remove({id: "railcraft:solid_fueled_firebox"});
    event.shaped(
  Item.of('railcraft:solid_fueled_firebox', 1), // arg 1: output
  [
    'ABA',
    'CDC', // arg 2: the shape (array of strings)
    'AEA'
  ],
  {
    A: 'tconstruct:seared_brick',
    B: 'gtceu:bronze_firebox_casing',  //arg 3: the mapping object
    C: '#forge:plates/invar',
    D: 'gtceu:invar_frame',
    E: 'gtceu:lp_steam_solid_boiler'
  })


})