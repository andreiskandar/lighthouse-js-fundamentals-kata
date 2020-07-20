const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for(const recipe of recipes){
    const hasItemA = (bakeryA.includes(recipe.ingredients[0]) || bakeryB.includes(recipe.ingredients[0]));
    const hasItemB = (bakeryA.includes(recipe.ingredients[1]) || bakeryB.includes(recipe.ingredients[1]));
    if(hasItemA && hasItemB)
      return recipe.name;
  }
    
}
  

// let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
// let bakeryB = ['milk', 'butter', 'cream cheese'];
// let recipes = [
//     {
//         name: 'Coconut Sponge Cake',
//         ingredients: ['coconut', 'cake base']
//     },
//     {
//         name: 'Persian Cheesecake',
//         ingredients: ['saffron', 'cream cheese']
//     },
//     {
//         name: 'Custard Surprise',
//         ingredients: ['custard', 'ground beef']
//     }
// ];

// console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));