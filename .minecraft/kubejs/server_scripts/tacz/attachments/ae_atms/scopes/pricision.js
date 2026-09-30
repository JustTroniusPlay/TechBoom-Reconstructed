ServerEvents.recipes(event => {

    event.remove({id: 'applied_armorer:attachments/si_pricision'})
    const component =  Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:si_simple_3"}').strongNBT()
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:si_pricision"}').strongNBT()
    
    event.shaped(
    atachment,
    [
      'PP ',
      'GAP',
      'SSC'
    ],
    {
        P: "#forge:plates/iron",
        G: "#forge:glass_panes",
        A: component,
        S: "ae2:silicon",
        C: "#forge:screws/iron"
    })

})