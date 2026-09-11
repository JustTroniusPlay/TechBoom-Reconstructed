ServerEvents.tags('item', event => {
    
    event.add('forge:slimeballs','gtceu:sticky_resin');
    event.add('forge:slimeballs','thermal:rosin');
    
    event.add('techboom:resins','gtceu:sticky_resin');
    event.add('techboom:resins','thermal:rosin');
})

ServerEvents.recipes(event => {

    event.replaceInput({mod: "gtceu"},
        'gtceu:sticky_resin',
        '#techboom:resins'
    )
})