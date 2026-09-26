ServerEvents.recipes(event => {

    event.remove({id:"create_armorer:gun/shotgun_db_stone"});
    const bow_grip = Item.of('tconstruct:bow_grip', '{Material:"tconstruct:wood"}').weakNBT();
    const tool_handle = Item.of('tconstruct:tool_handle', '{Material:"tconstruct:wood"}').weakNBT();
    const stone_shotgun = Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"create_armorer:shotgun_db_stone",HasBulletInBarrel:1b}').strongNBT();
    event.shaped(
    stone_shotgun,
    [
      'PDR',
      'BCD',
      'BTH'
    ],
    {
        R: 'gtceu:gold_ring',
        D: 'gtceu:double_brass_plate',
        B: 'gtceu:potin_normal_fluid_pipe',
        T: tool_handle,
        H: bow_grip,
        C: 'copycats:copycat_cogwheel',
        P: 'gtceu:double_iron_plate'
    })
})