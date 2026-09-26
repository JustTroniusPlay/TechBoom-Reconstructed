ServerEvents.recipes(event => {

    const shotgun_ammo = Item.of('tacz:ammo', 9, '{AmmoId:"tacz:12g"}').strongNBT();
    event.remove({id:'tacz:ammo/12g'});

    event.shaped(
    shotgun_ammo,
    [
      'LIL',
      'GGG',
      'GCG'
    ],
    {
        L: '#forge:dusts/lead',
        G: 'minecraft:gunpowder',
        C: ['immersiveengineering:empty_shell','crusty_chunks:shotgun_casing'],
        I: '#forge:dusts/iron'
    })
})