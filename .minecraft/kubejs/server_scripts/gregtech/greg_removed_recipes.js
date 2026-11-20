ServerEvents.recipes(event => {

    event.remove({id: "gtceu:compressor/compress_plate_dust_obsidian"});
    
    event.replaceInput({id:'gtceu:shaped/steam_macerator_bronze'}, 'minecraft:diamond', ['minecraft:diamond','crusty_chunks:irongear'])
})