ServerEvents.recipes(event => {
    
    const gunp_id = ['tacz:gunpwoder']

    gunp_id.forEach(ids => {
        event.remove({id:ids});
    })

    event.replaceInput({id: 'crusty_chunks:gunpowder_recipe'},
        "minecraft:coal",
        "minecraft:charcoal"
    )
})