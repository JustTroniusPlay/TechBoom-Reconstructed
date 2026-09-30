ServerEvents.recipes(event => {

    event.remove({id: 'applied_armorer:attachments/si_double_sided_mirror'})
    const component = Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:si_profession"}').strongNBT()
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:si_double_sided_mirror"}').strongNBT()
    event.custom(
    {
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": 
            {
                "item": "ae2:fluix_crystal"
            },
            "middle": component,
            "top": 
            {
                "item": "ae2:quartz_glass"
            }
        },
        "mode": "press",
        "result": atachment
        
    })

})