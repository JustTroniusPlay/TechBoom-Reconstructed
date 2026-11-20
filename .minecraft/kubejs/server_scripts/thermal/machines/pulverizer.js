ServerEvents.recipes(event => {

  event.remove({id: "thermal:machine_pulverizer"});
    event.shaped(
  Item.of('thermal:machine_pulverizer', 1), 
  [
    ' A ',
    'CBC', 
    'DED'
  ],
  {
    A: 'gtceu:lp_steam_macerator',
    B: 'thermal:machine_frame', 
    C: 'gtceu:steel_buzz_saw_blade',
    D: 'thermal:copper_gear',
    E: 'thermal:rf_coil'
})

event.recipes.thermal.sawmill('gtceu:steel_buzz_saw_blade', '#forge:gears/steel')
})