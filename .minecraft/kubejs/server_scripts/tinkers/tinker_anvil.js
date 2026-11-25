ServerEvents.recipes(event => {

  let tc_ids = 
  [
    "tconstruct:tables/tinkers_anvil_material",
    "tconstruct:tables/tinkers_anvil",
    
    'tconstruct:tables/scorched_anvil',
    'tconstruct:tables/scorched_anvil_material',
    
    'tconstruct:tables/tinkers_forge', 
    'tconstruct:tables/tinkers_forge_material', 

    'tconstruct:tables/scorched_forge',
    'tconstruct:tables/scorched_forge_material',
    
    'tconstruct:tables/seared_forge_material'
  ]

  tc_ids.forEach(ids => {
    event.remove({id: ids});
  })
    
    event.shaped(
    Item.of('tconstruct:tinkers_anvil', 1),
    [
        'AAA',
        ' B ',
        'BBB'
    ],
    {
        A: 'thermal:steel_block',
        B: '#tconstruct:seared_blocks'
    })
    
    event.shaped(
    Item.of('tconstruct:scorched_anvil', 1),
    [
        'AAA',
        ' B ',
        'BBB'
    ],
    {
        A: 'thermal:steel_block',
        B: '#tconstruct:scorched_blocks'
    })

})