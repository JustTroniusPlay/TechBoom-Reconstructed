ServerEvents.recipes(event => {

    event.replaceInput({id: "thermal:tools/satchel"},
        '#thermal:rockwool',
        '#minecraft:wool'
    )

    event.replaceInput({id: "thermal:tools/satchel"},
        '#forge:ingots/tin',
        '#forge:ingots'
    )

})