ServerEvents.recipes(event => {

  //Diving Helmet
  event.replaceInput({id: "create:crafting/appliances/copper_diving_helmet"},
    "#forge:glass",
    "#forge:glass_panes"
  );

  //Encased Fan
  event.replaceInput({id: "create:crafting/kinetics/encased_fan"},
    "create:propeller",
    "gtceu:steel_rotor"
  );

  //Large Water Wheel
  event.replaceInput({id: "create:crafting/kinetics/large_water_wheel"},
    "#minecraft:planks",
    '#forge:treated_wood'
  );

  //Mechanical Press
  event.replaceInput({id: "create:crafting/kinetics/mechanical_press"},
    "minecraft:iron_block",
    'thermal:steel_block'
  );

  //Hose Pulley
  event.replaceInput({id: "create:crafting/kinetics/hose_pulley"},
    "minecraft:dried_kelp_block",
    'gtceu:rubber_block'
  );

  //Blaze Burner
  event.replaceInput({id: "create:crafting/kinetics/empty_blaze_burner"},
    "#forge:plates/iron",
    '#forge:plates/steel'
  );

  //Regions Unexplored Bamboo Log compatability
  event.replaceInput({id: "create:cutting/runtime_generated/compat/minecraft/stripped_bamboo_block_to_bamboo_planks"},
    "minecraft:stripped_bamboo_block",
    ["minecraft:stripped_bamboo_block", "regions_unexplored:stripped_bamboo_log"]
  );

  //Goggles
  event.replaceOutput({output: "create:crafting/kinetics/goggles"},
    "#forge:glass",
    '#forge:glass_panes'
  );
  
})