ServerEvents.recipes(event => {

    const andes = ['minecraft:andesite', 'gtceu:andesite_dust']
    const nugget = ['minecraft:iron_nugget', 'create:zinc_nugget']
    let nl = 1;

    andes.forEach(andesite =>
      {
        nugget.forEach(nuggets =>
          {
            event.recipes.create.mixing('create:andesite_alloy', [andes, nugget]).heated()

            event.recipes.gtceu.alloy_smelter('techboom:gtceu_andesite_alloy_' + nl)
            .itemInputs(
            '1x ' + andesite,
            '1x ' + nuggets
            )
            .itemOutputs(
            '1x create:andesite_alloy')
            .duration(30)
            .EUt(15)

            nl++;
          })
      })
})