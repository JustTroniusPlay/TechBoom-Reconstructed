ServerEvents.recipes(event => {

    event.remove({id:'immersive_armorer:attachments/sight_light'});
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:sight_light"}').strongNBT();

    event.shaped(
    atachment,
    [
      'ICW',
      'RMC',
      'PPP'
    ],
    {
        R: '#forge:rods/iron',
        P: '#forge:plates/iron',
        I: '#forge:rings/iron',
        M: 'immersiveengineering:component_iron',
        C: '#forge:plates/constantan',
        W: '#forge:wires/aluminum'
    })
})