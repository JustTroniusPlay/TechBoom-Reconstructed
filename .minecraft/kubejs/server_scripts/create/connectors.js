ServerEvents.recipes(event => {

    event.remove({id: "createaddition:crafting/large_connector_gold"});
    
    event.remove({id: "create_new_age:shaped/electrical_connector_mirrored"});
    event.remove({id: "create_new_age:shaped/electrical_connector"});
    event.shaped(
    Item.of('create_new_age:electrical_connector', 2), // arg 1: output
    [
        ' A ',
        'BCB', // arg 2: the shape (array of strings)
        'CDC'
    ],
    {
        A: '#forge:rods/silver',
        B: 'create:copper_sheet',  //arg 3: the mapping object
        C: 'create:andesite_alloy',
        D: 'minecraft:smooth_basalt'
    })
})