ServerEvents.recipes(event => {

    event.remove({id: "immersiveengineering:crafting/alloybrick"});
    event.remove({id: "createaddition:compat/immersiveengineering/item_application/kiln_brick"});
    
    event.shaped(
  Item.of('immersiveengineering:alloybrick', 2), // arg 1: output
  [
    ' A ',
    'BCB', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'thermal:bronze_ingot',
    B: 'minecraft:brick',  //arg 3: the mapping object
    C: '#forge:sandstone'
  }
)
    //Replace with deployer two step recipe
    event.remove({id: "createaddition:compat/immersiveengineering/item_application/kiln_brick_using_deployer"});

    event.remove({id: "create:mixing/andesite_alloy"});
    event.remove({id: "create:mixing/andesite_alloy_from_zinc"});
    event.remove({id: "create:crafting/materials/andesite_alloy_from_zinc"});
    event.remove({id: "create:crafting/materials/andesite_alloy"});

    event.remove({id: "common_ore_library:ingot_to_nugget/zinc"});
    event.remove({id: "common_ore_library:block_to_ingot/zinc"});
    event.remove({id: "immersivegeology:crafting/zinc_get_ingots_from_block"});

    let kiln = (output, Input1, Input2, count, time) => 
    {
      event.custom({
      "type": "immersiveengineering:alloy",
      "input0": {
        "item": Input1
      },
      "input1": {
        "base_ingredient": {
        "item": Input2
        },
        "count": count
      },
      "result": {
        "item": output
      },
      "time": time
      })
    }

  kiln(
    "create:andesite_alloy",
    "minecraft:andesite",
    "minecraft:iron_nugget", 4,
    100)

  kiln(
    "create:andesite_alloy",
    "minecraft:andesite",
    "create:zinc_nugget", 2,
    60)

  kiln(
    "create:andesite_alloy",
    "gtceu:andesite_dust",
    "minecraft:iron_nugget", 2,
    60)

  kiln(
    "create:andesite_alloy",
    "gtceu:andesite_dust",
    "create:zinc_nugget",1,
    60)



})

