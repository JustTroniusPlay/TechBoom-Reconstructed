ServerEvents.recipes(event => {

    event.remove({id:'create_armorer:attachments/sight_reflex'});
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"create_armorer:sight_reflex"}').strongNBT();

    event.shaped(
    atachment,
    [
      '   ',
      'NGR',
      'SPS'
    ],
    {
        P: '#forge:double_plates/iron',
        R: '#forge:dusts/redstone',
        N: '#forge:rings/gold',
        S: '#forge:screws/gold',
        G: '#forge:glass_panes'
    })
})