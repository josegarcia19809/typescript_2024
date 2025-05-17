import {StateCreator} from "zustand";
import {getCategories} from "../services/RecipeService.ts";

type Category = {}

export type RecipesSlicesType = {
    categories: Category[];
    fetchCategories: () => Promise<void>;
}
export const createRecipeSlice: StateCreator<RecipesSlicesType> = () => ({
    categories: [],
    fetchCategories: async () => {
        getCategories()
    }
})