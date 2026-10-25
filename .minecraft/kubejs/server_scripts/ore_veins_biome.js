/*function VeinData(id, weight, density, size) {
  this.id = id;
  this.weight = weight;
  this.density = density;
  this.size = size;
}

VeinData.prototype.getId = function(){
  return this.id;
}
VeinData.prototype.getWeight = function(){
  return this.weight;
}
VeinData.prototype.getDensity = function(){
  return this.density;
}
VeinData.prototype.getSize = function(){
  return this.size;
}*/

ServerEvents.tags('biome', event => {
  
    let mountain = 
    [
      "minecraft:is_mountain",
      "regions_unexplored:towering_cliffs",
      "regions_unexplored:highland_fields",
      "regions_unexplored:maple_forest"
    ]
  
    mountain.forEach(biome => 
    {
      event.add("forge:is_mountain", biome)
    })
    
    let wet = 
    [
      "regions_unexplored:blackwood_taiga",
      "regions_unexplored:pine_taiga",
      "regions_unexplored:old_growth_bayou"
    ]
    wet.forEach(biome => 
    {
      event.add("forge:is_wet", biome)
    })
    
})

GTCEuServerEvents.oreVeins(event => {

  event.modify("gtceu:copper_tin_vein", vein => {
      //vein.clusterSize(120)
      vein.weight(15)
  })

  const veins = new Map([
    /*OVERWORLD*/
    ["#forge:is_cold", 
      [
        "cassiterite_vein", //Tin
        "galena_vein", // Lead
        "lapis_vein", // Lapiz
        "olivine_vein" // Olivine
      ]
    ],
    ["#forge:is_hot",
      [
        "copper_vein",
        "nickel_vein"
      ]
    ],
    ["#forge:is_mountain",
      [
        "iron_vein",
        "sapphire_vein",
        "diamond_vein"
      ]
    ],
    ["#forge:is_wet",
      [
        "coal_vein",
        "garnet_vein"
      ]
    ],
    ["#forge:is_dry",
      [
        "magnetite_vein_ow",
        "garnet_tin_vein",
        "manganese_vein_ow"
      ]
    ],
    ["#forge:is_plains",
      [
        "redstone_vein_ow"
      ]
    ],
    ["#forge:is_plateau",
      [
        "mica_vein"
      ]
    ],
    ["#forge:is_water",
      [
        "apatite_vein",
        "salts_vein"
      ]
    ],
    ["#forge:is_sandy",
      [
        "oilsands_vein",
        "lubricant_vein",
        "mineral_sand_vein"
      ]
    ],
    /*NETHER*/
    ["minecraft:nether_wastes",
      [
        "nether_quartz_vein",
        "certus_quartz"
      ]
    ],
    ["minecraft:crimson_forest",
      [
        "banded_iron_vein",
        "molybdenum_vein"
      ]
    ],
    ["minecraft:warped_forest",
      [
        "monazite_vein",
        "beryllium_vein"
      ]
    ]
  ]);
  
  veins.forEach((names, type) => {
    names.forEach(name => 
    {
        event.modify("gtceu:" + name, vein => 
        {
          vein.biomes(type)
        })
    })
    
  });

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
    event.modify("gtceu:manganese_vein", vein => {
        vein.biomes("minecraft:basalt_deltas")
    })
})