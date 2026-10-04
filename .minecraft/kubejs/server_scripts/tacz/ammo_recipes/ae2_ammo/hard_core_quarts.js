ServerEvents.recipes(event => {

    const ammo = Item.of('tacz:ammo', 12, '{AmmoId:"applied_armorer:hard_core_quartz_bullet"}').strongNBT();
    event.remove({id:'applied_armorer:ammo/hard_core_quartz_bullet'});
    event.shaped(
    ammo,
    [
      '   ',
      'GQG',
      'GCG'
    ],
    {
        Q: 'ae2:charged_certus_quartz_crystal',
        G: 'minecraft:gunpowder',
        C: ['immersiveengineering:empty_casing','crusty_chunks:large_casing']
    })
})