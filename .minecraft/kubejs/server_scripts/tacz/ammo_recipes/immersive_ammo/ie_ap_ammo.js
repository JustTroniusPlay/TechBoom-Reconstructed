ServerEvents.recipes(event => {

    const ammo = Item.of('tacz:ammo', 15, '{AmmoId:"immersive_armorer:ap_ammo"}').strongNBT();
    event.remove({id:'immersive_armorer:ammo/ap_ammo'});

    event.shaped(
    ammo,
    [
      '   ',
      'GLG',
      'GCG'
    ],
    {
        L: '#forge:nuggets/lead',
        G: 'minecraft:gunpowder',
        C: ['immersiveengineering:empty_casing','crusty_chunks:medium_casing']
    })
})