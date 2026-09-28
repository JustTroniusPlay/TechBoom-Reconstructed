ServerEvents.recipes(event => {

    event.remove({id:'immersive_armorer:attachments/scope_spyglass_ie'});
    const collar = Item.of('tconstruct:tough_binding', '{Material:"tconstruct:constantan"}').weakNBT();
    const component = Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:sight_light_short"}').strongNBT();
    const atachment = Item.of('tacz:attachment', '{AttachmentId:"immersive_armorer:scope_spyglass_ie"}').strongNBT();

    event.custom(
        {
            "type":"immersiveengineering:blueprint",
            "category":"specialBullet",
            "inputs":
                [
                    collar,
                    {"item":"immersiveengineering:component_electronic"},
                    {"item":"tconstruct:clear_glass_pane"},
                    component,
                    {"item":"immersiveengineering:component_steel"},
                    {"item":"immersiveengineering:voltmeter"}

                ],
            "result": atachment
        }
    )
})