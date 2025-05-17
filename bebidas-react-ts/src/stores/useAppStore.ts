import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {createRecipeSlice, RecipesSlicesType} from "./recipeSlice.ts";


export const useAppStore = create<RecipesSlicesType>()(devtools((...a) => ({
    ...createRecipeSlice(...a)
})))