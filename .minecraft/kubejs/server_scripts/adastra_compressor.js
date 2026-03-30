ServerEvents.recipes(event => {

    event.remove({id: "ad_astra:compressor"});
    event.shaped(
  Item.of('ad_astra:compressor', 1), // arg 1: output
  [
    'ADA',
    'BCB', // arg 2: the shape (array of strings)
    'AEA'
  ],
  {
    A: 'thermal:steel_ingot',
    B: 'minecraft:piston',  //arg 3: the mapping object
    C: 'thermal:machine_frame',
    D: 'gtceu:lv_compressor',
    E: 'gtceu:lv_forge_hammer'
  }
)
})