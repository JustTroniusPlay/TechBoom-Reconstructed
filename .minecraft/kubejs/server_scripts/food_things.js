ServerEvents.tags('item', event => {

    const fruits = event.get('forge:fruits').getObjectIds()
    const crops = /crops:(\w+)item/;
    const trees = /trees:(\w+)item/;
    const vanilla = /minecraft:(\w+)/
    
    fruits.forEach(fruit => 
        {
            const fruitStr = fruit.toString();
            let match = fruitStr.match(crops);
            if (match && match[1]) {
            const word = match[1];
            event.add('pam2food:jellysandwiches', 'pamhc2foodextended:' + word +'jellysandwichitem');
            event.add('pam2food:jellytoasts', 'pamhc2foodextended:' + word +'jellytoastitem');
            event.add('pam2food:yogurt', 'pamhc2foodextended:' + word +'yogurtitem');
            event.add('pam2food:yogurt', 'pamhc2foodcore:' + word +'yogurtitem');
            return;
            }
            
            match = fruitStr.match(trees);
            if (match && match[1]) {
            const word = match[1];
            event.add('pam2food:jellysandwiches', 'pamhc2foodextended:' + word +'jellysandwichitem');
            event.add('pam2food:jellytoasts', 'pamhc2foodextended:' + word +'jellytoastitem');
            event.add('pam2food:yogurt', 'pamhc2foodextended:' + word +'yogurtitem');
            event.add('pam2food:yogurt', 'pamhc2foodcore:' + word +'yogurtitem');
            
            event.add('pam2food:fruit_tree', 'pamhc2trees:' + word +'_sapling');
            return;
            }

            match = fruitStr.match(vanilla);
            if (match && match[1]) {
            const word = match[1];
            event.add('pam2food:jellysandwiches', 'pamhc2foodextended:' + word +'jellysandwichitem');
            event.add('pam2food:jellytoasts', 'pamhc2foodextended:' + word +'jellytoastitem');
            event.add('pam2food:jellytoasts', 'pamhc2foodcore:' + word +'jellytoastitem');
            event.add('pam2food:yogurt', 'pamhc2foodextended:' + word +'yogurtitem');
            event.add('pam2food:yogurt', 'pamhc2foodcore:' + word +'yogurtitem');

             event.add('pam2food:fruit_tree', 'pamhc2trees:' + word +'_sapling');
            return;
            }
        })

    event.add('pam2food:jellysandwiches', 'pamhc2foodextended:peanutbutterbananasandwichitem');
    event.add('pam2food:yogurt', 'pamhc2foodcore:caramelyogurtitem');
    event.add('pam2food:yogurt', 'pamhc2foodcore:yogurtitem');
    event.add('pam2food:yogurt', 'pamhc2foodcore:chocolateyogurtitem');

    const excl_food = ['chorus','pumpkin','glowberry','sweetberry']

    excl_food.forEach(food =>{

        event.add('pam2food:yogurt', 'pamhc2foodcore:' + food + 'yogurtitem');
        event.add('pam2food:yogurt', 'pamhc2foodextended:' + food + 'yogurtitem');

        event.add('pam2food:jellysandwiches', 'pamhc2foodcore:' + food + 'jellysandwichitem');
        event.add('pam2food:jellysandwiches', 'pamhc2foodextended:' + food + 'jellysandwichitem');

        event.add('pam2food:jellytoasts', 'pamhc2foodcore:' + food +'jellytoastitem');
        event.add('pam2food:jellytoasts', 'pamhc2foodextended:' + food +'jellytoastitem');

    })

    event.add('forge:grain/wheat', 'regions_unexplored:barley');
    
    
})

ServerEvents.recipes(event => {
    
    event.remove({id: "pamhc2foodcore:saltitem"});

    event.remove({id: "minecraft:wheat"});
    event.remove({id: "pamhc2foodcore:bread_dough"});
    event.remove({id: "create:splashing/wheat_flour"});
    event.remove({id: "regions_unexplored:barley_smelting"});
    event.remove({id: "regions_unexplored:barley_smoking"});
    event.remove({id: "minecraft:bread"});
    event.remove({id: "gtceu:shaped/flour_to_dough"});
    event.remove({id: "pamhc2crops:bread_grain"});
    event.remove({id: "create:crafting/appliances/dough"});
    event.replaceInput(
        {id: "create:milling/wheat"},
        "minecraft:wheat",
        '#forge:grain/wheat'
    )

    event.shapeless(
  Item.of('pamhc2trees:apple_sapling', 1), // arg 1: output
  [
    'regions_unexplored:apple_oak_sapling',
  ])

    
})