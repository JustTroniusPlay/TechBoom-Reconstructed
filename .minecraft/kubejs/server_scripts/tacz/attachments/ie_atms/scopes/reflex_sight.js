ServerEvents.recipes(event => {

    event.remove({id:'immersive_armorer:attachments/sight_simple_reflex'});
    const collar = Item.of('tconstruct:tough_binding', '{Material:"tconstruct:treated_wood"}').weakNBT();
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:sight_simple_reflex"}').strongNBT();

    event.shaped(
    atachment,
    [
      'SCT',
      'RGR',
      'SPS'
    ],
    {
        R: '#forge:rods/treated_wood',
        P: '#forge:double_plates/iron',
        S: '#forge:screws/iron',
        G: '#forge:glass_panes',
        T: '#forge:dusts/redstone',
        C: collar
    })
})