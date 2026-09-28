ServerEvents.recipes(event => {

    
    event.remove({id:'create_armorer:attachments/sight_simple'});
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"create_armorer:sight_simple"}').strongNBT();

    event.shaped(
    atachment,
    [
      'GNS',
      'RS ',
      'PP '
    ],
    {
        P: '#forge:plates/iron',
        R: '#forge:rods/iron',
        N: '#forge:rings/gold',
        S: '#forge:screws/iron',
        G: '#forge:rings/iron'
    })
})