ServerEvents.tags('item', event => {
  
    event.add('forge:coal_coke', 'gtceu:coke_gem');
    
    event.remove('forge:coal_coke','thermal:coal_coke')

    event.add('forge:dusts/coke_coal', 'gtceu:coke_dust');
})

ServerEvents.recipes(event => {

    event.remove({output: "electrodynamics:coalcoke"});

    event.remove({id: "thermal:storage/coal_coke_from_block"});
    
    event.remove({id: "immersiveengineering:crafting/coal_coke_to_coke"});
    
    event.remove({id: "thermal:storage/coal_coke_block"});
    
    event.remove({id: "railcraft:coal_coke"});

    event.replaceOutput({output: "gtceu:coke_dust"},
        "gtceu:coke_dust",
        'immersiveengineering:dust_coke'
    )

})