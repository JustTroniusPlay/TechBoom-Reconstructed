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