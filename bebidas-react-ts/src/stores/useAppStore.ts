import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {createRecipeSlice, RecipesSlicesType} from "./recipeSlice.ts";
import {FavoritesSliceType, createFavoritesSlice} from "./favoritesSlice.ts";


export const useAppStore = create<RecipesSlicesType & FavoritesSliceType>()(devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),
})))