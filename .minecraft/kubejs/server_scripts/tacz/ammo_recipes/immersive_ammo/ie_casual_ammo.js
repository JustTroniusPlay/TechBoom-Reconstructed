ServerEvents.recipes(event => {

    const ammo = Item.of('tacz:ammo', 15, '{AmmoId:"immersive_armorer:454_casul"}').strongNBT();
    event.remove({id:'immersive_armorer:ammo/454_casul'});

    event.shaped(
    ammo,
    [
      '   ',
      ' L ',
      'GCG'
    ],
    {
        L: '#forge:nuggets/lead',
        G: 'minecraft:gunpowder',
        C: ['immersiveengineering:empty_casing','crusty_chunks:small_casing']
    })
})