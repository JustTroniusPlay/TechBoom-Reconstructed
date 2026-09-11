ServerEvents.recipes(event => {

    event.remove({id: "forestry:can"});
    event.shaped(
        Item.of('forestry:can', 4), // arg 1: output
        [
            ' B ',
            'ACA', // arg 2: the shape (array of strings)
            ' B '
        ],
        {
            A: 'gtceu:double_osmium_plate',
            B: 'gtceu:osmium_plate',  //arg 3: the mapping object
            C: '#forge:glass_panes'
        })

})