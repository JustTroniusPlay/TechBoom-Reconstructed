ServerEvents.recipes(event => {
  
  event.remove({id: "immersiveengineering:crafting/blastbrick"});
  event.shaped(
  Item.of('immersiveengineering:blastbrick', 3), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'tconstruct:scorched_bricks',
    B: 'crusty_chunks:blast_furnace_brick',  //arg 3: the mapping object
    C: 'gtceu:invar_frame'
  }
)

  event.remove({id: "railcraft:blast_furnace_bricks"});
  event.shaped(
  Item.of('railcraft:blast_furnace_bricks', 18), // arg 1: output
  [
    'ABA',
    'DCD', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    B: 'gtceu:heatproof_machine_casing',
    A: 'immersiveengineering:blastbrick',  //arg 3: the mapping object
    C: 'create:blaze_burner',
    D: 'gtceu:firebricks'
  }
)
})