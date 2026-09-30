ServerEvents.recipes(event => {

    event.remove({id: 'applied_armorer:attachments/bayonet_er'})

    const binding = Item.of('tconstruct:tool_binding', '{Material:"tconstruct:iron"}').weakNBT()
    const limb = Item.of('tconstruct:bow_limb', '{Material:"tconstruct:iron"}').weakNBT()
    const blade = Item.of('tconstruct:small_blade', '{Material:"tconstruct:flint"}').weakNBT()

    const atachment = Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:bayonet_er"}').strongNBT()
    
    event.shaped(
    atachment,
    [
      ' LW',
      'PSP',
      'SBS'
    ],
    {

        P: "#forge:plates/iron",
        S: "ae2:silicon",
        B: binding,
        L: limb,
        W: blade
    })

})