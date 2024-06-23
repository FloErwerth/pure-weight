import { AppState } from "@/store";
import { createSelector } from "@reduxjs/toolkit";

export const getSettings = (state: AppState) => state.settings;

export const getTheme = createSelector([getSettings], ({ theme }) => theme);
