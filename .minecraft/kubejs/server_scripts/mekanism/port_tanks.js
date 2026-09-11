ServerEvents.recipes(event => {

    event.remove({id: "mekanism:fluid_tank/basic"});
    event.shaped(
    Item.of('mekanism:basic_fluid_tank', 1),
    [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        A: 'mekanism:alloy_infused',
        B: '#forge:ingots/steel',
        C: 'immersiveengineering:metal_barrel'
    })

    event.remove({id: "mekanism:fluid_tank/advanced"});
    event.shaped(
    Item.of('mekanism:advanced_fluid_tank', 1),
    [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        A: 'mekanism:alloy_infused',
        B: 'thermal:signalum_ingot',
        C: 'mekanism:basic_fluid_tank'
    })

    event.remove({id: "mekanism:fluid_tank/elite"});
    event.shaped(
    Item.of('mekanism:elite_fluid_tank', 1),
    [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        A: 'mekanism:alloy_reinforced',
        B: 'thermal:enderium_ingot',
        C: 'mekanism:advanced_fluid_tank'
    })

    event.remove({id: "mekanism:fluid_tank/ultimate"});
    event.shaped(
    Item.of('mekanism:ultimate_fluid_tank', 1),
    [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        A: 'mekanism:alloy_atomic',
        B: 'create:sturdy_sheet',
        C: 'mekanism:elite_fluid_tank'
    })
})