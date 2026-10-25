ServerEvents.recipes(event => {

  event.recipes.create.mixing(
    Item.of('#forge:ingots/bronze', 4),
    [
       Item.of('#forge:ingots/copper', 3),
       '#forge:ingots/tin'
    ]
  ).heated()
  
  event.recipes.create.mixing(
    Item.of('#forge:ingots/invar', 3),
    [
       Item.of('#forge:ingots/iron', 2),
       '#forge:ingots/nickel'
    ]
  ).heated()
  
  event.recipes.create.mixing(
    Item.of('gtceu:rose_gold_ingot', 2),
    [
       Item.of('#forge:ingots/copper', 3),
       '#forge:ingots/gold'
    ]
  ).heated()
})