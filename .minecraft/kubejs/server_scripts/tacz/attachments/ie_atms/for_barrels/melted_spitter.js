ServerEvents.recipes(event => {

    event.remove({id:'immersive_armorer:attachments/muzzle_refit_melted_metal_spitter'});
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:muzzle_refit_melted_metal_spitter"}').strongNBT();

    event.shaped(
    atachment,
    [
      'RMA',
      'FCI',
      'RCI'
    ],
    {
        A: '#forge:rods/aluminum',
        M: 'immersiveengineering:component_iron',
        R: '#forge:rings/iron',
        I: '#forge:double_plates/invar',
        C: '#forge:plates/constantan',
        F: 'minecraft:flint_and_steel'
    })
})