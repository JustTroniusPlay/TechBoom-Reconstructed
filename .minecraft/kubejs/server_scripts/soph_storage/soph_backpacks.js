ServerEvents.recipes(event => {

    event.remove({id: "sophisticatedbackpacks:backpack"})
        event.shaped(
        Item.of('sophisticatedbackpacks:backpack', 1), 
        [
            "FCF",
            "PXP",
            "FUF"
        ],
        {
            X: 'thermal:satchel',
            P: 'toolbelt:pouch',
            F: 'immersiveengineering:hemp_fabric',
            U: 'sophisticatedbackpacks:upgrade_base',
            C: '#forge:chests/wooden'
        })

    event.remove({id: "sophisticatedbackpacks:copper_backpack"})

    const copper_collar = Item.of('tconstruct:tough_binding', '{Material:"tconstruct:copper"}').weakNBT();

    event.custom({
        type: "sophisticatedbackpacks:backpack_upgrade",
        conditions: [
            {
                type: "sophisticatedcore:item_enabled",
                itemRegistryName:   "sophisticatedbackpacks:copper_backpack"
            }
        ],
        key: {
            X: {
                item: 'sophisticatedbackpacks:backpack'
            },
            P: {
                item: 'gtceu:copper_screw'
            },
            F: {
                item: 'gtceu:double_copper_plate'
            },
            U: {
                item: 'sophisticatedstorage:basic_to_copper_tier_upgrade'
            },
            C: copper_collar
        },
        pattern: [
            "FCF",
            "PXP",
            "FUF"
        ],
        result: {
            "item": "sophisticatedbackpacks:copper_backpack"
        }
  })
    
  event.remove({id: "sophisticatedbackpacks:iron_backpack"});
  event.remove({id: "sophisticatedbackpacks:iron_backpack_from_copper"})

  event.custom({
        type: "sophisticatedbackpacks:backpack_upgrade",
        conditions: [
            {
                type: "sophisticatedcore:item_enabled",
                itemRegistryName:   "sophisticatedbackpacks:iron_backpack"
            }
        ],
        key: {
            X: {
                item: 'sophisticatedbackpacks:copper_backpack'
            },
            P: {
                item: 'gtceu:iron_spring'
            },
            F: {
                item: 'gtceu:double_iron_plate'
            },
            U: {
                item: 'sophisticatedstorage:basic_to_iron_tier_upgrade'
            },
            C: {
                item: "minecraft:iron_block"
            },
            M: {
                item: "immersiveengineering:component_iron"
            }
        },
        pattern: [
            "FCF",
            "PXP",
            "MUM"
        ],
        result: {
            "item": "sophisticatedbackpacks:iron_backpack"
        }
  })

  event.remove({id: "sophisticatedbackpacks:gold_backpack"})

  event.custom({
        type: "sophisticatedbackpacks:backpack_upgrade",
        conditions: [
            {
                type: "sophisticatedcore:item_enabled",
                itemRegistryName:   "sophisticatedbackpacks:gold_backpack"
            }
        ],
        key: {
            X: {
                item: 'sophisticatedbackpacks:iron_backpack'
            },
            P: {
                item: 'gtceu:long_gold_rod'
            },
            F: {
                item: 'create_new_age:overcharged_golden_sheet'
            },
            U: {
                item: 'sophisticatedstorage:iron_to_gold_tier_upgrade'
            },
            C: {
                item: "gtceu:rose_gold_block"
            },
            M: {
                item: "railcraft:gold_electrode"
            }
        },
        pattern: [
            "FCF",
            "PXP",
            "MUM"
        ],
        result: {
            "item": "sophisticatedbackpacks:gold_backpack"
        }
  })

  event.remove({id: "sophisticatedbackpacks:diamond_backpack"})

  event.custom({
        type: "sophisticatedbackpacks:backpack_upgrade",
        conditions: [
            {
                type: "sophisticatedcore:item_enabled",
                itemRegistryName: "sophisticatedbackpacks:diamond_backpack"
            }
        ],
        key: {
            X: {
                item: 'sophisticatedbackpacks:gold_backpack'
            },
            P: {
                item: 'gtceu:raw_diamond'
            },
            F: {
                item: 'create_new_age:overcharged_diamond'
            },
            U: {
                item: 'sophisticatedstorage:gold_to_diamond_tier_upgrade'
            },
            C: {
                item: "gtceu:steel_frame"
            },
            M: {
                tag: "forge:dusts/diamond"
            }
        },
        pattern: [
            "FCF",
            "PXP",
            "MUM"
        ],
        result: {
            "item": "sophisticatedbackpacks:diamond_backpack"
        }
  })
})