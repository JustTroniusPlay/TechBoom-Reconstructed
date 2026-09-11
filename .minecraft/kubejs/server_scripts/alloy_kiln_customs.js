ServerEvents.recipes(event => {

    let kiln = (Input1, count1, Input2, count2, output, time) => 
    {
      event.custom({
      "type": "immersiveengineering:alloy",
      "input0": {
        "base_ingredient": {
        "item": Input1
        },
        "count": count1
      },
      "input1": {
        "base_ingredient": {
        "item": Input2
        },
        "count": count2
      },
      "result": {
        "item": output
      },
      "time": time
      })
    }

  kiln(
    "minecraft:andesite", 1,
    "minecraft:iron_nugget", 2,
    "create:andesite_alloy",
    100)

  kiln(
    "gtceu:andesite_dust",  1,
    "minecraft:iron_nugget", 2,
    "create:andesite_alloy",
    60)

  kiln(
    "minecraft:andesite", 1,
    "create:zinc_nugget", 1,
    "create:andesite_alloy",
    60)

  kiln(
    "gtceu:andesite_dust", 1,
    "create:zinc_nugget", 1,
    "create:andesite_alloy",
    60)

    /*kiln(
    "projectred_core:red_ingot",
    "minecraft:iron_ingot",
    "minecraft:redstone",8,
    100)*/

    kiln(
      "gtceu:quartz_sand_dust", 1,
      "gtceu:tiny_flint_dust", 1,
      "minecraft:glass_pane",
    100)

})

