ServerEvents.recipes(event => {

    event.remove({id: "forestry:can"});
    event.shaped(
  Item.of('forestry:can', 4), // arg 1: output
  [
    ' B ',
    'ACA', // arg 2: the shape (array of strings)
    ' B '
  ],
  {
    A: 'gtceu:double_osmium_plate',
    B: 'gtceu:osmium_plate',  //arg 3: the mapping object
    C: '#forge:glass_panes'
  })

  event.replaceInput(
        {id: "forestry:engine_clockwork"},
        "minecraft:glass",
        "gtceu:small_bronze_gear"
    )

  const fmachines = 
  [
    "forestry:engine_biogas",
    "forestry:carpenter",
    "forestry:centrifuge",
    "forestry:moistener",
    "forestry:fermenter",
    "forestry:squeezer"
  ];
  fmachines.forEach(machine => 
    {
      event.replaceInput(
      {id: machine},
        "minecraft:glass",
        "#forge:glass_panes"
    )
    })

const creo = [
  'tfmg:creosote',
  'thermal:creosote',
  'gtceu:creosote',
  'immersiveengineering:creosote',
  'railcraft:creosote']

creo.forEach(creo => {
  event.custom({
  type: "forestry:carpenter",
  box: [],
  liquid: {
    Amount: 1000,
    FluidName: creo
  },
  recipe: {
    type: "minecraft:crafting_shaped",
    category: "misc",
    key: {
      "#": {
        tag: "minecraft:wooden_slabs"
      },
    },
    pattern: [
      "###"
    ],
    result: {
      count: 4,
      item: "railcraft:wooden_tie"
    },
    show_notification: true
  },
  time: 60
  });
  })

})