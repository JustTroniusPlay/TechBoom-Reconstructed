ServerEvents.recipes(event => {

    event.remove({id: "create:crafting/kinetics/fluid_tank"});
    event.remove({id: "create_connected:crafting/kinetics/fluid_vessel"});
    event.shaped(
    Item.of('create:fluid_tank', 1),
    [
        ' A ',
        'BCB',
        ' A '
    ],
    {
        A: 'create:copper_sheet',
        B: '#forge:glass_panes',
        C: 'immersiveengineering:wooden_barrel'
    })
    event.shaped(
    Item.of('create_connected:fluid_vessel', 1),
    [
        ' B ',
        'ACA',
        ' B '
    ],
    {
        A: 'create:copper_sheet',
        B: '#forge:glass_panes',
        C: 'immersiveengineering:wooden_barrel'
    })
    event.replaceInput({id: "createdieselgenerators:crafting/oil_barrel"},
        "#forge:barrels/wooden",
        "create:fluid_tank"
    );

    /*var fluid_tanks = ['aluminum', 'cast_iron', 'steel']
    fluid_tanks.forEach(tank => {
        event.remove({id: "tfmg:crafting/kinetics/" + tank + "_fluid_tank"});
        event.shaped(
        Item.of('tfmg:' + tank +'_fluid_tank', 1), // arg 1: output
        [
            ' A ',
            'BCB', // arg 2: the shape (array of strings)
            ' A '
        ],
        {
            A: '#forge:plates/' + tank,
            B: '#forge:glass_panes',  //arg 3: the mapping object
            C: 'immersiveengineering:wooden_barrel'
        })
    })*/

})