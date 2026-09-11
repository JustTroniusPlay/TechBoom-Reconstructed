ServerEvents.recipes(event => {

    event.replaceInput({id:"railcraft:manual_rolling_machine"},
        "minecraft:crafting_table",
        "gtceu:bronze_gearbox"
    )

    event.remove({id: "railcraft:powered_rolling_machine"});
    event.shaped(
    Item.of('railcraft:powered_rolling_machine', 1),
    [
        'ACA',
        'BDB',
        'AEA'
    ],
    {
        A: 'thermal:steel_gear',
        B: 'gtceu:lv_electric_piston',
        C: 'create:mechanical_press',
        D: 'railcraft:manual_rolling_machine',
        E: 'railcraft:charge_motor'
    }
    )
    
})