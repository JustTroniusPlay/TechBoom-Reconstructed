ServerEvents.recipes(event => {
  
  const result = Item.of('gtceu:diamond_plate', 9);
  const ingr = '#forge:storage_blocks/diamond';
  
  event.recipes.create.sequenced_assembly(
    [
      result
    ], ingr,
    [
      event.recipes.create.cutting(
        ingr,
        [ingr]),
      event.recipes.create.filling(
        ingr, 
        [
          ingr,
          Fluid.of('minecraft:water', 100)
        ]),
      event.recipes.create.cutting(
        ingr,
        [ingr])
    ]
    ).transitionalItem(ingr).loops(1)
    
    event.custom(
      {
    "type": "immersiveengineering:sawmill",
    "energy": 1600,
    "input": {"tag":"forge:storage_blocks/diamond"},
    "result": {"count": 9,"item":"gtceu:diamond_plate"},
    "secondaries": [{"output":{"tag":"forge:small_dusts/diamond"},"stripping":false}]
  }
  )
    
event.recipes.thermal.sawmill(result, ingr)

event.custom(
  {
    "type": "mekanism:sawing",
    "input": {"ingredient":{"tag":"forge:storage_blocks/diamond"}},
    "mainOutput": {"count":9,"item":"gtceu:diamond_plate"},
    "secondaryChance": 1.0,
    "secondaryOutput": {"item":"gtceu:small_diamond_dust"}
  }
)
    
})