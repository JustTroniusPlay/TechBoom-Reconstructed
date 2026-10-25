ServerEvents.recipes(event => {

    //Fabricator
    event.replaceInput({id: "thermal:machine_crafter"},
        "minecraft:crafting_table",
        "forestry:worktable"
    )
    event.replaceInput({id: "thermal:machine_crafter"},
        "thermal:copper_gear",
        "create:mechanical_crafter"
    )
  
})