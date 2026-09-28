ServerEvents.recipes(event => {

    event.remove({id: 'create_armorer:create_workbench'});
    event.remove({id: 'immersive_armorer:workbench'});
    event.remove({id: 'tacz:gunpowder'});
})