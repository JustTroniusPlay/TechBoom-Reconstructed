ServerEvents.recipes(event => {

  event.remove({id: "thermal:machines/pyrolyzer/pyrolyzer_coal"});
  event.remove({id: "thermal:machines/smelter/smelter_alloy_enderium"});
  
  event.remove({id: 'thermal:fire_charge/obsidian_glass_2'});
  event.remove({id: 'thermal:fire_charge/signalum_glass_2'});
  event.remove({id: 'thermal:fire_charge/enderium_glass_2'});
  event.remove({id: 'thermal:fire_charge/lumium_glass_2'});

  event.remove({id: "thermal:rf_coil"});
  event.shaped(
  Item.of('thermal:rf_coil', 1), // arg 1: output
  [
    ' B ',
    'BAB', // arg 2: the shape (array of strings)
    ' B '
  ],
  {
    A: 'gtceu:long_gold_rod',
    B: 'immersiveengineering:wirecoil_redstone'  //arg 3: the mapping object
  })

  event.remove({id: "thermal:machine_frame"});
  event.shaped(
  Item.of('thermal:machine_frame', 1), // arg 1: output
  [
    'DBD',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'gtceu:wrought_iron_ingot',
    B: 'tconstruct:clear_glass',  //arg 3: the mapping object
    C: 'gtceu:bronze_gearbox',
    D: 'mekanism:ingot_osmium'
  })

  event.remove({id: "thermal:machine_smelter"});
  event.shaped(
  Item.of('thermal:machine_smelter', 1), // arg 1: output
  [
    ' A ',
    'BCF', // arg 2: the shape (array of strings)
    'DED'
  ],
  {
    A: 'immersiveengineering:furnace_heater',
    B: 'gtceu:steam_oven',  //arg 3: the mapping object
    C: 'thermal:machine_frame',
    D: 'thermal:invar_gear',
    E: 'thermal:rf_coil',
    F: 'steamadditions:steam_foundry'
  })

  {//Pulverizer
  event.replaceInput(

    {id: "crusty_chunks:iron_gear_recipe"},
    "minecraft:cobblestone",
    "gtceu:wrought_iron_gear"
  )
  event.remove({id: "thermal:machine_pulverizer"});
    event.shaped(
  Item.of('thermal:machine_pulverizer', 1), // arg 1: output
  [
    ' A ',
    'CBC', // arg 2: the shape (array of strings)
    'DED'
  ],
  {
    A: 'gtceu:lp_steam_macerator',
    B: 'thermal:machine_frame',  //arg 3: the mapping object
    C: 'crusty_chunks:irongear',
    D: 'thermal:copper_gear',
    E: 'thermal:rf_coil'
  })
  }

  {//Fabricator
  event.replaceInput(
    {id: "thermal:machine_crafter"},
    "minecraft:crafting_table",
    "gtceu:lv_assembler"
  )
  event.replaceInput(

    {id: "thermal:machine_crafter"},
    "thermal:copper_gear",
    "create:mechanical_crafter"
  )
  }

  {//Pyrolyzer
    event.replaceInput(
    {id: "thermal:machine_pyrolyzer"},
    "minecraft:nether_bricks",
    "immersiveengineering:blastbrick"
  )
   event.replaceInput(
    {id: "thermal:machine_pyrolyzer"},
    "minecraft:blaze_rod",
    "create:blaze_burner"
  )
  }

  //Certus in Crystallizer
  event.custom({"type": "thermal:crystallizer",
        "ingredients": [
          {
            "fluid": "minecraft:water",
            "amount": 8000
          },
          {
            "item": "ae2:certus_quartz_dust"
          },
          {"item": "ae2:charged_certus_quartz_crystal"}
        ],
        "result": [
          {
            count: 4,
            "item": "ae2:certus_quartz_crystal"
          }
        ],
          "energy": 500
    })

  event.replaceInput({id: "thermal:machine_press"},
  "minecraft:iron_block",
  "gtceu:lv_bender"
  )

  event.custom({"type": "thermal:crystallizer",
        "ingredients": [
          {
            "fluid": "minecraft:water",
            "amount": 1000
          },
          {
            "item": "ae2:fluix_dust"
          },
          {"item": "ae2:charged_certus_quartz_crystal"}
        ],
        "result": [
          {
            count: 1,
            "item": "ae2:fluix_crystal"
          }
        ],
          "energy": 500
    })

  event.replaceInput({id: "thermal:machine_press"},
  "minecraft:iron_block",
  "gtceu:lv_bender"
  )
})