ServerEvents.recipes(event => {

    //Chunkloaders
    
    event.replaceInput({id:"railcraft:world_spike"},
        "minecraft:gold_ingot",
        "thermal:ruby_block"
    )
    event.replaceInput({id:"railcraft:personal_world_spike"},
        "minecraft:gold_ingot",
        "minecraft:emerald_block"
    )

    event.replaceInput({id:"railcraft:world_spike"},
        "minecraft:obsidian",
        "railcraft:crushed_obsidian"
    )
    event.replaceInput({id:"railcraft:personal_world_spike"},
        "minecraft:obsidian",
        "railcraft:crushed_obsidian"
    )

    event.replaceInput({id:"railcraft:world_spike"},
        "minecraft:ender_pearl",
        "stevescarts:component_eye_of_galgador"
    )
    event.replaceInput({id:"railcraft:personal_world_spike"},
        "minecraft:ender_pearl",
        "stevescarts:component_eye_of_galgador"
    )

    event.replaceInput({id:"railcraft:world_spike"},
        "minecraft:diamond",
        "ae2:quantum_entangled_singularity"
    )
    event.replaceInput({id:"railcraft:personal_world_spike"},
        "minecraft:emerald",
        "ae2:quantum_entangled_singularity"
    )

})