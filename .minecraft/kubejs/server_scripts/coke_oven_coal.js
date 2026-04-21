ServerEvents.tags('item', event => {
  event.add('forge:coal_coke', 'gtceu:coke_gem');
  event.remove('forge:coal_coke','thermal:coal_coke')
})

ServerEvents.recipes(event => {

    event.remove({output: "electrodynamics:coalcoke"});
    event.remove({id: "thermal:storage/coal_coke_from_block"});
    event.remove({id: "immersiveengineering:crafting/coal_coke_to_coke"});
    event.remove({id: "thermal:storage/coal_coke_block"});

  {//Coke Ovens
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
  }

    event.replaceInput(
    {id: "thermal:machines/smelter/smelter_alloy_steel"},
    "#forge:coal_coke",
    "thermal:coal_coke"
    )
    event.replaceOutput(
      {id: "thermal:machines/press/unpacking/press_coal_coke_unpacking"},
      'thermal:coal_coke',
      'immersiveengineering:coal_coke'
    )

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
      '#forge:coal_coke'
    )
    event.replaceOutput(
      {output: coal},
      coal,
      'immersiveengineering:coal_coke'
    )
  })
    
    event.remove({id: 'railcraft:coke_oven/coal_coke'});
    event.custom({
    "type": "railcraft:coking",
    "cookingTime": 400,
    "creosoteOutput": 500,
    "experience": 0.0,
    "ingredient": {
    "item": "minecraft:coal"
    },
    "result": {
    "item": "immersiveengineering:coal_coke"
    }
    })

    event.remove({id: "railcraft:coke_oven/coal_coke_block"});
    event.custom({
    "type": "railcraft:coking",
    "cookingTime": 3600,
    "creosoteOutput": 5000,
    "experience": 0.0,
    "ingredient": {
      "item": "minecraft:coal_block"
    },
    "result": {
      "item": "tfmg:coal_coke_block"
    }
    });

    const coke_block = ['thermal:coal_coke_block', 'gtceu:coke_block']

    coke_block.forEach(block =>{
    event.replaceInput(
      {input: block},
      block,
      'tfmg:coal_coke_block'
    )
    event.replaceOutput(
      {output: block},
      block,
      'tfmg:coal_coke_block'
    )
  })
})