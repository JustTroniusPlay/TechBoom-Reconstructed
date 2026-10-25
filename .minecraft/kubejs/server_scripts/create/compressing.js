ServerEvents.recipes(event => {
  
  const metal = new Map([
    ["minecraft:iron_block",'iron'],
    ["minecraft:copper_block",'copper']
  ])
  
  metal.forEach( (ingot, block) => 
  {
    let res = 'forge:ingots/' + ingot
    event.custom({
    "type": "vintageimprovements:pressurizing",
    "ingredients": [
      {"tag": res},
      {"tag": res},
      {"tag": res},
      {"tag": res},
      {"tag": res},
      {"tag": res},
      {"tag": res},
      {"tag": res},
      {"tag": res},
    ],
    "results": [{"item": block,"count": 1}],
    "processingTime": 600
  }) 
  })
})