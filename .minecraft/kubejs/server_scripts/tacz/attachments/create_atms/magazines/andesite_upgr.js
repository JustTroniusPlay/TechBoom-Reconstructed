ServerEvents.recipes(event => {

    
    event.remove({id:'create_armorer:attachments/extended_mag_ca_1'});
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"create_armorer:extended_mag_ca_1"}').strongNBT();

    event.shaped(
    atachment,
    [
      'RSR',
      'RSR',
      'ALA'
    ],
    {
        A: 'create:andesite_alloy',
        R: '#forge:rods/andesite',
        S: 'vintageimprovements:andesite_spring',
        L: 'minecraft:polished_andesite_slab'
    })
})