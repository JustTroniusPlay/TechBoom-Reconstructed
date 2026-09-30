ServerEvents.recipes(event => {

    event.remove({id:'immersive_armorer:attachments/muzzle_extended_barrel'});
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:muzzle_extended_barrel"}').strongNBT();

    event.shaped(
    atachment,
    [
      'DID',
      'PPP',
      'DID'
    ],
    {
        I: '#forge:double_plates/invar',
        D: '#forge:double_plates/iron',
        P: 'gtceu:tin_alloy_small_fluid_pipe'
    })
})