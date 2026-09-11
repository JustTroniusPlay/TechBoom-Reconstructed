ServerEvents.recipes(event => {

    //Fabricator
    event.replaceInput({id: "thermal:machine_crafter"},
        "minecraft:crafting_table",
        "gtceu:lv_assembler"
    )
    event.replaceInput({id: "thermal:machine_crafter"},
        "thermal:copper_gear",
        "create:mechanical_crafter"
    )
  
})