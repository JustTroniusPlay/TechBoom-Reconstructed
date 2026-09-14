ServerEvents.recipes(event => {

    event.remove({id: "railcraft:crusher"});
    event.shaped(
    Item.of('railcraft:crusher', 12),
    [
        'SHS',
        'GXG',
        'CMC'
    ],
    {
        X: 'gtceu:steam_grinder',
        H: 'gtceu:diamond_grinding_head',
        M: 'railcraft:charge_motor',

        S: 'gtceu:steel_machine_casing',
        G: 'gtceu:steel_gearbox',
        C: 'thermal:rf_coil'


    })

})