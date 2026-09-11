ServerEvents.recipes(event => {

  event.remove({id: "thermal:machine_frame"});
  event.shaped(
  Item.of('thermal:machine_frame', 1), // arg 1: output
  [
    'DBD',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'gtceu:wrought_iron_ingot',
    B: 'tconstruct:clear_glass',  //arg 3: the mapping object
    C: 'gtceu:bronze_gearbox',
    D: 'mekanism:ingot_osmium'
  })

})