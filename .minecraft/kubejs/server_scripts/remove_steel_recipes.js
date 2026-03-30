ServerEvents.tags('item', event => {
  event.add('forge:coal_coke', 'gtceu:coke_gem');
})

ServerEvents.recipes(event => {

    event.remove({id: "warium_additions:compat/create/mixing/steel_ingot"});
    event.remove({id: "createnuclear:mixing/steel"});
    event.remove({id: "electrodynamics:blasting/steel_ingot_from_iron_ingot"});
    event.remove({id: "ad_astra:etrionic_blast_furnace"});//maybe use for some custom recipes later?

    event.replaceInput(
    {id: "gtceu:primitive_blast_furnace/steel_from_coke_gem"},
    "gtceu:coke_gem",
    '#forge:coal_coke'
    )

    event.replaceInput(
    {id: "gtceu:primitive_blast_furnace/steel_from_coke_gem_wrought"},
    "gtceu:coke_gem",
    '#forge:coal_coke'
    )

    event.replaceInput(
    {id: "thermal:machines/smelter/smelter_alloy_steel"},
    "#forge:coal_coke",
    "thermal:coal_coke"
    )
})

