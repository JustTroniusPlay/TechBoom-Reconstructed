ServerEvents.recipes(event => {

    event.remove({id: 'applied_armorer:attachments/muzzle_bs_mod4'})
    const component = Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_commander"}').strongNBT()
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_bs_mod4"}').strongNBT()
    event.custom(
    {
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": 
            {
                "item": "ae2:matter_ball"
            },
            "middle": component,
            "top": 
            {
                "item": "ae2:fluix_pearl"
            }
        },
        "mode": "press",
        "result": atachment
        
    })

})