ServerEvents.tags('item', event => {

  event.add('forge:creosot_bucket', 'immersiveengineering:creosote_bucket');
  event.add('forge:creosot_bucket', 'railcraft:creosote_bucket');
  event.add('forge:creosot_bucket', 'tfmg:creosote_bucket');
  event.add('forge:creosot_bucket', 'gtceu:creosote_bucket');
  event.add('forge:creosot_bucket', 'thermal:creosote_bucket');
})

ServerEvents.recipes(event => {

  

    event.remove({id: "railcraft:manual_rolling_machine"});
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
)

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
    C: 'gtceu:lv_forge_hammer',
    D: 'railcraft:manual_rolling_machine',
    E: 'railcraft:charge_motor'
  }
)

event.replaceInput(
        {id: "railcraft:wooden_tie"},
        'railcraft:creosote_bucket',
        '#forge:creosot_bucket'
    )
})