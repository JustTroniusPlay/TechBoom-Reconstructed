ServerEvents.recipes(event => {

  event.remove({id: "fluid:copper_sink"});

  event.replaceInput({id: "create:crafting/appliances/copper_diving_helmet"},
    "#forge:glass",
    "#forge:glass_panes"
  );

  event.replaceInput({id: "create:crafting/kinetics/large_water_wheel"},
    "#minecraft:planks",
    '#forge:treated_wood'
  );

  event.replaceInput({id: "create:crafting/kinetics/mechanical_press"},
    "minecraft:iron_block",
    'thermal:steel_block'
  );

  event.replaceInput({id: "create:crafting/kinetics/hose_pulley"},
    "minecraft:dried_kelp_block",
    'gtceu:rubber_block'
  );

  event.replaceInput({id: "create:crafting/kinetics/empty_blaze_burner"},
    "#forge:plates/iron",
    '#forge:plates/steel'
  );

  event.remove({id: "create_new_age:shaped/generator_coil"});
  event.shaped(
  Item.of('create_new_age:generator_coil', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'immersiveengineering:wirecoil_structure_steel',
    B: 'immersiveengineering:coil_lv',  //arg 3: the mapping object
    C: 'create:andesite_alloy_block'
  })

  event.remove({output: "create:brass_casing"});
  event.custom(
    {
    "type": "create:item_application",
		"ingredients":[
			{"tag": "forge:treated_wood"},
			{"tag": "forge:ingots/brass"}],
		"results": [
			{"item": "create:brass_casing"}]
	})
})