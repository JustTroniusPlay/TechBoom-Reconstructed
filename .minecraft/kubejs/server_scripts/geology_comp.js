function OreData(ores, temp, time) {
  this.ores = ores;
  this.temp = temp;
  this.time = time;
}

OreData.prototype.getOres = function() {
  return this.ores;
};
OreData.prototype.getTemp = function() {
  return this.temp;
};
OreData.prototype.getTime = function() {
  return this.time;
};

ServerEvents.recipes(event => {

    const ore_names = [
    'copper','gold','lead','platinum','silver',

    'acanthite','apatite','alumina','anatase',

    'bauxite','cassiterite','chalcocite','chalcopyrite',

    'chromite','cobaltite','cryolite','cuprite','fluorite',
    
    'galena','gypsum','hematite','ilmenite','magnetite',
    
    'molybdenite','monazite','pyrite','pyrolusite','scheelite',

    'smithsonite','sphalerite','thorianite','thorite','millerite',

    'unobtania','uraninite','vanadinite','wolframite','zircon'
    ]

    const ore_type = new Map([
        [1, 'poor'],
        [2, 'normal'], 
        [3 ,'rich']
    ])
    
    ore_names.forEach(name =>
    {
        ore_type.forEach((type, key) =>
        {
            event.recipes.gtceu.forge_hammer('techboom:geology_' + type + '_' + name + '_crushed_forge_hammer')
            .itemInputs(
            '2x immersivegeology:' + type + '_ore_' + name
            )
            .itemOutputs(
            String(key) + 'x immersivegeology:dirty_crushed_ore_' + name
            )
            .duration(10)
            .EUt(1)

            event.recipes.create.compacting(
            [String(key) + 'x immersivegeology:dirty_crushed_ore_' + name], 
            ['immersivegeology:' + type + '_ore_' + name,
            'immersivegeology:' + type + '_ore_' + name
            ])   
        })
            
        event.recipes.gtceu.centrifuge('techboom:geology_ore_' + name + '_centrifuged')
        .itemInputs(
        '2x immersivegeology:dirty_crushed_ore_' + name
        )
        .itemOutputs(
        'immersivegeology:crushed_ore_' + name
        )
        .duration(60)
        .EUt(1)

        event.recipes.gtceu.ore_washer('techboom:geology_ore_' + name + '_washed')
        .itemInputs(
        '2x immersivegeology:dirty_crushed_ore_' + name
        )
        .itemOutputs(
        'immersivegeology:crushed_ore_' + name
        )
        .duration(10)
        .EUt(30)
    })

    const tc_melt = new Map([
        ['iron',
            new OreData(
            [
                'hematite',
                'pyrite',
                'magnetite'
            ],
            800, 
            22)
        ],
        ['copper',
            new OreData(
            [
                'copper',
                'chalcopyrite',
                'cuprite'
            ],
            500,
            18)
        ],
        ['tin',
            new OreData(
            [
                'cassiterite'
            ],
            225,
            14)
        ],
        ['zinc',
            new OreData(
            [
                'sphalerite',
                'smithsonite'
            ],
            420,
            17)
        ],
        ['gold',
            new OreData(
            [
                'gold'
            ],
            700,
            21)
        ],
        ['lead',
            new OreData(
            [
                'lead',
                'galena',
                'vanadinite'
            ],
            330,
            16)
        ],
        ['silver',
            new OreData(
            [
                'silver',
                'acanthite'
            ],
            790,
            22)
        ]
    ])

    tc_melt.forEach((data, name) => {
        data.getOres().forEach(ore =>
            {
                event.custom({
                    "type": "tconstruct:ore_melting",
                    "ingredient": 
                    {
                        "item": "immersivegeology:crushed_ore_" + ore
                    },
                    "rate": "metal",
                    "result": 
                    {
                        "amount": 72,
                        "fluid": "gtceu:" + name
                    },
                    "temperature": data.getTemp(),
                    "time": data.getTime()
                })
            })
    })

    const aluminium = 
        [
            'alumina',
            'bauxite'
        ]
    aluminium.forEach(alum =>{
        event.custom({
        "type": "tconstruct:ore_melting",
        "ingredient": 
        {
            "item": "immersivegeology:crushed_ore_" + alum
        },
        "rate": "metal",
        "result": 
        {
        "amount": 72,
        "tag": "forge:molten_aluminum" 
        },
        "temperature": 425,
        "time": 17
        })

    })
})