ServerEvents.recipes(event => {

    event.remove({id: "createdieselgenerators:compat/createaddition/zinc_sheet"});
    let zinc_ids = 
    [
        "gtceu:shaped/plate_zinc",
        "gtceu:bender/bend_zinc_to_plate",
        "gtceu:cutter/cut_zinc_block_to_plate_water",
        "gtceu:cutter/cut_zinc_block_to_plate",
        "gtceu:cutter/cut_zinc_block_to_plate_distilled_water",
        "gtceu:extruder/extrude_zinc_to_plate",
        "gtceu:fluid_solidifier/solidify_zinc_to_plate",
        "gtceu:forge_hammer/hammer_zinc_to_plate"
    ]

    zinc_ids.forEach(ids => {
        event.replaceOutput({id: ids},
            "gtceu:zinc_plate",
            "createaddition:zinc_sheet"
        )
    })


})