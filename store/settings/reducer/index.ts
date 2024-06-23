import { createReducer } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit/src";
import { SettingsState, Theme } from "@/store/settings/types";

export const setTheme = createAction<Theme, "settings/setTheme">("settings/setTheme");

const settingsReducer = createReducer<SettingsState>({ theme: Theme.dark }, (builder) => {
    builder.addCase(setTheme, (state, action) => {
        state.theme = action.payload;
    });
});

export default settingsReducer;
