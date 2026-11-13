ServerEvents.recipes(event => {
    
    event.remove({ id: 'railcraft:water_tank_siding'})
   
    event.shaped(Item.of('railcraft:water_tank_siding', 8), [
        'PPP',
        'ISI',
        'PPP'
    ], {
        P: '#minecraft:planks',
        S: '#forge:slimeballs',
        I: ['minecraft:iron_ingot','#forge:ingots/bronze']
    }).id('techboom:railcraft_water_tank_siding')
})