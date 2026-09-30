ServerEvents.recipes(event => {

    event.remove({id:'immersive_armorer:attachments/muzzle_refit_pressure_wave'});
    const component = Item.of('tconstruct:tool_binding', '{Material:"tconstruct:steel"}').strongNBT();
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:muzzle_refit_pressure_wave"}').strongNBT();

    event.custom(
        {
            "type":"immersiveengineering:blueprint",
            "category":"specialBullet",
            "inputs":
                [
                    {"item":'immersiveengineering:toolupgrade_railgun_capacitors'},
                    {"item":'immersiveengineering:toolupgrade_drill_waterproof'},
                    {"tag":'forge:rods/steel'},
                    {"tag":'forge:rods/steel'},
                    component,
                    {"item":'immersiveengineering:gunpowder_barrel'}
                ],
            "result": atachment
        }
    )
})