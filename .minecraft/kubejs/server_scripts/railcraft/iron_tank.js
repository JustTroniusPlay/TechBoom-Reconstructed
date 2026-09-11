ServerEvents.recipes(event => {
  
    event.remove({id: "railcraft:iron_tank_gauge"});
    event.shaped(
    Item.of('railcraft:white_iron_tank_gauge', 12),
    [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        A: 'tconstruct:clear_glass',
        B: 'create:iron_sheet',
        C: 'thermal:obsidian_glass'
    })

    event.remove({id: "railcraft:iron_tank_valve"});
    event.shaped(
    Item.of('railcraft:white_iron_tank_valve', 2),
    [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        A: 'immersiveengineering:sheetmetal_iron',
        B: 'gtceu:tin_alloy_normal_fluid_pipe',
        C: 'create:portable_fluid_interface'
    })

    event.remove({id: "railcraft:iron_tank_wall"});
    event.shaped(
    Item.of('railcraft:white_iron_tank_wall', 4)
    [
        ' B ',
        'BCB',
        ' B '
    ],
    {
        B: 'gtceu:double_iron_plate',
        C: 'create:fluid_tank'
    })
})