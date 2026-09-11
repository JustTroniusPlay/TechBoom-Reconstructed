ServerEvents.recipes(event => {

    //Aqueous Accumulator
    event.replaceInput({id: "thermal:device_water_gen"},
        "minecraft:bucket",
        "minecraft:conduit"
    )

})