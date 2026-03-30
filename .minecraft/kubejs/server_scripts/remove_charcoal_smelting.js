ServerEvents.recipes(event => {

    event.remove({id: "integrateddynamics:blasting/menril_log_coal"});
    event.remove({id: "integrateddynamics:blasting/menril_log_filled_coal"});
    event.remove({id: "integrateddynamics:smelting/menril_log_filled_coal"});
    event.remove({id: "integrateddynamics:smelting/menril_log_coal"});

})
