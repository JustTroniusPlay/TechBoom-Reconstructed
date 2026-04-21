ServerEvents.recipes(event => {

  {//Rolling machines
  event.replaceInput({id:"railcraft:manual_rolling_machine"},
    "minecraft:crafting_table",
    "gtceu:bronze_gearbox"
  )
    /*event.remove({id: "railcraft:manual_rolling_machine"});
    event.shaped(
  Item.of('railcraft:manual_rolling_machine', 1), // arg 1: output
  [
    'AEA',
    'BDB', // arg 2: the shape (array of strings)
    'AEA'
  ],
  {
    A: 'thermal:bronze_gear',
    B: 'create:mechanical_piston',  //arg 3: the mapping object
    D: 'gtceu:bronze_gearbox',
    E: 'create:hand_crank'
  }
)*/

    event.remove({id: "railcraft:powered_rolling_machine"});
    event.shaped(
  Item.of('railcraft:powered_rolling_machine', 1), // arg 1: output
  [
    'ACA',
    'BDB', // arg 2: the shape (array of strings)
    'AEA'
  ],
  {
    A: 'thermal:steel_gear',
    B: 'gtceu:lv_electric_piston',  //arg 3: the mapping object
    C: 'create:mechanical_press',
    D: 'railcraft:manual_rolling_machine',
    E: 'railcraft:charge_motor'
  }
)
}

{//Boilers
  event.remove({id: "railcraft:fluid_fueled_firebox"});
    event.shaped(
  Item.of('railcraft:fluid_fueled_firebox', 1), // arg 1: output
  [
    'ABA',
    'CDC', // arg 2: the shape (array of strings)
    'AEA'
  ],
  {
    A: '#forge:plates/invar',
    B: 'gtceu:steel_firebox_casing',  //arg 3: the mapping object
    C: 'minecraft:iron_bars',
    D: 'gtceu:invar_frame',
    E: 'gtceu:hp_steam_liquid_boiler'
  })

  event.remove({id: "railcraft:solid_fueled_firebox"});
    event.shaped(
  Item.of('railcraft:solid_fueled_firebox', 1), // arg 1: output
  [
    'ABA',
    'CDC', // arg 2: the shape (array of strings)
    'AEA'
  ],
  {
    A: 'tconstruct:seared_brick',
    B: 'gtceu:steel_firebox_casing',  //arg 3: the mapping object
    C: '#forge:plates/invar',
    D: 'gtceu:invar_frame',
    E: 'gtceu:hp_steam_solid_boiler'
  })
}

   event.remove({id: "railcraft:steam_oven"});
    event.shaped(
  Item.of('railcraft:steam_oven', 8), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'immersiveengineering:sheetmetal_steel',
    B: 'thermal:steel_plate',  //arg 3: the mapping object
    C: 'gtceu:steam_oven',
  }
)

event.replaceInput(
        {id: "railcraft:wooden_tie"},
        'railcraft:creosote_bucket',
        '#forge:creosot_bucket'
    )

event.replaceInput(
        {id: "railcraft:steam_locomotive"},
        'railcraft:blast_furnace_bricks',
        'railcraft:solid_fueled_firebox'
    )

event.replaceInput(
        {id: "railcraft:feed_station"},
        'thermal:steel_plate',
        'thermal:bronze_gear'
    )
event.replaceInput(
        {id: "railcraft:feed_station"},
        'minecraft:golden_carrot',
        'minecraft:wheat'
    ) 

  event.custom({
  "type": "railcraft:rolling",
  "key": {
    "a": {
      "tag": "forge:ingots/osmium"
    },
    "b": {
      "tag": "forge:ingots/osmium"
    }
  },
  "pattern": [
    "a b",
    "a b",
    "a b"
  ],
  "result": {
    "count": 12,
    "item": "railcraft:standard_rail"
  }
  });

})