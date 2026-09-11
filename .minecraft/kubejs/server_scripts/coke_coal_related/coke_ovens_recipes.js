ServerEvents.recipes(event => {

    //IE 
    event.remove({id: "immersiveengineering:crafting/cokebrick"});
    event.shaped(
    Item.of('immersiveengineering:cokebrick', 6), // arg 1: output
    [
        'ABA',
        'BCB', // arg 2: the shape (array of strings)
        'ABA'
    ],
    {
        A: 'tconstruct:seared_brick',
        B: 'minecraft:brick',  //arg 3: the mapping object
        C: 'gtceu:bronze_frame'
    }
    )

    //GTCEU
    event.remove({id: "gtceu:shaped/casing_coke_bricks"});
    event.remove({id: "gtceu:compressor/coke_bricks"});
    event.shaped(
    Item.of('gtceu:coke_oven_bricks', 9), // arg 1: output
    [
        'ABA',
        'ACA', // arg 2: the shape (array of strings)
        'ABA'
    ],
    {
        A: 'gtceu:coke_oven_brick',
        B: 'gtceu:invar_frame', 
        C: 'immersiveengineering:cokebrick'
    }
    )

    //Railcraft
    event.remove({id: "railcraft:coke_oven_bricks"});
    event.shaped(
    Item.of('railcraft:coke_oven_bricks', 3), // arg 1: output
    [
        'ABA',
        'BCB', // arg 2: the shape (array of strings)
        'ABA'
    ],
    {
        A: 'tconstruct:scorched_bricks',
        B: 'immersiveengineering:slag_brick',  //arg 3: the mapping object
        C: 'gtceu:coke_oven_bricks'
    }
    )
})