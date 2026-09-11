ServerEvents.recipes(event => {

    event.shapeless(
        Item.of('gtceu:treated_wood_planks',1),
        'immersiveengineering:treated_wood_horizontal'
    )
    
    event.shapeless(
        Item.of('immersiveengineering:treated_wood_horizontal',1),
        'gtceu:treated_wood_planks'
    )

    event.replaceInput(
        {input: "gtceu:treated_wood_planks"},
        'gtceu:treated_wood_planks',
        '#forge:treated_wood'
    )
})