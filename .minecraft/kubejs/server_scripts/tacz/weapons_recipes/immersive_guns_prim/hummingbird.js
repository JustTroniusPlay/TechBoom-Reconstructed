ServerEvents.recipes(event => {

    const bow_grip = Item.of('tconstruct:bow_grip', '{Material:"tconstruct:iron"}').weakNBT();
    const gun = Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"immersive_armorer:short_smg",HasBulletInBarrel:0b}').strongNBT();
    event.shaped(
    gun,
    [
      'SRS',
      'CCH',
      'ILT'
    ],
    {
        T: bow_grip,
        R: '#forge:rods/iron',
        S: 'gtceu:iron_screw',
        C: 'immersiveengineering:component_iron',
        H: 'immersiveengineering:wirecoil_structure_rope',
        I: 'gtceu:double_invar_plate',
        L: 'immersiveengineering:ersatz_leather',
    })
})