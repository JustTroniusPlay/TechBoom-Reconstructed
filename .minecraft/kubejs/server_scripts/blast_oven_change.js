ServerEvents.recipes(event => {
  
  event.remove({id: "immersiveengineering:crafting/blastbrick"});
    event.shaped(
  Item.of('immersiveengineering:blastbrick', 6), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'minecraft:nether_bricks',
    B: 'gtceu:firebricks',  //arg 3: the mapping object
    C: 'gtceu:invar_frame'
  }
)


    event.remove({id: "railcraft:blast_furnace_bricks"});
    event.shaped(
  Item.of('railcraft:blast_furnace_bricks', 6), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'tconstruct:scorched_brick',
    B: 'immersiveengineering:blastbrick',  //arg 3: the mapping object
    C: 'create:blaze_burner'
  }
)
})