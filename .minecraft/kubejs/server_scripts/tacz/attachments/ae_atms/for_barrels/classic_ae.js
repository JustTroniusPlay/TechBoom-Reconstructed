ServerEvents.recipes(event => {

    event.remove({id: 'applied_armorer:attachments/muzzle_classic'})
    
    const commander = Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_commander"}').strongNBT();
    const conpensator = Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_bs_mod4"}').strongNBT();
    const silencer = Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_ns_1"}').strongNBT();
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_classic"}').strongNBT();

    event.custom(
    {
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": commander,
            "middle": silencer,
            "top": conpensator
        },
        "mode": "press",
        "result": atachment
        
    })

})