ServerEvents.recipes(event => {

    const metals = [
      
      //Vanilla
      'copper', 'iron', 'gold',
      
      //Modded
      'tin', 'lead', 'nickel', 'silver', 'constantan',

      //Alloys
      'bronze', 'invar','electrum', 'rose_gold',

      //Advanced
      'steel', 'signalum', 'lumium', 'enderium',
    ]
    
    event.remove({id: "common_ore_library:crafting/gear/tungsten"});
    event.remove({id: "common_ore_library:crafting/gear/iridium"});

    metals.forEach(metal => {
      const ids = 
      [
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
        Item.of('thermal:'+ metal + '_gear', 1),
        [
          'ABA',
          'BCB',
          'ABA'
        ],
        {
          A: '#forge:rods/' + metal,
          B: '#forge:plates/' + metal,
          C: '#gtceu:tools/crafting_wrenches',
        })

        event.shaped(
          Item.of('thermal:'+ metal + '_gear', 1),
          [
            'ABA',
            'BCB',
            'ABA'
          ],
          {
            A: '#forge:rods/' + metal,
            B: '#forge:plates/' + metal,
            C: 'railcraft:bushing_gear',
          })
    })
})