ServerEvents.recipes(event => {

    event.remove({id: "thermal:rf_coil"});
    event.shaped(
    Item.of('thermal:rf_coil', 1), 
    [
        ' B ',
        'BAB', 
        ' B '
    ],
    {
        A: 'gtceu:long_gold_rod',
        B: 'immersiveengineering:wirecoil_redstone'  
    })

})