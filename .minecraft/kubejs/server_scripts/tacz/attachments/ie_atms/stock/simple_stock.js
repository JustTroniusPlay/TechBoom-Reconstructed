ServerEvents.recipes(event => {

    event.remove({id: 'immersive_armorer:attachments/stock_simple'})
    const kit = Item.of('tconstruct:repair_kit', '{Material:"tconstruct:treated_wood"}').weakNBT();
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:stock_simple"}').strongNBT();

    event.shaped(
    atachment,
    [
      'S K',
      'DAD',
      'S S'
    ],
    {
        D: '#forge:double_plates/iron',
        S: '#forge:screws/invar',
        A: '#forge:rods/aluminum',
        K: kit
    })

})