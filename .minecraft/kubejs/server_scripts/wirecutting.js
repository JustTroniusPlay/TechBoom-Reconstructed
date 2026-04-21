ServerEvents.recipes(event => {
    event.remove({id: "create:cutting/compat/immersiveengineering/wire_copper"});
    event.replaceInput(
        {input: "immersiveengineering:wirecutter"},
        "immersiveengineering:wirecutter",
        "#gtceu:tools/crafting_wire_cutters"
    )
    event.replaceInput(
        {input: "crusty_chunks:cutters"},
        "crusty_chunks:cutters",
        "#gtceu:tools/crafting_wire_cutters"
    )
    event.replaceInput(
        {input: "createdieselgenerators:wire_cutters"},
        "createdieselgenerators:wire_cutters",
        "#gtceu:tools/crafting_wire_cutters"
    )
})