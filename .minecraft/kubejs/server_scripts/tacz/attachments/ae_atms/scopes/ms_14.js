ServerEvents.recipes(event => {

    event.remove({id: 'applied_armorer:attachments/scope_ms_14'})
    const component = Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:si_double_sided_mirror"}').strongNBT()
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:scope_ms_14"}').strongNBT()
    
    event.shaped(
    atachment,
    [
      'WRP',
      'GOG',
      'CRC'
    ],
    {
        W: "#forge:screws/iron",
        R: 'ae2:printed_silicon',
        P: "#forge:plates/iron",
        O: component,
        G: 'ae2:fluix_pearl',
        C: "#forge:screws/steel"
    })

})