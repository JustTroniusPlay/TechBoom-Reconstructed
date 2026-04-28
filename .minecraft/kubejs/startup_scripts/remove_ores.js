WorldgenEvents.remove(event => {

    let ore_ids = 
    [
        "tfmg:lead_ore",
        "crusty_chunks:lead_ore",
        "crusty_chunks:deepslate_lead_ore",
        "createnuclear:lead_ore",
        "railcraft:lead_ore",
        "railcraft:deepslate_lead_ore",
        "electrodynamics:orelead",
        "electrodynamics:deepslateorelead",

        "railcraft:tin_ore",
        "railcraft:deepslate_tin_ore",
        "electrodynamics:oretin",
        "electrodynamics:deepslateoretin",

        "crusty_chunks:nickel_ore",
        "railcraft:nickel_ore",
        "railcraft:deepslate_nickel_ore",
        "tfmg:nickel_ore",
        "tfmg:deepslate_nickel_ore",

        "crusty_chunks:zinc_ore",
        "railcraft:deepslate_zinc_ore",
        "railcraft:zinc_ore",

        "electrodynamics:oresilver",
        "electrodynamics:deepslateoresilver",
        "railcraft:silver_ore",
        "railcraft:deepslate_silver_ore",

        "crusty_chunks:uranium_ore",
        "createnuclear:deepslate_uranium_ore",
        "createnuclear:uranium_ore",
        "electrodynamics:deepslateoreuranium",
        "electrodynamics:oreuranium",

        "railcraft:deepslate_sulfur_ore",
        "railcraft:sulfur_ore",

    ];

    event.removeOres(props => 
    {
        props.blocks = ore_ids
    });

})