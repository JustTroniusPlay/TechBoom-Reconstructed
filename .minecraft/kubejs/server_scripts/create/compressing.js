ServerEvents.recipes(event => {
  
  const metal = new Map([
    ["minecraft:iron_block",'ingots/iron'],
    ["minecraft:copper_block",'ingots/copper'],
    ["create:brass_block",'ingots/brass'],
    ['minecraft:redstone_block','dusts/redstone']
  ])
  
  metal.forEach( (resource, block) => 
  {
    let res = 'forge:' + resource
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
  
  const quarter = new Map([
    ["minecraft:clay",'clay']
  ])
  
  quarter.forEach( (ingot, block) => 
  {
    let res = 'forge:ingots/' + ingot
    event.custom({
    "type": "vintageimprovements:pressurizing",
    "ingredients": [
      {"tag": res},
      {"tag": res},
      {"tag": res},
      {"tag": res},
    ],
    "results": [{"item": block,"count": 1}],
    "processingTime": 300
  }) 
  })
  
  
})