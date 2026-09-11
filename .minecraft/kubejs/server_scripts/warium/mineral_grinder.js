ServerEvents.recipes(event => {

    event.replaceInput(
    {id: "crusty_chunks:mineral_grinder_recipe"},
    "minecraft:iron_bars",
    'ae2:crank')
    event.replaceInput(
    {id: "crusty_chunks:mineral_grinder_recipe"},
    "minecraft:iron_ingot",
    'tconstruct:seared_brick')
    
})