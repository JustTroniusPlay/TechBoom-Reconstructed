ServerEvents.recipes(event => {

    event.remove({id:"applied_armorer:gun/niklas_lever_vigenere"});
    const bow_limb = Item.of('tconstruct:bow_limb', '{Material:"tconstruct:iron"}').weakNBT();
    const bow_grip = Item.of('tconstruct:bow_grip', '{Material:"tconstruct:iron"}').weakNBT();
    const gun = Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"applied_armorer:niklas_lever_vigenere",HasBulletInBarrel:0b}').strongNBT();
    event.shaped(
    gun,
    [
      'SDS',
      'PCL',
      'ASG'
    ],
    {
        L: bow_limb,
        G: bow_grip,
        S: 'ae2:printed_silicon',
        A: ['ae2:fluix_crystal','gtceu:raw_amethyst'],
        C: 'ae2:charged_certus_quartz_crystal',
        P: 'gtceu:potin_small_fluid_pipe',
        D: 'gtceu:double_iron_plate'
    })
})