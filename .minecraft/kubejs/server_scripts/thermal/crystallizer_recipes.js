ServerEvents.recipes(event => {

    //Certus Quartz
    event.custom({"type": "thermal:crystallizer",
        "ingredients": [
            {
                "fluid": "minecraft:water",
                "amount": 8000
            },
            {
                "item": "ae2:certus_quartz_dust"
            },
            {
                "item": "ae2:charged_certus_quartz_crystal"
            }
        ],
        "result": [
            {
                count: 4,
                "item": "ae2:certus_quartz_crystal"
            }
        ],
        "energy": 500
    })

    //Fluix from dust
    event.custom({"type": "thermal:crystallizer",
        "ingredients": [
            {
                "fluid": "minecraft:water",
                "amount": 1000
            },
            {
                "item": "ae2:fluix_dust"
            },
            {
                "item": "ae2:charged_certus_quartz_crystal"
            }
        ],
        "result": [
            {
                count: 1,
                "item": "ae2:fluix_crystal"
            }
        ],
        "energy": 250
    })

    //Fluix from Skydust
    event.custom({"type": "thermal:crystallizer",
        "ingredients": [
            {
                "fluid": "minecraft:water",
                "amount": 8000
            },
            {
                "item": "ae2:sky_dust"
            },
            {
                "item": "ae2:charged_certus_quartz_crystal"
            }
        ],
        "result": [
            {
                count: 1,
                "item": "ae2:fluix_crystal"
            }
        ],
        "energy": 2000
    })

    //Fluix from Rose Quarts
    event.custom({"type": "thermal:crystallizer",
        "ingredients": [
            {
                "fluid": "minecraft:water",
                "amount": 2000
            },
            {
                "item": "create:rose_quartz"
            },
            {
                "item": "ae2:charged_certus_quartz_crystal"
            }
        ],
        "result": [
            {
                count: 4,
                "item": "ae2:fluix_crystal"
            }
        ],
        "energy": 500
    })

    //Fluix from Redstone Acid
    event.custom({"type": "thermal:crystallizer",
        "ingredients": [
            {
                "fluid": "immersiveengineering:redstone_acid",
                "amount": 4000
            },
            {
                "tag": "forge:dusts/quartz"
            },
            {
                "item": "ae2:charged_certus_quartz_crystal"
            }
        ],
        "result": [
            {
                count: 4,
                "item": "ae2:fluix_crystal"
            }
        ],
        "energy": 500
    })
})