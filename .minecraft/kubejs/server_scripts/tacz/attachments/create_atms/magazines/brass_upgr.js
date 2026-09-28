ServerEvents.recipes(event => {

    
    event.remove({id:'create_armorer:attachments/extended_mag_ca_3'});
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"create_armorer:extended_mag_ca_3"}').strongNBT();

    event.recipes.create.mechanical_crafting(
    atachment,
    [
        'PCCCP',
        'RSMSR',
        'RSMSR',
        'PPTPP'
    ],
    {

        R: '#forge:rods/brass',
        P: '#forge:plates/brass',
        S: 'vintageimprovements:small_brass_spring',
        T: 'create:railway_casing',
        C: 'create:brass_casing',
        M: 'create:precision_mechanism'
    })
})