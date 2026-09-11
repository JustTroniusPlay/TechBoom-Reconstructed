ServerEvents.recipes(event => {

    const coke = 
    [
        'tfmg:coal_coke',
        'railcraft:coal_coke',
        'electrodynamics:coalcoke',
        'gtceu:coke_gem'
    ]

    coke.forEach(coal =>{
        event.replaceInput({input: coal},
            coal,
            '#forge:coal_coke'
        )
        event.replaceOutput({output: coal},
            coal,
            'immersiveengineering:coal_coke'
        )
    })

    const coke_block = ['thermal:coal_coke_block', 'gtceu:coke_block']

    coke_block.forEach(block =>{
    event.replaceInput(
      {input: block},
      block,
      //'immersiveengineering:coal_coke_block'
      'thermal:coal_coke_block'
    )
    event.replaceOutput(
      {output: block},
      block,
      //'immersiveengineering:coal_coke_block'
      'thermal:coal_coke_block'
    )
  })
})