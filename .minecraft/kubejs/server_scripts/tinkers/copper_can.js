ServerEvents.recipes(event => {

    event.remove({id: "tconstruct:smeltery/copper_can"});
    event.shaped(
    Item.of('tconstruct:copper_can', 3),
    [
        '   ',
        'ABA',
        ' A '
    ],
    {
        A: 'create:copper_sheet',
        B: '#gtceu:tools/craftwing_hammers'
    })
})