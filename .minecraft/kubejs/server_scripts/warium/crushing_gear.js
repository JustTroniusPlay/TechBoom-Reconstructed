ServerEvents.recipes(event => {

    event.replaceInput({id: "crusty_chunks:iron_gear_recipe"},
        "minecraft:cobblestone",
        "#forge:small_gears/iron"
    )
    event.replaceInput({id: "crusty_chunks:iron_gear_recipe"},
        "minecraft:iron_ingot",
        "#forge:rods/iron"
    )
})