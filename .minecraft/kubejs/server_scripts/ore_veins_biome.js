GTCEuServerEvents.oreVeins(event => {

    /*event.removeAll((id, vein) => 
        //id.path != "cassiterite_vein"
        //id.path != "copper_vein"
        //id.path != "iron_vein"
        //id.path != "redstone_vein_ow"
    )*/

/*OVERWORLD*/{
    event.modify("gtceu:cassiterite_vein", vein => {
        vein.biomes("#forge:is_cold")
        vein.clusterSize(120)
        vein.weight(120)
    })

    event.modify("gtceu:copper_vein", vein => {
        vein.biomes("#forge:is_hot")
        vein.clusterSize(120)
        vein.weight(120)
    })

    event.modify("gtceu:iron_vein", vein => {
        vein.biomes("#forge:is_mountain")
        vein.clusterSize(120)

    })

    event.modify("gtceu:coal_vein", vein => {
        vein.density(0.5)
        vein.clusterSize(60)
        vein.weight(40)
        vein.biomes("#forge:is_wet")
    })
    
    event.modify("gtceu:magnetite_vein_ow", vein => {
        vein.density(0.45)
        vein.clusterSize(80)
        vein.biomes("#forge:is_dry")
    })

    event.modify("gtceu:redstone_vein_ow", vein => {
        vein.biomes("#forge:is_plains")
        vein.density(0.8)
        vein.clusterSize(80)
    })

    event.modify("gtceu:galena_vein", vein => {
        vein.density(0.75)
        vein.clusterSize(80)
        vein.biomes("#forge:is_cold")
        vein.weight(80)
    })

    event.modify("gtceu:mica_vein", vein => {
        vein.density(0.75)
        vein.clusterSize(80)
        vein.biomes("#forge:is_plateau")
        vein.weight(60)
    })

    event.modify("gtceu:nickel_vein", vein => {
        vein.density(0.75)
        vein.clusterSize(80)
        vein.biomes("#forge:is_hot")
        vein.weight(80)
    })

    event.modify("gtceu:lapis_vein", vein => {
        vein.density(1)
        vein.clusterSize(80)
        vein.biomes("#forge:is_cold")
        vein.weight(80)
    })

}
})