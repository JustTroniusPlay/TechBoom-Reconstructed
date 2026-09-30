ServerEvents.recipes(event => {

    event.remove({id:'immersive_armorer:attachments/muzzle_refit_extra_heavy_barrel'});
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:muzzle_refit_extra_heavy_barrel"}').strongNBT();

    event.shaped(
    atachment,
    [
      ' R ',
      'SMP',
      'AMA'
    ],
    {
        A: '#forge:rods/aluminum',
        M: 'immersiveengineering:component_iron',
        S: 'gtceu:tin_alloy_small_fluid_pipe',
        P: 'gtceu:tin_alloy_normal_fluid_pipe',
        R: '#forge:rings/iron',
    })
})