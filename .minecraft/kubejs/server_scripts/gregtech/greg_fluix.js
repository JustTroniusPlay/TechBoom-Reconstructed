ServerEvents.recipes(event => {

    let greg_fluix = 
    (
      material,
      liquid_name, liquid_amount,
      result_amount,
      name_rec
    ) =>
    {
      event.recipes.gtceu.autoclave(name_rec)
      .itemInputs(
          '1x ' + 'ae2:charged_certus_quartz_crystal',
          '1x ' + material
          )
      .inputFluids
      (
        Fluid.of(liquid_name, liquid_amount)
      )
      .itemOutputs(
          result_amount +'x ae2:fluix_crystal')
      .duration(600)
      .EUt(32)
    }
    
    greg_fluix(
      "minecraft:quartz",
      "gtceu:redstone", 1152, 
      4,
      'techboom:fluix_gregtech'
    )
    
    greg_fluix(
      "ae2:sky_dust",
      "minecraft:water", 8000, 
      1,
      'techboom:fluix_gregtech_skydust'
    )
    
    greg_fluix(
      "create:rose_quartz",
      "minecraft:water", 2000, 
      4,
      'techboom:fluix_gregtech_rose'
    )
    
    greg_fluix(
      "ae2:fluix_dust",
      "minecraft:water", 1000, 
      1,
      'techboom:fluix_gregtech_restore'
    )
})