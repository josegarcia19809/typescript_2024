import {StateCreator} from "zustand";
import {Recipe} from "../types";
import {createRecipeSlice, RecipesSlicesType} from "./recipeSlice.ts";
import {createNotificationSlice, NotificationSliceType} from "./notificationSlice.ts";

export type FavoritesSliceType = {
    favorites: Recipe[];
    handleClickFavorite: (recipe: Recipe) => void;
    favoriteExists: (id: Recipe['idDrink']) => boolean;
    loadFromLocalStorage: () => void;
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType & RecipesSlicesType & NotificationSliceType, [], [], FavoritesSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe: Recipe) => {
        if (get().favoriteExists(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink),
            }))
            createNotificationSlice(set, get, api).showNotification({
                text: "Se eliminó de favoritos",
                error: false
            });
        } else {
            set({
                favorites: [...get().favorites, recipe]
            });
            createNotificationSlice(set, get, api).showNotification({
                text: "Se agregó a favoritos",
                error: false
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