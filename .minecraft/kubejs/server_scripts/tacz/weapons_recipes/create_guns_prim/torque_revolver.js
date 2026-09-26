ServerEvents.recipes(event => {

    event.remove({id:"create_armorer:gun/pistol_revolver_torque"});
    const bow_grip = Item.of('tconstruct:bow_grip', '{Material:"tconstruct:wood"}').weakNBT();
    const torque_revolver = Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"create_armorer:pistol_revolver_torque",HasBulletInBarrel:1b}').strongNBT();
    event.shaped(
    torque_revolver,
    [
      'RWR',
      'OGC',
      'CBH'
    ],
    {
        R: 'gtceu:gold_ring',
        W: '#forge:stripped_logs',
        O: 'gtceu:long_iron_rod',
        G: '#forge:plates/gold',
        C: 'copycats:copycat_cogwheel',
        B: '#forge:plates/brass',
        H: bow_grip
    })
})