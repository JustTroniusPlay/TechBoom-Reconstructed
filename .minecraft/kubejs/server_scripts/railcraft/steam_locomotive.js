ServerEvents.recipes(event => {

    event.remove({id: "railcraft:steam_locomotive"});
    event.shaped(
    Item.of('railcraft:steam_locomotive', 1),
    [
        'AAB',
        'AAB',
        'CDD'
    ],
    {
        A: '#railcraft:iron_tank_wall',
        B: ["gtceu:bronze_firebox_casing","gtceu:steel_firebox_casing"],
        C: 'minecraft:iron_bars',
        D: 'minecraft:minecart',
    }
    )

})