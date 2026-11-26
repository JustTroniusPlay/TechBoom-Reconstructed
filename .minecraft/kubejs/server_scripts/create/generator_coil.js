ServerEvents.recipes(event => {

    event.remove({id: "create_new_age:shaped/generator_coil"});
    event.shaped(
    Item.of('create_new_age:generator_coil', 1),
    [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        A: 'immersiveengineering:wirecoil_electrum_ins',
        B: 'immersiveengineering:coil_lv',
        C: 'create:andesite_alloy_block'
    })
})