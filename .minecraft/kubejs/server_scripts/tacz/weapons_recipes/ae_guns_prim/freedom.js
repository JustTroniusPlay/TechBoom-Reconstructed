ServerEvents.recipes(event => {

    event.remove({id:"applied_armorer:gun/niklas_smg_freedom"});
    const bow_limb = Item.of('tconstruct:bow_limb', '{Material:"tconstruct:iron"}').weakNBT();
    const gun = Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"applied_armorer:niklas_smg_freedom",HasBulletInBarrel:0b}').strongNBT();
    event.shaped(
    gun,
    [
      'SGR',
      'OQH',
      'DPS'
    ],
    {
        R: '#forge:rings/iron',
        P: '#forge:double_plates/iron',
        O: 'gtceu:tin_alloy_small_fluid_pipe',
        Q: 'ae2:charged_certus_quartz_crystal',
        D: '#forge:dyes/purple',
        S: 'ae2:silicon',
        H: bow_limb,
        G:'#forge:glass_panes'
    })
})