ServerEvents.recipes(event => {

  event.shaped(
  Item.of('mekanism:metallurgic_infuser', 1),
  [
    'ACA',
    'BDB',
    'AEA'
  ],
  {
    A: 'mekanism:ingot_osmium',
    B: 'thermal:rf_coil',
    C: 'tconstruct:smeltery_controller',
    D: 'mekanism:steel_casing',
    E: 'thermal:charge_bench'
  })

})