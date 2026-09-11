ServerEvents.recipes(event => {

    event.replaceInput(
        {id: "littlelogistics:tug_route"},
        "littlelogistics:transmitter_component",
        'create:transmitter'
    )
    event.replaceInput(
        {id: "littlelogistics:locomotive_route"},
        'littlelogistics:transmitter_component',
        'create:transmitter'
    )
})