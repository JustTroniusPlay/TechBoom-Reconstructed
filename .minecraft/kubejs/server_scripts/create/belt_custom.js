ServerEvents.recipes(event => {

    event.shaped(
    Item.of('create:belt_connector', 4), // arg 1: output
    [
        'AAA', // arg 2: the shape (array of strings)
        'AAA'
    ],
    {
        A: 'thermal:cured_rubber'
    })
})