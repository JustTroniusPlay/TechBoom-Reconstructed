ServerEvents.recipes(event => {

    //event.remove({output: "electrodynamics:coalcoke"});
    //event.remove({id: "thermal:storage/coal_coke_block"});
    //event.remove({id: "railcraft:coal_coke_block_from_coal_coke"});
    //event.remove({id: "thermal:machines/press/unpacking/press_coal_coke_unpacking"});

    event.remove({id: "immersiveengineering:crafting/cokebrick"});
    event.shaped(
  Item.of('immersiveengineering:cokebrick', 3), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'tconstruct:seared_brick',
    B: 'minecraft:brick',  //arg 3: the mapping object
    C: 'gtceu:bronze_frame'
  }
)

    event.remove({id: "gtceu:shaped/casing_coke_bricks"});
    event.remove({id: "gtceu:compressor/coke_bricks"});
    event.shaped(
  Item.of('gtceu:coke_oven_bricks', 6), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'gtceu:coke_oven_brick',
    B: 'immersiveengineering:cokebrick',  //arg 3: the mapping object
    C: 'gtceu:invar_frame'
  }
)
    event.remove({id: "railcraft:coke_oven_bricks"});
    event.shaped(
  Item.of('railcraft:coke_oven_bricks', 3), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'tconstruct:scorched_bricks',
    B: 'minecraft:bricks',  //arg 3: the mapping object
    C: 'gtceu:coke_oven_bricks'
  })

  const coke = 
  [
    'tfmg:coal_coke',
    'railcraft:coal_coke',
    'electrodynamics:coalcoke',
    'gtceu:coke_gem'
  ]

  coke.forEach(coal =>{
    event.replaceInput(
      {input: coal},
      coal,
      'immersiveengineering:coal_coke'
    )

    event.replaceOutput(
      {output: coal},
      coal,
      'immersiveengineering:coal_coke'
    )
  })
  event.replaceOutput(
      {id: "railcraft:coke_oven/coal_coke"},
      'railcraft:coke_coal',
      'immersiveengineering:coal_coke'
    )
    
  
})