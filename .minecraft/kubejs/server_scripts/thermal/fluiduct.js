ServerEvents.recipes(event => {

    event.replaceInput({id: "thermal:fluid_duct_4"},
        "thermal:bronze_ingot",
        "gtceu:double_bronze_plate"
    )
    event.replaceInput({id: "thermal:fluid_duct_4"},
        "thermal:lead_ingot",
        "thermal:lead_gear"
    )
})