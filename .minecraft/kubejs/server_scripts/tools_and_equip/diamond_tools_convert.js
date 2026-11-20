ServerEvents.recipes(event => {
  
  let d_tools = 
  [
    'sword',
    'pickaxe',
    'axe',
    'shovel',
    'hoe'
  ]
  
  d_tools.forEach(tool => 
  {
    event.shapeless('minecraft:diamond_' + tool, ['gtceu:diamond_' + tool])
  })
  
})