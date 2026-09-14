ServerEvents.recipes(event => {

    event.remove({id: "sophisticatedbackpacks:tank_upgrade"})
        event.shaped(
        Item.of('sophisticatedbackpacks:tank_upgrade', 1), 
        [
            "GGG",
            "GBG",
            "GGG"
        ],
        {
            G: '#forge:glass_panes',
            B: 'sophisticatedbackpacks:upgrade_base',
        })

    event.remove({id: "sophisticatedbackpacks:pump_upgrade"})
    event.shaped(
    Item.of('sophisticatedbackpacks:pump_upgrade', 1), 
    [
        'GUG',
        'PBS', 
        'GUG'
    ],
    {
        G: '#forge:glass_panes',
        U: 'minecraft:bucket',
        P: 'minecraft:piston',
        B: 'sophisticatedbackpacks:upgrade_base',
        S: 'minecraft:sticky_piston',
    })
})