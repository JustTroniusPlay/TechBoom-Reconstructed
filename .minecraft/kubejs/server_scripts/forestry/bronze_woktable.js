ServerEvents.recipes(event => {

    event.remove({id: "forestry:worktable"});
    event.shaped(
    Item.of('forestry:worktable', 1), 
    [
        'DAD',
        'EBE', 
        'DCD'
    ],
    {
        A: 'minecraft:writable_book',
        B: 'immersiveengineering:craftingtable', 
        C: 'create:crafting_blueprint',
        D: '#forge:plates/bronze',
        E: '#forge:gears/bronze'
    })
})