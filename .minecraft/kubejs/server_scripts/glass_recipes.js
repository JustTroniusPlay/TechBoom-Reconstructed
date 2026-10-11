ServerEvents.highPriorityData(event => {
    
    //Thermionic Fabricator
    event.addJson(
      'techboom:recipes/forestry_glass',
      {
        "type": "forestry:fabricator",
        "molten": {"Amount":1000,"FluidName":"forestry:glass"},
        "plan": [{"item":"gtceu:block_casting_mold"}],
        "recipe": {
          "type": "minecraft:crafting_shaped",
          "category": "building",
          "key": {"#":{"item":"gtceu:tiny_flint_dust"}},
          "pattern": ["   "," # ","   "],
          "result": {"count":1,"item":"minecraft:glass"},
          "show_notification": true
        }
      }
    )
    
    //Induction Furnace
    event.addJson(
      'techboom:recipes/thermal_ord_glass',
      {
      "type": "thermal:smelter",
      "ingredients": [
        {
          "tag": "forge:dusts/quartz_sand",
          "count": 1
        },
        {
          "tag": "forge:dusts/flint",
          "count": 1
        }
      ],
      "result": [
        {
          "item": "minecraft:glass",
          "count": 4
        }
      ],
      "energy": 2000
      }
    )
    
    //Bottling Machine
    event.addJson(
      'techboom:recipes/immersive_glass',
      {
      "type": "immersiveengineering:bottling_machine",
      "fluid": {
        "amount": 1000,
        "tag": "minecraft:lava"
      },
      "inputs": [
        {
          "item": "gtceu:block_casting_mold"
        },
        {
          "tag": "forge:dusts/glass"
        }
      ],
      "results": [
        {
          "item": "minecraft:glass"
        },
        {
          "item": "gtceu:block_casting_mold"
        }
      ]
    }
    )
    
    //For Create
    event.addJson(
      'techboom:recipes/liquid_glass_create',
      {
        "type": "create:compacting",
        "ingredients": [{"tag":"forge:sand"}],
        "results": [{"amount":1000,"fluid":"forestry:glass"}],
        "heatRequirement": "heated",
      }
    )
    event.addJson(
      'techboom:recipes/casting_glass_create',
      {
        "type": "createdieselgenerators:casting",
        "ingredients": [{"fluid":"forestry:glass","amount":1000}],
        "mold": "createdieselgenerators:bar",
        "results": [{"item":"minecraft:glass"}]
      }
    )
})