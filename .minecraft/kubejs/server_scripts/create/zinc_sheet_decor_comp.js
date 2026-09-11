ServerEvents.recipes(event => {

    event.replaceInput({input: "createdeco:zinc_sheet"},
        "createdeco:zinc_sheet",
        '#forge:plates/zinc'
    );
    event.replaceOutput({output: "createdeco:zinc_sheet"},
        "createdeco:zinc_sheet",
        '#forge:plates/zinc'
    );
})