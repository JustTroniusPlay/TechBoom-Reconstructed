ServerEvents.recipes(event => {
 
    event.remove({id:'tacz:attachments/light_extended_mag_3'});
    event.remove({id:'tacz:attachments/extended_mag_3'});
    const light = Item.of('tacz:attachment', '{AttachmentId:"tacz:light_extended_mag_3"}').strongNBT();
    const heavy = Item.of('tacz:attachment', '{AttachmentId:"tacz:extended_mag_3"}').strongNBT();

    const plate = '#forge:plates/steel'
    const double_plate = '#forge:double_plates/steel'
    const small_spring = ['#forge:small_springs/tungsten','vintageimprovements:small_enderium_spring']
    const spring = ['#forge:springs/tungsten','vintageimprovements:enderium_spring']
    const special_comp = ['#forge:mechanical_component/tungsten','minecraft:netherite_ingot']

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
        L: '#forge:gems/diamond',
        M: special_comp
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
        L: '#forge:gems/diamond',
        M: special_comp
    })
})