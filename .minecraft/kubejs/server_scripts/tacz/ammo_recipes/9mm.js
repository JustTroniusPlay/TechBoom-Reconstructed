ServerEvents.recipes(event => {

    const ammo = Item.of('tacz:ammo', 25, '{AmmoId:"tacz:9mm"}').strongNBT();
    event.remove({id:'tacz:ammo/9mm'});

    event.shaped(
    ammo,
    [
      ' L ',
      ' G ',
      ' C '
    ],
    {
        L: '#forge:nuggets/lead',
        G: 'minecraft:gunpowder',
        C: ['immersiveengineering:empty_casing','crusty_chunks:small_casing']
    })
})