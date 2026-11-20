ServerEvents.recipes(event => {
  
  let mortars = 
  [
    'wrought_iron',
    'flint',
    'iron',
    'damascus_steel',
    'cobalt_brass',
    'steel',
    'invar',
    'bronze'
    
  ]
  
  mortars.forEach(mortar =>{
    
    event.replaceInput({id:'gtceu:shaped/mortar_' + mortar}, 'minecraft:stone', '#forge:stone');
  })
  
})