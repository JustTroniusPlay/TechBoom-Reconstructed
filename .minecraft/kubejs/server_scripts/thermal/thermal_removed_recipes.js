ServerEvents.recipes(event => {

    event.remove({id: "thermal:machines/pyrolyzer/pyrolyzer_coal"});

    //Manual recipes for Hardened Glass
    event.remove({id: 'thermal:fire_charge/obsidian_glass_2'});
    event.remove({id: 'thermal:fire_charge/signalum_glass_2'});
    event.remove({id: 'thermal:fire_charge/enderium_glass_2'});
    event.remove({id: 'thermal:fire_charge/lumium_glass_2'});
})