ServerEvents.recipes(event => {

    const box = Item.of('tacz:ammo_box', '{Level:2}').strongNBT();
    event.remove({id:'tacz:diamond_ammo_box'});

    event.shaped(
    box,
    [
      'STS',
      'CBC',
      'DPD'
    ],
    {
        S: '#forge:springs/steel',
        T: 'immersiveengineering:slab_sheetmetal_steel',
        C: 'minecraft:diamond_block',
        B: 'gtceu:wood_crate',
        D: '#forge:double_plates/steel',
        P: '#forge:plates/steel'
    })
})