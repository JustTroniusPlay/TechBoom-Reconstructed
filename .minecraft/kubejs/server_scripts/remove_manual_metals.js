ServerEvents.recipes(event => {

    event.remove({id: "crusty_chunks:hammering"});
    event.remove({id: "crusty_chunks:hammering_2"});
    event.remove({id: "crusty_chunks:hammering_3"});
    event.remove({id: "crusty_chunks:hammering_4"});

    event.remove({id: "gtceu:shapeless/dust_bronze"});
    event.remove({id: "electrodynamics:dust_bronze"});

    {//Removing manual metal craftings
    let metals = [
        'lead', 'steel', 'bronze', 
        'iron', 'copper', 'gold', 
        'silver', 'uranium', 'nickel',
        'constantan', 'electrum', 'aluminium', 
        'brass','aluminum', 'invar', 
        'tin','enderium','lumium','signalum',
        'constantan', 'manyullyn', 'rose', 
        'brass', 'rose_gold', 'zinc'
    ]
    event.remove({id: "railcraft:rolling/zinc_plate"});
    event.remove({id: "thermal:crafting/rose_gold_ingot_with_dust"});
    event.remove({id: "create:mixing/andesite_alloy"});
    event.remove({id: "create:mixing/andesite_alloy_from_zinc"});
    event.remove({id: "create:crafting/materials/andesite_alloy_from_zinc"});
    event.remove({id: "create:crafting/materials/andesite_alloy"});
    metals.forEach(metal =>
        {
            //Plates
            event.remove({id: "electrodynamics:plate_" + metal});
            event.remove({id: "immersivegeology:crafting/craft_" + metal + "_plate_with_bronze_hammer"});
            event.remove({id: "immersiveengineering:crafting/plate_" + metal + "_hammering"});
            event.remove({id: "createdieselgenerators:compat/immersiveengineering/" + metal + "_sheet"});
            event.remove({id: "createdieselgenerators:hammering/" + metal + "_sheet"});
            event.remove({id: "createdieselgenerators:compat/createaddition/" + metal + "_sheet"});
            event.remove({id: "railcraft:rolling/" + metal + "_plate"});

            //Rods
            event.remove({id: "ad_astra:" + metal + "_rod"});
            event.remove({id: "common_ore_library:crafting/rod/" + metal});
            event.remove({id: "thermal_processing:crafting/rods/" + metal});

            //Blocks
            event.remove({id: "ad_astra:" + metal + "_block"});
            event.remove({id: "common_ore_library:ingot_to_block/" + metal});
            event.remove({id: "crusty_chunks:" + metal + "_ore_block_recipe"});
            event.remove({id: "cbc_cw:" + metal + "_block_uncraft"});
            event.remove({id: "cbc_cw:" + metal + "_block_craft"});
            event.remove({id: "ad_astra:" + metal + "_ingot_from_" + metal + "_block"});
            event.remove({id: "railcraft:" + metal +"_ingot_crafted_with_ingots"});
            event.remove({id: "thermal:storage/" + metal + "_ingot_from_block"});

            //blockToIngots
            event.remove({id: "common_ore_library:block_to_ingot/" + metal});
            event.remove({id: "immersiveengineering:crafting/storage_" + metal + "_to_ingot_" + metal});
            event.remove({id: "immersivegeology:crafting/" + metal + "_get_ingots_from_block"});

            //Nuggets
            event.remove({id: "immersivegeology:crafting/get_ingot_from_" + metal + "_nuggets"});
            event.remove({id: "immersivegeology:crafting/get_nuggets_from_" + metal + "_ingot"});
            event.remove({id: "ad_astra:" + metal + "_ingot"});
            event.remove({id:"common_ore_library:ingot_to_nugget/" + metal});

            //NuggetsToIngot
            event.remove({id: "immersiveengineering:crafting/nugget_" + metal + "_to_ingot_" + metal});
            event.remove({id: "thermal:storage/" + metal + "_ingot_from_nuggets"});
            event.remove({id: "immersiveengineering:crafting/nugget_" + metal +"_to_" + metal + "_ingot"});
            event.remove({id: "common_ore_library:nugget_to_ingot/" + metal});

            //Alloys
            event.remove({id: 'thermal_processing:crafting/' + metal + '_ingot'});
            event.remove({id: "railcraft:" + metal + "_ingot_crafted_with_ingots"});
            event.remove({id: "forestry:ingot_" + metal + "_alloying"});
            event.remove({id: "railcraft:" + metal + "_ingot_crafted_with_ingots"});
            event.remove({id: "railcraft:" + metal + "_ingot_crafted_with_ingot"});
            //FireCharge
            event.remove({id: 'thermal:fire_charge/' + metal + '_ingot_2'});
            event.remove({id: 'thermal:fire_charge/' + metal + '_ingot_3'});
            event.remove({id: 'thermal:fire_charge/' + metal + '_ingot_4'});

            event.remove({id: "thermal_processing:crafting/" + metal + "_ingot_from_dust"});

        });
    }

    {//IE Aluminum part with greg tools
    event.shaped(
        Item.of('immersiveengineering:stick_aluminum', 1), // arg 1: output
        [
            'A  ',
            ' B ', // arg 2: the shape (array of strings)
            '   '
        ],
        {
            A: '#gtceu:tools/crafting_files',
            B: 'immersiveengineering:ingot_aluminum',  //arg 3: the mapping object
        })
     event.shaped(
        Item.of('immersiveengineering:stick_aluminum', 1), // arg 1: output
        [
            '  A',
            ' B ', // arg 2: the shape (array of strings)
            '   '
        ],
        {
            A: '#gtceu:tools/crafting_files',
            B: 'immersiveengineering:ingot_aluminum',  //arg 3: the mapping object
        })

    event.shaped(
        Item.of('immersiveengineering:plate_aluminum', 1), // arg 1: output
        [
            ' A ',
            ' B ', // arg 2: the shape (array of strings)
            ' B '
        ],
        {
            A: '#gtceu:tools/crafting_hammers',
            B: 'immersiveengineering:ingot_aluminum',  //arg 3: the mapping object
        })
    }

    {//Zinc greg to additions
    event.remove({id: "createdieselgenerators:compat/createaddition/zinc_sheet"});
    let zinc_ids = 
    [
        "gtceu:shaped/plate_zinc",
        "gtceu:bender/bend_zinc_to_plate",
        "gtceu:cutter/cut_zinc_block_to_plate_water",
        "gtceu:cutter/cut_zinc_block_to_plate",
        "gtceu:cutter/cut_zinc_block_to_plate_distilled_water",
        "gtceu:extruder/extrude_zinc_to_plate",
        "gtceu:fluid_solidifier/solidify_zinc_to_plate",
        "gtceu:forge_hammer/hammer_zinc_to_plate"
    ]

    zinc_ids.forEach(ids => 
        {
            event.replaceOutput({id: ids},
                "gtceu:zinc_plate",
                "createaddition:zinc_sheet"
            )
        })
    }

})