import {StateCreator} from "zustand";
import {Recipe} from "../types";
import {createRecipeSlice, RecipesSlicesType} from "./recipeSlice.ts";

export type FavoritesSliceType = {
    favorites: Recipe[];
    handleClickFavorite: (recipe: Recipe) => void;
    favoriteExists: (id: Recipe['idDrink']) => boolean;
    loadFromLocalStorage: () => void;
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
        createRecipeSlice(set, get, api).closeModal();
        localStorage.setItem("favorites", JSON.stringify(get().favorites));
    },
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromLocalStorage: () => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            set({
                favorites: JSON.parse(storedFavorites)
            })
        }
    }
})