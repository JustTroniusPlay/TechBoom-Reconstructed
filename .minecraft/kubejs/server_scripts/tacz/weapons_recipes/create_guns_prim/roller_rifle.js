ServerEvents.recipes(event => {

    event.remove({id:"create_armorer:gun/rifle_assult_roller"});
    const bow_grip = Item.of('tconstruct:bow_grip', '{Material:"tconstruct:wood"}').weakNBT();
    const tool_handle = Item.of('tconstruct:tool_handle', '{Material:"tconstruct:wood"}').weakNBT();
    const rifle_roller = Item.of('tacz:modern_kinetic_gun', '{AttachmentSCOPE:{Count:1b,id:"minecraft:air",tag:{}},GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"create_armorer:rifle_assult_roller",HasBulletInBarrel:0b}').strongNBT();
    event.shaped(
    rifle_roller,
    [
      'PEF',
      'RBT',
      'WRH'
    ],
    {
        R: 'gtceu:electrum_ring',
        W: '#forge:stripped_logs',
        P: 'gtceu:double_iron_plate',
        B: 'gtceu:potin_tiny_fluid_pipe',
        T: tool_handle,
        H: bow_grip,
        E: 'createdieselgenerators:engine_silencer',
        F: 'create:flywheel'
    })
})