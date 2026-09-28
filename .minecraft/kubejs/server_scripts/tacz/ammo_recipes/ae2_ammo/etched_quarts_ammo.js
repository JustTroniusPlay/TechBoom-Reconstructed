ServerEvents.recipes(event => {

    const ammo = Item.of('tacz:ammo', 30, '{AmmoId:"applied_armorer:etched_quartz_bullet"}').strongNBT();
    event.remove({id:'applied_armorer:ammo/etched_quartz_bullet'});
    event.shaped(
    ammo,
    [
      '   ',
      ' Q ',
      'GCG'
    ],
    {
        Q: '#forge:dusts/certus_quartz',
        G: 'minecraft:gunpowder',
        C: ['immersiveengineering:empty_casing','crusty_chunks:small_casing']
    })
})