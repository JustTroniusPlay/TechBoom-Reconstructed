ServerEvents.recipes(event => {

    
    event.remove({id:'create_armorer:attachments/extended_mag_ca_2'});
    const collar = Item.of('tconstruct:tough_binding', '{Material:"tconstruct:copper"}').weakNBT();
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"create_armorer:extended_mag_ca_2"}').strongNBT();

    event.recipes.create.mechanical_crafting(
    atachment,
    [
        'POP',
        'RSR',
        'PSP',
        'LCL'
    ],
    {

        R: '#forge:rods/copper',
        P: '#forge:plates/copper',
        S: 'vintageimprovements:small_copper_spring',
        L: 'minecraft:cut_copper_slab',
        C: 'create:copper_casing',
        O: collar
    })
})