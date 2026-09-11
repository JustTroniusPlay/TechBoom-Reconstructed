ServerEvents.recipes(event => {

  event.replaceInput({id:"gtceu:coke_oven/coal_to_coke"},
    "minecraft:coal",
    ["minecraft:coal", "immersivegeology:normal_ore_bituminous"]
  )
    
  event.replaceInput({id:"gtceu:coke_oven/coal_to_coke_block"},
    "minecraft:coal_block",
    ["minecraft:coal_block", "immersivegeology:storage_block_bituminous"]
  )

    
})