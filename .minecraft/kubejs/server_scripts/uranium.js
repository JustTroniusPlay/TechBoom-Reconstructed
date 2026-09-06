ServerEvents.recipes(event => {

    let uranium_recipes = 
    [
        //blast furnace
        "immersiveengineering:smelting/ingot_uranium_from_blasting3",
        "immersiveengineering:smelting/ingot_uranium_from_blasting",
        "biggerreactors:blasting/deepslate_uranium_ore",
        "biggerreactors:blasting/uranium_chunk",

        //furnace
        "biggerreactors:smelting/deepslate_uranium_ore",
        "immersiveengineering:smelting/ingot_uranium",
        "biggerreactors:smelting/uranium_chunk",
        "immersiveengineering:smelting/ingot_uranium3",

        //Manual Grinding
        "immersiveengineering:crafting/raw_hammercrushing_uranium",
    ]

    uranium_recipes.forEach(uranium => {
        event.remove({id:uranium});
    })
})