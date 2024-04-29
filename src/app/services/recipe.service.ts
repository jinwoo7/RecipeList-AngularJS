import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Recipe } from '../models/recipe.model';

@Injectable()
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Tomatoe Basil soup',
      'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a second test',
      'https://www.eatingwell.com/thmb/yMc-omrZge4WvdofEtjNWSVHG10=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Chicken-piccata-casserole-3x2-167-f44730f489cc4b9493547de1c76a3b93.jpg',
      [new Ingredient('Buns', 3), new Ingredient('Tomatoes', 6)]
    ),
  ];

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredient(ingredients);
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
