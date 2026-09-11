ServerEvents.recipes(event => {

    event.remove({id: "ad_astra:compressor"});
    event.shaped(
    Item.of('ad_astra:compressor', 1),
    [
        'ADA',
        'BCB', 
        'AEA'
    ],
    {
        A: 'thermal:steel_ingot',
        B: 'minecraft:piston',  
        C: 'thermal:machine_frame',
        D: 'thermal:rf_coil',
        E: 'gtceu:lv_forge_hammer'
    })
})