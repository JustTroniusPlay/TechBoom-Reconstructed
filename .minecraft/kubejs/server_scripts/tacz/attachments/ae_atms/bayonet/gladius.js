ServerEvents.recipes(event => {

    event.remove({id: 'applied_armorer:attachments/bayonet_gladius'})
    const component = Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:bayonet_er"}').strongNBT()
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:bayonet_gladius"}').strongNBT()
    event.custom(
    {
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": 
            {
                "item": "ae2:nether_quartz_sword"
            },
            "middle": component,
            "top": 
            {
                "item": "ae2:printed_silicon"
            }
        },
        "mode": "press",
        "result": atachment
        
    })

})