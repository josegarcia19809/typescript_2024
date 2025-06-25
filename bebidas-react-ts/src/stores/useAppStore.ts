import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {createRecipeSlice, RecipesSlicesType} from "./recipeSlice.ts";
import {FavoritesSliceType, createFavoritesSlice} from "./favoritesSlice.ts";
import {NotificationSliceType, createNotificationSlice} from "./notificationSlice.ts";


export const useAppStore = create<RecipesSlicesType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
})))