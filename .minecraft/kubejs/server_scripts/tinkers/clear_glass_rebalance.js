ServerEvents.recipes(event => {

  event.remove({id: "tconstruct:smeltery/melting/glass/pane"});
  event.remove({id: "tconstruct:smeltery/melting/glass/sand"});
  event.remove({id: "tconstruct:smeltery/melting/glass/sand_cast"});
  event.remove({id: "tconstruct:smeltery/melting/glass/bottle"});
  event.remove({id: "tconstruct:smeltery/melting/glass/block"});

    //Sand Casts
    event.custom({
        "type": "tconstruct:melting",
    "ingredient": [
        {
            "item": "tconstruct:blank_sand_cast"
        },
        {
            "item": "tconstruct:blank_red_sand_cast"
        }
    ],
    "result": {
        "amount": 250,
        "fluid": "tconstruct:molten_glass"
    },
    "temperature": 1000,
    "time": 44
    })

    //Generaal items that smelts to glass
    event.custom({
        "type": "tconstruct:melting",
    "ingredient": {
        "tag": "minecraft:smelts_to_glass"
    },
    "result": {
        "amount": 1000,
        "fluid": "tconstruct:molten_glass"
    },
    "temperature": 1000,
    "time": 88
    })

    //Glas panes
    event.custom({
        "type": "tconstruct:melting",
    "ingredient": {
        "tag": "forge:glass_panes/silica"
    },
    "result": {
        "amount": 250,
        "fluid": "tconstruct:molten_glass"
    },
    "temperature": 1000,
    "time": 29
    })

    //Bottles
    event.custom({
        "type": "tconstruct:melting",
    "ingredient": [
        {
            "item": "minecraft:glass_bottle"
        },
        {
            "tag": "forge:bottles/splash"
        },
        {
            "tag": "forge:bottles/lingering"
        }
    ],
    "result": {
        "amount": 1000,
        "fluid": "tconstruct:molten_glass"
    },
    "temperature": 1000,
    "time": 73
    })

    //Glass blocks
    event.custom({
        "type": "tconstruct:melting",
    "ingredient": {
        "tag": "forge:glass/silica"
    },
    "result": {
        "amount": 1000,
        "fluid": "tconstruct:molten_glass"
    },
    "temperature": 1000,
    "time": 59
    })

})