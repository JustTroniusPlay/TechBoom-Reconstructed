ServerEvents.tags('item', event => {
  
  event.add('forge:dusts/netherrack','create:cinder_flour');
  event.add('techboom:fire_clay','gtceu:compressed_fireclay');
  event.add('techboom:fire_clay','immersivegeology:raw_fire_clay');
})

ServerEvents.recipes(event => {

  event.remove({id: "crusty_chunks:blast_clay_recipe"});
  /*event.shapeless(
  Item.of('crusty_chunks:blast_clay', 4),
  [
    ['gtceu:compressed_fireclay','immersivegeology:raw_fire_clay'],
    ['gtceu:netherrack_dust','create:cinder_flour'],
    'minecraft:blaze_powder'
  ])*/
    
  event.custom({
          "type": "immersiveengineering:bottling_machine",
          "fluid": {"amount": 250,"tag": 'minecraft:lava'},
          "inputs": [
            {"tag": "techboom:fire_clay"},
            {"tag": 'forge:dusts/netherrack'},
            {"item": 'minecraft:blaze_powder'},
          ],
            "results": 
              [{"item": "crusty_chunks:blast_clay", "count": 4}]
    
  }).id('techboom:blast_clay_ie')

})