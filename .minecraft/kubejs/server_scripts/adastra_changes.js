ServerEvents.recipes(event => {

  event.remove({id: "immersiveengineering:crafting/plate_desh_hammering"});

  event.remove({id: "ad_astra:compressor"});
  event.shaped(
  Item.of('ad_astra:compressor', 1), // arg 1: output
  [
    'ADA',
    'BCB', // arg 2: the shape (array of strings)
    'AEA'
  ],
  {
    A: 'thermal:steel_ingot',
    B: 'minecraft:piston',  //arg 3: the mapping object
    C: 'thermal:machine_frame',
    D: 'thermal:rf_coil',
    E: 'gtceu:lv_forge_hammer'
  })

  {//Fuel Refinery
  event.replaceInput(
  {id: "ad_astra:fuel_refinery"},
  "minecraft:furnace",
  "thermal:machine_refinery"
  )
  event.replaceInput(
  {id: "ad_astra:fuel_refinery"},
  "minecraft:bucket",
  "immersivetechnology:barrel_steel"
  )
  }

  {//NASA Workbench
  event.replaceInput(
  {id: "ad_astra:nasa_workbench"},
  "immersiveengineering:stick_iron",
  "gtceu:lv_robot_arm"
  )
  event.replaceInput(
  {id: "ad_astra:nasa_workbench"},
  "minecraft:redstone_torch",
  'immersive_machinery:redstone_mechanism'
  )
  event.replaceInput(
  {id: "ad_astra:nasa_workbench"},
  "minecraft:crafting_table",
  'create:mechanical_crafter'
  )
  event.replaceInput(
  {id: "ad_astra:nasa_workbench"},
  "thermal:steel_block",
  'gtceu:steel_gearbox'
  )
  }

  {//Coal Gen
  event.replaceInput(
  {id: "ad_astra:coal_generator"},
  "minecraft:coal_block",
  "mekanism:ingot_osmium"
  )
  event.replaceInput(
  {id: "ad_astra:coal_generator"},
  "minecraft:iron_ingot",
  "create:iron_sheet"
  )
  }
})