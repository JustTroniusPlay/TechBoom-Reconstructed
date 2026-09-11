ServerEvents.recipes(event => {

    event.replaceInput({id:"railcraft:tunnel_bore"},
        "#forge:storage_blocks/steel",
        "minecraft:iron_block"
    )
    event.replaceInput({id:"railcraft:bronze_tunnel_bore_head"},
        "#forge:ingots/steel",
        "minecraft:iron_ingot"
    )
    
})