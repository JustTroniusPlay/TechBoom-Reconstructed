ServerEvents.recipes(event => {
  
   event.recipes.gtceu.compressor('techboom:compressed_greg_clay')
   .itemInputs('1x gtceu:clay_dust')
   .itemOutputs('1x gtceu:compressed_clay')
   .duration(60)
   .EUt(1)
  
   event.recipes.gtceu.assembler('techboom:greg_assembler_coke')
    .itemInputs(
        'gtceu:clay_dust',
        '#forge:sand'
        )
    .itemOutputs('gtceu:compressed_coke_clay')
    .duration(40)
    .EUt(32)
})