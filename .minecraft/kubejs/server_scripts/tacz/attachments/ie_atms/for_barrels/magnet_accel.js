ServerEvents.recipes(event => {

    event.remove({id:'immersive_armorer:attachments/muzzle_refit_electromagnetic_accelerator'});
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:muzzle_refit_electromagnetic_accelerator"}').strongNBT();

    event.custom(
        {
            "type":"immersiveengineering:blueprint",
            "category":"electrode",
            "inputs":
                [
                    {"tag":'forge:rods/long/copper'},
                    {"item":'immersiveengineering:toolupgrade_powerpack_magnet'},
                    {"item":'immersiveengineering:toolupgrade_powerpack_induction'},
                    {"item":'immersiveengineering:coil_mv'},
                    {"tag":'forge:rods/long/copper'},
                    {"item":'immersiveengineering:toolupgrade_powerpack_magnet'}

                ],
            "result": atachment
        }
    )
})