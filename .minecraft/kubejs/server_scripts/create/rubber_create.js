ServerEvents.recipes(event => {
  
  event.custom({
    "type": "vintageimprovements:centrifugation",
    "ingredients": [{"tag":"techboom:resins"}],
    "results": [{"item":"gtceu:raw_rubber_dust","count":3}],
    "processingTime": 1000
  })
  
  const sulf = ["forge:gems/sulfur",'forge:dusts/sulfur'];
  sulf.forEach(sulfur =>
  {
    event.custom(
    {
    "type": "createdieselgenerators:compression_molding",
    "ingredients": [
      {"tag": sulfur},
      {"tag":'forge:dusts/raw_rubber'},
      {"tag":'forge:dusts/raw_rubber'},
      {"tag":'forge:dusts/raw_rubber'}
    ],
    "mold": "createdieselgenerators:bar",
    "heatRequirement": "heated",
    "results": [{"item":"gtceu:rubber_ingot","count":1}]
  })
  })
  
  
  event.recipes.create.compacting('gtceu:rubber_block', Item.of('gtceu:rubber_ingot', 9))
})