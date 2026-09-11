ServerEvents.recipes(event => {

    const fmachines = 
    [
        "forestry:engine_biogas",
        "forestry:carpenter",
        "forestry:centrifuge",
        "forestry:moistener",
        "forestry:fermenter",
        "forestry:squeezer",
        "forestry:raintank",
        "forestry:bee_chest",
        "forestry:tree_chest",
        "forestry:butterfly_chest",
        "forestry:engine_peat",
        "forestry:engine_clockwork"
    ];

    fmachines.forEach(machine => {
        event.replaceInput({id: machine},
            "minecraft:glass",
            "#forge:glass_panes"
        )
    })
})