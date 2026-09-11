ServerEvents.recipes(event => {

    event.remove({id: "railcraft:steel_tank_gauge"});
    event.shaped(
    Item.of('railcraft:white_steel_tank_gauge', 12),
    [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        A: 'tconstruct:clear_glass',
        B: 'thermal:steel_plate',
        C: 'thermal:obsidian_glass'
    })

    event.remove({id: "railcraft:steel_tank_valve"});
    event.shaped(
    Item.of('railcraft:white_steel_tank_valve', 4),
    [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        A: 'immersiveengineering:sheetmetal_steel',
        B: 'gtceu:steel_normal_fluid_pipe',
        C: 'gtceu:steel_tank_valve'
    })

    event.remove({id: "railcraft:steel_tank_wall"});
    event.shaped(
    Item.of('railcraft:white_steel_tank_wall', 4),
    [
        ' B ',
        'BCB',
        ' B '
    ],
    {
        B: 'gtceu:double_steel_plate',
        C: 'create:fluid_tank'
    })

})