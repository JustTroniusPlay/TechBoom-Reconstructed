ServerEvents.recipes(event => {

    event.remove({id:'immersive_armorer:attachments/muzzle_refit_he_compound'});
    const component = Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:muzzle_refit_melted_metal_spitter"}').strongNBT();
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:muzzle_refit_he_compound"}').strongNBT();

    event.custom(
        {
            "type":"immersiveengineering:blueprint",
            "category":"specialBullet",
            "inputs":
                [
                    {"item":'minecraft:fire_charge'},
                    {"item":'immersiveengineering:slab_sheetmetal_constantan'},
                    {"item":'immersiveengineering:slab_storage_constantan'},
                    component,
                    {"item":'immersiveengineering:gunpowder_barrel'},
                    {"item":'immersiveengineering:slab_sheetmetal_constantan'},
                    

                ],
            "result": atachment
        }
    )
})