ServerEvents.recipes(event => {

event.remove({id: "projectred_exploration:string_from_wool_gin"});
event.remove({id: "projectred_exploration:wool_gin"});

event.replaceInput(
        {id: "projectred_exploration:athame"},
        'thermal:silver_ingot',
        '#forge:storage_blocks/silver'
    )

})