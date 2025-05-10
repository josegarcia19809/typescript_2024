import {StateCreator} from "zustand";

type Category = {}

export type RecipesSlicesType = {
    categories: Category[];
}
export const createRecipeSlice: StateCreator<RecipesSlicesType> = () => ({
    categories: []
})