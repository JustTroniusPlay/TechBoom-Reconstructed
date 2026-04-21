ServerEvents.recipes(event => {

    const metals = ['copper','iron', 'bronze', 
      'gold','invar','electrum',
      'signalum','lead',
      'tin','steel','silver',
      'nickel','rose_gold','lapis',
      'enderium','constantan','lumium']
    
    event.remove({id: "common_ore_library:crafting/gear/tungsten"});
    event.remove({id: "common_ore_library:crafting/gear/iridium"});

    metals.forEach(metal => {
            const ids = [
                "common_ore_library:crafting/gear/" + metal,
                "thermal:parts/" + metal + "_gear",
                "electrodynamics:gear_" + metal,
                "forestry:gear_" + metal,
                "industrialforegoing:" + metal + "_gear",
                "railcraft:" + metal +"_gear"

            ]
            ids.forEach(idd => {
               
                event.remove({id: idd});
            });

            event.shaped(
            Item.of('thermal:'+ metal + '_gear', 1), // arg 1: output
            [
              'ABA',
              'BCB', // arg 2: the shape (array of strings)
              'ABA'
            ],
            {
              A: '#forge:rods/' + metal,
              B: '#forge:plates/' + metal,  //arg 3: the mapping object
              C: '#gtceu:tools/crafting_wrenches',
            })

            event.shaped(
            Item.of('thermal:'+ metal + '_gear', 1), // arg 1: output
            [
              'ABA',
              'BCB', // arg 2: the shape (array of strings)
              'ABA'
            ],
            {
              A: '#forge:rods/' + metal,
              B: '#forge:plates/' + metal,  //arg 3: the mapping object
              C: 'railcraft:bushing_gear',
            })
        })
})