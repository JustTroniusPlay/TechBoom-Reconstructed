ServerEvents.recipes(event => {

    event.remove({id:'immersive_armorer:attachments/sight_light_short'});
    const collar = Item.of('tconstruct:tough_binding', '{Material:"tconstruct:constantan"}').weakNBT();
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:sight_light_short"}').strongNBT();

    event.shaped(
    atachment,
    [
      'CGS',
      'R R',
      'STS'
    ],
    {
        R: '#forge:rods/steel',
        S: '#forge:screws/steel',
        G: 'minecraft:spyglass',
        T: '#forge:sheetmetals/steel',
        C: collar
    })
})