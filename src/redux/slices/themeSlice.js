import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isDark: false,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isDark = !state.isDark;
        },
        setDarkTheme: (state, action) => {
            state.isDark = action.payload;
        },
    },
});

export const { toggleTheme, setDarkTheme } = themeSlice.actions;
export default themeSlice.reducer;
