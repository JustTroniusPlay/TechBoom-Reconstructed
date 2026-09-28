ServerEvents.recipes(event => {
    
    event.remove({id:'create_armorer:attachments/sight_medium_distance'});
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"create_armorer:sight_medium_distance"}').strongNBT();

    event.recipes.create.mechanical_crafting(
    atachment,
    [
        'PPBP',
        'GAAG',
        'PBPP'
    ],
    {

        P: '#forge:plates/brass',
        B: 'create:belt_connector',
        A: '#forge:gems/amethyst',
        G: 'create:framed_glass'
    })
})