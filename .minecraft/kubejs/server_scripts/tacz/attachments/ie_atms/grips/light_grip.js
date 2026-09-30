ServerEvents.recipes(event => {

    event.remove({id: 'immersive_armorer:attachments/grip_treated_wood_light'})
    const hadnle = Item.of('tconstruct:tough_handle', '{Material:"tconstruct:treated_wood"}').weakNBT();
    const grip = Item.of('tconstruct:bow_grip', '{Material:"tconstruct:treated_wood"}').weakNBT();
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:grip_treated_wood_light"}').strongNBT();

    event.shaped(
    atachment,
    [
      'SSS',
      'CH ',
      ' CG'
    ],
    {
        C: 'gtceu:invar_screw',
        S: 'immersiveengineering:slab_treated_wood_horizontal',
        H: hadnle,
        G: grip
    })

})