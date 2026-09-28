ServerEvents.recipes(event => {
 
    event.remove({id:'tacz:attachments/light_extended_mag_2'});
    event.remove({id:'tacz:attachments/extended_mag_2'});
    const light = Item.of('tacz:attachment', '{AttachmentId:"tacz:light_extended_mag_2"}').strongNBT();
    const heavy = Item.of('tacz:attachment', '{AttachmentId:"tacz:extended_mag_2"}').strongNBT();

    const plate = '#forge:plates/invar'
    const double_plate = '#forge:double_plates/invar'
    const small_spring = '#forge:small_springs/gold'
    const spring = '#forge:springs/gold'

    event.shaped(
    light,
    [
      'MSM',
      'LSL',
      'PDP'
    ],
    {
        S: small_spring,
        P: plate,
        D: double_plate,
        L: '#forge:gems/lapis',
        M: 'immersiveengineering:component_iron'
    })

    event.shaped(
    heavy,
    [
      'MSM',
      'LSL',
      'DDD'
    ],
    {
        S: spring,
        D: double_plate,
        L: '#forge:gems/lapis',
        M: 'immersiveengineering:component_iron'
    })
})