ServerEvents.recipes(event => {

    event.remove({output: "create:brass_casing"});
    event.custom(
    {
    "type": "create:item_application",
		"ingredients":[
			{"tag": "forge:treated_wood"},
			{"tag": "forge:ingots/brass"}],
		"results": [
			{"item": "create:brass_casing"}]
	})
})