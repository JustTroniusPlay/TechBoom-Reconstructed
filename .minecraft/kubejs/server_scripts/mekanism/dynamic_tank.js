ServerEvents.recipes(event => {

    event.remove({id: "mekanism:dynamic_tank"});
    event.remove({id: "mekanism:dynamic_valve"});
    event.remove({id: "mekanism:structural_glass"});

    event.shaped(
    Item.of('mekanism:structural_glass', 4),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'gtceu:laminated_glass',
      B: 'gtceu:double_tungsten_steel_plate',
      C: 'thermal:enderium_glass'
    })

    event.shaped(
    Item.of('mekanism:dynamic_valve', 4),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'gtceu:robust_machine_casing',
      B: 'gtceu:tungsten_steel_large_fluid_pipe',
      C: '#railcraft:steel_tank_valve'
    })

    event.shaped(
    Item.of('mekanism:dynamic_tank', 4),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'gtceu:inert_machine_casing',
      B: 'gtceu:double_tungsten_steel_plate',
      C: 'mekanism:ultimate_fluid_tank'
    })

})