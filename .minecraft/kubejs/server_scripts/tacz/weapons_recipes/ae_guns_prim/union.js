ServerEvents.recipes(event => {

    event.remove({id:"applied_armorer:gun/niklas_pistol_semi_union"});
    const gun = Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"applied_armorer:niklas_pistol_semi_union",HasBulletInBarrel:0b}').strongNBT();
    event.shaped(
    gun,
    [
      'RPP',
      'OOQ',
      'DSS'
    ],
    {
        R: '#forge:rings/iron',
        P: '#forge:plates/iron',
        O: 'gtceu:potin_small_fluid_pipe',
        Q: 'ae2:charged_certus_quartz_crystal',
        D: '#forge:gems/amethyst',
        S: 'ae2:silicon' 
    })

    //Win-Win

    const win_win = Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"applied_armorer:niklas_pistol_double_win_win",HasBulletInBarrel:1b}').strongNBT();

    const union_ingr = Item.of('tacz:modern_kinetic_gun', '{GunId:"applied_armorer:niklas_pistol_semi_union"}').weakNBT();
    event.shapeless(
    win_win,
    [
        union_ingr,
        union_ingr
    ])
})