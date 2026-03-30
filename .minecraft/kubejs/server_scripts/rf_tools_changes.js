ServerEvents.recipes(event => {

    event.remove({id: "rftoolsbase:machine_frame"});
    event.shaped(
  Item.of('rftoolsbase:machine_frame', 1), // arg 1: output
  [
    'ABA',
    'CDC', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'gtceu:wrought_iron_plate',
    B: 'gtceu:solid_machine_casing' , //arg 3: the mapping object
    D: 'mekanism:steel_casing',
    C: 'thermal:signalum_gear',
  })

    event.remove({id: "rftoolspower:coalgenerator"});
    event.shaped(
  Item.of('rftoolspower:coalgenerator', 1), // arg 1: output
  [
    'AEA',
    'ACA', // arg 2: the shape (array of strings)
    'BDB'
  ],
  {
    A: 'thermal:steel_plate',
    B: 'minecraft:smooth_stone' , //arg 3: the mapping object
    D: 'thermal:dynamo_stirling',
    C: 'gtceu:steel_gearbox',
    E: 'rftoolsbase:machine_frame'
  })

})