ServerEvents.recipes(event => {

  event.remove({id: "tconstruct:smeltery/seared/table"});
  event.shaped(
  Item.of('tconstruct:seared_table', 1), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'A A'
  ],
  {
    A: 'tconstruct:seared_brick',
    B: 'thermal:steel_plate'
  })

  event.remove({id: "tconstruct:smeltery/seared/melter"});
  event.shaped(
  Item.of('tconstruct:seared_melter', 1), // arg 1: output
  [
    '   ',
    'ABA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'tconstruct:seared_brick',
    B: '#forge:glass_panes'
  })

  event.remove({id: "tconstruct:smeltery/melting/glass/pane"});
  event.remove({id: "tconstruct:smeltery/melting/glass/sand"});
  event.remove({id: "tconstruct:smeltery/melting/glass/sand_cast"});
  event.remove({id: "tconstruct:smeltery/melting/glass/bottle"});
  event.remove({id: "tconstruct:smeltery/melting/glass/block"});

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

  event.remove({id: "tconstruct:smeltery/copper_can"});
  event.shaped(
  Item.of('tconstruct:copper_can', 3), // arg 1: output
  [
    '   ',
    'ABA', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'create:copper_sheet',
    B: '#gtceu:tools/crafting_hammers'
  })

})