ServerEvents.tags('item', event => {

    event.add('curios:body', 'create:copper_backtank');
    event.add('curios:body', 'create:netherite_backtank');

    /*
    event.add('curios:body', 'immersiveengineering:glider');
    event.add('curios:body', 'create_sa:copper_jetpack_chestplate');
    event.add('curios:body', 'create_sa:andesite_jetpack_chestplate');
    event.add('curios:body', 'create_sa:brass_jetpack_chestplate');
    event.add('curios:body', 'create_sa:netherite_jetpack_chestplate');
    */

    event.add('curios:head', 'create:copper_diving_helmet');

    const tanks = ['filling', 'fueling']
    const _size = ['small','medium','large']

    tanks.forEach(tank => 
        {
            _size.forEach(size =>
                {
                    event.add('curios:charm', 'create_sa:' + size + '_' + tank + '_tank');
                    event.add('immersiveengineering:toolbox/tools', 'create_sa:' + size + '_' + tank + '_tank');

                })
            
    })

    const toolbox = ['ae2:meteorite_compass','gtceu:wood_mallet','create:super_glue']
    toolbox.forEach(tool =>
        {
            event.add('immersiveengineering:toolbox/tools', tool);
        })
})