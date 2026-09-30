ServerEvents.recipes(event => {

    event.remove({id: 'applied_armorer:attachments/muzzle_ns_1'})
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_ns_1"}').strongNBT()
    
    event.shaped(
    atachment,
    [
      'SSP',
      'RRQ',
      'SSP'
    ],
    {
        P: "#forge:plates/iron",
        Q: 'ae2:charged_certus_quartz_crystal',
        R: "#forge:rods/iron",
        S: "ae2:silicon"
    })

})