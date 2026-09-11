ServerEvents.recipes(event => {

    event.remove({id: "crusty_chunks:hammering"});
    event.remove({id: "crusty_chunks:hammering_2"});
    event.remove({id: "crusty_chunks:hammering_3"});
    event.remove({id: "crusty_chunks:hammering_4"});

    event.remove({id: "gtceu:shapeless/dust_bronze"});
    event.remove({id: "electrodynamics:dust_bronze"});

    //Removing manual metal craftings
    let metals = [
        
        //Vanilla
        'copper', 'iron', 'gold',

        //Modded
        'tin', 'lead', 'zinc', 'nickel', 'aluminium', 'aluminum', 'silver', 'uranium',

        //Alloys
        'bronze', 'brass', 'invar', 'electrum', 'constantan', 'manyullyn', 'rose', 'rose_gold',

        //Advanced
        'steel', 'enderium', 'lumium', 'signalum',
          
    ]

    event.remove({id: "create:mixing/andesite_alloy"});
    event.remove({id: "create:mixing/andesite_alloy_from_zinc"});
    event.remove({id: "create:crafting/materials/andesite_alloy_from_zinc"});
    event.remove({id: "create:crafting/materials/andesite_alloy"});

    event.remove({id: "thermal:crafting/rose_gold_ingot_with_dust"});
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
            event.remove({id: "immersiveengineering:crafting/stick_" + metal});

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
            event.remove({id: "railcraft:" + metal + "_ingot"});
            event.remove({id: "crusty_chunks:" + metal + "_block_ore_recipe"});
            event.remove({id: "forestry:ingot_" + metal + "_from_resource_storage_" + metal});

            //Nuggets
            event.remove({id: "immersivegeology:crafting/get_ingot_from_" + metal + "_nuggets"});
            event.remove({id: "immersivegeology:crafting/get_nuggets_from_" + metal + "_ingot"});
            event.remove({id: "immersivegeology:crafting/"+ metal + "_ingot_to_nuggets_" + metal});
            event.remove({id: "ad_astra:" + metal + "_ingot"});
            event.remove({id: "common_ore_library:ingot_to_nugget/" + metal});
            event.remove({id: "crusty_chunks:" + metal + "_nugget_ingot_recipe"});
            event.remove({id: "immersiveengineering:crafting/" + metal + "_ingot_to_nugget_" + metal});

            //NuggetsToIngot
            event.remove({id: "immersiveengineering:crafting/nugget_" + metal + "_to_ingot_" + metal});
            event.remove({id: "thermal:storage/" + metal + "_ingot_from_nuggets"});
            event.remove({id: "immersiveengineering:crafting/nugget_" + metal +"_to_" + metal + "_ingot"});
            event.remove({id: "common_ore_library:nugget_to_ingot/" + metal});
            event.remove({id: "railcraft:"+ metal + "_ingot_from_" + metal + "_nugget"});
            event.remove({id: "crusty_chunks:" + metal + "_ingot_nugget_recipe"});
            event.remove({id:'createaddition:crafting/'+ metal +'_ingot'});

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

})