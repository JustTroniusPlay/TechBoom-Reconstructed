ServerEvents.highPriorityData(event => {
    
    let bottling_crystal = (
      liquid_name, liquid_amount,  
      material,
      result_count, 
      name_rec) =>
      {
        event.addJson(
        name_rec,
        {
          "type": "immersiveengineering:bottling_machine",
          "fluid": {"amount": liquid_amount,"tag": liquid_name},
          "inputs": [
            {"item": "ae2:charged_certus_quartz_crystal"},
            {"item": material},
          ],
            "results": 
              [{"item": "ae2:fluix_crystal", "count": result_count}]
        }
      )
    }
    
    bottling_crystal(
      "forge:redstone_acid", 4000, 
      "minecraft:quartz",
      4,
      'techboom:recipes/fluix_immersive'
      )
    
    bottling_crystal(
      "minecraft:water", 8000,
      "ae2:sky_dust",
      1,
      'techboom:recipes/fluix_immersive_skydust'
    )
    
    bottling_crystal(
      "minecraft:water", 2000,
      "create:rose_quartz",
      4,
      'techboom:recipes/fluix_immersive_rose'
    )
    
    bottling_crystal(
      "minecraft:water", 1000,
      "ae2:fluix_dust",
      1,
      'techboom:recipes/fluix_immersive_restore'
    )
})