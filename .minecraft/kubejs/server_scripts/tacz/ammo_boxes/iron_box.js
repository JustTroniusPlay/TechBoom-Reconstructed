ServerEvents.recipes(event => {

    const box = Item.of('tacz:ammo_box', '{Level:0}').strongNBT();
    event.remove({id:'tacz:iron_ammo_box'});

    event.shaped(
    box,
    [
      'STS',
      'CBC',
      'PPP'
    ],
    {
        S: '#forge:small_springs/iron',
        T: 'minecraft:iron_trapdoor',
        C: '#forge:screws/iron',
        B: 'gtceu:wood_crate',
        P: '#forge:plates/iron'
    })
})