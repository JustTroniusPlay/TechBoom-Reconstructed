ServerEvents.recipes(event => {

  event.remove({id: "mekanism:cardboard_box"});
  event.shaped(
  Item.of('mekanism:cardboard_box', 1),
  [
    ' A ',
    'ABA',
    ' A '
  ],
  {
    A: 'forestry:carton',
    B: 'create:bound_cardboard_block',
  })
  
})