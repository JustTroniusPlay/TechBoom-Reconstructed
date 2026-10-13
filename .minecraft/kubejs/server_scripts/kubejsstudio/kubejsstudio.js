


// kubejsstudio custom: ulvcovm:shaped/ulv_electric_motor
ServerEvents.highPriorityData(event => {
    event.addJson(
      'ulvcovm:recipes/shaped/ulv_electric_motor',
      {
        "type": "minecraft:crafting_shaped",
        "pattern": ["CWR","WMW","RWC"],
        "key": {
          "C": {"item": "thermal:cured_rubber"},
          "W": {"item":"gtceu:tin_single_wire"},
          "R": {"tag":"forge:rods/copper"},
          "M": {"tag":"forge:rods/magnetic_iron"}
        },
        "matchSize": false,
        "result": {"item":"ulvcovm:ulv_electric_motor"}
      }
    )
})
// kubejsstudio custom: kubejsstudio:trimotor_white
ServerEvents.highPriorityData(event => {
    event.addJson(
      'kubejsstudio:recipes/trimotor_white',
      {
        "type": "create:mechanical_crafting",
        "pattern": [
          "AAABCBAAA",
          "BCBDEDBCB",
          "EEFFFFFEE",
          "EEGHFHGEE",
          "DEGFIFGED",
          "AEGFFFGEA",
          "DEGHFHGED",
          "AEFFFFFEA",
          "EAEEEEEAE"
        ],
        "key": {
          "A": {"item":"gtceu:double_iron_plate"},
          "B": {"item":"gtceu:steel_turbine_blade"},
          "C": {"item":"create_new_age:reinforced_motor"},
          "D": {"item":"minecraft:glass"},
          "E": {"item":"immersiveengineering:sheetmetal_aluminum"},
          "F": {"item":"immersiveengineering:treated_wood_horizontal"},
          "G": {"item":"gtceu:manganese_foil"},
          "H": {"item":"gtceu:wood_crate"},
          "I": {"item":"immersive_aircraft:bamboo_hopper"}
        },
        "result": {"item":"civilian_aviation:trimotor_white","count":1}
      }
    )
})
// kubejsstudio custom: gtceu:alloy_smelter/coke_oven_brick
ServerEvents.highPriorityData(event => {
    event.addJson(
      'gtceu:recipes/alloy_smelter/coke_oven_brick',
      {
        "type": "gtceu:alloy_smelter",
        "duration": 40,
        "category": "gtceu:alloy_smelter",
        "tickInputs": {"eu":[{"content":7}]},
        "inputs": {
          "item": [
            {
              "content": {
                "type": "gtceu:sized",
                "count": 1,
                "ingredient": {"item":"gtceu:compressed_coke_clay"}
              }
            },
            {
              "content": {
                "type": "gtceu:sized",
                "count": 1,
                "ingredient": {"item":"gtceu:small_invar_dust"}
              }
            }
          ]
        },
        "outputs": {
          "item": [
            {
              "content": {
                "type": "gtceu:sized",
                "count": 2,
                "ingredient": {"item":"gtceu:coke_oven_brick"}
              }
            }
          ]
        }
      }
    )
})
// kubejsstudio custom: gtceu:shaped/compressed_coke_clay
ServerEvents.highPriorityData(event => {
    event.addJson(
      'gtceu:recipes/shaped/compressed_coke_clay',
      {
        "type": "minecraft:crafting_shaped",
        "pattern": [" X ","SYS","   "],
        "key": {
          "Y": {"item":"gtceu:brick_wooden_form"},
          "X": {"item":"gtceu:compressed_clay"},
          "S": {"item":"tconstruct:grout"}
        },
        "matchSize": false,
        "result": {"item":"gtceu:compressed_coke_clay","count":6}
      }
    )
})
// kubejsstudio custom: thermal:drill_head
ServerEvents.highPriorityData(event => {
    event.addJson(
      'thermal:recipes/drill_head',
      {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "conditions": [{"type":"thermal:flag","flag":"tool_components"}],
        "key": {
          "C": {"tag":"forge:storage_blocks/iron"},
          "I": {"tag":"forge:plates/iron"}
        },
        "pattern": [" I ","ICI","III"],
        "result": {"item":"thermal:drill_head"},
        "show_notification": true
      }
    )
})
// kubejsstudio custom: thermal:saw_blade
ServerEvents.highPriorityData(event => {
    event.addJson(
      'thermal:recipes/saw_blade',
      {
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "conditions": [{"type":"thermal:flag","flag":"tool_components"}],
        "key": {
          "C": {"tag":"forge:storage_blocks/copper"},
          "I": {"tag":"forge:plates/iron"}
        },
        "pattern": ["II ","ICI"," II"],
        "result": {"item":"thermal:saw_blade"},
        "show_notification": true
      }
    )
})
// kubejsstudio custom: kubejsstudio:techboom_vibr_iron
ServerEvents.highPriorityData(event => {
    event.addJson(
      'kubejsstudio:recipes/techboom_vibr_iron',
      {
        "type": "vintageimprovements:vibrating",
        "ingredients": [{"tag":"forge:ingots/iron","count":9}],
        "results": [{"item":"minecraft:iron_block","count":1}],
        "processingTime": 100
      }
    )
})
