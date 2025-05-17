import {StateCreator} from "zustand";
import {getCategories} from "../services/RecipeService.ts";
import type {Categories} from "../types";

export type RecipesSlicesType = {
    categories: Categories
    fetchCategories: () => Promise<void>;
}
export const createRecipeSlice: StateCreator<RecipesSlicesType> = (set) => ({
    categories: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories();
        set({categories});
    }
})