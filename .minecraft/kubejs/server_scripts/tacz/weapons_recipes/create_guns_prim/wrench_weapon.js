ServerEvents.recipes(event => {

    event.remove({id:"create_armorer:gun/special_melee_wrench"});
    
    const wrench = Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:1,GunFireMode:"SEMI",GunId:"create_armorer:special_melee_wrench",HasBulletInBarrel:1b}').strongNBT();
    event.shapeless(
    wrench,
    [
        'create:wrench'
    ])

    const wrench_no_atch = Item.of('tacz:modern_kinetic_gun', '{AttachmentMUZZLE:{Count:1b,id:"minecraft:air",tag:{}},GunCurrentAmmoCount:1,GunFireMode:"SEMI",GunId:"create_armorer:special_melee_wrench",HasBulletInBarrel:1b}').strongNBT();
    event.shapeless(
    'create:wrench',
    [
        [wrench, wrench_no_atch]
    ])

    event.remove({id: 'create_armorer:attachments/muzzle_refit_iron_spike'})
    const wrench_spike = Item.of('tacz:attachment', '{AttachmentId:"create_armorer:muzzle_refit_iron_spike"}').strongNBT();
    event.shaped(
    wrench_spike,
    [
        '   ',
        'PWP',
        'PLL'
    ],
    {
        P: '#forge:plates/iron',
        W: 'createaddition:barbed_wire',
        L: '#forge:stripped_logs'
    })
})