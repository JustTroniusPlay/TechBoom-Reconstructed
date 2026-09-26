ServerEvents.recipes(event => {

    const blunt_ammo = Item.of('tacz:ammo', 16,'{AmmoId:"create_armorer:rbapb"}').strongNBT();
    event.remove({id:'create_armorer:ammo/rbapb'});

    event.shaped(
    blunt_ammo,
    [
      ' L ',
      'GGG',
      ' C '
    ],
    {
        L: '#forge:nuggets/lead',
        G: 'minecraft:gunpowder',
        C: ['immersiveengineering:empty_casing','crusty_chunks:large_casing']
    })
})