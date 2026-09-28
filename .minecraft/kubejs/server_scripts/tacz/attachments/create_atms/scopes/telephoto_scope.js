ServerEvents.recipes(event => {
    
    event.remove({id:'create_armorer:attachments/scope_telephoto'});
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"create_armorer:scope_telephoto"}').strongNBT();

    event.recipes.create.mechanical_crafting(
    atachment,
    [
        'PIPPPIP',
        'GAGSGAG',
        'PIBPBIP'
    ],
    {

        P: '#forge:plates/brass',
        B: 'create:industrial_iron_block',
        A: '#forge:gems/amethyst',
        G: 'create:framed_glass',
        S: 'create:speedometer',
        I: 'createdeco:industrial_iron_sheet'
    })
})