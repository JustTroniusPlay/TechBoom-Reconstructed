ServerEvents.recipes(event => {

    event.replaceInput({id: "thermal:machine_pyrolyzer"},
        "minecraft:nether_bricks",
        "immersiveengineering:blastbrick"
    )
   
    event.replaceInput({id: "thermal:machine_pyrolyzer"},
        "minecraft:blaze_rod",
        "create:blaze_burner"
    )
})