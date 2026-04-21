ServerEvents.recipes(event => {

    event.remove({id: "createmetalwork:create/compat/compacting/cast_iron_ingot_from_compacting_heated_molten_createbigcannons"});

    event.remove({id: "createbigcannons:compacting/iron_to_cast_iron_ingot"});

    event.remove({id: 'createmetalwork:create/compat/compacting/cast_iron_ingot_from_compacting_heated_molten_iron'});
})