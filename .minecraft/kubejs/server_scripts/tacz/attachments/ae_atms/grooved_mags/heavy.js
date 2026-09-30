ServerEvents.recipes(event => {

    const inscribing = (top, middle, bottom, result) => 
        {
            event.custom(
            {
                "type": "ae2:inscriber",
                "ingredients": {
                    "bottom": 
                    {
                        "item": bottom
                    },
                    "middle": middle,
                    "top": 
                    {
                        "item": top
                    }
                },
                "mode": "press",
                "result": result
                
            })
        }

    for(let i = 1; i < 4; i++)
    {
        event.remove({id: 'applied_armorer:attachments/extended_mid_mag_aa_' + i});
        let component = Item.of('tacz:attachment', '{AttachmentId:"tacz:extended_mag_' + i + '"}').strongNBT()
        let attachment = Item.of('tacz:attachment', '{AttachmentId:"applied_armorer:extended_mid_mag_aa_' + i + '"}').strongNBT()
        if(i == 1)
        {
            inscribing('minecraft:amethyst_shard', component, 'ae2:silicon', attachment)
        }
        else if(i == 2)
        {
            inscribing('ae2:charged_certus_quartz_crystal', component, 'gtceu:certus_quartz_gem', attachment)
        }
        else if (i == 3)
        {
            inscribing('ae2:matter_ball', component, 'ae2:fluix_pearl', attachment)
        }
    }
    
    

})