ServerEvents.recipes(event => {

    event.remove({id: 'applied_armorer:attachments/scope_xgs_905'})

    const top = Item.of('tacz:attachment', '{AttachmentId:"create_armorer:scope_telephoto"}').strongNBT()
    const middle = Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:scope_ms_14"}').strongNBT()
    const bottom = Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:scope_spyglass_ie"}').strongNBT()

    const atachment = Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:scope_xgs_905"}').strongNBT()
    event.custom(
    {
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": 
            bottom,
            "middle": 
            middle,
            "top": 
            top
        },
        "mode": "press",
        "result": atachment
        
    })

})