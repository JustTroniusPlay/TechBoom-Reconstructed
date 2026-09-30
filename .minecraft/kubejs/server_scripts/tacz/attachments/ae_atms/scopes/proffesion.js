ServerEvents.recipes(event => {

    event.remove({id: 'applied_armorer:attachments/si_profession'})
    const component = Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:si_simple_3"}').strongNBT()
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:si_profession"}').strongNBT()
    
    event.shaped(
    atachment,
    [
      'EQE',
      'OAS',
      'CPC'
    ],
    {
        E: 'ae2:ender_dust',
        Q: 'ae2:charged_certus_quartz_crystal',
        O: component,
        A: 'minecraft:amethyst_shard',
        S: "ae2:silicon",
        P: "#forge:plates/iron",
        C: "#forge:screws/iron"
    })

})