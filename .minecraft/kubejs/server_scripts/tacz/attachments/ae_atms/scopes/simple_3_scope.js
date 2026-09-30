ServerEvents.recipes(event => {

    event.remove({id: 'applied_armorer:attachments/si_simple_3'})
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:si_simple_3"}').strongNBT()
    event.custom(
    {
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": 
            {
                "item": "minecraft:amethyst_shard"
            },
            "middle": 
            {
                "item": "gtceu:double_iron_plate"
            },
            "top": 
            {
                "item": "ae2:silicon"
            }
        },
        "mode": "press",
        "result": atachment
        
    })

})