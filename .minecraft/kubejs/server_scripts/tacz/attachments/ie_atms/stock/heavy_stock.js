ServerEvents.recipes(event => {

    event.remove({id: 'immersive_armorer:attachments/stock_heavy'})
    const component = Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:stock_simple"}').strongNBT();
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:stock_heavy"}').strongNBT();

    event.shaped(
    atachment,
    [
      'SAS',
      'CWD',
      'SAS'
    ],
    {
        D: '#forge:double_plates/steel',
        S: '#forge:screws/invar',
        A: '#forge:rods/aluminum',
        W: 'immersiveengineering:wirecoil_electrum',
        C: component
    })

})