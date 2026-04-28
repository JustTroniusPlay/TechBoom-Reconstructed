ServerEvents.tags('item', event => {

    event.add('forge:slimeballs','gtceu:sticky_resin');

    event.add('forge:creosot_bucket', 'immersiveengineering:creosote_bucket');
    event.add('forge:creosot_bucket', 'railcraft:creosote_bucket');
    event.add('forge:creosot_bucket', 'tfmg:creosote_bucket');
    event.add('forge:creosot_bucket', 'gtceu:creosote_bucket');
    event.add('forge:creosot_bucket', 'thermal:creosote_bucket');
  
})

ServerEvents.tags('fluid', event => {

  event.add('forge:ethanol','forestry:bio_ethanol');
    
  event.add('forge:plantoil','forestry:seed_oil');
  event.add('forge:plantoil','gtceu:seed_oil');
})

ServerEvents.recipes(event => {
    event.remove({id: "gtceu:compressor/compress_plate_dust_obsidian"});
    event.remove({id: "gm_construct:smeltery/casting/metal/malachite/block"});
    event.remove({id: "tconstruct:compat/create/andesite_alloy_iron"});
    event.remove({id: "common_ore_library:smelting_raw_ore_to_ingot/cobalt"});
    event.remove({id: "common_ore_library:blasting_raw_ore_to_ingot/cobalt"});
    event.remove({id: "tconstruct:common/materials/cobalt_ingot_blasting"});

    event.remove({id: "cybernetic_system:craft_wire_copper"});
    event.shapeless(
  Item.of('cybernetic_system:copper_wire', 1), // arg 1: output
  [
    'immersiveengineering:wire_copper',
  ])

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
        {input: "gtceu:treated_wood_planks"},
        'gtceu:treated_wood_planks',
        '#forge:treated_wood'
    )

    event.replaceInput(
        {id: "railcraft:water_tank_siding"},
        'minecraft:slime_ball',
        '#forge:slimeballs'
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

  event.shapeless(
    Item.of('gtceu:treated_wood_planks',1),
    'immersiveengineering:treated_wood_horizontal'
  )
  event.shapeless(
    Item.of('immersiveengineering:treated_wood_horizontal',1),
    'gtceu:treated_wood_planks'
  )
})