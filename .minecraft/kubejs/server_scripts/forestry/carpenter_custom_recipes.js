ServerEvents.recipes(event => {

    const creo = 
    [
        //'tfmg:creosote',
        'thermal:creosote',
        'gtceu:creosote',
        'immersiveengineering:creosote',
        'railcraft:creosote'
    ]

    //Wooden Ties
    creo.forEach(creo => {
        event.custom({
            type: "forestry:carpenter",
            box: [],
            liquid: {
                Amount: 1000,
                FluidName: creo
            },
            recipe: {
                type: "minecraft:crafting_shaped",
                category: "misc",
                key: {
                "#": {
                    tag: "minecraft:wooden_slabs"
                },
                },
                pattern: [
                "###"
                ],
                result: {
                count: 4,
                item: "railcraft:wooden_tie"
                },
                show_notification: true
            },
            time: 60
        });

        //Treated Planks by 1
        event.custom({
            type: "forestry:carpenter",
            box: [],
            liquid: {
                Amount: 125,
                FluidName: creo
            },
            recipe: {
                type: "minecraft:crafting_shaped",
                category: "misc",
                key: {
                "#": {
                    tag: "minecraft:planks"
                },
                },
                pattern: [
                " # "
                ],
                result: {
                count: 1,
                item: "immersiveengineering:treated_wood_horizontal"
                },
                show_notification: true
            },
            time: 20
        });

        //Treated Planks by 8
        event.custom({
            type: "forestry:carpenter",
            box: [],
            liquid: {
                Amount: 1000,
                FluidName: creo
            },
            recipe: {
                type: "minecraft:crafting_shaped",
                category: "misc",
                key: {
                "#": {
                    tag: "minecraft:planks"
                },
                },
                pattern: [
                "###",
                "# #",
                "###"
                ],
                result: {
                count: 8,
                item: "immersiveengineering:treated_wood_horizontal"
                },
                show_notification: true
            },
            time: 60
        });
    })
})