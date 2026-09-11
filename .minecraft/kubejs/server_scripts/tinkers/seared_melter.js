ServerEvents.recipes(event => {

    event.remove({id: "tconstruct:smeltery/seared/melter"});
    event.shaped(
    Item.of('tconstruct:seared_melter', 1), // arg 1: output
    [
        '   ',
        'ABA', // arg 2: the shape (array of strings)
        'AAA'
    ],
    {
        A: 'tconstruct:seared_brick',
        B: '#forge:glass_panes'
    })

})