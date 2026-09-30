ServerEvents.recipes(event => {

    event.remove({id: 'applied_armorer:attachments/si_ms_12'})
    const component = Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:sight_type_3741"}').strongNBT()
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:si_ms_12"}').strongNBT()
    
    event.shaped(
    atachment,
    [
      ' Q ',
      'GOG',
      'CPC'
    ],
    {
        P: "#forge:double_plates/iron",
        O: component,
        G: 'ae2:quartz_vibrant_glass',
        Q: 'ae2:charged_certus_quartz_crystal',
        C: "#forge:screws/steel"
    })

})