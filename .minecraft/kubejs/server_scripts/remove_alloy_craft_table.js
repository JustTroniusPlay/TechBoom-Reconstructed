ServerEvents.recipes(event => {

    event.remove({id: "railcraft:bronze_ingot_crafted_with_ingots"});
    event.remove({id: "forestry:ingot_bronze_alloying"});
    
    event.remove({id: "railcraft:brass_ingot_crafted_with_ingots"});
    event.remove({id: "railcraft:invar_ingot_crafted_with_ingot"});
})