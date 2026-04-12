ServerEvents.recipes(event => {

    event.remove({id: "forestry:can"});
    event.shaped(
  Item.of('forestry:can', 4), // arg 1: output
  [
    ' B ',
    'A A', // arg 2: the shape (array of strings)
    ' B '
  ],
  {
    A: 'gtceu:double_osmium_plate',
    B: 'gtceu:osmium_plate'  //arg 3: the mapping object
  })

    event.replaceInput(
        {id: "forestry:engine_clockwork"},
        "minecraft:glass",
        "gtceu:small_bronze_gear"
    )

    event.replaceInput(
        {id: "forestry:engine_biogas"},
        "minecraft:glass",
        "gtceu:small_bronze_gear"
    )

    event.replaceInput(
        {id: "forestry:carpenter"},
        "minecraft:glass",
        "gtceu:small_bronze_gear"
    )
    
    event.replaceInput(
        {id: "forestry:centrifuge"},
        "minecraft:glass",
        "gtceu:small_copper_gear"
    )

    event.replaceInput(
        {id: "forestry:moistener"},
        "minecraft:glass",
        "create:copper_sheet"
    )

    event.replaceInput(
        {id: "forestry:fermenter"},
        "minecraft:glass",
        "thermal:bronze_plate"
    )

    event.replaceInput(
        {id: "forestry:squeezer"},
        "minecraft:glass",
        "thermal:tin_gear"
    )


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