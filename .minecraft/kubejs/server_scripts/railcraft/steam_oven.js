ServerEvents.recipes(event => {

  event.remove({id: "railcraft:steam_oven"});
  event.shaped(
  Item.of('railcraft:steam_oven', 8),
  [
    'ACA',
    'DED',
    'BCB'
  ],
  {
    A: 'gtceu:steel_machine_casing',
    B: 'gtceu:solid_machine_casing',
    C: 'gtceu:steel_pipe_casing',
    D: 'gtceu:steel_firebox_casing',
    E: 'gtceu:steam_oven',
  }
  )
})