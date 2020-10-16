const recipeScraper = require('recipe-scraper');

async function someAsyncFunc() {

let recipe = await recipeScraper("https://www.allrecipes.com/recipe/20334/banana-pancakes-i/?internalSource=hub%20recipe&referringContentType=Search&clickId=cardslot%206")


recipeScraper("https://www.allrecipes.com/recipe/20334/banana-pancakes-i/?internalSource=hub%20recipe&referringContentType=Search&clickId=cardslot%206")
.then(recipe => {
    console.log(recipe)
    if(recipe.ok){
        return recipe.json()
    }
    // do something with recipe
    console.log(recipe)
  }).catch(error => {
      console.error(err)
    // do something with error
  });

}