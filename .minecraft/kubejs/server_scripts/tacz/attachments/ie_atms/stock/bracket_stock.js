ServerEvents.recipes(event => {

    event.remove({id: 'immersive_armorer:attachments/stock_bracket'})
    const kit = Item.of('tconstruct:repair_kit', '{Material:"tconstruct:wood"}').weakNBT();
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:stock_bracket"}').strongNBT();

    event.shaped(
    atachment,
    [
      ' RK',
      'DAD',
      'S S'
    ],
    {
        D: '#forge:double_plates/iron',
        S: '#forge:screws/invar',
        A: '#forge:rods/aluminum',
        K: kit,
        R: '#forge:plates/rose_gold',
    })

})