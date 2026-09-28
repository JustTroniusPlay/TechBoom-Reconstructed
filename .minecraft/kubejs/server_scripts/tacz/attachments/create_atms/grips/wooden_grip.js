ServerEvents.recipes(event => {

    
    event.remove({id:'create_armorer:attachments/grip_wooden'});
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"create_armorer:grip_wooden"}').strongNBT();

    event.shaped(
    atachment,
    [
      'ABA',
      'LFL',
      'ABA'
    ],
    {
        A: 'create:andesite_alloy',
        B: 'create:andesite_alloy_block',
        F: '#minecraft:wooden_fences',
        L: '#forge:leather'
    })
})