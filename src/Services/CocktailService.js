import margarita from './margarita.json';

export default class CocktailService {
    static  getRandomCocktail(mainIngredient){
        const drink = margarita.drinks[0];

        const ingredientsWithMeasure = [];
        var i;
        for(i = 1; i <= 15; i++) {
            var ingredientProperty = "strIngredient" + i;
            var measureProperty = "strMeasure" + i;

            if (drink[ingredientProperty] !== null) {
                ingredientsWithMeasure.push({
                    name: drink[ingredientProperty],
                    measure: drink[measureProperty]
                })
            }
        }

        return {
            name: drink.strDrink,
            thumbnail: drink.strDrinkThumb,
            instructions: drink.strInstructions.split(". "),
            ingredients: ingredientsWithMeasure,
        };
    }
}