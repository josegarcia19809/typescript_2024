import {create} from "zustand";
import {createRecipeSlice} from "./recipeSlice.ts";


export const useAppStore = create((...a) => ({
    ...createRecipeSlice(...a)
}))