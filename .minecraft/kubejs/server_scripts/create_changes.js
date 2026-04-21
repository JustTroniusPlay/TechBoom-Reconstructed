ServerEvents.recipes(event => {

  event.remove({id: "fluid:copper_tap"});
  event.remove({id: "fluid:copper_sink"});

    event.remove({id: "create:crafting/kinetics/mechanical_press"});
    event.shaped(
  Item.of('create:mechanical_press', 1), // arg 1: output
  [
    ' A ',
    ' B ', // arg 2: the shape (array of strings)
    ' C '
  ],
  {
    A: 'create:shaft',
    B: 'create:andesite_casing',  //arg 3: the mapping object
    C: 'thermal:steel_block'
  }
)

    event.remove({id: "create:crafting/kinetics/large_water_wheel"});
    event.shaped(
  Item.of('create:large_water_wheel', 1), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: '#forge:treated_wood',
    B: 'create:water_wheel'  //arg 3: the mapping object
  }
)

event.recipes.create.mechanical_crafting('create_sa:andesite_exoskeleton_chestplate', 
  [
  "ABCBA",
  "AADAA",
  "FEAEF"
  ], {
    A: 'create:andesite_alloy',
    B: 'create:shaft',
    C: 'create:belt_connector',
    D: 'create_sa:heat_engine',
    E: '#c:ingots/zinc',
    F: '#forge:stone'
  })
})