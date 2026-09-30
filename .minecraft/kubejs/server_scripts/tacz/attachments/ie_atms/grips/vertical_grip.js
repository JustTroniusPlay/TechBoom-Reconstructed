ServerEvents.recipes(event => {

    event.remove({id: 'immersive_armorer:attachments/grip_treated_wood'})
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:grip_treated_wood"}').strongNBT();

    event.shaped(
    atachment,
    [
      'CSC',
      ' F ',
      ' H '
    ],
    {
        C: 'gtceu:iron_screw',
        S: 'immersiveengineering:slab_treated_wood_horizontal',
        F: 'immersiveengineering:treated_fence',
        H: 'immersiveengineering:wirecoil_structure_rope'
    })

    const twined = Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:grip_twined"}').strongNBT();

    event.remove({id:'immersive_armorer:attachments/grip_twined'})
    event.shaped(
    twined,
    [
      ' I ',
      'IAI',
      ' I '
    ],
    {
        A: atachment,
        I: 'immersiveengineering:wirecoil_copper_ins'
    })
})