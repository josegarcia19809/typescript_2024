import {StateCreator} from "zustand";
import {getCategories, getRecipeById, getRecipes} from "../services/RecipeService.ts";
import type {Categories, Drink, Drinks, SearchFilter} from "../types";

export type RecipesSlicesType = {
    categories: Categories;
    drinks: Drinks;
    fetchCategories: () => Promise<void>;
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>;
    selectRecipe: (id: Drink['idDrink']) => Promise<void>;
}
export const createRecipeSlice: StateCreator<RecipesSlicesType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories();
        set({categories});
    },
    searchRecipes: async (filters) => {
        const drinks = await getRecipes(filters)
        set({drinks});
    },
    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipeById(id);
        console.log(selectedRecipe);
    }
})