ServerEvents.tags('item', event => {

    event.add('forge:slimeballs','gtceu:sticky_resin');

})

ServerEvents.recipes(event => {

    event.remove({id: "minecraft:bone_meal"});
    event.remove({id: "minecraft:blaze_powder"});
    event.remove({id: "minecraft:wheat"});
    event.remove({id: "create:cutting/compat/immersiveengineering/wire_copper"});
    event.remove({id: "thermal:machines/pyrolyzer/pyrolyzer_coal"});
    event.remove({id: "mekanism:rails"});
    event.remove({id: "gtceu:compressor/compress_plate_dust_obsidian"});
    event.remove({id: "pamhc2foodcore:saltitem"});
    event.remove({id: "minecraft:bread"});
    event.remove({id: "gtceu:shaped/flour_to_dough"});
    event.remove({id: "pamhc2crops:bread_grain"});
    event.remove({id: "create:crafting/appliances/dough"});
    event.remove({id: "regions_unexplored:barley_smelting"});
    event.remove({id: "regions_unexplored:barley_smoking"});
    event.remove({id: "create:splashing/wheat_flour"});
    event.remove({id: "pamhc2foodcore:bread_dough"});
    event.remove({id: "mekanism:paper"});
    event.remove({id: "pamhc2crops:paper_x2_paper_plants"});

    event.remove({id: "cybernetic_system:craft_wire_copper"});
    event.shapeless(
  Item.of('cybernetic_system:copper_wire', 1), // arg 1: output
  [
    'immersiveengineering:wire_copper',
  ])

  event.shapeless(
  Item.of('pamhc2trees:apple_sapling', 1), // arg 1: output
  [
    'regions_unexplored:apple_oak_sapling',
  ])

    event.replaceInput(
        {id: "create:milling/wheat"},
        "minecraft:wheat",
        '#forge:grain/wheat'
    )

    event.replaceInput(
        {id: "littlelogistics:tug_route"},
        "littlelogistics:transmitter_component",
        'create:transmitter'
    )
    event.replaceInput(
        {id: "littlelogistics:locomotive_route"},
        'littlelogistics:transmitter_component',
        'create:transmitter'
    )


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
    event.replaceInput(
        {input: "gtceu:treated_wood_planks"},
        'gtceu:treated_wood_planks',
        '#forge:treated_wood'
    )

    event.remove({id: "tesseract:tesseract"});
    event.shaped(
  Item.of('tesseract:tesseract', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'mekanism:block_refined_obsidian',
    B: 'thermal:enderium_block',  //arg 3: the mapping object
    C: 'createutilities:void_steel_block'
  })
})