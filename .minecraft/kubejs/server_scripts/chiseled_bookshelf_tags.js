ServerEvents.tags('item', event => {

    const books = 
    [
        'voltaic:guidebook',

        'cookingforblockheads:crafting_book',
        'cookingforblockheads:recipe_book',
        'cookingforblockheads:no_filter_edition',
        'solringopie:food_book',

        'forestry:foresters_manual'
    ]
    
    books.forEach(guide => 
    {
        event.add('minecraft:bookshelf_books', guide);
    })
})