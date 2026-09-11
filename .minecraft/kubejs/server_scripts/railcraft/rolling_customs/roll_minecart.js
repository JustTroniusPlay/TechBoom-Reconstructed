ServerEvents.recipes(event => {

    event.custom({
    "type": "railcraft:rolling",
    "key": {
        "a": {
        "tag": "forge:plates/iron"
        },
        "b": {
        "item": "stevescarts:component_iron_wheels"
        }
    },
    "pattern": [
        "a a",
        "aaa",
        "b b"
    ],
    "result": {
        "count": 1,
        "item": "minecraft:minecart"
    }
    });

})
