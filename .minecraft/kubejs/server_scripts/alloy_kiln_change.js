ServerEvents.recipes(event => {

    event.remove({id: "immersiveengineering:crafting/alloybrick"});
    event.remove({id: "createaddition:compat/immersiveengineering/item_application/kiln_brick"});
    
    event.shaped(
  Item.of('immersiveengineering:alloybrick', 2), // arg 1: output
  [
    ' A ',
    'BCB', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'thermal:bronze_ingot',
    B: 'minecraft:brick',  //arg 3: the mapping object
    C: '#forge:sandstone'
  }
)
    //Replace with deployer two step recipe
    event.remove({id: "createaddition:compat/immersiveengineering/item_application/kiln_brick_using_deployer"});
})