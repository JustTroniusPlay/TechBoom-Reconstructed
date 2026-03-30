ServerEvents.recipes(event => {

    event.remove({id: "crusty_chunks:blast_clay_recipe"});
    event.shapeless(
  Item.of('crusty_chunks:blast_clay', 4), // arg 1: output
  [
    'gtceu:compressed_fireclay',
    'gtceu:netherrack_dust',
    'minecraft:blaze_powder'
  ])
})