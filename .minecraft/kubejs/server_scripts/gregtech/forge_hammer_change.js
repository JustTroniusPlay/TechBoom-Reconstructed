ServerEvents.recipes(event => {
  
  event.forEachRecipe({type: 'gtceu:forge_hammer', input: '#forge:ingots', output: '#forge:plates'}, recipe => {
    
    const json = JSON.parse(recipe.json.toString())
    let duration = (json.duration)/2
    let eut = json.tickInputs.eu[0].content
    /*console.log('<>\n| Recipe: ' + recipe.getId() + '\n| InOutPuts: ' + json.inputs.item[0].content.ingredient.tag + " --> " + json.outputs.item[0].content.ingredient.item + "\n| duration: " + duration + "\n| EUt: " + eut + "\n<>")*/
    
    try {
    
    event.recipes.gtceu.forge_hammer(recipe.getId())
    .itemInputs(InputItem.of('#' + json.inputs.item[0].content.ingredient.tag, 1)) .itemOutputs(InputItem.of(json.outputs.item[0].content.ingredient.item, 1))
    .duration(duration)
    .EUt(eut)
    
  event.remove({id: recipe.getId()});
   } catch (error) 
  {
    console.log(
      '<>\n| Recipe: ' + recipe.getId() + '\n| InOutPuts: ' + json.inputs.item[0].content.ingredient.tag + " --> " + json.outputs.item[0].content.ingredient.item + "\n| duration: " + duration + "\n| EUt: " + eut + "\n<>")
  }
  })
  
    event.recipes.gtceu.forge_hammer('techboom:gregtech_ie_plate_aliminum')
    .itemInputs('1x ' + 'immersiveengineering:ingot_aluminum') .itemOutputs('1x ' + 'immersiveengineering:plate_aluminum')
    .duration(30)
    .EUt(16)
})