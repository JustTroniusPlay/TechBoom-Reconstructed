ServerEvents.recipes(event => {

    event.remove({id: 'applied_armorer:attachments/sight_type_3741'})
    const component =  Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:si_simple_3"}').strongNBT()
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:sight_type_3741"}').strongNBT()
    event.custom(
    {
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": 
            {
                "item": "minecraft:glass_pane"
            },
            "middle": component,
            "top": 
            {
                "item": "ae2:sky_dust"
            }
        },
        "mode": "press",
        "result": atachment
        
    })

})