ServerEvents.recipes(event => {

    event.remove({id:'create_armorer:attachments/sight_standard'});
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"create_armorer:sight_standard"}').strongNBT();

    event.shaped(
    atachment,
    [
      'PBP',
      'GAG',
      'PBP'
    ],
    {
        P: '#forge:plates/brass',
        B: 'create:belt_connector',
        A: '#forge:gems/amethyst',
        G: '#forge:glass_panes'
    })
})