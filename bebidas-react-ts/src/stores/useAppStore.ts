import {create} from "zustand";
import {createRecipeSlice, RecipesSlicesType} from "./recipeSlice.ts";


export const useAppStore = create<RecipesSlicesType>((...a) => ({
    ...createRecipeSlice(...a)
}))