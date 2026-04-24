ServerEvents.tags('item', event => {
    event.add('emtpy_battery','railcraft:zinc_silver_battery_empty');
    event.add('emtpy_battery','railcraft:zinc_carbon_battery_empty');
})

ServerEvents.recipes(event => {
    event.recipes.create.milling([
        Item.of('railcraft:charge_terminal', 2), 
        'railcraft:charge_spool_medium', 
        Item.of('railcraft:slag', 4)], 

        '#emtpy_battery')
        
    event.recipes.create.crushing([
        Item.of('railcraft:charge_terminal', 2), 
        'railcraft:charge_spool_medium', 
        Item.of('railcraft:slag', 4),
        Item.of('railcraft:slag', 2).withChance(0.5)],
        
        '#emtpy_battery')

    event.recipes.gtceu.macerator('techboom:gtceu_batteries_grind')
            .itemInputs(
            '#emtpy_battery'
            )
            .itemOutputs(
            '2x railcraft:charge_terminal')
            .itemOutputs('railcraft:charge_spool_medium')
            .itemOutputs('4x railcraft:slag')
            .duration(300)
            .EUt(15)
    
    event.custom({
        "type": "thermal:pulverizer",
        "ingredient": {
            "tag": "emtpy_battery"
        },
        "result": [
            {
            "item": "railcraft:charge_terminal",
            "chance": 2.0
            },
            {
            "item": "railcraft:charge_spool_medium",
            "chance": 1.0
            },
            {
            "item": "railcraft:slag",
            "chance": 4.0
            }
        ]
    })
})