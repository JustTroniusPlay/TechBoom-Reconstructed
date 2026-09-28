ServerEvents.recipes(event => {

    event.remove({id:"applied_armorer:gun/niklas_pistol_semi_pride"});
    const bow_grip = Item.of('tconstruct:bow_grip', '{Material:"tconstruct:iron"}').weakNBT();
    const gun = Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"applied_armorer:niklas_pistol_semi_pride",HasBulletInBarrel:0b}').strongNBT();
    event.shaped(
    gun,
    [
      'PPR',
      'DOQ',
      'SSH'
    ],
    {
        R: '#forge:rings/iron',
        P: '#forge:double_plates/iron',
        O: 'gtceu:tin_alloy_small_fluid_pipe',
        Q: 'ae2:charged_certus_quartz_crystal',
        D: '#forge:gems/amethyst',
        S: 'ae2:silicon',
        H: bow_grip
    })
})