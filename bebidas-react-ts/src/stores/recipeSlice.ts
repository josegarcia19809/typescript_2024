import {StateCreator} from "zustand";
import {getCategories, getRecipeById, getRecipes} from "../services/RecipeService.ts";
import type {Categories, Drink, Drinks, Recipe, SearchFilter} from "../types";
import {FavoritesSliceType} from "./favoritesSlice.ts";

export type RecipesSlicesType = {
    categories: Categories;
    drinks: Drinks;
    selectedRecipe: Recipe;
    modal: boolean;
    fetchCategories: () => Promise<void>;
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>;
    selectRecipe: (id: Drink['idDrink']) => Promise<void>;
    closeModal: () => void;
}
export const createRecipeSlice: StateCreator<RecipesSlicesType & FavoritesSliceType, [],[], RecipesSlicesType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    selectedRecipe: {} as Recipe,
    modal: false,
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
        set({
            selectedRecipe,
            modal: true
        });
    },
    closeModal: () => set({
        modal: false,
        selectedRecipe: {} as Recipe,
    })
})