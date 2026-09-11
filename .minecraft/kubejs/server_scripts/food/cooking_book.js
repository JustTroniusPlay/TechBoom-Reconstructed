ServerEvents.recipes(event => {

    event.replaceInput({id: "cookingforblockheads:crafting_book"},
        'minecraft:diamond',
        ['#forge:seeds','#forge:fruits','#forge:vegetables','#forge:crops']
    )

})