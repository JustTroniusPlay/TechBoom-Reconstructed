ServerEvents.recipes(event => {

    event.recipes.gtceu.forge_hammer('techboom:pulp_to_cardboard_gregtech')
        .itemInputs(
        '1x create:pulp'
        )
        .itemOutputs(
        '1x create:cardboard' 
        )
        .duration(10)
        .EUt(1)
    
})