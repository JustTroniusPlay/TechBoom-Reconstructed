ServerEvents.recipes(event => {

    const bow_grip = Item.of('tconstruct:bow_grip', '{Material:"tconstruct:treated_wood"}').weakNBT();
    const bow_limb = Item.of('tconstruct:bow_limb', '{Material:"tconstruct:treated_wood"}').weakNBT();
    const gun = Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"immersive_armorer:assult_rifle",HasBulletInBarrel:1b}').strongNBT();
    event.shaped(
    gun,
    [
      'DSD',
      'CLB',
      'ARH'
    ],
    {
        D: 'gtceu:double_iron_plate',
        S: 'immersiveengineering:slab_treated_wood_horizontal',
        C: 'immersiveengineering:component_iron',
        L: 'gtceu:potin_normal_fluid_pipe',
        B: bow_limb,
        H: bow_grip,
        R: '#forge:rods/iron',
        A: 'railcraft:rebar'
        
    })
})