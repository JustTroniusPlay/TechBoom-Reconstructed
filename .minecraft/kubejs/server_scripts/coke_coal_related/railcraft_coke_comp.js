ServerEvents.recipes(event => {

    event.remove({id: 'railcraft:coke_oven/coal_coke'});
    
    event.custom({
    "type": "railcraft:coking",
    "cookingTime": 400,
    "creosoteOutput": 500,
    "experience": 0.0,
    "ingredient": {
        "item": "minecraft:coal"},
    "result": {
        "item": "immersiveengineering:coal_coke"
    }
    })
    
    event.custom({
    "type": "railcraft:coking",
    "cookingTime": 400,
    "creosoteOutput": 500,
    "experience": 0.0,
    "ingredient": {
        "item": "immersivegeology:normal_ore_bituminous"
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
      "item": "thermal:coal_coke_block"
    }
    });
})