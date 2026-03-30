ServerEvents.recipes(event => {

    event.remove({id: "createmetalwork:create/compat/compacting/cast_iron_ingot_from_compacting_heated_molten_createbigcannons"});
    // event.recipes.create.compacting('forge:molten_iron', 'createbigcannons:cast_iron_ingot').superheated()

    event.remove({id: "createbigcannons:compacting/iron_to_cast_iron_ingot"});
    // event.recipes.create.compacting('minecraft:iron_ingot', 'createbigcannons:cast_iron_ingot').superheated()

    event.remove({id: 'createmetalwork:create/compat/compacting/cast_iron_ingot_from_compacting_heated_molten_iron'});
})