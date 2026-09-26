ServerEvents.recipes(event => {

    event.remove({id:"create_armorer:gun/sniper_semi_m1"});
    const bow_grip = Item.of('tconstruct:bow_grip', '{Material:"tconstruct:wood"}').weakNBT();
    const tool_handle = Item.of('tconstruct:tool_handle', '{Material:"tconstruct:wood"}').weakNBT();
    const classical_m1 = Item.of('tacz:modern_kinetic_gun', '{AttachmentGRIP:{Count:1b,id:"minecraft:air",tag:{}},AttachmentSCOPE:{Count:1b,id:"minecraft:air",tag:{}},GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"create_armorer:sniper_semi_m1",HasBulletInBarrel:1b}').strongNBT();
    event.shaped(
    classical_m1,
    [
      'IRD',
      'BBT',
      'WPH'
    ],
    {
        R: 'gtceu:electrum_ring',
        W: '#forge:stripped_logs',
        D: 'gtceu:double_brass_plate',
        B: 'gtceu:potin_tiny_fluid_pipe',
        T: tool_handle,
        H: bow_grip,
        P: '#forge:plates/brass',
        I: '#forge:bolts/invar'
    })
})