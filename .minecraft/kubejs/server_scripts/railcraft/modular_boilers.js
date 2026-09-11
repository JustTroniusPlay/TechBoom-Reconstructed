ServerEvents.recipes(event => {

    event.remove({id: "railcraft:fluid_fueled_firebox"});
    event.shaped(
    Item.of('railcraft:fluid_fueled_firebox', 1),
    [
        'ABA',
        'CDC',
        'AEA'
    ],
    {
        A: '#forge:plates/invar',
        B: 'gtceu:steel_firebox_casing',
        C: 'minecraft:iron_bars',
        D: 'gtceu:invar_frame',
        E: 'gtceu:hp_steam_liquid_boiler'
    })

    event.remove({id: "railcraft:solid_fueled_firebox"});
    event.shaped(
    Item.of('railcraft:solid_fueled_firebox', 1),
    [
        'ABA',
        'CDC',
        'AEA'
    ],
    {
        A: 'tconstruct:seared_brick',
        B: 'gtceu:steel_firebox_casing',
        C: '#forge:plates/invar',
        D: 'gtceu:invar_frame',
        E: 'gtceu:hp_steam_solid_boiler'
    })

})