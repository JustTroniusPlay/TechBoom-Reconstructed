ServerEvents.recipes(event => {

    event.remove({id:"immersive_armorer:gun/pump_shotgun"});
    const bow_grip = Item.of('tconstruct:bow_grip', '{Material:"tconstruct:treated_wood"}').weakNBT();
    const tough_handle = Item.of('tconstruct:tough_handle', '{Material:"tconstruct:treated_wood"}').weakNBT();
    const gun = Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"immersive_armorer:pump_shotgun",HasBulletInBarrel:0b}').strongNBT();
    event.shaped(
    gun,
    [
      'TST',
      'CLI',
      'APH'
    ],
    {
        T: 'immersiveengineering:stick_treated',
        S: 'immersiveengineering:slab_treated_wood_horizontal',
        C: 'immersiveengineering:component_iron',
        L: 'gtceu:potin_normal_fluid_pipe',
        I: 'gtceu:double_invar_plate',
        H: bow_grip,
        P: '#forge:plates/iron',
        A: tough_handle
        
    })
})