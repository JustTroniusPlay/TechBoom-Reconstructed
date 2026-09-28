ServerEvents.recipes(event => {

    
    event.remove({id:'create_armorer:attachments/grip_gantry_shaft'});
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"create_armorer:grip_gantry_shaft"}').strongNBT();

    event.shaped(
    atachment,
    [
      'LGL',
      'AGA',
      'LGL'
    ],
    {
        A: 'create:andesite_alloy',
        G: 'create:gantry_shaft',
        L: '#forge:leather'
    })
})