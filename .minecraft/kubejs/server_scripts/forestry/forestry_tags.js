ServerEvents.tags('item', event => {

  const el_tubes = 
  [
    "copper",
    "tin",
    "bronze",
    "iron",
    "gold",
    "diamond",
    "emerald",
    "apatite",
    "lapis",
    "amber",
    "blaze",
    "ender",
  ]

  el_tubes.forEach(tube => {
    event.add('techboom:forestry_tubes', 'forestry:electron_tube_' + tube);
  })

  const boards = 
  [
    "basic",
    "enhanced",
    "refined",
    "intricate"
  ]

  boards.forEach(board => {
    event.add('techboom:forestry_circuits','forestry:circuit_board_' + board)
  })
})

ServerEvents.tags('fluid', event => {

  event.add('forge:ethanol','forestry:bio_ethanol');
    
  event.add('forge:plantoil','forestry:seed_oil');
})