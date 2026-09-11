ServerEvents.recipes(event => {

    //Rod left
    event.shaped(
        Item.of('immersiveengineering:stick_aluminum', 1),
        [
            'A  ',
            ' B ',
            '   '
        ],
        {
            A: '#gtceu:tools/crafting_files',
            B: 'immersiveengineering:ingot_aluminum',
        })

    //Rod right
     event.shaped(
        Item.of('immersiveengineering:stick_aluminum', 1),
        [
            '  A',
            ' B ',
            '   '
        ],
        {
            A: '#gtceu:tools/crafting_files',
            B: 'immersiveengineering:ingot_aluminum',
        })

    //Plate
    event.shaped(
        Item.of('immersiveengineering:plate_aluminum', 1),
        [
            ' A ',
            ' B ',
            ' B '
        ],
        {
            A: '#gtceu:tools/crafting_hammers',
            B: 'immersiveengineering:ingot_aluminum',
        })

})