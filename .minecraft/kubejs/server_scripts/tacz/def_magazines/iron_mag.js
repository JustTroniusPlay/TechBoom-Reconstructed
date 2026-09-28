ServerEvents.recipes(event => {
 
    event.remove({id:'tacz:attachments/light_extended_mag_1'});
    event.remove({id:'tacz:attachments/extended_mag_1'});
    const light = Item.of('tacz:attachment', '{AttachmentId:"tacz:light_extended_mag_1"}').strongNBT();
    const heavy = Item.of('tacz:attachment', '{AttachmentId:"tacz:extended_mag_1"}').strongNBT();

    const plate = '#forge:plates/iron'
    const double_plate = '#forge:double_plates/iron'
    const small_spring = '#forge:small_springs/iron'
    const spring = '#forge:springs/iron'

    event.shaped(
    light,
    [
      'RSR',
      'RSR',
      'PDP'
    ],
    {
        R: '#forge:rods/iron',
        S: small_spring,
        P: plate,
        D: double_plate
    })

    event.shaped(
    heavy,
    [
      'PSP',
      'RSR',
      'DDD'
    ],
    {
        R: '#forge:rods/iron',
        S: spring,
        P: plate,
        D: double_plate
    })
})