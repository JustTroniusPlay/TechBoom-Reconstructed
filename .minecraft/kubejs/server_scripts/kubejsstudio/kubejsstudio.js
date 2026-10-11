


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
