ServerEvents.recipes(event => {

    event.remove({id: "tconstruct:tables/tinkers_anvil_material"});
    event.remove({id: "tconstruct:tables/tinkers_anvil"});
    event.shaped(
    Item.of('tconstruct:tinkers_anvil', 1),
    [
        'AAA',
        ' B ',
        'BBB'
    ],
    {
        A: 'thermal:steel_block',
        B: '#tconstruct:seared_blocks'
    })

})