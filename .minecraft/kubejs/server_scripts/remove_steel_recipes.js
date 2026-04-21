ServerEvents.recipes(event => {

    event.remove({id: "warium_additions:compat/create/mixing/steel_ingot"});
    event.remove({id: "createnuclear:mixing/steel"});
    event.remove({id: "electrodynamics:blasting/steel_ingot_from_iron_ingot"});
    event.remove({id: "ad_astra:etrionic_blast_furnace"});//maybe use for some custom recipes later?
})

