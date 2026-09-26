ServerEvents.recipes(event => {

  event.remove({id: "crusty_chunks:blast_clay_recipe"});
  event.shapeless(
  Item.of('crusty_chunks:blast_clay', 4),
  [
    ['gtceu:compressed_fireclay','immersivegeology:raw_fire_clay'],
    ['gtceu:netherrack_dust','create:cinder_flour'],
    'minecraft:blaze_powder'
  ])

})