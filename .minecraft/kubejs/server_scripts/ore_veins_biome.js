ServerEvents.tags('biome', event => {
    event.add("forge:is_mountain", "minecraft:is_mountain")
    event.add("forge:is_wet", "regions_unexplored:blackwood_taiga")
    event.add("forge:is_wet", "regions_unexplored:pine_taiga")

})

GTCEuServerEvents.oreVeins(event => {

    /*event.removeAll((id, vein) => 
        //id.path != "cassiterite_vein"
        //id.path != "copper_vein"
        //id.path != "iron_vein"
        //id.path != "redstone_vein_ow"
    )*/

/*OVERWORLD*/{
     event.modify("gtceu:copper_tin_vein", vein => {
        //vein.clusterSize(120)
        vein.weight(15)
    })
    
    event.modify("gtceu:cassiterite_vein", vein => {
        vein.biomes("#forge:is_cold")
        //vein.clusterSize(120)
        //vein.weight(120)
    })

    event.modify("gtceu:copper_vein", vein => {
        vein.biomes("#forge:is_hot")
        //vein.clusterSize(120)
        //vein.weight(120)
    })

    event.modify("gtceu:iron_vein", vein => {
        vein.biomes("#forge:is_mountain")
        //vein.clusterSize(120)

    })

    event.modify("gtceu:coal_vein", vein => {
        //vein.density(0.5)
        //vein.clusterSize(60)
        //vein.weight(40)
        vein.biomes("#forge:is_wet")
    })

    event.modify("gtceu:garnet_vein", vein => {
        vein.biomes("#forge:is_wet")
    })
    
    event.modify("gtceu:magnetite_vein_ow", vein => {
        //vein.density(0.45)
        //vein.clusterSize(80)
        vein.biomes("#forge:is_dry")
    })

    event.modify("gtceu:redstone_vein_ow", vein => {
        vein.biomes("#forge:is_plains")
        //vein.density(0.8)
        //vein.clusterSize(80)
    })

    event.modify("gtceu:galena_vein", vein => {
        //vein.density(0.75)
        //vein.clusterSize(80)
        vein.biomes("#forge:is_cold")
        //vein.weight(80)
    })

    event.modify("gtceu:mica_vein", vein => {
        //vein.density(0.75)
        //vein.clusterSize(80)
        vein.biomes("#forge:is_plateau")
        //vein.weight(60)
    })

    event.modify("gtceu:nickel_vein", vein => {
        //vein.density(0.75)
        //vein.clusterSize(80)
        vein.biomes("#forge:is_hot")
        //vein.weight(80)
    })

    event.modify("gtceu:lapis_vein", vein => {
        //vein.density(1)
        //vein.clusterSize(80)
        vein.biomes("#forge:is_cold")
        //vein.weight(80)
    })

    event.modify("gtceu:sapphire_vein", vein => {
        //vein.density(0.5)
        //vein.clusterSize(40)
        vein.biomes("#forge:is_mountain")
    })

    event.modify("gtceu:diamond_vein", vein => {
        vein.biomes("#forge:is_mountain")
    })

    event.modify("gtceu:garnet_tin_vein", vein => {
        vein.biomes("#forge:is_dry")
    })

    event.modify("gtceu:apatite_vein", vein => {
        vein.biomes("#forge:is_water")
    })
    
    event.modify("gtceu:salts_vein", vein => {
        vein.biomes("#forge:is_water")
    })

    event.modify("gtceu:manganese_vein_ow", vein => {
        vein.biomes("#forge:is_dry")
    })

    event.modify("gtceu:olivine_vein", vein => {
        vein.biomes("#forge:is_cold")
    })

    let sandy_veins = 
    [
        "oilsands_vein",
        "lubricant_vein",
        "mineral_sand_vein",
    ]
    
    sandy_veins.forEach(element => {
        event.modify("gtceu:" + element, vein => {
            vein.biomes("#forge:is_sandy")
        })
    });
}

/*NETHER*/{
    event.modify("gtceu:sulfur_vein", vein => {
        vein.biomes("regions_unexplored:mycotoxic_undergrowth")
    })
    event.modify("gtceu:topaz_vein", vein => {
        vein.biomes("regions_unexplored:infernal_holt")
    })
    event.modify("gtceu:tetrahedrite_vein", vein => {
        vein.biomes("regions_unexplored:blackstone_basin")
    })
    event.modify("gtceu:saltpeter_vein", vein => {
        vein.biomes("regions_unexplored:glistering_meadow")
    })
    event.modify("gtceu:redstone_vein", vein => {
        vein.biomes("regions_unexplored:redstone_abyss")
    })
    event.modify("gtceu:nether_quartz_vein", vein => {
        vein.biomes("minecraft:nether_wastes")
    })
    event.modify("gtceu:monazite_vein", vein => {
        vein.biomes("minecraft:warped_forest")
    })
    event.modify("gtceu:molybdenum_vein", vein => {
        vein.biomes("minecraft:crimson_forest")
    })
    event.modify("gtceu:manganese_vein", vein => {
        vein.biomes("minecraft:basalt_deltas")
    })
    event.modify("gtceu:certus_quartz", vein => {
        vein.biomes("minecraft:nether_wastes")
    })
    event.modify("gtceu:beryllium_vein", vein => {
        vein.biomes("minecraft:warped_forest")
    })
    event.modify("gtceu:banded_iron_vein", vein => {
        vein.biomes("minecraft:crimson_forest")
    })

}
})