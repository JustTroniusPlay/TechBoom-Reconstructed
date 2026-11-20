ServerEvents.tags('item', event => {
  
  const alums = 
  [
    "gtceu:raw_bauxite",
    "crusty_chunks:bauxite",
    "gtceu:raw_kyanite",
  ]

  alums.forEach( alum => {
    
    event.add("forge:raw_materials/aluminum", alum);
  })
})

ServerEvents.recipes(event => {

  const alumap = 
    [
      'bauxite',
      'pollucite',
      'kyanite',
      'mica'
    ]

  alumap.forEach(ore => {
    
    event.replaceOutput(
        {id: "gtceu:blasting/smelt_raw_" + ore +"_ore_to_ingot"},
        '#forge:dusts/' + ore,
        'immersiveengineering:ingot_aluminum'
    )
    event.replaceOutput(
        {id: "gtceu:smelting/smelt_raw_" + ore +"_ore_to_ingot"},
        '#forge:dusts/' + ore,
        'immersiveengineering:ingot_aluminum'
    )
  })
    

  const alum_dusts = 
  [
    '#forge:dusts/bauxite',
    '#forge:dusts/pollucite',
    '#forge:dusts/kyanite',
    '#forge:dusts/mica'
  ]
  
  alum_dusts.forEach(dust => {
    
    event.smelting('immersiveengineering:ingot_aluminum', dust);
    event.blasting('immersiveengineering:ingot_aluminum', dust);
    
  })
    

})