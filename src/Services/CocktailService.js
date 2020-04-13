import margarita from './margarita.json';

export default class CocktailService {
    static  getRandomCocktail(mainIngredient){
        return margarita.drinks[0];
    }
}