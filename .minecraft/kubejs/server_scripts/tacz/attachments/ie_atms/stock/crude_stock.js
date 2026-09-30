ServerEvents.recipes(event => {

    event.remove({id: 'immersive_armorer:attachments/stock_crude'})
    
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:stock_crude"}').strongNBT();

    event.shaped(
    atachment,
    [
      'DSO',
      'SRW',
      'AEO'
    ],
    {
        D: '#forge:double_plates/iron',
        R: '#forge:rings/iron',
        S: '#forge:screws/iron',
        O: '#forge:rods/aluminum',
        W: '#forge:wires/aluminum',
        A:'#forge:plates/aluminum',
        E: 'immersiveengineering:ersatz_leather'
    })

})