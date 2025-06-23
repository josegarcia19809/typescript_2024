import {StateCreator} from "zustand";
import {Recipe} from "../types";
import {createRecipeSlice, RecipesSlicesType} from "./recipeSlice.ts";

export type FavoritesSliceType = {
    favorites: Recipe[];
    handleClickFavorite: (recipe: Recipe) => void;
    favoriteExists: (id: Recipe['idDrink']) => boolean;
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType & RecipesSlicesType, [], [], FavoritesSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe: Recipe) => {
        if (get().favoriteExists(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink),
            }))
        } else {
            set({
                favorites: [...get().favorites, recipe]
            });
        }
        createRecipeSlice(set, get, api).closeModal()
    },
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    }
})