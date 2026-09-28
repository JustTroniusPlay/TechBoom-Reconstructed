ServerEvents.recipes(event => {

    const box = Item.of('tacz:ammo_box', '{Level:1}').strongNBT();
    event.remove({id:'tacz:gold_ammo_box'});

    event.shaped(
    box,
    [
      'STS',
      'CBC',
      'PPP'
    ],
    {
        S: '#forge:springs/gold',
        T: 'immersiveengineering:slab_sheetmetal_gold',
        C: '#forge:screws/rose_gold',
        B: 'gtceu:wood_crate',
        P: '#forge:double_plates/electrum'
    })
})