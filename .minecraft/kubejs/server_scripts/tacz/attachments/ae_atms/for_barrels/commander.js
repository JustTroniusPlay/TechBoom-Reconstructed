ServerEvents.recipes(event => {

    const atachment = Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:muzzle_commander"}').strongNBT()
    
    event.shaped(
    atachment,
    [
      'SSS',
      'IIQ',
      'SSS'
    ],
    {

        Q: 'ae2:fluix_crystal',
        I: "minecraft:iron_bars",
        S: "ae2:silicon"
    })

})