ServerEvents.recipes(event => {

    event.remove({id: 'immersive_armorer:attachments/stock_steady'})
    const component = Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:stock_crude"}').strongNBT();
    const kit = Item.of('tconstruct:repair_kit', '{Material:"tconstruct:treated_wood"}').weakNBT();
    const limb = Item.of('tconstruct:bow_limb', '{Material:"tconstruct:treated_wood"}').weakNBT();
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:stock_steady"}').strongNBT();

    event.shaped(
    atachment,
    [
      'CDS',
      'SKW',
      ' SL'
    ],
    {
        D: '#forge:double_plates/iron',
        S: '#forge:screws/invar',
        W: 'immersiveengineering:wirecoil_electrum',
        K: kit,
        L: limb,
        C: component
    })

})