ServerEvents.recipes(event => {

  const metals = [
    'steel', 'bronze', 'iron', 'gold', 'diamond', 'osmium'

  ]
  const tools = [
    'pickaxe', 'sword', 'axe', 'shovel', 'hoe'
  ]
  const vanilla = [
      'iron', 'diamond', 'steel'
  ]
  metals.forEach(metal =>
    {
      tools.forEach(tool =>
        {
          event.remove({id: "mekanismtools:" + metal + "/tools/" + tool});
          event.remove({id: "railcraft:" + metal + "_" + tool});
          event.remove({id: "immersiveengineering:crafting/" + tool + "_" + metal});
          event.remove({id: "tfmg:crafting/kinetics/" + metal + "_" + tool});
          event.remove({id: "minecraft:" + metal + "_" + tool});

        })

        
    })
  
    {//gtceu bronze tools upgrade to mekanism
    tools.forEach(tool =>
    {
      const tooldel = 'gtceu:bronze_' + tool;
      event.shaped(
      Item.of('mekanismtools:bronze_' + tool, 1), // arg 1: output
      [
        '   ',
        'BAB', // arg 2: the shape (array of strings)
        '   '
      ],
      {
        A: 'gtceu:bronze_' + tool,
        B: '#forge:plates/bronze',  //arg 3: the mapping object
        //C: '#gtceu:tools/crafting_hammers',
        //D: '#gtceu:tools/crafting_files'
      }
    ).damageIngredient(tooldel, 9999)
    })
    }

    {//Paxels with GTCEU
    vanilla.forEach(res => {
      event.remove({id: "mekanismtools:" + res + "_paxel"});
      event.shaped(
      Item.of("mekanismtools:" + res + "_paxel", 1), // arg 1: output
      [
        'ABC',
        ' D ', // arg 2: the shape (array of strings)
        ' D '
      ],
      {
        A: 'gtceu:' + res + '_axe',
        B: 'gtceu:' + res + '_pickaxe',  //arg 3: the mapping object
        C: 'gtceu:' + res + '_shovel',
        D: '#forge:rods/wooden'
      }
    ).damageIngredient('gtceu:' + res + '_axe', 9999)
    })
    }

    {//Osmium Tools
      
      event.shaped(
      Item.of('mekanismtools:osmium_pickaxe', 1), // arg 1: output
      [
        'BAB',
        'ECF', // arg 2: the shape (array of strings)
        ' D '
      ],
      {
        A: 'gtceu:double_osmium_plate',
        B: 'mekanism:ingot_osmium',  //arg 3: the mapping object
        C: 'gtceu:long_iron_rod',
        D: 'gtceu:iron_ring',
        E: '#gtceu:tools/crafting_hammers',
        F: '#gtceu:tools/crafting_files'

      })

      event.shaped(
      Item.of('mekanismtools:osmium_axe', 1), // arg 1: output
      [
        'BAE',
        'BC ', // arg 2: the shape (array of strings)
        'FD '
      ],
      {
        A: 'gtceu:double_osmium_plate',
        B: 'mekanism:ingot_osmium',  //arg 3: the mapping object
        C: 'gtceu:long_iron_rod',
        D: 'gtceu:iron_ring',
        E: '#gtceu:tools/crafting_hammers',
        F: '#gtceu:tools/crafting_files'
      })

      event.shaped(
      Item.of('mekanismtools:osmium_shovel', 1), // arg 1: output
      [
        'BAB',
        'ECF', // arg 2: the shape (array of strings)
        ' D '
      ],
      {
        A: 'gtceu:double_osmium_plate',
        B: 'gtceu:iron_screw',  //arg 3: the mapping object
        C: 'gtceu:long_iron_rod',
        D: 'gtceu:iron_ring',
        E: '#gtceu:tools/crafting_hammers',
        F: '#gtceu:tools/crafting_files'
      })

      event.shaped(
      Item.of('mekanismtools:osmium_sword', 1), // arg 1: output
      [
        ' B ',
        'EAF', // arg 2: the shape (array of strings)
        'DCD'
      ],
      {
        A: 'gtceu:double_osmium_plate',
        B: '#forge:plates/osmium',  //arg 3: the mapping object
        C: 'gtceu:long_iron_rod',
        D: 'gtceu:iron_screw',
        E: '#gtceu:tools/crafting_hammers',
        F: '#gtceu:tools/crafting_files',
      })

      event.shaped(
      Item.of('mekanismtools:osmium_hoe', 1), // arg 1: output
      [
        'BAE',
        'FC ', // arg 2: the shape (array of strings)
        ' D '
      ],
      {
        A: 'gtceu:double_osmium_plate',
        B: '#forge:plates/osmium',  //arg 3: the mapping object
        C: 'gtceu:long_iron_rod',
        D: 'gtceu:iron_ring',
        E: '#gtceu:tools/crafting_hammers',
        F: '#gtceu:tools/crafting_files',
      })
    }

    {//Aluminium tools
      let stick_ = '#forge:rods/wooden'
      let plate_ = 'immersiveengineering:plate_aluminum'
      let ingot_ = 'immersiveengineering:ingot_aluminum'
      let hammer_ = '#gtceu:tools/crafting_hammers'
      let file_ = '#gtceu:tools/crafting_files'

      let alum_tools = 
      [
        'tfmg:crafting/kinetics/aluminum_sword',
        'tfmg:crafting/kinetics/aluminum_pickaxe',
        'tfmg:crafting/kinetics/aluminum_axe',
        'tfmg:crafting/kinetics/aluminum_shovel',
        'tfmg:crafting/kinetics/aluminum_hoe'
      ]

      alum_tools.forEach(alum =>
        {
          event.remove({id: alum});
        })

      event.shaped(
      Item.of('tfmg:aluminum_sword', 1), // arg 1: output
      [
        ' P ',
        'FPH', // arg 2: the shape (array of strings)
        ' S '
      ],
      {
        S: stick_,
        //arg 3: the mapping object
        P: plate_,
        H: hammer_,
        F: file_
      })

      event.shaped(
      Item.of('tfmg:aluminum_pickaxe', 1), // arg 1: output
      [
        'PII',
        'FSH', // arg 2: the shape (array of strings)
        ' S '
      ],
      {
        S: stick_,
        I: ingot_,  //arg 3: the mapping object
        P: plate_,
        H: hammer_,
        F: file_
      })

      event.shaped(
      Item.of('tfmg:aluminum_axe', 1), // arg 1: output
      [
        'PIH',
        'PS ', // arg 2: the shape (array of strings)
        'FS '
      ],
      {
        S: stick_,
        I: ingot_,  //arg 3: the mapping object
        P: plate_,
        H: hammer_,
        F: file_
      })

      event.shaped(
      Item.of('tfmg:aluminum_shovel', 1), // arg 1: output
      [
        'FPH',
        ' S ', // arg 2: the shape (array of strings)
        ' S '
      ],
      {
        S: stick_,
          //arg 3: the mapping object
        P: plate_,
        H: hammer_,
        F: file_
      })

      event.shaped(
      Item.of('tfmg:aluminum_hoe', 1), // arg 1: output
      [
        'PIH',
        'FS ', // arg 2: the shape (array of strings)
        ' S '
      ],
      {
        S: stick_,
        I: ingot_,  //arg 3: the mapping object
        P: plate_,
        H: hammer_,
        F: file_
      })
    }

    event.shapeless(Item.of('mekanismtools:steel_sword', 1),
    [
      'gtceu:steel_sword'
    ])
    event.replaceInput({id: 'tfmg:crafting/kinetics/lithium_blade'},
      "tfmg:steel_sword",
      "mekanismtools:steel_sword"
    )
})