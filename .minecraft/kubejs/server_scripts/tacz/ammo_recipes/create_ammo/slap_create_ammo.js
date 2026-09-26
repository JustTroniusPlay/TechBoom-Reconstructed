ServerEvents.recipes(event => {

    const slap_ammo = Item.of('tacz:ammo', 30, '{AmmoId:"create_armorer:slap"}').strongNBT();
    event.remove({id:'create_armorer:ammo/slap'});

    event.shaped(
    slap_ammo,
    [
      'LLL',
      'GGG',
      'PCP'
    ],
    {
        L: '#forge:nuggets/lead',
        G: 'minecraft:gunpowder',
        C: ['immersiveengineering:empty_casing','crusty_chunks:medium_casing'],
        P: '#forge:plates/iron'
    })
})