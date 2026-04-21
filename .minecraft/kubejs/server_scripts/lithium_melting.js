ServerEvents.recipes(event => {
    
    event.custom({
                    "type": "tconstruct:ore_melting",
                    "ingredient": 
                    {
                        "tag": "forge:raw_materials/lithium"
                    },
                    "rate": "metal",
                    "result": 
                    {
                        "amount": 144,
                        "fluid": "gtceu:lithium"
                    },
                    "temperature": 800,
                    "time": 22,
                })

    event.custom({
    "type": "tconstruct:casting_table",
    "cast": {
        "tag": "tconstruct:casts/multi_use/ingot"
    },
    "cooling_time": 60,
    "fluid": {
        "amount": 90,
        "fluid": "gtceu:lithium"
    },
    "result": {
        "item": "tfmg:lithium_ingot"
    }
})

    event.custom({
        "type": "tconstruct:casting_basin",
        "cooling_time": 180,
        "fluid": {
            "amount": 810,
            "fluid": "gtceu:lithium"
        },
        "result": {
            "item": 'tfmg:lithium_block'
        }
    })

    event.recipes.gtceu.macerator('techboom:tfmg_gt_lithium_grind')
            .itemInputs(
            'tfmg:lithium_block'
            )
            .itemOutputs(
            '9x tfmg:crushed_raw_lithium')
            .duration(500)
            .EUt(1)
    
    event.custom({
        "type": "thermal:pulverizer",
        "ingredient": {
            "item": 'tfmg:lithium_block'
        },
        "result": [
            {
            "item": "tfmg:crushed_raw_lithium",
            "chance": 9.0
            }
        ]
    })

    event.remove({id:"tfmg:crafting/kinetics/lithium_ingot_from_decompacting"})
    event.remove({id:"tfmg:crafting/kinetics/lithium_block_from_compacting"})

    event.replaceOutput({Output: 'createmetalwork:crushed_raw_lithium'},
        'createmetalwork:crushed_raw_lithium',
        "tfmg:crushed_raw_lithium"
    )

})