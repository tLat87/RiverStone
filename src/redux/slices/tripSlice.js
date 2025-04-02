// src/redux/tripSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    trips: [],
};

const tripSlice = createSlice({
    name: 'trip',
    initialState,
    reducers: {
        addTrip: (state, action) => {
            state.trips.push(action.payload); // Добавляем новый трип в массив
        },
        removeTrip: (state, action) => {
            // Удаляем trip по id
            state.trips = state.trips.filter(trip => trip.id !== action.payload);
        },
    },
});

export const { addTrip, removeTrip } = tripSlice.actions;

export default tripSlice.reducer;
