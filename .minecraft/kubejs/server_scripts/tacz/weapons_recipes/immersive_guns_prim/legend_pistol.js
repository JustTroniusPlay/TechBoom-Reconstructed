ServerEvents.recipes(event => {

    event.remove({id:"immersive_armorer:gun/pistol_9mm"});
    const bow_grip = Item.of('tconstruct:bow_grip', '{Material:"tconstruct:iron"}').weakNBT();
    const gun = Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"immersive_armorer:pistol_9mm",HasBulletInBarrel:0b}').strongNBT();
    event.shaped(
    gun,
    [
      'DII',
      'CCH',
      'DPT'
    ],
    {
        T: bow_grip,
        D: 'gtceu:double_iron_plate',
        C: 'immersiveengineering:component_iron',
        H: 'immersiveengineering:wirecoil_structure_rope',
        I: 'gtceu:double_invar_plate',
        P: '#forge:plates/iron'
    })
})