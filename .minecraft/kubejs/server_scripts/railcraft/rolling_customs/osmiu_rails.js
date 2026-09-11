ServerEvents.recipes(event => {

    event.custom({
    "type": "railcraft:rolling",
    "key": {
        "a": {
        "tag": "forge:ingots/osmium"
        },
        "b": {
        "tag": "forge:ingots/osmium"
        }
    },
    "pattern": [
        "a b",
        "a b",
        "a b"
    ],
    "result": {
        "count": 12,
        "item": "railcraft:standard_rail"
    }
    });
})